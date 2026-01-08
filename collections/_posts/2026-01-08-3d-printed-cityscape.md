---
author: ammon-shepherd
layout: post
date: 2026-01-08
title: "3D Printed Cityscape"
slug: 3d-printed-cityscape
summary: "Tutorial on how to use Map2Model to 3D print beautiful, artistic cityscapes"
category: essay
tags:
  - makerspace
  - tutorial
  - 3dprinting
---

<style>
  .sidebyside {
    img { max-width: 20vw;}
  }
</style>

![A screenshot of a map](/assets/post-media/2026-01-08-3D-Printed-Cityscape/cityscape.png)

This is a guest post by Makerspace user, Yifan Liu. During the 2025 Fall semester he developed and created a number of amazing cityscapes.

# 3D Print Tutorial: Cityscapes

By: Yifan Liu (yl3gm), UVA Graduate Medical Student

 

## Creating a 3d Model

1. Open the online software [Map2Model](http://map2model.com). You will be presented with the following interface.
  ![A screenshot of a map](/assets/post-media/2026-01-08-3D-Printed-Cityscape/map1.png)
2. Enter which city or area you would like to model search bar. Then select an area of the map to be modeled.  
  ![A screenshot of a map](/assets/post-media/2026-01-08-3D-Printed-Cityscape/map2.png)
3. Adjusting settings: There are many customizable settings that can be adjusted in the right-hand menus. Below are a few example settings that I commonly choose.  
- Base:  
  - Map size: 152mm 
  - Base layer: 4mm 
  - Topography: Disable if modeling a relatively flat area to reduce complexity 
  - Frame: Off 
- Features: 
  - Roads 
    - Include footpaths: Enable if you want to include detail of hiking trails or parks for example. Disable if you want to reduce file size and processing time 
    - Road Types: Play around with disabling different road types for effect or reducing complexity 
  - Grass: Off 
  - Buildings:  
    - Buildings Scale: 1.2x – 1.5x 
  - Sand: Off 
  - Piers: Off 
4. Press “Generate Mesh” to generate a 3d model of your selection 
  ![A screenshot of a map](/assets/post-media/2026-01-08-3D-Printed-Cityscape/map3.png)
5. Click the dropdown menu next to “Export 3MF”. Click “Export STL” 
  - Note: you can also export as 3MF to retain features like roads, water, and buildings as separate objects.  

 
## Editing and Refining (optional)

You may notice that some structures in the model are not correctly detailed or rendered.  If you want to add more detail, import your model into a 3d modelling software. For this example, I used Blender. More detailed instructions on how to use Blender can be found online.  

1. Download or create 3d models of desired buildings. Adjust to correct scale and position and place over existing building on model.  
  ![A screenshot of a map](/assets/post-media/2026-01-08-3D-Printed-Cityscape/blender.png)
2. Delete undesired geometry or vertices on cityscape.  
3. Export file as an STL for slicing and printing. 

 

## Slicing  

1. Open STL file in PrusaSlicer 
2. Adjust settings by going to “Print Settings”:  
  - Print settings: 0.20mm Structural 
  - Brim: 4mm 
  - Infill: 10% 
3. Multimaterial Printing: (optional) 
  - Click on the STL object and click on Multimaterial printing on the left-hand menu icons 
  - Use the Smart fill tool to paint the desired colors. I prefer to paint water features blue and all other features white.  

![A screenshot of a map](/assets/post-media/2026-01-08-3D-Printed-Cityscape/prusaslicer.png)

## Printing 

1. After slicing export your file to the desired printer. If using Multimaterial printing, use either Kermit (Prusa MK4 MMU3) or Big Bird (Prusa XL).  
2. Load and select desired filaments on printer. Make sure to check that the correct filament is paired with the correct extruder.  
3. Print and wait! 

  ![A screenshot of a map](/assets/post-media/2026-01-08-3D-Printed-Cityscape/wallmounted.png)