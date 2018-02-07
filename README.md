## Scholarslab.org Site Migration

Repo for stuff related to ScholarsLab.org upgrade &amp; static site
migration.

* Build status: [![Build Status](https://travis-ci.org/scholarslab/scholarslab.org.svg?branch=master)](https://travis-ci.org/scholarslab/scholarslab.org)

* If you find a problem with the site or something new we should add, please share it on our [Issues page](https://github.com/scholarslab/scholarslab.org/issues)!

## Table of Contents

1. [Getting Started](#getting-started)
	* [Prerequisites](#prerequisites)
	* [Installation](#installation)
	* [Building the Site](#building-the-site)
2. [Managing Site Content](#managing-site-content)
3. [Contribution Guidelines](#contribution-guidelines)
	* [Documentation](#documentation)
	* [Submitting Issues](#submitting-issues)
	* [Using the Wiki](#using-the-wiki)

## 1. Getting Started

How to get the site up and running on your computer.

### Prerequisites

- Ruby 2.4.1 
	* OSX: Install/manage using [Ruby Version Manager](https://rvm.io/)
	* Windows: Install/manage using [Uru](https://bitbucket.org/jonforums/uru/wiki/Downloads)
- [Bundler](https://bundler.io/)

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

### Building the Site

To build the site and search corpus, run Rake:
```bash
rake
```

If this doesn't work, or you're on Windows, try:
```bash
bundle exec jekyll serve --watch
```

The site should build, and be locally accessible at [http://localhost:4000](http://localhost:4000).

## 2. Managing Site Content

The project includes several Rake tasks for creating new content.

### Make a new person
```bash
rake new_person["First","Last"]
rake new_person["Brandon","Walsh"]
```

### Make a new post given a title and an author name in the form of first_name last_name
```bash
rake new_post["Title here","First Last"]
ex.
rake new_post["Brandon's best blog post ever","Brandon Walsh"]
```

### Make a new research project given a title
```bash
rake new_post["The name of your project goes here"]
```

## 3. Contribution Guidelines

### Documentation

* See our [documentation](docs/README.md) section for instructions on contributing, style guides, and other miscellaneous documentation about the project. 

* **NB:** This documentation mostly covers one-time contributions, like language changes on the homepage of the site. Instructions for frequently-repeated actions, like creating new posts, can be found above.

### Submitting Issues

* We use [Issues](https://github.com/scholarslab/scholarslab.org/issues) for bug reports and feature requests and such. If you find a problem with the site or thing we should add something new, please share it in an issue!

### Using the Wiki

* There's [a wiki page](https://github.com/scholarslab/scholarslab.org/wiki/Rando-Ideas) if you have ideas/thoughts that don't fit well as issues.
