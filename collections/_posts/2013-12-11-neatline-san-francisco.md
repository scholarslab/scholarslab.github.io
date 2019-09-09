---
author: david-mcclure
date: 2013-12-11 12:14:03+00:00
layout: post
slug: neatline-san-francisco
title: Neighborhoods of San Francisco
categories:
- Geospatial and Temporal
tags:
- neatline
crosspost:
  - title: dclure.org
    url: http://dclure.org/essays/neighborhoods-of-san-francisco/
---



## [View the Exhibit](http://neatline.dclure.org/neatline/show/neighborhoods-of-san-francisco)



[![neighborhoods-of-san-francisco](http://dclure.org/wp-content/uploads/2013/12/neighborhoods-of-san-francisco.jpg)](http://neatline.dclure.org/neatline/show/neighborhoods-of-san-francisco)

Built on the [Stamen Toner layer](http://maps.stamen.com/#toner/12/37.7706/-122.3782).

Back in October, about a month after moving from Scholars' Lab HQ in Virginia out to Menlo Park (my partner started a PhD program at Stanford), I drove up the peninsula to San Francisco on a Saturday morning and set out on a long, rambling, 10-mile trek along the northwest shoulder of the city. It was a fantastic day - I walked west through Golden Gate Park, north along the Richmond beach, past the Cliff House, into the fog over Lincoln Park, through the mansions in Sea Cliff, past the abandoned artillery nests on the western coast of the Presidio, and finally out onto the Golden Gate bridge. From there, I headed south through the trails in the Presidio, into Richmond, and eventually back to where I started, near the top right corner of the park.

From the middle of the Golden Gate Bridge, you can look out to the east over a large swath of the city - the skyscrapers of the financial district, the new span of the Bay Bridge hanging over Treasure Island, Alcatraz, and the faded outline of the East Bay, the Berkeley campus a little smudge at the base of the ridge line. But, scanning my eyes over the rest of the city, I realized that I had very little sense of what I was actually looking at. I could attach labels onto all the touristy landmarks, but I didn't have any kind of intuitive mental geography of the place - the names of all the little hills and neighborhoods, what connects to what, how to string the pieces of the city together into workable routes and itineraries.

So, over the course of the next few weeks, I slowly cobbled together a [Neatline exhibit](http://neatline.dclure.org/neatline/show/neighborhoods-of-san-francisco) that plots out each of the neighborhoods in the city - 87 of them, by my count, although it's somewhat a matter of interpretation as to how they should be sliced and diced. Working mainly from [this image](http://www.reocities.com/mwarren_us/sf-neighborhoods/SFNeighborhoods.gif) as reference, I started by tracing rough outlines of the boundaries (using Neatline's standard-issue "Draw Polygon" tool) on top of Stamen's Toner layer. Then, once the borders were in place, I used Neatline's SVG import tool to place vector-geometry text labels on top of each of the individual neighborhoods, inspired by other spatial-wordcloud experiments like [this](http://sfsgeography.wikispaces.com/file/view/SF_neighborhhods.jpg/184285923/SF_neighborhhods.jpg) and [this](http://www.californiatravel.eu/travel/NeighborhoodsofSanFrancisco.jpg).

**Adventures in geospatial typesetting**

This was great fun, and, interestingly, it ended up overlapping in unexpected ways with the [interactive](http://dclure.org/essays/experimental-typesetting-with-neatline-and-shakespeare/) [typesetting](http://dclure.org/essays/more-fun-with-interactive-typesetting-a-coat-by-yeats/) [projects](http://dclure.org/essays/song-of-wandering-aengus/) that I was playing with earlier in the semester. The process of positioning the labels becomes a kind of textual jigsaw puzzle, a game of trying to wrangle the raw, geometric instantiations of words into a coherent organizational scheme - except, this time, against the backdrop of actual geospatial coordinates and locations, not the abstract, featureless voids of the poetry experiments. Often, this is pretty straightforward - Noe Valley and the Inner Mission, for example, just get tagged as such:

[![noe-valley-inner-mission](http://dclure.org/wp-content/uploads/2013/12/noe-valley-inner-mission.jpg)](http://dclure.org/wp-content/uploads/2013/12/noe-valley-inner-mission.jpg)

In other places, though, the names of the neighborhoods overlap with one another in ways that make it possible to find interesting "economies" in how the words can be laid out on the map - when adjacent neighborhoods share the same words, it's sometimes possible to essentially atomize the names into their component parts, and then rebuild them according to their own spatial logic, in a sense, by visually stringing together the pieces on the map. Take Richmond, for example, which is divided into three side-by-side segments: Outer Richmond, Central Richmond, and Inner Richmond. Instead of cluttering things up by repeating "Richmond" for each of the three sections, I just dragged out a single, all-encompassing "Richmond" across the entire width of the three sub-neighborhoods, and the blocked in the three modifiers as smaller words on top of the corresponding sections:

[![richmond](http://dclure.org/wp-content/uploads/2013/12/richmond.jpg)](http://dclure.org/wp-content/uploads/2013/12/richmond.jpg)

This worked much the same way for the Sunset and Parkside neighborhoods, which share the same cleanly partitioned spatial organization:

[![sunset](http://dclure.org/wp-content/uploads/2013/12/sunset.jpg)](http://dclure.org/wp-content/uploads/2013/12/sunset.jpg)

With the exception of the "middle" portion of Parkside, which is just the un-prefixed "Parkside," meaning that the center piece doesn't get a separate modifier:

[![parkside](http://dclure.org/wp-content/uploads/2013/12/parkside.jpg)](http://dclure.org/wp-content/uploads/2013/12/parkside.jpg)

In other cases, though, it gets much trickier, and much more interesting. Take the little cluster of neighborhoods at the southwest corner of the Presidio, the big park at the base of the Golden Gate Bridge. It's a hodgepodge of repeated names, but in a much more scrambled and overlapping way - Presidio, Presidio Heights, Pacific Heights, Lower Pacific Heights. In this case, I had to take a bit more care to place the little black arrows in ways that didn't connote incorrect linkages among the names. For example, the relationship between Presidio and Presidio Heights moves in just one direction - Presidio Heights (labelled with just "Heights" on the map) needs to "inherit" the "Presidio" modifier from the Presidio, but not the other way around, since the Presidio ceases to be the Presidio when "Heights" is tacked onto it:

[![presidio](http://dclure.org/wp-content/uploads/2013/12/presidio.jpg)](http://dclure.org/wp-content/uploads/2013/12/presidio.jpg)

To encode these relationships, I settled on a rule of thumb that the arrows would always be _contained inside the neighborhoods that they modify_. So, the arrow pointing from "Presidio" to "Heights" is fully contained inside of the geographic boundaries of Presidio Heights, in the sense that it pulls "Presidio" downward into the "Heights," without also pushing "Heights" back in the other direction (which would effectively mislabel the Presidio). Likewise the link between "Pacific" and "Heights" is contained within the Pacific Heights outline, since otherwise Presidio Heights would be implicitly but incorrectly prefixed by "Pacific."

Anyway, this is all completely useless as actual cartographic practice, but great fun as a kind of abstract _étude_ of information design. It's also incredibly useful as a mnemonic device - after untold hours in Palo Alto coffee shops sketching out all the outlines and positioning the labels, they're all thoroughly burned into my mind. This is an interesting aspect of digital mapping projects that doesn't get a lot of attention - we tend to focus on the final products, the public-facing visualizations and interactions (for good and obvious reasons), but much less on the _process_ that goes into creating them, the personal acquisition of knowledge that takes place when you force yourself to spend dozens or hundreds of hours painstakingly positioning and repositioning things on maps. It gives you an incredible sense of cognitive intimacy with the space, the ability to load a little chunk of the world into working memory and reason about it in really complex and interesting ways.
