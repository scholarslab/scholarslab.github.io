---
author: wayne-graham
date: 2011-08-04 06:30:00+00:00
layout: post
slug: this-week-in-open-source
title: This week in Open Source
categories:
- Research and Development
tags:
- fedora
- neatline
- omeka
- open source
- timeline
- vagrant
---

After reading a post on one of my favorite blogs, [Giant Robots Smashing Into Other Giant Robots](http://robots.thoughtbot.com/post/8221237451/this-week-in-open-source), I was inspired to start this series chronicling highlights in our Open Source development efforts.

It was a busy week for the Scholars' Lab R&D team, with updates to the [FedoraConnector](https://github.com/scholarslab/FedoraConnector), [NeatlineMaps](https://github.com/scholarslab/NeatlineMaps), and [Timeline](https://github.com/scholarslab/Timeline) plugins for [Omeka](https://github.com/omeka/Omeka), as well as updates to our Vagrant [cookbooks](https://github.com/scholarslab/cookbooks) (and an [Omeka dev example](https://github.com/scholarslab/FalmouthDevEnv)), and [BagItPHP](https://github.com/scholarslab/BagItPHP) library.


## FedoraConnector


David McClure ([davidmcclure](https://github.com/davidmcclure)) greatly improved the workflow for updating metadata from FedoraCommons objects in to an Omeka instance 04b8ee8. Users can now set not only system-wide defaults for polling updates to metadata records from a Fedora server, but also on a per-field basis within individual records, giving users greater control over their metadata pulls.


## NeatlineMaps


David McClure ([davidmcclure](https://github.com/davidmcclure)) also has begun work on a major refactor of the NeatlineMaps plugin on the refactor branch of the project. There is now much smarter support for dynamically determining a map's bounding box ([c4090fe](https://github.com/scholarslab/NeatlineMaps/commit/c4090fe1c37cb7547dfe11b309d50290d357b9a2)). Just a note if you are checking out this branch: this commit ([032adf3](https://github.com/scholarslab/NeatlineMaps/commit/032adf36eb72ec5d6cd9ece34a5ad625168c1f23)) adds the map in the item view, but is default code and displays the map incorrectly due to a bug in the projection. Next up is a major revamp of the administration interface, which will provide a facade for GeoServer inside of Omeka, making it easy to manage collections of maps and assign them to servers and namespaces.


## Timeline


Jeremy Boggs ([clioweb](https://github.com/clioweb)) has re-implemented the Timeline plugin to use the [jQuery Timeglider plugin](http://timeglider.com/jquery/). This update ([b078df8](https://github.com/scholarslab/Timeline/commit/b078df8169cc30ce2706d3c564161bef44ea3330)) replaces the plugin's use of the SIMILE Timeline and begins to add support for a custom JSON output ([51eb12a](https://github.com/scholarslab/Timeline/commit/51eb12a1c8cdcc37d9d96f72223e7cbee99aa09b)) for Omeka records for use in Timeglider timelines.


## Vagrant


Eric Rochester ([erochest](https://github.com/erochest)) has been working on standardizing our development, testing, and deployment environments using virtual servers with [Vagrant](http://vagrantup.com/). He has set up a repository of [cookbooks](https://github.com/scholarslab/cookbooks) which automate the setup of development environments for various projects. For a cool example, check out the [dev environment](https://github.com/scholarslab/FalmouthDevEnv) for our project with Louis Nelson, chronicling the architectural development of [Falmouth Jamaica](http://falmouth.lib.virginia.edu/).


## BagitPHP


We spent some time this week moving our Omeka plugins (and other libraries) to a new Jenkins server. In getting the PEAR/Pecl packages properly set up, Wayne Graham ([waynegraham](https://github.com/waynegraham)) updated the ant script for the various testing and code reports that we run on our software  ([465fa89](https://github.com/scholarslab/BagItPHP/commit/465fa89cf2c9cdc763018acde72c82be0f21e6bb)).


## Jenkins


To better automate our testing environment, David McClure ([davidmcclure](https://github.com/davidmcclure)) worked out the final issues with automating the testing of our plugins with multiple versions of Omeka. We are currently targeting the [current stable tag of Omeka](https://github.com/omeka/Omeka/tree/stable-1.4), and the [master branch](https://github.com/omeka/Omeka). We are working on turning everything green, but the major work of integrating the plugins in to the test environment is complete. It took a bit of tinkering to get the plugins to build correctly when they're not sitting inside of an Omeka installation tree (as they would in a standard configuration). Watch this space for a more detailed post about how to replicate this set up.

[![](http://www.scholarslab.org/wp-content/uploads/2011/08/omeka-jenkins-300x175.png)](http://www.scholarslab.org/slab-code/this-week-in-open-source/attachment/omeka-jenkins/)


