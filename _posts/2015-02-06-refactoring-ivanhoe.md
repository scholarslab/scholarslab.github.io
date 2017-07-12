---
author: scott-bailey
date: 2015-02-06 11:12:29+00:00
layout: post
slug: refactoring-ivanhoe
title: Refactoring Ivanhoe
categories:
- Research and Development
---

As one of last year’s [Praxis Fellows](http://praxis.scholarslab.org/), I helped build [Ivanhoe](http://ivanhoe.scholarslab.org), a “WordPress Theme enabling collaborative criticism through roleplay - for scholars, students, and cultural enthusiasts.” While Ivanhoe was perfectly functional when released, one could not say that it exemplified orderly, well-formed code. It was, and is, after all, code written by novice developers. That it was still released as such is, I think, a testament to the Praxis Program, which legitimately treats Fellows, graduate students typically learning about digital humanities, project management, and coding for the first time, as fellow workers and collaborators of the Scholars’ Lab staff, not children whose mess must be cleaned up after the fact. Mentorship entails developing skills and capacities over time through partnership, not paternalistic oversight. 





And yet, this year we have a new cohort of Praxis Fellows, most of them learning to code for the first time, tasked with improving Ivanhoe in terms of features and design. In order to facilitate their ability to understand the [Ivanhoe code base](https://github.com/scholarslab/ivanhoe) to a sufficient degree to add to it without too much time lost overcoming the wall of unorganized code, we decided to refactor Ivanhoe, part of that effort being the introduction of a set of acceptance tests, about which I’ve already [written](http://scholarslab.org/uncategorized/troubleshooting-acceptance-testing-in-rspec-and-capybara/). 





That’s the official line at least, and a true one, but not the whole story for me personally. As part of the development team in last year’s Praxis cohort, I contributed substantially to Ivanhoe. Throughout my time in Praxis, I advanced significantly in my ability to code, and have learned far more about best practices, efficient code, and application organization since becoming a full developer in the Scholars’ Lab. However, there is still code from the very earliest commits in Ivanhoe still in the codebase, from before I (or my fellows) had really clear ideas about how to structure files, comment code clearly, or craft elegant functions. Doing a refactor of Ivanhoe was a chance for me to look back at a lot of code I had written early on, and implement improvements based on everything I’ve learned since. I want to share a few highlights from that refactor, now current in the develop branch of the Ivanhoe repo, which I carried out in frequent consultation with [Eric Rochester](http://scholarslab.org/people/eric-rochester/), our senior developer. 





### Tests Are Awesome, Type Errors Are Not





The refactor process began with implementing the test suite about which I’ve already written, which would provide a way to make sure that the refactored code generally worked as expected. Once the test suite was written, I created a new branch containing the tests, merged in the develop branch of the repo, and ran the tests. And found a serious fail immediately. The develop branch of Ivanhoe implements a feature that allows the user to respond to more than one source move at a time. Since this feature was merged into develop back in late April, early May, it was, apparently and unbeknownst to us, broken due to a simple error: at times an integer was passed to the function generating the response form, while at other times, with the multiple sources, an array was passed. This simple type error [was easily fixed](https://github.com/scholarslab/ivanhoe/commit/1beeebe081beba1f34b2486047173acd46a50bc1) (and fixed again [differently](https://github.com/scholarslab/ivanhoe/commit/12c96d36e55396efeff42e460f2033903dab9d00) after using PHP classes), and I became immediately enamored of testing. 





Rest assured, every step of the way through the refactor, I ran my tests, always quietly elated when line after line of green passes appeared in my terminal. 





### Function Reorganization





One of the biggest problems with the code base as we left it at the end of the Spring semester was the [functions.php](https://github.com/scholarslab/ivanhoe/blob/master/functions.php) file, a 1000+ lines of unorganized, sometimes commented functions addressing numerous aspects of the theme. In order to make these functions more accessible to those just jumping into Ivanhoe development, I sorted through these functions, identifying major types of functions and then breaking those sets of functions out into separate files in the includes directory. These files are then pulled into the [functions.php](https://github.com/scholarslab/ivanhoe/blob/develop/functions.php) file, necessary in WordPress, with require_once statements. Broken up and reorganized, functions are immediately more easily accessible for development. For the initial breakup of functions, see [here](https://github.com/scholarslab/ivanhoe/commit/fc87bcf3290903833441ea2ce1c95fcdcf01c310).





### Cleaning Up Messy Templates





Some of the view templates in Ivanhoe are fairly straightforward, but others in the released version were quite messy, with multiple custom WordPress queries sometimes nested within each other, variable definitions scattered throughout the page, inconsistent formatting, and often very little commenting to indicate what’s happening throughout the template. While the fixes for these issues were relatively minor, they make a difference to the legibility of the code. When possible, I moved variable definitions and logic to the top of each template file. I added comments noting the beginning and end of presentation sections for each custom query, especially when nested. Some of the templates are still complex, but now more accessible for someone coming fresh to the project. For some of these changes, see [here.](https://github.com/scholarslab/ivanhoe/compare/61a36dde...cf1407d1)





### Presentation vs Data-related Logic





Lacking a true templating language and with a substantial API, WordPress can make a hash of the distinction between presentation logic and data-related logic. That’s a problem, but probably not an excuse for our own failure to differentiate the two in Ivanhoe. For instance, in the released version of Ivanhoe, we have a function called [ivanhoe_get_move_responses](https://github.com/scholarslab/ivanhoe/blob/master/functions.php#L623), which uses a `get_posts` query to get any responses to a move, iterates over the array of responses to build an unordered list with the post titles of the responses as list items, and then echoes that chunk of HTML. In the template using this function, we simply call the function. This one function does more than it needs to or should. It builds a usable chunk of data in the array of responses, which has nothing necessarily presentational about it, builds a presentational element (the unordered list), and then actually implements that presentation. 





The [refactor](https://github.com/scholarslab/ivanhoe/commit/6269404d2aed7ebcc7a9c402412b14e12d72c734) breaks this up into [two functions](https://github.com/scholarslab/ivanhoe/blob/develop/includes/post_meta.php#L300), one data-related and the other presentational. It makes a further change for best practice and versatility, replacing the immediate echo at the end of the presentational function with a return. The `echo` is moved to the view template, keeping the actual presentation where it belongs. 





Both of these changes - breaking up functions based on type, and replacing echo with return in presentational functions - were implemented multiple times throughout the refactor. 





### PHP Classes - Unncessary But Fun(?)





In the released version, a [single template](https://github.com/scholarslab/ivanhoe/blob/master/ivanhoe-post-form.php), with quite a bit of procedural logic, generated the various new move, game, and role forms. I mentioned earlier in this post that I worked with Eric on this refactor; it was the primary subject of our pair programming time for the last while. Our conversation on this particular file went roughly like this:





Eric: When I look at this file, I think about PHP classes. 





Scott: Will PHP classes make this file easier to deal with? 





Eric: Maybe, maybe not. 





Scott: Alright, let’s do it. 





Now, this refactor was largely about making the Ivanhoe theme more accessible for novice developers to engage. It was secondarily an opportunity for me to practice and implement some of what I have learned on one of my own previous projects. It was also, though, thirdly, an opportunity for me to learn more about refactoring and coding patterns with Eric’s help. Re-working the post form template into a single base class with three sub-classes is an example of this. It wasn’t necessary, and it didn’t shorten the code or boost application performance in a truly substantial manner. It did, however, provide me a clearer idea of how recognizing patterns within code written according to one paradigm can lead you to achieve the same results through an entirely different paradigm. 





Briefly, we had one file that was generating effectively the same form three times, with only minor changes in labels and data depending on whether the form needed to generate a new game, role, or move. These changes were controlled by a series of variable definitions and `if` statements following a top-down order in the file. Given that all three instances of the form shared a basic composition, it made sense to create a [single base class](https://github.com/scholarslab/ivanhoe/blob/develop/includes/post_form/BasePostForm.php) for the post form with all of the shared functionality as methods on the class. The differences between forms were handled by sub-classes for each different post type (game, role, move), either adding sub-class specific methods or, if necessary, overwriting a method from the base class. The original file generating the forms then became [much simpler](https://github.com/scholarslab/ivanhoe/blob/develop/ivanhoe-post-form.php) - it basically just checks for post type, then concretely instantiates the appropriate sub-class. To see these changes, check [here](https://github.com/scholarslab/ivanhoe/compare/74f3e7d...b575e5f92a94cf012d8951a5f993ec1c1136fc59).





### (Un)Finished





The major aspects of the refactor are now done, and it’s been merged down into the develop branch of the repository, available to be hacked on by this year’s Praxis cohort. I look forward to seeing what they do with it, and to then, somewhere down the road, coming back to refactor again with all that I will have learned by that time. 



