---
author: david-mcclure
date: 2013-05-16 16:17:57+00:00
layout: post
slug: neatline-1-1-3-maintenance-release
title: Neatline 1.1.3 Maintenance Release
categories:
- Geospatial and Temporal
tags:
- neatline
---

This morning, [Kiyonori Nagasaki](https://twitter.com/knagasaki) noticed that one of the remote API's used by the Neatline 1.x releases went offline, which had the effect of breaking exhibits that included the SIMILE Timeline widget. To fix this, we just posted a [**1.1.3 maintenance release**](http://omeka.org/add-ons/plugins/neatline/) that patches up the timeline problem and also includes a couple of other improvements:





  * Disabled animated opacity transitions on WMS tiles, which were causing performance problems in recent builds of Chrome;



  * Fixed a bug that was causing the map not to focus correctly when a record is selected that has a default focus position/zoom, but no vector geometry.




[**Download Neatline 1.1.3**](http://omeka.org/add-ons/plugins/neatline/).

Meanwhile, lots of activity on the Neatline 2.0 front - we're almost done with a second alpha release, which gets us one step closer to a stable 2.0 release, which will include the migration to update existing installations from the 1.x series.

Stay posted!
