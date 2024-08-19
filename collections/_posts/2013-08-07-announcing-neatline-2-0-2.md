---
author: david-mcclure
date: 2013-08-07 13:38:14+00:00
layout: post
slug: announcing-neatline-2-0-2
title: Announcing Neatline 2.0.2!
category: essay
tags:
- geospatial-and-temporal
- neatline
---

Today we're pleased to announce the release of [**Neatline 2.0.2**](http://omeka.org/add-ons/plugins/Neatline/)! This is a maintenance release that adds a couple of minor features and fixes some bugs we've rooted up in the last few weeks:






  * Fixes a bug that was causing item-import queries to fail when certain combinations of other plugins were installed alongside Neatline (thanks Jenifer Bartle and Trip Kirkpatrick for bringing this to our attention).




  * Makes it possible to toggle the real-time spatial querying on and off for each individual exhibit. This can be useful if you have a small exhibit (eg, 10-20 records) that can be loaded into the browser all at once without causing performance problems, and you want to avoid the added load on the server incurred by the dynamic querying.




  * Fixes some performance issues with the OpenStreetMap layer in Chrome.





And more! Check out the [release notes](https://github.com/scholarslab/Neatline/releases/tag/2.0.2) for the full list of changes, and grab the new code from the [Omeka add-ons repository](http://omeka.org/add-ons/plugins/Neatline/). Also, watch this space for a couple of other Neatline-related releases in the coming weeks. Jeremy and I are working on a series of themes for Omeka specifically designed to display Neatline projects, including the NeatLight theme, which is currently used on the [Neatline Labs](http://neatline.dclure.org) site I've started playing around with (still a work in progress). We're also just about ready to cut off a public release of the NeatlineText plugin, which makes it possible to connect records in Neatline exhibits to individual sections, paragraphs, sentences, and words in text documents (check out [this](http://neatline.dclure.org/neatline/show/saturn-v-stage-2) example).

Until then, give the new code a spin, and let us know what you think!
