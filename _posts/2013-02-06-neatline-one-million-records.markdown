---
author: dm4fn
comments: true
date: 2013-02-06 09:37:30+00:00
layout: post
link: http://scholarslab.org/research-and-development/neatline-one-million-records/
slug: neatline-one-million-records
title: Neatline Feature Preview - 1,000,000 records in a single exhibit
wordpress_id: 7202
categories:
- Research and Development
tags:
- mysql
- neatline
- omeka
---

_[Cross-posted with [dclure.org](http://dclure.org/logs/neatline-one-million-records/)]_

**;tldr** - The upcoming version of Neatline makes it possible to build **huge** interactive maps with as many as 1,000,000 records in a single exhibit. It also introduces a new set of tools to search, filter, and organize geospatial data at that scale. Watch the screencast:



One of the biggest limitations of the first version of Neatline was the relatively small amount of data that could loaded into any individual exhibit. Since the entire collection of records was loaded in a single batch on page-load, exhibits were effectively constrained by the capabilities of the browser Javascript environment. Beyond a certain point (a couple hundred records), the front-end application would get loaded down with too much data, and performance would start to suffer.

In a certain sense, this constraint reflected the theoretical priorities of the first version of the project - small data over large data, hand-crafted exhibit-building over algorithmic visualization. But it also locks out a pretty large set of projects that need to be built on top of medium-to-large spatial data sets. In the upcoming version 1.2 release of the software (which also migrates the codebase to work with the [newly-released Omeka 2.0](http://omeka.org/blog/2013/01/24/omeka-2-0-drops-today/)) we've reworked the server-side codebase to make it possible to work with really large collections of data - as many as 1,000,000 records in a single Neatline exhibit. Three basic changes were needed to make this possible:






  1. **Spatial data needed to loaded "on-demand" in the browser.** When the viewport is focused on San Francisco, the map doesn't need to load data for New York. Huge performance gains can be had by loading data "as-needed" - the new version of Neatline uses the [MySQL spatial extensions](http://dev.mysql.com/doc/refman/5.5/en/spatial-extensions.html) to dynamically query the collection when the user moves or zooms the map, and just loads the specific subset of records that fall inside the current viewport.

As long as the exhibit creator sensibly manages the content to ensure that no more than a couple hundred records are visible at any given point (which isn't actually much of a limitation - anything more tends to become bad information design), this means that the size of Neatline exhibits is effectively bounded only by the capabilities of the underlying MySQL database.



  2. **The editor needed more advanced content management tools to work with large collections of records.** In the first version of Neatline, all the records in an exhibit were stacked up vertically in the editing panel. If the map can display 1,000,000 records, though, the editor needs more advanced tooling to effectively manage content at that scale. Neatline 1.2 adds full-text search, URL-addressable pagination, and a "spatial" search feature that makes use of the map as a mechanism to query and filter the collection of records.




  3. **There needed to be an easy way to make batch updates on large sets of records in an exhibit.** Imagine you're mapping election returns from the the 2012 presidential election and have 20,000 points on neighborhoods that voted democratic. If you decide you want to change the shade of blue you're using for the dots, there has to be an easy way of updating all 20,000 records at once, instead of manually updating each of the records individually.

In version 1.2, we've made it possible to assign arbitrary tags to Neatline records, and then use a CSS-like styling language - inspired by projects like [Cascadenik](https://github.com/mapnik/Cascadenik) - to define portable stylesheets that make it easy to apply bulk updates to records with a given tag or set of tags.




These are big changes, and we're really excited about the new possibilities that open up with this level of scalability. At the same time, all development carries an opportunity cost - working on features A and B means you're not working on features C and D. Generally, Neatline is on a trajectory towards becoming a much more focused piece of software that hones in on a lean, extensible toolset for building interactive maps. We're taking a hard look at features that don't support that core competency.

In the coming weeks, we'll release an alpha version of the new codebase and solicit feedback from users to figure out what works and what doesn't. What's essential? What's expendable? What assumptions are we making that nobody else is making?
