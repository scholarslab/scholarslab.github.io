---
author: brandon-walsh
date: 2025-02-03
layout: post
slug: print-ready-web-cv
title: Print-Ready Web CV
categories:
- Digital Humanities
tags:
- Digital humanities
crosspost:
  - title: Brandon's blog
    url: https://walshbr.com/blog/print-ready-web-cv
---
I keep my running [CV on my website](https://walshbr.com/cv) for a few reasons. It keeps everything in one place. It's handy to point students towards when they have questions about how to list things on their own CV. It lets me pull in some quick stats on my blog posts using Jekyll. But I've always run into problems when it comes time to submit my CV as an actual document. Copying the page over to Microsoft Word brings in all the detritus of my web styling and structure, and I have to dutifully edit those elements out before submission. 

I described this problem to Jeremy Boggs, our Head of R&D, and he immediately suggested that I look into making a print stylesheet for my CV page. I knew you could use CSS to style the ways your web page gets printed, but I'd never actually played around with it before. Now I've got things going such that I have far less to do when I go to submit my CV. This post documents that process. 

The first thing I needed to do was get a way to preview what I was looking at. By default, your developer environment won't render your print styles unless you go to print a page and look at the preview that pops up. I followed [this](https://stackoverflow.com/questions/9519556/faster-way-to-develop-and-test-print-stylesheets-avoid-print-preview-every-time) set of instructions for getting Google Chrome to emulate my print styles in the browser as I worked. 

Now that I can see my work, my first real step is to make a new print stylesheet and link it to my site in the head of my default template. This print stylesheet is fairly specialized to a single page, so I wrap the reference in an if statement so that it is only included on that particular page. 

`_includes/head.html`
```html
{% raw %}{% if page.title == "CV" %}
  <link rel="stylesheet" href="{{ site.baseurl }}/styles/print.css">
{% endif %}{% endraw %}
```

Now that the stylesheet is included, I start to build up a `styles/print.css` file one piece at a time based on the things I want to change. First off was hiding web-only materials like the nav bar and the masthead. 

`styles/print.css`
```css
  /* Hide web-only content  */
  header, nav, h1.page-title, #web-title{
    display: none;
  }
```

But I actually do want some material as a masthead. I implement this by actually having some content on the web that is only rendered to the browser if it is printed. This becomes a part of the masthead, contained in my default layout for my jekyll site.

`_layouts/default.html`
```html
<div class="print-only" id="print-title">Brandon Walsh | walsh.brandon.michael@gmail.com | @walshbr</div>
```

And then it only appears when printed by specifying a print-only class for those elements that I only want when printing.

`styles/print.css`
```css
  .print-only{
    /* Display print-only content */
    display: block;
  }
```

The web version of my CV does not span the whole width of the page, which is good for readability on the web but a problem when printing. So these settings create a more typical one-inch margin for the document. Another interesting issue I ran into was that some printers by default will include metadata - date, page number, time - on the page for printing. The margin settings below cut that off. 

`styles/print.css`
```css
  div.container.content {
    /* normalize content sizing for printing */
    max-width: none !important;
  }

  @page {
    /* hide printer-specific information that would otherwise get added */
    margin:0;
    padding: 1in;
  }
```

And then finally I got down to the actual task of setting up some basic stylings that make it a little less web and a little more print. I switch fonts, change the text size, and revert to default URL text decorations for the sake of the genre. In the past I've found that my link styles, especially, look very strange when copied over to a print document.  

`styles/print.css`
```css
  html, h2, h3, #print-title{
    /* set print-ready font and text size */
      font-family: Georgia, 'Times New Roman', Times, serif; 
      font-size: 12px;
  }

  a{
    /* Normalize URL colors */
      text-decoration: underline;
      color: blue;
  }
```

One stretch goal that I haven't fully implemented: I commonly need a quick way to cut my CV down. There's no good way to do it programmatically with any real level of precision, but Jeremy showed me how to do a rough cut that works well in a pinch. I'm using Jekyll by default, which will give ID's to all of my headers that match the titles. Jeremy showed me how to use CSS selectors to selectively hide whole batches of content based on those ID's. The following CSS would hide all of my service commitments. Not really super useful to do a lot of, but maybe helpful to know about!

`styles/print.css`
```css
/* example for how to hide specific sections */
/* 
h2#professional-service-and-affiliations,
h2#professional-service-and-affiliations+ul,
h3#local-service-washington-and-lee,
h3#local-service-washington-and-lee+ul,
h3#local-service-university-of-virginia+ul{
  display:none;
} */
```

That's it for now. Much more that I could do, but this serves my needs nicely. And here's a quick side-by-side of the first printed page to see how the new print.css sheet stacks up.  

First the original print, which is a pretty close copy of the web version:

![original printed cv](/assets/post-media/print-ready-web-cv/1.jpg)

And now the new one with a print stylesheet incorporated. Much more usable as a CV! I could save it as a PDF to submit. 

![printed cv with a stylesheet - looks much more like a cv!](/assets/post-media/print-ready-web-cv/2.jpg)

I've pasted the full contents of all the relevant files as they stand in case you're interested in replicating.

`_includes/head.html`
```html
{% raw %}{% if page.title == "CV" %}
  <link rel="stylesheet" href="{{ site.baseurl }}/styles/print.css">
{% endif %}{% endraw %}
```

`_layouts/default.html`
```html
<div class="print-only" id="print-title">Brandon Walsh | walsh.brandon.michael@gmail.com | @walshbr</div>
```

`styles/print.css`
```css
@media print {
  
  /* Hide web-only content  */
  header, nav, h1.page-title, #web-title{
    display: none;
  }

  .print-only{
    /* Display print-only content */
    display: block;
  }

  div.container.content {
    /* normalize content sizing for printing */
    max-width: none !important;
  }

  @page {
    /* hide printer-specific information that would otherwise get added */
    margin:0;
    padding: 1in;
  }

  html, h2, h3, #print-title{
    /* set print-ready font and text size */
      font-family: Georgia, 'Times New Roman', Times, serif; 
      font-size: 12px;
  }

  a{
    /* Normalize URL colors */
      text-decoration: underline;
      color: blue;
  }

/* example for how to hide specific sections */
/* 
h2#professional-service-and-affiliations,
h2#professional-service-and-affiliations+ul,
h3#local-service-washington-and-lee,
h3#local-service-washington-and-lee+ul,
h3#local-service-university-of-virginia+ul{
  display:none;
} */

}

```
