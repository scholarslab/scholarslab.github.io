---
author: katina-rogers
date: 2012-08-03 12:35:30+00:00
layout: post
slug: data-visualizations-learning-d3-js
title: 'Data visualizations: Learning d3.js'
categories:
- Visualization and Data Mining
tags:
- javascript
- Programming
- visualization
---

_[cross-posted at [katinarogers.com](http://wp.me/p2CaGd-9R)]_

The [ SCI study on humanities graduate programs and career preparation](http://uvasci.org/current-work/graduate-education/) is humming along, and while survey responses come in, I've been working on determining how best to translate the data into meaningful graphics. After a lot of experimenting, I think the winner is [d3.js](http://d3js.org/). Short for for Data-Driven Documents, D3 is Michael Bostock's creation; a quick glance at his [gallery](https://github.com/mbostock/d3/wiki/Gallery) shows the kinds of beautiful and complex visualizations it's capable of. It's a low-level tool, though, which means that learning to use it even in a rudimentary way has already involved picking up some html, css, and javascript along the way. It's a lot to chew on, but I think I'm starting to turn a corner as a blurry whirl of concepts, terms, and commands are slowly resolving themselves into some clarity. 

While I don't have anything that cool that to show yet, I'm excited that I do have a little something. Here's the fruit of everything I've learned so far:
[iframe height="200" width="690" src="http://katinalynn.github.com/dataviz/demo_randomCircles"]

It might not look like much, but you guys, I drew those shapes with CODE! (And a lot of help. Mostly I drew them with a lot of help, actually.) In my [earlier post on text mining](http://katinarogers.com/2012/06/29/playing-with-visual-text-analysis-using-voyant/ ), I also included some images made from data -- but in that case, the graphics you see in the post are nothing more than links back to the tool itself, which does all the work. The image here is different. Here's what's so great about it:

1.  The shapes are determined by data in the code. In this case, the size of the circles is determined by a dataset of randomly generated numbers, because that's what's specified in the code. Don't believe me? Reload the page -- the shapes change! 

2.  I actually understand the code. I can play with it, change things, and not break it. I made this particular image by starting with samples from [Scott Murray's great tutorials](http://alignedleft.com/tutorials/d3), then building on what I learned, combining elements from various lessons to create a new graphic.

3.  I learned a ton trying to get the image to display in this post; turns out that it's not as simple as uploading an image or linking to a page, or even pasting the code into the post. I now have a much better sense of what does and doesn't work in WordPress; how iframes work; how to really use an FTP client; how to create and work with GitHub repositories; and how to publish GitHub Pages so that you can actually see the rendered images, not the source code. 

I have been learning tech skills in scattered bits and pieces, and this is the first time some of the threads have come together instead of constantly branching off in new directions. I feel like I'm starting to understand how to actually make something on the web. (There must be something in the air in the [ Scholars' Lab](http://scholarslab.org) that makes it impossible to resist the desire to make things.) It feels empowering -- I was incredibly giddy when I finally got the images to display in the draft post -- but also really humbling, like I'm trying to tie my shoes while wearing mittens. Right now I'm just excited to be doing something that I can point to and look at. It feels a little like magic.

I'm also excited about D3 itself, which [@thisisaaronland](https://twitter.com/thisisaaronland) recommended when I told him about my project. In recent weeks I've been exploring all manner of data visualization tools, and while I knew that any of them would require that I learn new skills (or else settle for paltry Excel charts), I was becoming overwhelmed by the options. Everything I looked at seemed to need a different language -- python, R, etc. -- and I was already feeling like I had started too many new things without becoming proficient in any of them. D3 is quite powerful, and learning it should help me to start applying some of what I've learned while also pushing me into new terrain. It's also what the Praxis team used for the visualisations in [ Prism](http://prism.scholarslab.org/), so all signs point to it being a great visualization tool that's worth taking the time to learn.
