---
author: david-mcclure
date: 2013-02-13 10:27:13+00:00
layout: post
slug: neatline-drawing-svg-on-maps
title: Neatline Feature Preview - Importing SVG documents from Adobe Illustrator
categories:
- Research and Development
tags:
- neatline
- omeka
- svg
---

_[Cross-posted with [dclure.org](k: http://dclure.org/logs/neatline-drawing-svg-on-maps)]_

**;tldr** - The new version of Neatline makes it possible to take SVG documents created in vector editing software like Adobe Illustrator and [Inkscape](http://inkscape.org/) and "drag" them directly onto the map, just like a regular polygon. This makes it possible to create really sophisticated illustrations that go far beyond the blocky, "sharp-edge" style that we usually associate with digital maps. Check out the screencast (and scroll down for screenshots):



The first version of Neatline implemented a pretty standard set of GIS controls for sketching vector geometry onto maps - points, lines, and polygons. It was easy to sketch out simple shapes, but more difficult to create really intricate, complex illustrations.

Really, this is a sort of ubiquitous problem with digital maps, which tend to be good at representing _points_, but bad at representing _curves_. Under the hood, shapes on digital maps are represented by a series of X/Y coordinate pairs, wrapped up into different geometry types that store information about how the points should be displayed. For example, in [Well-Known Text](http://en.wikipedia.org/wiki/Well-known_text) - the serialization format used by databases like PostGIS and MySQL - a line is represented by `LINESTRING(1 2,3 4,5 6)`, a polygon by `POLYGON((1 2,3 4,5 6,1 2))`, and so on and so forth. At the end of the day, everything is just a series of hard-coded points, strung together to form shapes.

This low-level organization in the data tends to bubble up to the level of user interfaces in the form of map sketching tools that make it easy to draw **jagged** shapes but hard to draw **smooth** shapes. For example, in the first version of Neatline, drawing this is easy:

[![polygon](http://dclure.org/wp-content/uploads/2013/02/polygon-300x300.jpg)](http://dclure.org/wp-content/uploads/2013/02/polygon.jpg)

But this is much harder:

[![arrow](http://dclure.org/wp-content/uploads/2013/02/arrow-300x224.jpg)](http://dclure.org/wp-content/uploads/2013/02/arrow.jpg)

It's still possible, but it's time-consuming and brittle - if you change your mind later and want to adjust the curvature of the arrow, you have to manually reposition dozens of points. This especially frustrating since, in other domains, this is a well-understood problem with lots of high-quality solutions: Vector graphics editors like Adobe Illustrator, [Inkscape](http://inkscape.org/), and even in-browser tools like [svg-edit](http://svg-edit.googlecode.com/svn/branches/2.6/editor/svg-editor.html) make it easy to create smooth, complex vector-based geometries that can be serialized to a portable XML format called [SVG](http://en.wikipedia.org/wiki/SVG) (Scalable Vector Graphics).

In the upcoming release of Neatline, we've made it possible to take SVG markup created in any vector editing tool and place it directly onto the map. Just save off any vector graphic as a SVG document, open up the file in a text editor, and paste the raw markup into the Neatline editor. Then just drag out the shape to any position, dimension, and orientation on the map. Once the new geometry is in place, it behaves just like regular points and polygons added with the default controls - it can be styled and edited just like anything else on the map.

This also opens up a whole new front of high-fidelity text-based annotation on digital maps. Since vector editors can convert strings of text into SVG paths, this makes it possible to sketch out labels, snippets, or even little paragraphs of content directly onto the map itself.

[![neatline](http://dclure.org/wp-content/uploads/2013/02/neatline-1024x600.jpg)](http://dclure.org/wp-content/uploads/2013/02/neatline.jpg)

[![neatline-closeup](http://dclure.org/wp-content/uploads/2013/02/neatline-closeup-1024x598.jpg)](http://dclure.org/wp-content/uploads/2013/02/neatline-closeup.jpg)

[![slab](http://dclure.org/wp-content/uploads/2013/02/slab-1024x599.jpg)](http://dclure.org/wp-content/uploads/2013/02/slab.jpg)

[![at](http://dclure.org/wp-content/uploads/2013/02/at-1024x600.jpg)](http://dclure.org/wp-content/uploads/2013/02/at.jpg)

[![at-closeup](http://dclure.org/wp-content/uploads/2013/02/at-closeup-1024x597.jpg)](http://dclure.org/wp-content/uploads/2013/02/at-closeup.jpg)
