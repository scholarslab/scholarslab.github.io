---
author: annie-swafford
date: 2012-03-20 15:09:09+00:00
layout: post
slug: we-have-highlighting
title: We Have Highlighting!
category: blog
tags:
- Grad Student Research
- code
- praxis program
- Prism
---

We have reached an important milestone in Prism development; the highlighting functionality is now complete! A user can now color a given text in accordance with a series of categories and then submit the markings to the database! The user clicks on a category on the right-hand side of the page to select that category, and can then mark up the text.  To mark the text, the user can either click on each word individually or drag over the text and all the words the cursor touches will be marked in that category. We also have an eraser function that lets the user delete any markings! Just click the eraser and then click on the word you want to unhighlight!


Building this was quite an involved process; it took some ruby code to make a preprocessor that puts a span around each word and assignes each word a number, lots of coffeescript to control the marking functionality, and some css to control the colors of the markings and where they should appear on the text.  The next step for our talented design team is to figure out which colors we should use and whether we should attempt to layer colors and play with opacity, or whether some markings should appear above the text or below.  For example, should a phrase marked with both blue and red appear as purple, as red with a blue border, or should the words appear as blue with the red either above or below the words?  We've currently built it with the latter design in mind, as the image below demonstrates.





![null](https://lh6.googleusercontent.com/-aowZ54KSrzk/T2ioVI6RCoI/AAAAAAAAAEA/4NL9XpK9BxQ/w711-h415-k/highlight.png)




Our next step from the development side is figuring out how to visualize the data! We know what we want it to look like ultimately, and now we need to build it! I'm going to spend some time trying to make sense of d3.js to see if it will work for our purposes. More next week!
