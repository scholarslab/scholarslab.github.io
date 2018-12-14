---
author: chris-peck
date: 2012-12-06 11:42:37+00:00
layout: post
slug: music-theory-in-ruby
title: Music Theory in Ruby
categories:
- Grad Student Research
tags:
- praxis music
- praxis program
- Programming
---

Learning (and playing) with Ruby these past few weeks I've been looking for ways to solve modest, day-to-day Humanities problems. Digital Humanities, after all, doesn't just have to be about big questions like crowdsourcing, right?

Here's something that's been making me very happy this week: automated generation of randomized music theory drills. I'm currently teaching an introductory theory course, and especially at the end of the semester the students are hungering for extra drills to prepare for their final exam. Wouldn't it be great if I had a magic machine that would just pump out an endless number of these worksheets?

[![](http://static.scholarslab.org/wp-content/uploads/2012/11/interval-drill.png)](http://static.scholarslab.org/wp-content/uploads/2012/11/interval-drill-key.png)
(click for the answer key)

Well...now I do! This worksheet was generated with a Ruby script (here's the [source](https://github.com/chrispeck/musictheory/blob/master/interval_practice.rb)) writing music notation in [LilyPond](http://lilypond.org/). I also noticed that working out an algorithm for interval identification to generate the [key](http://static.scholarslab.org/wp-content/uploads/2012/11/interval-drill-key.png) helped me figure out how to better explain this task to the students.

Next up? An entire generated exam! (I'll be a hero to future generations of instructors to this course.) I have some ideas about applications to more serious scholarly and artistic endeavors as well, but more on that later...
