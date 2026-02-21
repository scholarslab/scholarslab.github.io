---
author: ammon-shepherd
layout: update
date: 2026-02-20 12:54:00
title: "Critical Making Fellowship 2025-2026 | Part 1"
slug: 2026-02-20-critical-making-fellowship-2025-2026-part-1
summary: "Fist update on the 2025-2026 Critical Making Project"
category: essay
tags:
- research-and-development 
- makerspace
- critical-making
---

# Introduction
Beginning in 2023, the Makerspace has funded a graduate student, usually in the humanities, to design and complete a physical project that represents or comes from their humanities research. Named the Critical Making Fellowship, the previous projects were Alexa Luborsky's ["Diaspora Poem"](https://scholarslab.lib.virginia.edu/work/diaspora-poem/) (2023), and Holly Zhou's ["Memory Maps"](https://scholarslab.lib.virginia.edu/work/memory-maps/) (2024 & 2025). This years Fellowship began as a collaboration with Statistics Professor [Rich Ross](https://statistics.as.virginia.edu/people/richard-ross) and Makerspace Manager Ammon Shepherd. Generously funded by an [UVA Arts Council Grant](https://arts.virginia.edu/arts-council-grants-call-proposals), the 2026 project was able to hire Yashu Tang for the Fall 2025 semester to get the process started. Below is the write up of the project and contributions from Yashu.

# Project Overview

This project aims to visualize electoral voting patterns in previous presidential elections using an interactive data-sculpture. Each state is represented with a cluster of hexagonal cells equal to the number of electoral votes allocated to the state. 

[!["2012 US Electoral map"](/assets/post-media/critical-making-projects/2012_United_States_presidential_election.png)](https://www.mapchart.net/usa-hex-cartogram.html)


The state-block will have two actions in response to input data: 

1. light up blue or red depending on the party of the winning candidate and 
2. raise or lower itself proportional to the margin of victory. 

The data on state-level electoral votes is from UCSB’s American Presidential Project website.  

# Data 

The data has already been scraped from UCSB’s website and contains data on the 1924-2024 elections. They are stored in the election data folder on the shared drive, with a separate .csv file for each election year. Files are named with the convention `Election_####`, e.g. `Election_1968`. Years with atypical electoral votes have been noted in the data description document, which can also be found in the election data folder.  

The data columns are as follows: 

State: State where the data was collected 

Total: total votes tallied for the state 

Popular_D: Number of popular votes won by the Democratic candidate 
    
Prop_D: Proportion of total votes received by the Democratic candidate 

EV_D: Number of electoral votes won by the Democratic candidate 
    
Popular_R: Number of popular votes won by the Republican candidate 

Prop_R: Proportion of total votes received by the Republican candidate 

EV_R: Number of electoral votes won by the Republican candidate 

* If a 3rd party candidate won electoral votes, the votes will be recorded with similar conventions as above, with "_3rd" as the suffix.

EV_Outcome: Column with electoral vote outcomes. Data is stored with integer values of electoral votes, followed by the party they were cast for, separated by spaces. E.g. `3 D 0 R 0 I`, where 3 votes were cast for the Democratic candidate, and 0 for the Republican and Independent/3rd party candidate. 

Margin: Margin of victory, calculated using  

```
MOV = (Raw margin of victory) / (Total votes in state)
``` 

where the raw margin of victory is the difference in popular votes between the first and second place candidates in the state.  

$$\frac{Raw margin of victory}{Total votes in state}$$


 

# Hardware 

The state-blocks will be 3D printed by Ammon at the Makerspace and mounted on a similar 3D printed rack-and-pinion mechanism to achieve the raising and lowering. 

The vertical movement will be powered by 180-degree rotation Servo motors. They were chosen because their degree of rotation can be specified in code. This allows for an easy transition from the MOV value in the data into Servo motor directions. The Servo motors will be connected to the Adafruit 16-channel PWM bonnet, and a brief tutorial on connecting and using the bonnet can be found [here](https://learn.adafruit.com/adafruit-16-channel-pwm-servo-hat-for-raspberry-pi/overview). For this project, the bonnets will use the 3x4 right angle male headers, so the Servo motors can all interface to the pi. 

The light-up portion of the project will be completed with the 5050Neopixels, whose product specifications can be found [here](https://cdn-shop.adafruit.com/product-files/1655/SKC6812RV__12VOP0274E_REV.A1_EN%2812%29.pdf). A pdf of the specs will also be in the shared drive. The pin configuration can be found on page 5 of the pdf. When connecting the Neopixel to the bonnets, the signal pin should connect to pin 2 (DIN), the power pin should connect to pin 3 (VDD), and the ground should connect to pin 1 (GND). 

* It should be possible to chain multiple Neopixels by chaining pin 4 (DOUT) to pin 2 (DIN) on another Neopixel, but I haven’t had a chance to test it.

# Software 

There is some Python code for powering the Servos simultaneously. This is on the Raspberry Pi and should be stored in the “Code” folder. The packages used for powering the Servos and Neopixels must be used in a virtual environment. On Thonny, you can go to “Run”, then “Select interpreter”, then choose the venv that is in the “Code” folder. Not much has been done for the software portion of this project. 



# February 2026 update
Further consideration about the project led us to expand the vision of the project. Instead of being tied to electoral data, the map will be able to use any two data points to compare states. The LEDs will not be exclusively red or blue, but RGB LEDs will be used to allow a range of colors.

As of February 2026, the hardware side of things has improved a bit. California was chosen for the test case as it is the largest with the most electoral votes. This would test the capability of the inexpensive 180 servo motors to move the 3D printed states. 

Originally, it was hoped to use the output of data from the R statistical program to generate the 3D models for printing. The resulting hexagons from this workflow were inconsistent. 

![Map showing inconsistent hexagon and height](/assets/post-media/critical-making-projects/r-generated-map.png)

An additional issue, was that the generated file created a map with states at varying heights. We are going to account for this in the hardware by moving the states up and down, so they all need to be the same height.

Modeling each state by hand in Fusion 360 is the solution. 


![Model of California](/assets/post-media/critical-making-projects/hexafornia.png)

Fusion 360 was also used to model the servo holder and a rack and pinion gear set to move the state vertically.


![Model of the rack and pinion gear](/assets/post-media/critical-making-projects/rack-n-pinion.png)

To test the set up, two pieces of plywood were cut to house the gears and the state. Temporary supports were 3D printed to hold the two pieces of plywood together.

A test case using California can be seen in the video below.

<video controls width="600">
    <source src="/assets/post-media/critical-making-projects/california-moving.mp4" type="video/mp4">
    Your browser does not support the video tag.
</video>



Funding provided through a generous grant from UVA Arts Council.
![Alt text](/assets/post-media/critical-making-projects/arts-council.jpg)