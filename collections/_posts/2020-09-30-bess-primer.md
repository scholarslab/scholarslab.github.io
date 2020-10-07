---
author: Lloyd Sy
date: 2020-09-30
layout: post
slug: bess-primer
title: "BESS: A Very Short Primer"
categories:
- Digital Humanities
- Research and Development
- Grad Student Research
---

*Alice was beginning to get very tired of sitting by her sister on the bank, and of having nothing to do: once or twice she had peeped into the book her sister was reading, but it had no pictures or conversations in it, “and what is the use of a book,” thought Alice “without pictures or conversations?”*

As Alice seemed to know, reading involves noticing recurrent types—motifs, devices, themes, moments, generic conventions—that we recognize, name, and puzzle over. Apprehending the arrangement of these elements within a text unlocks something of that piece’s structure. Locating these elements across different texts can be the beginning of unexpected comminglings, exhilarating comparisons.

This blog post describes one tool used for such purposes—it will explain the purpose and application of Biographical Elements and Structure Schema (BESS), a stand-aside XML schema used by researchers on our digital project, Collective Biographies of Women (CBW). It hopes to help elucidate some of the research findings in other blog posts from our team by stepping through the methods of BESS and clearing up some of the project-specific vocabulary associated with our investigative procedures.

CBW holds digitized copies—encoded through TEI standards—of many of the books in its exhaustive bibliography. BESS is used to standardize our analysis of these texts. The schema involves identifying elements from a controlled vocabulary in several categories of markup, by name Stage of Life, Event, Discourse, Topos, and Persona Description. Briefly, our tagging relates to the chronology and real-world events of the subject’s (persona’s) life; narration and style (Discourse); typical scenarios and implied values (Topos); and passages depicting the body and character of the persona (Persona Description). More expansive definitions of each of these element types, along with a list of the controlled vocabulary we use for instances of these elements, can be found in [this natural language guide]. 

BESS is tagged at the paragraph level rather than the sentence, word, chapter, or book level. We’ve found that this level of analysis lends itself well to a relatively modular understanding of texts—Mid-Range Reading, [as we call it]. Important to mid-range reading, as well, is that the BESS analyses are kept in separate files from the TEI encodings of the digital texts—BESS, as mentioned above, is a stand-aside schema. Here’s a sample BESS file, created by CBW research assistant Zaina Ujayli (the author of this blog post) for a biography of the Bengali poet and translator Toru Dutt from *[Sketches of Some Distinguished Indian Women]* (1891):

![Sample of header for BESS file](https://lh3.googleusercontent.com/ysMLhq9DnMlN1mdcU9loN_11r9-IgXd9tnRe2S3KXmL_4sVpMMAgVsRPP1tr_uhAaPK7ZOeP9NY8pBvTZZdXWJc3hxzgQ6uj61HmI5BX)

Here one sees the typical structure of the beginning of a BESS markup file: a collection of metadata of the analyzed biography at the top, and then a quick dive into the tagging of Stage of Life, Events, etc. On its own, this analysis is rather abstract: to get a full sense of the biography’s chronological structure, one would need to read the paragraphs numbered 1, 2, and 3-11 in the Stage of Life elements in this image. Yet the abstraction is intentional. Ensuring that every BESS file takes on the same format (a few lines of metadata followed by standardized analyses sections) emphasizes the markups as the units of comparative analysis (computerized or human). Though these markups are rooted in the careful combing through a chapter, our interpretations informed by textual data—examples of which are in the blog posts from our research assistants—revolve around the markup files.

As an example of thorough BESSing for a paragraph full of each of the aforementioned categories, here is paragraph 12 from a biography of George Eliot that appears in George Barnett Smith’s *[Women of Renown: Nineteenth Century Studies]* (1893):

![BESS Viewer for sample TEI and BESS for one paragraph](https://lh6.googleusercontent.com/wDyhF8XsMt_1D6-aGzJVLwejWPcBfLRNIomylEexZFuTW7puMevovtDTJkC0iYae6Tjkl_Fq9-WBKXoQkvKz-GebnvTq-TQs2qNHY3RXhxhJ9NhxE0H8_3IFLkneAXFrU3m8JsjP)

Every BESS file undergoes two stages: an initial go-through, and a follow-up vetting (RAs Kaylee Lamb and Mikki Stacey performed those tasks, respectively, for this biography). After these two stages, a BESS file receives its most polished designation: “complete and vetted.” Yet further readings and edits are, of course, always possible, and since I have never read this particular biography, I think recording my reactions to Kaylee and Mikki’s BESS could be valuable in displaying the kinds of questions BESS analysis can produce.

I notice, first of all, the strange Stage of Life designation—strange because this piece is 54 paragraphs long, and we have reached the “end” Stage of Life only 12 paragraphs in. Yet a closer look shows why: the vast majority of this “biography” is, in fact, a series of literary analyses of her novels. We have, then, a rather condensed biography of Eliot just over 20% of the way through the chapter. I wonder if this strange compression occurs in other biographies of Eliot (an answerable question, as we have BESS for 10 Eliot biographies), or in other biographies from this author? Overall, I get a sense of randomness from this paragraph—the sentences sometimes proceed without cohesion, producing strange juxtapositions that intrigue me: how often are a persona’s interactions with multiple famous men stuck together in one paragraph? What kinds of persona descriptions do we get in paragraphs of this type—are they similar to this one, in which “quick in response” and “willful or stubborn” suggesting a headstrong, witty woman, perhaps the kind depicted having notable conversations with notable men? The initial narratorial intrusion—marked as discourse “direct address, use of I or one”—is a fascinating, but rather common moment in our BESS analyses (a quick search indicates 537 occurrences of that term across our roughly 400 analyses). How often does it show up alongside the other discourse term “emphasis in typeface, punctuation”? These are the seeds of further analysis—all brought about by a quick human read-through of BESS—that can be queried upon further through computational searching and visual representation. 

Good examples of analyses more fully fleshed-out than my cursory ones can be found in our team’s case study blogs. BESS’s coverage is wide, and our research group’s untiring work over the years has accumulated a critical mass of carefully-assembled analyses ripe for interrogation. By focusing on a particular woman, a set of related texts, or a cohort of personas, researchers like those on our team can wield BESS to unveil intertextual, trans-temporal patterns in how women’s lives have been narrated and constructed.



[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)

   [this natural language guide]: <http://cbw.iath.virginia.edu/exist/cbw/BESSdoc#events>
   [as we call it]: <https://www.mlajournals.org/doi/abs/10.1632/pmla.2017.132.3.620>
   [Sketches of Some Distinguished Indian Women]: <http://cbw.iath.virginia.edu/books_display.php?id=1480>
   [Women of Renown: Nineteenth Century Studies]: <http://cbw.iath.virginia.edu/books_display.php?id=2078>
   
