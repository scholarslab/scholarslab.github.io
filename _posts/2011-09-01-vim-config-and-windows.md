---
author: eric-rochester
date: 2011-09-01 06:21:58+00:00
layout: post
slug: vim-config-and-windows
title: Vim Config (and Windows)
categories:
- Grad Student Research
tags:
- code
- praxis program
- vim
---

This is a set of instructions for configuring Vim for the Praxis Program. Most of it will only apply to Windows, but I've included some notes for any UNIX-like system (LINUX or Mac) at the bottom.



## Windows



The bulk of this is just downloading and installing things that aren't included by Windows or by the non-existent Windows package manager.



### Installing Everything








  * **Install [Vim](http://www.vim.org/download.php).**




  * **Install [Ruby 1.9.2](http://rubyinstaller.org/).** (You can get the [preview release here](http://rubyforge.org/frs/download.php/74977/railsinstaller-2.0.0.exe)). Make sure you click "Add Ruby executables to your path."




  * **Install [msysgit](http://code.google.com/p/msysgit/downloads/list).** Look for "Full installer for official Git." During the installation select "Git Bash Here." Later either select "Use Git Bash only" or "Run Git from the Windows Command Prompt." Finally, also select "Checkout as-is, commit Unix-style line endings."




  * **Download the Windows binary for [Exuberant CTags](http://ctags.sourceforge.net/).** It comes in a ZIP file. Open it and put `ctags58ctags.exe` (it may be display as `ctags58ctags` with type Application) into `C:Program FilesVimvim73`.




  * **Finally, download [cURL](http://curl.haxx.se/download.html).** Download the one at the bottom for "Win32 - Generic" labelled  "Win32 2000/XP binary" (it also says that it's 1.32 MB at the moment). Open and put `curl.exe`, `libcurl.dll`, `libeay32.dll`, and `libssl32.dll` into `C:Program FilesVimvim73`. 







### Vim Configuration



For this, you'll need to work from a command prompt. This may be a new experience for Windows users, but don't worry. It won't bite you, and it's easier than it may seem going in.

First in Windows 7, click on the Windows button and search for "bash." Open up the program it returns ("Git Bash").

In XP, look under the Start menu for the Git program group and select "Git Bash".

Now, open [this script](https://gist.github.com/raw/1166018/install-vimscripts-win.sh). Copy-and-paste each line into the Git Bash Console window that's open.



### Run Vim



That's it. Give it a spin.

Look under the start menu, for the "Vim 7.3" group and select "gVim." In Windows 7, you may want to pin it to your taskbar.



### Fonts



Check out [Vim GUI Font Magic](http://www.scholarslab.org/praxis-program/vim-gui-font-magic/) for instructions on how to change the font from the truly yeechy Windows default. This also has some suggestions for nicer fonts.



## UNIX (LINUX or Mac)



The process for installing this for Linux or Mac is the same. You'll want to install Vim, Git, and cURL. Chances are, they're already there.

For Mac, you'll probably want to either download the DMG file from the [MacVim](http://code.google.com/p/macvim/) project or use something like [Homebrew](http://mxcl.github.com/homebrew/) and [Xcode](http://developer.apple.com/xcode/).

For Linux, you'll probably want to just use your distribution's package manager (`sudo apt-get vim-gnome` for Ubuntu).

After that, basically the same script as above should work. You'll want to use the version [here](https://gist.github.com/raw/1166018/install-vimscripts-unix.sh), however, which is modified for UNIX.
