---
author: david-mcclure
date: 2013-10-11 11:43:03+00:00
layout: post
slug: song-of-wandering-aengus
title: '"The Song of Wandering Aengus," Neatline, and negotiation with the machine'
category: blog
tags:
- Experimental Humanities
- neatline
crosspost:
  - title: dclure.org
    url: http://neatline.dclure.org/neatline/show/song-of-wandering-aengus
---


## [Click here to view the exhibit](http://neatline.dclure.org/neatline/show/song-of-wandering-aengus).





One last little experiment with Neatline-powered interactive typesettings - this time with the ending of Yeats' endlessly recitable "The Song of Wandering Aengus," which, like many great poems, seems to somehow signify the entire world and nothing really in particular. I chose to use just the last three lines so that it would be possible to play with a more dramatic type of geometric nesting that, with more content, would quickly run up against the technical limitation that I mentioned in [Wednesday's post about "A Coat"](http://dclure.org/essays/more-fun-with-interactive-typesetting-a-coat-by-yeats/) - the vector geometry used to form the letters starts to degrade as the Javascript environment runs out of decimal precision at around 40 levels of zoom, making it impossible to continue the downward beyond a certain point.

With just three lines, though, I was able to place each consecutive line completely inside of one of the dots above an "i" in the previous line. So, the "silver apples of the moon" are inscribed into the dot over the "i" in the "till" of "till time and times are done," and the "golden apples of the moon" are then contained by the dot on the "i" in "silver." Since the nested lines are placed literally inside the shaded boundaries of letters (as opposed to the empty spaces delineated by the "holes" in letters, as was the case with the [first](http://dclure.org/essays/more-fun-with-interactive-typesetting-a-coat-by-yeats/) [two](http://dclure.org/essays/experimental-typesetting-with-neatline-and-shakespeare/) experiments), the color of the text has to alternate in order to be legible against the changing color of the backdrop. What I didn't expect (although in retrospect I guess it's obvious) is that this shift in the color palette completely modulates the visual temperature of the whole environment - the backdrop swerves from bright white to solid black back and then back to white over the course of the three lines, with the last transition mapping onto the night-to-day, moon-to-sun thematic movement in the final couplet.

Interestingly, this effect was almost thwarted by another unexpected quirk in the underlying technologies, although I managed to maneuver around it with a little hack in the exhibit theme. The problem was this - it turns out that OpenLayers will actually stop rendering an SVG geometry ones the dimension of the viewport shrinks down below a certain ratio relative to the overall size of the shape. So, in this case, as the camera descends down into the black landscape of the dot over the first "i," the black background supplied by the vector shape would suddenly drop away, as if the camera were falling through the surface, which of course had the effect of making the second-to-last line - typeset in white - suddenly invisible against the default-white background of the exhibit.

I thought this was a showstopper, but then I realized that I could programmatically "fake" the black background by directly flipping the CSS `background` color on the exhibit container. So, I just fired up the Javascript console, inspected the `zoom` attribute on the OpenLayers instance to get the zoom thresholds where the color changes needed to happen, and then dropped a little chunk of custom code into the [exhibit theme](https://github.com/davidmcclure/neatlight/tree/master/neatline/exhibits/themes/song-of-wandering-aengus) that manifests the style change in response to the zoom events triggered by the map:



Weird, but effective. Whenever I work on projects like these I'm fascinated by the wrinkles that arise in the interaction between what you want to do and what the technology allows you to do. It's very different from analog scholarship or art practice, where you have a more complete mastery over the field of play - you have a much more direct and unmediated control over the sound of your words, the shape of a line in a physical sketch, the pressure of a brush stroke. With digital objects, though, you're building on top of almost unimaginably huge stacks of technology - the millions of man-hours of work that it took to create the vast ecosystem of Javascript and PHP libraries that Neatline depends on, the whole set of lower-level technologies that shape the underlying browser rendering engines and Javascript runtimes, which in turn are implemented in still lower-level languages, which eventually brush up against the dizzying rabbit hole of physical hardware engineering, which to my mind is about as close to magic as anything that people have produced.

That kind of deep, massively-distributed collaboration can definitely exist offscreen (eg., all of intellectual history, in a sense), but it's more loosely coupled, and certainly less fragile - if I write an essay about Yeats, Yeats can't _break_ in the way that a code dependency literally can (will). At first this really bothered me, but I've come to peace with it - digital work is by definition a relinquishing of control, a give-and-take with the machine, a negotiation with our current little slice of modernity about what's possible.
