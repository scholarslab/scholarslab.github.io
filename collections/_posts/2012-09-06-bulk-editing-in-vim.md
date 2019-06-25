---
author: eric-rochester
date: 2012-09-06 08:57:25+00:00
layout: post
slug: bulk-editing-in-vim
title: Bulk Editing in Vim
categories:
- Research and Development
---

I regularly have to perform a short sequence of small, regular edits on a collection of files. If you work with computers long enough, that’s something everyone has to do.




Often I reach for a scripting language. But other times the edit is so small that even `sed` seems like overkill. Or maybe the edits are just the wrong kind of complexity to capture easily with code. My fingers may be able to make the changes quickly and repetitively, but when I try to break down how a script would do it, I get a headache.




Over the years, I’ve been confronted with problems like this often enough that I’ve developed a well-tested approach using [Vim](http://www.vim.org/). It’s become one of those tools that I don’t really think much about: I just use it from time to time, and it makes my life easier.




But not long ago, [Jeremy](http://clioweb.org/) mentioned that he had a small change to make to a series of files in [NeatlineMaps](https://github.com/scholarslab/NeatlineMaps). Usually, he switches to TextMate for tasks like this, but he agreed that to let me show him how I would handle this in Vim.




Heh.




Whenever I try to explain to someone how to do something in Vim, I invariably sound like, Then hit _escape_, _4h_, _0_, now type whatever. It’s kind of funny, but it’s not a lot of fun, either for me or for the person I’m shouting keystrokes at.




Hopefully, this will make a better blog post.




Here’s what we did:




# The Problem




Jeremy had tried to add some Vim [mode lines](http://vim.wikia.com/wiki/Modeline_magic) to some PHP files. These are comments at the top of a file for setting options in Vim. Currently, they look [like this](https://github.com/scholarslab/NeatlineMaps/blob/master/NeatlineMapsPlugin.php#L2):



```
/* vim: set expandtab tabstop=4 shiftwidth=4 softtabstop=4: */
```



But they weren’t working. It turned out that what should have been a colon near the end of the line was actually a semicolon, and once that was fixed, the settings worked fine.




That was all right. But he needed to make that change on almost every file in NeatlineMaps.




# The Solution




The process I showed him has four parts. Let’s break them down.




## Part One: `:args`




First, we have to load the files to process. When you open Vim from the command-line and pass in files there, the file names are stored in the [argument list](http://vimdoc.sourceforge.net/htmldoc/editing.html#:args). You can access the argument list inside Vim&mdash;either to see what files are in it or to set the files it contains&mdash;using the `:args` command:



```
:args **/*.php
```



This searches for all the files in the `NeatlineMaps` directory and subdirectories that have a `.php` extension. These files are loaded into the argument list.




What’s nice about the argument list is how easily you can navigate over it using a few simple commands:






  * `:rewind` Moves to the beginning of the list.


  * `:next` Moves to the next file in the list.


  * `:Next` Moves to the previous file in the list.


  * `:previous` Also moves to the previous file in the list.


  * `:last` Moves to the last file in the list.




All these can also be abbreviated. So for example, you can use `:n` and `:N` to move forward and backward. Have a `:n` mapped to control-n, so navigating forward is especially easy.




## Part Two: `q`




With the first file loaded into the buffer, now we make the change that we want to make on all files and record the keystrokes into a buffer. For this we chose the _t_ buffer. There’s no reason for that particular letter: It was just the first one I thought of:



```
qt
```



Now the bottom of the Vim screen should say `recording`. At this point, we go ahead and make the edit.




## Part Three: `:s/../../e`




What I had Jeremy do was slightly more complicated and precise, but basically, I had him do this:



```
:%s/softtabstop=4;/softtabstop=4:/e
```



This looks over the whole file (`%`) and performs a search-and-replace (`s`). It searches for the string _softtabstop=4;_ and replaces it with the same string, except it used a colon (_softtabstop=4:_). The `e` at the end just means that it should ignore errors and keep chugging. That way, if a file does not have a modline (and not all did), it would keep going.




Once we’ve made the change, let’s save it and move to the next file.



```
:wn
```



This combines the _w_rite command and the _n_ext command (from above).




That’s all we need to do for each file. Now hit _q_ to stop recording:



```
q
```



You can replay that now by pressing `@t`. Jeremy and I did that a few times to make sure it was doing what we wanted and wasn’t chewing up the files and spitting the pieces back in our faces.




## Part Four: _n_`@`




Once you’re sure that everything’s safe, change the rest of the files. Most commands in Vim can take a numerical prefix, which tells Vim how many times to perform the command. For example, _j_ moves down one line, and _10j_ moves down 10 lines.




In this case, tell it to play the recorded keystrokes 100 times:



```
100@t
```



And Vim goes to work. It will stop on the first error, which will happen when `:next` reached the last file in the argument list and isn’t able to move any further.




# Solved




Well, looking back, this particular problem would have been perfect for `sed`. But sometimes that requires looking at documentation.




And that’s it. It seems more complicated than it actually is, and once you’ve been through it a few times, you can do it very quickly. Vim’s ability to record and replay keystrokes, combined with its commands to navigate in and across files, make an incredibly powerful combination.




To show how easy this process is, here is a screencast of me walking through the problem outlined above on NeatlineMaps code. You may want to [click through](https://vimeo.com/48900819) to a larger version, more readable version of the video.





[Bulk Editing Vim](http://vimeo.com/48900819) from [Eric Rochester](http://vimeo.com/user2087066) on [Vimeo](http://vimeo.com).




