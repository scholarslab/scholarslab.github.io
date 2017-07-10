---
author: ncb3ka
comments: true
date: 2015-11-12 13:46:10+00:00
layout: post
link: http://scholarslab.org/grad-student-research/when-old-technology-meets-the-new-accessing-windows-95-cd-roms-through-wine/
slug: when-old-technology-meets-the-new-accessing-windows-95-cd-roms-through-wine
title: 'When Old Technology Meets The New: Accessing Windows 95 CD-ROMs through Wine'
wordpress_id: 12337
categories:
- Grad Student Research
---

Up to this point in my academic career I have worked primarily with physical books and I certainly feel most comfortable with this medium. Anything remotely technological frightens me and I’m particularly inept when it comes to simple computer issues (think: getting my computer to talk to my printer, resolving internet connectivity issues, etc.). All of this changed drastically a few weeks ago when I found myself desperately in need of an Argentine literary supplement from the 1930s for my dissertation, “The Fashioning of Jorge Luis Borges: Newspapers, Magazines, and Print Culture in Argentina (1930-1951),” which deals with the physical features of Jorge Luis Borges’s works, read through the lens of analytical bibliography and genetic criticism. I would normally InterLibrary Loan the materials, but runs of this particular periodical are very scarce (and, as a result, not circulating). That being said, while researching in Argentina this summer, I happened to purchase a book about the literary supplement in question, complete with a digital edition on CD-ROM. In my naïve state, I thought I could simply pop this disc into any PC and be able to access the files. Wrong. This was a CD-ROM for Windows 95/98 and not adequately suited for the current Windows 10!

I soon realized that I would not be able to solve this problem on my own. After firing off a round of frantic emails to recommended experts in old machines at UVa, I wandered into the Scholars’ Lab with my CD-ROM in the hopes that these experts could work their magic and help me gain access to the digitized images contained on it. We first tried simply putting the CD-ROM into a computer with the hopes that the files could easily be extracted or copied onto my machine. No such luck. There was some sort of encoding that resulted in an error message (“access denied!”) every time we clicked on the strange “.jpe” files. Word quickly spread in the Scholars’ Lab that some crazy student was trying to use a CD-ROM for Windows 95 and I met with several experts that were all excited to see the CD-ROM and give a crack at accessing its materials. One of these kind souls, Wayne Graham, was particularly interested in doing everything possible to help me. Soon after handing over the CD-ROM to Wayne, he was able to pull up the program on a PC in the Scholars’ Lab, and I proceed to jumped for joy upon seeing the following screens:

[![Screen Shot 2015-11-12 at 9.55.14 AM](http://scholarslab.org/wp-content/uploads/2015/11/Screen-Shot-2015-11-12-at-9.55.14-AM-300x209.png)](http://scholarslab.org/wp-content/uploads/2015/11/Screen-Shot-2015-11-12-at-9.55.14-AM.png)

[![Screen Shot 2015-11-12 at 9.55.19 AM](http://scholarslab.org/wp-content/uploads/2015/11/Screen-Shot-2015-11-12-at-9.55.19-AM-300x207.png)](http://scholarslab.org/wp-content/uploads/2015/11/Screen-Shot-2015-11-12-at-9.55.19-AM.png)

[![Screen Shot 2015-11-12 at 9.55.23 AM](http://scholarslab.org/wp-content/uploads/2015/11/Screen-Shot-2015-11-12-at-9.55.23-AM-300x192.png)](http://scholarslab.org/wp-content/uploads/2015/11/Screen-Shot-2015-11-12-at-9.55.23-AM.png)

Thinking we (and by “we” I mean Wayne) had found a way into the files, we click into the index (“INDICE”) and found a listing of all of the titles published in this literary journal from 1933-1934:

[![Screen Shot 2015-11-12 at 9.55.29 AM](http://scholarslab.org/wp-content/uploads/2015/11/Screen-Shot-2015-11-12-at-9.55.29-AM-300x188.png)](http://scholarslab.org/wp-content/uploads/2015/11/Screen-Shot-2015-11-12-at-9.55.29-AM.png)

YES. THIS MUST BE IT! Nope. Another dead end. When Wayne clicked on any of the above listed files, the same error message (“access denied!”) popped up. Back to the drawing board I went.

Trying not to become terribly discouraged, I shared my technological problem with a dear friend, James Ascher (Praxis Fellow 2015-2016), who immediately wanted to take a look at the CD-ROM. We talked about what Wayne had tried and he thought it might be fun to try an emulator. When he asked me to open terminal and I looked blankly at him as if he were speaking Greek, he saw this as the perfect teaching moment to walk me through all of the (complex!) steps Wayne had taken to try and get to those pesky files. James, thus, explained the basics of the command processor, Bash; I must confess that I have never felt more out of my element. I learned about simple codes like “pwd,” “cd Documents,” “ls,” and “cd ~,” among others. James had me play around with these commands for a bit until I felt comfortable enough to move in and out of directories with ease:

[![Screen Shot 2015-11-12 at 9.59.04 AM](http://scholarslab.org/wp-content/uploads/2015/11/Screen-Shot-2015-11-12-at-9.59.04-AM-300x193.png)](http://scholarslab.org/wp-content/uploads/2015/11/Screen-Shot-2015-11-12-at-9.59.04-AM.png)

He also explained how “mkdir” and “rmdir” can be useful tools, but only when used cautiously since one incorrect key stroke could remove an entire directory. While I was getting familiar with giving my computer commands, James started to run the CD-ROM on an emulator (a program that allows one computer system to behave like another) on his computer. No luck. That same error message kept popping up again! After working through several other ideas and reading through the meta-data on the files, James came to the conclusion that we should copy all of the files from the CD-ROM to the UVa BOX for storage (and then I wouldn’t have to keep bringing the disc to grounds everyday). In the process James tried the emulator a second time with the copied files on his computer and we discovered that the error message had something to do with the physical disc itself. SUCCESS! Instead of receiving an error message when he clicked on a random file, we were both presented with the following:

[![Screen Shot 2015-11-12 at 9.55.46 AM](http://scholarslab.org/wp-content/uploads/2015/11/Screen-Shot-2015-11-12-at-9.55.46-AM-237x300.png)](http://scholarslab.org/wp-content/uploads/2015/11/Screen-Shot-2015-11-12-at-9.55.46-AM.png)

The next challenge would be installing and teaching me how to emulate the program files on my own computer (i.e. the REAL challenge). My first task was to “install Homebrew” by copying the following command into Bash:

[![Screen Shot 2015-11-12 at 9.59.14 AM](http://scholarslab.org/wp-content/uploads/2015/11/Screen-Shot-2015-11-12-at-9.59.14-AM-300x53.png)](http://scholarslab.org/wp-content/uploads/2015/11/Screen-Shot-2015-11-12-at-9.59.14-AM.png)

Easy enough! I was on my own for the next set of instructions (the real test!). After brew was installed, I typed gave my computer the following command to install Wine, the emulator I would use to run the program:

[![Screen Shot 2015-11-12 at 9.59.21 AM](http://scholarslab.org/wp-content/uploads/2015/11/Screen-Shot-2015-11-12-at-9.59.21-AM-300x58.png)](http://scholarslab.org/wp-content/uploads/2015/11/Screen-Shot-2015-11-12-at-9.59.21-AM.png)

All seemed to be going according to plan and, after letting the program install completely (about an hour or so), I restarted terminal and was very excited to start my very own simulation. Unfortunately, when I typed the command to run the program files through wine, I got a NEW error message:

[![Screen Shot 2015-11-12 at 9.59.28 AM](http://scholarslab.org/wp-content/uploads/2015/11/Screen-Shot-2015-11-12-at-9.59.28-AM-300x84.png)](http://scholarslab.org/wp-content/uploads/2015/11/Screen-Shot-2015-11-12-at-9.59.28-AM.png)

NO SUCH FILE OR DIRECTORY?? I tried not to panic and, instead, went about searching various directories for the installed wine. With some guidance from James, I eventually found it in the cellar (quite an apt place for wine, right??). Having located the program, I now needed to download the text editor, Atom, to tell my computer where to find wine (and thus run the emulator):

[![Screen Shot 2015-11-12 at 9.59.36 AM](http://scholarslab.org/wp-content/uploads/2015/11/Screen-Shot-2015-11-12-at-9.59.36-AM-300x27.png)](http://scholarslab.org/wp-content/uploads/2015/11/Screen-Shot-2015-11-12-at-9.59.36-AM.png)

After completing this intermediary step (there were a few other minor hiccups along the way), I was ready to roll! With a few simple keystrokes I now had access to the entire periodical run (1933-1934) from the convenience of my very own computer. Even though the images were digitized in 1999, I was extremely impressed by their quality and the ability to zoom in and out on each and every page. Eager to share my success with Wayne (and, of course, thank him immensely for his help and patience), I dropped by the Scholars’ Lab and showed how I could now access all of the material from my very own computer. While I was typing my commands into Bash, Wayne decided to help me write myself a shortcut to make the process even quicker:

[![Screen Shot 2015-11-12 at 9.59.43 AM](http://scholarslab.org/wp-content/uploads/2015/11/Screen-Shot-2015-11-12-at-9.59.43-AM-300x20.png)](http://scholarslab.org/wp-content/uploads/2015/11/Screen-Shot-2015-11-12-at-9.59.43-AM.png)

Now all I have to do is enter my terminal and type “rms” and the entire program launches. Mission accomplished!:

[![Screen Shot 2015-11-12 at 9.55.58 AM](http://scholarslab.org/wp-content/uploads/2015/11/Screen-Shot-2015-11-12-at-9.55.58-AM-300x188.png)](http://scholarslab.org/wp-content/uploads/2015/11/Screen-Shot-2015-11-12-at-9.55.58-AM.png)

I don’t think I can thank the Scholars’ Lab enough for all of their continued help and encouragement along the way. If it weren’t for them, I wouldn’t have the ability to access these files from the convenience of my own computer and describe the fascinating changes that Borges’s early fictions take from their first publications in this periodical (1933-1934) to later inclusion in book form (1935).

[![Screen Shot 2015-11-12 at 9.56.08 AM](http://scholarslab.org/wp-content/uploads/2015/11/Screen-Shot-2015-11-12-at-9.56.08-AM-300x142.png)](http://scholarslab.org/wp-content/uploads/2015/11/Screen-Shot-2015-11-12-at-9.56.08-AM.png)
