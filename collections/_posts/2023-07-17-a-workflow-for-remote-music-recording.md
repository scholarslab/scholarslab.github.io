---
author: brandon-walsh
date: 2023-07-17
layout: post
slug: a-workflow-for-remote-music-recording
title: A Workflow For Remote Music Recording
category: essay
tags:
- music and sound
crosspost:
  - title: Brandon's blog
    url: https://walshbr.com/blog/a-workflow-for-remote-music-recording
---

If you've followed me on social media for any length of time you likely know that I am a musician. I play horns with [The Hard Modes](https://thehardmodes.com/), a group that performs original jazz arrangements of video game music. There's some slight overlap between my time with that group and my work in the DH world, insofar as people in the DH community often tend to enjoy video game music (Quinn Dombrowski even had us perform for the [Animal Crossing: New Digital Humanities](https://www.twitch.tv/acndighum) series!). But the COVID-19 Pandemic and resultant social distancing the last few years really made the work feel more DH-y as we tried to find ways to keep playing together remotely even while it was unsafe to do so in person. We wound up releasing an album called [The Lan Sessions](https://open.spotify.com/album/62ujwAsvQX3eJp1HnUWfUo?si=u-N8HTOTSWib_sFCcPHikw) that consisted of tracks where all the individual instruments were recorded separately and at home. Greg Weaver, our bandleader, arranger, and saxophonist, talks a bit about the process of facilitating those remote home recordings in his [blog post](https://thehardmodes.com/blog/2021/1/19/enter-the-lan-sessions) introducing the project. 

Working on those tracks taught me a lot about home recording, music production, and music technology. I found it all fascinating, especially the complicated chain of events necessary to make one of these art objects come to life. For the purposes of this post, I wanted to extract from that experience a generalized workflow for others interested in remote recording projects. Full credit here goes to Greg for his guidance in how to do this work - he helped me troubleshoot throughout, and I am mostly documenting the process he shared with me (for myself as much as for others). By necessity I will stay fairly high level: I won't be noting which buttons to click in which program for the simple fact that each step along the way is fairly complex and dependent on what software and hardware you are using. You can write whole articles just on what microphone to use, whole books on how to use Finale. Instead, I'll just aim to give a broad outline of the steps with some context for why they are necessary. I'll try to connect readers to other resources for more information on how to work through each step. One last caveat: I'm sure there are other ways to do this work. This is just the one we used. The workflow I'll describe will give you a rough roadmap for going from a planned arrangement to a finished recording.

## Pt 1: The Setup

1. Complete the arrangement. 

    Perhaps obvious, but it helps to have some sense of what your arrangement will be before moving to prepare things for recording.[^1] E.g. we will play a melody over these chords followed by two solos and then end in X way. For this workflow you will want to have some sense of the arrangement and the parts before you sit down to start tinkering with next steps. Doing so will save you time, lest you lose work by changing things around too much later on. 

2. Create sheet music for the score and parts. 

    The next step involves taking your arrangement from abstract idea and making it into concrete parts for your players to follow. The music notation software I use for this is [Finale](https://www.finalemusic.com/). Another option is [Sibelius](https://www.avid.com/sibelius). These programs are *deep*. After years I feel I am only beginning to scratch the surface of how to use them.[^2] Finale lets you easily manage all parts of the sheet music process like quickly transposing to different keys, extracting a score to individual parts, hearing a synthesized version of what things will sound like, and more. At the end of this step in the workflow, your goal is to have a score and, most importantly, individual parts for all your musicians. You'll have sheet music to pass out, but you'll more importantly have the beginnings of a template arrangement.

    Resource: 
    * I like the [tutorials](https://usermanuals.finalemusic.com/FinaleMac/Content/Finale/Finale_Tutorials.htm) shared on Finale's own website for getting started with the software.

3. Export your arrangement as a MIDI file from Finale and import it into a Digital Audio Workstation. 

    Now that we're done with sheet music, you will want to export your work to a different piece of software. To do so, you'll export your arrangement in a MIDI (Musical Instrument Digital Interface) format to convert your music into data that can be exchanged across programs. Once you export your work as [MIDI](https://en.wikipedia.org/wiki/MIDI) with all the instruments save as individual tracks, you will create a new empty project in your DAW (Digital Audio Workstation) and then import that same MIDI file.[^3] I use [Logic](https://www.apple.com/logic-pro/), but other options are [Pro Tools](https://www.avid.com/pro-tools) or [Ableton](https://www.ableton.com/en/). We'll use the DAW for the remaining parts of the workflow.

    Resources: 
    * [Exporting as Midi from Finale](http://usermanuals.finalemusic.com/Finale2014Mac/Content/Finale/MIDI_files.htm)
    * [Working with MIDI in Logic](https://support.apple.com/guide/logicpro/standard-midi-files-lgcpdf6a3851/mac)

4. Assemble each of your tracks and check them

    After importing your project in your DAW, your next goal is to get a series of tracks for your project. You will want: 

    * individual tracks for each MIDI instrument
    * a metronome track for the tempo
    
    You might have other specific things you'll want to add, like a four-measure count-in. Things are always a little wonky at this stage, so you will want to check the arrangement pretty closely by listening back to it. At first, every instrument will default to a piano track (this makes drum parts sound especially chaotic). So you will need to assign an appropriate instrument sound to each track to make the piece play back as expected. You also should check each instrument individually. I have found that bass parts, for example, sometimes transfer over an octave or two below where they actually should be and come out quite muddy until you adjust the register. 

    Resources:
    * [Working with software instruments in Logic](https://support.apple.com/guide/logicpro/software-instrument-tracks-lgcpa5b8c023/mac)
    * [Guide to multitrack MIDI recording in Logic](https://www.macprovideo.com/article/audio-software/logic-pro-x-a-guide-to-multitrack-midi-recording)

5. Modify the project's structure to reflect the arrangement

    Once you have everything in Logic and sounding alright, it's time to tinker with the structure of your arrangement. Sheet music will sometimes expect certain parts to be looped and use notation as a shorthand for this process: pages and pages of repeated sections get shortened to just a page with a few symbols that a player knows to read. But you need your recording tracks to be very literal. Your goal is to make it so that you have a track that can be played start to finish and reflect the actual arrangement you want. Think of it as though you are working towards a blueprint for your group.
    Move things around in your DAW on a macro level to reflect exactly what you want it to sound like. For us, this usually entails taking the solo sections and copy/pasting them a few times so that they repeat as expected. 

    Resources:
    * [Moving regions in Logic](https://support.apple.com/guide/logicpro/move-regions-lgcpf7c0d489/mac#:~:text=Event%20Float%20window.-,Move%20a%20region,to%20another%20software%20instrument%20track.)
    * [Editing arrangement markers in Logic](https://support.apple.com/guide/logicpro/edit-arrangement-markers-lgcpf7c0a3d7/mac)

7. Export the project and share with your group.

    Now you have a mockup template for the group that you're ready to share. You'll want to export WAV files of each track, including the metronome track. You also might want to export the project as a MIDI track just in case. At this point, we usually share all these files in a Google drive folder and send an email to the group with instructions for recording, the order in which each person should record, and any other project-specific settings.

    Resources: 
    * [Exporting individual tracks in Logic](https://www.soundswow.com/how-to-bounce-tracks-logic-pro/#:~:text=To%20bounce%20individual%20tracks%20in%20Logic%20Pro%20X%2C%20all%20you,you%20hit%20the%20bounce%20command.)

## Pt. 2: Recording

All of the above is just setup done by the person leading a particular arrangement. At this point, you should have a blueprint for your arrangement and a series of individual tracks for each instrument. The next phase involves each collaborator recording their own part, layering these live recordings together to make a final project.

1. Get the project

    Each person should have access to your shared folder with the arrangement materials. Each collaborator imports the project tracks into their own DAW so that they have the same template to work from. Because we will start mixing live audio recordings with the individual MIDI instruments, the process of importing them will be slightly different. See the resources below for more information. At the end of this step, they should have individual tracks for each instrument as well as a metronome track.

    Resources:
    * [Importing audio tracks in Logic](https://support.apple.com/guide/logicpro/add-and-delete-audio-files-lgcp1bb0ad7d/mac#:~:text=In%20Logic%20Pro%2C%20select%20an,Audio%20button%20in%20the%20toolbar.)

2. Record their part

    Each person should have the full project at this point, broken into individual instrument tracks. The recording process can look wildly different depending on individual setups. For example, each of us recorded with different microphone setups. The construction of your room will affect the sound, as will the distance to the microphone. In my opinion, your best bet is just to start with what you have, listen back, and research how to make adjustments in search of the sound you want. I fell down a real rabbit hole trying to get my trumpet to sound true to life before I learned that the disconnect between my room sound and the recorded track was expected (trumpet needs some reverb and EQ in order to sound "natural"). You can save yourself a lot of frustration by spending time researching tips for recording your particular instrument.
    
    When ready to record, each person will mute the MIDI instrument corresponding to their particular instrument and record their own live part over it. When done, they will export only their recorded track and upload their live materials into a shared folder. If you are planning to use video, you will want your players to record it at the same time. We usually had a phone recording in landscape HD at the same time we recorded audio, clapping at the beginning of the take to make it easier to line up the separate audio and video recordings down the line.

    Resources:
    * [Getting started with home recording in Logic](https://www.makeuseof.com/gear-you-need-to-record-with-logic-pro-x/)
    * [Tips for getting started for home recording](https://www.izotope.com/en/learn/7-home-recording-studio-hacks-for-the-bedroom-producer.html)

3. Repeat

    Each subsequent person repeats steps one and two. The collected multitrack recording builds up over time as each new person adds a new live instrument. With each new track, more of the instruments in the mix are live and not MIDI. You might consider tinkering with the order in which you have people record. Greg had us record the rhythm section first, followed by soloists, followed by a second pass of the rhythm section re-recording their parts with the live soloist. This essentially duplicated some of the same work, but it meant that there was perhaps a bit more of a live feel to the interplay between soloist and accompanists than there might otherwise have been.

## Next steps

After everyone has recorded, you're on your way! At this point, you might send the materials off to be engineered and mixed for consistency (or do so yourself). After all, everyone recorded their parts separately so there is likely to be some massaging needed to make a track that sounds consistent across the board. You might also be interested in cutting together a video to share online based on the work you did. This can be an intense process in its own way, but you have most of the raw materials you need for it. I'll share some resources below for getting started in that direction. Working on these projects was a long, at times tedious process, but I'm very happy for the experience.

Resources:

* [Mixing in Logic](https://support.apple.com/guide/logicpro/mixing-overview-lgcpbc219818/mac#:~:text=When%20you%20mix%20a%20project,in%20your%20project%20over%20time.)
* [Synching Audio and Video in Final Cut](https://motionarray.com/learn/final-cut-pro/sync-audio-in-final-cut-pro/)
* [Final Cut Resources](https://www.apple.com/final-cut-pro/resources/)

## Notes

[^1]: There can be broad variation in how the arranging process looks. You might plan things entirely on a piano. Or you might skip that step and compose entirely in a program meant for sheet music before sending to a different piece of software to prepare the recording process. Or you could arrange entirely in a Digital Audio Workstation and skip the initial process of making sheet music. For our purposes we used two different programs–one for sheet music and one for mixing–and had to export work between them. 

[^2]: If you've never used music notation software before, you can gather their importance from a situation that happened to me in college. I had written parts for an entire band with pencil by hand. After I finished, I realized I had made some significant mistakes and had to rewrite whole sections again by hand. Too many eraser marks make things quite hard to read and take forever to clean up.

[^3]: In Logic at least, your project will likely ask if you want to [import tempo information](https://logicpro.skydocu.com/en/make-global-changes-to-a-project/work-with-tempo/use-tempo-information-from-audio-files/#:~:text=In%20some%20situations%2C%20you%20may,file%20in%20the%20Tracks%20area.) and ask you to select a [frame rate](https://support.apple.com/guide/logicpro/general-project-settings-lgcp7c04a41a/mac#:~:text=Logic%20Pro%20for%20Mac%20automatically%20interprets%20frame%20rates%20of%20%E2%80%9Capproximately,are%20used%20as%20a%20standard.) for the project. These are both dependent on the particular project you are planning to do.
