---
author: brandon-walsh
date: 2013-04-17 10:24:45+00:00
layout: post
slug: out-on-a-small-limb
title: Out on a (Small) Limb
category: essay
tags:
- grad-student-research
- praxis
- prism
---

In writing the following post, I was struck by how close it felt to one [Alex Gil](https://scholarslab.org/people/alex-gil/) wrote last year about a similar Prism disaster that he called the [herokulypse](https://scholarslab.org/grad-student-research/and-then-the-light-bulb-blew/). Alex wrote his post on April 23 of last year, so we're a few days ahead of schedule for apocalyptic project events.

--

Over the past few weeks the Praxers have been diligently working on their own pieces of Prism. [Gwen](https://scholarslab.org/people/gwen-nally/) and [Cecilia](https://scholarslab.org/people/cecilia-marquez/) have been making strides with design, [Chris](https://scholarslab.org/people/chris-peck/) has worked on highlighting and now visualizing, [Shane](https://scholarslab.org/people/shane-lin/) has been doggedly attacking user uploads, and I worked on pieces of Omniauth, design, and uploads. On Monday we made our first attempt to really put things back together, and the [result was pretty horrific](http://www.youtube.com/watch?v=KOi9hHjmYq4&t=1m38s).

My sense was that we had all broken Prism a little bit in our own special way. Some of these broken pieces weren't really noticeable until we combined everything back together, when suddenly Prism became a big goopy mess. CSS was screwed up, the databases didn't work right, migrations were failing, and the basic functionality of the highlight tool erupted as whole pages somehow morphed into copies of other pages. The crisis was mitigated thanks to the swift responses of [Wayne](https://scholarslab.org/people/wayne-graham/) and [Jeremy](https://scholarslab.org/people/jeremy-boggs/), and things seem to be working again.

A lot of this could have been mitigated, I think, if we had better coordinated our feature branches. Instead, a lot of us were working on a big feature branch: "user uploads" or "omniauth." It would have been better to break those out into smaller pieces so that any damage from merging would be manageable and less the nightmarish event that ensued. An "omniauth" branch could become multiple branches, one each for Facebook, Twitter, Google, etc.

Admittedly, some of the work that we have been doing has been of the sort that I don't think you can really divide up easily. Shane and I have been working on refactoring the databases, and large scale changes like that seem like they should happen all at once. Even so, I think we could have found ways to organize our work better. This would have, of course, necessitated better planning on our part ahead of time.

Surprise: the SLab gurus have been telling us all along to make more and smaller feature branches.

Listen to your digital elders. They know all the things.
