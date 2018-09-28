---
author: shane-lin
date: 2016-02-02 23:39:56+00:00
layout: post
slug: bigger-nozzles-faster-printing
title: Bigger nozzles, faster printing
categories:
- Makerspace
---

This week at the SLab Makerspace, we've been experimenting with faster 3D printing at lowering resolutions with larger extruder nozzles.

The diameter of the standard Ultimaker 2 nozzle/block assembly is 0.4mm. When we recently installed Anders Olsson's upgraded heater block (after the stock thermocouple end came off inside of our OEM heater block), we gained the ability to swap in E3D compatible nozzles. The Olsson block itself came with an assortment of sizes, from 0.25mm to 0.8mm.

The flow rate of Cura's normal quickprint settings with the 0.4mm nozzle is **2mm^3/s**.  This figure is calculated by multiplying together the nozzle diameter, the layer height, and the print speed (0.4mm x 0.1mm x 50mm/s), basically the volume of a line of filament deposited onto a model or build platform. With the stock nozzle, Cura will produce a warning when trying to extrude more than 8mm^3/s. With stock configuration, our Ultimaker 2 worked most reliably printing PLA at around 5-6mm^3/s or less at 210C temperature.

After installing the 0.8mm filament, we've been able to push this up to **20mm^3/s** and potentially higher by printing at 0.5mm layer height at 50mm/s. On a practical level, this means that we can now print a low resolution version of this cute octopus model in 27 minutes instead of the 3 hours estimated under our previous settings. Printing with substantially higher layer height required that we recalibrate the bed to a somewhat farther distance, but was otherwise very straightforward. The filament used here is Colorfabb Leaf Green PLA/PHA, which we've had very good luck with.

![2016-02-01 18.47.43](http://static.scholarslab.org/wp-content/uploads/2016/02/2016-02-01-18.47.43.jpg)![2016-02-01 18.47.43](http://static.scholarslab.org/wp-content/uploads/2016/02/2016-02-01-18.47.43-300x225.jpg)

The lower z-resolution is obvious in these prints, but I think we can use the larger nozzle with shorter layer heights to achieve less pronounced quality differences, still with a modest gain in speed, because the reduction in X-Y axis resolution does not seem to be as dramatic. The larger nozzle diameter will offer faster print speeds and allow more efficient toolpaths. The standard 0.8mm walls will now only require a single pass to lay down.

I think this is a case where the larger 2.85mm filament offers some much-needed leeway. The feeder would have to insert the thinner 1.75mm filament at nearly 10mm/s to keep up with this kind of flow rate; I'm not at all confident that our Replicators would be up to that.

In the coming weeks, we'll try to push the flow even higher and experiment with improving quality with thin-layer wide-nozzle settings. We'll also be testing prints with extremely fine detailing using the 0.25mm nozzle. In any case, the ability to easily change out nozzles on our UM2 opens up the possibility of tailoring our printer to the specific needs of the print. Pushing speed limits will allow us to produce truly rapid prototypes and to demonstrate the basic operation of 3D printers to many more students over the course of the day.
