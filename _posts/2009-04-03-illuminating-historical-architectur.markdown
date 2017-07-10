---
author: ewg4x
comments: true
date: 2009-04-03 16:30:22+00:00
layout: post
link: http://scholarslab.org/digital-humanities/illuminating-historical-architectur/
slug: illuminating-historical-architectur
title: Illuminating Historical Architecture
wordpress_id: 60
categories:
- Digital Humanities
- Geospatial and Temporal
- Visualization and Data Mining
tags:
- Digital Humanities
---

Following up on my [introduction](http://scholarslab.lib.virginia.edu/index.php/digital-humanities/research-applications-for-3d-models-in-art-history/) to using 3D models to recreate archaeological sites and perform meaningful academic analysis on simulated virtual environments, I will discuss in further detail my current project concerning the recreation of the [House of the Drinking Contest](http://cti.itc.virginia.edu/~jjd5t/ant-pics/10/index.htm) in Seleucia Pieria, the port city of Roman Antioch.

<!-- more -->

The house in its final phase dates to the third century A.D. and exhibited some of the most complete eastern Roman mosaics, all of which were removed from the site following the 1930's excavations and placed in American museums (including Richmond's very own [Virginia Museum of Fine Arts](http://www.vmfa.state.va.us/)).  What better way to view the mosaics than to recreate the environment in which they existed?  Mosaics in museums are entirely out of their original context.  Many floor mosaics are now hanging on walls.  Even in occasions that museums create elaborate sets to mimick the rooms from which the artwork was taken, it is impossible to recreate the entire structure or accurately recreate the lighting and allow us to view the mosaics as the original owners of the House of the Drinking Contest would have.

In my previous project of modeling the [House of the Faun](http://en.wikipedia.org/wiki/House_of_the_Faun), one of the largest houses in Pompeii, I had a lot of information to work with.  I had many photographs and artists' reconstructions to consider.  While the ceilings and roofs are gone, the walls are still more or less intact, and so are many of the wall paintings.  The House of the Drinking Contest is much more of a challenge since the walls collapsed and were removed long ago, leaving at most a half a meter of brick and rubble left.  There are clues, however, that let us accurately estimate the height of the walls, and hence a full reconstruction.  The plan indicates that columns were about 0.9 meters in diameter.  From our knowledge of classical orders and the overall dimensions of the house and rooms, we can assume the columns would not have been Corinthian or Ionic since both would have been too out of proportion with respect to the rest of the house.  The reason is that Corinthian and Ionic columns have 10:1 and 9:1 height-to-diameter ratios, respectively.  We can then safely assume an average-height Doric colonnade at a 5.5:1 ratio.  Other clues and experimentation with natural light simulation allow us to predict plausible window locations.

[![House of the Drinking Contest 3D by Ethan Gruber](http://people.virginia.edu/~ewg4x/house_of_the_drinking_contest_thumb.jpg)](http://people.virginia.edu/~ewg4x/house_of_the_drinking_contest.jpg)

(click for larger image)

Lighting simulation and computer modeling enable us to take this a step further and create timelapse animations demonstrating how light shifted throughout the hours of the day or days of the year.  We then know when mosaics would have been exposed to direct sunlight or were in the shade.  I found it useful to create an animation of standing in the _triclinium _(dining room) of the house, looking west toward the courtyard, to see if the _triclinium _received direct sunlight at any point of the day.  So far I have found that it does on March 21st of A.D. 200, and probably throughout the spring and autumn.  In fact, the room's mosaics are illuminated quite beautifully right around dinner time.

[[Link to video]](http://people.virginia.edu/~ewg4x/hotdc/caa-hdc-medium.mov).

While there is still work to do in the modeling, texturing, and animation of this particular Roman house, the use of accurate modeling techniques and lighting simulation can have a profound impact on archaeology, particularly in cultures that are solar-oriented.  I attended the [Computer Applications and Quantitative Methods in Archaeology](http://caa2009.org) conference last week in Williamsburg, and while there were many demonstrations of 3D models, none of the projects focused on incorporating temporal lighting and analyzing the outcome.  In nearly every case, temporal lighting is not even a consideration.

I did get a chance to informally demonstrate some of my work on the House of the Faun and the House of the Drinking Contest to some other classical archaeologists who are also involved in virtual reconstruction, but this facet of computer modeling has yet to hit the mainstream digital archaeology field, it seems.  Perhaps I will have the opportunity to demonstrate it to a wider audience at CAA next year.
