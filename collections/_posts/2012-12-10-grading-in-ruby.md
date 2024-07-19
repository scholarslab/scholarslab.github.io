---
author: brandon-walsh
date: 2012-12-10 10:57:34+00:00
layout: post
slug: grading-in-ruby
title: Grading in Ruby
category: blog
tags:
- grad student research
- praxis
- code
---

[Chris](http://www.scholarslab.org/people/chris-peck/) recently posted his [very exciting experiment](http://www.scholarslab.org/praxis-program/music-theory-in-ruby/) that uses Ruby to create music theory worksheets for his students. Inspired by this, I have been playing around on Ruby with much more modest aims: I wanted to use Ruby to do my grading for me. I always do my grading with an Excel spreadsheet and a series of formulas. I am not particularly skilled at that interface, though, and it usually takes me a while to get it to work right. I thought I might as well try to do the same thing in Ruby. Admittedly, this idea also came from Chris: he has been claiming that such a thing was a very real possibility for weeks now.

[Here is the source code](https://github.com/bmw9t/LRTHW/blob/master/other%20stuff/enwr_grading.rb). It's a fairly rudimentary interface at this point, but it does seem to work. It allows you to compute a student's final grade in a course where assignment types are weighted differently.

I hope to keep tinkering with this over time. Some things that I would want to include in later versions:

1) **Clean up the code.** I don't feel very comfortable with classes at the moment, so I bend over backwards to accommodate that lack. I think the first step to making this more dynamic and workable will be to class it up. Right now the code only runs straight down, start to finish. Organizing the code in a more dynamic way will allow the program to be more workable to a variety of circumstances, which leads into my second point.

2) **Make the interface more flexible for a variety of types of course arrangements**. Right now, it's really only set up to work for a certain type of class with a few types of assignments. I have it set up so that you input the number of different types of assignments you have, ex: paper one, paper two, midterm, and final. But there isn't really a way to account for multiple smaller assignments that make up a larger chunk of grading, like individual quizzes as part of a larger whole. Right now you would have to average the quiz grades ahead of time and then enter the composite grade in as one lump "quizzes" category. That also means that, if you want to drop the lowest quiz grade, you have to do that on your own. Also, the program completes its run after completing the grade for one student.

My priority right now was making it work for my purposes - a class with less than twenty students and a limited number of assignments. It seems to work for that. Take a shot at breaking it.
