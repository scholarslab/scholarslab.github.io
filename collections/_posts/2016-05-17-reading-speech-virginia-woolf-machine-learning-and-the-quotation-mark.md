---
author: brandon-walsh
date: 2016-05-17 11:03:28+00:00
layout: post
slug: reading-speech-virginia-woolf-machine-learning-and-the-quotation-mark
title: 'Reading Speech: Virginia Woolf, Machine Learning, and the Quotation Mark'
category: essay
tags:
- literature
- grad-student-research
crosspost:
  - title: my personal blog
    url: http://walshbr.com/blog/reading-speech/
  - title: the WLUDH blog
    url: https://digitalhumanities.wlu.edu/blog/2016/05/17/reading-speech-virginia-woolf-machine-learning-and-the-quotation-mark/
---

_What follows is a slightly more fleshed out version of what I presented this past week at [HASTAC 2016](https://hastac2016.org) (complete with my memory-inflected transcript of the Q&A). I gave a bit more context for the project at the event than I do here, so it might be helpful to read my past two posts on the project [here](http://walshbr.com/blog/woolf-huskey/) and [here](http://walshbr.com/blog/woolf-and-the-quotation-mark/) before going forward. This talk continues that conversation.]_

This year in the [Scholar’s Lab](https://www.scholarslab.org) I have been working with Eric on a machine learning project that studies speech in Virginia Woolf’s fiction. I have written elsewhere about the [background for the project](https://bmw9t.github.io/blog/2015/03/23/woolf-huskey/) and [initial thoughts towards its implications](http://bmw9t.github.io/blog/2015/09/10/woolf-and-the-quotation-mark/). For the purposes of this blog post, I will just present a single example to provide context. Consider the famous first line of _Mrs. Dalloway_:


> Mrs Dalloway said, “I will buy the flowers myself.”


Nothing to remark on here, except for the fact that this is not how the sentence actually comes down to us. I have modified it from the original:


> Mrs Dalloway said she would buy the flowers herself.


My project concerns moments like these, where Woolf implies the presence of speech without marking it as such with punctuation. I have been working with Eric to lift such moments to the surface using computational methods so that I can study them more closely.

I came to the project by first tagging such moments myself as I read through the text, but I quickly found myself approaching upwards of a hundred instances in a single novel-far too many for me to keep track of in any systematic way. What’s more, the practice made me aware of just how subjective my interpretation could be. Some moments, like this one, parse fairly well as speech. Others complicate distinctions between speech, narrative, and thought and are more difficult to identify. I became interested in the features of such moments. What is it about speech in a text that helps us to recognize it as such, if not for the quotation marks themselves? What could we learn about sound in a text from the ways in which it structures such sound moments?

These interests led me towards a particular kind of machine learning, supervised classification, as an alternate means of discovering similar moments. For those unfamiliar with the concept, an analogy might be helpful. As I am writing this post on a flight to HASTAC and just finished watching a romantic comedy, these are the tools that I will work with. Think about the genre of the romantic comedy. I only know what this genre is by virtue of having seen my fair share of them over the course of my life. Over time I picked up a sense of the features associated with these films: a serendipitous meeting leads to infatuation, things often seem resolved before they really are, and the films often focus on romantic entanglements more than any other details. You might have other features in mind, and not all romantic comedies will conform to this list. That’s fine: no one's assumptions about genre hold all of the time. But we can reasonably say that, the more romantic comedies I watch, the better my sense of what a romantic comedy is. My chances of being able to watch a movie and successfully identify it as conforming to this genre will improve with further viewing. Over time, I might also be able to develop a sense of how little or how much a film departs from these conventions.

Supervised classification works on a similar principle. By using the proper tools, we can feed a computer program examples of something in order to have it later identify similar objects. For this project, this process means training the computer to recognize and read for speech by giving it examples to work from. By providing examples of speech occurring within quotation marks, we can teach the program when quotation marks are likely to occur. By giving it examples of what I am calling ‘implied speech,’ it can learn how to identify those as well.

For this machine learning project, I analyzed Woolf texts downloaded from [Project Gutenberg](https://www.gutenberg.org/wiki/Main_Page). Eric and I put together scripts in Python 3 that used a package known as the [Natural Language Toolkit](https://nltk.org/)] for classifying. All of this work can be found at the project’s [GitHub repository](http://https;//www.github.com/bmw9t/woolf).

The project is still ongoing, and we are still working out some difficulties in our Python scripts. But I find the complications of the process to be compelling in their own right. For one, when working in this way we have to tell the computer what features we want it to pay attention to: a computer does not intuitively know how to make sense of the examples that we want to train it on. In the example of romantic comedies, I might say something along the lines of "while watching these films, watch out for the scenes and dialogue that use the word 'love.'" We break down the larger genre into concrete features that can be pulled out so that the program knows what to watch out for.

To return to Woolf, punctuation marks are an obvious feature of interest: the author suggests that we have shifted into the realm of speech by inserting these grammatical markings. Find a quotation mark-you are likely to be looking at speech. But I am interested in just those moments where we lose those marks, so it helps to develop a sense of how they might work. We can then begin to extrapolate those same features to places where the punctuation marks might be missing. We have developed two models for understanding speech in this way: an external and an internal model. To illustrate, I have taken a single sentence and bolded what the model takes to be meaningful features according to each model. Each represents a different way of thinking about how we recognize something as speech.

External Model for Speech:


> "I love walking in London," **said Mrs. Dalloway**.  "Really it’s better than walking in the country."


The external model was our initial attempt to model speech. In it, we take an interest in the narrative context around quotation marks. In any text, we can say that there exist a certain range of keywords that signal a shift into speech: said, recalled, exclaimed, shouted, whispered, etc. Words like these help the narrative attribute speech to a character and are good indicators that speech is taking place. Given a list of words like this, we could reasonably build a sense of the locations around which speech is likely to be happening. So when training the program on this model, we had the classifier first identify locations of quotation marks. Around each quotation mark, the program took note of the diction and parts of speech that occurred within a given distance from the marking. We build up a sense of the context around speech.

Internal Model for Speech:


> "**I love walking in London**," said Mrs. Dalloway. "**Really it’s better than walking in the country**."


The second model we have been working with works in an inverse direction: instead of taking an interest in the surrounding context of speech, an internal model assumes that there are meaningful characteristics within the quotation itself. In this example, we might notice that the shift to the first-person 'I' is a notable feature in a text that is otherwise largely written in the third person. This word suggests a shift in register. Each time this model encounters a quotation mark it continues until it finds a second quotation mark. The model then records the diction and parts of speech inside the pair of markings.

Each model suggests a distinct but related understanding for how sound works in the text. When I set out on this project, I had aimed to use the scripts to give me quantifiable evidence for moments of implied speech in Woolf’s work. The final step in this process, after all, is to actually use these models to identify speech: looking at texts they haven't seen before, the scripts insert a caret marker every time they believe that a quotation mark should occur. But it quickly became apparent that the construction of the algorithms to describe such moments would be at least as interesting as any results that the project could produce. In the course of constructing them, I have had to think about the relationships among sound, text, and narrative in new ways.

The algorithms are each interpretative in the sense that they reflect my own assumptions about my object of study. The models also reflect assumptions about the process of reading, how it takes place, and about how a reader converts graphic markers into representations of sound. In this sense, the process of preparing for and executing text analysis reflects a certain phenomenology of reading as much as it does a methodology of digital study. The scripting itself is an object of inquiry in its own right and reflects my own interpretation of what speech can be. These assumptions are worked and reworked as I craft algorithms and python scripts, all of which are as shot through with humanistic inquiry and interpretive assumptions as any close readings.

For me, such revelations are the real reasons for pursuing digital study: attempting to describe complex humanities concepts computationally helps me to rethink basic assumptions about them that I had taken for granted. In the end, the pursuit of an algorithm to describe textual speech is nothing more or less than the pursuit of deeper and enriched theories of text and speech themselves.

**Postscript**

I managed to take note of the questions I got when I presented this work at HASTAC, so what follows are paraphrases of my memory of them as well as some brief remarks that roughly reflect what I said in the moment. There may have been one other that I cannot quite recall, but alas such is the fallibility of the human condition.

Q: You distinguish between speech and implied speech, but do you account at all for the other types of speech in Woolf’s novels? What about speech that is remembered speech that happened in earlier timelines not reflected in the present tense of the narrative's events?

A: I definitely encountered this during my first pass at tagging speech and implied speech in the text by hand. Instead of binaries like quoted speech/implied speech, I found myself wanting to mark for a range of speech types: present, actual; remembered, might not have happened; remembered incorrectly; remembered, implied; etc. I decided that a binary was more feasible for the machine learning problems that I was interested in, but the whole process just reinforced how subjective any reading process is: another reader might mark things differently. If these processes shape the construction of the theories that inform the project, then they necessarily also affect the algorithms themselves as well as the results they can produce. And it quickly becomes apparent that these decisions reflect a kind of phenomenology of reading as much as anything: they illlustrate my understanding of how a complicated set of markers and linguistic phenomenon contribute to our understanding that a passage is speech or not.

Q: Did you encounter any variations in the particular markings that Woolf was using to punctuate speech? Single quotes, etc., and how did you account for them?

A: Yes - the version of _Orlando_ that I am working with used single quotes to notate speech. So I was forced to account for such edge cases. But the question points at two larger issues: one authorial and one bibliographical. As I worked on Woolf I was drawn to the idea of being able to run such a script against a wider corpus. Since the project seemed to impinging on how we also understand psychologized speech, it would be fascinating to be able to search for implied speech in other authors. But, if you are familiar with, say, Joyce, you might remember that he hated quotation marks and used dashes to denote speech. The question is how much can you account for such edge cases, and, if not, the study becomes only one of a single author’s idiosyncrasies (which still has value). But from there the question spirals outwards. At least one of my models (the internal one) relies on quotation marks themselves as boundary markers. The model assumes that quotation marks will come in pairs, and this is not always the case. Sometimes authors, intentionally or accidentally, omit a closing quotation mark. I had to massage the data in at least half a dozen places where there was no quotation mark in the text and where its lack was causing my program to fail entirely. As textual criticism has taught us, punctuation marks are the single most likely things to be modified over time during the process of textual transmission by scribes, typesetters, editors, and authors. So in that sense, I am not doing a study of Woolf’s punctuation so much as a study of Woolf’s punctuation in these particular versions of the texts. One can imagine an exhaustive study that works on all versions of all Woolf’s texts as a study that might approach some semblance of a correct and thorough reading. For this project, however, I elected to take the lesser of two evils that would still allow me to work through the material. I worked with the texts that I had. I take all of this as proof that you have to know your corpus and your own shortcomings in order to responsibly work on the materials - such knowledge helps you to validate your responses, question your results, and reframe your approaches.

Q: You talked a lot about text approaching sound, but what about the other way around - how do things like implied speech get reflected in audiobooks, for example? Is there anything in recordings of Woolf that imply a kind of punctuation that you can hear?

A: I wrote about this extensively in my dissertation, but for here I will just say that I think the textual phenomenon the questioner is referencing occurs on a continuum. Some graphic markings, like pictures, shapes, punctuation marks, do not clearly translate to sound. And the reverse is true: the sounded quality of a recording can only ever be remediated by a print text. There are no perfect analogues between different media forms. Audiobook performers might attempt to convey things like punctuation or implied speech (in the audiobook of *Ulysses*, for example, Jim Norton throws his voice and lowers his volume to suggest free indirect discourse). In the end, I think such moments are playing with an idea of what my dissertation calls audiotextuality, the idea that all texts recordings of texts, to varying degrees, contain both sound and print elements. The two spheres may work in harmony or against each other as a kind of productive friction. The idea is a slippery one, but I think it speaks to moments like the implied punctuation mark that come through in a particularly powerful audiobook recording.
