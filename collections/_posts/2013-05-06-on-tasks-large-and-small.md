---
author: brandon-walsh
date: 2013-05-06 14:06:03+00:00
layout: post
slug: on-tasks-large-and-small
title: On Tasks Large and Small
category: blog
tags:
- grad student research
- praxis
---

The biggest issue that I have faced with my work with the Praxis Program has to do with how I judge the difficulty of the tasks before me. I have proven to be singularly inadequate at distinguishing quick fixes with a large payoff from larger problems that would yield only small utility. This issue surfaced early on, when I boldly suggested that I could implement [Omniauth](http://www.omniauth.org/) in a week. Two and a half months later I am still trying to get it to work: the Omniauth code structure works more generally, but each authentication service is its own unique little snowflake, different from all the other snowflakes in the code breaking eccentricities that it brings to the table. We had to jettison Twitter early on because it would not return user emails, which are central to the way that Devise handles logins. Facebook worked on local rails servers, but something whacky is happening on staging (and in deployment, for that matter) so that it throws a redirect uri failure at us that did not appear before. I feel as though I could have pounded away at these problems for ages and gotten nowhere.

But for every task like Omniauth there have been other jobs that seemed large but turned out to be much easier than expected. I implemented a destroy function on prisms last week in just a couple of hours ([Shane](https://scholarslab.org/people/shane-lin/) had already provided a lot of the scaffolding on an older database setup), which meant that I also had to implement user roles and permissions using cancan. Cancan felt like a bigger job than it wound up being, and the whole thing seems to be working in the feature branch now. Now a user can delete a prism that they have uploaded. Great success!

I think this ability to distinguish between large and small tasks is something that can only come with time and experience. We Praxers may be unable to tell how much work a particular feature will require, but the SLab team has been incredibly helpful in that regard. Where we see mountains, they see molehills, and vice versa. And when you get right down to it, Prism seemed like the biggest mountain of all a couple months ago. Prism felt like an insurmountable task until last week when everything came together in a flurry of productivity. I am impressed with what we have done.

Now, without warning, a couple of inspirational [climbing](http://www.youtube.com/watch?v=NG2zyeVRcbs) [videos](http://www.youtube.com/watch?v=EoCPuhhE6dw).
