---
author: wayne-graham
date: 2010-04-20 19:53:25+00:00
layout: post
slug: automating-omeka-deployment-with-capistrano
title: Automating Omeka Deployment with Capistrano
category: essay
tags:
- research and development
- omeka
- tutorial
---

If you've done much web development, you'll know that deploying applications can be a real pain. Typically you get some code (like Omeka), FTP it to your server, run the install, then go grab some plugins and themes and FTP them to your server. If you're a bit more sophisticated, you may have put this in to an source code management (SCM) system like [git](http://git-scm.com/), [mercurial](http://mercurial.selenic.com/), or [subversion](http://subversion.apache.org/), which then changes your workflow to editing on your local machine, committing the changes to your SCM, logging on to the command line interface for your server, running an update on the code, praying nothing breaks; if it does, you then try to roll back to a working version (you remembered to run svn info on the code before updating so you know what number to go back to). Even if everything goes swimmingly, that's a lot of steps and way more applications than I like to fool with, and since it's essentially doing the same thing over and over again, wouldn't it be nice to automate this process?   <!-- more -->

Enter [Capistrano](http://www.capify.org/index.php/Capistrano)...If you've not used this before, essentially this automates the deployment of web applications to your server environment.  It's written in Ruby, but allows you to deploy ANY type of web application (we use it for Cocoon, Rails, Java, and PHP applications in the Scholars' Lab). If you've got a larger shop, you may also take a look at a web interface called [Webistrano](http://labs.peritor.com/webistrano) which allows non-programmer types to deploy software through a web interface.

To show off the power of this software, I thought I'd write up how we use capistrano to deploy Omeka in various environments. The setup can be a little complex, but there are some good tutorials for getting started (see [Setting up a Rails Server and Deploying with Capistrano on Fedora from Scratch](http://net.tutsplus.com/tutorials/ruby/setting-up-a-rails-server-and-deploying-with-capistrano-on-fedora-from-scratch/) and the [Capistrano Getting Started](http://www.capify.org/index.php/Getting_Started)). The following code snips assume you have successfully installed capistrano and use Subversion as your SCM (if you need SVN hosting, you can start a new project on [Google Code](http://code.google.com/hosting/createProject); you can also use [Github](https://github.com/) if you declare the git scm in the code).

The first step in getting your Omeka project automated for capistrano is ensuring both the capistrano and railsless-deploy gems are installed (if you're not a ruby-ist, [gem](http://docs.rubygems.org/read/book/1) is a package manager for Ruby applications and libraries):

```
sudo gem install capistrano railsless-deploy
```

Capistrano installs a new command on your system called "capify" which sets up the boilerplate for capistrano. Just execute the capify script in your project directory:

```
cd /path/to/project/trunk
capify .
```

This will create two files, Capfile in your root directory and a config/deploy.rb. You'll need to edit the Capfile ever so slightly to add the requirement for the railsless-deploy gem. It should read as follows:

```
load 'deploy' if respond_to?(:namespace) # cap2 differentiator
# Dir['vendor/plugins/*/recipes/*.rb'].each { |plugin| load(plugin) }

require 'rubygems'
require 'railsless-deploy'
load    'config/deploy'
```

Now we just need to do some setup in the config/deploy.rb file to tell capistrano about Omeka. This is where you need to know a little about how your server is set up and you may need to slightly change your server set up in order to use capistrano. The way capistrano works is that it creates a releases directory on your path that holds "deployments" of you project. The latest version of the project is then symlinked the project directory into the releases. This allows you to very quickly undo a deployment that goes awry.

As an example, we deploy projects to /usr/local/projects, so our omeka project would get deployed to /usr/local/projects/omeka. Capistano will create a few directories in /usr/local/projects/omeka:



	
  * **releases** (timestamped directories of your application)

	
  * **shared** (for log files, SCM cache, files you don't want to be overwritten)

	
  * **current** (symlink to latest directory in the releases directory)


If you're setting up Omeka, you will need to redirect the base Directory to the "current" symlink. Here's the vhost entry we use for Omeka as an example (this is an Ubuntu server; you may need to change the log file path if you are deploying to another operating system).

```
<VirtualHost *:80>
ServerName your.server.org
DocumentRoot /usr/local/projects/omeka/current/
<Directory "/usr/local/projects/omeka/current">
Options FollowSymLinks
AllowOverride All
Order allow,deny
Allow from all
</Directory>

ErrorLog /var/log/apache2/omeka_error.log
TransferLog /var/log/apache2/omeka_access.log
</VirtualHost>
```

Now, to edit the config/deploy.rb file to set things up for automated deployments.

```
# You must always specify the application and repository for every recipe. The
# repository must be the URL of the repository you want this recipe to
# correspond to. The deploy_to path must be the path on each machine that will
# form the root of the application path.

set :application, 'omeka'
set :repository, 'http://your.svn.path/repo/trunk'

set :deploy_to, "/usr/local/projects/#{application}"
set :deploy_via, :remote_cache
set :user, 'deployer'
set :runner, user
set :run_method, :run

default_run_options[:pty] = true

ssh_options[:username] = user
ssh_options[:host_key] = 'ssh-dss'
ssh_options[:paranoid] = false

role :app, 'www.coolomekaapp.org'
role :web, 'www.coolomekaapp.org'
role :db, 'www.coolomekaapp.org'

# ===============
# Custom Tasks
# ===============
namespace :deploy do
desc 'Make sure the archives directory has the proper permissions'
task :chmod_archive_dir, :except=>{:no_release => true} do

run "chmod g+rw #{current_path}/archives"
end
desc 'Sets up the intitial db.ini config'
task :upload_database_config, :except=>{:no_release => true} do
db_config = <<-INI
[database]
host     = "your.db.host"
username = "db_user"
password = "db_password"
name     = "db_name"
prefix   = "omeka_"
;port     = ""
INI

put db_config, "#{current_path}/db.ini"

end

desc 'Move archives directory so it doesn't get overwritten during deployments'
 task :move_archive_dir, :except=>{:no_release => true} do
 run "mv #{current_path}/archives #{shared_path}"
 end

 desc 'Just svn up the directory'
 task :svn_up, :except => {:no_release => true} do
 run "svn up #{current_path}"
 end

 desc 'Link archives folder to shared directory'
 task :link_archives_dir, :except=>{:no_release => true} do
 run "cd #{current_path} && ln -snf #{shared_path}/archives archives"
 end

end

# ======================
# Task Event Hooks
# ======================

after 'deploy:symlink', 'deploy:upload_database_config', 'deploy:link_archives_dir'
after 'deploy:cold', 'deploy:chmod_archives_dir', 'deploy:move_archives_dir'
after 'deploy', 'deploy:cleanup'
```

Ok, there's a lot going on here. I'll briefly explain what's going on, but there should be enough here for you to start hacking. But let's see what tasks capistrano know about and you can call. If you are still in your project directory, just type cap -T to list all the capistrano tasks. Your output should look similar to this:

```
cap deploy                        # Deploys your project.
cap deploy:check                  # Test deployment dependencies.
cap deploy:chmod_archive_dir      # Make sure the archives directory has the ...
cap deploy:cleanup                # Clean up old releases.
cap deploy:cold                   # Deploys and starts a `cold' application.
cap deploy:migrate                # Run the migrate rake task.
cap deploy:migrations             # Deploy and run pending migrations.
cap deploy:pending                # Displays the commits since your last deploy.
cap deploy:pending:diff           # Displays the `diff' since your last deploy.
cap deploy:restart                # Restarts your application.
cap deploy:rollback               # Rolls back to a previous version and rest...
cap deploy:rollback:code          # Rolls back to the previously deployed ver...
cap deploy:setup                  # Prepares one or more servers for deployment.
cap deploy:start                  # Start the application servers.
cap deploy:stop                   # Stop the application servers.
cap deploy:symlink                # Updates the symlink to the most recently ...
cap deploy:update                 # Copies your project and updates the symlink.
cap deploy:update_code            # Copies your project to the remote servers.
cap deploy:upload                 # Copy files to the currently deployed vers...
cap deploy:upload_database_config # Sets up the intitial db.ini config
cap deploy:web:disable            # Present a maintenance page to visitors.
cap deploy:web:enable             # Makes the application web-accessible again.
cap invoke                        # Invoke a single command on the remote ser...
cap log:tail_log                  # Tail the rails log file
cap shell                         # Begin an interactive Capistrano session.

Some tasks were not listed, either because they have no description,
or because they are only used internally by other tasks. To see all
tasks, type `cap -vT'.

Extended help may be available for these tasks.
Type `cap -e taskname' to view it.
```

To use a specific capistrano task, you just type the command listed. But let's get back to the actual script and go over that briefly. Part of the installation process of Omeka requires you to reset the permissions of the archives directory. This is handled by the chmod_archive_dir. However, because of the way that capistrano deploys applications, the archives folder would get overwritten in every deployment. To get around this, we move the archives directory to the shared folder, then create a symlink from the current directory to the shared/archives directory.

There's a task to upload_database_config that you can have in your cap script (we deploy out of private repos), but if you're deploying out of a public repo, you may want to just put the db.ini file on the server in the shared directory and symlink it into the current_path. Lastly, there are times where you just need to do an "svn up" (or git pull) to update something small and not need to do a full deployment. This is where the cap deploy:svn_up helps out....guess what it does :)

Capistrano also provides task even hooks to execute specific tasks after specific events. In this script, when you do a cold deployment (when you are setting things up for the first time), the script will change the permissions on the archives directory, then move the archives directory to the shared directory. When you do a normal deploy (after the directory has gotten a proper symlink), the script will upload the database config, then symlink the archives directory and run a cleanup (keep the last 5 versions you deployed).

While there's still a bit of up-front set up to do on your server, capistrano significantly speeds up your ability to to consistently deploy software, quickly roll-back if (that changes to "when", if you write code long enough) problems occur, and reinforces a development process that involves SCM!


## Resources





	
  * [Capistrano](http://www.capify.org/index.php/Capistrano)

	
  * [Automated PHP Deployment with Capistrano](http://www.jonmaddox.com/2006/08/16/automated-php-deployment-with-capistrano/)

	
  * [Railsless-deploy](http://github.com/leehambley/railsless-deploy)

	
  * [Capistrano Tutorials](http://www.capify.org/index.php/Tutorials)


