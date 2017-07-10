---
author: wsg4w
comments: true
date: 2012-02-21 09:02:47+00:00
layout: post
link: http://scholarslab.org/research-and-development/teaching-coffeescript/
slug: teaching-coffeescript
title: Teaching CoffeeScript
wordpress_id: 3664
categories:
- Grad Student Research
- Research and Development
tags:
- CoffeeScript
- javascript
- praxis program
---

As the Prism project has progressed, one of the technologies we kept pushing off teaching was JavaScript. We knew this is one of the core languages that they would need to learn to actually work with the browser, but kept trying to determine the best way to actually introduce JavaScript in a way that would minimize bugs, and not discourage their development efforts. We had been working with the group as a whole introducing them to object oriented thinking with Ruby, but  recognized a huge context switch between writing in Ruby's (and Rails) [object oriented](http://en.wikipedia.org/wiki/Object-oriented_programming) programming style to JavaScript's [prototype-based](http://en.wikipedia.org/wiki/Prototype-based_programming) style.

One of the other issues we discussed was how to best teach "good" practices with JavaScript. The language constructs can get you in to a lot of hot water pretty quickly. You may have seen this, but a classic example of this is in the difference in the side Doug Crockford's _JavaScript: The Good Parts_ and David Flanagan's _JavaScript: The Definitive Guide_.

![](http://img.anongallery.org/img/2/0/javascript-the-good-parts-the-definitive-guide.jpg)

This is a bit of an absurd comparison, but it does highlight that there is a big discrepancy in what JavaScript is capable of and what it is actually good at. There are just some things that JavaScript implements in a weird way. A crazy example of this is something like the following:

[code lang="javascript"]

console.log(++[[]][+[]]+[+[]])

[/code]

If you guessed this expression evaluates to 10, you are correct.

There are a variety of other pain points that are common in JavaScript applications; case sensitivity, hard line breaks (they are interpreted as as line-ending semi-colons), extra commas ([IE has fits](http://www.enterprisedojo.com/2010/12/19/beware-the-trailing-comma-of-death/)), global scope creep (e.g. [hoisting](http://www.adequatelygood.com/2010/2/JavaScript-Scoping-and-Hoisting)), and issues with [binding](http://www.alistapart.com/articles/getoutbindingsituations) (e.g. a missing the this modifier). If you have developed much with JavaScript, you have most likely been bitten by several of these issues (hopefully not at the same time).

As we started planning the project out, we noticed that [@dhh](https://twitter.com/#!/dhh) added support for [CoffeeScript](http://coffeescript.org/) in the version of Rails (3.1+) we were targeting for the Praxis program. As part of the [Asset Pipeline](http://guides.rubyonrails.org/asset_pipeline.html), Rails will automatically convert CoffeeScript to JavaScript, allowing you to write in a format that is closer to Ruby (with some pesky Python whitespace) that compiles to "good" JavaScript. Quite honestly, I wasn't sure what to make of CoffeeScript when I first started looking at it. Unlike [SASS](http://sass-lang.com/) which immediately changed the way I write CSS, I couldn't imagine taking nearly a decade's worth of knowledge for developing JavaScript for this crazy scripting language that just compiles down to what I've been writing, and I wasn't alone with the other developers in the R&D group.

So what exactly was the turning point? Well, quite honestly after working with it a bit, I have to admit it has some nice features, but perhaps the biggest draw is the fact that it doesn't require a big context switch in different modes of development. The other big draw is that the JavaScript that is generated is a better quality ([uses the module pattern](http://www.adequatelygood.com/2010/3/JavaScript-Module-Pattern-In-Depth)), has [splats](http://coffeescript.org/#splats), [comprehensions](http://coffeescript.org/#loops), takes care of scoping, the fat arrow (=>) can evaluate the '[this](http://www.digital-web.com/articles/scope_in_javascript/)' keyword properly for function binding, and the [existential operator](http://coffeescript.org/#operators). There has been a lot of hype behind this, and Sam Stephenson (37Signals) made a great argument for using the language at the Future of Web Apps in London (2011).



[Better JS with CoffeeScript - Sam Stephenson (37signals)](http://vimeo.com/35258313) from [Louise Morgan](http://vimeo.com/user10059996) on [Vimeo](http://vimeo.com).

Eric has walked the group through an [introduction to JavaScript and CoffeeScript](http://praxis.scholarslab.org/topics/intro-to-javascript/), and they seemed receptive to the idea of a language that compiles to JavaScript. So far, nothing has been written for the project in CoffeeScript, but I'm cautiously optimistic that the JavaScript that will drive most of the interactions will be a bit less buggy (and faster to develop) than it would had we targeted JavaScript for this project.

If you need even more incentive to take a look at CoffeeScript, be sure to take a look at Gary Bernhardt's lightening talk from [CodeMash](http://codemash.org/) 2012 entitled [Wat](https://www.destroyallsoftware.com/talks/wat).
