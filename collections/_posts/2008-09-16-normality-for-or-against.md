---
author: jean-bauer
date: 2008-09-16 16:07:59+00:00
layout: post
slug: normality-for-or-against
title: 'Normality: For or Against?'
category: blog
tags:
- grad student research
- history
- code
- dataset
- social sciences
---

I’m a historian who is currently designing and/or building four databases.  As I work through the complexities of each project, I’m struck by two thoughts.

First: I’m overworked.

Second: I like the way relational algebra makes me think.

Good database design involves breaking a data set into the smallest viable components and then linking those components back together to facilitate complex analysis.  This process, known as normalization, helps keep the data set free of duplicates and protects the data from being unintentionally deleted or unevenly updated.

As I research merchants in the eighteenth century and how they connected people and empires with far-flung locations and transfered goods and ideas across oceans, I find it helpful to break those multivalent connections into discrete units.  Who wrote to whom?  Who worked for whom?  Who became a diplomat or consul for the United States?  Who recommended him for that position?  And so on.  Each question has become a relationship in my design for the Early American Foreign Service Database (EAFSD), and by linking all this (and more) information together, the EAFSD will track how the U.S. Foreign Service developed over fifty years.  But there is a catch.

When the database is done, I plan on publishing it online so that other researchers can have access to its data.  However, I cannot deny that the EAFSD was designed to answer questions specific to my dissertation.  Other researchers looking at information gathered from the papers of diplomats, consuls, and merchants will (hopefully) want to ask other questions which my database may or not be able to answer.  For example, I only focus on merchants who had a clear connection to the U.S. government (_i.e._, received positions in the Foreign Service), which means that a large segment of the merchant community will not appear in the database.

Along with the completed database I plan on releasing the source code (both for the database itself and the web application that permits the data migrations and the basic query structure) under an open source license, hopefully making it easier for other scholars to create their own relational databases to track social networks and institutional development.  Once those databases are published similar issues will arise.

When a scholar decides to use a relational database in her research, she is making a decision about methodology -- not theory.  A relational database does not dictate what scholars will find in a given data set, but rather shapes their search in ways that need to remain in the forefront of all our minds, even if the methodological discussions get relegated to footnotes or appendices.  If an astronomer has to state the specifications of the telescope along with the data received, a digital humanist should be clear about the choices she made (and why) in designing a database to facilitate her analysis and the analytical limits of the final design.

I became a historian because I see the world as a complex and contingent place that doesn’t respond well to being forced into a constraining model.   While having the EAFSD is a necessary condition of my dissertation it is not a sufficient one.

There are real world ambiguities and unpredictable turns in my subject matter which _should not_ be modeled in a relational data structure.  High on this list are the many mistakes made by early American diplomats: John Adams picking a fight with the French Foreign Minister in the middle of the Revolutionary War (subject of my Master’s Thesis), James Monroe being recalled by a furious George Washington after denouncing (accurate) rumors regarding a new treaty with Great Britain, Thomas Jefferson breaking the Law of Nations to help Lafayette write the Rights of Man and Citizen, the list goes on and on.  On the other hand, while the database also fails to capture the sheer brilliance of Benjamin Franklin it does hint at John Quincy Adams’ compulsive attention to detail.  None of these stories or personalities map into the database, but they are all crucial to understanding how the newly United States interacted with the larger Atlantic World.

Designing the EAFSD has sharpened my historical analysis but narrative prose blurs the edges back into the delightfully abnormal lives of the people I seek to understand. 
