---
author: eric-rochester
date: 2011-04-19 10:16:01+00:00
layout: post
slug: announcement-bagitphp-library
title: 'Announcement: BagItPHP Library'
categories:
- Announcements
- Research and Development
---

The Scholars' Lab is pleased to announce the initial release of a PHP library implementing [BagIt 0.96](https://wiki.ucop.edu/display/Curation/BagIt). BagIt is a specification from the [Library of Congress](http://www.loc.gov/) for bundling and transmitting multiple files along with their meta-data. You can check out the project page at [http://github.com/scholarslab/BagItPHP/](http://github.com/scholarslab/BagItPHP/).

Our work on BagItPHP stems from the open source ["Omeka + Neatline"](http://www.scholarslab.org/announcements/scholars-lab-and-chnm-partner-on-omeka-neatline/) project, a collaboration of the [Scholars' Lab](http://lib.virginia.edu/scholarslab) with the Roy Rosenzweig Center for History and New Media.  "Omeka + Neatline" is supported by the Library of Congress.



#### Downloads


You can download the library either as a [ZIP](http://github.com/scholarslab/BagItPHP/zipball/master) or [tarball](http://github.com/scholarslab/BagItPHP/tarball/master), or you can clone the repo with git:

[sourcecode language="bash"]
git clone git://github.com/scholarslab/BagItPHP
[/sourcecode]


#### Use: Creating Bags


To create a bag, simply instantiate a new `BagIt` object with the name of a directory that doesn't exist, add files to it, and package it into a tarball with the name of the bag:

[sourcecode language="php"]
require_once 'lib/bagit.php';

$bag = new BagIt('./new-directory');

$bag->addFile('./exhibit/index.html', 'index.html');
$bag->addFile('./exhibit/imgs/1.png', 'imgs/1.png');
$bag->addFile('./exhibit/imgs/2.png', 'imgs/2.png');

$bag->package('./new-directory');
// The bag package will be created named ./new-directory.tgz.
[/sourcecode]


#### Use: Reading Bags


To read a bag, simply open an existing back, validate it (optional), fetch remote resources, and iterate over the files, copying them or processing them in some other way.

[sourcecode language="php"]
require_once 'lib/bagit.php';

$bag = new BagIt('./existing-bag.zip');

$bag->validate();
if (count($bag->getBagErrors()) == 0) {
    $bag->fetch->download();

    foreach ($bag->getBagContents() as $filename) {
        copy($filename, 'final/destination/' . basename($filename));
    }
}

[/sourcecode]

For more information about the methods that are available, please see the documentation.


#### Let Us Hear from You


If you're using this library or have any feedback on it, we'd love to hear from you! We are relying on the [GitHub issues tracker](https://github.com/scholarslab/BagItPHP/issues) for code feedback, so you can file bugs or other [issues there](https://github.com/scholarslab/BagItPHP/issues). If you have a more general question, feel free to post here.
