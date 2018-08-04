---
author: annie-swafford
date: 2011-11-01 14:20:16+00:00
layout: post
slug: building-prism-let-there-be-light
title: 'Building Prism: Let There Be Light!'
categories:
- Grad Student Research
tags:
- praxis program
---

On Friday, David, Eric, and I spent some time drafting the data model for Prism.  I had never done anything like this before, so it was quite the experience.  Since I’m new to this sort of work with databases, I had to get over my initial hurdle of thinking about the user interface in order to think about the individual components.  Once we figured out that the component parts were the tags, text, and the image and document classes, we had to figure out how they were related.  Alex did the first pass of constructing the data model in Rails, and today we met to polish it up.  We learned some interesting things about Rails in the process: for example, it seems as though Rails scaffolding sometimes changes the symbol names without warning, but now that we know, we can keep our eyes open for it.  We haven’t yet added anything to our database, but that might be the next step.

We’ve been cautioned against getting  too attached to our data model yet as we’ll probably have to change substantial portions of it, but at least we’ve finally started building!
