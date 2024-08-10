---
author: jeremy-boggs
date: 2014-06-09 10:00:37+00:00
layout: post
slug: check-out-copyipsum
title: Check Out Copyipsum
category: essay
tags:
- research and development
---

Of the bazillion lorem ipsum generators out there, the one I use most often for day to day work is [Loripsum](http://loripsum.net). It has a few great features, like choosing length of paragraph, adding other HTML elements, and only getting plain text. You can also get all this stuff through a simple API.

Friday morning, while bouncing between working on some redesign ideas for this site and messing with the [Marvel API](http://developer.marvel.com/), I decided that I really wanted to be able to get some lorem ipsum text from the Loripsum.net API using a command line tool. Thankfully, [Eric](/people/eric-rochester) was around to hold my hand as we put together [Copyipsum](http://github.com/clioweb/copyipsum).

To get going with Copyipsum, you can install it using `pip`:

```
pip install copyipsum
```

You can also clone the public repository:

```
git clone git://github.com/clioweb/copyipsum.git
```

Or download the tarball:

```
curl -OL https://github.com/clioweb/copyipsum/tarball/master
```

Once you have a copy, you can run the setup yourself. Move into the copyipsum directory, then do:

```
python setup.py install
```

Once you have it installed, you can now use the `copyipsum` command to save some lorem ipsum to your clipboard and use wherever you want. All the options available on the Loremipsum.net API are available as arguments to the `copyipsum` command, and are documented in the project's [README](https://github.com/clioweb/copyipsum/blob/master/README.md), but here are a few examples to illstrate some of the things you can do:

**Get 10 Paragraphs**

```
copyipsum -p 10
```


**Get 10 Paragraphs with Headings**

```
copyipsum -H -p 10
```

**Get 10 Paragraphs with Headings and decorators like bold, italic, and mark**

```
copyipsum -d -H -p 10
```

**Get 10 Long Paragraphs**

```
copyipsum -p 10 -s long
```

As usual, bug reports and feature requests are welcome! Feel free to add though through the project's [issue tracker](http://github.com/clioweb/copyipsum/issues).
