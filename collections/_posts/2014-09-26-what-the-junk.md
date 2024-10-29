---
author: jeremy-boggs
date: 2014-09-26 14:07:28+00:00
layout: post
slug: what-the-junk
title: What. The. Junk.
category: essay
tags:
- makerspace
- 3dprinting
---

So I had to take a sick day yesterday. Stuffy nose, scratchy throat, headache, grouchiness. Attempting to brighten my day, Wayne sent me a nice text message:

<figure>
  ![Extra parts](http://static.scholarslab.org/wp-content/uploads/2014/09/extra-parts.jpg)
  <figcaption>
 Extra parts
</figcaption>

</figure>

Turns out he was joking. He actually said "totally" when I asked, but that turned out to be a lie. Today, here's what I came back to:

![Not joking sticky note attached to the printer, with message that it is out of order](http://static.scholarslab.org/wp-content/uploads/2014/09/out-of-order-1024x768.jpg)

So OK, maybe it's not as bad as it seems. Most of the time when we've clogged up the extruder, it's because we've leveled the build platform too close and caused it to scrape against the extruder, essentially mashing up the filament on the nozzle. Unloading and reloading the filament usually solves this, followed by running the leveling utility again.

I tried all that this time, but to no avail. [What. The. Junk.](http://undergroundcliche.blogspot.com/2014/07/lumberjanes-what-junk.html)

So as is typical of my kin, I feared the worse. I expected to spend a ton of time taking the extruder apart, soaking the nozzle in acetone or some other crazy substance to dissolve the filament that had built up in the nozzle. (This instructable has a good breakdown of the [steps to unclog a 3D printer nozzle](http://www.instructables.com/id/Clogged-MakerBot-Nozzle/).) With a heavy sigh that is also typical of my kin, I proceeded to disassemble the extruder.

First thing you need to do, of course, is turn off and unplug the printer. You'll touch wires and things, and its better to be safe than sorry. Then you have to take off the fan assembly in front of the extruder, and pull out the drive assembly:

<figure>
  ![Printer carriage with fan and stepper motor removed.](http://static.scholarslab.org/wp-content/uploads/2014/09/disassembled-1024x768.jpg)
  <figcaption>
 Printer carriage with fan and stepper motor removed.
</figcaption>

</figure>

At this point, I took a look at the drive assembly, which in our case includes the fabulous [spring-loaded arm replacement](http://scholarslab.org/experimental-humanities/reprinting-printed-parts/) for the drive. I noticed something a bit odd:

<figure>
  ![Stepper motor with spring-loaded arm](http://static.scholarslab.org/wp-content/uploads/2014/09/stepper-motor-assembly-1024x768.jpg)
  <figcaption>
 Stepper motor with spring-loaded arm
</figcaption>

</figure>

<figure>
  ![Close up of drive block.](http://static.scholarslab.org/wp-content/uploads/2014/09/stepper-motor-assembly-detail-1024x768.jpg)
  <figcaption>
 Close up of drive block showing obstruction
</figcaption>

</figure>

Turns out there was junk in it. What the junk indeed. I pushed the arm down to take some tension off the drive, and used a knife to wiggle the bit of plastic that had gotten lodged in there.

![plastic](http://static.scholarslab.org/wp-content/uploads/2014/09/plastic-1024x768.jpg)

Now it's working like new. Or at least like it did before it got clogged. Not sure how this little piece of plastic got stuck in here, but my guess is that it broke off the end of the filament when unloading it. The nozzle wasn't clogged at all, but this was preventing new filament from going completely through the drive assembly into the nozzle.
