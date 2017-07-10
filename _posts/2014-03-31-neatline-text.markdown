---
author: dm4fn
comments: true
date: 2014-03-31 12:00:11+00:00
layout: post
link: http://scholarslab.org/announcements/neatline-text/
slug: neatline-text
title: 'NeatlineText: Connect Neatline exhibits to documents'
wordpress_id: 9906
categories:
- Announcements
tags:
- neatline
---

## [Download the plugin](http://omeka.org/add-ons/plugins/neatlinetext)



[![nltext-detail](http://www.scholarslab.org/wp-content/uploads/2014/03/nltext-detail-1024x442.jpg)](http://omeka.org/add-ons/plugins/neatlinetext)

Today we're pleased to announce the first public release of **[NeatlineText](http://omeka.org/add-ons/plugins/neatlinetext)**, which makes it possible to create interactive, Neatline-enhanced editions of text documents - literary and historical texts, articles, book chapters, dissertations, blog posts, etc. - by connecting individual paragraphs, sentences, and words with objects in Neatline exhibits. Once the associations are established, the plugin wires up two-way linkages in the user interface between the highlighted sections in the text and the imagery in the exhibit. Click on the text, and the exhibit focuses around the corresponding location or annotation. Or, click on the map, and the text scrolls to show the corresponding sections in the text.

We've been using some version of this code in internal projects here at the lab for almost two years, and it's long overdue for a public release. The rationale for NeatlineText is pretty simple - again and again, we've found that Neatline projects often go hand-in-hand with some kind of regular text narrative that sets the stage, describes the goals of project, or lays out an expository thesis that would be hard to weave into the more visual, free-form world of the Neatline exhibit proper. This is awesome combination - tools like Neatline are really good at displaying spatial, visual, dimensional, diagrammatic information, but nothing beats plain old text when you need to develop a nuanced, closely-argued narrative or interpretation.

The difficulty, though, is that it's hard to combine the two in a way that doesn't favor one over the other. We've taken quite a few whacks at this problem over the course of the last few years. One option is to present the text narrative as a kind of "front page" of the project that links out to the interactive environment. But this tends to make the Neatline exhibit feel like an add-on, something grafted onto the project as an after-thought. And this can easily become a self-fulfilling prophecy - when you have the click back and forth between different web pages to read the text and explore the exhibit, you tend to write the text as a more or less standalone piece of writing, instead of weaving the narrative in with the conceptual landscape of the exhibit.

Another option is to chop the prose narrative up into little chunks and build it directly into the exhibit - like the numbered waypoints we used in the [the](http://hotchkiss.neatline.org/neatline-exhibits/show/chancellorsville-may-2-1863-132/fullscreen) [Hotchkiss](http://hotchkiss.neatline.org/neatline-exhibits/show/battle-of-chancellorsville/fullscreen) [projects](http://hotchkiss.neatline.org/neatline-exhibits/show/my-dear-little-nelly/fullscreen) back in 2012, each waypoint containing a small portion of a longer interpretive essay. But this tends to err in the other direction, dissolving the text into the visual organization of the exhibit instead of presenting it as a first-class piece of content.

NeatlineText tries to solves the problem by just plunking the two next to each other and making it easy for the reader (and the writer!) to move back and forth between the two. For example, NeatlineText powers the interactions between the text and imagery in [these](http://neatline.dclure.org/neatline/show/gemini-over-baja-california) [two](http://neatline.dclure.org/neatline/show/saturn-v-stage-2) exhibits of NASA photograph from the 1960s:

[![nltext-gemini](http://www.scholarslab.org/wp-content/uploads/2014/03/nltext-gemini-1024x619.jpg)](http://dclure.org/logs/project-gemini-over-baja-california/)

[![nltext-saturn-v](http://www.scholarslab.org/wp-content/uploads/2014/03/nltext-saturn-v-1024x615.jpg)](http://neatline.dclure.org/neatline/show/saturn-v-stage-2)

(Yes, I know - I'm a space nerd.) NeatlineText is also great for creating interactive editions of primary texts. An earlier version of this code powers the [Mapping the Catalog of Ships](http://ships.lib.virginia.edu/neatline-editions/271) project by Jenny Strauss Clay, Courtney Evans, and Ben Jasnow (winner of the Fortier Prize prize at DH2013!), which connects the contingents in the Greek army mentioned in Book 2 of the Iliad with locations on the map:

[![nltext-ships](http://www.scholarslab.org/wp-content/uploads/2014/03/nltext-ships-1024x614.jpg)](http://ships.lib.virginia.edu/neatline-editions/271)

And NeatlineText was also used in this interactive edition of the [first draft of the Gettysburg Address](http://neatline.dclure.org/neatline/show/gettysburg-address):

[![nltext-gettysburg](http://www.scholarslab.org/wp-content/uploads/2014/03/nltext-gettysburg-1024x611.jpg)](http://dclure.org/logs/nicolay-copy-gettysburg-address/)

Anyway, grab the code from the [Omeka add-ons repository](http://omeka.org/add-ons/plugins/neatlinetext) and check out the [documentation](https://github.com/scholarslab/nl-widget-Text#neatlinetext) for step-by-step instructions about how to get up and running. And, as always, be sure to [file a ticket](https://github.com/scholarslab/nl-widget-Text/issues) if you run into problems!
