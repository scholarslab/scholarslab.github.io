---
author: err8n
comments: true
date: 2016-08-12 09:29:52+00:00
layout: post
link: http://scholarslab.org/announcements/neatline-implementation-grant/
slug: neatline-implementation-grant
title: Neatline Implementation Grant
wordpress_id: 12855
categories:
- Announcements
tags:
- grants
- neatline
---

![Screen Shot 2016-08-11 at 4.23.37 PM](http://scholarslab.org/wp-content/uploads/2016/08/Screen-Shot-2016-08-11-at-4.23.37-PM.png)

You may have noticed on Twitter or elsewhere that the [NEH announced funding for almost 300 humanities projects](http://www.neh.gov/news/press-release/2016-08-09). Congratulations to all!



One of the projects awarded was our [Neatline](http://neatline.org/) Omeka plugin! We're really excited by the possibilities that this will open up for this project and the ways that we're planning on improving it.



So what do we hope to accomplish? What should you be looking for from the future of Neatline?



Primarily, we're going to focus on _graphesis_ and _sustainability_.



First, Neatline has always been an experiment in trying to embody the principles of [graphesis](https://docs.google.com/viewer?a=v&pid=sites&srcid=ZGVmYXVsdGRvbWFpbnxlbmdhZ2VtZW50YnlkZXNpZ258Z3g6NzY1ZGY3ZWRmMmRkYTY3NA). It's motivated by the belief that interacting with your project and your data in a visual, hands-on, and messy way informs and changes the way that you think about your project. Of course, modern technology is limited in how well it can enact these principles. As mobile platforms and tablets have matured, however, they offer a more hands-on, material experience. We'd like to incorporate these new technologies and leverage them to improve the experience of creating and exploring Neatline exhibits.



Related to this, we want to improve the [Neatline Text](https://omeka.org/add-ons/plugins/neatlinetext/) add-on. This allows Neatline exhibits to incorporate and interact with long-form text. Unfortunately, the editing interface is still very rough. Improving this would go a long way to making Neatline a more compelling platform for creating geotemporal exhibits around a text.



And in general, we'll revisit the editing interface for Neatline to streamline it for common tasks, while making less used features still easily accessible.



Second, Neatline is itself also maturing, and like any software project, it's aging gracefully in some ways, and—ahem—less so in others. We'd like to take this opportunity to make Neatline a more sustainable project. This is a broad goal, so let's tease it apart. What do I mean by this?





  * The Omeka team at [RRCHNM](http://chnm.gmu.edu/) are working on a new version of the platform, called [Omeka S](https://github.com/omeka/omeka-s), that will make it significantly easier to host and managing multiple Omeka instances. This will involve significant changes to the plugin architecture, however, so we'll update Neatline to work with this new version of Omeka.


  * Currently, Neatline uses [OpenLayers](http://openlayers.org/) for its mapping component. After we included it in Neatline, however, OpenLayers released version 3, which is a major rewrite of this component for modern browsers. Because of licensing issues, it also no longer supports Google maps. We'll take this opportunity to evaluate upgrading to OpenLayers 3 or going with a different mapping component altogether, such as [LeafletJS](http://leafletjs.com/).


  * For the timeline component, Neatline uses the [SIMILE Timeline](http://www.simile-widgets.org/timeline/). This software is also showing its age, so we'll look at using a different timeline component, possibly creating one ourselves. This will also give us the chance to evaluate the data models that we use to represent time and change them to accommodate ambiguity and fuzzy dates better. This will also make this part of Neatline better suited to messy humanities data.


  * But the most important sustainability feature that we'd like to work on is building a more sustainable and active community. This includes better documentation, better tutorials, and better support for getting new developers set up to work on Neatline. We'd also like to make it easier for users to contribute in many ways to the project, whether through code, documentation, design, or other ways.




We're really excited about the opportunities that this grant opens up for us, and we're so grateful to the NEH ODH for providing the resources for this.

