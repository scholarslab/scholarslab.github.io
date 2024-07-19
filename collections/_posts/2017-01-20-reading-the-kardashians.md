---
author: joseph-thompson
date: 2017-01-20 10:11:57+00:00
layout: post
slug: reading-the-kardashians
title: Reading the Kardashians
category: blog
tags:
- Grad Student Research
- praxis program
- Dash-Amerikan
---

Have you ever wondered what it would be like to read the dialogue that passes between members of the Kardashian family on _Keeping Up with the Kardashians_? To have those seemingly intimate conversations and confessions in the form of a literary production that is open to analysis, interpretation, and text mining?

Me neither. Not until recently, that is.

Our Praxis cohort has asked this very question to find out what the Kardashian conversations and their fourth wall monologues might reveal about that the ways they control and create the narrative around their lives.

Of course, answering this question requires access to the transcripts of the shows. While I half assumed some _KUWTK_ fan might have transcribed the shows already, my searches for this material came up empty but feel free to point us in that direction if you know where they are. Without such a trove, a few of us began searching for ways to borrow the closed captioning service from the DVDs. There are programs that do that, but one problem that immediately arose is that our library only holds the first season of _KUWTK_ on DVD. True, we could ask the library to purchase the remaining 11 seasons, but justifying that purchase and then waiting for their arrival might seriously slow us down. Another potential problem comes from the sheer time it would take to download physical copies of the show. Again, time is a serious concern here since our tenure as Praxis fellows expires at the end of this semester, and we still have to complete some sort of analysis of this material.

Following a brief search of other options, Alyssa Collins and I decided to try [CCExtractor](http://www.ccextractor.org/doku.php?id=start), a program that allows the collection of closed captioning transcripts from streaming services and hosts it’s code in [GitHub](https://github.com/CCExtractor). Not only would this save us the time and money required to gather transcripts from DVDs, but it also offered us a way to practice the technical skills we’ve been developing in Praxis.

Alyssa and I jumped into CCExtractor, simply following the tutorial available on their website and using the documentation provided in their GitHub repository. We used my computer since I had installed Homebrew already. This allowed us to substitute “brew” for “apt-get” in the command line and run the CCExtractor scripts. After a few hiccups, which we overcame with the assistance of Eric Rochester and Jeremy Boggs (thanks!), we downloaded the closed captioning transcripts for _KUWTK_’s first episode, titled “I’m Watching You” and originally aired on October 14, 2007, into srt and vtt files. We then opened the vtt file with Atom and had the entire transcript in a readable form, complete with time stamps for each person’s line.

What will we do with this information? I don’t have an answer for that yet, but just looking at the data opened up a lot of questions. Who speaks the most for the Kardashians? Does this speaking time correlate to on-screen time? In other words, are there family members who appear with regularity but don’t speak? How can we use this text material to consider the literary devices at work in an episode of reality television? There are a lot of unknowns, but I’m excited at the prospect of having this data to analyze.
