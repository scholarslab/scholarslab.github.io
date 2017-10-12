---
author: annie-swafford
date: 2012-04-29 16:09:09+00:00
layout: post
slug: the-last-days-of-development-jasmine-devise-and-visualization-tweaks
title: 'The Last Days of Development: Jasmine, Devise, and Visualization Tweaks!'
categories:
- Grad Student Research
tags:
- javascript
- praxis program
- Programming
- ruby
- visualization
- visualizations
---

We're getting close to deploying, so we're making all the necessary tweaks to having Prism ready to go! For this past week, that meant writing Jasmine tests, creating error messages for Devise, and tweaking the functionality of the visualization page.

[Jasmine](http://pivotal.github.com/jasmine/) is a BDD framework for testing javascript.  It basically does for javascript what [RSpec](http://rspec.info/) does for Ruby.  It took over a week to get it set up, and we had to also learn to use a few more ruby gems ([jasmine-jquery](https://github.com/velesin/jasmine-jquery) and  [Guard](https://github.com/guard/guard)), but we finally got it to test our javascript.  It's incredibly useful, not only because it gives an error message when something fails (which is how I learned that our eraser functionality wasn't working properly), but also because it encouraged me to rewrite some of my javascript.  I discovered that I needed to do some refactoring to make the tests easier, and now the code is much clearer.

The next project was tweaking the visualization page: I had built it so that users had to click on the categories to see the visualizations, but the team  pointed out that users would probably rather see a visualization from the start.  I was able to change our code so that users will always see a visualization for the first category of any given text as soon as the page loads.

Finally, we needed to include error messages for [Devise](https://github.com/plataformatec/devise), our ruby gem that handles user authentication.  Although we had already written a bunch of error and notification messages (ie. "Invalid Password" or "Your password has been emailed to your account"), we hadn't added the necessary code to make it work.  After adding a partial file and rendering it on the main application page, and then styling it with CSS, I was able to make all our error and notification messages show up!   Now, the design team will make them look attractive and Alex will add internationalization for the messages, and we'll be all set!

It's been a busy week, but it looks like we'll be able to make our deadline!
