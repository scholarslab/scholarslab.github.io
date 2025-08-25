---
author: brandon-walsh
date: 2025-08-25
layout: post
slug: my-opinionated-slack-setup
title: My Opinionated Slack Setup
category: essay
tags:
- Digital humanities
crosspost:
  - title: Brandon's blog
    url: https://walshbr.com/blog/my-opinionated-slack-setup
---
We're excited this semester to welcome Lisa Blackmore, our new Faculty Director of the UVA Library's Digital Humanities Center, the umbrella organization for both the Scholars' Lab and the Institute for Advanced Technologies and Humanities. As part of Lisa's onboarding, we've added her to our Slack teams and conversations. As part of the process, I offered to share a few tips for how I set up my notifications. Everyone's preferences are going to be different, but I found that the default Slack settings were not useful at all for me when I first signed up. I often share a paragraph with students about how I've made the app work for me, so I thought I would document things publicly so that others can benefit. One caveat: I'm going to avoid screenshots. I learned from my time at the Programming Historian that screenshots are a sustainability nightmare, as a single interface change renders all your documentation out of date. Instead, I'm going to describe my different goals and how I achieve them in the hopes that things will be as durable as possible. What follows are my settings as of August 2025. The goal is to make Slack useful but unobtrusive, to make it work when and how you want it to. 

Confusingly, the notification settings for Slack are distributed in a range of places. Simply knowing this is half the battle. In what follows, I will try to describe where to look when, but it might be helpful to see all the places that notifications could be:

* Account Level - Email settings are controlled at the level of your account, which you have to access from within a web browser.
* App level - Once downloaded, the Slack app will have different settings related to sounds and notifications from your system.
* Team level - A single user can have accounts on many Slack teams. Useful if you want day-to-day settings for a single workplace but separate, more specialized settings for particular projects that exist elsewhere.
* Channel level - A single Slack team has many channels, and you can apply specific notification settings for particular conversation spaces.
* Device level - Your computer or device will have separate options for push notifications, banners, and alerts that you should manipulate.

Now to my settings and recommendations.

## Download the app

First things first: do not use Slack in the web browser. By default, Slack operates as a tab in a browser, and I find that absolutely horrible for a productivity tool. You don't want Slack to be a place that you have to move to separate from your current workflows. The first thing I recommend everyone do is [download](https://slack.com/downloads) the actual standalone app that you can put on your laptop or phone. You want slack to be integrated as a part of your workflow, as a part of your workspace, not somewhere separate that you go to from where you're normally doing work. 

## Silence everything

Second and equally important: remove all sounds from the app. My hot take is that your computer should never make sounds at you unless you ask for it to do so.[^1] The default Slack notification sound is incredibly grating and also very obtrusive. 
There is no better way to make a new Slack user hate the platform than to present them with a constant series of clicks, taps, and buzzes while they're trying to do work. I turn off all Slack sounds. As of August 2025, you can find this setting by going to Slack -> Settings -> "Sound and Appearance" from within the app. 

## Disable bouncing

That same section of Slack's settings contains another important feature: disable the app's bounce function by unchecking "Bounce Slack's icon when receiving a notification." You want the app to work for you—not to demand attention. 

## Only badges - no banners

There will be separate but related notification options at the level of your device. From within my Mac's notification center I also have alerts and banners entirely disabled, opting instead only for badge notifications. This means that my slack notifications quietly accumulate at the bottom of my dock as a red, numbered disk that I can check when I want to see them. No bouncing. No sounds. No flying alerts. Just a quiet counter. 

## Limit what counts as a notification

Next, I disable basically all notifications except for direct messages and channel mentions, I use Slack as a direct messaging service. This means that I only get notifications when someone says @Brandon in a channel or messages me individually. Because of this, I can be in channels that are less important because I have set up my notifications such that I'm not going to be notified about every single thing that happens in them. I'll still see that a channel has unread messages if I log in and I'm looking at it, but less important conversations will not contribute spam notifications that I don't actually need. These choices separate interesting but unimportant messages (think memes in the #Random channel) from important actionable items meant for me. Not all communication is equally important, and I trust my colleagues to ping me when I'm needed. You set all this from Slack Menu -> Notifications -> Notify me about -> Direct messages, mentions, & keywords. If you really want to designate a particular channel as less important you can right click on it to mute that space alone.

## Email notifications begone

Lastly, I would turn off email notifications, which is done at the account level by logging into slack in your browser. You can get a link to this area from the Slack menu -> Notifications -> When I'm not active on my desktop -> Set email notifications. One caveat though: the only time you might want email notifications is if you are very new to Slack and you're trying to incorporate it into your workflow. Look deep within yourself. Will you forget that Slack exists if you're not reminded? Email notifications can be a way to pull yourself back into the Slack ecosystem and make sure that you don't miss things that are important. If you're regularly opening the app at the start of your work time, I would give email notifications the boot. 

## Don't put slack on your phone

Another tip: do not have Slack on your phone. Slack is an incredible tool that can save you from a whole lot of emails and  meetings. But you don't want Slack to bleed over into your personal life. It's easy to let it become just another messaging app that you check at all hours. Resist.

## Know who uses it

One last note on Slack: the tool is only as good as how it is used by your team. I have found that the tool is an essential part of daily work process, even if there's only one other person who's a dedicated user. But every team I've ever worked on has had a range of engagement. Some people are hardcore users, trained in the days of AOL Instant Messenger, ready to hop on and get a lot of work done in the space. I've also always had collaborators who are nominally on Slack but I know will absolutely never receive a message if I send it to them. It's just not a part of their workflow. It's important to know how you and your team work. Don't try and change people unless they express an interest in doing so. Know which communication styles are best for individual people and operate accordingly. 

## Really important messages go elsewhere

A related point: free Slack plans make your messages unavailable after a certain timeframe or amount of usage. Slack is not a good space for sharing sensitive materials that you want to persist over time. There are other platforms for that. As with all things, use the tool for what it is best at and go elsewhere for other needs. 

Hopefully this short rant about my Slack setup is helpful for others. All of this advice will likely become obsolete before too long, so keep in mind that I won't be updating these suggestions unless I stop recommending Slack altogether. If the above text seems alien to what you're seeing in the interface, you might first ask yourself a pair of questions: 

* What do I want this platform to do? 
* How can I make it do only that?

In the meantime, keep calm and Slack on. 

[^1]: My first, early entry into DH was to use the terminal to delete the sound file that would forcibly play when I turned on my computer. 
