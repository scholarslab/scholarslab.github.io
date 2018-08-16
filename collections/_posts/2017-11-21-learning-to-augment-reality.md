---
author: christian-howard
date: 2017-11-21 14:35:21+00:00
layout: post
slug: learning-to-augment-reality
title: Learning to Augment Reality
categories:
- Digital Humanities
- Experimental Humanities
- Grad Student Research
---

The Praxis team is in the midst of defining its project, and for the past few weeks, we’ve been playing around with augmented reality (AR), specifically by using [Vuforia](https://www.vuforia.com/) and [Unity](https://unity3d.com/). Learning about AR has been fascinating and, admittedly, a bit frustrating. I won’t go through the process of getting Vuforia and Unity to work with one another (here’s a great [intro video](https://www.youtube.com/watch?v=mjNAPCFaZ9Y) if you’re interested!), but I will briefly discuss some of the challenges and implications of trying to augment reality.

First, the target image. The target image is the image that you augment, such that when you point your phone/camera at said image, the 3D figure that you have virtually “added” to the image appears on your screen. But the target image can be tricky. That is, Vuforia scans the target image for certain key features, by means of which the program can identify when your phone/camera is pointed at the target image. I’ve taken some screen shots of a few of the items that I augmented, which Vuforia ranks in terms of “augmentability.”

![](http://scholarslab.org/wp-content/uploads/2017/11/Screen-Shot-2017-11-21-at-12.34.03-PM-300x166.png)

![](http://scholarslab.org/wp-content/uploads/2017/11/Screen-Shot-2017-11-21-at-12.33.12-PM-300x200.png)

![](http://scholarslab.org/wp-content/uploads/2017/11/Screen-Shot-2017-11-21-at-12.33.47-PM-300x211.png)

Images 1, 2, & 3: The Scholars’ Lab sign received an augmentable rating of one star, meaning its identifiable features are minimal. The cover of Vi Khi Nao’s book, _Fish in Exile_, has four stars, and the “cowboy” lunchbox residing in the Scholars’ Lab received an augmentable rating of five stars. The yellow crosses indicate the identifying features and patterns that Vuforia recognizes.

Not only does the target image need to have enough unique features to be easily identifiable, but the image should be properly edited so that nothing appears in the background. When the image is uploaded with a background, Vuforia will assume that the background is part of the target image, and it will identify features of the background as part of the patterns it is to look for. This will make it difficult if not impossible for your camera/device to recognize the image unless it appears with the exact same background.

![](http://scholarslab.org/wp-content/uploads/2017/11/Screen-Shot-2017-11-21-at-1.38.36-PM-300x207.png)

Image 4: Cover of _Fish in Exile _against a mesh chair. The yellow crosses have primarily identified features of the chair – rather than the cover of the book – as unique features, and the “augmentability” of the image has declined to two stars.

Another problem that we ran into has to do with subject matter. We’re currently experimenting with items on or around UVA’s grounds. So we’ve been taking photos of items from the Small Special Collections, buildings, memorials, and even lunchboxes sitting around in office spaces. But this becomes problematic when the photos we take are affected by the environment. For instance, I tried taking a photo of the segment of the Berlin Wall that stands on UVA’s grounds, and here’s how it turned out:

![](http://scholarslab.org/wp-content/uploads/2017/11/2017-11-17-08.59.46-300x169.jpg)

Image 5: A photo of the Berlin Wall at UVA.

Encased in glass, the Berlin Wall is nearly effaced by the reflection of Small Library opposite it. Even, then, if I use a “clean” shot of the Berlin Wall taken from the Internet as my target image, my augmentation of the image will not be identifiable or reproducible if someone were to point their camera/phone at the _actual_ Wall on grounds.

So needless to say, our work with AR is still very much in progress. But as we continue developing our AR ventures, considerations of target image complexity and environmental factors will, it seems, help shape the scope of our project.

And on this parting note, I’d like to include a couple fun pictures of the fruits of our augmentation experiments thus far. Enjoy!

![](http://scholarslab.org/wp-content/uploads/2017/11/Screen-Shot-2017-11-07-at-1.57.40-PM-300x170.png)

![](http://scholarslab.org/wp-content/uploads/2017/11/Screen-Shot-2017-11-07-at-1.54.13-PM-300x214.png)

![](http://scholarslab.org/wp-content/uploads/2017/11/Screen-Shot-2017-11-21-at-11.44.18-AM-300x192.png)

![](http://scholarslab.org/wp-content/uploads/2017/11/Screen-Shot-2017-11-21-at-11.45.41-AM-300x176.png)

Images 6-9: Augmentations of _Fish in Exile _and the Cowboy lunchbox.
