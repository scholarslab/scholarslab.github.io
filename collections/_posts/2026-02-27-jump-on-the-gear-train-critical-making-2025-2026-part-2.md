---
author: ammon-shepherd
layout: post
date: 2026-02-27 12:32:41
title: "Jump on the Gear Train! - Critical Making 2025-2026 - Part 2"
slug: 2026-02-27-jump-on-the-gear-train-critical-making-2025-2026-part-2
summary: "In which I embark on journey through AI on the gear train"
category: essay
tags:
- research-and-development 
- makerspace
- critical-making
---
<script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@4/tex-mml-chtml.js"></script>

This week I started figuring out the gear train and rack and pinion needed to move the states. I have tried in the past to get AI to do this for me, but the results from ChatGPT and Copilot are all over the place and offer varying results every time I ask. I decided to use AI to learn the math instead of trying to get it to figure it out for me. Instead, I'm learning the math behind the problem to work it out myself.

Be forewarned, there is lots of math!

![math?!?](https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExaXYwdGMydWJmcTFnOWc5MDhrdXF2cTJlNXJpMHZ6cGg4azYwdnR2OSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/APqEbxBsVlkWSuFpth/giphy.gif)

# TLDR;

What helped immensely was [GearGenerator.com](https://geargenerator.com/beta/)

And a spreadsheet that AI generated to calculate the travel distance of a rack based on the pinion diameter and number of rotations.

With help from [GearGenerator.com](https://geargenerator.com/beta/) I created a gear train which starts with a 36mm gear attached to a servo motor that meshes with a 12mm gear which is on the same axle (or combined) with a 36mm gear that then meshes with a 12mm pinion. 

| Input | Value | Units / Notes |
| :--- | :---: | :---: | 
| Servo Gear Diameter | 36 | mm |
| Servo Gear Rotations| 0.5 | rev (revolutions) |
| | |  |
| Combo Gear Small Diameter | 12 | mm |
| Combo Gear Small Rotations | 1.5 | rev |
| Combo Gear Large Diameter | 36 | mm |
| Combo Gear Large Rotations | 1.5 | rev |
| | | |
| Pinion Diameter | 12 | mm |
| Pinion Rotations | 4.5 | rev |
| | | |
| Output | Formula | Result |
| Rack Travel per Rotation | 37.69911184 | mm |
| Total Rack Travel | 169.6460033 | mm |

But how did I get this this answer? 

Well, let me take you on a journey to how I figured this out and understood the problem.


# What am I trying to do?

Each state will move up and down based on the data given. Prof. Rich Ross and I want this to be a pretty dramatic difference between the lowest and highest states, so we decided on 150mm of movement. After much deliberation and looking at various options, Yashu and I decided that a rack and pinion would be the easiest way to accomplish the goal. What is a rack and pinion? It's simply a gear that moves a bar with gear teeth. It turns a rotational movement into a linear movement. The round gear is the pinion, the bar with teeth is the rack. )

![A rack and pinion, a large circular gear moving a long bar with teeth](/assets/post-media/critical-making-projects/rack_and_pinion_animation.gif)

We figured the servo can rotate the pinion and move the rack attached to the bottom of the state up and down. (See last week's post with a video of the test case.)


# First Gear

The first question we needed to answer was; How far does the rack travel based on the size of the pinion?

The formula to figure this out is 

\\( T = Dπ \\)

`T` is the rack travel distance, `D` is the diameter of the pinion, `π` is yummy and 3.14159265359…

It's basic middle school geometry. The travel distance is just the circumference of the gear. 

But our servo motor only goes 180-degrees, or half a rotation, or half the circumference. So we'll have to keep that into consideration.

\\( T = {Dπ \over  2} \\)

The smallest size gear we want to use is probably 12mm. I just pulled that number out of the air (but actually, we'll use it because I already know it works within all the parameters and constraints for the project 😁 ). 

A pinion gear with a diameter of 12mm will cause a rack to travel \\( T = 12π = 37.699mm \\) 
But since our servo can only do a half rotation, the rack travel length is \\( T = {12π \over 2} = 18.85mm \\). I want the rack to travel at least 150mm. So a 12mm gear is not going to work. 

In order to get the rack to travel 150mm from a single gear, we can calculate that 

\\( T = {Dπ \over 2} \\)

\\( {2T \over π} = D \\)

\\( {2(150) \over π} = 95.493mm \\)

We would need a 95.5mm diameter pinion! 

The footprint of the smallest state is about 45mm square. So everything has to fit within that area. So the largest a gear can be is about 40mm. We'll need a different way to do this.

One option is to use multiple gears. We can use multiple small gears to create the same effect as one large gear. How does that work?

# Second Gear

Well, if we just have two gears and one is smaller than the other, then if we turn the small gear one full rotation, the bigger gear will turn less than one full rotation. If the bigger gear is twice the size of the smaller gear, then for every 2 turns of the small gear, the big gear will turn once.

![The blue, smaller gear is the one moving, or driving the larger gear](/assets/post-media/critical-making-projects/small-large-gear-rotation.gif)

[small turning large](https://geargenerator.com/beta/#XhSo9oioiEpPrml0ci@Njy$rtmSvAMojpFrWvi2TE5Rjp3WvXVV$VME6oA)

The opposite is true, too. If the big gear rotates one full revolution, the small gear revolves twice.

![large gear turning a small gear](/assets/post-media/critical-making-projects/large-small-rotation.gif)

[Large turning small](https://geargenerator.com/beta/#Y6c$Z$$$$W71Ok@fir0jpGFlX59@8N$G6mMof1KGDqXEFspd006l97B)

The ratio between the sizes of the gears is called the gear ratio. The gear ratio is derived from the diameter of the gear doing the revolving divided by the diameter of the gear connected to the moving gear. We can call these the driving gear (the one attached to a servo or some other source that generated the movement) and the driven gear. So we get the formula:

Ratio (R) = Diameter (D) of driven gear (n) / Diameter (D) of driving gear (g)

\\( R = {Dn \over Dg} \\)

If the ratio is **greater** than 1, then the output is a slower turning gear, a reduction in speed.

If the ratio is **smaller** than 1, then the output is a faster turning gear, an amplification of speed.

Start with a smaller wheel, the bigger wheel turns slower. Start with a bigger wheel, the smaller wheel turns faster.

We also write the ratio like this `R = Dn:Dg`

OK. Next, how do we figure out the gear ratios for the gear train, and how many do we need?

Let's take two gears, one is 36mm in diameter and the other is 12mm. 

If the 12mm gear is the driving gear (it is connected to the servo), then the ratio is \\( R = {36 \over 12} = {3 \over 1} \\) or `3:1`.
The ratio is greater than 1, so the output is a slower turning gear. 

One way to look at it is to read the ratio from left to right. A bigger number is faster than a smaller number. `R = 3:1. 3 to 1`. This is a decrease. From speed 3 to speed 1. Slower.

But if the driving gear is 36mm, then the ratio is \\( R = {12 \over 36} = {1 \over 3} \\) or `1:3`, the output is a faster turning gear.

Read from left to right. 1 to 3, is an increase. From speed 1 to speed 3. Faster.

If we stick with a 12mm pinion, how many times does it need to revolve in order move a rack 150mm?

The circumference of a 12mm pinion is 

\\( C = Dπ \\)

\\( C = 12π = 37.699mm \\)

so

\\( {150mm \over 37.699mm} = 3.9789 \\) revolutions

A 12mm pinion needs to rotate about 4 times in order to move a rack 150mm. 

So if we have a second gear turning the 12mm pinion, how big does it need to be. Recall that the servo gear will only be able to rotate half of a rotation. The gear ratio, then, needs to be 0.5:4. Half a rotation to 4. 

\\( {12 \over x} = {0.5 \over 4} \\)

Doing some cross multiply, 

\\( 12(4) = 0.5x \\) 

\\( {48 \over 0.5} = x \\)

and we get that `x = 96`. Whelp. Back to a 96mm gear. This is because the servo gear only rotates halfway. 

# Third Gear

So, I ask myself, "Self, if you know the pinion size and how many rotations it needs to complete, how do you calculate the other gears in the train if you don't know exactly what sizes and how many are needed?"

I replied, "You know, that's something that I don't know."

Well, I asked Copilot, too. (Copilot took into account previous conversations where I told it the gear ratio was 0.5:4 and an earlier example using 36mm and 12mm gears. And it uses gear Teeth instead of Diameter, but these are the same thing.):

<div class="copilot">
Copilot said:

Great question —- this is the heart of gear‑train design.
When you know:

* the pinion diameter (or teeth)
* the pinion rotations required

…but you don’t yet know:

* how many gears
* what sizes
* or which ratios

…you can still design the entire gear train systematically using a step‑by‑step math process.
Below is the cleanest and most universal method mechanical engineers use.


## ✅ Step 1 — Convert rack travel to pinion rotations (if needed)

If you already know the pinion must turn N rotations, skip this.
If you only know the travel distance:

\\( Pinion Rotations = {Rack Travel \over πD} \\)


## ✅ Step 2 — Determine the required gear‑train ratio

This is the most important step.
You need to know:

* How many rotations the motor (input) produces

vs.

* How many rotations the pinion (output) must make
    
\\( R_{total} = { \text{Pinion RPM or Rotations} \over \text{Motor RPM or Rotations}} \\)

Example:

* Servo rotates 0.5 turns
* Pinion must rotate 4.5 turns

\\( R_{total} = {4.5 \over 0.5} = 9 \\)

So the gear train must create a 9× speed increase 
(or `1:9` reduction, depending on convention).


## ✅ Step 3 — Factor the total ratio into small ratios

Gear trains are built by splitting a large ratio into smaller multiply‑able pieces.
For example, if your target is:

\\( R_{total} = 9 \\)

Then possible factorizations are:

* 3 × 3
* 1.5 × 6
* 1.5 × 1.5 × 4
* 2 × 4.5
* 1.2 × 1.25 × 3 × 2
* (36→12) × (36→12) ← your earlier example

You can pick any combination of small ratios that multiplies to your total.


## ✅ Step 4 — Assign tooth counts to each ratio

Each stage ratio is:

\\( R = {T_{driven} \over T_{driver}} \\)  

For example, suppose you choose two stages:

\\( R_{1} = 3 \\), \\( R_{2} = 3 \\)

You now choose tooth counts that satisfy each:

Stage 1: ratio = 3

Examples:

* 12 driving 36
* 10 driving 30
* 16 driving 48

Stage 2: ratio = 3

Same options.

A compound gear (two gears on one shaft) lets you chain them:

```
(motor) 36
        | (ratio of 3)
        ↓
       [12 same shaft as 36]
                          | (ratio of 3)
                          ↓
                (pinion) 12
```

Ratios multiply:

\\( 3×3=9 \\)



## ✅ Step 5 — Check physical constraints

When selecting gear sizes, check:

* Gear diameters fit in available space
* Teeth counts match a common module or DP
* Shaft spacing is feasible
* 3D printing tolerances allow proper meshing
* Required torque is acceptable
* Compound gears are not too small or too fragile

If something doesn’t fit, adjust tooth counts but keep ratio the same.


## ✅ Step 6 — Iterate until a valid mechanical layout exists

This is normal: you will often try 3–6 combinations until the gear spacing, shafts, and reductions all work.


## 🧮 A Worked Example (General Method)

Suppose:

* You want 5 pinion rotations
* Input shaft makes 1 rotation
* Total ratio required:

\\( R_{total} = 5 \\)

Factor it:

* 5 = 5
* 5 = 2.5 × 2
* 5 = 1.25 × 4
* 5 = 1.666 × 3

Pick: 2.5 × 2

Assign tooth counts:

* Stage 1: 12 → 30 (ratio = \\(30 \over 12 \\) = 30:12 = 2.5)
* Stage 2: 15 → 30 (ratio = \\(30 \over 15 \\) = 30:15 = 2.0)

Total:

\\( 2.5 × 2 = 5 \\)

Build it as a compound:

```
(input shaft) 30T
              ↓
              12T -- same shaft -- 15T
                                    ↓
                          (pinion) 30T
``` 

Pinion rotates 5× per 1 input rotation.

## 🎯 The Key Insight
You don’t need to know the gear sizes up front.
You only need to know the total ratio, and then you can:

1. Factor the ratio into small ratios
2. Assign teeth counts that match each small ratio
3. Assemble them into a compound gear train
4. Adjust until it fits mechanically

This process is how all engineered gearboxes are designed.
</div>

# Fourth Gear

OK. That's cool. Now to ask Copilot to figure it all out for me.

"Copilot, walk me through each step of how to calculate a gear train to drive a pinion 4 rotation with a servo motor generating 0.5 rotations and the largest a gear can be is 40mm, and using the smallest number of gears possible, and the gears should be easily 3D printed."

<div class="copilot">
Copilot said:

Reasoning completed in 3 steps

Absolutely-—let’s design a compact gear train that makes a pinion turn 4 rotations when your servo only turns 0.5 rotations, with the constraint that no gear may exceed 40 mm diameter, using the fewest gears possible and keeping everything easy to 3D print.

## 🎯 What we need (in plain math)

* Input (servo): 0.5 rotations
* Output (pinion): 4 rotations
* Required speed increase:

\\( S_{total} = {\text{pinion rotations} \over \text{servo rotations} = {4 \over 0.5} = 8 \\)

So the gear train must provide an 8× speed increase (equivalently, a 1:8 reduction in the “driven/driver” convention).

* Constraint: largest gear ≤ 40 mm diameter.
* Goal: Fewest gears (i.e., 2 stages / 4 gears total with one compound shaft).


✅ We’ll target a two‑stage compound gear train (4 gears total). If we can’t meet printability constraints, I’ll give a 3‑stage fallback.

## 🔧 Design conventions (for easy 3D printing)

* Use equal gear module (e.g., module m = 1 mm/tooth) so:

\\( \text{Pitch diameter (mm)} ≈ m × \text{tooth count} \\)

With `m=1`, a `40‑tooth gear ≈ 40 mm diameter`—- perfect for your 40 mm limit.

* Common printable tooth counts (no special profile shift): `12, 15, 16, 18, 20, 24, 30, 36, 40`.
* Pressure angle: `20°` (typical for printable involute gears).
* Try to **avoid very small tooth counts** (<12) to reduce undercut and fragility.


## 🧮 Step‑by‑step method

### Step 1 — Decompose the total ratio into stage ratios

We need:

\\( S_{total} = S_{1} × S_{2} = 8 \\)

We’ll look for two reasonable stage increases (each <4×) that multiply to 8.

A convenient split is 3.333… × 2.4 ≈ 8.

### Step 2 — Map stage ratios to tooth (or diameter) ratios

Speed increase for a stage (driver → driven) is:

\\( S = {D_{driver} \over D_{driven}}  = {T_{driver} \over T_{driven}} \\)

(Assuming same module.)

So we want (example picks):

* Stage 1 \\( S_{1} ≈ 3.333 \\): `40T → 12T` (\\( 40 \over 12 \\) = 3.333…)
* Stage 2 \\( S_{2} = 2.4 \\): `36T → 15T` (\\( 36 \over 15 \\) = 2.4)

Total:

\\( S_{total} = {40 \over 12} × {36 \over 15} = {10 \over 3} × {12 \over 5} = {120 \over 15} = 8 \\)

Bingo.

### Step 3 — Lay out the gear train (compound shaft)

```
[(A)40T Servo]  
    |
  meshes                        Stage 1 (40→12)                      
    ↓ 
[(B)12T same shaft as (C)36T]  
                        |
                      meshes    Stage 2 (36→15)
                        ↓
                 [(D)15T Pinion]
```

* (A) is connected to the servo motor.
* (B) and (C) are rigidly fixed on the same shaft (compound).
* The pinion is gear (D) = 15T in this design.

### Step 4 — Verify motion requirement

Servo turns `0.5 rev →` pinion turns:

\\( 0.5 × 8 = 4\text{rev} \\)

Meets the spec. ✅

### Step 5 — Verify size constraints (≤40 mm)

With `m = 1 mm/tooth`:

* 40T → ~40 mm
* 36T → ~36 mm
* 15T → ~15 mm
* 12T → ~12 mm

All ≤ 40 mm. ✅

### Step 6 — Check printability & robustness

* Smallest gear is **12T**—printable in PLA/PETG with 20° PA; **15T** pinion is sturdier and meshes well.
* Keep face width ~6–10 mm for strength (depends on load).
* Add **0.1–0.2 mm backlash** target (or scale tooth thickness down ~1–2%) to compensate for printer tolerances.
* Use **fillets** at hub/arm junctions; ensure **set‑screw hub** or **D‑shaft** interface.


## ✅ Minimal‑gear solution (recommended)

**Two stages / four gears (one compound shaft):**

* **Stage 1**: 40T → 12T (3.333× speed increase)
* **Stage 2**: 36T → 15T (2.4× speed increase)
* **Total**: 3.333 × 2.4 = **8×**
* **Result**: Servo 0.5 rev → Pinion **4 rev**

This uses just **4 gears** and fits the 40 mm cap.
</div>

Nice! If we have a 15mm pinion rotating 4 times, that moves the rack

\\( T = π × D × 4 \\)

\\( T = π × 15 × 4 = 188.5mm  \\)

I plugged these calculations into a spreadsheet ([rack_travel_calculator.xlsx](https://myuva-my.sharepoint.com/:x:/g/personal/aes9h_virginia_edu/IQAqey_lko_NTac5KBL1203dAQYqX2EmJ9RodMQde9J9Bc0?e=u4nsxZ)) to help me play around with the gear sizes. I wanted something smaller than 40mm.

It looks like `36mm (servo) —> 12mm|36mm —> 12mm (pinion)` has smaller gears and gives good enough range.

That's a `3 × 3 = 9` total ratio. Better than the 8 needed.

12mm pinion rotating 4 times moves a rack

\\( T = π × D × 4 \\)

\\( T = π × 12 × 4 = 150.796mm \\) 

That's just perfect, but in a gear train, the pinion actually rotates 4.5 times, so the rack will move 169.646mm. Even more perfect!

![gif of gear train at this ratio](/assets/post-media/critical-making-projects/gear-train-rotation.gif)

[Gear train](https://geargenerator.com/beta/#RiXDspmdqpmdfGU5923VVJBWFFBBsFGXbX@DBIAgrVzB2jI1H8DOzwTThgHV$TRRhkgYz$7$ji5X2TGGT$a)

OK. Now with the math and numbers all figured out, and the some additional tips from Copilot about layout, it's time to start modeling a gear train!

<div class="copilot">
## 🧰 Practical layout tips

* Center distance between meshing gears: 

\\( c = {m \over 2}(T_{1} + T_{2} ) \\)

With m=1, 40T–12T center distance = (1/2)(52) = 26 mm;

36T–15T center distance = (1/2)(51) = 25.5 mm.

* Maintain parallel shafts and allow axial shimming (washers) to tune backlash.
* If you’re driving a rack, ensure the final gear module matches the rack’s module (e.g., both m=1).
* For SG90 servos, print large driver gears with a robust hub and insert brass heat‑set inserts for screws if possible.

</div>


Phew! That was a lot! Next week, 3D model the gear train!


Funding provided through a generous grant from UVA Arts Council.
![Alt text](/assets/post-media/critical-making-projects/arts-council.jpg)


Read [Part 1 - The Begining](https://scholarslab.lib.virginia.edu/blog/2026-02-20-critical-making-fellowship-2025-2026-part-1/)