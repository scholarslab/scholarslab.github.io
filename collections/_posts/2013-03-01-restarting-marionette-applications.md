---
author: david-mcclure
date: 2013-03-01 09:45:25+00:00
layout: post
slug: restarting-marionette-applications
title: Restarting Marionette applications
categories:
- Research and Development
tags:
- backbone
- Jasmine
- javascript
- marionette
- neatline
---

_[Cross-posted from [dclure.org](http://dclure.org/logs/restarting-marionette-applications/)]_

Over the course of the last couple months, I've been using Derick Bailey's superb [Marionette](https://github.com/marionettejs/backbone.marionette) framework for Backbone.js to build the new version of Neatline. Marionette sits somewhere in the hazy zone between a library and a framework - it's really a collection of architectural components for large front-end applications that can be composed in lots of different ways. I use Marionette mainly for the core set of message-passing utilities, which make it easy to define interactions among different parts of big applications - pub-sub event channels, command execution, request-response patterns, etc. I've come to completely rely on these structures, and can't really imagine writing non-trivial applications without them anymore.

The only big kink I've encountered is in the Jasmine suite. Since almost all of the integration-level test cases mutate the state of the application (trigger routes, open/close views, etc.), I needed to completely burn down the app and re-start it from scratch at the beginning of each test to ensure a clean slate. The top-level Marionette `Application` has a `start` method that walks down the tree of modules and runs the initializers. As it exists now, though, `start` can only be called once during the lifecycle of the application, and does nothing if it's called again later on.

I was getting around this by defining independently-callable `init` methods for all of my modules and wiring them up to the regular Marionette start-up system:



But then manually calling all of the init methods in my Jasmine start-up routine to force-restart the application:



This is icky - I have to exactly recreate a specific start-up order that's automatically enforced in the application itself by `before:` and `after:` initialization events. And it introduces lots of opportunities for false-negatives - if you add a module, and forget to explicitly start it in the test suite, everything falls apart. 

Really, I wanted to just re-call `Neatline.start()` before every test. I realized tonight, though, that the application object can be tricked into restarting itself by (a) stopping all of the modules and (b) resetting the top-level `Callbacks` on the application:



Much cleaner. Assuming all state-bearing components are instantiated in the initializers, this has the desired effect of completely rebooting the application.

I'd imagine this is a pretty common issue - is there any philosophical reason for the prohibition against re-calling `Application.start()` more than once?
