---
author: brandon-walsh
date: 2015-12-03 14:43:19+00:00
layout: post
slug: reflections-on-a-year-of-dh-mentoring
title: Reflections on a Year of DH Mentoring
category: essay
tags:
- grad-student-research
- research-and-development
- pedagogy
crosspost:
  - title: WLUDH blog
    url: http://digitalhumanities.wlu.edu/blog/2015/12/03/reflections-on-a-year-of-dh-mentoring/
---

This year I am working with [Eric Rochester](http://scholarslab.org/people/eric-rochester/) on a fellowship project that has me learning natural language processing (NLP), the application of computational methods to human languages. We're adapting these techniques to study quotation marks in the novels of Virginia Woolf (read more about the project [here](http://scholarslab.org/virginia-woolf-natural-language-processing-and-the-quotation-mark/)). We actually started several months before this academic year began, and, as we close out another semester, I have been spending time thinking about just what has made it such an effective learning experience for me. I already had a technical background from my time in the Scholars' Lab at the beginning of the process, but I had no experience with Python or NLP. Now I feel most comfortable with the former of any other programming language and familiar enough with the latter to experiment with it in my own work.

The general mode of proceeding has been this: depending on schedules and deadlines, we meet once or twice every two weeks. Between our meetings I would work as far and as much as I could, and the sessions would offer a space for Eric and me to talk about what I had done. The following are a handful of things we have done that, I think, have helped to create such an effective environment for learning new technical skills. Though they are particular to this study, I think they can be usefully extrapolated to apply to many other project-based courses of study in digital humanities. They are primarily written from the perspective of a student but with an eye to how and why the methods Eric used proved so effective for me.


**Let the Wheel Be Reinvented Before Sharing Shortcuts**


I came to Eric with a very small program adapted from Matt Jockers's book on_ Text Analysis with R for Students of Literature_ that did little beyond count quotation marks and give some basic statistics. I was learning as I built the thing, so I was unaware that I was reinventing the wheel in many cases, rebuilding many protocols for dealing with commonly recognized problems that come from working with natural language. After working on my program and my approach to a degree of satisfaction, Eric pulled back the curtain to reveal that a commonly used python module, the Natural Language ToolKit ([NLTK](http://www.nltk.org/)), could address many of my issues and more. NLTK came as something of a revelation, and working inductively in this way gave me a great sense of the underlying problems the tools could address. By inventing my own way to read in a text, clean it to make its text uniformly readable by the computer, and breaking the whole piece into a series of words that could be analyzed, I understood the magic behind a couple lines of NLTK code that could do all that for me. The experience also helped me to recognize ways in which we would have to adapt NLTK for our own purposes as I worked through the book.


**Have a Plan, but Be Flexible**


After discussing NLTK and how it offered an easier way of doing the things that I wanted, Eric had me systematically work through the [NLTK book](http://www.nltk.org/book/) for a few months. Our meetings took on the character of an independent study: the book set the syllabus, and I went through the first seven chapters at my own pace. Working from a book gave our meetings structure, but we were careful not to hew too closely to the material. Not all chapters were relevant to the project, and we cut sections of the book accordingly. We shaped the course of study to the intellectual questions rather than the other way around.


**Move from Theory to Practice / Textbook to Project**


As I worked through the book, I was able to recognize certain sections that felt most relevant to the Woolf work. Once I felt as though I had reached a critical mass, we switched from the book to the project itself and started working. I tend to learn from doing best, so the shift from theory to execution was a natural one. The quick and satisfying transition helped the work to feel productive right away: I was applying my new skills as I was still learning to feel comfortable with them. Where the initial months had more the feel of a traditional student-teacher interaction, the project-based approach we took up at this point felt more like a real and true collaboration. Eric and I would develop to-do items together, we would work alongside each other, and we would talk over the project together.


**Document Everything**


Between our meetings I would work as far and as much as I could, carefully noting places at which I encountered problems. In some cases, these were conceptual problems that needed clarifying, and these larger questions frequently found their way into separate notes. But my questions were frequently about what a particular line of code, a particular command or function, might be doing. In that case, I made comments directly in the code describing my confusion. I quickly found that these notes were as much for me as for Eric--I needed to get back in the frame of mind that led to the confusion in the first place, and copious notes helped remind me what the problem was. These notes offered a point of departure for our meetings: we always had a place to start, and we did so based on the work that I had done.


**Communicate in as Many Ways as Possible**


We met in person as much as possible, but we also used a variety of other platforms to keep things moving. Eric and I had all of our code on [GitHub](https://github.com/erochest/woolf) so that we could share everything that we had each been working on and discuss things from a distance if necessary. Email, obviously, can do a lot, but I found the chat capabilities of the Scholars' Lab's IRC channel to be far better for this sort of work. If I hit a particular snag that would only require a couple minutes for Eric to answer, we could quickly work things out through a web chat. With Skype and Google Hangouts we could even share the code on the other person's computer even from hundreds of miles away. All of these things meant that we could keep working around whatever life events happened to call us away.


**Recognize Spinning Wheels**


These multiple avenues of communication are especially important when teaching technical skills. Not all questions or problems are the same: students can work through some on their own, but others can take them days to troubleshoot. Some amount of frustration is a necessary part of learning, and I do think it's necessary that students learn to confront technical problems on their own. But not all frustration is pedagogically productive. There comes a point when you have tried a dozen potential solutions and you feel as though you have hit a wall. An extra set of eyes can (and should) help. Eric and I talked constantly about how to recognize when it was time for me to ask for help, and low-impact channels of communication like IRC could allow him to give me quick fixes to what, to me at least, seemed like impossible problems. Software development is a collaborative process, and asking for help is an important skill for humanists to develop.


**In-person Meetings Can Take Many Forms**


When we met, Eric and I did a lot of different things. First, we would talk through my questions from the previous week. If I felt a particular section of code was clunky or poorly done, he would talk and walk me through rewriting the same piece in a more elegant form. We would often pair program, where Eric would write code while I watched, carefully stopping him each time I had a question about something he was doing. And we often took time to reflect on where the collaboration was going - what my end goal was as well as what my tasks before the next meeting would be. Any project has many pieces that could be dealt with at any time, and Eric was careful to give me solo tasks that he felt I could handle on my own, reserving more difficult tasks for times in which we would be able to work together. All of this is to say that any single hour we spent together was very different from the last. We constantly reinvented what the meetings looked like, which kept them fresh and pedagogically effective.

This is my best attempt to recreate my experience of working in such a close mentoring relationship with Eric. Obviously, the collaboration relies on an extremely low student-to-teacher ratio: I can imagine this same approach working very well for a handful of students, but this work required a lot of individual attention that would be hard to sustain for larger classes. One idea for scaling the process up might be to divide a course into groups, being training one, and then have students later in the process begin to mentor those who are just beginning. Doing so would preserve what I see as the main advantage of this approach: it helps to collapse the hierarchy between student and teacher and engage both in a common project. Learning takes place, but it does so in the context of common effort. I'd have to think more about how this mentorship model could be adapted to fit different scenarios. The work with Eric is ongoing, but it's already been one of the most valuable learning experiences I have had.
