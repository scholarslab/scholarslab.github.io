---
author: brandon-walsh
date: 2017-06-05 11:00:10+00:00
layout: post
slug: what-should-you-do-in-a-week
title: What Should You Do in a Week?
category: essay
tags:
crosspost:
  - title: my personal blog
    url: http://walshbr.com/blog/2017/06/03/what-should-you-do-in-a-week/
---

For the past several years, I've taught a [Humanities Programming](http://humanitiesprogramming.github.io) course at [HILT](http://www.dhtraining.org/). The course was piloted by Wayne Graham and Jeremy Boggs, but, these days, I co-teach the course with [Ethan Reed](http://scholarslab.org/people/ethan-reed/), one of our DH fellows in the Scholars' Lab. The course is a soup-to-nuts introduction to the kinds of methods and technologies that are useful for humanities programming. We're changing the course a fair amount this year, so I thought I'd offer a few notes on what we're doing and the pedagogical motivations for doing so. You can find our syllabus, slides, resources, and more on [the site](https://humanitiesprogramming.github.io/syllabus/).

We broke the course down into two halves:




  * Basics: command line, Git, GitHub, HTML/CSS


    * Project: personal website





  * Programming concepts: Ruby


    * Project: Rails application deployed through Heroku and up on GitHub





In the first half, people learned the basic stack necessary to work towards a personal website, then deploying that site through GitHub pages. In the second half, students took in a series of lessons about Ruby syntax, but the underlying goal was to teach them the programming concepts common to a number of programming languages. Then, we shifted gears and had them work through a series of Rails tutorials that pushed them towards a real-life situation where they're working through and on a thing (in this case a sort of platform for crowdsourcing transcriptions of images).

I really enjoyed teaching the Rails course, and I think there was a lot of good in it. But over the past few years it has raised a number of pedagogical questions for me:


  * What can you reasonably hope to teach in a week-long workshop?


  * Is it better to do more with less or less with more?


  * What is the upper-limit on the amount of new information students can take in during the week?


  * What will students actually use/remember from the course once the week is over?


To be fair, week-long workshops like this one often raise similar concerns for me. I had two main concerns about our course in particular.

The first was a question of audience. We got people of all different skill levels in the course. Some people were there to get going with programming for the first time. These newcomers often seemed really comfortable with the course during the first half, while the second half of the course could result in a lot of frustration when the difficulty of the material suddenly seemed to skyrocket. Other students were experienced developers with several languages under their belt who were there specifically to learn Rails. The first half of the course seemed to be largely review for this experienced group, while the second half was really what they were there to take on.  It's great that we were able to pull in students with such diverse experiences, but I was especially concerned for the people new to programming who felt lost during the second half of the course. Those experienced folks looking to learn Rails? I think they can probably find their way into the framework some other way. But I didn't want our course to turn people off from programming because the presentation of the material felt frustrating. We can fix that. I always feel as though we should be able to explain these methods to anyone, and I wanted our alumni to feel that they were empowered by their new experiences, not frustrated. I wanted our course to reflect that principle by focusing on this audience of people looking for an introduction, not an advanced tutorial.

I also wondered a lot about the outcomes of the course. I wondered how many of the students really did anything with web applications after the course was over. Those advanced students there specifically for Rails probably did, and I'm glad that they had tangible skills to walk away with. But, for the average person just getting into digital humanities programming, I imagine that Rails wasn't something they were going to use right away. After all, you use what you need to do what you need. And, while Rails gives you a lot of options, it's not necessarily the tool you need for the thing in front of you - specially when you're starting out.

So we set about redesigning the course with some of these thoughts in mind and with a few principles:


  * Less is more.


  * A single audience is better than many.


  * If you won't use it, you'll lose it.


I wondered how we might redesign the course to better reflect the kinds of work that are most common to humanists using programming for their work. I sat down and thought about common tasks that I use programming for beyond building apps/web services. I made a list of some common tasks that, when they confront me, I go, "I can write a script for that!" The resulting syllabus is [on the site](https://humanitiesprogramming.github.io/syllabus/), but I'll reiterate it here. The main changes took place in the second half of the course:




  * Basics: command line, git, GitHub, HTML/CSS


    * Project: personal website





  * Programming concepts: Python


    * Project(s): Applied Python for acquiring, processing, and analyzing humanities data





The switch from Python to Ruby reflects, in part, my own changing practices, but I also find that the Pythonic syntax enforces good stylistic practices in learners. In place of working on a large Rails app, we keep the second half of the course focused on daily tasks that programming is good for. After learning the basic concepts from Python, we introduce a few case studies for applied Python. Like all our materials, these are available [on our site](http://humanitiesprogramming.github.io/resources/). But I'd encourage interested folks to check out the Jupyter notebooks for these units if you're interested. These are the new units on applications of Python to typical situations:




  * [Working with CSV files](https://nbviewer.jupyter.org/github/humanitiesprogramming/humanitiesprogramming.github.io/blob/master/python/notebooks/working-with-csv.ipynb)


  * [Getting data from API's](https://nbviewer.jupyter.org/github/humanitiesprogramming/humanitiesprogramming.github.io/blob/master/python/notebooks/working-with-apis.ipynb)


  * [Introduction to Web Scraping](https://nbviewer.jupyter.org/github/humanitiesprogramming/humanitiesprogramming.github.io/blob/master/python/notebooks/intro-to-scraping.ipynb)


  * [Basic Text Analysis](https://nbviewer.jupyter.org/github/humanitiesprogramming/humanitiesprogramming.github.io/blob/master/python/notebooks/text-analysis.ipynb)


In the process of working through these materials, the students work with real, live humanities data drawn from [Project Gutenberg](https://www.gutenberg.org/), the [DPLA](https://dp.la/), and the [Jack the Ripper Casebook](http://www.casebook.org/press_reports/). We walk the students through a few different options for building a corpus of data and working with it. After gathering data, we talk about problems with it and how to use it. Of course, you could run an entire course on such things. Our goal here is not to cover everything. In fact, I erred on the side of keeping the lessons relatively lightweight, with the assumption that the jump in difficulty level would require us to move pretty slowly. The main goal is to show how situations that appear to be much more complicated still boil down to the same basic concepts the students have just learned. We want to shrink the perceived gap between those beginning exercises and the kinds of scripts that are actually useful for your own day-to-day work. We introduce some slightly more advanced concepts along the way, but hopefully enough of the material will remain familiar that the students can excel. Ideally, the concepts we work through in these case studies will be more immediately useful to someone trying to introduce programming into their workflow for the first time. And, in being more immediately useful, the exercises might be more likely to give a lasting foundation for them to keep building on into the future.

We've also rebranded the course slightly. The course description has changed, as we've attempted to soften jargon and make it clear that students are meant to come to the course not knowing the terms or technologies in the description (they're going to learn them with us!). The course name has changed as well, first as a joke but then in a serious way. Instead of simply being called "Humanities Programming," the course is now "Help! I'm a Humanist! - code for Humanists with Python." The goal there is to expose the human aspect of the course - no one is born knowing this stuff, and learning it means dealing with a load of tough feelings: anxiety, frustration, imposter syndrome, etc. I wanted to foreground all of this right away by making my own internal monologue part of the course title. The course can't alleviate all those feelings, but I hoped to make it clear that we're taking them into account and thinking about the human side of what it means to teach and learn this material. We're in it together.

So. What can you do in a week? Quite a lot. What should you do - that's a much tougher question. I've timed this post to go out right around when HILT starts. If I figure it out in the next week I'll let you know.
