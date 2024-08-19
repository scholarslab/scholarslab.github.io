---
author: jordan-buysse
date: 2016-12-16 10:28:16+00:00
layout: post
slug: working-with-an-archive-of-the-now
title: Working with an Archive of the ‘Now’
category: essay
tags:
- about-social-media
- dataset
- grad-student-research
- praxis
- dash-amerikan
- media-studies
---

Given our subject matter for the 2016-17 Praxis cohort, we recognized early on that we would be grappling with a very different sort of archive than we’ve grown accustomed to as humanists. Instead of the stacks, journal databases, manuscripts, and historical objects, we’d have to take a serious look at Facebook, Instagram, Vine, Snapchat, and Twitter. The following is a brief summary of some of our efforts with Twitter, a platform which we realized early on would be key in meaningfully keeping up with the Kardashians.

We’ve centered our thinking around Twitter because at first glance, given its relatively open API, the possibilities for analysis seemed endless. What we’ve found is that this openness is a bit deceptive. While it’s easy enough to click around and ask questions of our archive through regular browsing, it’s another matter entirely to start answering those questions quantitatively. It’s hard to turn data that you can see into data you can use. It’s one thing to know this intellectually, but quite another to experience the many roadblocks of a proper social media data set.

The first thing we found in attempting to wrangle data from the platform is that Twitter’s API prioritizes an archive of the ‘now’. One of the ways to sample twitter data is with the R package rtweet, which allows the user to search tweets based on keywords or user data such as followers, user ‘likes’, and retweets. Because rtweet and other tools like it use Twitter’s “streaming API,” which searches for tweets as they happen, the experience is a bit like trying to sip from a firehose. A query of the name ‘Kardashian’ on a given Wednesday morning yields output like this:

[![keyword kardashian](http://static.scholarslab.org/wp-content/uploads/2016/12/keyword-kardashian.bmp)](http://static.scholarslab.org/wp-content/uploads/2016/12/keyword-kardashian.bmp)

The CSV format allows us to view the data in a slightly more manageable format as follows:

[![keyword kardashian2](http://static.scholarslab.org/wp-content/uploads/2016/12/keyword-kardashian2.bmp)](http://static.scholarslab.org/wp-content/uploads/2016/12/keyword-kardashian2.bmp)

To be sure, there’s more we could do to clean up this data, but to what end? Using social media networks to answer our questions about celebrity culture means making a choice. It’s either the comprehensive and immense archive of ‘now’, or some more carefully and narrowly selected data set.

We’re moving towards the latter. Indeed, our training as humanists has primed us to theorize and uphold the significance of the small data set closely read and applied. So what does that archive look like? It seems like a simple enough change; instead of watching the deployment of the Kardashian name across twitter in real time, why not focus in on key users themselves? Even if we were to make a generous coterie of, say, thirty Kardashian and Kardashian-adjacent twitter accounts, fresh problems arise. ‘Now’-ness is baked into the tools available to us. Our efforts to delve into deeper histories of this celebrity hit a snag about a year and a half back from the present moment; you can only reach back 3,200 tweets into a given account before twitter’s API cuts you off. The workarounds are either inelegant or expensive. Twitter is a uniquely profitable and profit-driven archive, and the analytics tools to reach back further than those 3,200 tweets are out of our price range.

But for our purposes, there’s a workaround somewhere between the streaming API’s technical affordances and the browser’s ease of use. It is possible to reach back into twitter’s deep archives simply using the site’s search feature, where users can search for tweets by user across certain date ranges, all of the way back to a user’s first tweets. These, in turn, can be scraped from the web and archived using a browser. The solution to our data-gathering questions, it seems, lies in moving between the user-centric practice of ‘browsing’ and the computational problem of data wrangling. Our efforts will involve translating the archive between these modes. To do so, we’ll have to rely on our best instincts developed from traditional humanist archives in tandem with the technical affordances and scalability of the archive of the ‘now’.
