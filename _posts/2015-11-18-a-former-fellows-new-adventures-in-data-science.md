---
author: claire-maiers
date: 2015-11-18 11:51:23+00:00
layout: post
slug: a-former-fellows-new-adventures-in-data-science
title: A Former Fellow's New Adventures in Data Science
---

Hello All.  I’m happy to report that after several years away, I’ll be blogging at the Slab again this year.  Thanks in large part to my experience with the [Praxis Fellowship](http://scholarslab.org/graduate-fellowships/), I was selected to participate in the [UVa Presidential Fellowship in Data Science](http://gradstudies.virginia.edu/node/46).  Over the course of the next year, I will be collaborating with a PhD student in systems engineering on a data-driven project.  From time to time, I’ll post updates about struggles, questions, and successes with the project.  Today, I’m going to start with a basic description of what we think we might be up to:

In a nutshell, Nick and I will be trying to model the patterns by which ideas move through social systems.  There already exists a robust literature within sociology that focuses on identifying how and when ideas will be adopted and spread.  But there are some shortcomings to this body of work.  Existing research tends to focus on the adoption and diffusion ideas.  There are not many studies that consider the persistence or the decline of an idea.  This means that we don’t have holistic models that capture the entire lifespan of ideas. 
 
Nick and I will be taking a stab and remedying this situation by looking at just one social system; we’ll be tracking concepts and methods over time within academia.  Our first goal is to generate a typology of the common patterns by which ideas are adopted, persist, and decline.  If we manage that, our next task will be to develop a predictive model for when a concept or method will jump to a new discipline.

We will be using the text of articles contained in the [JSTOR database](http://dfr.jstor.org/), and we’ll be experimenting with a couple of methods.  One option is to use a supervised method.  We’ll generate a list of terms consisting of significant concepts and methods and then track those overtime through the database.  The second option is to use topic modelling to generate a list of topics and then track those over time.  If you’re thinking that this project has some similarities to Goldstone and Underwood’s PMLA project, you’re right. It does.  If you’re not familiar, check out their [excellent post ](http://andrewgoldstone.com/blog/2012/12/13/pmla/)to learn more about topic modeling.  

We’ve already had a number of challenges in accessing and thinking about how to structure our data....look for more on that in future posts. 

