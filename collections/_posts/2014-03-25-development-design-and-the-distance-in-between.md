---
author: veronica-ikeshoji-orlati
date: 2014-03-25 01:05:14+00:00
layout: post
slug: development-design-and-the-distance-in-between
title: Development, Design, and the Distance in-between
category: blog
tags:
- Grad Student Research
- Ivanhoe
- praxis program
---

In the past week, Scott and I have been chipping away at the various issues Stephanie has uncovered in her testing of proto-Ivanhoe. There are [a LOT of issues](https://github.com/scholarslab/ivanhoe/issues?labels=&page=1&state=open), and there are still a handful of core features we have left to build by our April 1 deadline. Specifically, we need to work through some bugs with the display and assignment of roles to users, give a bit more thought to the role journal (which took a backseat to primary feature development earlier this semester), and set up a couple of other pages to make navigating the theme a bit more manageable.

Building things is fun, but the challenge as we push towards a beta version of Ivanhoe is refining what we have built (our 'something that works' version) into a properly useable and playable game. Our code is still quite messy, since we sacrificed cleanliness for functionality as we learned to deal with PHP and [WordPress](http://wordpress.org/), and some of the bugs we need to fix in the next week or so require that we grapple with what we have already written and think more critically about the logic of what we actually want to happen.

And this is where things get interesting.

Up until about a week or two ago, the tasks of the development and design teams seemed to be fairly well circumscribed. Scott and I would read WordPress documentation, write functions, break some stuff, then have Jeremy/Eric/Wayne point out where our logic failed. Eliza/Zach/Francesca would theorize, design, and write the code to make the look-and-feel of the theme coherent, navigable, and visually appealing to users on all sorts of devices. But as part of the design team's trouble-shooting, Zach has recently been inputting WordPress test content to make sure that different types of data show up as expected, and it seems that some of the problems he has encountered are not issues with the CSS or Susy grid but, rather, problems with the consistency of the data the underlying code puts out.

As graduate students in the humanities and social sciences, it is very easy to throw ourselves wholly into our respective disciplines and revel in the tangible progress we make there. On the development team, we have likewise had the singular focus of getting features working and have made good progress thus far. It seems, however, that we have arrived at a point at which all of us need to regroup a bit to figure out what tasks each team should prioritize to move the entire project along, because a coherent game is the goal, not a glorious laundry-list of features which nobody can access or use.
