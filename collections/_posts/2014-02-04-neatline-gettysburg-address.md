---
author: david-mcclure
date: 2014-02-04 10:13:47+00:00
layout: post
slug: neatline-gettysburg-address
title: The "Nicolay copy" of the Gettysburg Address
categories:
- Experimental Humanities
tags:
- d3
- lincoln
- neatline
---

_[Cross-posted from [dclure.org](http://dclure.org/logs/nicolay-copy-gettysburg-address/)]_



## [Launch the Exhibit](http://neatline.dclure.org/neatline/show/gettysburg-address)



[![nicolay-fullscreen](http://dclure.org/wp-content/uploads/2014/02/nicolay-fullscreen1.jpg)](http://neatline.dclure.org/neatline/show/gettysburg-address)



This is a project that I've been hacking away at for some time, but only found the time (and motivation) to get it polished up and out the door over the weekend - a digital edition of the ["Nicolay copy" of the Gettysburg Address](http://prod.myloc.gov/Exhibitions/gettysburgaddress/exhibitionitems/ExhibitObjects/NicolayCopy.aspx), with each of the ~250 words in the manuscript individually traced out in Neatline and wired up with a plain-text transcription of the text on the right side of the screen. I've tinkered around with [similar interfaces](http://neatline.dclure.org/neatline/show/saturn-v-stage-2) in the past, but this time I wanted to play around with different approaches to formalizing the connection between the digitally-typeset words in the text and the handwritten words in the manuscript. Your eyes tend to dart back and forth between the image and the text, and it's easy to lose your place - how to reduce that cognitive friction?

To chip away at this, I wrote a little sub-plugin for Neatline called [WordLines](https://github.com/davidmcclure/nl-widget-WordLines), which automatically overlays a little visual guideline (under the hood, a [d3](http://d3js.org/)-wrapped SVG element) on top of the page that connects each pair of words in the two viewports when the cursor hovers on either of the instantiations. So, when the mouse passes over words in the transcription, lines are automatically drawn to the corresponding locations on the image; and vice versa. From a technical standpoint, this turns out to be quite easy - just get the pixel offsets for the element in the transcription and the vector annotation on the map (for the latter, OpenLayers does the heavy lifting with helpers like `getViewPortPxFromLonLat`, which maps spatial coordinates to document-space pixel pairs), and then draw a line connecting the two points. The one hitch, though, is that this involves placing a large SVG element directly on top of the page content, which, by default, will cover all of the underlying elements (shapes on the map, words in the text) and block them from receiving the cursor events that drive the rest of the UI - including, very problematically, the `mouseleave` event that garbage-collects old lines and prevents them from getting stuck on the screen.

[![wordline](http://dclure.org/wp-content/uploads/2014/02/wordline.jpg)](http://dclure.org/wp-content/uploads/2014/02/wordline.jpg)

The work-around is to put `pointer-events: none;` on the SVG element, which causes the browser to treat it as a purely visual veneer over the page - cursor events drop through to the underlying content elements, and everything else behaves normally. This is [just barely and only very recently cross-browser](http://caniuse.com/pointer-events), but I'm not sure if there's actually any other way to accomplish this, given the full set of constraints.

**Modeling intuitions about scale**

Originally, I had planned to just leave it at that, but, as is almost always the case with these projects, I ended up learning lots of interesting things along the way, and I ended up going back and adding in another set of annotations that make note of some of the more historically noteworthy aspects of the manuscript. Namely, I was interested in the different types of paper used for the two different pages (Lincoln probably wrote the first page in Washington before departing, the second page after arriving in Gettysburg) and the matching fold creases on the pages, which some historians have pointed to as evidence that the Nicolay copy was perhaps the actual "reading copy" that Lincoln used when delivering the speech, since eyewitness accounts describe Lincoln pulling a folded piece of paper out of his coat pocket.

The other candidate is the [Hay draft](http://prod.myloc.gov/Exhibitions/gettysburgaddress/exhibitionitems/ExhibitObjects/HayDraft.aspx), which includes lots of changes and corrections in Lincoln's hand, giving it the appearance of working draft that was prepared just before the event. One problem with the Hays draft, though, is its size - it's written on larger paper and has just a single fold down the center, which would seem to make it an unlikely thing to tuck into coat pocket. When I read about this, I realized that I had paid almost no attention to the physical size of the manuscript. On the screen, it's either extremely small or almost infinitely large - a tiny speck when you zoom far back, and an endless plane of beige-and-black when you zoom in. But, in this case, size turns out to be of great historical significance - the Nicolay copy is smaller than the Hays copy, especially when folded along the set of matching creases clearly visible on the pages.

So, how big is it? This involved a bit of guesswork. The resource page for the manuscript on the Library of Congress website doesn't include dimensions, and direct Google searches didn't turn up an easy answer, so I started poking around the internet to see if I could find other Lincoln manuscripts written on the "Executive Stationery" used for the first page. I rooted up a couple of documents for sale by rare book sellers, and in [both](http://www.baumanrarebooks.com/rare-books/lincoln-abraham/autograph-letter-signed/63126.aspx) [cases](http://www.robertedwardauctions.com/auction/2006/1204.html) the dimensions are listed at about 5 inches in width and 7-8 inches in height, meaning that the Nicolay copy - assuming the stationery was more or less standardized - would have folded down to a roughly 5 x 2.5-inch rectangle, which seems reasonably pocket-sized. (Again, this is amateur historical conjecture - if I'm wrong, please let me know!)

I sketched out little ruler annotations labeling the width of the page and the height of the fold segment, but, zooming around the exhibit, I realized that I still didn't any intuitive sense of the size of the thing. Raw numerical measurements, even when you're beat across the head with them, become surprisingly abstract in the a-physical, point-of-reference-less netherlands of deeply-zooming digital landscapes. I dug out a ruler and zoomed the exhibit back until the first page occupied five real-world inches, and then held my hand up to the screen, imagining the sheet of paper in my hand. And then I thought - why not just bake some kind of visual reference directly into the exhibit? I hunted down a CC-licensed SVG illustration of a handprint, and, using the size of my own hand as a reference, used Neatline's import-SVG feature to position the outline in the whitespace to the right of the first page of the manuscript:

[![hand2](http://dclure.org/wp-content/uploads/2014/02/hand2.jpg)](http://dclure.org/wp-content/uploads/2014/02/hand2.jpg)
