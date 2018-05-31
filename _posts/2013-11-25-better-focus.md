---
author: jeremy-boggs
date: 2013-11-25 13:48:52+00:00
layout: post
slug: better-focus
title: Better :focus
categories:
- Research and Development
tags:
- accessibility
- CSS
- design
---

Whenever I've taught folks how to do some basic HTML and CSS, the first thing they want to change are the styles for links on the page. And who can blame them? The default colors for links are pretty lame, as you can see in my [first example page on CodePen](http://codepen.io/clioweb/pen/wtBCo).

For those who don't know, there are a few states of a link you can style independently, using CSS [pseudo-class selectors](http://www.w3.org/TR/CSS2/selector.html#pseudo-class-selectors). These pseudo-class selectors include:



	
  * `:link` - The default state of the link

	
  * `:visited` - Allows you to style links to addresses you've already visited.

	
  * `:hover` - Allows you to update link styles when a user moves their pointer over a link.

	
  * `:focus` - Allows you to update link styles when a user tabs or otherwise changes their focus to a link.

	
  * `:active` - Used to update link styles when the link is activated (when clicked or when a user hits enter on a focused link).



You'll notice that, if you use your "Tab" key to navigation through the links on the example CodePen page, you can move between links. The link you're current on will be outlined, depending on your browser's settings. (You can do the same for forms, too. This is a nice way,if the form is marked up correctly, to move between fields when filling out a form, instead of moving your cursor to the next field and clicking on it.) The styles of these focused elements can be updated using the :focus pseudoclass selector.

Now, earlier versions (and some current versions) of CSS resets would set the "outline" property for everything to "0", thus getting rid of the outline on focus and any other state. In their defense, they also recommended resetting this for accessibility, but I'll admit that I rarely remembered to do this in my younger days. The result is that there are no indications when a user has focused on a link or form element.

Similarly, but perhaps even more foolishly, I was for a while inclined to think that the act of hovering over a link or form element was equivalent to focusing, so I would very often style these two pseudoclasses in the same CSS rule:

```
a:hover,
a:focus {
   color: orange;
}
```

You can actually seen an example of this right now on our [Speaking in Code](http://codespeak.scholarslab.org) site. Using the tab key to move between links on the page uses the same styles as hover, but they're not very noticeable, certainly not noticeable enough to know where you've focused when the page scrolls down. Part of the problem here is that the hover/focus styles aren't really different enough from the default link styles anyways, which is something I should address. But with focus, the way a user navigates the page is inherently different, and assuming that hover and focus are equivalent leads to a pretty inaccessible page, even for folks who just tab between links for convenience.

Long story short: I need to do better focus styles. This is a very different method for navigating web pages, and the styles should help facilitate that navigation, not obscure it.

As a quick example of exploring more prominent styles for link :focus, I created a [new CodePen with some updated styles](http://codepen.io/clioweb/pen/ArtEq):

```
a:focus {
  outline: thin dotted #60c;
  color: #60c;
  background: #fff09e;
  text-decoration:none;
  padding: 2px 0;
  font-weight:bold;
}
```

Now if you tab through the links on the page, you'll notice they stand out a bit more. They're intentionally ugly—to show you how different you can actually make these look—but you can change the styles to balance matching your own aesthetic with making the links noticeable enough to see where you've focused on the page.

A few lessons to take away here:




	
  1. _If you use a CSS reset, actually read through it and see what it does._ They're meant to be just that—a reset—and still expect you to set styles appropriately. Most of them are designed to give you a consistent starting point across browsers, but they still don't supersede your responsibility to set styles appropriately for all your users. They're also meant to be tinkered with and changed for your own preferences and design goals.

	
  2. Take particular care to style the :focus pseudoclass for both links and form elements. It's a handy way to navigate parts of a page, but without noticeable style updates, users can quickly lose track of where they've actually focused.



Now I'm off to go update the styles on Speaking in Code, and just about every other project I've had my hands on around here!
  *[HTML]: Hypertext Markup Language
  *[CSS]: Cascading Style Sheets
