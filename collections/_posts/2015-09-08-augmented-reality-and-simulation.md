---
author: wayne-graham
date: 2015-09-08 11:20:15+00:00
layout: post
slug: augmented-reality-and-simulation
title: Augmented Reality and Simulation
category: blog
tags:
- Research and Development
- VR-AR
- 3D printing
- makerspace
---

A few weeks ago the Scholars' Lab went on a field trip to the School of Architecture's "[FabLab](http://www.arch.virginia.edu/fabrication)" to check out a project Chris Gist and Melissa Goldman had been working on, a sand table that has a projector and a Kinect connected to a computer that projects a topology on to the sand.

[![IMG_0383](http://static.scholarslab.org/wp-content/uploads/2015/08/IMG_03831-1024x768.jpg)](http://static.scholarslab.org/wp-content/uploads/2015/08/IMG_03831.jpg)[
](http://static.scholarslab.org/wp-content/uploads/2015/08/IMG_0383.jpg)

This is an amazing tool that was developed by [a lot of different organizations](http://idav.ucdavis.edu/~okreylos/ResDev/SARndbox/), primarily to teach earth science concepts related to watershed science. However, it's also an amazing tool for teaching landscape and topography skills to architects (not to mention seriously fun to play with -- especially when you start to think about the possibilities of replacing the sand with [kinetic sand](https://www.youtube.com/watch?v=9Uc9uglgVAI)).

While we were there, several people mentioned how cool it would be to capture and 3D print these landscapes created in the classroom. I've seen dozens of programs to build models from the structured light sensors in the Kinect ([Skanect](http://skanect.occipital.com/) is a good example), so how hard could this be? In an R&D shop, these can be famous last words...

I started brushing off my really rusty OpenGL (this system is written for Linux) and started poking around with the [Kinect library](http://idav.ucdavis.edu/~okreylos/ResDev/Kinect/) that the project uses. Then I remembered how much "fun" OpenGL programming can be (coupled with rusty C++ skills) as I crashed the graphics drivers pretty spectacularly more than once (you can always tell because the screen goes blank and you can't see anything anymore).

After checking on the forums, the maintainer clued me in on a feature in the Kinect utilities that enables this feature, but needed a bit of a patch to work. From the `KinectViewer` utility you can record the output from the camera, and there is another utility that is not built by default that allows you to convert frames of this stream in to the Lightwave Object format (you may remember that from the Commodore Amiga days, if you're that old).

Right now (this will be folded in to the next release of the software), you need to clone my fork of the code ([https://github.com/waynegraham/Kinect](https://github.com/waynegraham/Kinect)) and to run a special `make` task:

```

$ cd path/to/clone
$ make PACKAGES=MYKINECT LWOWriter

```

The basic workflow was to use `SARndbox` to project the topology and then switch over to the `KinectViewer` utility to create the output. I was hoping this could be done simultaneously, but unless you have two Kinects, you can only use one at a time. When we record the stream, you get something that looks like this:



Then, using the `LWOWriter` to pull a single frame, you get single Lightwave Object file (which can be read in most 3D packages). After a bit of clean up (I used [Blender](https://www.blender.org/) and [Meshlab](http://meshlab.sourceforge.net/)), you get something that looks a bit more like the sand in the table.




[Sarndbox Test Output](https://sketchfab.com/models/e4126b035cf64fb8adb8cc2850bb509f?utm_source=oembed&utm_medium=embed&utm_campaign=e4126b035cf64fb8adb8cc2850bb509f)
by [waynegraham](https://sketchfab.com/waynegraham?utm_source=oembed&utm_medium=embed&utm_campaign=e4126b035cf64fb8adb8cc2850bb509f)
on [Sketchfab](https://sketchfab.com?utm_source=oembed&utm_medium=embed&utm_campaign=e4126b035cf64fb8adb8cc2850bb509f)


I also wrote a short program to help process the movies in to Lightwave (there are more instructions on this gist as well, so check it out):

<script src="https://gist.github.com/waynegraham/0e36c812ca64291797c1.js?file=converter.rb"></script>
