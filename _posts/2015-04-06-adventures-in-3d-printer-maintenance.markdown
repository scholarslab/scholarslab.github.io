---
author: ssl2ab
comments: true
date: 2015-04-06 15:38:42+00:00
layout: post
link: http://scholarslab.org/experimental-humanities/adventures-in-3d-printer-maintenance/
slug: adventures-in-3d-printer-maintenance
title: Adventures in 3D Printer Maintenance
wordpress_id: 11550
categories:
- Experimental Humanities
tags:
- 3D printing
- makerbot
- repair
- replicator
---

Recently, the fan on the bottom of our Makerbot Replicator Dual Extruder began to make some unhealthy noises. Per SLab desk protocol, the first attempt at a remedy was to smack the thing near where it was making the noise, which made it go away for a little while. Eventually, we got tired of hitting our printer every time we started it up, so I took off the bottom panel to oil the cheap 40mm case fan within. Here's what I found.

[![2015-02-11 13.19.05](http://scholarslab.org/wp-content/uploads/2015/02/2015-02-11-13.19.05-222x300.jpg)](http://scholarslab.org/wp-content/uploads/2015/02/2015-02-11-13.19.05.jpg)

Amazingly, like an Alaskan infrastructure project, this fan didn't actually lead anywhere. The only inlets were the small holes in the corner formed by the chamfer of the horizontal plates, so it mostly served to move hot air around the Mightyboard chamber. This lead me to wonder whether or not a fan was actually necessary, especially since the Replicator 2 has no bottom fan at all for its Rev. G Mightyboard.

This line of inquiry lead to a surprising discovery. Original Replicators with Rev. E boards use very inexpensive [linear voltage regulators](http://en.wikipedia.org/wiki/Linear_regulator) to bring the 24V power supply down to the 5V that the Mightyboard requires. The regulator is the thing right next to the plug in that picture. Linear regulators function by bleeding off excess energy as waste heat. Hence the fan.

A 19V voltage drop at a ballpark 300mA for the board means about 5.7W that needs to be dissipated. That's actually a lot of power! It also seems that Mightyboards from the Rev. E era fail at a pretty alarming rate and the main culprit is the voltage regulator. The Internet is [a bit divided on the exact mechanism of this failure](https://groups.google.com/forum/#!msg/makerbot/5n4HwWyazlE/koxqMAG9xmsJ) and whether or not improved cooling will significantly alleviate the issue, but most people seem pretty certain that it's a nigh-inevitable and invariably fatal problem. When the regulator blows (with a sharp "pop!"), the whole board goes with it.

So, great.

In the past, Makerbot has reportedly been pretty good about replacing failed Mightyboards, but not about actually correcting the fatal flaw. With the original Replicator now several generations behind and the delays with our recent Replicator 2 replacement parts order, I am not at all confident that we will be able to source a spare in the future. Replicator 2s do not have this issue because Makerbot upgraded the Rev. G boards to switching regulators (costing upward of ten of dollars!) that produce far less heat and do not require any active cooling at all.

Short of just waiting for the board to blow, there are two approaches to this problem. The first and best long-term approach is to replace the linear regulator with a switching one. But without the certainty that we can get the board replaced should we screw up the procedure, I was less keen on this plan to start. The second approach is to improve the cooling, which seemed much more straightforward.

There is a [Thingiverse compilation](http://www.thingiverse.com/thing:33779) of various parts useful to achieving this goal. The easiest first step for us was to simply drill holes in the side of the Replicator over where the fan is positioned, so that we can draw in cool air from outside to blow over the regulator. We also printed out a 40mm duct from the Thingiverse collection to use instead of the original offsets to minimize hot air re-circulation.[![2015-02-11 13.45.02](http://scholarslab.org/wp-content/uploads/2015/02/2015-02-11-13.45.02-300x222.jpg)](http://scholarslab.org/wp-content/uploads/2015/02/2015-02-11-13.45.02.jpg) [![2015-02-11 14.48.34](http://scholarslab.org/wp-content/uploads/2015/02/2015-02-11-14.48.34-222x300.jpg)](http://scholarslab.org/wp-content/uploads/2015/02/2015-02-11-14.48.34.jpg) [![2015-02-11 14.50.16](http://scholarslab.org/wp-content/uploads/2015/02/2015-02-11-14.50.16-222x300.jpg)](http://scholarslab.org/wp-content/uploads/2015/02/2015-02-11-14.50.16.jpg)

Here's the result (the original screws were a few millimeters too short, so we had to pick up longer ones - they're M3, but 4/32'' works in a pinch since longer M3s are hard to find).

[![2015-02-11 15.51.03](http://scholarslab.org/wp-content/uploads/2015/02/2015-02-11-15.51.03-222x300.jpg)![2015-02-11 16.08.44](http://scholarslab.org/wp-content/uploads/2015/02/2015-02-11-16.08.44-300x222.jpg)](http://scholarslab.org/wp-content/uploads/2015/02/2015-02-11-15.51.03.jpg)

The airflow is much improved now. The next step is to pick up better quality fans so we don't have to oil them every few weeks and to install a second, output fan on the other side of the board. Our Replicator has lasted close to three years in its original form, which seems much better than most people have reported (some of those complaining about failures were on their 3rd board) . Hopefully, it will function for some time yet, even if we decide not to do the regulator swap.
