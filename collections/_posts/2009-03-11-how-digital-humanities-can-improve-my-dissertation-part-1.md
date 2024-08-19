---
author: matt-munson
date: 2009-03-11 10:10:20+00:00
layout: post
slug: how-digital-humanities-can-improve-my-dissertation-part-1
title: Mining and Mapping Apocalyptic Texts, Part 1
category: essay
tags:
- visualization-and-data-mining
- statistical-analysis
---

I have used computer technology to help my work in biblical interpretation for a while. I learned to do complex digital word searches with the Bibleworks software package early in my graduate career. When I started working at the Scholars’ Lab in the summer of 2006, I was introduced to digital humanities. I found these technologies fascinating. But how, I asked, could they help me interpret ancient religious texts in their original languages? I recently posed this question to some of my colleagues in the Scholars’ Lab and was pleasantly surprised by the answers. In this two-part blog, I will consider these answers in relation to my dissertation, which focuses on several passages in the Apostle Paul that speak of the final fate of humankind. Some of these passages suggest that all people will, in the end, be made right with God. Other passages suggest that some people will be permanently alienated from God. I wish to discover the central kernel of Paul’s thinking about the fate of humankind (called soteriology) that would make both of these statements true. In this first entry, I will focus on how I plan to use text-mining to enhance my ability to compare dozens of Greek, Hebrew, and Latin texts with each other more quickly and more thoroughly than I could manually. The second part will focus on how geographic information systems (GIS) will help me to place Paul’s writings in spatial relationships with other writings of the same time.


Text-mining involves parsing a digital text, inserting the words along with their linguistic features into a database, searching for patterns within the database, and, finally, evaluating the results. In my case, I will use text-mining methodologies to extract linguistic data from the Pauline texts as well as other early Jewish texts that speak of the fate of humankind. This process will be fairly straightforward for the Pauline texts. There are many versions of the Greek text of Paul that have linguistic data attached to the words. One need simply extract this data from the text and insert it into a database. I will use the text of the Bibleworks 6 package as my source for Paul. For other texts, this process will not be as easy. For instance, the Thesaurus Lingua Graecae has a huge collection of Greek texts for the period that interests me. But they have no linguistic data attached to the words. To attach linguistic data to these words, I will need to write a script, probably in PERL, to query the open source parsing engine from the Perseus Project at Tufts University ([www.perseus.tufts.edu](http://www.perseus.tufts.edu/)). I will then insert the results from these queries into the database for that text.




The next step will be to design queries that will find appropriate relationships among the texts. Good methodology requires that I test my queries against a set of texts for which I know the results. I will test my queries on several Greek apocalyptic texts which I have already read carefully, noting the sections that relate closely to Paul. Once I have designed a set of useful queries, I will apply these queries to the databases I created earlier.




The application of these queries should point to numerous texts that I will then manually analyze to determine their meaning and how they relate to the Pauline passages under investigation. If my investigation were purely manual, I would begin by reading the texts in English in order to find promising passages that I would then examine more closely in their original language, whether Greek, Hebrew, or Latin. This digital method, though, will do this first analysis using the original languages. That means that this computerized comparison of the texts in their original languages will find verbal and grammatical similarities that may be obscured or destroyed in translation. In the end, I expect text-mining to return data that would be only partially accessible by manual means.




In my next post, I will consider how another area of digital humanities, geographic information systems, can help me to explore how the Pauline and apocalyptic texts are related spatially, instead of linguistically, to each other.



