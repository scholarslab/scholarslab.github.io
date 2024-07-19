---
author: wayne-graham
date: 2012-03-02 11:18:36+00:00
layout: post
slug: customizing-bash
title: Customizing Bash
category: blog
tags:
- Research and Development
- code
- tutorial
---

I spend a lot of time every day looking at a terminal window, and over the last decade I had been tweaking my bash profile to make the terminal act, and look, the way I wanted it to. As a systems administrator in a former life, I had collected a bunch of "useful" scripts that would help me work on a variety of operating systems, from [Solaris](http://en.wikipedia.org/wiki/Solaris_(operating_system)), to [AIX](http://www-03.ibm.com/systems/power/software/aix/index.html), to [SGI](http://www.sgi.com/),  as well as various flavors of Linux ([CentOS](http://www.centos.org/), [Fedora](http://fedoraproject.org/), [Ubuntu](http://www.ubuntu.com/), [SUSE](http://www.suse.com/), [Gentoo](http://www.gentoo.org/), etc.). I had aliases to commands (and my common typos) to log on to servers, control various services in my local development environment, and override common commands I typed all the time (e.g. ss for rails server) in my .bashrc which was [symlinked](http://en.wikipedia.org/wiki/Symbolic_link) to my .bash_profile due to an OS X quirk. This has resulted in a really long bashrc file (nearly 2000 lines long), and I wanted to take some time to clean things and get rid of a lot of the legacy cruft that was in that file.

In my personal workflow, I try to stay in the terminal as much as I can, finding the cognitive shift from a text-based environment to a GUI rather jarring. Imagine that; I connect my MacBook Pro with its two graphics cards to a 24" monitor, yet most of my "work" is done in a terminal (I do use the graphic card for its [GPU](http://en.wikipedia.org/wiki/Graphics_processing_unit) regularly though). Since I spend so much time in the terminal, I not only wanted to get rid of the cruft, I wanted to do a bit more to make the environment look as good as this computer performs.

I had been intrigued by the [oh-my-zsh](https://github.com/robbyrussell/oh-my-zsh) approach of bundling some themes and plugins. While I have used [Zshell](http://www.zsh.org/) in the past, I never quite found the tab-completion, auto-correction, or the improvements to the scripting language compelling enough to make the move from [Bash](http://en.wikipedia.org/wiki/Bash_(Unix_shell)). However, being able to share a history across sessions and the built-in [pager and globbing features ](http://friedcpu.wordpress.com/2007/07/24/zsh-the-last-shell-youll-ever-need/)almost got me there!

Apparently other folks were in the same boat I was in. I ran across the [bash-it](https://github.com/revans/bash-it) project a few weeks ago and finally had an opportunity recently to try this out. Basically what this project does is provide a framework for you to build your own themes, plugins, and aliases for your own environment. The installation is straight-forward on OS X (and every Linux box I've tried this on):

```

git clone http://github.com/revans/bash-it.git ~/.bash_it
~/.bash_it/install.sh

```

These two lines clone the bash-it repository to a hidden directory (.bash_it) for your user account (/Users/[your user name]/.bash_it) then launches the installer script. Using hidden directories (.bash_it) hides the directory from Finder, but still gives you access to the directory with the Terminal app. The installation script backs up your current ~/.bash_profile file (if you have made any adjustments to it), then prompts you for the features you want. I answered 'some' to most of the questions in the installation script to choose which plugins and aliases you would like to enable. I don't use [emacs](http://www.gnu.org/software/emacs/tour/) or [nginx](http://wiki.nginx.org/Main) on a regular basis, and use [rvm](http://beginrescueend.com/) over [rbenv](https://github.com/sstephenson/rbenv), and it turns out the [xterm](http://en.wikipedia.org/wiki/Xterm) plugin causes some issues on OS X, so I left those out.


# Themes


The default theme is named Bobby and looks really nice. It uses [solarized](http://ethanschoonover.com/solarized) colors and had one feature I really like: multiline feedback. On one line, I know which Ruby version I have active in RVM, the server I'm on, and where I am on the system. On the second line, I know which git branch I'm on, and if there are uncommitted changes (red x if there are changes, green check if everything is committed).

[![](http://static.scholarslab.org/wp-content/uploads/2012/02/screen-300x156.png)](http://www.scholarslab.org/dh-developer/customizing-bash/attachment/screen-2/)


# Aliases


I had quite a few aliases in my .bash_profile that I had created over the years. There were, however, some nice additional aliases included in the bash-it package to shorten some typing of commands. They included some common mispellings (yes, that was on purpose); most of the git aliases I had been using anyway, some useful aliases for heroku, homebrew (yeah bup), for opening various applications like Firefox, Photoshop, and Chromium, and some nice features for [todo-txt](http://todotxt.com/).


# Fonts


This isn't something that the bash-it library deals with, but important in customizing the experience. The default font for the Terminal in OS X is [Menlo](http://9-bits.com/post/123940811/menlo-font-macosx). It's a fine system font, but can get a little difficult to read at the distance I sit from my monitor. A really popular font for developers is [Inconsolata](http://levien.com/type/myfonts/inconsolata.html). I changed my font to Inconsolata 14pt, and it has a very nice look to it.


# Terminal


In Snow Leopard, the Terminal app doesn't support 256-bit colors. Apple has updated Terminal  in Lion to support this, but I have not yet upgraded to Lion. Quite honestly, the Lion machines I have dealt with have had 'issues' getting the tools I use on a regular basis installed, and I have just not had the time to deal with upgrading yet (most of the issues involve issues with XCode's removal of [gcc](http://en.wikipedia.org/wiki/GNU_Compiler_Collection) in favor of [llvm](http://llvm.org/). There is [a good work around](https://github.com/kennethreitz/osx-gcc-installer), and I believe the issue has been resolved in recent updates to XCode).

There is, however, an awesome Terminal app replacement named [iTerm2](http://www.iterm2.com/) that has a lot of the features I want; 256-bit color support, full-screen mode, ability to split the screens, and hot keys (please don't make me click when I can type). After installing iTerm2, I can now run the tests for [prism](https://github.com/scholarslab/prism) and get all the [NyanCat rainbow ](https://github.com/mattsears/nyan-cat-formatter)awesomeness.

[![](http://static.scholarslab.org/wp-content/uploads/2012/03/tests-300x147.png)](http://www.scholarslab.org/dh-developer/customizing-bash/attachment/tests/)

After updating Terminal, installing the bash-it themes and plugins, and getting a 'better' font on my machine (and adding a few aliases back in to the ~/.bash_profile to log on to some servers), I used scp to push these files to the various server environments I work on (replace user and server):

```

scp -r ~/.bash_it user@server:~/

scp ~/.bash_profile user@server:~/.bash_profile

```

Overall, I've been happy with the move to this setup. It plays nicely with some of the other cool things I use (e.g. [pianobar](http://6xq.net/projects/pianobar/), [tmux](http://tmux.sourceforge.net/), and [vim](http://www.vim.org/)). With some cleaver key bindings, and a transparent terminal, I can actually change something on my screen and see the update in the browser without changing programs,

Next up? I think I may write either an [rsync](http://en.wikipedia.org/wiki/Rsync) script that will push any local changes to the various servers I use, or maybe even use the Dropbox client on Linux to symlink these files in, ensuring as soon as I make a change on my local development environment, they will be on the remote systems as well.
