---
author: wendy-robertson
date: 2008-11-19 11:09:46+00:00
layout: post
slug: map-vocabularies
title: Map "Vocabularies"
category: essay
tags:
- geospatial and temporal
- visualization and data mining
---

For the past year, I have been working on the Scholars' Lab Geospatial Data Portal, the lab’s effort to make our GIS data sets readily available to UVA students, faculty, and staff via the world wide web by using a suite of open source, open standards-based applications. A particular aspect of this project that I have enjoyed exploring is the way in which we display our visual information.

Stop to think about the last paper map you used. Minor roads were probably displayed with a line of a certain color and thickness, highways with another. Green spaces were colored differently from open water and buildings etcetera. Cartographers have long toiled to develop visual representations of our environment and make them identifiable for the greater use. People naturally associate certain colors on a map with identifiable features in their environment (eg: the association of green on a map to forests, parks, and open areas). Much like a book, these symbols and representations must create a language which is understandable to the audience; else the information contained on the map will go unutilized.

What I have done for the Geospatial Data Portal is to expand our symbolic vocabulary. I create styles; XML based documents which allow us to display visual information through symbols that our patrons will understand and identify with specific attributes. An example: I can map the waterlines for a given city with a solid pink line with a width of 2 pixels. While it is true that the information is mapped and is useful to an extent, I think there is a way to display the same information while making it more visually recognizable as city waterlines and ultimately making the information more useable to our patrons. Instead of a solid pink line of a single width, we can display the information as blue lines with differing widths dependant upon the size of the pipe (ex: a main line feeder pipe with a diameter of 15ft is represented as a blue line with a pixel width of 8, whereas a small pipeline with a diameter of 2ft is represented with a blue line with a 1 pixel width.


<!-- ![](http://people.virginia.edu/~wmr8e/clip_image002.jpg) -->


So what has this accomplished? People tend to associate size on a map with importance in the real world, so by exaggerating the size difference of the pipe by weighting pixel width we can draw our users’ attention to the important locations on the map. And by using blue, we identify our information of interest as a water feature because most people associate blue on a map with water features in their environment. Now our patrons are able to go from displaying simple lines on a page to creating a map which displays intuitively symbolized information using only their internet browser. I believe this project has the potential to greatly expand the user-base for our GIS data sets and allow for new forms of scholarship because it makes the process of displaying information in an identifiable and comprehensible much more user friendly.



