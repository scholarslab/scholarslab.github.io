---
author: chris-forster
date: 2008-09-09 00:03:13+00:00
layout: post
slug: how-to-measure-text
title: How to Measure Text?
categories:
- Digital Humanities
- Visualization and Data Mining
tags:
- Digital Humanities
---

<blockquote>...the words we join have been joined before, and continue to be joined daily. So writing is largely quotation, quotation newly energized, as a cyclotron augments the energies of common particles circulating.

- Hugh Kenner, _The Pound Era_</blockquote>


This month marks the beginning of the complicated process of starting up the [Large Hadron Collider](http://lhc.web.cern.ch/lhc/), the world's largest particle accelerator (Kenner would haved called it a "cyclotron"), buried beneath the Franco-Swiss border. Near the top of the LHC's agenda is having a peek into the fabric of space-time to see about the Higgs-Boson, the theorized source of mass.

But to do so they'll need data--lots of data. According to [CERN](http://gridcafe.web.cern.ch/gridcafe/animations/LHCdata/LHCdata.html), the event summary data extracted from the collider's sensors will produce around 10 terabytes daily. That is something like, to use the cliché, the equivalent of a Library of Congress's worth of data every day (the raw data is much much greater).


The physics involved is obviously too complicated for a mere humanities major to discuss in any intelligent way. The interesting thing is the disparity between the sheer amount of data with which the LHC deals, as compared with the scale of the (textual) data of the humanities. How can the LHC, in a single day, focussed on a highly specific set of questions, produce as much information as the literary output of humans represented by the Library of Congress? Why, in short, is the textual data of the humanities so much smaller than the data produced by the LHC?

It is, of course, in some ways a silly, completely naive question. But the differences, in size alone, of these two datasets are nevertheless instructive and worthy of consideration. We might oversimplify the matter, and say that the LHC's data, collected from its sensors and culled by its arrays of servers, is fundamentally information-poor data. The challenge faced by the LHC project is sorting through the complexities of the data to find the relevant information that will allow physicists to answer the questions they have. Language, by contrast, is information rich--so rich that our challenge is not how to separate the wheat from the chaff, but how to deal with the sheer flood of information compressed in text.

It is this fact that explains the disparity in size between the LHC's data and the textual record of the humanities. The textual data of the humanities comes "preorganized" by language. While our digital texts encode only strings, language fills texts with syntactic and semantic information of which our systems of markup are completely oblivious.

Martin Wattenberg at IBM's Watson Research Center puts it well in his [interview with _Wired_](http://www.wired.com/science/discoveries/magazine/16-07/pb_visualizing) when he describes language's ability to compress information:


<blockquote>Language is one of the best data-compression mechanisms we have. The information contained in literature or email, encodes our identity as human beings. The entire literary canon may be smaller than what comes out of particle accelerators or models of the human brain, but the meaning coded into words can't be measured in bytes. It's deeply compressed. Twelve words from Voltaire can hold a lifetime of experience.</blockquote>


What happens if we take this understanding of language seriously? How would it change the way we deal with textual data?

Right now we have plenty of digital texts available, but in order to get the information out of the textual data we have to _read_ it. Right now, only by reading do we attend to the specifically linguistic nature of textual data. Existing text analysis technologies and techniques remain largely quantitative, relying on machine learning techniques to classify texts that are represented by vectors of frequency counts. Key sources of linguistic information, however, like syntax, remain fundamentally unexploited. We are still, in effect, discarding some of the most basic sources of textual information--such as the _order_ in which the words occur (seriously).

One avenue, though admittedly crude, is to use a technique like part-of-speech tagging to supplement raw text with part-of-speech tags which provide a fuller, more information-rich digital representation of the linguistic data. By analysing such part-of-speech tags, taking them in pairs, or looking at where in a sentence they occur, we get some sense of how a writer uses language. We step, in short, over the threshold from a purely quantitative view of language use (e.g. how many times does "of" occur per thousand words? what are the most frequently occurring terms?), to a mode of analysis that is able to extract the sort of information that we, humans, are able to when we read. Such techniques are admittedly crude; but they begin to recapture the fundamentally linguistic nature of textual data which is too easily discarded in representations of natural languages. To truly capitalize on the information contained in textual data requires finding more ways to digitally attend to the specifically linguistic nature of textual data.

We are trying to read the finely wrought braille of language through the burlap sack that current digital tools offer. With the combination of natural language processing tools (such as POS taggers, parsers, etc) and ever-more sophisticated machine learning techniques, we may be able to get closer. Humanities data is not, necessarily, smaller--it is just more compressed.
