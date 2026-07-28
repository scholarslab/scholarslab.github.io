---
author: brandon-walsh
date: 2026-07-28
layout: post
slug: effortless-digital-humanities
title: Effortless Digital Humanities
category: essay
tags:
- Digital humanities
crosspost:
  - title: Brandon's blog
    url: https://walshbr.com/blog/effortless-digital-humanities
---
When I first read Kenny Werner's book [Effortless Mastery: Liberating the Master Musician Within](https://en.wikipedia.org/wiki/Effortless_Mastery), I was in college studying jazz improvisation and musical performance. At the time, the book was powerful and transformative for its approach to thinking through performance anxiety and imposter syndrome— things I still struggle with in relation to musical performance. Recent conversations about GenAI and digital humanities left me wanting to revisit Werner's approach to thinking through craft and difficulty. 

The central conceit for *Effortless Mastery* is this: the degree to which we care about an activity can get in the way of our ability to do it. When we care deeply about doing something well, about performing at a high level, this sincere anxiety and the tension that follows interfere with our ability to prepare for the excellence we want to achieve. Approaching our craft with this heightened sense of the stakes reinforces a fraught relationship to our craft that comes out in practice, play, and performance. *Effortless Mastery* is about choosing a different path, centering mindfulness in our craft in a way that can be practiced. In the prototypical *Effortless Mastery* exercise, one sits at the piano and only practices a single note for 5-10 minutes a day. The goal is to approach this isolated note with such intention and care that it becomes effortless. Let your finger, in a childlike way, press down on a key with as little tension as possible. Only add new notes when the first one has become the most perfect and effortless thing that it could possibly be. According to Werner, performers will likely find this approach to practice excruciating. We feel like we have too much material to learn. Too much to do—not enough time. But Werner argues that, if approached diligently, his form of practice will actually pay dividends and elevate all parts of our performance. Our relationship to our instrument and to music will improve, and we will find it easier to enter a heightened state of flow and bliss as we perform. There are also affirmations that focus on changing the way you relate to the instrument.

I'm interested in how we can apply the same kind of approach to the work that we do in the academy. In some ways, the concept of effortless practice cuts against the way I tend to teach and write about DH. I've argued in the past that [frustration is a feature](https://doi.org/10.1215/15314200-7615485) for DH students. Learning is hard in a way that we can't avoid, and we have to teach students how to live with these challenging emotions. But lately I've been thinking about how perception of difficulty can get in the way of our pedagogies, particularly as we all try to reckon with the impact of GenAI on our teaching. When a humanist sits down to learn something new, it can be easy to reach for GenAI as soon as they start to feel frustrated. Is it useful for them to sidestep challenging emotions? Would we rather they sit with the difficulty longer? How do we help students shift their own understanding of what is difficult and what is not? Finally, to talk back to myself, how might it change the possibilities students see for themselves if we framed DH instead as a space of effortlessness rather than one of frustration and difficulty?

The domains are different—how many of us would describe our DH work as a space of artistic bliss? But I still think there can be utility in thinking through the shape of an effortless digital humanities. What is the DH equivalent of putting your finger to a single note? What are the building blocks for all other digital humanities work? And how might we practice these techniques daily in 10 minutes to promote an effortless approach to doing so? To begin answering these questions for myself, I sat down at my laptop and mapped out how this sequence might work in my classroom. In what follows, I map out a way you might extrapolate this kind of approach over the course of a sixteen-week semester, slowly building up a daily practice in the spirit of developing an effortless digital humanities. Try it with your students and let me know how it goes. 

## Terminal

One of the first things I do when sitting down for DH work is open my terminal, so this is where my daily practice begins. The terminal is an essential tool for so many other DH activities, but it adds a layer of abstraction to learning that can take a while for students to overcome. Here are some ideas for playing one note on the terminal each day. Under each week I describe a sequence of activities meant to be performed daily, early each morning, in about 10 minutes. Each new week adds one or two new elements to the repeated sequence. Only advance to a new week when you feel you can perform the previous week with complete effortlessness. Feel free to repeat weeks. Better to go slow. And be sure to include (or adapt!) the light affirmations that I include. Our primary statement will be one directly from Werner's text: "It is not hard, it is just unfamiliar." A few caveats: in what follows, unless otherwise specified, `code blocks` represent lines that should be entered into the terminal. Throughout this post I am sharing MacOS terminal commands. [Programming Historian](https://programminghistorian.org/en/lessons/) has some useful lessons for those looking to adapt these for Windows. And, finally, things will, by design, become *very* repetitive. It is quite possible I will leave out a step while copying things over. Let me know if you find such a thing and I will edit accordingly.

* Week 1:
  * Open the terminal. Say, "I have opened my terminal. It is not hard, it is just unfamiliar." 
* Week 2:
  * Open the terminal. Say, "I have opened my terminal." 
  * Print out your current directory with `pwd`. Say "I am currently in my user folder. It is not hard, it is just unfamiliar."
* Week 3: 
  * Open the terminal. Say, "I have opened my terminal." 
  * Print out your current directory with `pwd`. Say, "I am currently in my user folder."
  * Change to your Desktop with `cd Desktop`. Confirm you are in your desktop with `pwd`. Say, "I have changed to my Desktop. It is not hard, it is just unfamiliar." 
* Week 4: 
  * Open the terminal. Say, "I have opened my terminal." 
  * Print out your current directory with `pwd`. Say, "I am currently in my user folder."
  * Change to your Desktop with `cd Desktop`. Confirm you are in your desktop with `pwd`. Say, "I have changed to my Desktop." 
  * List out the contents of your desktop with `ls`. Say, "I am looking at the contents of my desktop. It is not hard, it is just unfamiliar."
* Week 5: 
  * Open the terminal. Say, "I have opened my terminal." 
  * Print out your current directory with `pwd`. Say, "I am currently in my user folder."
  * Change to your Desktop with `cd Desktop`. Confirm you are in your desktop with `pwd`. Say, "I have changed to my Desktop." 
  * List out the contents of your desktop with `ls`. Say, "I am looking at the contents of my desktop."
  * Make a new folder with `mkdir test_folder`. Say, "I have made a new folder."
  * Clean up your workspace by deleting the folder with `rm -rf test_folder`. Say, "I have deleted the new folder. It is not hard, it is just unfamiliar."
* Week 6: 
  * Open the terminal. Say, "I have opened my terminal." 
  * Print out your current directory with `pwd`. Say, "I am currently in my user folder."
  * Change to your Desktop with `cd Desktop`. Confirm you are in your desktop with `pwd`. Say, "I have changed to my Desktop." 
  * List out the contents of your desktop with `ls`. Say, "I am looking at the contents of my desktop."
  * Make a new folder with `mkdir test_folder`. Say, "I have made a new folder."
  * Change into the new folder with `cd test_folder`. Say, "I have changed into my new folder called test_folder."
  * Return to your desktop with `cd ..`. Say, "I have returned to my desktop."
  * Clean up your workspace by deleting the folder with `rm -rf test_folder`. Say, "I have deleted the new folder. It is not hard, it is just unfamiliar."


For many experienced DH practitioners, these steps would take maybe 10 seconds. But if you're new to the terminal entirely each of these things could take quite a bit longer and cause a great deal of anxiety. Encourage students to move slowly, repeating each week's steps regularly moving on to the next step. After several weeks, hopefully, they will feel a greater sense of comfort with the idea of what the terminal is, where to find it, and how to use it. Working incrementally in this way can take something from challenging to rote practice.

## Git

Version control systems seem especially good for this kind of regular work. Git and GitHub are tools that students often find very difficult to conceptualize and master, but 90% of what you need to do can be handled by the same set of steps. Perhaps by making Git practice an everyday routine we can make more room for understanding the concepts. The next several weeks will build on the previous terminal sequence.

* Week 7: 
  * Open the terminal. Say, "I have opened my terminal." 
  * Print out your current directory with `pwd`. Say, "I am currently in my user folder."
  * Change to your Desktop with `cd Desktop`. Confirm you are in your desktop with `pwd`. Say, "I have changed to my Desktop." 
  * List out the contents of your desktop with `ls`. Say, "I am looking at the contents of my desktop."
  * Make a new folder with `mkdir test_folder`. Say, "I have made a new folder."
  * Change into the new folder with `cd test_folder`. Say, "I have changed into my new folder called test_folder."
  * Make this folder a git repository with `git init`. Say, "I have made this folder into a git repository."
  * Return to your desktop with `cd ..`. Say, "I have returned to my desktop."
  * Clean up your workspace by deleting the folder with `rm -rf test_folder`. Say, "I have deleted the new folder. It is not hard, it is just unfamiliar."
* Week 8: 
  * Open the terminal. Say, "I have opened my terminal." 
  * Print out your current directory with `pwd`. Say, "I am currently in my user folder."
  * Change to your Desktop with `cd Desktop`. Confirm you are in your desktop with `pwd`. Say, "I have changed to my Desktop." 
  * List out the contents of your desktop with `ls`. Say, "I am looking at the contents of my desktop."
  * Make a new folder with `mkdir test_folder`. Say, "I have made a new folder."
  * Change into the new folder with `cd test_folder`. Say, "I have changed into my new folder called test_folder."
  * Make this folder a git repository with `git init`. Say, "I have made this folder into a git repository."
  * Make a few file in your folder with `touch index.html`. Say, "I have made a new html file."
  * Confirm you have a new file to add in git with `git status`. Say, "I have shown that git acknowledges the new file."
  * Return to your desktop with `cd ..`. Say, "I have returned to my desktop."
  * Clean up your workspace by deleting the folder with `rm -rf test_folder`. Say, "I have deleted the new folder. It is not hard, it is just unfamiliar."
* Week 9: 
  * Open the terminal. Say, "I have opened my terminal." 
  * Print out your current directory with `pwd`. Say, "I am currently in my user folder."
  * Change to your Desktop with `cd Desktop`. Confirm you are in your desktop with `pwd`. Say, "I have changed to my Desktop." 
  * List out the contents of your desktop with `ls`. Say, "I am looking at the contents of my desktop."
  * Make a new folder with `mkdir test_folder`. Say, "I have made a new folder."
  * Change into the new folder with `cd test_folder`. Say, "I have changed into my new folder called test_folder."
  * Make this folder a git repository with `git init`. Say, "I have made this folder into a git repository."
  * Make a few file in your folder with `touch index.html`. Say, "I have made a new html file."
  * Confirm you have a new file to add in git with `git status`. Say, "I have shown that git acknowledges the new file."
  * Add your new file to your git staging area with `git add index.html`. Say, "I have added my file to staging."
  * Confirm you added the file successfully with `git status`. Say, "Git status shows that I did this successfully."
  * Return to your desktop with `cd ..`. Say, "I have returned to my desktop."
  * Clean up your workspace by deleting the folder with `rm -rf test_folder`. Say, "I have deleted the new folder. It is not hard, it is just unfamiliar."
* Week 10: 
  * Open the terminal. Say, "I have opened my terminal." 
  * Print out your current directory with `pwd`. Say, "I am currently in my user folder."
  * Change to your Desktop with `cd Desktop`. Confirm you are in your desktop with `pwd`. Say, "I have changed to my Desktop." 
  * List out the contents of your desktop with `ls`. Say, "I am looking at the contents of my desktop."
  * Make a new folder with `mkdir test_folder`. Say, "I have made a new folder."
  * Change into the new folder with `cd test_folder`. Say, "I have changed into my new folder called test_folder."
  * Make this folder a git repository with `git init`. Say, "I have made this folder into a git repository."
  * Make a few file in your folder with `touch index.html`. Say, "I have made a new html file."
  * Confirm you have a new file to add in git with `git status`. Say, "I have shown that git acknowledges the new file."
  * Add your new file to your git staging area with `git add index.html`. Say, "I have added my file to staging."
  * Confirm you added the file successfully with `git status`. Say, "Git status shows that I did this successfully."
  * Commit your new file with `git commit -m 'My first commit`. Say, "I am committing my new file to git."
  * Confirm you added the file successfully with `git status`. Say, "Git status shows that I did this successfully."
  * Return to your desktop with `cd ..`. Say, "I have returned to my desktop."
  * Clean up your workspace by deleting the folder with `rm -rf test_folder`. Say, "I have deleted the new folder. It is not hard, it is just unfamiliar."

At this point, I might have students continue to repeat these steps for several weeks. Again, an experienced practitioner could do this in no time at all. Newcomers will find this to be quite a lot. At some point, after enough days have gone by, things might start to get annoying. Good! You're experiencing effortlessness. Only add new steps when you feel like what you have done so far is effortless.  Remember: it is not hard, it is just unfamiliar.

## Building a basic website

At this point, my bulleted list is getting overly complicated, so I'll simplify things going forward by using shorthand and sandwiching the new steps inside of a "set up" and "clean up" phase. Refer above for the associated commands. It is probably clear where I am going at this stage: I think designing a basic website and understanding how to view it on your computer is another foundational DH skill. And we can make this sequence a very light daily activity.

* Week 11: 
  * Set up: 
    * Open your terminal, change to your desktop, and make a new folder called "test_folder." Change into it. Initialize a new git repository. Make a new file called index.html. Add and commit this change. Describe what you have done. Say, "It is not hard, it is just unfamiliar."
  * New:
    * Add a new line inside your index.html file that says, "This is a basic webpage." Describe what you have done.
    * Open that file in the web browser of your choice. Say, "I am viewing my html file in a web browser."
  * Clean up:
    * Change back to your Desktop and delete the folder. Describe what you have done. Say, "It is not hard, it is just unfamiliar."
* Week 11: 
  * Set up: 
    * Open your terminal, change to your desktop, and make a new folder called "test_folder." Change into it. Initialize a new git repository. Make a new file called index.html. Add and commit this change. Add a new line inside your index.html page and open it in a browser. Describe what you have done. Say, "It is not hard, it is just unfamiliar."
  * New:
    * Stage your change with `git add .` Describe what you have done. 
    * Commit your change with `git commit -m 'Made a change'`. Describe what you have done.
  * Clean up:
    * Change back to your Desktop and delete the folder. Describe what you have done. Say, "It is not hard, it is just unfamiliar."
* Week 12: 
  * Set up: 
    * Open your terminal, change to your desktop, and make a new folder called "test_folder." Change into it. Initialize a new git repository. Make a new file called index.html. Add and commit this change. Add a new line inside your index.html page and open it in a browser. Describe what you have done. Say, "It is not hard, it is just unfamiliar."
  * New:
    * Include the basic skeleton of an HTML page by pasting the [contents of this page in index.html](https://www.toptal.com/developers/htmlshell). 
  * Clean up:
    * Add and commit all changes.
    * Change back to your Desktop and delete the folder. Describe what you have done. Say, "It is not hard, it is just unfamiliar."
* Week 13: 
  * Set up: 
    * Open your terminal, change to your desktop, and make a new folder called "test_folder." Change into it. Initialize a new git repository. Make a new file called index.html. Add and commit this change. Add a new line inside your index.html page and open it in a browser. Paste the basic [skeleton of an HTML page](https://www.toptal.com/developers/htmlshell) into your index.html. Describe what you have done. Say, "It is not hard, it is just unfamiliar."
  * New:
    * It's a review week. Each day, write down comments, in your index.html file, explaining what one of the lines in the HTML file does. 
  * Clean up:
    * Add and commit all changes.
    * Change back to your Desktop and delete the folder. Describe what you have done. Say, "It is not hard, it is just unfamiliar."
* Week 14: 
  * Set up: 
    * Open your terminal, change to your desktop, and make a new folder called "test_folder." Change into it. Initialize a new git repository. Make a new file called index.html. Add and commit this change. Add a new line inside your index.html page and open it in a browser. Paste the basic [skeleton of an HTML page](https://www.toptal.com/developers/htmlshell) into your index.html. Describe what you have done. Say, "It is not hard, it is just unfamiliar."
  * New:
    * Each day, write down comments, in your index.html file, explaining what one of the lines in the HTML file does. 
  * Clean up:
    * Add and commit all changes.
    * Change back to your Desktop and delete the folder. Describe what you have done. Say, "It is not hard, it is just unfamiliar."
* Week 15: 
  * Set up: 
    * Open your terminal, change to your desktop, and make a new folder called "test_folder." Change into it. Initialize a new git repository. Make a new file called index.html. Add and commit this change. Add a new line inside your index.html page and open it in a browser. Paste the basic [skeleton of an HTML page](https://www.toptal.com/developers/htmlshell) into your index.html. Describe what you have done. Say, "It is not hard, it is just unfamiliar."
  * New:
    * Make a CSS file with "touch style.css". Describe what you have done.
    * Link it to your index.html file by adding the following line within your `<head>` tag: `<link rel="stylesheet" href="style.css">`
  * Clean up:
    * Add and commit all changes.
    * Change back to your Desktop and delete the folder. Describe what you have done. Say, "It is not hard, it is just unfamiliar."
* Week 16: 
  * Set up: 
    * Open your terminal, change to your desktop, and make a new folder called "test_folder." Change into it. Initialize a new git repository. Make a new file called index.html. Add and commit this change. Add a new line inside your index.html page and open it in a browser. Paste the basic [skeleton of an HTML page](https://www.toptal.com/developers/htmlshell) into your index.html. Make a new CSS file and link it to your index file. Describe what you have done. Say, "It is not hard, it is just unfamiliar."
  * New:
    * Change the background color of your `<body>` tag to be:
    ```
    body{
      background-color: red;
    }
    ```
    * Save your file. Refresh your browser to see the new page. Describe what you have done. 
  * Clean up:
    * Add and commit all changes.
    * Change back to your Desktop and delete the folder. Describe what you have done. Say, "It is not hard, it is just unfamiliar."

Again, step away from things if at any point the exercise starts to feel like they are causing effort or friction. Reduce what you're asking yourself to do for the next session. I think you will find if you proceed like this for a week or two you will very quickly develop proficiency with a range of DH building blocks. A webpage with red background (my go-to example for teaching CSS because it is very obvious something has happened) might not feel very exciting to an advanced practitioner, but I would be immensely pleased with a student able to go from nothing to this level over the course of a semester.

These kinds of exercises might feel trite and meaningless, but you can't put a price on confidence. Effortless fluency and literacy with the basics provide a strong foundation for more advanced study. Spend 5 to 10 minutes on them every day. As Werner would say, "What do you have to lose?" We can all find 5 or 10 minutes, and that unit of time is a small sacrifice that ultimately will not take that much away from other work. Wouldn't it be great for students to approach their work with a sense of confidence that they can inhabit a DH space that works for them? Exercises like these can help our students make DH a daily part of their lives. Daily work building a personal, effortless digital humanities will prepare our students to face the bigger and more advanced problems they will inevitably face. They will do so with confidence that they can find the answers within themselves and their own process. The next time they reach for a GenAI prompt when faced with a problem, they just might pause and look inwards first. 
