---
author: wayne-graham
date: 2012-09-24 13:31:57+00:00
layout: post
slug: omeka-capistrano-recipes
title: Omeka Capistrano Recipes
categories:
- Research and Development
tags:
- automation
- capistrano
- omeka
---

The Scholars' Lab has been working a lot with Omeka over the last several years, and in that time I've accumulated a bunch of different installations of Omeka. On [neatline.org](http://www.neatline.org) alone, there are four different Omeka containers running. If I were a glutton for punishment, I would manage these by setting up a new space on the target server, downloading Omeka, going out and grabbing the individual plugins, and setting everything up by hand. There are a few downfalls in this, upgrades are a pain, you can forget what you did from one instance to the next, and it's horribly inefficient. And, if you've ever spent more than a few minutes with me, you'll know how much I despise inefficiency... 

We use [capistrano](https://github.com/capistrano/capistrano/wiki) to automate deployments for our faculty projects, so that was the tool I was using. Basically I have a directory on my computer named `deployments` that contain sub-directories for all the projects I am responsible for deploying. In it are the capistrano scripts I use to manage software deployments on those servers. The actual code lives in various git repositories, and these directories literally just have capistrano scripts for deploying software in them. The basic layout looks like this:

[code lang="bash"]
$ ls -l | awk '{print $9}'

Gemfile
Gemfile.lock
falmouth.lib.virginia.edu
henshaw.neatline.org
hotchkiss.neatline.org
lovecraft.neatline.org
neatline.org
sandbox.neatline.org 
[/code]

When I need to deploy a new release, I just go in to that  project's directory and use `cap deploy` and not worry about much. 

Most of those directories had copy-n-pasted code from each other, with the main difference in them being the name of the application (e.g. henshaw, hotchkiss, lovecraft, etc.). With that level of copy-n-pasting, things are sure to go south eventually, so over the weekend I abstracted these tasks out in to a gem and pushed the [omeka-recipes](https://rubygems.org/gems/omeka-recipes) gem up to rubygems. 

There are some useful tasks (like backing up your database and tailing your log files), as well as helping walk through the setup of a new instance. Basically you'll need `ssh` access to the remote server, know the path to deploy the software to, and a MySQL admin password. The `cap setup` task will generate the db.ini file you'll need on the remote server; no need to learn vim, nano, or emacs! 

There is some [documentation](http://rubydoc.info/gems/omeka-recipes/0.2.0/frames), and there's a bit more work to do getting this ready for Omeka 2.0 (namely the shift in the naming of the 'archives' directory), but if you use Omeka at all, check it out. As always, you can leave an issue on the [issue tracker](https://github.com/waynegraham/omeka-recipes/issues), and I'd love pull requests.
