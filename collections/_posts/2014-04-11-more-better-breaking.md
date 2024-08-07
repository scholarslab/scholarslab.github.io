---
author: scott-bailey
date: 2014-04-11 09:00:35+00:00
layout: post
slug: more-better-breaking
title: More Better Breaking
category: blog
tags:
- grad student research
- praxis
---

Over the course of the last few months, those of us in the development team have been hard at work writing the code to make the Ivanhoe game function. I thought I'd give a (very) brief look into our development workflow.

1.) Each week, sometimes several times a week, check Github for issues assigned to development. ([Current list here](https://github.com/scholarslab/ivanhoe/issues?labels=&milestone=&page=1&state=open))
2.) Rank said issues on the whiteboard according to priority, difficulty, and whether we want to just do it to get the momentum boost of being successful, even on something easy.
3.) After choosing an issue, write out what the issue requires to be fulfilled in natural language on the whiteboard.
4.) Write out the first glimmers of what code will be necessary to achieve each step on the whiteboard.
5.) Create a new git branch, write said code, and check to see if it works.
6.) In the incredibly rare situation that it works on the first go, celebrate wildly, or, stoically proclaim what we need to get done next.
7.) If the screen comes up blank, lint that php.
8.) If it returns an error with a line number, be thankful for such a magnificent gift. Fix it.
9.) If there is no error returned, but the feature doesn't work, write some code to break something so that it gives you some good information. Fix it.
10.) When that doesn't work, try to break it better. Fix it.
11.) When that doesn't work, go find Wayne, Eric, or Jeremy. With their help: more better breaking. Fix it.
12.) Commit and push to Github (which you should have been doing throughout anyway), and close the issue, carefully referencing the commit number.
13.) Celebrate appropriately. This might involve [a unicorn and a pegasus.](https://scholarslab.org/grad-student-research/all-together-now/)
