---
author: amanda-visconti
date: 2024-07-10
layout: post
slug: scraping-files-for-text-analysis-wget
title: "Scraping a webpage's list of linked files using wget"
category: blog
tags:
- code
- tutorial
- automation
---

I want to apply some text analysis tools to explore questions around a set of podcast interviews. There's a webpage that lists links to transcripts of these interviews, one link per podcast episode text file. Because there are many episodes (over a 100?), I don't want to manually click each link to download the episode's transcript file.

Instead, I followed a [_Programming_ Historian lesson by Ian Milligan](https://programminghistorian.org/en/lessons/automated-downloading-with-wget) about the command-line utility wget. The lesson helped me understand how to customize wget's options so it downloads each transcript file for me into a convenient folder, without overloading the website's servers.

Here's the command I used (after installing a couple things that Milligan's lesson walks you through):

```wget -r -l 3 ––random-wait -w 10 --limit-rate=20k [URL of folder containing desired files to download]```

That command consists of the tool name (wget), a bunch of options modifying how the tool downloads files, and the URL you want to be downloading from. The options I chose to fit my particular webpage of interest:

```-r``` says to follow links on the URL I provide to other links

```-l 3``` says to follow each link to 3 pages away from the initial URL I provided

```-w 20``` adds a 20 second wait between server requests 

```––random-wait``` was in response to my initial wget attempts producing a "ERROR 429: Too Many Requests." message and not downloading files; it varies the wait time by 0.5 to 1.5 times the length provided with the ```-w 10``` option above

```--limit-rate=20k``` sets the maximum download speed to 20kb/s to be nice to the site's bandwidth (initially tried -w 2; that allowed downloading of ~30 files then ran into 429 error again)

The files are now downloading in the background! My next step will be using another command-line utility, pandoc, to convert the transcript files from one file type (MS Word) to another file type friendlier to text analysis.

If you're interested in automating downloads rather than manually clicking-saving a bunch, you might check out my post from 5(!) years ago on [automating taking screenshots of webpages](https://scholarslab.lib.virginia.edu/blog/automating-webpage-tweet-screencaptures/) using a list of URLs (which I used to get a folder of screenshots of all my faved tweets).

If you're interested but have never used the command line, _Programming Historian_ has a peer-reviewed, free online tutorial aimed at humanities/cultural heritage folks [who want to learn command line use](https://programminghistorian.org/en/lessons/intro-to-bash). I highly recommend _PH_'s website; not only is every lesson created with communal care (author[s], editor, multiple reviewers), the lessons are aimed at humanities-ish folks (the things that might interest you, the things you might be excited to learn how to do with code), and the lessons are written in a very novice-friendly style (no assumptions you already know things; or the advanced lessons point you to the earlier lessons you'll need to complete before you can comfortably follow them).