---
author: carin-yavorcik
date: 2012-05-11 13:51:32+00:00
layout: post
slug: wrapping-it-up-teidisplay-and-collaborative-mentoring-with-utuva
title: 'Wrapping it Up: TeiDisplay and Collaborative Mentoring with UT/UVa'
category: blog
tags:
- code
---

I'm very excited to announce that my colleague [Zane](https://scholarslab.org/author/zschwarzlose/) and I have completed our work on the TeiDisplay plugin for Omeka! It's been a little while since I last posted, so if you'd like some background, check out our [previous posts](https://scholarslab.org/category/tei/) on this collaboration between the Scholars' Lab and the University of Texas School of Information. We have made several changes/additions, though the final product isn’t quite ready for release yet.

- We fixed a few bugs in the import process from the TEI Header to Omeka's Dublin Core fields. Additionally, we created a map detailing which fields correspond to which elements. This map also explains how users can customize the import process if the current setup is not optimized for their documents.

- The main XSLT stylesheet now supports every element in the [TEI Lite customization](http://www.tei-c.org/release/doc/tei-p5-exemplars/html/teilite.doc.html). We also reorganized it, adding headers to correspond with the headers in the TEI Lite documentation where particular elements are discussed, so that those who are familiar with XSLT can find and edit elements easily. At a minimum, in the transformation process each tag is given a <span class="TagName">, and many have additional styles as well. This way, we guarantee that a defined set of elements will render in the document. Users unfamiliar with XSLT can also use these span classes to customize the style of their documents using CSS.

- Some of the elements that have been styled for more than just a span class may special requirements in order to render, such as specific attributes that need to be included in the TEI text. We have written a series of formatting tips to help users understand what the XSLT is looking for when it attempts to render the documents.

- The plugin now has functionality to link TEI text to corresponding page images. This is done using the @facs attribute with the <pb> element. Further details on how to use this feature are provided in the documentation.

- We outlined a number of small changes that a user can make outside of the plugin code itself in order to improve functionality. For example, when displaying longer documents, users might wish to create an anchor that allows readers to jump directly from the top of the page to view the item metadata, which is usually at the bottom. This is done on one of the Omeka PHP documents, so it isn’t officially part of the TeiDisplay package, but we include the appropriate code in our documentation and describe where to put it.

- We've written a number of troubleshooting tips, as well as a more detailed guide to installing the plugin and updating documents.

I'm very happy with the changes we made to the plugin, but I think that overall, they were not as extensive as I expected going in. I think the real value added with this project was the extensive documentation we've created, as well as a [demo site](http://tclement.ischool.utexas.edu/teidisplay) that gives examples of the plugin in action. Armed with this documentation, users will not only be able to better understand how the plugin works with their documents out of the box, but they will also be better able to customize it to fit their needs.

Over the coming months the Scholars' Lab will be conducting more rigorous testing of the plugin as well as making some other additions. Hopefully, the final product will be ready late this summer.

Thanks very much to Wayne and Bethany at the Scholars’ Lab, and to our adviser Tanya Clement at UT, for giving us the opportunity to be a part of this project!
