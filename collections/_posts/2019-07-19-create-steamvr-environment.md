---
author: abhishek-gupta
date: 2019-07-19 01:00:00+00:00
layout: post
slug: create-steamvr-environment
title: "Creating a Steam VR Environment"
categories:
- Digital Humanities
tags:
- Digital Humanities
- Parents Fund
---

Once people have some 3D content that they want to experience in virtual reality (VR), creating a SteamVR environment is the best option that enables people to get that experience for themselves. The default setting for the SteamVR environment is the SteamVR Home, but SteamVR allows users to change it to a custom environment that can include a virtual representation of their 3D content. 

To create a custom SteamVR environment, follow the steps below [associated pictures are listed as well]:

1. [Step 1] Click on the SteamVR icon from the desktop (as shown in the picture) or in the upper right corner of Steam.

2. [Step 2] Make sure your VR headset is connected by ensuring that the headset icon is green.

3. [Step 3] Before beginning the process to create the SteamVR environment, check some settings to make sure everything is configured correctly.

4. [Step 4] Make sure that the check box for the “Use SteamVR Home” setting is on.

5. [Step 5] To start the SteamVR environment process, go to the “Create/Modify an Environment” action under the “Workshop” category.

6. [Step 6] If there isn’t an addon already, click “Create Empty Addon” to create the overall project for this environment.

7. [Step 7] Once the addon has been created and named, click on it and click the “Launch Tools” button to initiate the project. 

8. [Step 8] Two windows will open. The first one is the SteamVR preview window.

9. [Step 9] The second one is the master window for all the tools. Click the third icon from the top left, which is the one that looks like a person, to launch the Model Editor. 

10. [Step 11] For this tutorial, we will be using the Zebra Fish model’s .FBX files from Google Poly found at this link (https://poly.google.com/view/elRLfCW4QZB). 

11. [Step 14] In the .ZIP file download (second item in the folder), there is a .FBX file (first item in the folder) that will be imported into the environment. Extract that file from the .ZIP file.

12. [Step 15] Click “New VMDL From Mesh File” to create a new Valve Model (VMDL) file from the 3D content’s file (or in this example, the .FBX file of the zebra fish model). 

13. [Step 16] Find the mesh file of the 3D content and click on it.

14. [Step 17] A warning box should pop up. Click “OK” to ignore it and resume the process. 

15. [Step 18] This screen is the next window that opens. The default values should be similar to the ones in the picture. A few settings need to be changed here. First, click on the button next to the “Destination Directory” text field, which should be empty.

16. [Step 19] It should automatically direct you to the correct folder. In this folder, create a subfolder.

17. [Step 20] Click on that subfolder that was just created.

18. [Step 21] Upon returning to the model creation window, give the Valve Model a new name if desired. The collision type should be changed here if needed as well. The “No Collision” setting does not apply physics to the 3D model. The “Hull” setting applies a coarse boundary, like a cube or a sphere, which saves on processing power. The “Exact” setting follows the exact geometry of the 3D content, which is very resource-intensive.

19. [Step 22] This window is what should open after completing the instructions for the previous window.

20. [Step 23] With the Model Editor still open, go back to the main screen and click on the Hammer (Map Editor) tool in the top left corner. 

21. [Step 24] The screen will be blank at first, so create a new map by clicking on File and New.

22. [Step 25] A new, blank SteamVR world map has opened up now. The top-center window is the 3D view and the bottom-left-center window is the 2D overhead view. 

23. [Step 26] Find the file path to the Valve Model file. The picture should show the default file path.

24. [Step 27] Once in the correct folder, drag the Valve Model file into the top-center window (the 3D view). 

25. [Step 28] The model should appear in both the 3D and 2D views.

26. [Step 29] Zoom into the view until the model appears more clearly.

27. [Step 30] Click the light bulb icon to the left and search for the “info_player_start” item. 

28. [Step 31] Click in either of the view windows to place the selected item. The views should now have a person that is visible. 

29. [Step 32] This step is optional. To restrict the movement possibilities around the object, click on the light bulb icon again and search for the “vr_teleport_marker” item. Click around the view windows to place the icons. With these markers, the user can easily jump around between the designated teleport spots. Without these markers, the user can teleport to any spot around the model, which is less restrictive, but also more power-intensive for the computer. 

30. [Step 33] Once finished placing any necessary teleport markers, exit the light bulb icon and click the markers that are already placed to move them around in the X-, Y-, and Z-axes. 

31. [Step 34] Go to File → Build Map to construct the VR map, or just hit F9.

32. [Step 35] When the Build Map window pops up, click the Build button to initiate the process of constructing the VR environment.

33. [Step 37] Once the process is completed, the SteamVR preview window in the [Step 8] picture should change and the window should change to show a part of the 3D view of the built environment. Now put on the VR headset and enjoy your very own custom SteamVR environment!
