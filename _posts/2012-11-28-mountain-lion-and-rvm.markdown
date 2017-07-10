---
author: wsg4w
comments: true
date: 2012-11-28 11:32:30+00:00
layout: post
link: http://scholarslab.org/research-and-development/mountain-lion-and-rvm/
slug: mountain-lion-and-rvm
title: Mountain Lion and RVM
wordpress_id: 6907
categories:
- Research and Development
tags:
- os x
- ruby
- rvm
---

I recently upgraded my computer to use the latest version of OS X (Mountain Lion) and I ran in to a problem with the [rvm](https://rvm.io/) package manager. Basically I would get to the point of actually compiling the version of Ruby, and get this nasty error:


    
    
    Error running 'env CFLAGS=-I/Users/wsg4w/.rvm/usr/include LDFLAGS=-L/Users/wsg4w/.rvm/usr/lib ./configure --enable-shared --disable-install-doc --prefix=/Users/wsg4w/.rvm/rubies/ruby-1.9.3-p327', please read /Users/wsg4w/.rvm/log/ruby-1.9.3-p327/configure.log
    



After reading through the log file, I noticed that the `make` utility wasn't installed on the system. What? I installed the full version of XCode, as well as the `apple-gcc42` packages installed. Turns out Apple doesn't include these essential command-line utilities in the default installation of XCode anymore and you have to install these from within in XCode. Basically you need to get in to the XCode **Preferences** and click on the **Downloads** tab and install the **Command Line Tools**. After this, I had to reinstall all rubies I had installed:

[code lang="bash"]
rvm reinstall all --force
[/code]

After waiting a while for all the ruby versions I had on my computer to recompile, everything started working again and I could successfully compile code again!

