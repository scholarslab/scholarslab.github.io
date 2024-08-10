---
author: david-mcclure
date: 2014-03-17 10:32:01+00:00
layout: post
slug: project-gemini-over-baja-california
title: Project Gemini over Baja California
category: essay
tags:
- geospatial and temporal
- neatline
crosspost:
  - title: dclure.org
    url: http://dclure.org/logs/project-gemini-over-baja-california
---



## [Launch the Exhibit](http://neatline.dclure.org/neatline/show/gemini-over-baja-california)



[![gemini-screenshot](http://dclure.org/wp-content/uploads/2014/03/gemini-screenshot-1024x615.jpg)](http://neatline.dclure.org/neatline/show/gemini-over-baja-california)

A couple weeks ago, somewhere in the middle of a long session of free-association link hopping on Wikipedia, I stumbled into a cluster of articles about [Project Gemini](http://en.wikipedia.org/wiki/Project_Gemini), NASA's second manned spaceflight program. Gemini, I quickly discovered, produced some spectacular photographs - many of them pointed downward towards the surface of the earth, capturing a dizzying opposition between the intelligible scale of the foreground (the 20-foot capsule, 100-foot tethering cords, 6-foot human bodies floating in space) and the completely unintelligible scale of the massive geographic entities below (peninsulas, continents, oceans).

As I started to click through the pictures, I found myself reflexively alt-tabbing back and forth between Chrome and Google Earth to compare them with the modern satellite imagery of the same geographic locations. Which made me think - why not try to actually combine the two into a single environment? Over the course of the next few days, I sketched out a little Neatline exhibit that plasters two photographs of Baja California Sur - taken about a year apart on Gemini 5 (August 1965) and Gemini 11 (September 1966) - around the Mapbox satellite imagery of the peninsula. Instead of lining up the coastlines to make the images overlay accurately on top of the satellite tiles, I just plunked them down on the map off to the side at a scale and orientation that makes it easy to compare the two. (We've [played around with this before](http://hotchkiss.neatline.org/neatline-exhibits/show/my-dear-little-nelly/fullscreen), and I like to think of it as faux - or just especially humanistic! - georectification.)

[![faux-georectification](http://dclure.org/wp-content/uploads/2014/03/faux-georectification-1024x616.jpg)](http://dclure.org/wp-content/uploads/2014/03/faux-georectification.jpg)

Then, using the drawing tools in Neatline, I blocked in some simple annotations that visually wire up the two sets of imagery - outlines around the four islands along the eastern coast of the peninsula, and arrows between the different instantiations of La Paz and San José del Cabo. I also wanted to find a way to visually formalize the difference in perspective between the Gemini photographs (oblique, wide-angle, deliberate) and the Mapbox tiles (flat-on, uniform). Using Illustrator, I created a long, ruler-like vector shape to label the ~200-mile distance between La Paz and the approximate positon of the Gemini 5 capsule when the picture was taken, and then used the "Perspective Grid" tool to render the shape in three dimensions and place it on top of the Gemini photograph, as if the same shape were physically positioned in front of the lens. In Illustrator:

[![200-miles-illustrator](http://dclure.org/wp-content/uploads/2014/03/200-miles-illustrator-1024x564.jpg)](http://dclure.org/wp-content/uploads/2014/03/200-miles-illustrator.jpg)

And placed in the Neatline exhibit, first to match the shallow angle of the Gemini shot:

[![200-miles](http://dclure.org/wp-content/uploads/2014/03/200-miles-1024x619.jpg)](http://dclure.org/wp-content/uploads/2014/03/200-miles.jpg)

And then to match the perpendicular angle of the Mapbox tiles:

[![200-miles-mapbox](http://dclure.org/wp-content/uploads/2014/03/200-miles-mapbox-1024x602.jpg)](http://dclure.org/wp-content/uploads/2014/03/200-miles-mapbox.jpg)

I was also fascinated by the surreal opposition in scale between the Agena Target Vehicle (an unmanned spacecraft used for docking practice in orbit) and Isla San José, which sits serenely in the dark blue of the Gulf of California hundreds of miles below, but occupies almost exactly the same amount of space in the photograph as the 7-foot boom antenna on the Agena. In the space between the two, I dragged out two little shapes that map the sizes of things onto recognizable objects - a 6-foot person in the foreground, Manhattan in the background:

[![manhattan-person](http://dclure.org/wp-content/uploads/2014/03/manhattan-person-1024x617.jpg)](http://dclure.org/wp-content/uploads/2014/03/manhattan-person.jpg)

**Perspective and Perspectivelessness**

These images fascinate me because they roll together two types of imagery - both ubiquitous on the web - that are almost exact opposites of one another. On the one hand, you have regular pictures, taken by regular (non-astronaut) people. These photographs freeze into place one particular _perspective_ on things. In a literal sense, the world recedes from the lens in three dimensions - walls, buildings, bridges, mountains, valleys, clouds. Close things are big, distant things are small. Some are in focus, others aren't. And unlike other forms of art like painting, poetry, sculpture, or music, which can claim (overconfidently, maybe) to graft completely new material onto the world, photographs innovate at the level of _stance_ and _viewpoint_, the newness of the perspective on things that already exist. It's less about what they add, more about what they subtract in order to whittle the world down to one particular frame. Why that angle? Why that moment? Why _that_, and not anything else?

On the other hand you have spatial photography - the satellite imagery used in [Google Maps](https://www.google.com/maps), [Mapbox](https://www.mapbox.com/), [Bing Maps](http://www.bing.com/maps/), etc. - which is almost completely _perspectiveless_, in just about every sense of the word. The world becomes a flat, depthless plane, photographed from a distance at a perpendicular angle. Instead of trying to find interesting new ways to crop down the world, spatial tiles try to be comprehensive and standardized. Instead of showing one thing, in one way, at one moment in time, they try to show everything, in the exact same way, at the exact same moment - now. The companies that source and assemble the satellite imagery race to keep it as current as possible, right at the threshold of the present. Last year, Google announced that its satellite imagery had been [purged of all clouds](http://google-latlong.blogspot.com/2013/06/only-clear-skies-on-google-maps-and.html). No doubt this makes it more functional, but it also does away with those wispy, bright-white threads of cloud that used to hang over the rainforests in Peru and Brazil, which were lovely. What's gained, of course, is the intoxicating grandeur of it all, the ability to hold in a single view a photograph of the entire world - which, if nothing else, is some sort of crazy affirmation of human willpower. I always imagine Whitman, scratching out "[Salut au Monde](http://www.bartelby.com/142/74.html)", panning around Google Maps for inspiration.

Photographs taken by astronauts, though, collapse the distinction in interesting ways. They're literally "satellite" photography, but they're also drenched in subjectivity and historical stance. The oceans and continents spread out hundreds of miles below, just like on Google Maps or Mapbox - but the pictures were snapped with regular cameras by the hands of actual people, stuffed into little canisters falling around the world at thousands of miles an hour, which were only up there in the first place due to a crazy mix of socio-political ambitions and anxieties that were deeply characteristic of that particular moment in history. The Gemini imagery is haloed with little bits of space-race technology that instantly historicizes the frame - the nose cone of the capsule blocks out a huge swath of desert and ocean, the Agena vehicle hangs just a couple of hundred feet from the camera, tethered by a slight, ribbon-like cord that twists for hundreds of miles across the Gulf of California.
