---
author: amanda-visconti
date: 2019-01-31 01:01:01
layout: post
slug: automating-webpage-tweet-screencaptures
title: "Automating Webpage & Tweet Screencaptures"
category: blog
tags:
- tutorial
- social media
- automation
---

Do you have a list of webpage URLs for which you'd like screencaps (aka screenshots)?

(_Know this tutorial fits your needs? [Jump to the instructions](#how-to-automate-screencapping)._) 

Maybe you study social media: you can capture all the data about a tweet using [Documenting the Now's tools](https://www.docnow.io/) and get a spreadsheet listing all of a hashtag's tweets with text, file names for any image attachments, publication date, RT/like counts...


But maybe you'd also like to have screencaps of the webpage per each tweet as they appeared at a given time: 
- keep an offline folder of all your faved tweets? (before time passes and some of them are deleted)  
- record how tweets _looked_ on Twitter.com at a given point in time, e.g. the avatars of folks who interacted with the tweet (using the avatar images current—at least as of the time of screencap—since people change these over time), or what metadata was viewable to the casual observer at a given time, as with this example tweet screencap:

![](https://scholarslab.org/assets/post-media/2019-01-31-tweetscreenshot1.png)

Having screencaps of tweets can be useful for Twitter receipts, conducting a user study where you want to gauge folk's reactions to seeing a tweet as it looked on Twitter.com (without needing to be online), or keep a folder of motivating tweets to refer to when you need encouragement.

This post will help you also automate taking screencaps from a list of URLs, by pointing you two tutorials plus some advice on combining these. This tutorial is written from a Mac user's perspective.

# My uses cases
I recently had two needs for a workflow automating screencaps:  
1. **Screencapping faved tweets (aka motivation)**: I used to "like" tweets where folks said useful things about my work, for later encouragement when I needed it. I wanted to switch to just screencapping these tweets as I saw them, saving the "like" function to indicate interest in others' tweets, but that meant I need a way to get all those previous likes as screencaps. This workflow gave me a folder of over 2k screencapped tweets! (Now I just need to make a bot to show me a random one each time I log in...)

2. **Figuring out how many of our posts were amplified by a DH aggregator**: For an external review of DH at UVA, we're drafting a report on Scholars' Lab as a DH unit. As a small part of this, I wanted to include the number of times SLab staff or students have had a blog post highlighted by [Digital Humanities Now](http://digitalhumanitiesnow.org/). Searching the _DH Now_ with a variety of search terms (e.g. Praxis, Neatline, variants of "Scholars' Lab", names of former staff) turned up a bunch of posts, but without opening each result in a browser to skim that post, I couldn't be sure that these were all actually either SLab-authored or citing SLab work (vs. e.g. happening to use the word "praxis"). By automating screencaps of all the links my search turned up, instead of opening each link in a browser, I could use Preview to bulk-open screencaps and glance over the top of each webpage, seeing more quickly whether a post was related to SLab or not.

# Credits
This is an extremely light repackaging of two sets of advice, for which I am grateful:

* Ryan Bauman's ([twitter.com/ryanfb](https://twitter.com/ryanfb)) [tweets on how to get a list of URLs for your faved tweets](https://twitter.com/ryanfb/status/1014302804796731393)

and

* Joshua Johnson's 2011 post ["AppleScript: Automatically Create Screenshots from a List of Websites"](https://mac.appstorm.net/general/applescript-automatically-create-screenshots-from-a-list-of-websites/).

You may also wish to explore [Documenting the Now](https://www.docnow.io/)'s tools for ethical preservation and research with social media, including the [Tweet Catalogue](https://www.docnow.io/catalog/) to locate datasets of tweets using a given hashtag, and the [Hydrator](https://github.com/DocNow/hydrator) tool for turning those datasets back into a list of tweets and their metadata.

# How to automate screencapping

<span>1.</span> You'll need a text document (plain text / .txt) with each URL you want to be screencapped listed on a separate line:

![](https://scholarslab.org/assets/post-media/2019-01-31-tweet-screenhot-2.png)

If you want to create a list of just your faved tweets, see [this tweet by Ryan Bauman tweet](https://twitter.com/ryanfb/status/1014302804796731393) to get just the liked tweets from your Twitter > Settings > "Your Twitter Data" download.

If you have a bunch of bookmarked URLs you want to screenshot (possibly in one bookmarks subfolder?), you can export your whole set of bookmarks from the browser, then edit the resulting HTML file (using search+replace or regular expressions; sorry, that's a whole separate lengthy tutorial, but [Doug Knox's tutorial here](https://programminghistorian.org/en/lessons/understanding-regular-expressions)'s a good place to get started understanding regular expressions) to strip it to just a list of the URLs you want to screencap.

<span>2.</span> Next, we'll use Joshua Johnson's 2011 post ["AppleScript: Automatically Create Screenshots from a List of Websites"](https://mac.appstorm.net/general/applescript-automatically-create-screenshots-from-a-list-of-websites/) to actually take the screencaps.

We're going to use the Mac "Script Editor" tool to tell our computer to take that list of URLs, open each in Safari, take a screencap of that screen, and save it.

Open the Script Editor app (Applications > Utilities > Script Editor).

<span>3.</span> Grab the text from [this page](https://gist.github.com/amandavisconti/ffc05d293b9fed70a7378421f7c818f0), which puts Joshua Johnson's script in an easy-to-find place (to understand what the script does, read [his post](https://mac.appstorm.net/general/applescript-automatically-create-screenshots-from-a-list-of-websites/) where he walks you through adding and adjusting the different pieces). Paste the text into the top text field:

![](https://scholarslab.org/assets/post-media/2019-01-31-tweet-screenshot-3.png)

If you have a slow internet connection or want to screencap pages on websites that load slowly, you may wish to find and adjust the piece of the script that says "delay 5", to a larger number than 5 (this controls the time the script waits between directing safari to visit a given URL, and taking a screencap of whatever is then currently on the Safari screen).

<span>4.</span> Open the Applications > Safari browser, and drag its screen to be as large as possible. Depending on what level of zoomed-in/zoomed-out you usually use the Safari browser at, you may wish to adjust for the purpose of taking the screencaps; the screencaps will only capture what's showing in the window you've opened (not stuff you'd need to scroll down to see).

<span>5.</span> Open the Applications > TextEdit app (not a different text editor, unless you want to figure out how to edit the script's `tell application "TextEdit"` how to point to a different application). Paste in your list of URLs.

If you have other TextEdit windows/tabs, make sure that the one with the URL list is the topmost/frontmost.

<span>6.</span> You're ready to take screencaps! You'll want to do this when you're okay not having access to your computer for a while, because the screenshots will be of whatever is at the front of your screen. If you step away from your computer, the script knows to leave a Safari browser window open at the front of your screen, take a screencap, then move to the next webpage in your list and screencap that. If you hide the Safari window or have other stuff open over it, you won't get the screencaps you want. (I'm sure there's a way to make this not the case, but I didn't need to figure that out for my use cases.)

Back on the Script Editor, press the "red dot" record icon to begin automatically taking a screencap of each of the URLs in your list:

![](https://scholarslab.org/assets/post-media/2019-01-31-tweet-screenshot-3.png)

When the script finishes running, you'll have screencaps of all the URLs!
