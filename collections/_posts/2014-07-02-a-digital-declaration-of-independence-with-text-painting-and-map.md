---
author: david-mcclure
date: 2014-07-02 09:56:04+00:00
layout: post
slug: a-digital-declaration-of-independence-with-text-painting-and-map
title: A (Digital) Declaration of Independence
categories:
- Geospatial and Temporal
tags:
- neatline
- react
---

_[Cross-posted from [dclure.org](http://dclure.org/essays/a-digital-declaration-of-independence-with-text-painting-and-map/)]_



## [Launch the Exhibit](http://neatline.dclure.org/neatline/show/declaration-of-independence)



[![declaration-of-independence](http://dclure.org/wp-content/uploads/2014/07/declaration-of-independence-1024x610.jpg)](http://neatline.dclure.org/neatline/show/declaration-of-independence)

Way back in the spring of 2012, a couple months before we released the first version of Neatline, I drove up to Washington to give a little demo of the project to the folks at the Library of Congress. I had put together a couple of example exhibits for the presentation, but, the night before, I was bored and found myself brainstorming about Washington-themed projects. On a lark, I downloaded a [scan of the 1823 facsimile of the Declaration of Independence](http://www.archives.gov/exhibits/charters/declaration_transcript.html) from the National Archives website, and spent a couple hours tracing polygons around each one of the signatures at the bottom of the document. I showed the exhibit the next day, and had big plans to flesh it out and turn it into a real, showable project. But then I got swept up in the race to get the first release of Neatline out the door before DH2012 in Hamburg, and then sucked into the craziness of the summer conference season, and the project slipped down into the towering stack of things that I could never quite find time to work on.

For some reason, though, the idea popped back into my head a couple months ago - maybe because Menlo Park is submerged in a kind of permanent summer, and it pretty much always feels like a good time to eat ice cream and shoot off fireworks. After mulling it over for a couple weeks, I decided to resurrect it from the dead, spruce it up, and post it in time for the 4th of July. So, with two days to spare, here we go - an interactive edition of the Declaration of Independence, tightly coupled with three other "views" in an effort to add dimension to the original document:

A full-text, two-way-linked transcription of the manuscript and the signatures at the bottom. Click on sentences in the transcription to focus on the corresponding region of the scanned image, or click on annotated blocks on the image to scroll the text.

[![transcript](http://dclure.org/wp-content/uploads/2014/07/transcript-1024x620.jpg)](http://dclure.org/wp-content/uploads/2014/07/transcript.jpg)




An interactive edition of [Trumbull's "Declaration of Independence" painting](http://en.wikipedia.org/wiki/Trumbull%27s_Declaration_of_Independence), with each of the faces outlined and interactively linked with the corresponding signature on the document.

[![painting](http://dclure.org/wp-content/uploads/2014/07/painting1-1024x616.jpg)](http://dclure.org/wp-content/uploads/2014/07/painting1.jpg)




All of which is plastered on top of a map that plots out each of the signers' hometowns on a custom [Mapbox](https://www.mapbox.com) layer, which makes it easy to see how the layout of  the signatures maps on to the geographic layout of the colonies. Which, by extension, tracks the future division between Union and Confederate states in the Civil War - Georgia and the Carolinas look awful lonely over on the far left side of the document.

[![map](http://dclure.org/wp-content/uploads/2014/07/map1-1024x615.jpg)](http://dclure.org/wp-content/uploads/2014/07/map1.jpg)





Once I positioned the layers, annotated the signatures and faces, and plotted out the hometowns, I realized that I had painted myself into an interesting little corner from an information design standpoint - it was difficult to quickly move back and forth between the three main sections of the exhibit. In a sense, this is an inherent characteristic of deeply-zoomed interfaces. The ability to focus really closely on any one of the three visual grids - which is what makes it possible to mix them all together into a single environment - has the side effect of making the other two increasingly distant and inaccessible, more and more so the further down you go. For example, once you've focused in on Thomas Jefferson's face in the Trumbull painting, it's quite a chore to manually navigate to the corresponding signature on the document - you have to zoom back, pan the map up towards the scanned image, find the signature (often no easy task), and then zoom back down.

This is especially annoying in this case, since this potential for _comparison_ is a big part of what's interesting about the content. What I really wanted, I realized, was to be able to switch back and forth in a really simple, fluid way among the different instantiations of any individual person on the document, painting, and map - I wanted to be able to flip through them like a slideshow, to round up all the little partial representations of the person and hold them side-by-side in my head. So, as an experiment, I whipped up a little batch of custom UI components (built with the excellent [React](http://facebook.github.io/react/) library, which fits in like a dream with Neatline's Javascript API) that provide a "toggling" interface for each individual signer, and the exhibit as a whole.

By default, when you hit the page, three top-level buttons in the right corner of the window link to the the three main sections of the exhibit - the hometowns plotted along the eastern seaboard, the declaration over the midwest, and the painting over the southeast. In addition to the three individual buttons, there's also a little "rotate" button that automatically cycles through the three regions, which makes it easy to toggle around without looking away from the map to move the cursor:

[![exhibit-buttons](http://dclure.org/wp-content/uploads/2014/07/exhibit-buttons.jpg)](http://dclure.org/wp-content/uploads/2014/07/exhibit-buttons.jpg)

More useful, though, it's possible to bind any of the individual signers to the widget by clicking on the annotations. For example, if I click on Thomas Jefferson's face in the painting, the name locks into place next to the buttons, which now point to the representations of that specific person in the exhibit - "Text" links to Jefferson's signature, "Painting" to his face, and "Map" to Monticello:

[![signer-toggle](http://dclure.org/wp-content/uploads/2014/07/signer-toggle-1024x840.jpg)](http://dclure.org/wp-content/uploads/2014/07/signer-toggle.jpg)

Once you've activated one of the signers, click on the name to show an overlay with a picture and biography, pulled from a public domain book published by the National Park Service called Signers of the Declaration:

[![bio-overlay](http://dclure.org/wp-content/uploads/2014/07/bio-overlay-1024x624.jpg)](http://dclure.org/wp-content/uploads/2014/07/bio-overlay.jpg)

This is pretty straightforward on the map and document, where there's always a one-to-one correspondence between an annotation and one of the signers. Things get more complicated on the map, though, where it's possible for a single location to be associted with more than one signer. Philadelphia, for example, was home to Robert Morris, Benjamin Rush, Benjamin Franklin, John Morton, and George Clymer, so I had to write a little widget to make it possible to hone in on just one of the five after clicking the dot:

[![philadelphia](http://dclure.org/wp-content/uploads/2014/07/philadelphia-1024x377.jpg)](http://dclure.org/wp-content/uploads/2014/07/philadelphia.jpg)

Last but not least, each sentence in the document itself is annotated and wired up with the corresponding text transcription on the left - click on the image to scroll the text, or click on the text to focus the image:

[![text](http://dclure.org/wp-content/uploads/2014/07/text-1024x617.jpg)](http://dclure.org/wp-content/uploads/2014/07/text.jpg)

Happy fourth!
