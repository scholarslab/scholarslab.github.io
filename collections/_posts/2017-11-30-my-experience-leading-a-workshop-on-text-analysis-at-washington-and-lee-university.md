---
author: sarah-mceleney
date: 2017-11-30 10:15:22+00:00
layout: post
slug: my-experience-leading-a-workshop-on-text-analysis-at-washington-and-lee-university
title: My Experience Leading a Workshop on Text Analysis at Washington and Lee University
category: essay
tags:
- wlu-collab
- pedagogy
crosspost:
  - title: the WLUDH blog
    url: http://digitalhumanities.wlu.edu/blog/2017/11/30/my-experience-leading-a-workshop-on-text-analysis-at-washington-and-lee-university/
---

_[Sarah went to Washington and Lee University to give a workshop in Prof. Mackenzie Brooks’s DH 102: Data in the Humanities course through a Mellon-funded collaboration with WLUDH. More information about this initiative can be found [here](https://github.com/wludh/research-one-collab/blob/master/wlu-faculty.md)]_

As a graduate student participating in the University of Virginia and Washington & Lee University digital humanities collaboration, during the fall 2017 I led a guest workshop on text analysis in Mackenzie Brooks’ course DH 102: Data in the Humanities.  This workshop was an exploration of approaches to text analysis in the digital humanities, which concurrently introduced students to basic programming concepts.  For humanities students and scholars, the question of how to begin to conduct text analysis can be tricky because platforms do exist that allow one to perform basic text analyses without any programming knowledge.  However, the ability to write one’s own scripts for text analysis purposes allows for the fine-tuning and tailoring of one’s work in highly-individualized ways that goes beyond the capabilities of popular tools like Voyant. Additionally, the existence of a multitude of Python libraries allows for numerous approaches for understanding the subtleties of a given text of a corpus of them.  As the possibilities and directions for text analysis that Python enables are countless, the goal of this workshop was to introduce students to basic programming concepts in Python through the completion of simple text analysis tasks.

At the start of workshop, we discussed how humanities scholars have used text analysis techniques to create some groundbreaking research, such as Matthew Jockers’ research into the language of bestselling novels, as well as the different ways that text analysis can be approached, briefly looking the online text analysis tool, Voyant.

For this workshop students downloaded Python3 and used the simple text editor that is automatically installed with it, IDLE.  This way we didn't have to spend time downloading multiple programs.  While IDLE is rather barebones, its functionality as a text editor is fine for learning the basics of Python, especially if one doesn’t want to install other software.  From here, by using a script provided to the students, we explored the concepts of variables, lists, functions, loops, and conditional statements, and their syntax in Python.  Using these concepts, we were able to track the frequency of chosen words throughout different sections of a story read by the script.

The workshop then delved into a discussion of libraries and how work can be enhanced and made to better suit one’s needs by using specific Python libraries.  As the focus of the workshop was on text analysis, the Python library that we looked at was NLTK (Natural Language Toolkit), which has a vast variety of functions that aid in natural language processing work, such as word_tokenize() and sent_tokenize(), which break up a text into individual parts, as words or sentences, respectively.  The NLTK function FreqDist() simplifies the task of getting a count of all the individual words in a text, which we had done with Python alone in the prior script before working with NLTK.  The inclusion of NLTK in the workshop was meant to briefly show students how important and useful libraries can be when working with Python.

While only so much can be covered over the course of a single workshop, the premise of the workshop was to show students that you can do some very interesting things with text analysis with basic Python knowledge, and to dive into Python programming headfirst while learning about general concepts fundamental to programming.  As digital humanities methods for humanities research are becoming more and more common, working with Python’s capability for natural language processing is a useful tool for humanists, and in an introductory class, the goal of my workshop was to spark students’ interest and curiosity and provide a stepping stone for learning more, and at the end of the workshop, further resources for students to turn to in learning more about Python and text analysis were discussed.
