---
author: carin-yavorcik
date: 2012-02-06 11:38:08+00:00
layout: post
slug: an-update-to-teidisplay-for-omeka
title: An Update to TEIDisplay for Omeka
category: essay
tags:
- omeka
- code
---

This spring, my colleague Zane Schwarzlose and I are working on an update to the TEIDisplay plugin for Omeka, developed by Ethan Gruber at the Scholars’ Lab. While it’s a great tool, it was developed as part of previous versions of Omeka. Even then, it was at times difficult to use, and some TEI elements did not render correctly. We’re hoping to update the plugin and iron out some of those bugs as we progress.

My first experience using the plugin was last year for an [Introduction to Digital Humanities](http://blogs.ischool.utexas.edu/f2011dh/) course at UT-Austin’s School of Information taught by Tanya Clement (also our advisor for this project -- she goes into more detail about the project background [here](https://www.scholarslab.org/announcements/collaborative-mentoring-at-ut-and-uva-co-developing-an-updated-teidisplay-for-omeka/)). Dr. Clement asked us to create an Omeka exhibit for a set of correspondences, including images of the original letters as well as TEI documents of marked-up content. It sounds simple enough, but there was a lot of frustrated graduate student Facebook posting going on in the days before the project was due as people ran into unexpected technical difficulties.

Overall, there seem to be two main problems with the plugin. For the majority of the documents, we couldn’t get them to format at all – the entire body of text would wind up in one large paragraph in miniscule font at the top of the page. In a few other cases, the document would format enough to be readable, but it wouldn’t pick up the finer details of the TEI tags. For example, <p> tags would result in paragraph breaks, but <sic> and <corr> elements wouldn’t display– so something like “<choice><sic>sndstorms </sic><corr>sandstorms </corr></choice>” would show up as “sndstormssandstorms” in the body of the text. Though this seems like a relatively easy XSLT fix, we imagine other fixes (even possibly this one) may not be so straightforward.

Throughout the project, Zane and I will be documenting our work here at the Scholars’ Lab blog. At the end of the semester, we hope to provide not only an update to the plugin, but also user documentation, including use case scenarios and templates.

We’re going to be seeking input over the next few weeks on how this plugin would work in an ideal world, and we need your help! Look for a more formal survey soon, but in the meantime, let us know your thoughts in the comments – what are you looking for in a simple, out-of-the-box TEI display tool?
