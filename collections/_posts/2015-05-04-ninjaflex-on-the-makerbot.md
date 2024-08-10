---
author: shane-lin
date: 2015-05-04 15:53:55+00:00
layout: post
slug: ninjaflex-on-the-makerbot
title: NinjaFlex on the Makerbot
category: essay
tags:
- makerspace
- 3d printing
---

Announcing version 0.1 public beta of the [Scholars Lab Makerspace Ninjaflex profile for Makerbot Replicators](http://static.scholarslab.org/wp-content/uploads/2015/05/ninjaflex100.txt)!

[![2015-05-04 15.09.58 HDR](http://static.scholarslab.org/wp-content/uploads/2015/05/2015-05-04-15.09.58-HDR-225x300.jpg)](http://static.scholarslab.org/wp-content/uploads/2015/05/2015-05-04-15.09.58-HDR.jpg)

We've had two spools of Ninjaflex flexible filament for about as long as we've had our Makerbot Replicator 2. We've tried to print with it from time to time, but seldom with very good result. With our Rep2 dialed in and printing PLA like a champ for the last few months, I decided that it was a pretty good time to finally figure out Ninjaflex.

A few issues were immediately obvious when printing with the default Makerbot flexible filament profile. The extruded lines were too thin and there was significant "ooze", causing a lot of thin, dangling strings when the nozzle shifted without printing. A quick search turned up a[ Ninjaflex profile for Makerbots on Thingiverse,](http://www.thingiverse.com/thing:408757) with some helpful hints on parameters to change. Our profile is a slight modification of that, with a major bug fix and a handful of small adjustments.

In my experience, the two really important variables are "retractDistance" and "feedrate" (inconsistent camelcase as-is). RetractDistance controls the amount that the filament is retracted for moves; slightly increasing this to 1.3 (mm) dramatically reduces ooze. reedRate is the speed of extruder when extruding. Going slow is critical to success with Ninjaflex and so I've had good results with a consistent 20mm/s speed for all components.

Additional issues unrelated to software has been feeding and clogging. When using our Replicator 1 Dual Extruder, I found that the friction of the Ninjaflex against the feed tube was too high for the Rep1 extruder's motor to overcome, even when manually unspooled; I think that others have had some luck with printing a tubeless guide.  We just switched to the Replicator 2. But even there, with a full and heavy spool of Ninjaflex, I still relied on manual unspooling.

Even so, our printer would still sometimes become clogged. Based on online commentary, this seems fairly common and, for us at least, is resolved by unloading, snipping off the nodule of material pooled at the end of the filament, and reloading. This seems to happen more frequently after the Ninjaflex has been heated and then left to cool without being extruded and when transitioning between Ninjaflex and PLA. Others have created custom-printed extruder parts to alleviate these issues, but we haven't yet tried them out.

Setting up a custom profile in the Makerbot software isn't actually very intuitive. To create a profile, select Advanced Options" in the print settings and click "Create Profile". Name the profile something descriptive and an appropriate base profile if you're starting from scratch (any will be fine if you're going to use our Ninjaflex Profile)

![Screen Shot 2015-05-04 at 2.40.12 PM](http://static.scholarslab.org/wp-content/uploads/2015/05/Screen-Shot-2015-05-04-at-2.40.12-PM-300x231.png)

After the profile is created, select it from the dropdown and click "Edit Profile" to open the JSON file which contains it.

[![Screen Shot 2015-05-04 at 2.41.02 PM](http://static.scholarslab.org/wp-content/uploads/2015/05/Screen-Shot-2015-05-04-at-2.41.02-PM-300x231.png)](http://static.scholarslab.org/wp-content/uploads/2015/05/Screen-Shot-2015-05-04-at-2.41.02-PM.png)

You can test out our profile by simply copy-pasting it in.

Our profile is 0.2mm infill, 100% infill, no rafts or supports. Based on experimentation, rafts actually seem to work okay while supports tend to be harder to remove (although it is quite easy to cut them off, as well as perform general resurfacing and re-edging with scissors so long as you can get them in there). Infill actually works pretty well too, although they tend to be better with thicker walls (we use 3 instead of the usual 2).

We've mostly printed well-supported models; I don't know how well Ninjaflex would print latices, very thin structures, and extreme overhangs (I suspect "not well").

If you try out our profile, let us know how well it works for you!
