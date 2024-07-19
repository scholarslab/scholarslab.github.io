---
author: ethan-reed
date: 2015-07-06 10:00:38+00:00
layout: post
slug: physical-computing-at-dhsi-2015
title: Physical Computing at DHSI 2015
category: blog
tags:
- 3d printing
- electronics
- makerspace
---

In the beginning of June I had the pleasure of attending the [Digital Humanities Summer Institute](http://dhsi.org/) at the University of Victoria for the second year running. My experience this year was so good that I wanted to write a quick post sharing some of the highlights – so if you’re thinking of going to DHSI, are a regular interested in a class they’ve never taken, or have never heard of it and want to learn more, I hope this post sheds some light on the kinds of things people get up to at one of my favorite scholarly events of the year (and why I want to go again next summer)!




I spent my week in Victoria in a class called [“Physical Computing and Desktop Fabrication,”](http://dhsi.org/courses.php) taught by the folks at [UVic’s Maker Lab](http://maker.uvic.ca/): Nina Belojevic, Devon Elliot, Shaun Macpherson, and Jentery Sayers. If you’ve read any of my other posts or talked to me about the kind of stuff I do in the Makerspace here at UVA,  I’ve taken a large number of cues from these folks in the past year as I’ve been learning more about critical making and physical computing. 




Meeting every day for five days in a row, the class covered a huge range of things that fall generally under the heading “physical computing,” which I think of broadly as just the interactions between computers and the physical world.  We worked with [Arduinos](https://www.arduino.cc/), wearables, a 3D printer ([Replicator 2](https://store.makerbot.com/replicator2.html)), a laser cutter ([Epilog](https://www.epiloglaser.com/)), [SketchUp](http://www.sketchup.com/), [photogrammetry](http://www.agisoft.com/), and more. If you are interested in exploring the full inventory of what’s available at the Maker Lab, you can [find that inventory here as a post](http://maker.uvic.ca/inventory/), or [here as a spreadsheet](https://docs.google.com/spreadsheets/d/1Hran2uky2vnXbjTfQ0RPsLhOmaVYKS2cY3X6Q9qMeSo/edit#gid=220944623). These technologies are capable of pretty amazing stuff - examples shared with us ranged from [interactive paintings](http://technolojie.com/pu-gong-ying-tu-dandelion-painting/), [wooden mirrors](https://www.youtube.com/watch?v=BZysu9QcceM), and [plants that tell you when they are thirsty](http://www.botanicalls.com/), to [technologies at CanAssist at UVic](http://www.canassist.ca/EN/main/programs/video-gallery.html) impacting the lives of those with disabilities.  If you want to check out the whole week’s schedule for a more detailed account of what went on (along with more of the examples shared by our instructors) check out the index at [the class’s GitHub page](https://github.com/uvicmakerlab/dhsi2015/blob/master/index.md).




Along with trying out hardware, software, and discussing the larger implications of this kind of work, we also had a specific project for the week: to make a box. More specifically, our mission (quoted here from [our class GitHub index](https://github.com/uvicmakerlab/dhsi2015/blob/master/index.md#theme-prototyping-a-box-material--metaphor)) was to “prototype your own box and explain how it operates both as a material and metaphor.” A deceptively simple task! But one that ended up producing awesome results - if you poke around on [Twitter and #physcomp](https://twitter.com/hashtag/physcomp) or [some pictures Jentery posted from the class](http://maker.uvic.ca/dhsi2015/), you can see some of the amazing things others made over the course of the week.




So what did I make? I called it… the gloom box.




[![IMG_1878](http://static.scholarslab.org/wp-content/uploads/2015/07/IMG_1878-300x225.jpg)](http://static.scholarslab.org/wp-content/uploads/2015/07/IMG_1878-e1436181481295.jpg)




So what is the box and what does it do? Like our prompt for the week, the gloom box is simple on the outside: it is a small box with a sad face looking helplessly at a button and an LCD screen. The LCD screen displays the words “BATTERY LIFE” with a large number underneath. When you push the button, the number under “BATTERY LIFE” decreases, and when it hits zero the whole thing turns off - that’s it. The gloom box has no other functions.




Before getting into why I made this thing (box as metaphor), a little more info on the thing itself (box as material).




[![IMG_1864](http://static.scholarslab.org/wp-content/uploads/2015/07/IMG_1864-e1436181168548-225x300.jpg)](http://static.scholarslab.org/wp-content/uploads/2015/07/IMG_1864-e1436181449114.jpg)




The box was cut using an [Epilog laser cutter](https://www.epiloglaser.com/) from a large sheet of baltic birch. I made a simple frame design for the six sides of the box using [BoxMaker](http://boxmaker.connectionlab.org/), then Nina and Shaun worked some magic to make it the correct dimensions for what I needed to put inside. The image on the top was something I made in a few seconds in Paint, then converted into a raster file that the laser cutter could read and engrave into the box.




Like the outside of the box, the inside is also relatively simple:




[![IMG_1857](http://static.scholarslab.org/wp-content/uploads/2015/07/IMG_1857-e1436181405354-225x300.jpg)](http://static.scholarslab.org/wp-content/uploads/2015/07/IMG_1857-e1436181469118.jpg)




An [Arduino Uno](https://www.arduino.cc/en/Main/arduinoBoardUno) hooked up behind the scenes via a breadboard and a bunch of jumper cables to the button, battery, breadboard, and LCD screen seen on the outside. To get the button to work, I ended up writing about thirty lines of code after borrowing from some examples in the Arduino library and other people working out similar problems online (and plenty of help from Devon!).  Unfortunately, the number underneath “BATTERY LIFE” didn’t actually correspond to the 9-volt’s battery - the code for that turned out to be too complicated. So I had it “simulate” the loss instead, setting “BATTERY LIFE” to a very high number and decreasing it by a random value from 1-9 every time the button was pushed. In what was described as a “delicious” twist of irony, when walking the gloom box over to share our work with other classes on Friday, the battery actually died before anyone had a chance to play with it. The line between “simulating” a battery’s energy expenditures and actually expending said energy can be very thin, apparently.




That covers the box as material, but what about the box as metaphor? Why make a box whose only purpose is to inform you of how your interaction with it has depleted its battery life?




My original goal had been to make a box that was “aware” at some level of some of the material costs of its own production, operation, or maintenance, ideally one that would highlight these costs in a way unique to the kinds of things physical computing lets you do. Two recent pieces of writing had me thinking this way: the first is an amazing post of Bethany’s from about a year ago titled [“Digital Humanities in the Anthropocene”](http://nowviskie.org/2014/anthropocene/); the second was an article given as background reading for my DHSI class that I can’t find a link to online as it is still forthcoming, but can give the info for here: it’s called “Between Bits and Atoms: Physical Computing and Desktop Fabrication in the Humanities” and is written by Devon, Bethany, Jentery, and Kari Kraus and William J. Turkel in _The New Blackwell Companion to Digital Humanities._ These two articles, coupled with some other reading going on around the same time (including Timothy Morton’s [_Hyperobjects_](https://www.upress.umn.edu/book-division/books/hyperobjects) and N. Katherine Hayles’s [_How We Became Posthuman_](http://press.uchicago.edu/ucp/books/book/chicago/H/bo3769963.html)), made the problem feel like an interesting one worth investigating.




This small project turned out to be a great opportunity to explore certain problems I’ve been thinking about more generally. For example, the energy costs of “invisible” transactions that we make every day but don’t really see, like information moving from place to place, or from digital to analog - exchanges that feel like they aren’t physically embodied anywhere but actually are (a problem Hayles thinks through wonderfully in _How We Became Posthuman_). Here I was thinking of the kinds of micro-expenditures that happen when we send a text, take a picture, or run some code. A box that made these “invisible” or “blackboxed” expenditures big, open, and obvious - even with something as basic as pushing a button - seemed like an interesting idea. Given the time frame I had to work on it, I ended up with something simple, a little silly, but also frustrating in potentially productive ways. A small gloomy energy puzzle, seemingly aware of its own helplessness in the face of its dilemma. 




It is reminiscent in simplicity and spirit of another example shared with us in class, [the most useless machine](http://makezine.com/projects/the-most-useless-machine/). But perhaps more philosophically, it taps into questions of inevitability and the environment Roy Scranton asked in his 2013 NYT article, [“Learning How to Die in the Anthropocene”](http://opinionator.blogs.nytimes.com/2013/11/10/learning-how-to-die-in-the-anthropocene/?_r=0), where he takes a question like “How do we make meaningful choices in the shadow of our inevitable end?” and asks it on the scale of civilization itself.




So: is it a box-as-metaphor for planet Earth (no one person pushes the button enough for it to zero out, but enough people over enough time can make it happen – energy use understood collectively)? For the problem of energy in a more-or-less closed system (the only way to keep the box going is to introduce a new battery)?  For existential gloom in general, applied not just to humans and societies but objects as well? I only had so much time to think the thing through, but thankfully I have the schematics and code and can remake it in our Makerspace if I want to keep tinkering around with it and the ideas that it – or projects like it – might represent.




I hope this gives a window into some of the kinds of things people get into at DHSI. And I want to thank again all the folks at DHSI for making this amazing week possible, as well as my instructors and the other wonderful people in our class who made it such a welcoming and enlightening experience. Thanks for making a great space to tinker around in, and hopefully I will see you next year!
