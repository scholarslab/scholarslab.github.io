---
author: annie-swafford
date: 2012-04-17 10:50:29+00:00
layout: post
slug: spreading-the-light-prism-development-is-almost-done
title: 'Spreading the Light: Prism Development is Almost DONE!'
categories:
- Grad Student Research
tags:
- Jasmine
- praxis program
- Prism
- visualization
---

It's been a busy few weeks in Prism, which means that we have some exciting updates for highlighting, visualizations, and the sandbox!  

Our visualizations now display with the correct colors! This change was surprisingly complicated, since it involved adding yet another function in our d3.js algorithm, but it made a huge difference.  

I also made another important change that will improve the user experience.  On the right-hand side of the page, we have a key that shows which categories correspond to which colors: each category appears to the right of a little colored box.  I wrote javascript that adds a black border around the correct colored box when a user selects a category to make it clearer which category has been selected. We decided to make this change instead of changing the cursor to look like a highlighter.

Our final update involves user accounts: originally, users had to log in to access the sandbox (a sample text that users can highlight as a way of practicing before they highlight our three main texts), but I was able to find a way to bypass the login system, so now everyone can use the sandbox without logging in.  

The next step is to write tests for my javascript with Jasmine, which I will learn how to do today!  Once we have this task completed, I think we'll just have design work left, since we have all the functionality we want for this version of our tool.  We've almost finished building Prism! 
