---
author: alex-gil
date: 2012-04-23 16:21:10+00:00
layout: post
slug: and-then-the-light-bulb-blew
title: '...and then the Herokulypse'
categories:
- Grad Student Research
tags:
- Digital Humanities
- Labor
- praxis program
- Programming
---

After two and some years hanging around the Scholars' Lab and earning my badges in the DH community, I finally learned a lesson that should be required learning for all new-comers: plumbing is real. I mean, I was more or less aware of its existence, brief-sightings, a shudder here and there from a ghostly presence. Problem is, I've been focusing on the flashy, large, important, big, fancy, loud, loud, loud uses of already-made tools or those tools I dream of, five-million dollars and the-rest-of-your-life tools. You know: The shiny stuff.

For the past couple of weeks, I have been working instead on the small stuff that needed to be done to roll [Prism](http://praxis.scholarslab.org/) into production. Enter the plumbing. What I thought would be a series of small tasks turned out to be a major time vacuum. At issue was getting Heroku to play nice with what we had built in the development branch. The first two weeks, Heroku would not even display our site. A series of 'Application Error' messages was all I got. The culprits, in no particular order: the [Asset Pipeline](http://guides.rubyonrails.org/asset_pipeline.html), [Devise](https://github.com/plataformatec/devise) and [Jasmine](https://github.com/pivotal/jasmine). Eventually, with help from above (i.e. E. Rochester and W. Graham), we got the site running ...and then the [Herokulypse](https://github.com/scholarslab/prism/issues/73). 

Once in a while a bug comes, so uncanny, so daunting, that it makes you want to become a novelist. That was the Herokulypse. I obsessed about it for three days at the expense of my dissertation and everything else, with no results. The great obi-wayne-kenobot finally found the problem. To my relief I was on the right track trying to solve it. I just didn't figure out the part about [disabling page caching on the pages controller](https://github.com/scholarslab/prism/commit/5251c6d4d1e50b0b39c418c1764843c4937812f8). Live and learn, and learn I did: Plumbing is real.

I found the lesson timely at a moment when we are debating the [obstacles](http://miriamposner.com/blog/?p=1141) [and](http://byzantini.st/2012/04/coding-and-collaboration.html) [affordances](http://librarian.newjackalmanac.ca/2012/03/gender-coding-libraries-digital.html) [of](http://philomousos.blogspot.com/2012/03/spot-of-mansplaining.html) [coding](http://nowviskie.org/2012/dont-circle-the-wagons/) for digital humanities. The experience with the Herokulypse really brought home for me the idea that code is labor, and that the digital humanities really puts pressure on our notions of leisure, labor and power. I am still working out these issues --issues which all my predecessors seem to have encountered in one way or another-- and will be sure to report back to the public when I have more insights. 

In the meantime, I won't ask you to be careful of what you wish for. On the contrary, I will encourage you to scurry down the rabbit hole of code, that you may never think yourself superior to anyone who leans on the side of hack over yack.
