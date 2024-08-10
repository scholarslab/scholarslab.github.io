---
author: adam-soroka
date: 2010-06-30 07:59:35+00:00
excerpt: In our work on Neatline, we have made a deliberate choice to start by restraining
  our work to map-sources that are quickly and easily provided through WMS. This leaves
  out (for now) two popular sources of map imagery; Google Maps and Open Street Map.
  I’m going to explain why we made that choice, and why, when we do come to make these
  sources usable with Neatline, we will do so with great care and with an eye to scholarly
  method.
layout: post
slug: wms-vs-tilecaching
title: WMS vs. tilecaching
category: essay
tags:
- geospatial and temporal
- visualization and data mining
- gis
- map
---

In our work on [Neatline](http://neatline.org/), we have made a deliberate choice to start by constraining ourselves to map-sources that are quickly and easily provided through [WMS](http://www.opengeospatial.org/standards/wms). This leaves out (for now) two popular sources of map imagery; [Google Maps](http://maps.google.com/) and [Open Street Map](http://www.openstreetmap.org/). I'm going to explain why we made that choice, and why, when we do come to make these sources usable with Neatline, we will do so with great care and with an eye to scholarly method.  <!-- more -->

All two-dimensional maps (as opposed to globes) are [projected](http://en.wikipedia.org/wiki/Map_projection). That is, the curved three-dimensional surface of the Earth is transformed onto a flat two-dimensional surface. This can be done in an infinite variety of ways, many of which have been mathematically characterized and named by cartographers, for whom they are necessary tools. We must note, however, that no such transform can obtain a perfect representation of a section of the Earth. The mapmaker must choose which qualities to preserve and in what measures. Is it more important to provide an accurate depiction of relative areas or of relative lengths? Is the area around Greenland to be kept in the focus of accuracy, or that around New Zealand?

Each map therefore carries with it from its creation certain choices like these, part of the arguments the map makes about the world by its very construction. We chose WMS on which to start building our tools because, amongst other reasons, it allows for the transmission of projection information as part of its operation. This fact allows us to produce imagery from historical maps (themselves in any number of projections) and maintain the original choices the mapmaker made. Google Maps and Open Street Map are not WMS sources. They can be described as tile caches, huge reservoirs of rendered imagery. As such, they offer their own choices about how the world is to be projected. (Google's choice has become so closely associated with Google that it is known widely as "the Google projection".)

Now we come to an important technical distinction; WMS services are able (depending on the capabilities of the specific software in use) to reproject their contents. That is, in response to a specific request for imagery, they can produce the imagery in a projection different from the one in which it was stored. [GeoServer](http://geoserver.org/display/GEOS/Welcome), the software we are using for Neatline, has a library of thousands of projections to which users can add more as desired. This allows us to take imagery from a WMS source and lay it under a historical map layer while maintaining the original projection for that of the map as a whole. Tile caches, by and large, do not allow for this. (Google Maps offers its one projection, and Open Street Map offers two.) This means that in order to lay historical map imagery over a layer from one of these sources, we would have to reproject the foreground (historical imagery) overriding the choices of the mapmaker and introducing additional choices of our own about what facets of the geographies at stake are to be preserved and which abandoned.

(Neogeographers will remark that georectifying a digital image introduces similar issues. This is true, but unavoidable for our purposes. We would like to avoid compounding the matter in a way that is subtle and hard to detect.)

We are working out means by which we can provide the undeniable utility of popular tilecaching services in a way that is respectful of the historical context and story of map artifacts. Until we do, we will continue to concentrate on the more flexible and sophisticated apparatus provided by WMS.
