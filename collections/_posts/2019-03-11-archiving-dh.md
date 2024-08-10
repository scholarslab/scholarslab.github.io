---
author: 
- Brandon Butler
- ammon-shepherd
- amanda-visconti
- Lauren Work
date: 2019-03-11 15:33:18
layout: post
slug: archiving-dh-part-2-the-problem-in-detail
title: "Archiving DH Part 2: The Problem in Detail"
category: essay
---
![Photo by Hans-Peter Gauster on Unsplash](/assets/post-media/2019-03-08-hans-peter-gauster-252751-unsplash.jpg)

# The Problem in Detail
Trying to make sense of Digital Humanities projects and how to archive and preserve them is a lot like a jumble of puzzle pieces, and no picture to follow. The remaining posts in this series will look at these pieces and offer some ideas on how to put them together. This post will cover some (but definitely not all) of the problems inherent in Digital Humanities projects. These are problems that we have seen in the "wild." These are just a few of the issues that programmers, IT people, Library people, and project leads face when they are planning their projects. Keeping these issues in mind from the start of a project will be helpful later on when question of archiving and preserving come along.

## Changing Technology
The only three sure things in life are death, taxes, and change. Technology loves change. Technology IS change. In so many aspects, this is such a wonderful thing. Except when you try to take a snapshot of that technology for preservation purposes. Then the ever changing technology becomes the enemy.

Several aspects of technology make it really difficult to maintain and archive your typical web-based DH project (really, any DH project). First, is the unending upgrades and versions through which technology advances. As soon as you begin a project using a specific technology stack (stack = all of the software, hardware, etc used to create a DH project), it is out of date the next month, or week, or day. For example, as the Systems Administrator at CHNM, I (Ammon) was in charge of updating our web servers. I wanted our developers to use the latest version of PHP for this new project they were working on. You may have heard of it? Omeka? The old server had PHP version 5.something.very.old. The big problem here was the breaking change that PHP introduced in version 5.3.something.not.as.old. This had something to do with what was called "magic quotes."

![PHP Magic Quotes are Removed from PHP since version 5.4](/assets/post-media/2019-03-08-php-magic-quotes.png)

(from [https://secure.php.net/manual/en/security.magicquotes.what.php ](https://secure.php.net/manual/en/security.magicquotes.what.php))

The details of what "magic quotes" do is unimportant. What was very important, was that all of the projects (mostly websites) that were created before my time there (from 1994-2005) were written with "magic quotes" turned on. But this was determined to be a huge security risk, and as the notice above points out, that feature and ability was deprecated, and finally totally removed from PHP. To make matters worse, new software, like WordPress, were starting to require this newer version of PHP. So if I were to upgrade PHP so we could make new sites, then I would break all of the old sites. The solution in this case, was to purchase new servers to put the new sites on, and leave the old, dangerously insecure PHP on the old servers to host the old sites. So, not really a solution in the long term, but I did successfully punt the issue to the next guy (sorry Roberto).

## Insecure Technology
The second problem with archiving DH projects occurs because the software and frameworks used to build DH projects are inherently insecure. There are always ways to break into software systems, and when this happens, it can wreak havoc on a project. WordPress, for example, has been the recipient of [many a high security risk](https://www.cvedetails.com/vendor/2337/Wordpress.html). The solution for this is vigilantly updating the software each time an update is made available. This is very costly in personnel time, and website up-time. At one point, I went so far as to write my own tool to update the 70+ WordPress installs I (Ammon) managed (this was before wp-cli existed in a usable form). As you can see, keeping software secure and up-to-date is a continual, long-term project. The opposite of "archived" and "preserved."


## Unsupported Technology
Another issue that DH projects face, is the dependence on software that is undependable. All software is written by people. People who are employed by a business or are writing the code out of the goodness of their heart, or some other reason. When businesses fail, interests wain, or time is scarce, then software projects languish. 

For a time, and arguably still, the greatest idea for text-based projects was to use XML. Several flavors of XML were created to address specific desires. TEI was developed to focus on prose, MEI and MusicXML for music, and BeerXML for the obvious [https://en.wikipedia.org/wiki/List_of_XML_markup_languages ](https://en.wikipedia.org/wiki/List_of_XML_markup_languages). XML was taken even further and a programming language was built around it, and from there a software framework to build, store and deliver websites based on XML, Cocoon, [http://cocoon.apache.org/ ](http://cocoon.apache.org/). Taken up by the Apache Software foundation as early as 1999, it seemed that Cocoon was a software that would enjoy a long life. A look at the [developer email](http://mail-archives.apache.org/mod_mbox/cocoon-dev/201902.mbox/browser) list for Cocoon tells the story of the rise, glory days, and fade of Cocoon better than words: 

![The declining number of posts in the message board indicate the decline in development and interest in the project](/assets/post-media/2019-03-08-mail-archives-cocoon.png)

## Trendy Tech
Software developers seem to be like small children (I, Ammon, am one, and I'm exactly like my own small children). Easily distracted by moving and shiny things. We all love our new technology, right? Software is the same. The old software goes out of favor as new techniques, technologies and abstractions are created. One of the neatest ways to see the change in software is to look at the programming languages of choice. Several companies hold an annual survey about programming language usage and other interesting facts about programmers. GitHub offers a [good overview](https://octoverse.github.com/) of who is popular on their platform. 


![According to GitHub, Javascript is now the most popular programming language, for the past four years.](/assets/post-media/2019-03-08-github-top-programming-languages.png)

And StackOverflow offers a [comprehensive survey of programmers](https://insights.stackoverflow.com/survey/), from favorite languages to how much time they spend outside. 

![According to StackOverflow, Javascript is now the most popular programming language.](/assets/post-media/2019-03-08-stackoverflow-top-programming-languages.png)


Once the bain of web developers (it was only for showing pop up ads and other trivial tricks), JavaScript has become the most popular programming language in the world. Ever changing technology stacks mean an increased knowledge base is required to get a project into a state for archiving. Each project that is different than the others means more work figuring out how that particular project can be archived. 

## Knowledge Dissemination
It should be noted here that the technological problems with planning and preserving DH projects are also closely bound to issues around human labor and sustainability, precarity of funding and capital as well as understanding and implementation of what "preservation" or "access" may mean to different groups across varying contexts and across the life of a project. It also concerns changes in scholarship and publication, as well as the implications of copyright, ownership, digital preservation, and fair use.

As a community, we've been discussing, building on, and trying to frame out both the problem and the solutions around these issues for quite some time. Project Endings, from the University of Victoria, has compiled a [great bibliography](https://projectendings.github.io/resources/) that demonstrates some of the DH and library/preservation community interest and scholarship around sustainability since the 1990s. We even took a strong run at attempting to address the issues around sustaining DH projects here at UVA over *15 years ago* with the [Sustaining Digital Scholarship project.](https://dcs.library.virginia.edu/files/2012/05/SDS_FInalReport2003.pdf)
It would seem that as a community over the years, we seem to have identified the broad patterns around the dependencies and cycles of DH projects fairly well. So why is this still such a difficult problem? 

The University of Pittsburgh was awarded an NEH grant to put together a sustainability roadmap for a well used, but aged website. One deliverable of the grant was to produce a template from their work to be used by others. "The final goal of the project was to create a digital sustainability roadmap for other developers and curators of digital projects to follow based on what we had discovered.… By taking your project team through the modules in each of the units, you will be able to produce an effective ongoing sustainability strategy, or to assess the effectiveness of your current strategy." ([https://sites.haa.pitt.edu/sustainabilityroadmap/about/ ](https://sites.haa.pitt.edu/sustainabilityroadmap/about/))

As a preservationist (Lauren here, hello!) concerned with maintenance and access to materials and scholarship over time, I've seen this problem (and some potential solutions) play out from my perspective in ways that we'll discuss more fully over the next two posts that touch on why this is still a difficult issue. 

But for now, for the problem in detail, how we try to present technical and administrative digital preservation pathways often circles around how we frame and receive (or don't receive) answers to central questions like:

- What an  "active" versus "finished" or "archival" project looks like
- How we address ownership (including copyright and licensing), authorship, and responsibility, especially for collaborative projects
- What the Library or Scholars' Lab role is in publishing 
- When in the life cycle of scholarship ideas like preservation, sustainability, and portability are introduced
- How we frame discussions and expectations of authentic access and use over time for digital scholarship (aka nothing can be a website forever without maintenance)
- Plus many technological and resourcing questions that surround security, storage, labor, documentation, description, and more. ([MITH has some great blog posts](https://mith.umd.edu/stewarding-digital-humanities-work-on-the-web-at-mith/) about these topics as well) 


## Humans underlie technology
The human labor underlying technology is not easily sustainable; even when you have folks committed to the work, the kind and amount of labor required to maintain and update a project can shift away from what someone is willing or able to support, and external pressures (job changes, family, other projects, aging, retirement) also arise. I (Amanda, hi!) am particularly interested in how technical sustainability is impacted by the human labor of moderating online spaces, from my experiences moderating both my digital dissertation project [Infinite Ulysses](http://infiniteulysses.com/) (a social platform for annotating/commenting on James Joyce's novel) and the [Digital Humanities Slack](http://tinyurl.com/dhslack) I started (a set of themed chat rooms with over 2,000 digital humanist members; co-moderated by Alan G. Pike, Sam Abrams, Alex Gil, Brandon Walsh, Ed Summers, Paige C. Morgan, Jeremy Boggs, Eleanor Dickson, Liz Rodrigues, and Erin Pappas). 

Moderation is both the work of controlling spam and intentional harassment in a community, as well as designing and implementing practices such as a code of conduct to both address the negative and encourage positive community behaviors. It's been exhilarating using technology to collaborate with folks I don't know and create online communities together with them: if you've taught DH in the classroom, think of the students who respond along the lines of "DH is exactly what I do or want to do, I just didn't have a term for it before" but expand them to include folks from all over the world and more diverse walks of life. But this work has also been a significant source of anxiety, balancing my responsibility to the community with my desire to help folks learn to be more positive influences on that community, and needing to enforce the line after which a community member cannot healthfully continue as a community member. That stress was largely why I moved Infinite Ulysses from a Drupal site allowing commenting, to a static archived version without commenting. (Relatedly, I've [just blogged](https://scholarslab.org/blog/moderation-running-dh-online-communities) on some of the work I've been doing to make online moderation of academic communities more sustainable!)

## Complex Ownership (and Missing Owners)
DH projects are the kinds of things that copyright protects—they are works of original creative expression, including textual works, audiovisual works, databases, and the like. Preserving a DH project will require activities regulated by copyright—reproducing the project (to migrate it to new servers, e.g.), distributing, displaying, or performing it to the public (by publishing it online), and so on. So, an institution that wants to archive DH projects needs to navigate copyright law. 

I (Brandon, hi!) yield to no one on the scope of activity that libraries and archives can do without permission, thanks to both the general fair use right and the specific exceptions favoring libraries and archives. However, it never hurts to get permission when you can. A few things about DH projects can make getting permission a significant challenge. University policy (here's [UVA's](https://uvapolicy.virginia.edu/policy/RES-001)) typically cedes ownership of scholarly IP to the creators, whether they are faculty or students. Copyright ownership in these projects can be quite complex given how many people contribute copyright-eligible work to them, and the nature of the academy means many (sometimes all) possible owners/authors may move on to different institutions (and even different careers) over time. Defining a project's "authors" versus supporters and collaborators is also difficult. All of this makes obtaining permission difficult. (Solutions, which we will discuss at length in a future post, include securing permissions up front, ASAP, or better yet, assigning an open license to every aspect of the project so that anyone, including archives, will be free to preserve the work.)

The following contributed to this article: 
- [Brandon Butler](http://thetaper.library.virginia.edu/)
- Ammon Shepherd
- Amanda Visconti
- Lauren Work

