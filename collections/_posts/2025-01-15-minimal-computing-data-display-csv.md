---
author: amanda-visconti
date: 2025-01-15
layout: post
slug: minimal-computing-data-display-csv
title: "A #mincomp method for data display: CSV to pretty webpage"
summary: "Jekyll lets you plop a spreadsheet file into a folder, and easily pulls bits of its data to display on a webpage. With cool letterpress & CV/resume examples of how this is useful!"
category: essay
tags:
- mincomp
- bibliography
- professional-development
- code
- web-development
- dataset
- jekyll
- research-and-development
- tutorial-adjacent 
---

*(Note: Brandon is going to blog about related work! Will link here once that's live.)*

This is a post to tell yall about a neat little web development thing that's allowed me to easily make (and keep updated!) nifty things displaying kinds of data related to both professional development (easy CV webpage and printable format generation!) and bibliography/book arts (an online type speciment book, based on an easily-updatable Gsheet backend!). If you aren't interested in the code, do just skim to see the photos showing the neat webpage things this can make.

![Screenshot of a type specimen webpage created with Jekyll and a CSV of data](/assets/post-media/2025-01-15-minimal-computing-data-display-csv/fig1-lpgrid1.png)  
*Figure 1: Screenshot of a type specimen webpage created with Jekyll and a CSV of data.*

![Screenshot of a CV webpage created with Jekyll and a CSV of data](/assets/post-media/2025-01-15-minimal-computing-data-display-csv/fig2-cvfullwebpage.png)  
*Figure 2: Screenshot of a CV webpage created with Jekyll and a CSV of data.*

## Jekyll (skip this section if you know what Jekyll is)
[Jekyll](https://jekyllrb.com/) is a tool for making websites that sit in a middle ground between using a complex tool like WordPress or Drupal (a content management system, aka CMS) or completely coding each page of your website in HTML by hand, and I think easier to create and manage than either extreme. It's set up to follow principles of "minimal computing" (aka #mincomp), which is a movement toward making technical things more manageably scoped with an emphasis on accessibility for various meanings of that. For example, using website development tools that keep the size of your website files small lets folks with slow internet still access your site.

If you want to know more about Jekyll, I've written peer-reviewed pieces on the what, why, and how to learn to [make your own Jekyll-generated DH websites](https://programminghistorian.org/en/lessons/building-static-sites-with-jekyll-github-pages)—suitable for folks with no previous web development experience!—as well as (with co-author [Brandon Walsh](/people/brandon-walsh)) how to turn that into a [collaborative research blog with a review workflow](https://programminghistorian.org/en/lessons/collaborative-blog-with-jekyll-github) (like how ScholarsLab.org manages its blog posts). Basically, Jekyll requires some webpage handcoding, but:  
* takes care of automating bits that you want to use across your website so you don't have to paste/code them on every page (e.g. you header menu)  
* lets you reuse and display pieces of text (e.g. blog posts, events info, projects) easily across the website (like how ScholarsLab.org has interlinked blog posts, author info, people bio pages, and project pages linking out to people and blog posts involved with that project)

## DATA PLOP TIME
The cool Jekyll thing I've been enjoying recently is that you can easily make webpages doing things with info from a spreadsheet. I am vaguely aware that may not sound riveting to some people, so let me give you examples of specific uses:  
* I manage my CV info in a spreadsheet (a Gsheet, so I have browser access anywhere), with a row per CV item (e.g. invited talk, published article)
* I also keep a record of the letterpress type and cuts (letterpress illustrations) owned by SLab and by me in a Gsheet

I periodically export these Gsheets as a CSV file, and plop the CSV file into a /_data folder in a Jekyll site I've created. Then, I've coded webpages to pull from those spreadsheets and display that info. 

![Screenshot of my letterpress specimen Gsheet](/assets/post-media/2025-01-15-minimal-computing-data-display-csv/fig3-lpgsheet.png)  
*Figure 3: Screenshot of my letterpress specimen Gsheet*

## Data Plop Op #1: Online Letterpress Type Specimen Book
You don't need to understand the code in the screenshot below; just skim it, and then I'll explain:

![Screenshot of some of the code pulling my letterpress Gsheet data into my Jekyll webpage](/assets/post-media/2025-01-15-minimal-computing-data-display-csv/fig4-lpcode1.png)  
*Figure 4: Screenshot of some of the code pulling my letterpress Gsheet data into my Jekyll webpage*

I include this screenshot to show what's involved to code a webpage that displays data from a CSV. What this shows is how I'm able to call a particular spreadsheet column's data by just typing "{{ row.column-name-in-CSV }}", rather than pasting in the actual contents of the spreadsheet! LOTS of time saved, and when I edit the spreadsheet to add more rows of data, I just need to re-export the CSV and the website automatically updates to include those edits. For example, in the above screenshot, my CSV has a column that records whether a set of letterpress type is "type high" or not (type high = .918", the standard height that lets you letterpress print more easily with different typefaces in one printing, or use presses that are set to a fixed height). In the code, I just place "{{ row.TypeHigh }}" where I want it in the webpage; you can see I've styled it to be part of a bullet list (using the "<li>" tag that creates lists). 

In the screenshot, I also use some basic logic to display different emoji, depending on what's in one of the CSV columns. My "uppercase" column says whether a set of letterpress type includes uppercase letters or not. My code pulls that column ("{{ row.Upper-case }}") and checks whether a given row (i.e. set of letterpress type or cut) says Uppercase = yes or no; then displays an emoji checkmark instead of "yes", and emoji red X instead of "no".

Here's how one CSV line displayed by my specimen book webpage looks (I haven't finished styling it, so it doesn't look shiny and isn't yet live on my very drafty [book arts website](https://amandavisconti.github.io/bookarts/)):

![Screenshot of a webpage displaying letterpress Gsheet data in a nicely designed grid of boxes](/assets/post-media/2025-01-15-minimal-computing-data-display-csv/fig5-lpgrid2.png)

And I was also able to code a table version, pulling from the same data:

![Screenshot of a webpage displaying letterpress Gsheet data in a nicely designed table format](/assets/post-media/2025-01-15-minimal-computing-data-display-csv/fig6-lptable.png)

If the code discussion is confusing, the main takeaway is that this method lets you 
1. manage data that's easier to manage in a spreadsheet, in a spreadsheet instead of coded in a webpage file; and 
2. easily display stuff from that spreadsheet, without needing to make a copy of the data that could become disjoint from the spreadsheet if you forget to update both exactly the same.

## Data Plop Op #2: Keeping your CV updated
I used to manage my CV/resume as Google Docs, but that quickly turned into a dozen GDocs all with different info from different ways I'd edited what I included for different CV-needing opportunities. When I had a new piece of scholarship to add, it wasn't clear which GDoc to add it to, or how to make sure CV items I'd dropped from one CV (e.g. because it needed to focus on teaching experience, so I'd dropped some less-applicable coding experiences from it) didn't get forgotten when I made a CV that should include them.

UGH. 

A happy solution: I have 1 CV Gsheet, with each row representing a "CV line"/something I've done: 

![Screenshot of a Gsheet containing CV data](/assets/post-media/2025-01-15-minimal-computing-data-display-csv/fig7-cvgsheet.png)

I periodically export that CSV and plop it into a Jekyll site folder. Now, I can do 2 cool things: the first is the same as the letterpress specimen book, just styling and displaying Gsheet data on the web. This lets me have both webpages showing a full version of my CV, and a short version of my CV, and theoretically other pages (e.g. code a page to display a CV that only includes xyz categories):

![Screenshot of a webpage displaying a CV](/assets/post-media/2025-01-15-minimal-computing-data-display-csv/fig8-fullcvwebpage.png)

And! I've also coded a printable CV. This uses a separate CSS stylesheet that fits how I want a printed CV to look different from a website, e.g. don't break up a CV line item between two pages, don't include the website menu/logo/footer. Same text as above, styled for printing:

![Screenshot of a webpage displaying a CV, with styling that looks like it would print to make a nice-looking printed CV](/assets/post-media/2025-01-15-minimal-computing-data-display-csv/fig9-printablecv.png)

When I need a whittled down CV that fits a page limit, or that just shows my experience in one area and not others I'm skilled in, I can just make a CSV deleting the unneeded lines—my spreadsheet ahs category and subcategory columns making it easy to sort these, and also to tag lines that could appear in different sections depending on CV use (e.g. sometimes a DH project goes under a peer-reviewed publication section, or sometimes it goes under a coding section as I want my publication section to only include longform writing). But I add new lines always to the same core Gsheet, so I don't get confused about what I've remembered to record for future CV inclusion where.

I currently don't have this CV website online—I just run it locally when I need to generate a printable CV. But I'll be adding it to [my professional site](https://amandavisconti.com) once I have a bit more time to finish polishing the styling!

## In conclusion
Jekyll + CSV files =  

![Screenshot of a letterpress cut consisting of a repeating row of 5 images; the image that repeats is a hand giving a thumbs-up next to the text "way to go!"](/assets/post-media/2025-01-15-minimal-computing-data-display-csv/fig10-waytogo.png)  

*(One of the letterpress cuts recorded by my specimen book Gsheet/webpage, as discussed above!)*