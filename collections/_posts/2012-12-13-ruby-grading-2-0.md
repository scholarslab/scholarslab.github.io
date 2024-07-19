---
author: brandon-walsh
date: 2012-12-13 11:33:40+00:00
layout: post
slug: ruby-grading-2-0
title: Ruby Grading 2.0
category: blog
tags:
- grad student research
- praxis
- code
---

I just recently posted my [experiment with making a Ruby program that you can use for doing your own grading](http://www.scholarslab.org/praxis-program/grading-in-ruby/). I have since made several improvements upon the first draft of the code, so I present to you [Ruby Grading 2.0.](https://github.com/bmw9t/LRTHW/blob/master/other%20stuff/grading2.0.rb)

The changes:

1) I converted the code to incorporate classes, which was a huge learning process for me that involved _lots_ of troubleshooting. I think I am starting to get the hang of classes and understand their importance. The conversion process was nightmarish, but they allow you to be a lot more flexible when trying to include new tasks. Plus, I learned a lot from the ordeal.

2) I made it so that you can now input your entire roster into the grading program and calculate all your final grades there. You only input the syllabus parameters once, at the beginning. The program saves these and then applies them to all the students on your list. At the end it will spit out a nice little list of students' names and their final percentage grades.

3) I also tweaked several small things as I went to account for differing input situations. Before the program couldn't account for certain types of input. For example, if you typed in "three" and not "3" when prompted for the number of assignments, the program would break. I still am not quite sure how best to deal with those sorts of situations; I couldn't really find a satisfactory test for whether or not input was convertible to an integer or not, so I think I invented one that seems to work (see lines 136-141 of the code). My test:

<script src="https://gist.github.com/anonymous/4252685.js"></script>

I cast the input string to an integer. If the integer is greater than one the code works. If not, something has gone wrong (who assigns fewer than one assignments), and it will ask for the input as an integer. It works, but it feels like a particularly dirty way of doing things. Next up, three things if I should continue: 1) Make it so that quizzes can be dynamically inputted into the program interface, with the possibility to drop the lowest one if necessary. 2) Consider making a version of the program that reads out of other files so that you don't have to do all your grading in one session. After all, we keep our gradebooks as we go, so this information is all typed somewhere else. It seems like the biggest time save would be to have it open a file, examine its contents, and spit out a calculated final grade for you. 3) Maybe include a method that will convert the percentages to letter grades.
