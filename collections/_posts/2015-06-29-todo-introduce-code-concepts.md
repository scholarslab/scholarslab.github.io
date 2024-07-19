---
author: wayne-graham
date: 2015-06-29 10:59:37+00:00
layout: post
slug: todo-introduce-code-concepts
title: //TODO - Introduce Code Concepts
category: blog
tags:
- Research and Development
- code
---

One of the most fun (and challenging) things I get to do is to introduce people to programming concepts. I've done this in a lot of different environments ranging from intensive week-long courses with [Humanities Intensive Learning and Training](http://www.dhtraining.org/hilt2015/), to year-long apprenticeships our [Praxis Program](http://praxis.scholarslab.org), to day-long intros with events like [Rails Girls](http://railsgirls.com/) and [Rails Bridge](http://www.railsbridge.org/). All of these have different trade offs in getting people introduced to writing for computers (software development). But one of the best ways I've found to work with someone who is interested in learning about how to write software is [pair programming](https://en.wikipedia.org/wiki/Pair_programming), and it's something that is done in the Scholars' Lab a lot (though I don't get to do as much as I would like).

If you are unfamiliar with pair programming, basically it takes two people sitting side-by-side (there are remote versions of this too) where one person types (the driver), and the other "tells" the driver what to type (the navigator). I have found this a hugely effective way to get people to start hearing how to approach a software problem, particularly how to break up a particular problem in to smaller problems. This is a skill developers learn over time, but is perhaps one of the most opaque to novice developers. Some of this has to do with the abstract way in which software languages work, the level of syntax knowledge a developer has, and the fact that experienced developers start skipping steps along the way based on their experience. Novice developer might look at a problem and begin to develop a solution, they often get locked in to their thinking that this is the only way. When this path doesn't pan out as expected (which is usually the case), this can lead to a lot of frustration, and "Stack Overflow" code. As a seasoned developer, I'll usually see several different paths through a problem, and when I hit that first roadblock, alter my approach.

Last week I joked with one of our [LAMI fellows](http://www.theleadershipalliance.org/Programs/SummerResearch/MellonInitiative/tabid/371/Default.aspx) on our IRC channel that she should write a plugin for one of our bots so we could generate memes with the [memegen.link API](http://memegen.link/). She responded back that she'd actually love to learn how, and in the spirit of [the Ten Thousand](https://xkcd.com/1053/), we met the next day to work this out. One of the bots in our IRC is [HUBOT](https://hubot.github.com/), which uses [CoffeeScript](http://coffeescript.org/) to interact with a [node.js](https://nodejs.org/) server. While I typically write in JavaScript for these purposes, I think CoffeeScript has some real advantages for a novice developer (particularly with closures and some of the funkier parts of JavaScript).

The way I broke this down was to say we need a few things for this to do. First, we want to be able to see which meme templates can used, and a method to get a URL back with the meme. Using the conventions of HUBOT, I suggested an interface like this

```
user> hubot meme list
hubot> afraid - Afraid to Ask
hubot>...
```

and

```
user> hubot meme me afraid "top message" "bottom message"
hubot> afraid - Afraid to Ask
hubot>...
```

The meme list seemed to be easiest so we tackled that first. We looked at [the list of templates](http://memegen.link/templates/) and needed to simplify. Here I just wanted the keys and a label, so we built our own CoffeeScript object with this pattern:

```
memes =
  "afraid": "'Afraid to Ask'",
  "blb": "Bad Luck Brian",
  "buzz": "X, X Everywhere",
  ...
```

With the list of memes, we just needed a way to get this to the user. Using the template that all hubot-scripts use, we added:

```
module.exports = (robot) ->robot.respond /meme list/i, (msg) ->
    for code, meme of memes
      msg.send "#{code} - #{meme}"
```

When the bot hears "hubot meme list", it iterates over each line of the memes and prints out the code (on the left) and the meme (on the right).

After we got this working we shipped the feature. To actually get the input to generate a meme, I knew we were going to have to do something I try not to do too much with novice developers...regular expressions. There's a joke that goes, "if you have a problem that you have to solve with regular expressions, you now have two problems." And the one we need to parse the text input is particularly obscure. So much so that I had to pair with another developer (thanks Eric) to get it correct. I won't go in to detail, but this is the line that we came up with to parse the pattern "hubot meme me afraid "top message" "bottom message"'

```
robot.respond /meme me (\w+) (\"[^"]+\") (\"[^"]+\")/i, (msg) ->
```

As we were testing this out, former Scholars' Lab fellow [Alex Gil](https://twitter.com/elotroalex) came in to ask some questions about Neatline and generated this

https://twitter.com/elotroalex/status/614147822116581380

After we got everything working, I took the code @lilybeth and I wrote and abstracted it in a way that could be easily used by others, publishing it on [npm](https://www.npmjs.com/package/hubot-memes), opening the source code on [GitHub](https://github.com/waynegraham/hubot-memes), and writing automation routines in Travis CI to automagically update the npm site when I push a new release to Github (this last part [is insanely easy with Travis](https://github.com/waynegraham/hubot-memes/blob/master/.travis.yml#L6-L13)).

There are many things we can do to make this toy better (like better error handling text input), but for now this is an example of how a thing went from a "I'd like to know how to do this" to a published thing being used by more than just us (according to the download count). And, if you'd like to run your own hubot (or waynebot as we affectionately call it), I [shared the code](https://github.com/waynegraham/waynebot-openshift) to run this on OpenShift with the RedisCloud cartridge addon which is based on code by [Katie Miller](https://github.com/codemiller/hubot-openshift).
