---
author: jeremy-boggs
date: 2012-10-01 15:06:47+00:00
layout: post
slug: casing-your-text
title: Casing your Text
categories:
- Research and Development
tags:
- CSS
- letter case
- text-transform
---

One of the first things I remember doing as a graduate assistant was editing a few dozen HTML files to change all of the headings, which someone had typed in upper case, to use title case. This was not too much fun. It was even more painful to realize later that you can easily change the [letter case](http://en.wikipedia.org/wiki/Letter_case) of any text by using a handy CSS property called [`text-transform`](http://www.w3.org/TR/CSS21/text.html#caps-prop).

The `text-transform` property has been around since CSS2.1, and has wide support in modern browsers. It allows you to change the letter case of any element's text that you select. It has five possible values: `capitalize`, `uppercase`, `lowercase`, `none`, and `inherit`.

The two values I most often use are `uppercase` and `lowercase`. `capitalize` will capitalize all the words in a string of text, which can be handy, but can also capitalize words that don't need to be capitalized (and that, of course, [changes depending on which style guide you want to use](http://grammar.quickanddirtytips.com/capitalizing-titles.aspx)). `uppercase` will set everything in a text string to upper case, while `lowercase`, will, you guessed it, set everything in a text to lower case. Let's have a look.

To use the upper case for an element, we'll use `text-transform: uppercase;` in our style sheet:

```

h2 {
    text-transform: uppercase;
}

```

This will upper-case all `h2` elements on your page, like so:



To use lower case for an element, we'll use `text-transform: lowercase;` in our style sheet:

```

h2 {
    text-transform: lowercase;
}

```

This will make all h2 elements on your page lower-cased, like so:



Of course, it's totally fine to type your text directly in a specific case, whether upper or lower, but I would recommend doing so only if its semantically meaningful to the text itself, and not as a stylistic measure. If you are using a specific case for presentation, save yourself a lot of trouble and just write out the text using normal capitalization. You can then set its style using `text-transform` in your CSS. That way, if you have to change it to something else later, you'll only need to edit one line of CSS—not hundreds in different HTML pages.
