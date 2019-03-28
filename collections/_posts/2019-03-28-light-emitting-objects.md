---
author: ankita-chakrabarti
date: 2019-03-28 01:00:00+00:00
layout: post
slug: light-emitting-objects
title: "Illumination Through Light Emitting Objects"
categories:
- Digital Humanities
- Research and Development
tags:
- Digital Humanities
---
# Illumination Through Light Emitting Objects

This exercise will show how to make objects inside a room emit light and the basics of working with emissive material in Unity to create indoor illumination. For this exercise we are going to make the emissive objects be the only source of light within the room.

## Constructing a Room:

- Insert a Plane (3D Object) from the GameObject menu.
- Create five duplicates of the plane.
- Rotate them individually and position them to create four walls and ceiling for the room.
- You should have a cube that you can see into as you rotate your view around it. Putting all the planes together in one Empty GameObject, renamed "Room", will help keep things organized.
- [insert image 1]

## Creating the Light Sources:

We are going to create four light emitting cubes within the room.

- Insert a Cube (3D Object) from the GameObject menu.
- Since the room is going to be illuminated from inside, we can delete or deactivate the Directional Light. The scene should look quite a bit darker now.
- In Assets, create a new Material. Materials define how the surface of an object should be rendered.
- Enable "Emission" in the Inspector and choose the color you like. You can also adjust the amount of emission. Then drag the Material from Assets on to the Cube.
- Create three duplicates of the Cube, and three different colored Materials. Adjust the size of the cubes and position them around the room.
- [insert image 2]

Note: Any object can be made to emit light within a scene by adding an emissive material to it.
- Baking a Lightmap: The room and the light emitting objects all need to be static (or non-moving) in order for the lighting to work. Select the objects and enable Static in the Inspector. This tells Unity that the objects, in this case the walls and the cubes, will not move during gameplay which allows Unity to begin "baking a lightmap". This means that using the information provided, Unity will start to calculate and then construct the effects of the illumination into a "lightmap" (by tracking the paths of the light rays from the cubes) for the scene.
- [Insert image 3]
- We need to go back to the Materials Inspector for each cube and change the Global Illumination from "Real Time" to "Baked". In Baked lighting the illumination is pre-calculated and does not change during gameplay.
- [Insert image 4]
- In order to tweak the lighting properties further we need to pull up the Lighting Settings.
- [insert image 5]
- Since it is an indoor scene, there should not be any external or "environment" lighting. The only light should be from the light-emitters within the room. Hence, we need to change the Skybox Material to "None" and then change the Ambient Color to black (to indicate no ambient lighting).
- [insert image 6]
- [insert image 7]
- In the Lighting settings, disable Realtime Global Illumination and make sure Baked Global Illumination is enabled.
- [insert image 8]
- In Lightmapping Settings you can make the following changes,
   - Set the Lightmapper to "Progressive CPU"
   - Increasing Lightmap Resolution and Lightmap Padding will create a more smoothly lit scene. This will also increase the Baking time.
   - Lightmap Size can be reduced (in this case to 512) for a smaller scene which will reduce the file size without affecting the quality of light rendering.
   - Disabling "Compress Lightmap" solves the problem of light banding that can occur when light from an emitter fall on an object. This will increase file size.
   - Enable "Ambient Occlusion" to intensify shadows cast by objects within the scene. Here it will intensify the shadows between the walls.
- [insert image 9]
- Finally, your indoor lighting scene should look something like this...
- [insert image 10]

### Sources:

[Lighting in Unity](https://www.youtube.com/watch?v=VnG2gOKV9dw.html) This is an excellent tutorial to understand how   lighting works in Unity and how to make your lighting look even better!

[StaticObjects](https://docs.unity3d.com/Manual/StaticObjects.html)

[Materials, Shaders and Textures](https://docs.unity3d.com/Manual/Shaders.html)

[Baked Lighting](https://docs.unity3d.com/Manual/LightMode-Baked.html)


















