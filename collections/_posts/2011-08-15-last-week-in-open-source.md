---
author: wayne-graham
date: 2011-08-15 09:42:51+00:00
layout: post
slug: last-week-in-open-source
title: Last week in Open Source
category: essay
tags:
- research-and-development
---

Another busy week in the Scholars' Lab R&D offices. If you have anything to contribute, remember, pull requests are welcome!


## Rails 3.1 Template


Eric Rochester ([erochest](https://github.com/erochest)) spent some time building a [template for Rails 3.1](https://github.com/scholarslab/rails31-template) projects which include [HTML 5 Boilerplate](http://html5boilerplate.com/) and [960gs](http://960.gs/) for erb template layouts, along with [rspec-rails](https://rubygems.org/gems/rspec-rails), [annotate](https://rubygems.org/gems/annotate), [faker](https://rubygems.org/gems/faker), [webrat](https://rubygems.org/gems/webrat), [spork](https://rubygems.org/gems/spork), and [factory_girl_rails](https://rubygems.org/gems/factory_girl_rails) gems to help speed spinning up a new rails project. He wrote a nice [post on using this technique](https://scholarslab.org/slab-code/web-development-template-rails-3-1-html-5-boilerplate-960-gs/), then we refactored it a bit, using the rails [application templating system](http://guides.rubyonrails.org/generators.html#application-templates), as well modifying the inclusion of styles and javascripts as we read more of the sprockets 2.0 source to see how it actually handles combining CSS and Javascript.

The entire group has been working with Rails a bit more the past couple of weeks (we have lots of experience in the group with Python and PHP), and there were some humorous responses when I asked their thoughts on rails and the new asset pipeline:

"I like it a lot more than I used too..." - Jeremy Boggs

"The asset pipeline is easy enough to override..." - Eric Rochester

"Meh..." - David McClure


## Octopress


Eric Rochester [reworked his blog](http://www.ericrochester.com/) in [Octopress](http://octopress.org/), a [Jekyll](http://github.com/mojombo/jekyll) framework for blogging ([0b331a9](https://github.com/erochest/erochest.github.com)). No more database overhead, just straight up HTML goodness! If you feel Wordpress is overkill for your needs, and love markdown (or other minimalist markups), you should definitely check this technique out.


## Chef


Eric Rochester found a [bug in the Chef when using httpd on CentOS 6](http://tickets.opscode.com/browse/COOK-665) ([pull request](https://github.com/opscode/cookbooks/pull/178)). This update changes the default [pid](http://en.wikipedia.org/wiki/Process_identifier) file for the httpd daemon and updates the Apache configuration to appropriately assign the pid as expected. There is really nothing worse than a stale pid file that stalls a daemon.


## NeatlineMaps


David McClure is getting closer to finishing a major refactor of the [Neatline Maps plugin](https://github.com/scholarslab/NeatlineMaps) for Omeka, which makes is possible to display .tiff files hosted in [GeoServer](http://geoserver.org/display/GEOS/Welcome) with a "slippy" map courtesy of [OpenLayers](http://www.openlayers.org). The current [maps branch](https://github.com/scholarslab/NeatlineMaps/tree/maps) of the plugin has quite a number of UX improvements that ease the building of composite maps from of a number of files and associate them with Omeka items.


## The Mind is a Metaphor


Wayne Graham has started the work of migrating a Rails 2 application to Rails 3 using upgrade plugins and rake tasks. Not only is this application upgrading frameworks, but also is being upgraded to run on Ruby 1.9. As support for Ruby 1.8.7 will reach its [EOL](http://redmine.ruby-lang.org/issues/4996), with normal maintenance until June 2012 and security fixes until June 2013. After spending some time grinding on this, enough has changed that I'm going to try a new tack and merge models and controllers into a blank project because of the difference in how rails sets itself up depending on if 1.9 or 1.8 is used to initialize the project.


## Git Flow


We are attempting to standardize our git workflow to make a bit more sense and be "safer." After reading the great piece by Vincent Driessen ("[A successful Git branching model](http://nvie.com/posts/a-successful-git-branching-model/)" [pdf](http://github.com/downloads/nvie/gitflow/Git-branching-model.pdf)), we've begun utilizing [gitflow](https://github.com/nvie/gitflow).  Essentially it  breaks down to a master branch (the release), a develop branch (your next version), release versions (archive of past releases). You then create local "feature" branches that you merge in to the develop branch, merging up the tree as needed. I personally am digging the fact that to merge my local branches I no longer have to type:

```
git co develop
git merge --no-ff mybranch
git branch -d mybranch
git push origin develop
```

There are only two lines now:

```
git flow feature finish mybranch
git push origin develop
```
