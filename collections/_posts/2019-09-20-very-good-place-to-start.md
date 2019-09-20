---
author: Janet-Dunkelbarger
date: 2019-09-20
layout: post
slug: very-good-place-to-start
title: "Julie Andrews on Coding"
categories:
- Digital Humanities
- Grad Student Research
tags:
- Digital Humanities
---
The last few weeks we (the 2019-20 Praxis Fellows) have started learning to code. Our first assignment (as Connor already mentioned [https://scholarslab.lib.virginia.edu/blog/unlearn-what-you-have-learned/]) was to write code that turned a word into Pig Latin. I’m sure it was a technically-simple exercise, but as I (we) have learned, coding is challenging and is like learning a new language. Not even “like” learning a new language -- it is learning a new language. We have to learn how to configure various elements (variables, functions, arguments, etc.) to work together in a series, using the appropriate “punctuation,” to convey information and produce a desired outcome. Any missing or misplaced ( ) or “ ” or [ ] throws off the entire process. It is like writing a good sentence or crafting a good essay. If you don’t follow the grammatical and syntaxial rules, you don’t get your point across to the reader. 

Reflecting on the acquisition of this new language, I am reminded of the last time I learned a new language. Also at UVa, I took the Summer Language Institute’s intensive German course before entering the PhD program here. As a graduate student in Art History, we have certain foreign language requirements. It’s considered necessary that we know how to at least read multiple languages to do effective research. Although still in the early stages of the Praxis Program, I already recognize that digital or technical languages (like Python) are also important to our development as scholars because they ultimately teach you how to gain access to information, process that information, and disseminate it to others. 

However regimented aspects of coding need to be, there is flexibility and creativity in how to approach solving a problem and writing the code to do it. For example, when we (and I say “we” because this was a collaborative effort with Connor and Shane) started thinking about how to transform words into Pig Latin using code, we started at the end to come up with a linear equation (hello 8th grade algebra) that would get us there. Pig Latin, for those who don’t know, is a language produced by taking the first letter of a word and putting it at the end of the word, and then adding “-ay.” So, COLLABORATION would be OLLABORATION-C-AY: OLLABORATIONCAY. 

Having just learned about ‘ranges’, I wrote (on paper) the equation I thought would produce a word in Pig Latin. If I set the variable a to equal the word I wanted transformed, and set the variable b to be the suffix -ay, then my formula would be: a[1: ] + a[0] + b. Python3 needs a command or call, however, to actually put all those elements together and spit out a word, so the final equation was: print(a[1: ] + a[0] + b).

But this wasn’t enough for our Code Lab overlord, Shane. He wanted us to use an input function. This was a truly baffling monkey wrench to me. I thought I had already cracked the code. At the time, it felt like an unnecessary step to add this input function. I was especially confused why the input function was better than my initial solution because, to me, either you have to change the value or meaning of a each time, or you have to answer the input question (which itself defines a variable) each time. Each one requires a step of definition. Connor was calmer, braver, and more confident than I, however, so he led the charge to write the code using the input function. 

To gain some clarity, instead of a, we chose orgword as our variable. So: orgword=input(“What word do you want to put into Pig Latin?”). We still needed a variable b to equal the suffix “ay” and the above equation (a[1: ] + a[0] + b) was still valid. Part of my initial resistance to the input function was because I found it difficult to understand that when the input function was run, I had to provide the answer to the question, which then became the meaning or value of a variable. What I understand now is that the input function is better (more efficient?) because you can run the code continuously without having to change the value of the a variable within the code block. So, after much discussion, we figured it out and had a blast putting all sorts of words into Pig Latin. It felt like quite a ICTORYVAY.

The point of this recollection of our first coding adventure is to emphasize that learning to code has already taught me how to think differently. It’s taught me to open my mind and loosen up how I think about and process information. By following the computer’s or Python3’s linguistic rules, I have learned how to put information together in particular ways to instruct the computer to process information. I wonder if this means I’m starting to think like a computer—what does that mean?! In any case, this outcome is a good one. The entire point of the Praxis Program is to think differently, creatively, and collaboratively about questions and problems. Learning to code is a very good place to start.  

