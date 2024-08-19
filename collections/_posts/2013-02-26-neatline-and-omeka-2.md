---
author: david-mcclure
date: 2013-02-26 13:53:00+00:00
layout: post
slug: neatline-and-omeka-2
title: Neatline and Omeka 2.0
category: essay
tags:
- research-and-development
- neatline
- omeka
crosspost:
  - title: dclure.org
    url: http://dclure.org/logs/neatline-and-omeka-2
---

We've been getting a lot of questions about when Neatline plugins will be ready for the [newly-released Omeka 2.0](http://omeka.org/blog/2013/01/24/omeka-2-0-drops-today/). The answer is - very soon! In addition to migrating all of the plugins ([Neatline](http://neatline.org/plugins/neatline/), [Neatline Time](http://neatline.org/plugins/neatline-time/), [Neatline Maps](http://neatline.org/plugins/neatline-maps/), [Neatline Features](http://neatline.org/plugins/neatline-features/)) over to the new version of Omeka, we're also using this transition to roll out a major evolution of the Neatline feature-set that incorporates lots of feedback from the first version.

Some of the new, Omeka-2.0-powered things on tap:





  * [Real-time spatial querying on the map](http://dclure.org/logs/neatline-one-million-records/), which makes it possible to work with really large collections of data (as many as 1,000,000 records in a single exhibit);



  * The ability to [import SVG documents from vector-editing programs like Adobe Illustrator](http://dclure.org/logs/neatline-drawing-svg-on-maps/), making it possible to render complex illustrations on the map;



  * A portable stylesheet system that allows exhibit-builders to use a CSS-like syntax to apply bulk updates to large collections of records;



  * An improved workflow for displaying Omeka items in Neatline exhibits - mix and match individual Dublin Core fields, entire metadata records, images, and other item attributes;



  * A flexible workflow for adding custom base layers in exhibits, which makes it possible to use Neatline to annotate non-spatial materials: paintings, drawings, abstract maps, and anything else that can be captured as an image.



  * A new set of hooks and filters - both on the server and in the browser - that make it easy to for developers to write modular add-ons and customizations for Neatline exhibits - legends, sliders, record display formats, integrations with long-format texts, etc.




The new version is just about feature-complete, and we're now in the process of tying up loose ends and writing the migration code to upgrade projects built on the 1.1.x releases. We're on schedule for a public beta by the end of March, and a full release by the end of the semester.

Going forward, we'll continue supporting the Omeka 1.5.x-compatible releases of Neatline from a maintenance standpoint, but we're moving all new development efforts into the new versions of the plugins, which only work with Omeka 2.0.

As the final pieces fall into place over the course of the next couple weeks, we'll start posting a series of alpha releases for developers and other folks who want to test-drive the new feature set. Between now and then, check out some of the feature-preview articles we've posted in the last couple weeks:

**[Neatline Feature Preview – 1,000,000 records in an exhibit](http://dclure.org/logs/neatline-one-million-records/)**
**[Neatline Feature Preview – Importing SVG documents from Adobe Illustrator](http://dclure.org/logs/neatline-drawing-svg-on-maps/)**




And watch this space for ongoing weekly updates!
