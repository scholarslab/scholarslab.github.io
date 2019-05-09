---
author: eric-rochester
date: 2012-09-18 10:05:54+00:00
layout: post
slug: code-spelunking-with-ctags-and-vim
title: Code Spelunking with Ctags and Vim
categories:
- Research and Development
---

When I’m programming, I spend a lot of time code spelunking (_use the source, Luke!_). A lot of times, the best documentation for a system is the source code for it. Knowing how to get to important places in your code and in others’ code makes a huge difference in how productive you are and even in what you can figure out how to do.




And the most important location for any method, function, class, variable, or whatsit is where it’s defined. Usually there’s documentation near. Sometimes there is information about parameters. It’s all very useful.




For finding those places, [`CTags`](http://ctags.sourceforge.net/) is indispensable.




# What is `ctags`?




[`CTags`](http://ctags.sourceforge.net/) is program that finds the lines of code where things are defined. It knows [41 languages](http://ctags.sourceforge.net/languages.html). (And if your favorite language isn’t on the list, you can probably find another program that generates compatible tags files for it.) You run it occasionally, and it indexes your code and stores it in a file named `tags`. Your editor reads this file and helps you jump through your code.




# Installing `ctags`




The first step in using `ctags` is to install it.




## Windows




The [`ctags` page](http://ctags.sourceforge.net/) has a link to a ZIP file with a binary of `ctags` compiled for Windows. Download this and unzip it somewhere on your `%PATH%`.




## Linux




If you’re using Linux, all major distributions have a package for `ctags`. See your documentation for details.




## Mac




I’ve saved the Mac installation for last, because it’s the most complicated. You weren’t expecting that, were you?




Mac OS X comes with a program named `ctags`.




Unfortunately, it is not, in fact, Exuberant CTags, and it’s far more limited.




You can get the correct version of `ctags` using [Homebrew](http://mxcl.github.com/homebrew/):



[sourcecode language="bash"]
> brew install ctags
[/sourcecode]



Now you have to make sure that your shell finds the right version:



[sourcecode language="bash"]
> which ctags
/usr/bin/
[/sourcecode]



Well, that’s not right. Let’s rearrange our `$PATH`.



[sourcecode language="bash"]
> PATH=/usr/local/bin:$PATH
> which ctags
/usr/local/bin
[/sourcecode]



That’s better. You probably want to put that into your `~/.bash_profile` file to make sure you find the right `ctags` in the future also.




# Using `ctags` in a Text Editor




Now that `ctags` is installed, let’s put it to work. First, open up a command line or terminal or whatever you call it and change into the main directory of your project. Right now, I’m working on [NeatlineFeatures](https://github.com/scholarslab/NeatlineFeatures), so I’ll use that for this example:



[sourcecode language="bash"]
> cd ~/omeka/plugins/NeatlineFeatures/
[/sourcecode]



Now, let’s run ctags over the code base. We want to to walk through the entire directory tree. But here’s the catch: we really want it to walk over the entire [Omeka](http://omeka.org/) directory, including the Features plugin:



[sourcecode language="bash"]
> ctags -R ../..
[/sourcecode]



This runs `ctags` over everything in the Omeka directory (`../..`) and all subdirectories (`-R`).




This will take a while, and you’ll get some warnings about JavaScript files. Don’t worry about them. CTags has a few problems parsing JavaScript, but that won’t stop it from indexing the other files.




Let’s see what we have:



[sourcecode language="bash"]
> ls -lh tags
-rw-r--r--  1 err8n  staff    23M Sep 14 16:00 tags
> wc -l tags
   75917 tags
[/sourcecode]



Wow! More than 76,000 lines and 23MB. That’s a lot of indexing. But then, Omeka’s a large codebase.




What’s in the file? Let’s not worry about that right now. It’s plain text, and there is some metadata and lines detailing identifiers and files and line numbers. It’s actually a little scary, and we don’t have to worry about that anyway.




(If you’re really curious about the file format, [look at the format page](http://ctags.sourceforge.net/FORMAT).)




The tags file can be used by [a bunch of different text editors](http://ctags.sourceforge.net/tools.html). In fact, there’s more than is on that list. Here are links to integrating tags into some popular editors:






  * [OpenCTags](http://openctags.sourceforge.net/): An add-on for using tags with Crimson Editor, EditPlus, UltraEdit, and Notepad++.


  * [Emacs](http://www.gnu.org/software/emacs/emacs.html): Comes with `etags`, so it supports tags out of the box.


  * [CTags bundle](https://github.com/textmate/ctags.tmbundle): A bundle for using tags in [TextMate](http://macromates.com/).


  * [Sublime Text 2 and CTags](https://github.com/SublimeText/CTags): An add-on for using tags with [Sublime Text 2](http://www.sublimetext.com/2).




I use Vim, and it comes with support for tags files built in. The rest of this post shows about how to use tags from Vim.




# Using with Vim




First let’s start Vim from the directory containing the tags file. If you want to use gVim or MacVim, this may be different (hint: use the `:cd` command). I’ll just use the command line to start MacVim on one of the models.



[sourcecode language="bash"]
> mvim models/NeatlineFeatureTable.php
[/sourcecode]



## The Tag Stack




The main point of all this, of course, are the powerful navigation commands. Let’s see what they are.




Vim maintains a stack of locations where we’ve been. This stack starts out empty.




## Navigating Forward




When you jump to a tag, your current location is added to the stack. As you jump ahead, more locations are added to the stack. Here’s how to jump forward and add locations to the stack.




First say I want to look at the code for `Omeka_Db_Table`. I just move down to where it’s mentioned in the code and hit `Control-]`.




And I’m there. I can open up the class and look in it.




But say this doesn’t tell me what I want. I really want to look at `Zend_Db_Table`. I don’t see it, so I can’t use `Control-]`. Instead, from command mode, I type out `:tag Zend_Db_Table`.




And I’m there.




But it’s empty. I need to jump to `Zend_Db_Table_Abstract`. I just move my cursor down there and hit `Control-]`.




Say I want to know how `fetchAll` is defined. I move down there and open it up. But how else is it defined? I put my cursor on `fetchAll` and hit `Control-]`. At the bottom of the Vim window, it says tag 1 of 11 or more.




Interesting. How do I get to them?




In normal mode, I just use the command `:tselect`. Now Vim displays a list of everywhere that `fetchAll` is defined. I can select the number for which one I want, and Vim moves me there.




## Examining the Tag Stack




Now I’ve jumped several times, and I’m a little confused about where I am. How do I find myself again?




In normal mode, use the `:tags` command. Vim will print out a list of which tags you’ve jumped to and where it is.




## Navigating Backward




At this point, I want to move back to where I was. To do that, I just hit `Control-t` multiple times. Each time I do, it pops one position off the stack and moves be back to the previous tag location.




## Jumping into a new window




Of course, it would be nice to be able to see what I’m working on _and_ the tag too. Yes, I can be demanding. Fortunately, Vim can oblige me.




Unfortunately, it’s not as convenient as `Control-]`, but it’s not bad. (And creating a normal-mode map for this isn’t difficult.)




In normal mode, just give the command `:stjump [identifier]`. This splits the window, and in the new split, it jumps to the tag. If there’s more than one definition for the tag, it prompts you for which you want, just like `:tselect` does.




## Tag Navigation Cheat Sheet




So here’s what we’ve learned today:


<table >
<tbody >
<tr class="odd" >

<td style="text-align: left;" >`:tag [identifier]`
</td>

<td style="text-align: left;" >Jump to the identifier.
</td>
</tr>
<tr class="even" >

<td style="text-align: left;" >`:tags`
</td>

<td style="text-align: left;" >List the tag stack.
</td>
</tr>
<tr class="odd" >

<td style="text-align: left;" >`Control-]`
</td>

<td style="text-align: left;" >Jump to the tag under the cursor.
</td>
</tr>
<tr class="even" >

<td style="text-align: left;" >`:tselect`
</td>

<td style="text-align: left;" >Select which tag location to go to for the current tag.
</td>
</tr>
<tr class="odd" >

<td style="text-align: left;" >`Control-t`
</td>

<td style="text-align: left;" >Jump back from the current tag.
</td>
</tr>
<tr class="even" >

<td style="text-align: left;" >`:stjump [identifier]`
</td>

<td style="text-align: left;" >Jump to the identifier in a new split window.
</td>
</tr>
</tbody>
</table>


## What does it look like?





[CTags in Vim](http://vimeo.com/49681267) from [Scholars’ Lab](http://vimeo.com/scholarslab) on [Vimeo](http://vimeo.com).



> _With bonus content!_


# Next Steps




I’ve just presented the basics. Here’s some more about using tags in Vim.




## Learning More




The Vim documentation for [tags](http://vimdoc.sourceforge.net/htmldoc/tagsrch.html) lists all of the many commands Vim has for working with tags.




## Tagbar




[Tagbar](http://majutsushi.github.com/tagbar/) is a Vim plugin that shows the structure of your code for the file you’re in. It opens a side panel and displays the classes, methods, and other identifiers defined in the current file.




## Running Automatically




Finally, [Tim Pope](http://tpo.pe/) has an excellent blog post on how to integrate Git, CTags, and Vim. He also explains how to set up your git repositories to run ctags automatically whenever you commit. It also makes it easy to customize how you run ctags for each project.




I _highly_ recommend this system. It makes `ctags` even more awesome than it already is.




* * *




So let us know, what’s your favorite development productivity or code navigation tool?



