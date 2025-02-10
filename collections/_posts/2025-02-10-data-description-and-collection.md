---
author: brandon-walsh
date: 2025-02-10
layout: post
slug: data-description-and-collection
title: Data Description and Collection
categories:
- Digital Humanities
tags:
- Digital humanities
crosspost:
  - title: Brandon's blog
    url: https://walshbr.com/blog/data-description-and-collection
---
I'm realizing that if I don't start combining things I will only ever blog about my class, so here I'm collecting notes on the last two weeks of "Data for the Rest of Us" on data description and collection into a single post. We got into the first real technical skills for the course as the students built out their understanding of the data production pipeline. The goal is for them to build datasets based around their own interests, and we took some real steps in that direction with these units.

We had previously developed a [working definition of data](https://walshbr.com/blog/is-it-data/), so we began our session on description by reviewing it briefly before quickly introducing metadata. We focused on its use: confusingly, metadata is often called data about data, but it's more accurately thought of as data attached to other data that gives context, facilitates discovery, and enables analysis. We got to these topics by way of metadata in everyday life. We talked about the metadata categories used on driver's licenses and by online booksellers to facilitate identification and search. And then we made our way to the Netflix page for a popular movie to show how fuzzy things can get. I pointed out the various objective, quantifiable data (release date, length) and asked the students to discuss the other kinds of qualitative data on the page. We discussed how the genre categories are often a combination of algorithmically generated and hand-selected tags. We talked about controlled vocabulary, introduced the concept of a folksonomy, and discussed the pros and cons of each. Relevant examples were hashtags on Twitter and shelving categories on Goodreads. We ended by discussing metadata standards with a particular focus on Dublin Core.

Then we moved to the actual main activity for the day that actually asked the students to practice creating descriptive metadata. I set out three stacks of materials and asked them in groups to create a spreadsheet describing them. Each set of materials had a few types of items:

* A set of books that were easy to describe
* A zine
* A book by George Eliot
* A book by Haruki Murakami (to introduce concepts of translation)
* One of a handful of especially challenging objects: 
  * a CD of regional GIS information
  * the deck-of-cards novel [Riding SideSaddle](https://www.miriamsuzanne.com/books/sidesaddle/) by Miriam Suzanne
  * the [Surviving Design Projects](https://www.thegamecrafter.com/games/surviving-design-projects-v2) deck

I had the students go through and describe their objects in groups using Dublin Core, fielded questions as they came up, and then rotated the unusual objects so that each group had seen them all. I periodically asked discoverability questions that prompted the students to rethink how they were organizing their data such as "which of you has a book by Mary Ann Evans?" The answer, of course, is that they all had a book by George Eliot. We talked about where that information should go in their dataset and discussed the individual choices made by different groups to solve these problems. We then touched on *Riding SideSaddle* specifically, which gave every group difficulty. Was the novel a genre? A format? A fuzzy concept? Their homework to pull all this together by using Dublin Core to create a small dataset that described 10 different examples of an interest of theirs. 

The following class was about data collection, a topic I was especially excited about. We talked broadly about why we want to gather that in the first place:

* It's not being done!
* To make the world better
* To make something you care about last
* Because otherwise someone else will do it instead/in spite of you

And then we discussed how to do so: 

* Surveys
* Crowdsourcing
* Web scraping
* APIs
* Ethics questions and IRB

Throughout, my main takeaway was that there is a wealth of stuff out there not being gathered. Any person can take on the task of gathering ephemeral content, sustaining, and analyzing it. But we have to be careful, ethical, and thoughtful about how we do so. 

The centerpiece of the class was a workshop on webscraping as a method for collecting web data. I love teaching students how to scrape because I still remember how earth shattering it felt to learn how to do for the first time. So much stuff out there! And you can reach out to touch and handle it! I don't assume any programming knowledge in the course, so I looked around for point-and-click scraping tools that might work for a one-off workshop. I landed on [webscraper.io](https://webscraper.io/), a freemium tool that runs as an extension in Chrome. It's very slick and powerful for this sort of sandbox work. The free version runs locally in your browser, so not good for full-on, large-scale work. But it requires very little technical knowledge, which made it work well for my purposes. I walked the students through how to scrape the [Scholars' Lab blog](https://scholarslab.lib.virginia.edu/blog/), and then I gave them a few other sites to practice with:

* [https://books.toscrape.com/](https://books.toscrape.com/)
* [https://quotes.toscrape.com/](https://quotes.toscrape.com/)
* [https://webscraper.io/test-sites](https://webscraper.io/test-sites)

Their homework was to scrape [another sandbox example](https://www.scrapethissite.com/pages/simple/) and come up with ideas for real scraping projects. They've done great work with these scaffolding assignments that are building towards pitches for their final projects, and I'm excited to see where they go. 

A few other reflections: 

* I keep having the students make spreadsheets to work with, and every time the students lose five minutes at the beginning of each activity as they create a blank spreadsheet and share their email addresses with each other. I should really create some blank spreadsheets ahead of time for them to reuse. It's a small thing, but a few minutes each class really add up. And it often feels like the activities have a slow burn to really get going as the students start out engaging in tedious housekeeping.
* One small thing I've been interested in this semester: everyone in the class is majoring or minoring in STEM in some way. I'm finding that I have to recalibrate a lot of my expectations. For example, my own background as a teacher of literature makes me want to gear everything towards discussion in a way that feels unusual to the students. But the students are excelling with the hands-on activities and technical work. I'm finding that I need to lecture more than normal, but also that I can go deeper on some of the technical questions than I might otherwise. 

As always, the slide decks I've put together are all available on [the course website](https://walshbr.com/data-for-the-rest-of-us). 
