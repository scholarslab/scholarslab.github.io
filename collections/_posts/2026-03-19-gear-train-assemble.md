---
author: ammon-shepherd
layout: post
date: 2026-03-19 11:01:36
title: "Gear Train Assemble!"
slug: 2026-03-19-gear-train-assemble
summary: "Putting the gears together"
category: essay
tags:
- research-and-development 
- makerspace
- critical-making-project
---

![seven versions of the holder so far](/assets/post-media/critical-making-projects/3d-usa-map/gear-train/holder-versions.jpg)

On the heels of the knowledge gained from the last post [figuring out the gear train numbers]({% post_url 2026-02-27-jump-on-the-gear-train-critical-making-2025-2026-part-2 %}), I set out to model the gears and a holder.

And immediately I was confronted with an issue with my calculations.

# The Problem
At the end of all my learning and calculating, I decided:

    It looks like 36mm (servo) —> 12mm|36mm —> 12mm (pinion) 
    has smaller gears and gives good enough range.

One thing I forgot to consider is the length of the servo horn that is used to connect the servo to the gear. I could do without it, but trying to design and print such a small toothed hole has issues. I have seen others try and filament 3D printing does not provide fine enough detail to mesh well with the servo gear. So using the supplied horn attachment makes things much easier.

The problem, is that the horn is about 22mm in length. If my gear is only 36mm in diameter, then the horn would stick out into the gear's teeth!

![Gear is too small!](/assets/post-media/critical-making-projects/3d-usa-map/gear-train/too-small-servo-gear.png)

Another sidetrack bump I had to overcome was the getting the dimensions of the servo horn. The dimensions I could fine online were unsatisfactory. So I measured one myself!
 
![SG90 servo horn](/assets/post-media/critical-making-projects/3d-usa-map/gear-train/sg90%20servo%20horn%20drawing.png)


And went ahead and 3D modeled it and put the 3D model and diagram files up on [printables.com](https://www.printables.com/model/1634183-sg90-servo-horn-arm) for anyone to use. 

With all of that info, I can then recalculate the gear train dimensions so it fits with the servo horn.

# The Correct Gear Train

I played around with different settings, but it seemed the best option (that being the smallest size for the servo and large combo gears) called for a 46mm servo gear → 20mm | 46mm combo gear → 20mm pinion.

<pre>
Servo motor → 46
              ↓
             20 (same shaft as) 46
                                ↓
                               20 (pinion)
</pre>

# Sidetracked Again!

The first day of modeling, I decided to jump the Fusion 360 train and try onshape.com. It's a web based 3D modeling and CAD tool. It has been around since 2015, and is gaining ad time lately in many of the YouTube.com videos I see, so I thought I'd give it a try. I was prepared for some learning curves and to spend some time learning a new system, but two things got me to throw in the towel after a full day of working with it; 1) I couldn't figure out how to do something pretty simple that would take 2 minutes in Fusion 360, 2) I didn't care for the interface; it felt too unprofessional. If TinkerCad.com is the elementary school version of CAD, it looked like Onshape.com was the 9th grade version. I did love that it was browser based. And making double helical gears was a breeze! There's a handy built in menu for all kinds of gears. Fusion 360 on the other hand is big L in gear making. You have to import 3rd-party scripts and I can't get any of the fancy gear scripts to work.

Like many things, it was the fact that I could get things done much faster with the tool I already knew, and I was accustomed to the interface that led me back to Fusion 360.

# Making the Gear Train

I had previous attempts at designing the gear train, but I decided to start from scratch since Fusion 360 doesn't have an easy way to just change the size of gears when using the gear script plugin thing.

## Servo Gear
So, first I designed the servo gear. Pretty easy to create a 46 tooth gear with the gear script plugin thing. 

![servo gear with inset for servo horn](/assets/post-media/critical-making-projects/3d-usa-map/gear-train/servo-gear.png)

I designed a cut out, or inset, for the servo horn to fit inside. This is the easiest way to attach the gear to the servo. 3D printing these gears with filament would not have enough resolution to print the fine teeth needed to interface with the tiny default gear on the servo shaft. Much easier to use the included horn.

## Combo Gear

The combo gear was pretty easy, too. Just make another 46 Tooth gear, then make a 20 Tooth gear and stack them on top of each other.

![combo gear](/assets/post-media/critical-making-projects/3d-usa-map/gear-train/combo-gear.png)

I set the diameter of the hole through the gear at 4.2mm. That's big enough for a M4 bolt to go through, with just enough tolerance to allow the gear to spin but not wobble.

## Pinion Gear

Another very simple gear to model. There's nothing special about this, just a 20 tooth gear with a 4.2mm diameter hole.

![pinion gear](/assets/post-media/critical-making-projects/3d-usa-map/gear-train/pinion.png)

## Rack

The rack is pretty straight forward. I created a 20 tooth gear, then used one of those teeth to copy down the length of the rack.

![pinion gear](/assets/post-media/critical-making-projects/3d-usa-map/gear-train/gear-to-rack.png)

![pinion gear](/assets/post-media/critical-making-projects/3d-usa-map/gear-train/rack.png)

## Gear Holder
This was a little bit tricker. The gears were all prototyped in one go. The first print was great. This part took 7 tries so far. 

![seven versions of the holder so far](/assets/post-media/critical-making-projects/3d-usa-map/gear-train/holder-versions.jpg)

I started by creating a new Assembly in Fusion. Then adding in the gears and aligning them as needed. I went with a stacked approach so as to keep the footprint as small as possible. I had previously modeled the servo motor, so I was able to add that in as well. 


It was tricky to get the servo aligned with the servo gear, and then get each of the gears aligned with the ones the mesh with. In realized that if a part has the sketch turned on, then that shows up in the Assembly file. I used that to create a construction line on the servo gear and put a point where the center of the combo gear should be aligned to. Then I did the same on the combo gear to align the pinion. Then adding the holder, servo motor, and rack.

![assembly, color coded](/assets/post-media/critical-making-projects/3d-usa-map/gear-train/assembly.png)

It was a lot of back and forth between the designs for the parts and the assembly to align everything correctly. But in the end I think it lines up well.



## Spacers

After the first version, I realized that the gears needed spacers to keep them in place. The holder is wider than the gears. So modeling and printing a couple of spacers is pretty easy.

![spacer](/assets/post-media/critical-making-projects/3d-usa-map/gear-train/spacer.png)


# Somewhat Working

I connected everything up, bolted in the gears, and plugged it in. And it works... mostly.

<video controls width="600">
    <source src="/assets/post-media/critical-making-projects/3d-usa-map/gear-train/gears-moving.mp4" type="video/mp4">
    <!-- Fallback text for browsers that don't support the video tag -->
    Your browser does not support the video tag.
</video>


As the video shows, the gears work, somewhat. There is a bit of jittering, which may be due to the code just rotating the gears back and forth. A more normal behavior would be moving from one angle to the next and stopping there. The servo is also not moving at a full 180&deg;. More like 100&deg;. This is only about 111mm of travel, not the 150mm we're hoping for. It might be time to consider better quality servos. Perhaps some that move 270&deg;.

It is also a pain to swap the servo motor. Perhaps a redesign is in order. 

----

Missed the first two posts?
- [Part I - Critical Making Project 2026]({% post_url 2026-02-20-critical-making-fellowship-2025-2026 %})
- [Part II - Jump on the Gear Train]({% post_url 2026-02-27-jump-on-the-gear-train-critical-making-2025-2026-part-2 %})