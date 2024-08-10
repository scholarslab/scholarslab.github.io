---
author: eric-rochester
date: 2012-10-08 11:41:46+00:00
layout: post
slug: hot-off-the-presses-2-bagit-plugin
title: 'Hot off the Presses 2: BagIt Plugin'
category: essay
tags:
- omeka
- code
---

[![Canvas Bag - tutorial24](http://farm5.staticflickr.com/4058/4258185459_8cdd4ac6bd_m.jpg)](http://www.flickr.com/photos/kittybabylove/4258185459/)

Photo by [kittybabylove](http://www.flickr.com/photos/kittybabylove/) [![Creative Commons License](http://i.creativecommons.org/l/by-nc-nd/2.0/80x15.png)](https://creativecommons.org/licenses/by-nc-nd/2.0/)





Continuing our roll-out of Omeka plugins we’ve been working on here at the Scholars’ Lab, I’m pleased to announce the [BagIt plugin](http://omeka.org/add-ons/plugins/bagit/) for [Omeka](http://omeka.org/).




[BagIt](https://wiki.ucop.edu/display/Curation/BagIt) is a specification by the [Library of Congress](http://www.loc.gov/index.html) for creating containers of files with metadata. However, the files don’t actually have to be in the container. There is a `fetch.txt` file, which lists URLs for content to add to the container when you take everything out of it.




The first part of this release is the [BagIt PHP library](https://github.com/scholarslab/BagItPHP). This is a generic PHP library for working with BagIt files. We announced an earlier version of this [here](https://scholarslab.org/announcements/announcement-bagitphp-library/), but we’ve updated it and fixed some bugs. If you’re using it, you may want to grab the latest copy of it.




The second part is the [BagIt Omeka plugin](http://omeka.org/add-ons/plugins/bagit/). This is built upon the BagIt library and provides an easy-to-use user interface for it. You can create a bag from a set of Omeka files. You can ingest bags into the Omeka [Dropbox plugin](http://omeka.org/codex/Plugins/Dropbox), and from there you can attach them to items.




This plugin does have a couple of requirements. Both the library and the plugin require the [Archive_Tar](http://pear.php.net/package/Archive_Tar) PHP library, and the plugin depends on the [Dropbox plugin](http://omeka.org/codex/Plugins/Dropbox).




You can find the download on the [BagIt plugin page](http://omeka.org/add-ons/plugins/bagit/). The code is hosted on the [BagItPHP github page](https://github.com/scholarslab/BagItPHP) and the [BagItPlugin github page](https://github.com/scholarslab/BagItPlugin). If you have any feedback about the library or the plugin, find any bugs, or want to suggest a feature, visit the [issues page](https://github.com/scholarslab/BagItPlugin/issues). And if you have questions, feel free to post in the [Omeka forums](http://omeka.org/forums/).
