---
author: ammon-shepherd
date: 2019-09-23 14:03:52
layout: post
slug: js-pagination
title: "JS Pagination"
category: blog
tags:
- Architectural History
- code
- tutorial
- web development
crosspost:
  - title: JS Pagination
    url: https://mossiso.com/js-pagination/
---
# JS pagination

Sometimes the seemingly long way round is actually the quickest way. I recently had a project at work that returned a bunch of results from a Solr database. The results are processed by Javascript and written to the page. The original page I was recreating had paginated results (10 results to a page). I thought it would be too much work to get that written into the page, and wanted to just let the JavaScript write all the results to the page. Unfortunately, this meant some queries took up to a full 30 seconds to load! That's an eternity for the web! 


After playing with the settings and different ways of writing the results to the page I finally decided to just implement pagination. I thought it would take forever. It took a few hours...

The trick is to complete the process in two steps. 

Step 1) create a function that returns an array of page numbers based on  the number of results, the desired number of results per page, and the current page being viewed.

Step 2) create a function that turns the array from the previous function into a bunch of links.

Here is the result:

<p class="codepen" data-height="265" data-theme-id="0" data-default-tab="js,result" data-user="ammonshepherd" data-slug-hash="wvwNzyR" style="height: 265px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="JS Pagination">
  <span>See the Pen <a href="https://codepen.io/ammonshepherd/pen/wvwNzyR">
  JS Pagination</a> by Ammon Shepherd (<a href="https://codepen.io/ammonshepherd">@ammonshepherd</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

The GitHub repo is here: [https://github.com/ammonshepherd/js-pagination ](https://github.com/ammonshepherd/js-pagination)


There are two functions, pagination() and buildPagination().

## pagination()

pagination() returns an array of page numbers between one (1) and a given end
number, returning a maximum of 10 numbers, with missing ranges replaced with
elipses (which are included in the maximum return count). A 'current page' is
supplied, and the current page number is surrounded by the two sequential
numbers before and after.

The number of numbers to return is determined by the total number of
results to expect divided by the number of results to display per page.  This
is further affected by the current page displayed. Possible outcomes of the
function could look like so:

```
[1, 2, 3, 4, 5, 6, 7, '...', 44, 45]        // 1-7 is the current page
[1, 2, 3, '...', 7, 8, 9, 10, 11, 12]       // 2 is the current page
[1, 2, '...', 10, 11, 12, '...', 44, 45]    // 8-39 is the current page
[1, 2, '...', 33, 34, 35, 36, 37, 38, 39]   // 33-39 is the current page

```

The function takes three parameters:

- total_results (Required: The total number of results to expect, the end number.)
- start_number (Required: The value/start number of the page currently displayed.)
- results_page (Optional: The number of results to show for each page. Defaults to 10.)

The function returns an array containing the range numbers that can be turned
into links..

This code is modified from this [FreeCodeCamp article](https://www.freecodecamp.org/news/https-medium-com-gladchinda-hacks-for-creating-javascript-arrays-a1b80cb372b/). 


## buildPagination() 

buildPagination() takes in a number (the total number of results returned from
what ever search query you ran), and builds the HTML for the page numbers and
links using the pagination() function.


# Usage

To use these functions, call the buildPagination() function on page load, and
put a script tag calling this file at the bottom of the HTML page. In the code
below, "200" is where you can put the total number of results returned from the
search query.

  ```
  <html>
  <body onload="buildPagination(200);">
  ...
  <script src="pagination.js" type="text/javascript"></script>
  </body>
  </html>
  ```

You can change three variables in the pagination.js file (located at the top of
the file):
- RESULTS_PER_PAGE = how many results per page you want to show. The default is
  ten (10).
- SEARCH_RESULTS = the ID of the HTML element to use for displaying the
  search results. This is only used to display text when zero is passed to
  the buildPagination() function. You should probably have something in place
  to deal with zero results from a search query before you use this function.
- PAGINATE = the ID of the HTML element to use for displaying the
  pagination HTML. 

