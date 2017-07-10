---
author: jeremy
comments: true
date: 2012-09-26 10:00:37+00:00
layout: post
link: http://scholarslab.org/research-and-development/ignoring-your-first-child/
slug: ignoring-your-first-child
title: Ignoring your First Child
wordpress_id: 6059
categories:
- Research and Development
tags:
- browser support
- CSS
---

And no, I'm not talking about human children. I'm talking about CSS selectors!

I usually have instances in my web designs where I would like to apply some styles to all the elements of a particular type _except_ the first one. For example, when displaying a navigation list, I like to add a light border in between each list item, but don't want to add a border to the first one. There are a bunch of ways to do this, depending on which browsers you want to support.

The most straightforward way is to just select your element normally in one declaration, then select the first child of that element using the [`:first-child` pseudo-class](http://www.w3.org/TR/CSS2/selector.html#first-child), like so:

[code lang="css"]
/* Select all list items. */
li {
    border-top: 1px dotted #ccc;
}

/* Select the list item that's the first child. */
li:first-child {
    border-top:none;
}
[/code]

This CSS will make sure each list item is separated by a border, and takes away the top border from the first list item, like so:



Of course, you've got that extra selector to basically take away the border for the first child. That's fine, too, but there are ways of writing this declaration with one selector to apply styles to elements except the first one.

When the [`:not` pseudo-class](http://www.w3.org/TR/2001/CR-css3-selectors-20011113/#negation) first came out, it was love at first sight for me. It's a handy little selector, allowing you to select anything _except_ elements that met some condition. It is, as the W3C documentation says, a _negation_ class.

So, using the `:not` pseudo-class, we could rewrite our CSS to look like this:

[code lang="css"]

/* Select all list items except the first child. */
li:not(:first-child) {
    border-top: 1px dotted #ccc;
}
[/code]

Nice and simple, and only requires writing one CSS declaration instead of two. And you can see, the results are the same:



I've used this approach in a lot of designs and felt pretty happy with for the most part. One problem, however, is that the `:not` pseudo-class is not supported by IE8 and earlier. Until recently, to get around that, I'd load a JavaScript polyfill called Selectivizr to basically add support for CSS3 pseudo-classes and a few other selectors to IE 8 and earlier. (More information about Selectivizr, including the features it adds and documentation on how to implement it, on their [website](http://selectivizr.com/).)

Only recently did I realize there's a better way, one supported by IE8 **and** IE7 that doesn't require the JavaScript polyfill. That way involves using the the [adjacent sibling selector](http://www.w3.org/TR/CSS2/selector.html#adjacent-selectors), which is just a `+` sign, to select only the list items that are adjacent siblings of another list item. Using the adjacent sibling selector, our CSS would look like this:

[code lang="css"]

/* Select any list item that is an
   adjacent sibling of another list item. */
li + li {
    border-top: 1px dotted #ccc;
}

[/code]

This selector doesn't style the first list item, because it doesn't have a sibling before it. And again, the results are the same:



I like this approach now because it keeps the CSS minimal (no need to undo the style with a second selector, which I like to avoid) and it's supported all the way back to IE7.

Of course, there are plenty of instances where CSS3 selectors like `:not` are the only way to accomplish what you'd like, and using those selectors and adding support for them with something like Selectivizr is a perfectly fine approach. (I do this for a lot of projects.) But it's better to make sure there are other ways you can write your selectors that are backwards compatible as much as possible.
