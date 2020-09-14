---
author: 
- brandon-walsh
- rebecca-draughon
date: 2020-09-10 15:12:00
layout: post
slug: a-humanists-cookbook-for-natural-language-processing-in-python
title: A Humanist's Cookbook For Natural Language Processing In Python
categories:
- Pedagogy
- Digital Humanities
tags:
- Digital Humanities
---

We're pleased to share the initial release of an open educational resource we worked on over the summer - _A Humanist's Cookbook for Natural Language Processing in Python_. 

The project began with the goal of keeping Brandon from reinventing the wheel when working on natural language processing projects. By collecting together common scripts and approaches for personal use, it served as a common reference point that would be easier to consult than searching back through older repositories on GitHub when presented with new iterations of old problems. Eventually and once Rebecca came onboard the project, we started documenting the methods with a more generalized audience in mind.

The project is presented as a series of notebooks, a series of Python 3 recipes for common problems and issues associated with preparing data for text analysis and natural language processing. The target audience is students—intermediate programmers who have begun to learn their way around Python but who need a little help pulling the pieces together to get something done. The project has two main goals:

* Present code blocks for common problems.
* Contextualize those blocks with humanists in mind.

The text, at this point at least, makes no real attempt at coverage. Nor is there a real sequence through which someone should be expected to work. It simply gather scripts relevant to our work as we came to them in a way that is presented for a more generalized audience. There are a number of ways to approach any NLP problem, and any tweak can have big ramifications for the results. Hopefully this text will help intermediate programmers get going and give them the knowledge to have a little better understanding of what they're working with.

The initial set of notebooks covers the following topics:

### First Steps

* [Set up](set_up.ipynb)
* [Working with the file structure](file_structure.ipynb)

### Getting Data
* [Working with plain text files](plain_text.ipynb)
* [Getting data from websites](scraping.ipynb) 
* [Working with TEI](tei.ipynb)

### Preparing Data

* [Stopwords](stopwords.ipynb)
* [Dividing your text](dividing.ipynb)
* [Preparing a corpus pipeline](corpus.ipynb)

We'll periodically add news things as we get to them, and we already have plans for at least one future section that we couldn't get to yet. Issues found with the text can be logged on the issue tracker for our [GitHub repository](https://github.com/walshbr/humanists-nlp-cookbook/issues/new).