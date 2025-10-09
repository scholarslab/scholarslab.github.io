---
author: shane-lin
date: 2025-10-09
layout: post
slug: anxiety-monte-carlo-pt2
title: Anxiety and the Monte Carlo Method Part 2 
categories:
- Grad Student Research
- Digital Humanities
tags:
- Digital Humanities
---
This is a quick follow-up to [my last post](/blog/anxiety-monte-carlo/) about using the Monte Carlo method to predict how easy it will be to schedule Praxis sessions next year. 

In that post, I calculated that we might easily be in trouble if students have even a few fixed obligations beyond an average teaching load.

![graph showing the success rate of 10000 simulations for number of busy hours in the week per student using random distribution, with a steep drop-off at around 7-8 hours](/assets/post-media/2025-10-07-freeslots.png)

I also mentioned that I'd like to incorporate the actual distribution of classes at UVA into this model. [Lou's List](https://www.louslist.org/), a long-running and unofficial UVA course listing created by professor emeritus of physics Lou Bloomfield, conveniently has scraped the exact data that I need from UVA's unfriendly official course selection site. The [course search page](https://www.louslist.org/search.php?Semester=1258) at Lou's List even offers convenient CSV downloads (gotta love physics professors).

Even though I'm only interested in the scheduling data, it's still messy enough that it needs to be cleaned up first. The format is days-of-the-week and then a time range ("TuTh 11:00am - 12:15pm"), so parsing it was a little more involved than usual. There are also a lot of "TBA" values and some probable placeholders (e.g. "MoTuWeThFrSaSu 7:00am - 6:00pm") to filter out. 

Since I want to use this data for scheduling Praxis, I only care about the times that overlap the Scholars' Lab's working hours.[^1] And for this purpose, a class that ends at 12:15pm is functionally the same for us as one that ends at 12:50pm so I rounded down start times and rounded up end times. Crunching through the Fall 2024 undergraduate course data results in this distribution:

![graph showing the distribution of hour slots when UVA classes are scheduled, with 9am classes and Friday being less common](/assets/post-media/2025-10-09-lous-distribution.png)

I modified my previous code to incorporate Python's built-in [`random.choices`](https://docs.python.org/3/library/random.html#random.choices) function to generate random schedules for students weighted by this distribution and that pretty much got me to where I wanted to be.

And it's good news! Well, good news and bad news. The chances of us finding two 2-hour slots for Praxis are much better since the curve drops off much less steeply. But presumably this is because the chances of us having to have early morning and Friday sessions have gone up.

![graph showing the success rate of 10000 simulations for number of busy hours in the week per student, with schedules distributed by Lou's List data. The drop-off still starts around 8 hours, but drops off much less steeply](/assets/post-media/2025-10-09-scheduling.png)

Since for whatever reason the syntax highlighting only seems to be working for my local build, I guess I'll just link to the [repo on GitHub](https://github.com/scholarslab/Praxis-Scheduling).

[^1]: And here's where I made a mistake, because I'm throwing away slots that fall outside of our business hours but students may well be assigned to a section in those times. But it should be close enough that I'm not going to fix it.