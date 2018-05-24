---
author: david-mcclure
date: 2013-08-14 13:29:07+00:00
layout: post
slug: parsing-bc-dates-with-javascript
title: Parsing BC dates with JavaScript
categories:
- Research and Development
---

_[Cross-posted from [dclure.org](http://dclure.org/logs/parsing-bc-dates-with-javascript/)]_

Last semester, while giving a workshop about Neatline at Beloit College in Wisconsin, [Matthew Taylor](https://twitter.com/mptaylor), a professor in the Classics department, noticed a strange bug - Neatline was ignoring negative years, and parsing BC dates as AD dates. So, if you entered "-1000" for the "Start Date" field on a Neatline record, the timeline would display a dot at 1000 AD. I was surprised by this because Neatline doesn't actually do any of its own date parsing - the code relies on the built-in `Date` object in JavaScript, which is implemented natively in the browser. Under the hood, when Neatline needs to work with a date, it just spins up a new `Date` object, passing in the raw string value entered into the record form: 



Sure enough, though, this doesn't work - `Date` just ignores the negative sign and spits back an AD date. And things get even funkier when you drift within 100 years of the year 0. For example, the year 80 BC parses to _1980_ AD, bizarrely enough:



Obviously, this is a big problem if you need to work with ancient dates. At first, I was worried that this would be rather difficult to fix - if we really were hitting up against bugs in the native implementation of the date parsing, it seemed likely that Neatline would have to get into the tricky business of manually picking apart the strings and putting together the date objects by hand. It's always feels icky to redo functionality that's nominally built into the programming environment. But I didn't see any other option - the code was unambiguously broken as it stood, and in a really dramatic way for people working with ancient material.

So, grumbling at JavaScript, I started to sketch in the outlines of a bespoke date parser. Soon after starting, though, I was idly fiddling around with the `Date` object in the Chrome JavaScript terminal when stumbled across an unexpected (and sort of inexplicable) solution to the problem. In reading through the [documentation for the `Date` object over at MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date), I noticed that the constructor actually takes three different configuration of parameters. If you pass in a single integer, it treats it as a Unix timestamp; if you pass a single string, it treats it as a plain-text date string and tries to parse it into a machine-readable date (this was the process that appeared to be broken). But you can also pass three separate integers - a year, a month, and a day. Out of curiosity, I plugged in a negative integer for the year, and arbitrary values for the month and day: 



Magically, this works. A promising start, but not a drop-in solution for the problem - in order to use this, Neatline would still have to manually extract each of the date parts from the plain-text date strings entered in the record forms (or break the dates into three parts at the level of the user interface and data model, which seemed like overkill). Then, though, I tried something else - working with the well-formed, BC date object produced with the year/month/day integer values, I tried casting it back to ISO8601 format with the `toISOString` method. This produced a date string with a negative date and...



...**two leading zeros before the four-digit representation of the year**. I had never seen this before. I immediately tried reversing the process and plugging the outputted ISO string back into the `Date` constructor:



And, sure enough, this works. And it turns out that it also fixes the incorrect parsing of two-digit years:



I am deeply, profoundly perplexed by this. The [ISO8601 specification](http://dotat.at/tmp/ISO_8601-2004_E.pdf) makes cursory note of an "expanded" representation for the year part of the date, but doesn't got into specifics about how or why it should be used. Either way, though, it works in all major browsers. Mysterious stuff.
