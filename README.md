[![Build Status](https://travis-ci.org/scholarslab/scholarslab.org.svg?branch=master)](https://travis-ci.org/scholarslab/scholarslab.org)

# scholarslab.org
Repo for stuff related to ScholarsLab.org upgrade &amp; static site
migration.

# Table of Contents

1. [Requirements](#requirements)
2. [Getting Started](#getting-started)
3. [Managing Site Content](#managing-site-content)
4. [Contributing to the Project](#contributing-to-the-project)

There's [a wiki page](https://github.com/scholarslab/scholarslab.org/wiki/Rando-Ideas) if you have ideas/thoughts that don't fit well as issues.

## Requirements

- Ruby 2.4.1 (Install/manage using [Ruby Version Manager](https://rvm.io/))
- [Bundler](https://bundler.io/)

## Getting Started

We use [Jekyll](https://jekyllrb.com) for publishing our site. To run the site locally, clone this Git repository and change directory into the project folder:

```bash
git clone git://github.com/scholarslab/scholarslab.org.git
cd scholarslab.org
```

To install all the necessary gems specificed in the `Gemfile.lock`, run Bundler:

```bash
bundle install
```

To install all the necessary node packages, run NPM:
```bash
npm install
```
If you an error message, make sure you have node and npm installed. Check out this guide http://blog.teamtreehouse.com/install-node-js-npm-mac

To build the site and search corpus, run Rake:
```bash
rake
```

The site should build, and be locally accessible at [http://localhost:4000](http://localhost:4000).

## Managing Site Content

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

## Contributing to the Project

We use [Issues](https://github.com/scholarslab/scholarslab.org/issues) for bug reports and feature requests and such. If you find a problem with the site or thing we should add something new, please share it in an issue!

[...]
