[![Build Status](https://travis-ci.org/scholarslab/scholarslab.org.svg?branch=master)](https://travis-ci.org/scholarslab/scholarslab.org)

# Scholarslab.org
The code that forms our [ScholarsLab.org]() site, and stuff related to improving the site (documentation, issue list of future work)

We've tried to cover stuff below, but definitely feel free to either ask any questions in the SLab Slack #slab-org channel, or talk with Amanda. (It's fine if you haven't read through all the documentation below first—there's a lot, but that makes it harder to quickly find answers and we're happy to point you to what you need.)

## Table of Contents

1. [View the site](#view-the-site)
2. [Contribute to the site](#contribute-to-the-site)
3. [Add an issue](#add-an-issue)
4. [Working with the site locally](#working-with-the-site-locally)
	* [Prerequisites](#prerequisites)
	* [Installation](#installation)
	* [Building the site](#building-the-site)
	* [Rake tasks](#rake-tasks)

## View the site

1. [ScholarsLab.org]()
* Our "live" (aka production) website that the world can see.
* We change code in this repo, a script that Ammon created updates the UVA web server hosting our site, and the change appears on ScholarsLab.org a couple minutes later

2. Maybe.ScholarsLab.org
* _Not_ our live site; lives on GitHub Pages server
* Gets updated when the repo gets updated, but! lacks some stuff that can't work on GitHub Pages (some Jekyll plugins, the nginx redirects that point old URLs to the current page locations (e.g. scholarslab.org/about/charter moved to scholarslab.org/charter when we moved from WordPress to Jekyll)
* So, maybe just ignore that this exists? I guess we could take it down?

3. "Old" WordPress site will live at: [https://old.scholarslab.org]() (hasn't been moved there yet; #531 will accomplish this)
	* The Wordpress site that was ScholarsLab.org up until the end of 2018
	* No longer updated, but available in case we need to grab stuff from it

## Contribute to the site

Check out the appropriate documentation for:
* [editing or adding a new post or page](https://github.com/scholarslab/scholarslab.org/blob/master/docs/authoring-and-editing.md)  
* [template for new posts](https://docs.google.com/document/d/1OWBTybWrpZuesu8BQVQTbpXMkIC5p-nyAW26DV7r_A4/edit?usp=sharing) * [template for new pages](https://docs.google.com/document/d/10OeLQUflD5txvjPQXFPHRgCpzfvu9_c9LC7R6nfXLl4/edit?usp=sharing)  
* [template for new events](https://docs.google.com/document/d/1qLncvRa6aqQPpf2BtZwGJFf_vqrLTG6EB6qoyenZxLc/edit?usp=sharing)

...and then locate where you need to go in the repo:

1. Adding or changing language on the homepage? Edit [the repo's top-level index.html file](https://github.com/scholarslab/scholarslab.org/blob/master/index.html)
2. Adding or changing language on other *non-repeating* pages? (NB: A "non-repeating page" is hereafter referred to as a "static page", e.g. the Makerspace homepage, the Praxis homepage, etc.). All such pages are in [this "pages" folder](https://github.com/scholarslab/scholarslab.org/tree/master/pages)

If you can't find the text you want to alter, it may be something that lives in a separate file:
3. [/_includes](https://github.com/scholarslab/scholarslab.org/tree/master/_includes) covers things like our footer, navbar, and  
	A. Alerting folks to a snow day or other surprise/emergency notice: [/_includes/snowday.html](https://github.com/scholarslab/scholarslab.org/blob/master/_includes/snowday.html)  
	B. Updating the "Open Office Hours" sticky notice (in the homepage "upcoming events" list), e.g. when it's summer and we pause office hours until fall: [/_includes/open-office-hours.html](https://github.com/scholarslab/scholarslab.org/blob/master/_includes/open-office-hours.html)  
4. [/_layouts](https://github.com/scholarslab/scholarslab.org/tree/master/_layouts) covers structural stuff that is the same on a bunch of pages, e.g. setting all our project pages to list the title of the project, years, and collaborator names happens in [/layouts/work.html](https://github.com/scholarslab/scholarslab.org/blob/master/_layouts/work.html)  
5. [/collections](https://github.com/scholarslab/scholarslab.org/tree/master/collections) contain the following files, which get pulled into layouts to form posts or pages:
	A. events
	B. people
	C. posts
	D. spaces
	E. work

If none of the above fit or you're not sure, definitely feel free to either ask in the SLab Slack #slab-org channel, or talk with Amanda.

## Get help or add an issue

* Need assistance? Definitely feel free to either ask any questions in the SLab Slack #slab-org channel, or talk with Amanda. And, it's totally fine to just ask rather than hunt through our documentation trying to see if you question is already answered.

* Alerting the team to a bug, requested feature, possible future site work, or other fix? [Add to our issues list](https://github.com/scholarslab/scholarslab.org/issues).

* Check out our [list of frequent error messages](https://github.com/scholarslab/scholarslab.org/blob/readme-rebooot/docs/common-jekyll-problems.md) encountered when working with Jekyll locally. Please add any you encounter (even if you can't document how to solve it.)

Documentation for adding an issue will go here soon!

## Working with the site locally

How to get the site up and running on your computer.

### Prerequisites

- Ruby 2.4.1 
	* OSX: Install/manage using [Ruby Version Manager](https://rvm.io/)
	* Windows: Install/manage using [Uru](https://bitbucket.org/jonforums/uru/wiki/Downloads)
- [Bundler](https://bundler.io/)
- [NPM](https://nodejs.org/en/)

*NB for Windows folks:* Uru is unzipped using 7-Zip, which can be downloaded [here](http://www.7-zip.org/download.html). If you're in a hurry, here's the executable for [version 16.04](http://www.7-zip.org/a/7z1604-x64.exe). Additionally, this [article](https://www.neverletdown.net/2015/08/managing-multiple-ruby-versions-with-uru.html) is a great explainer on how to use Uru effectively, including command line instructions.

### Installation

We use [Jekyll](https://jekyllrb.com) for publishing our site. To run the site locally, clone this Git repository and change directory into the project folder:

```bash
git clone git://github.com/scholarslab/scholarslab.org.git
cd scholarslab.org
```

To install all the necessary gems specified in the `Gemfile.lock`, run Bundler:

```bash
bundle install
```

To install all the necessary node packages, run NPM:
```bash
npm install
```
If this results in an error message, make sure you have Node.js and npm installed. Check out this [guide](http://blog.teamtreehouse.com/install-node-js-npm-mac), or go straight to the [download page](https://nodejs.org/en/).

### Building the site

To build the site and search corpus, run Rake:
```bash
rake
```

If this doesn't work, or you're on Windows, try:
```bash
bundle exec jekyll serve --watch
```

The site should build, and be locally accessible at [http://localhost:4000](http://localhost:4000).

### Rake tasks

The project includes several Rake tasks for creating new content.

#### Make a new person
```bash
rake new_person["First","Last"]
rake new_person["Brandon","Walsh"]
```

#### Make a new post given a title and an author name in the form of first_name last_name
```bash
rake new_post["Title here","First Last"]
ex.
rake new_post["Brandon's best blog post ever","Brandon Walsh"]
```

#### Make a new research project given a title
```bash
rake new_project["The name of your project goes here"]
```

#### Make a new event project given a title
```bash
rake new_event["The name of your event goes here"]
