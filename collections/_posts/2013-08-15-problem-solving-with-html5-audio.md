---
author: wayne-graham
date: 2013-08-15 09:19:16+00:00
layout: post
slug: problem-solving-with-html5-audio
title: Problem Solving with HTML5 Audio
categories:
- Research and Development
tags:
- audio
- faulkner
- html5
- javascript
- mp3
- ogg
---

Several years ago I worked on a project to take recordings made of William Faulkner while he was the Writer-in-Residence at the University of Virginia in 1957 and 1958. The project, [Faulkner at Virginia](http://faulkner.lib.virginia.edu), transcribed the audio and then keyed the main components of the audio to the text using TEI. In order to provide playback of an individual clip, we used a streaming server ([Darwin Streaming Server](https://en.wikipedia.org/wiki/Darwin_Streaming_Server)) that was being managed by another group. This allowed me to provide "random" access to the components of the audio, without needing to split up the files. Using the associated API, I could generate a clip of the data with something like this:

[gist id="5830678" file="gistfile1.js"]

While this is kind of a nasty bit of JavaScript, it (somewhat) abstracts the Object embed code:

[gist id="5830678" file="gistfile2.html"]

At the time, the [WHATWG specifications for audio](http://www.whatwg.org/specs/web-apps/current-work/) were still pretty nascent, and didn't have a lot of actual implementation saturation in browsers. At the time (late 2000s), the approach of using a third-party plugin to provide "advanced" interaction with a media element was pretty much the only game in town. 

As with any project that relies on web technology, eventually things start to break, or just flat-out not work on devices that can access the Internet (e.g. mobile). Browsers have been in a war with each other for speed, implementation of "standards", and market share. This has been a real boon for users as it has allowed developers to really push what the web is capable of as a run-time environment. Unfortunately for the Faulkner audio, the code got to the point where the approach stopped functioning consistently across all desktop browsers (interestingly, Chrome seemed to manifest this issue most consistently), and oh yeah, there are those iOS-based mobile devices that can't play this either.



## HTML `audio` to the rescue



You know that modern browsers (everything but IE < 9) can play audio natively (i.e. without a plugin), right? Really the only really horrible thing is that not every browser handles the same "native" format. You can check out a good table for [codec support for audio](http://html5doctor.com/html5-audio-the-state-of-play/#support), but it basically boils down to needing an MP3 and an [Ogg Vorbis](http://www.vorbis.com/) version of the audio files to provide for nearly all the browsers (IE being the outlier, with this working of IE 9+).

[gist id="5830678" file="gistfile3.html"]

This provides something on your page like this:


  
  


The great thing is that this will work on a mobile device as well. Score one for the Internet! Now to figure out the best way to do this.



### Split the files



My first instinct was to take the files and split them into "clips" on the page. This would allow the browser to provide its native playback mechanism, and allow individuals to grab the segments for remixing (still waiting for an auto-tuned remix of "Spotted Horses"). In the [TEI source](https://code.google.com/p/faulkneratvirginia/source/browse/trunk/cocoon/data/tei/wfaudio02_1.xml#67) are the start and end times for each of the "snippets." My go-to tool for working with media is [ffmpeg](http://www.ffmpeg.org/), and I knew I could break up the files into components, copying the bitrate into a new mp3. I wrote a quick XSLT to generate a shell script that would generate the `ffmpeg` commands to run.

[gist id="5830678" file="convert_mp3.xsl"]

This generated a nice file of the commands to run.

[gist id="5830678" file="gistfile5.sh"]

At this point, all the data has been processed, so I need to see if this this going to actually work. I wrote another XSLT to preview what was going on and make sure this approach was going to work ok. Nothing too fancy, just an HTML wrapper, with most of the "work" happening in the `div2` element.

[gist id="5830678" file="htmlaudio.xsl"]

Since the segment file names were derived from their `id` attributes, I was able to just point at the file without a lot of poking around. Now for the test!

I started playing with it and it appeared to work just fine. I then asked one of my colleagues who was working remotely to take a look at it, and she ran into a show stopper. She observed that when she loaded the page, only the first several of the clips were loading.

In the `audio` element, I had added the `preload="auto"` attribute to allow the file to buffer and play before then entire file had downloaded. When I profiled what was going on, I realized that somewhere around 20Mb of download, the browser was giving up preloading the audio for immediate playback. If you remove that attribute, the browser won't buffer the file and you would have to download the entire file before you could start the playback. Definitely not what I was aiming at. Time to try something else.



### Audio Time Range


In reading the [MDN docs](https://developer.mozilla.org) on [HTML5 audio](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio), I came across a section on [Specifying a playback range](https://developer.mozilla.org/en-US/docs/Web/HTML/Using_HTML5_audio_and_video#Specifying_playback_range). This looks promising! There is one file reference, and I just need to get the playback times in. It is unclear, however, from the description if the browser treats this as a single file transfer, or each segment as it's own download thread. Fortunately it's just a small tweak to the XSLT generating the `audio` elements.

[gist id="5830678" file="time_ranges.xsl"]

After checking the browser again, looks like the same issue is there; the browser treats each segment as its own download thread and chokes when it gets around 20Mb. Meh; the Internet. Ok, time to try something different.



### Audio Sprites



When I was writing my book on developing HTML5 games, I ran across a great article [Audio Sprites (and fixes for iOS)](http://remysharp.com/2010/12/23/audio-sprites/) by Remy Sharpe. The idea draws inspiration from [CSS sprite sheets](http://css-tricks.com/css-sprites/) where you put all your image assets into a single file then display the portion of the image you want on an HTML page. With audio sprites, instead of shifting coordinates of an image around, you shift the playhead of an MP3 file and tell it how long to play. This is really great for games as you can have a single file for players to download with all the audio files. Maybe this technique will work here...

Since I wanted to see how well this would work, and not necessarily write a library to support this, I used the [howler.js](http://badassjs.com/post/41873438322/howler-js-a-cross-browser-javascript-audio-playback) library which has support for audio sprites. Back to the XSLT.

The `howler.js` API defines sprites by names to allow you to refer to then as variables in your code (again, it's written for developing games). It also wants you to (in milliseconds) tell it where to start playing, and for how long to play. Ugh, my start and end times are in `hh:mm:ss.s` format. I wrote a quick function to explode the timestamps and add them together as milliseconds (actually this is a bit off, but I didn't spend the time to work in the actual conversion units, but I wanted to see if this is going to work before I put that time in). 

[gist id="5830678" file="timeToMilliseconds.xsl"]

Now I can set up JavaScript for the Howler object literal for use on the page.

[gist id="5830678" file="timeToMilliseconds.xslt"]

A few notes here, iOS devices require user interaction before an audio asset can be loaded. To handle the mobile devices, I added a button to the page that is hidden with a media query for desktop browsers. When the user clicked on it, they would see a [thumper](http://www.ajaxload.info/) and a notice when the file had been loaded. I also had to add my own "play" buttons as this API is really meant for games.

Awesome, it works! But is this really a good idea? This is kind of an exotic ("clever" in programming terms) approach. It also relies on an obscure library that may not be maintained in the future. This probably isn't the best path forward...



## Blended Approach


After some more thought, maybe what's needed here is a blended approach. I liked the fact that with the timestamps, I only have to create one extra file (and not 2 * n clips for both mp3 and ogg formats), but there was that sticky preload issue. This is where JavaScript can also help. What if there was an obvious mechanism for a user to click and then I could use JavaScript to dynamically construct an `audio` element in the DOM, and only start streaming the "segment" the user requested? This just may work :)

With a little JavaScript, I take a look at the DOM and construct an audio element, passing back to the browser the smallest version of the file (ogg then mp3) the browser can play back natively.

[iframe src="http://jsfiddle.net/wsgrah/3EfAD/15/embedded/js,html,css/" allowfullscreen="allowfullscreen" frameborder="0"]

So the final product results in this, which has an animation to remove the icon, replacing it with the native audio playbar: 

[iframe src="http://jsfiddle.net/wsgrah/3EfAD/15/embedded/result/" allowfullscreen="allowfullscreen" frameborder="0"]



# Generating Ogg



Now that I've got a basic system for playing the audio that works on just about every browser, time to take a look at converting these audio files. There are about 60 MP3s that needed to get transcoded for this project. If it were just a handful, I may have just manually done the transcoding in something like [Audacity](http://audacity.sourceforge.net/), but there were a lot of files, and I'm a "lazy" developer. Obviously this is a another job for [ffmpeg](http://www.ffmpeg.org/). I had to recompile it from [homebrew](http://brew.sh/) (an OS X package manager) to include the `libvorbis` bindings.

[gist id="5830678" file="gistfile4.txt"]

After getting the proper transcoding libraries installed, I wrote a quick bash script to convert all MP3s in a directory to ogg.

[gist id="5830678" file="transcode_ogg.sh"]

After this ran (it took a few hours), I had a complete set of MP3 and OggVorbis files for the project. 



## Conclusion


After rethinking how to address the problem of streaming audio to multiple platforms, with various limitations on how the `audio` specification is implemented, I finally landed on something that is not novel. What it does do, however, is move away from an approach that is no longer widely supported (the use of QTSS), to a single method that leverages the native support of modern browsers to do something reasonably simple...play a bit of sound. I also got rid of a lot of JavaScript (which breaks), the reliance on another server (which breaks), and sped up the delivery of the audio to the client. Additionally, since this isn't an exotic (or complicated) replacement, the next person who has to do something with this code in five years will have a fighting chance at figuring out what is going on!
