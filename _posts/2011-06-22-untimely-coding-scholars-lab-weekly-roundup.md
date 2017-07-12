---
author: david-mcclure
date: 2011-06-22 12:00:36+00:00
layout: post
slug: untimely-coding-scholars-lab-weekly-roundup
title: 'Untimely Coding: Scholars’ Lab Weekly Roundup'
categories:
- Research and Development
---

Although the air conditioning here in Alderman Library keeps the office a bit cooler than the summer heat that’s descended on Charlottesville, things are definitely heating up in the Scholars’ Lab!

May, June, and July each mark the arrival of a new face in the lab.  In May, I was delighted to make the move to Virginia and join the team as a web developer.  [Jeremy Boggs](http://clioweb.org/) (of [Omeka](http://omeka.org/about/staff/) and [CHNM](http://chnm.gmu.edu/) fame) started as our new Humanities Design Architect at the beginning of this month. In the second week of July, Eric Johnson will come on board as our new Head of Outreach and Consulting. Eric Rochester, our Senior Developer who started in March, is starting to seem like an old-timer…

With all the fresh intellectual energy bouncing off the walls, we’re making good progress on a number of exciting projects:



	
  * **BagIt plugin for Omeka** – What if you have a big collection of files in one location and you want to move them onto your Omeka site?  Depending on the size of the collection and the locations of the files, this could be anything from a chore to a nightmare.  The BagIt specification was designed to provide an easy and reliable way to package and transmit files from one location to another.  Using the BagitPHP library that Eric released last month, I’ve been putting the finishing touches on an Omeka plugin that makes it possible to import and export “bags” from your Omeka site.



	
  * **Timeline plugin for Omeka** – With the arrival of Jeremy (Omeka’s Development Lead), we’ve been mapping out the next development cycle of the [Omeka + Neatline](http://neatline.org/) project.  First up is the Timeline plugin, which may get a significant update in the form of a new JavaScript widget to power the core timeline functionality.  The current version of the plugin uses a timeline application that doesn’t play well with the larger Omeka code ecosystem.  Jeremy is looking into a number of alternatives that would clear up the conflicts and make it possible to create a more robust and feature-rich interface for adding content to a timeline.



	
  * **Continuous integration with Jenkins** – As part of an ongoing effort to build testing and quality control into our development process, we’ve been exploring the possibility of hooking up our Omeka plugin repositories to a continuous integration server like [Jenkins](http://jenkins-ci.org/).  With Jenkins running in the background, each new piece of code that we submit to one of our projects triggers a “build,” which runs through the software and checks to see the new version of the code passes a series of tests.  If the tests pass, the code gets automatically deployed.  This makes it possible to iterate applications quickly and aggressively without having to worry about the possibility of broken code slipping out the door unnoticed.


In addition to these regularly scheduled efforts, we’ve also been pursuing a number of smaller projects, experiments, and collaborations.  We were delighted to have the opportunity earlier this month to hear cultural historian [Tim Sherratt](http://wraggelabs.com/) talk about his adventures using linked open data and third-party API development to help rediscover the lives of thousands of non-white Australians who were affected by the “White Australia” policies of the 20th century.  The slides for his presentation, “Confessions of an Impatient Historian,” are available on [Slideshare](http://www.slideshare.net/wragge/confessionspdf).  During his visit, Tim also pointed us in the direction of JSTOR’s “[Data For Research](http://dfr.jstor.org/)” resource, which served as the basis for some interesting explorations into how JSTOR keeps track of information like word counts and citation relationships.

Meanwhile, Eric has been working on setting up virtual machines with Vagrant (see his [blog post](http://www.scholarslab.org/announcements/omeka-development-with-vagrant/) from last week) and I’ve been building an experimental link aggregator on Django designed to serve as a testing platform for non-traditional approaches to organizing comments and other types of text-based discussions.

Stay tuned for exciting code to come!
