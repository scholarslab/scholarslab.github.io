---
author: david-mcclure
date: 2013-10-07 10:45:05+00:00
layout: post
slug: experimental-typesetting-with-neatline-and-shakespeare
title: Experimental typesetting with Neatline and Shakespeare
categories:
- Research and Development
tags:
- neatline
- shakespeare
---

_[Cross-posted from [dclure.org](http://dclure.org/?p=3088)]_



## [Click here to view the exhibit](http://neatline.dclure.org/neatline/show/by-the-pricking-of-my-thumbs).





I've always been fascinated by the geometric structure of text - the fact that literature is encoded as physical, space-occupying symbols that can be described, measured, and manipulated just like any other two-dimensional shapes. There's something counter-intuitive about this. When I look at a letter or a word, I see particles of sound and meaning, transcendental cognitive forms, not things that could be straightforwardly described as a chunks of vector geometry. And there's definitely a truth to this - I do think that texts have a kind of extra-physical cognitive essence that's independent of their visual instantiations on pages or screens, and that it's usually this common denominator that’s most interesting when we talk about literature with other people. And yet, in the context of any individual reading, the physical structure of documents - the set of pragmatic decisions that go into the design, layout, and formatting of text on the page - can have subtle but significant effects on how a text _feels_, on the imaginative dreamscape that surrounds it in your mind when you think back on it days or weeks or years after the fact.

This is definitely true, for example, at the level of some-thing like font selection, which encodes a kind of "meaning metadata" about the text - where it comes from, who it's intended for, how serious it imagines itself to be, etc. But I think it also holds at the level of more incidental, pseudo-random aspects of typesetting. For example, how does the vertical line traced out by the right margin of a paragraph or stanza color the reader's affective reaction to the literary content? Does a jagged, unjustified border make the text feel more tumultuous and Dionysian? Would the same text, printed with a justified margin, become more emotionally controlled and orderly? I think of cases like Whitman's long lines, which often have to be prematurely broken at the right edge of the page, resulting in a kind of clumpy, disorganized visual gestalt. I doubt that Whitman intended this, in the strong sense of the word (although I don't know that he didn't), but it has a kind of symbolic affinity with the poetry itself - sprawling, organic, uncontainable. When I think of Whitman, the image that appears in my mind consists largely of this. I wonder what it would be like to read an "unbroken" _Leaves of Grass_, printed on paper wide enough to accommodate the lines? Would it become more metaphysical, detached, ironical? Or would it be just the same?

Anyway, this kind of speculation fascinates me. I've been thinking a lot recently about experimental modes of digital typesetting that would be completely impossible on the analog page - new ways of presenting text on screens to evoke certain feelings or model intuitions about the structure of language. As a quick experiment, I decided to use Neatline to try to capture a certain aspect of my experience of reading Shakespeare. I've always been interested in the notion of language as kind of progressive enveloping of words - they're printed side-by-side on the page as equals, but the meaning of a syntagm grows out of the ordering of the tokens. Each exists in the context of the last and casts meaning onto the next; each word is _contained_, in a sense, inside the sum of its predecessors. I was taken by this idea when I read Saussure and company in college, because it seemed to map onto my own experience of reading poetry - the sensation of scanning a line always felt more like a _descent_ than a left-to-right movement, a shift from the surface (the beginning) to the center (the end).

To play with this, I built a Neatline exhibit that typesets a single Shakespearean couplet in a kind of recursive, fractal, [Prezi](http://prezi.com/)-like layout in which each successive word is "physically" embedded inside of one of the letters of the previous word. Reading the couplet literally becomes a matter of magnification, zooming, _burrowing_ downwards towards the end of the syntagm. To scan the fragment, either pan and zoom the environment manually, as you would a regular, Google-like slippy map, or click on the words in the reference text at the bottom of the screen to automatically focus on individual slices of the text.
