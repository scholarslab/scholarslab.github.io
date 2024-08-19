---
author: ethan-reed
date: 2015-01-19 08:23:00+00:00
layout: post
slug: getting-under-the-hood-with-arduino
title: Getting “under the hood” with Arduino
category: essay
tags:
- electronics
- makerspace
- getting-started
---

Circuit boards, breadboards, digital inputs/output pins, analog outputs – “physical computing” can be an intimidating prospect for people with no experience.  As a person with almost no experience, I know these apprehensions first-hand.  Learning a new vocabulary, basic electronics, even basic programming? Ah!

I’m writing from my own experience with Arduino to say this: getting started with physical computing and even basic programming is easier than it sounds.  Taking a page from the pedagogical playbook of [Learn Code The Hard Way](http://learncodethehardway.org/), it worked best for me when I tried to _do_ something even if I didn’t understand everything when I got started.  I followed a set of instructions through to a given goal, and then learned about what I’d done and how I’d done it after the fact.  Arduino kits like the ones we have at the Makerspace are the perfect way to go about doing this.

So what is an Arduino?  As [their website](http://arduino.cc/en/Guide/Introduction) explains, these are miniature computers that “can sense and control more of the physical world than your desktop computer.”  They can take inputs from all sorts of sensors in the physical world and produce all sorts of outputs back into the physical world.  This ranges from making lights blink, a buzzer ring, taking temperatures, or [all sorts of crazy stuff](http://playground.arduino.cc/Projects/Ideas) that is much, much more complicated. And people are finding [new things to make every day](http://www.instructables.com/id/Arduino-Projects/).

But when I first got an Arduino it was just a box. Inside the box was an Arduino board, a breadboard, various wires and other things to plug in, and a USB to connect to my computer. Most importantly, there was an instruction manual.  Inside the manual I found a series of snappy pictures and diagrams with user-friendly (and often funny) explanations of what was going on.  I was using the manual from [SparkFun Inventor's Kit - V3](https://www.sparkfun.com/products/retired/11576). It suggested I get started trying to make an LED plugged into my breadboard blink at regular intervals.

The surprise was this: going through this thing was not only not-scary, it was incredibly fun. It was like building from a Lego manual, but for a circuit board – the bright and strangely shaped objects fitting together, the clearly diagrammed instructions, and the tangible end-product that gives not only a satisfied feeling of having built something, but also the slight amazement at what has been built (I did that? – really?). My light was blinking in a matter of minutes. I disassembled and moved onto the next chapter, building a potentiometer (a dial instead of a switch) to change the rate at which an LED blinked.

But where’s _the programming_? Something has to be making all these electronics do what you want. Indeed, there is some programming in programs called _sketches_.  But the programming was as simple as downloading the sketch files from the SparkFun tutorial into the Arduino program. Tada! Programming accomplished. And there are comments throughout the files explaining how the code works, and where you might try playing around with it.

Okay, so Arduinos are easy-to-use, inspire child-like joy a la Legos, and teach us some basics about physical computing and programming.  What about the bigger picture – why would I want to learn how to use them?

First, I consider it a form of what Matt Ratto calls “[critical making](http://www.tandfonline.com/doi/pdf/10.1080/01972243.2011.583819),” something I talk about in [my first post](http://scholarslab.org/experimental-humanities/come-explore-the-makerspace/) here.  Second, it’s a portal into understanding some of the other amazing work digital scholars are doing with physical computing. I’m thinking of a recent article on “circuit bending” by Nina Belojevic on “[Circuit Bending Videogame Consoles as a Form of Applied Media Studies](http://www.nanocrit.com/issues/5/circuit-bending-videogame-consoles-form-applied-media-studies),” in which she takes apart an NES console, rebuilds it purposefully as a “glitch console,” and reflects on the social implications of her material engagement with the physical hardware.  “By actively taking apart, breaking, remaking, and tinkering with these material devices,” she says, “hobbyists, hackers, artists, and scholars can engage with, study, highlight, and challenge social justice issues” – encouraging people to ask not just about developers, but about “who soldered the VRAM onto their console’s circuit board.”  Jon Jonson at UVic’s Maker Lab has posted about a related project on “[Building an SNES ‘Glitch Controller’](http://maker.uvic.ca/snes/)” – work that, he writes, is “contingent upon haptic exploration and depends highly on trial and error,” a kind of creative play to which I think Arduinos can be a great introduction.  This is not to mention projects that use actual Arduino’s as an interface with the physical world, [of which there are many](http://www.instructables.com/id/20-Unbelievable-Arduino-Projects/). So come in and try them out!
