---
author: eric-rochester
date: 2011-06-17 16:09:12+00:00
layout: post
slug: omeka-development-with-vagrant
title: Omeka Development with Vagrant
categories:
- Announcements
- Research and Development
---

> _For the latest information about this system, please see the [README](https://github.com/scholarslab/cookbooks/blob/master/README.mkd) file. It contains this information, plus I'll keep it up-to-date._


One of the biggest annoyances in a developer's life is managing the software required to work on several different projects. Usually, this doesn't just mean having different systems or programming languages, but having different versions of them as well. It isn't a chop-your-limb-off problem, but more a death-by-1000-paper-cuts.

One solution is [virtual machines](http://en.wikipedia.org/wiki/Virtual_machine). They promise so much: A separate machine that can get as trashy as needed, without actually messing up the sacred laptop or desktop. Unfortunately, they can also be difficult or time-consuming to set up properly, and when a developer has to do that maybe once a week or more for new projects, it adds up quickly.

Enter [Vagrant](http://vagrantup.com/). This makes defining, setting up, maintaining, and using a VM easy.

Using Vagrant, I've been working to get an out-of-the-box Omeka VM working for development. I haven't quite succeeded, but it's getting there. This involves a base box (not available yet) and a [Chef Solo cookbook](https://github.com/scholarslab/cookbooks) with instructions for setting up the VM.

Here's how to use it to create a VM environment to develop a theme, plugin, or site with Omeka. These instructions work on a Mac, but they assume only that you have access to a Terminal/console window, a text editor, and a web browser, so with the right changes, it should work on any system.


> **Note**: Some of the resources (like the base box) aren't publicly available right now. We're working on that. Watch this space for more information.




#### Get Vagrant and VirtualBox


Vagrant's written in Ruby, so assuming you have Ruby and RubyGems installed, just do this:

```
gem install vagrant
```

Getting VirtualBox is more complicated. Check [the VirtualBox website](http://www.virtualbox.org/) for how to install it.


#### Setting up the Working Directory


Once the software is installed, you'll need to set up a working directory and initialize it for Vagrant. You'll also need to download the Chef cookbooks that you'll use.

```
mkdir omeka-project
cd omeka-project
git clone https://github.com/opscode/cookbooks.git
git clone git://github.com/scholarslab/cookbooks.git slab-cookbooks
vagrant init omeka-project PATH-TO/base-centos32.box
```

The last command created a file called "Vagrantfile". (It also pointed to a file that won't exist on your system. We're working on a URL for hosting the base box. When it's available, use that URL in place of PATH-TO.) Go ahead and open it up in your favorite text editor. Vagrantfile is just Ruby, nothing scary there. We need to add a few lines. At the bottom of the file, just before the "end," insert these:

```
config.vm.provision :chef_solo do |chef|
  chef.cookbooks_path = ["cookbooks", "slab-cookbooks"]
  chef.add_recipe "omeka"
end
config.vm.forward_port('mysql', 3306, 3333)
config.vm.forward_port('apache2', 80, 8080)
```

The first four lines tell Vagrant to set up the system using [Chef Solo](http://www.opscode.com/chef/), and they tell Chef to use the cookbooks we downloaded from GitHub and to use the "omeka" recipe. The last two lines tell Vagrant to set up port forwarding so we can access the web server and database from the host machine, without needing to log onto the VM.


#### Set up Omeka


Now we're ready to set up Omeka. By default, the system assumes that your Omeka code is in a subdirectory of your working directory and that it is named "omeka." (This &mdash; and many other things &mdash; are configurable, but that's beyond the scope of this post.)

These commands will download the latest version of Omeka (as of the time I'm writing this) and change permissions on the archive directory so the web server can write to it.

```
curl -O http://omeka.org/files/omeka-1.3.2.zip
unzip omeka-1.3.2.zip
mv omeka-1.3.2 omeka
chmod -R a+rwx omeka/archive/
```


> There used to be something here about setting up your "db.ini" file. The Omeka Chef recipe now takes care of that for you.




#### Start the VM


Everything's in place. Now it's time to start the VM. From the console, just enter this command:

```
vagrant up
```

A lot of lines will scroll by. Many minutes will pass. Apache, PHP, and MySQL will be installed. When you get your prompt back, you should be ready to go.

You probably missed it, but these lines were near the beginning of all that output:

```
[default] -- mysql: 3306 => 3333 (adapter 1)
[default] -- apache2: 80 => 8080 (adapter 1)
[default] -- ssh: 22 => 2222 (adapter 1)
```

These tell how you can communicate with your newly minted VM. Since it's using port forwarding, you can pretend like you're talking to your host box, but using the ports listed above:

```
mysql -uomeka -pomeka --protocol=TCP --port=3333 omeka
open http://localhost:8080/
vagrant ssh
```


#### Finishing the Omeka Installation


Now you need to finish setting up Omeka. Just point your browser to [the Omeka instance (http://localhost:8080)
](http://localhost:8080) running on the VM and fill in the installation information like you normally would. Nothing special here.


#### Developing


The Omeka code running the site is on your host machine, in the omeka/ directory that you created above. You can put the plugins and themes that you want to use into there, and you can edit them as you like.


#### Closing Down


When you're done for the day and you want your resources back, you can just suspend the VM by calling this:

```
vagrant suspend
```

When you're done with the project and you want to destroy the VM, the database, and everything on it, give this command:

```
vagrant destroy
```


#### Next Steps, or What Can I Do Since It's Vaporware?


For you, if you're interested in this, you may want to become familiar with Vagrant by looking at their instructions for [Getting Started](http://vagrantup.com/docs/getting-started/index.html).

For me, I wrote this today in the spirit of releasing early and often, and there's lots for me to do. Here's a little of what I'm planning initially:




  * Make the base box publicly available;


  * Write a README for the cookbook and Chef metadata for the Omeka Recipe;


  * More recipes for more systems;


  * Add phpunit, phpmd, and other PHP systems to help improve code quality; and


  * Add a [Rakefile](http://rake.rubyforge.org/) with tasks for running phpunit, dumping the database, and other things.


Hopefully this will make all of our lives easier. Stay tuned.
