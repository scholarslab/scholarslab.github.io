---
author: david-mcclure
date: 2012-07-17 02:55:19+00:00
layout: post
slug: neatline-and-the-framework-challenge
title: Neatline and the framework challenge
categories:
- Geospatial and Temporal
---

With the first public release of [Neatline](http://neatline.org/) out the door, I've had the chance to take a short break from programming and think back over the nine-month development cycle that led up to the launch. In retrospect, I think that a lot of the exciting challenges we ran up against - the big, difficult questions about _what_ to program, as opposed to _how_ to program - emerged from tensions that are inherent in the task of creating frameworks as opposed to conventional applications.

What's a framework? As an experiment, I'll define the term broadly to mean applications that make it possible to _create things_, as opposed to applications that make it possible to _accomplish tasks_. Frameworks are generative in a way that normal applications are not. Instead of controlling systems, crunching numbers, automating processes, boosting efficiency, or providing entertainment, frameworks are set apart by the fact that the allow the user to spawn off new things that are independent of the software itself. 

Microsoft Word is used to create **documents**; Wordpress is used to create **blogs** and **blog posts**; Drupal is used to create **websites**; Ruby on Rails is used to build **web applications**; Illustrator is used to create **vector graphics**; Maya is used to create **3d models and animations**.

Omeka and Neatline fit straightforwardly into this definition. Omeka is used to build online digital collections; Neatline, a framework-within-a-framework built on top of Omeka, is used to create interactive maps and timelines. In each case, the final unit of analysis is some sort of discrete, addressable thing that is generated with the assistance of the software. It can be viewed, visited, or printed. Frameworks empower users to create things that would be difficult or completely impossible to create without the assistance of the software.

The paradox, though, is that frameworks have to simultaneously constrict the user's agency in the act of expanding it. Barring some kind of mythological ur-framework that would allow for direct, unmediated, and unbounded realization of thought (Prospero's book of magic), all frameworks, whether implicitly or explicitly, have to define a range of final outputs that will be "supported" by the software. In practice, this means paring down the supported outputs to a vanishingly small subset of the original possibility space. Frameworks are defined as much by what they disallow as by what they allow.

For the developer, deciding on the "range" of the framework is a difficult and sometimes agonizing process because it involves a fundamental tradeoff between _power_ and _accessibility_ - and, by extension, the size of the potential audience. As a framework becomes more powerful and allows a wider range of possible outputs, it also becomes more complex and locks out users who aren't willing to invest the effort to become proficient with the tool. As a framework becomes more narrow and focused, a larger number of people will be able and willing to use it, but the diversity of the final outputs drops, and the tool becomes suitable for a much smaller range of use cases. It's a zero-sum game.

Over the course of the last couple months, I've realized that this opposition between power and ease-of-use provides an interesting vocabulary for defining Neatline and situating it in the ecosystem of existing geospatial tools. Up until now, it seems to me that existing frameworks have clustered around the two ends of the power / ease-of-use spectrum. Consumer web applications like the Google mapmaker allow the user to drop pins and annotate them with short captions. This is delightfully easy, but all of the end-products look the same, and the tool doesn't really provide a critical mass of flexibility and the opportunity for real intellectual ownership that's required for serious scholarly use.

Meanwhile, at the other end of the spectrum, desktop GIS applications like ArcMap provide an incredibly powerful and feature-rich platforms for analyzing geospatial data and creating visualizations. For projects that have access to custom software development, programming libraries like [OpenLayers](http://openlayers.org/), [Leaflet](http://leaflet.cloudmade.com/), [PolyMaps](http://polymaps.org/), and [Timeglider](http://timeglider.com/jquery/) provide flexible, highly-customizable toolkits for creating interactive maps and timeline - but only at the level of code.

There's been an underpopulated zone in the middle the spectrum, though - not many spatio-temporal tools have tried to more evenly balance power and accessibility. Neatline tries to land in a "goldilocks" zone between the two poles. It tries to be simple enough out-of-the-box that it can be used by a large majority of scholars and students who do not have programming experience or advanced GIS expertise, but still complex enough to allow for significant diversity in the structure and style of the final output.

This means, of course, that Neatline _could_ be more powerful and _could_ be easier to use. My argument, though, is that it couldn't both - at least, not without tripping over itself and breaking apart into incoherence.

Instead of choosing one pole at the expense of the other, we decided to make a studious attempt to balance the two. This is difficult to do - perhaps more difficult than committing wholesale to one or the other, which can often have the effect of locking in a cascading series of almost automatic design decisions leading towards a more singular objective. Building "middle-ground" frameworks requires a constant (re-)calibration of the feature set over the course of the development process, a sort of gyroscopic vigilance to keep the software perched in the tricky zone between flexibility and accessibility.

Like all real challenges, though, this one was also fantastically exciting to tackle. Now that Neatline is out in the wild, I can't wait to see what people create with it.
