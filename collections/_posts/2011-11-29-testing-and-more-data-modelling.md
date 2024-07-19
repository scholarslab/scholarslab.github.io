---
author: annie-swafford
date: 2011-11-29 13:01:30+00:00
layout: post
slug: testing-and-more-data-modelling
title: Testing and More Data Modelling
category: blog
tags:
- grad student research
- praxis
---

Now that we've spent a few weeks focusing on wireframing, we're back to working on the data model.  We haven't actually created the models in rails yet, but we have started redesigning it, and it makes much more sense the second time around.  Currently, we're adding a user model, renaming all the other models, combining the "TextDoc" and "ImgDoc" models into a new model called "PrismObject," and adding a "Page" model.  We'll post our next version here when it's ready.

We've also been learning about the wonders of testing.  Of course, we've all had our own (frustrating) experiences with debugging, but it looks like Test-Driven-Development will help us minimize our errors, or at least catch them earlier.  We're now supposed to write the test before we write the code, and the test will tell us whether our code passed or failed.  I think it will take some practice to actually write the tests correctly, but I think it will pay off once I get used to it.
