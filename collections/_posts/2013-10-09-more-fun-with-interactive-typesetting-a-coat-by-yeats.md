---
author: david-mcclure
date: 2013-10-09 00:27:03+00:00
layout: post
slug: more-fun-with-interactive-typesetting-a-coat-by-yeats
title: 'More fun with interactive typesetting: "A Coat," by Yeats'
categories:
- Experimental Humanities
tags:
- neatline
- yeats
crosspost:
  - title: dclure.org
    url: http://dclure.org/essays/more-fun-with-interactive-typesetting-a-coat-by-yeats/
---


## [Click here to view the exhibit](http://neatline.dclure.org/neatline/show/a-coat).





After spending the weekend [tinkering around with an interactive typesetting of a couplet from Macbeth](http://dclure.org/essays/experimental-typesetting-with-neatline-and-shakespeare/) that tried to model reading as a process of zooming _downward_ towards the end of the phrase, I became curious about experimenting with the opposite analogy - reading as an _upward_ movement, an climb from the bottom (the beginning) to the top (the end), with each word circumscribing everything that comes before it. Really, this is just the flip side of the same coin. Meaning certainly flows "downhill" in a phrase - each word is informed by the previous word. But it also flows back "uphill" - each word casts new meaning onto what comes before it. What would it would feel like to visualize that?

This time I decided to work with "A Coat," Yeats' wonderful little ode to simplicity (he renounces what he thinks to be the stylistic affectation of his work from the 1890’s, and announces an intention to write "naked[ly]"). Originally, I planned to exactly invert the layout of the Macbeth couplet - start with the "I" at the bottom of the stack, and work upwards towards the end with "naked," which, in the final frame, would geometrically contain each of the preceding words. I started to do this, but quickly ran into an interesting computational obstacle, which actually cropped up in the Shakespeare example as well.

Trip Kirkpatrick noticed the problem:



> [@clured](https://twitter.com/clured) Are jaggies on deepest zoom artifacts results of zoomed pixels or aesthetic decisions? Both?<br>
> -- Trip Kirkpatrick (@triplingual) [October 7, 2013](https://twitter.com/triplingual/statuses/387254660563992576)




Indeed, the last two words - "way" and "comes" - are pixelated and malformed:

[![way](http://dclure.org/wp-content/uploads/2013/10/way-300x151.jpg)](http://dclure.org/wp-content/uploads/2013/10/way.jpg)

[![comes](http://dclure.org/wp-content/uploads/2013/10/comes-300x93.jpg)](http://dclure.org/wp-content/uploads/2013/10/comes.jpg)

This wasn't on purpose - I couldn't figure out why it was happening when I was working on the exhibit, but decided against trying to fix it, half out of laziness and half because the visual effect had some satisfying affinities with the content of the line, especially when paired with the "descending" motif - a plunge down to hell, where order disintegrates, smooth lines are forbidden, etc. Anyway - after thinking it over, I'm pretty sure I know what's going on, although I'm not certain. At the extremely deep zoom levels (far beyond anything you'd ever need for a regular map), I think that OpenLayers is actually losing the floating point precision that it needs to accurately plot the SVG paths for the letters - the computer is running out of decimal places, essentially.

I squeaked by with the Macbeth couplet, but this turned out to be a showstopper for the Yeats, since I was effectively trying to plot geometry about four and a half times deeper - 45 words versus 11. At that depth, the text becomes completely illegible, so I had to find a way to squeeze more content into fewer zoom levels. In the end, I managed to fit it all in by positioning each line into a geometric “notch” formed by the ascenders of two letters on the following line, which more or less preserves the philosophical rationale of the exhibit (each bit of text "envelops" the previous, if somewhat less completely than before) while limiting the zooming to just ten magnification contexts, one for each line.

[![heel](http://dclure.org/wp-content/uploads/2013/10/heel-300x114.jpg)](http://dclure.org/wp-content/uploads/2013/10/heel.jpg)

To scan the poem, just zoom out by clicking on the "minus" button (or scrolling the mouse wheel or pinching the screen, if applicable), or click on the lines in the reference text at the top left to auto-focus on a particular part of the poem.
