---
author: ankita-chakrabarti
date: 2019-07-09
layout: post
slug: teleporting-in-Unity3D
title: "Teleporting in Unity 3D"
categories:
- Research and Development
tags:
- Parents Fund
- VR
- 3D modeling
---
# Teleporting in Unity 3D

This exercise shows you how you can teleport a character within a scene in Unity 3D using a simple C# script.

- Set up a simple scene and add either a FirstPersonController or a ThirdPersonController to it. In this example I'm going to be using a ThirdPersonController.
- We will need to download the Standard Assets package from the Asset Store which includes the Character Prefabs.
- Drag and drop the ThirdPerson Controller prefab from Assets on to the scene.

  ![Adding Character to Scene](/assets/post-media/teleporting/1.png)

- Make sure to attach the Main Camera to the ThirdPersonController so that the camera follows the character around in Play mode.

- We are going to create a teleportation pad in the scene. For this we're going to add a cylinder to the plane floor and flatten it using the Scale Tool. You can use the Scale Tool to adjust the dimensions of any game object.

  ![Teleport Pad](/assets/post-media/teleporting/2.png)

- We're also going to need to define where the player will teleport to. Here we'll make the player teleport to the top of the tall blue cube. To do so, we're going to add a plane on the top of the cube which will function as the teleportation target.

  ![Teleport Target](/assets/post-media/teleporting/3.png)

- Writing the Teleportation C# Script:
  - Create a new C# Script in Assets.

    ![Create new C# script](/assets/post-media/teleporting/4.png)

  - We will need to write a very simple C# script for the teleportation. What   the script does is that when the player collides with the trigger, which in this case will be the teleportation pad, it switches the position of the player to the designated location which is the Teleport Target.

    ![Teleportation C# Script](/assets/post-media/teleporting/5.png)

- Once the script is saved, we will return to the scene and drag and drop the C# script from Assets to the yellow cylinder which is going to work as the teleportation trigger.

- In the cylinder's Inspector, we will need to make the following changes,
  - Enable "Is Trigger"
  - In the Teleport Script section, drag and drop the plane (which is on top of the cube) to "Teleport Target"
  - Also drag and drop the ThirdPersonController to "The Player"
  
  ![Setting the Teleport Trigger](/assets/post-media/teleporting/6.png)
  
- Make sure that "Auto Sync Transforms" in the Physics section of Project Settings (which can be accessed from Edit) is enabled. If this is not enabled, you'll find that when your character gets to the Teleport Pad, you'll be able to see the Teleport Target for a split second but your character will not change position. 

  ![Auto Sync Transforms](/assets/post-media/teleporting/7.png)

- Now you should be all set to teleport your character from one place to another within a scene! Enter Play mode and when your character walks on to the Teleport Pad...

  ![Moving to the Teleport Pad](/assets/post-media/teleporting/8.png)

- It will appear at the Teleport Target at the top of the blue pillar!

  ![Teleportation Achieved!](/assets/post-media/teleporting/9.png)


### Sources:

[Teleporting Tutorial](https://www.youtube.com/watch?v=aZ7tFPGF28w.html) This quick tutorial gives you the basics of teleporting in Unity 3D as well as an explanation for the C# script.


