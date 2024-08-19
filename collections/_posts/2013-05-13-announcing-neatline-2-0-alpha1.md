---
author: david-mcclure
date: 2013-05-13 10:38:10+00:00
layout: post
slug: announcing-neatline-2-0-alpha1
title: Announcing Neatline 2.0-alpha1!
category: essay
tags:
- geospatial-and-temporal
- neatline
crosspost:
  - title: dclure.org
    url: http://dclure.org/logs/announcing-neatline-2-0-alpha1/
---

![neatline-2.0-alpha1-small](http://static.scholarslab.org/wp-content/uploads/2013/05/neatline-2.0-alpha1-small.png)

It's here! After much hard work, we're delighted to announce the first alpha release of Neatline 2.0, which migrates the codebase to Omeka 2.0 and adds lots of exciting new things. For now, this is just an initial testing release aimed at developers and other brave folks who want to tinker around with the new set of features and help us work out the kinks. **Notably, this build doesn't yet include the migration to upgrade existing exhibits from the 1.1.x series**, which we'll ship with the first stable release in the next couple weeks once we've had a chance to field test the new code.


45 minutes of Neatline 2.0 alpha testing, compressed to 90 seconds, set to Chopin.

In the interest of modularity (more on this later), the set of features that was bundled together in the original version of Neatline has been split into three separate plugins:






  * **[Neatline](http://neatline.org/wp-content/uploads/2013/05/Neatline-2.0-alpha1.zip)** - The core map-making toolkit and content management system.



  * **[NeatlineWaypoints](http://neatline.org/wp-content/uploads/2013/05/NeatlineWaypoints-0.1.zip)** - A list of sortable waypoints, the new version of the vertical "Item Browser" panel from the 1.x series.



  * **[NeatlineSimile](http://neatline.org/wp-content/uploads/2013/05/NeatlineSimile-0.1.zip)** - The SIMILE Timeline widget.




Just unpack the `.zip` archives, copy the folders into the `/plugins` directory in your Omeka 2.x installation, and install the plugins in the Omeka admin. For more detailed information, head over to the [**Neatline 2.0-alpha1 Installation Wiki**](https://github.com/scholarslab/Neatline/wiki/Neatline-2.0-alpha1-Installation), and take a look at the [**change log**](https://github.com/scholarslab/Neatline/blob/develop/CHANGELOG.md) for a more complete list of changes and additions.

We're really excited about this code. Since releasing the first version last summer, we've gotten a huge amount of incredibly helpful feedback from users, much of which has been directly incorporated into the new release. We've also added a carefully-selected set of new features that opens up the door to some really interesting new approaches to geospatial (and completely _non_-geospatial) annotation. It's a leaner, faster, more focused, more reliable, and generally more capable piece of software - we're excited to start building projects with it!

Some of the additions and changes:






  * **Real-time spatial querying**, which makes it possible to create _really_ large exhibits - as many as about 1,000,000 records on a single map;




  * **A total rewrite of the front-end application** in [Backbone.js](http://backbonejs.org/) and [Marionette](http://marionettejs.com/) that provides a more minimal, streamlined, and responsive environment for creating and publishing exhibits;




  * **An interactive "stylesheet" system** (inspired by projects like Mike Migurski's [Cascadenick](https://github.com/mapnik/Cascadenik)), that makes it possible to use a dialect of CSS - built directly into the editing environment - to synchronize large batches of records;




  * **The ability to import high-fidelity SVG illustrations** created in specialized vector editing tools like Adobe Illustrator and Inkscape;




  * **The ability to add custom base layers**, which, among other things, makes it possible to annotate completely non-spatial entities - paintings, photographs, documents, and anything else that can be captured as an image;




  * **A revamped import-from-Omeka workflow** that makes it easier to link Neatline records to Omeka items and batch-import large collections of items;




  * **A flexible programming API and "sub-plugin" system** that makes it easy for developers to extend the core feature set with custom functionality for specific projects - everything from simple JavaScript widgets (legends, sliders, scrollers, etc.) up to really deep modifications that extend the core data model and add completely new interactions.





Over the course of the next two weeks, I'll be writing in much more detail about some of the new features. In the meantime - let us know what you think! We're going to be pushing out a series of alpha releases in pretty rapid succession over the course of the next couple weeks, and we're really keen to get feedback about the new features before cutting off a stable 2.0 release. If you find a bug, or think of a feature that you'd like to see included, be sure to file a report on the [issue tracker](https://github.com/scholarslab/Neatline/issues).
