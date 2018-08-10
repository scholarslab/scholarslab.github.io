---
author: purdom-lindblad
date: 2014-06-20 09:48:53+00:00
layout: post
slug: learning-ruby-opening-moves
title: 'Learning Ruby: Opening Moves'
categories:
- Digital Humanities
- Research and Development
---

As the [Praxis](http://praxis.scholarslab.org) Fellows wrapped up [Ivanhoe](http://ivanhoe.scholarslab.org), I turned my attention to the [Praxis Network](http://www.praxis-network.org). The Praxis Network, which showcases eight like-minded, but differently enacted programs all exploring new ways of teaching humanities students, began with the goals of creating an easy way to compare a variety of programs and to provide a model for others. The success of the website, prompted new goals of better networking students within the Network as well as allied programs.

After a few conversations with Bethany, Wayne, and Jeremy, we had a basic outline for an open directory of like-minded programs and another directory of Praxis Network students. I realized pretty quickly it is easy to talk through an idea, but much more difficult for me to break the larger idea into a series of small steps. Often breaking down the big into the small makes a great deal of sense; my challenge was to realize small, in this case, means exceptionally tiny and extremely specific.

Creating the open directory of 'fellow traveler' programs began with a series of drawings defining (and redefining) directory. How would people contribute information? How would I collect the data and publish to the web? A sketch:



	
  * create Google Form

	
  * pull data from form and write Markdown Files

	
  * edit if needed

	
  * add to git

	
  * push to gh-pages and voila!, published


Simple, right? Now, the reality--I am new to Ruby and to using git. After creating the Google Form, I installed Ruby and the gems `google_drive`, `dotenv`, and `rake`. We, then, created a git repository and a `.gitignore` file. Next, Wayne and I created a `.env` file to keep passwords and form keys private. After the initial set up, I was ready to tackle the `Rakefile`.

[gallery ids="10398,10399,10400"]

I am still trying to wrap my head around the `Rakefile`. At the moment, I am working with metaphors, which is not best practice when thinking about the highly specific process of laying out a series of steps for the computer to follow. Even so, I think of the `Rakefile` as a scratchpad to experiment with the series of instructions. First, I defined the requirements (the gems I previously installed--`ruby-gems`, `dotenv`, and `google_drive`) and defined the necessary tasks (import data from Google Drive) and methods (loop over this data and make a Markdown file for each row passed to it). I am still working on defining the content to display online. The next step is to investigate using Jekyll categories as a way to filter programs. 

My biggest challenge, so far, has been that I have not devoted regularly scheduled time to working. Chunking an hour or so when it was convient means I have not internalized basic commands. Worse, each time I return to the script, I need to re-familiarize myself with each element within it. To address this, I have scheduled daily time on my calendar (with reminders) and have begun [Ruby the Hard Way](http://ruby.learncodethehardway.org) and [Ruby Koans](http://rubykoans.com).
