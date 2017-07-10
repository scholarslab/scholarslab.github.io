---
author: jes8zv
comments: true
date: 2011-12-24 10:16:05+00:00
layout: post
link: http://scholarslab.org/grad-student-research/to-scaffold-or-not-to-scaffold/
slug: to-scaffold-or-not-to-scaffold
title: To Scaffold, or Not To Scaffold?
wordpress_id: 3237
categories:
- Grad Student Research
tags:
- praxis program
- Prism
- rails
---

Alex and I started trying to build our new data model last Thursday, and we figured that it would go much more smoothly and quickly than the last time we tried.  Like the previous time, we decided to use Rails scaffolding, figuring it would be easier than generating the individual pieces by hand.  However, we ran into some unanticipated road blocks.  For example, we wanted a few different models to have IDs associated with them, so we added them into the model framework.  The scaffolding helpfully added them to our views page as well, so instead of having  IDs generated automatically, they appear on a form for the user to fill out, thus defeating the purpose of the ID field.  After lots of frustration, we decided to try to create a model without scaffolding when we get back from break.  We figure that it will take more time, but will involve less tweaking and will give us the opportunity of better understanding how the component parts of a rails application fit together.  We may decide that it's too much of a headache and that it would make more sense to use scaffolding and just to delete the unnecessary parts, but in the interests of experimentation, we'll give it a shot.
