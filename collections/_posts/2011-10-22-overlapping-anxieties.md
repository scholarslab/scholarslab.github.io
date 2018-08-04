---
author: alex-gil
date: 2011-10-22 15:45:39+00:00
layout: post
slug: overlapping-anxieties
title: overlapping anxieties
categories:
- Grad Student Research
tags:
- charter
- praxis program
- Programming
---

This week has brought back the question of image/text to my thinking with a vengeance. First, as Lindsay points out in [her latest blogpost](http://www.scholarslab.org/praxis-program/the-transparent-crowd/), our group has been occupied with the question of overlapping markup; second, during our weekly meeting Annie asked "When can we start building Prism," to which Wayne responded, and I paraphrase, "You already have. Next, you need to choose what you will upload to Prism, and learn what it takes to do so"; third, right after our meeting, Lev Manovich presented some of his work with [ImagePlot ](http://lab.softwarestudies.com/p/imageplot.html)and the question of "what to do with a million images?" In his talk he made what I think is a troubling distinction between image-as-continuous and text-as-categorical; fourth, at the [ADE 2011](http://documentaryediting.org/meeting/index.html) in Salt Lake City, where I write these lines, the old anxiety of crowds versus scholars crept in (as expected) on a session on the design of scholarly editions online.

As a result, I am torn between writing on the question "what is a (digital) text?" or the question of overlapping representation. Since jet-lag prevents me from making a choice, I will try to combine both instead.

**What is a (digital) text?**
A text is both matter and language. Leaving Braille and voice aside for now, let us concentrate on the visible side of textual matter. An image is textual in as much as a text can be an image. Something wicked happens to this binary when you move from analog to digital. We are under the illusion that a text becomes ASCII and an image a bitmap. We have naturalized these two formats (there are others) without taking into consideration the fact that a representation of ASCII on the screen is an image, or that the representation of a bitmap is textual. We're almost confusing the manuscript for the ink on the pen. I say almost because the way we use a digital text can be very different from the way we use analog text. Furthermore, there are different kinds of digital texts, each with different uses. A [close-enough HTML replica and a JPEG image of a text](http://www.elotroalex.com/workbench/dr_sample.html), for example, provide similar images and similar texts, but we use them in different ways... and we must make choices. Which brings me to,

**the first Prism**
If indeed we want to have a working Prism model by the end of the Spring semester, we might have to separate bitmaps from ASCII. The problem of satisfactorily having an image/text combo that we can prism successfully seems insurmountable at this juncture and what I understand to be current web technologies. I propose we do one textualey side for ASCII (inside HTML) mapping and a imagey side with bitmaps (inside HTML). That would limit our uploads to HTML and CSS for now. Of course, the manipulation of those texts and images is a whole different matter. Nevertheless, if we know we are going to be working with simple HTML, we can start focusing our Ruby and JavaScript learning (self + slab) to work in this environment. 

If you ask me, I would just start with the ASCII and postpone the bitmaps for later. If we do decide to do that, the question of overlapping colors becomes somewhat of a linear (and well-trodden) problem. I can't even begin to imagine how you could solve overlapping bitmap data. If all we have to do is 4! colors that would also help. I understand there is a question of intensities when we try the "stacked" visualization. I say chuck it. Let's start with the side-by-side visualization which to me is more interesting and what's more important, easier to set up. 
