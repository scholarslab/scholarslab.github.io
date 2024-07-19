---
author: chris-whitehead
date: 2018-10-30 07:53:28+00:00
layout: post
slug: string-theory-or-lets-explore-social-networks-with-string
title: 'String Theory, or: Let''s Explore Social Networks with String!'
category: blog
tags:
- grad student research
- wlu collab
- visualization
---

For the last few weeks, the Praxis Fellows have been workshopping workshops designed to render the digital humanities methods we use in our own research accessible (and useful) to undergraduates. If that sounds meta, it's because it is! But the process has also helped distill some interesting digital humanities methods into their fundamental concepts. In this blog post, I will share the outline of an analog workshop to help convey the basics of social network analysis to undergraduates.

By the end of the workshop, the seminar room should look something like this:

![](http://static.scholarslab.org/wp-content/uploads/2018/10/Holmes-String-300x219.jpg)  
Photo from "Sherlock Holmes: A Game of Shadows" (2011)

And students should look more or less like this:

![](http://static.scholarslab.org/wp-content/uploads/2018/10/Pepe-Silvia-300x225.jpg)  
Photo from "It's Always Sunny in Philadelphia"

Because, friends, we're examining social network analysis. With string!

But first, some background and caveats. I am not an expert on social network theory. I have included some links at the bottom of the page for those interested in getting into the nuts and bolts of social network analysis. As a PhD candidate in the history of Native peoples, I never expected to incorporate digital humanities methods into my own research. However, as my dissertation came to focus on the kinship ties binding (and separating) various Native and European peoples living in seventeenth- and eighteenth- century New France, New England, and New York, my research has benefited from social network analysis. As I detail below, one of this workshop's goals is to encourage students to think about what sorts of research questions social network analysis can help them answer.


#### **Goal and Scope**


By the end of this workshop, students will understand the concepts of social networks and social network analysis:




  1. A **_social network_** comprises all the connections (**_edges_**) between all the actors (_**nodes**_) in a community


  2. We conduct **_social network analysis_** to understand the patterns underlying the network


Specifically, students will learn the concepts of the following analyses:


  1.  _**Network Density**_: In concept, the denser the network, the more people who are connected to each other. Undergrads would be too young for the reference, but the social network of the bar in "Cheers" would be about as dense as they come, because everyone knows everyone. As an actual calculation, network density = connections/possible connections.


  2. _**Betweenness Centrality**_: This is a key measure of influential nodes within the network. Rather than merely finding the person with the most number of connections, nodes with high betweenness centrality are those that act as the shortest connection point between two other nodes.


  3. _**Modularity**_: Networks can consist of linked sub-networks. Depending on the research question a student seeks to answer, they might want to understand why sub-networks form and the attributes of those nodes linking them together in the larger network.


Students will also reflect on whether social network analysis is appropriate to help them achieve their research goals.


#### **Setting, Scale, Materials, and Adaptability**


The ideal setting for this workshop would be an undergraduate seminar of 15-20 students who meet around a conference table. As detailed below (and hinted at above), we will map connections between students using yarn/string. Things might start getting unruly with more than 20 students. And by gathering around a conference table, each student could see the entire network captured through the yarn connections.

To conduct this workshop, the presenter will need the following:




  1. String (cut into various lengths two to ten feet long)


  2. Yarn (cut into various lengths two to ten feet long)


  3. Rope (cut into various lengths two to ten feet long)


  4. Masking or duct tape


(Make sure the string, yarn, and rope each have a different thickness that is obvious to the naked eye.)

I envision the following workshop taking between 60-75 minutes to complete. However, it is possible to adapt the workshop to fill more or less time by the number of examples pursued for each analysis. Furthermore, the presenter could augment the final part of the workshop, "Applications," with examples from their own work.

![](http://static.scholarslab.org/wp-content/uploads/2018/10/kitten-playing-with-red-yarn-300x189.jpg)  
Photo from playrightmeow.com


#### **Now...Time to Play with Yarn**


Begin by having students construct the social network. Place the masking/duct tape and various lengths of string, yarn, and rope in the center of the conference table and give students a vague instruction such as, "use these materials to map the social network in this seminar." Proceeding with only this vague instruction, students will hopefully grapple with some early stumbling blocks: What constitutes a connection between two people? Are all connections equal? Hey, Sharon is out sick today...should we somehow include her in this analysis, or proceed without her? What's the deal with the various thicknesses of the materials (string, yarn, rope)? If the students proceed without asking these questions, inquire what implicit assumptions their actions follow.

After a few minutes of the students identifying and working through these problems without any guidance from the instructor, interject and have a group discussion to standardize **_edge weights_**. In other words, determine as a class the criteria for weak (string), medium (yarn), and strong (rope) connections with people. Allow flexibility for how students want to define strength of ties. But some ideas are: weak ties exist between people who have had one-on-one conversations before and who might say a quick "hello" if they passed each other in the dining hall; medium ties exist between people who spend time together socially or have texted each other during the last two weeks; strong ties exist between people who consider each other trusted friends. Spend a few minutes reflecting on why agreeing on these criteria might prove vital in future analysis. Then, instruct the students to use the standardized edge weights to map the social network. (Remember to encourage them to use the tape to secure the connections.)

With the social network taped down to the table, ask students about their preliminary observations. Does the social network look like what they would expect? If not, what is surprising? Does seeing the web of string, yarn, and ropes raise any questions for the students? Allow some flexibility to raise questions and discuss potential ideas before moving on to the analysis segment of the workshop.

![](http://static.scholarslab.org/wp-content/uploads/2018/10/powers.jpeg)


#### **Social Network Analysis**


Ask the students if they think the social network is **_dense_**. What might we mean by that term? What observations lead them to their conclusion about the network's density? After some initial reflections from the students, prompt them to a more exact definition of network density. How many connections are there in network? How many connections were possible? Use these to calculate the density. Ask the students whether that number clarifies things, makes them more confusing, or is essentially arbitrary. Ask students what, as a concept, density tells us about the network. Why might this be a useful analysis to run on a network?

Next, have students take a few minutes to identify all those people in the network with whom they have NO connection. Give them the following scenario: you need the phone number for each person with whom you have no connection. Using only your existing network, how would you get those phone numbers? (Note: don't actually collect phone numbers.) Have students write down the path they would follow to retrieve each number. As a group, discuss how students went about finding the path to the missing nodes. Why did they select the nodes they did? What quality or qualities did those nodes have that others lacked? Students likely implicitly pursued the shortest path to the nodes with whom they weren't connected. They likely also found node(s) connected by the strongest edge weight. Make explicit these internal judgments that students made. Define _**betweenness centrality**_ (see above). As a group, see if there are a few people who have high betweenness centrality. Discuss why this might be an important metric for researchers to collect. What sorts of research questions could it help answer? How does betweenness centrality differ from having the most connections?

As a group, see if there are subnetworks that form. What do these subnetworks look like? What judgments do we need to make to call something a subnetwork? What additional information would we need to collect to understand the patterns underlying the formation of these subnetworks? Define _**modularity**_ (see above). Discuss why this might be an important metric for researchers to collect. What sorts of research questions could it help answer?


#### **Reflections**


Ask students what reflections they have about conducting a social network analysis on the "community" of their seminar. Did the analysis reveal anything about the social dynamics of the class that they had not thought about before?

Discuss the sorts of research questions that students have that social network analysis might help them answer.


#### **Applications and What's Next**


Time permitting, demonstrate how social network analysis helps your own work. Show the concepts of density, betweenness centrality, and modularity in action - and why those analyses are useful in answering a research question. Ideally, the instructor's research uses social network analysis software like Gephi. Connecting the concepts discussed in class to the powerful suite of tools in this software provides a preview of the opportunities available to students interested in learning more about social network analysis.


#### **Further Reading**


For a helpful and accessible overview of how historians can use social network analysis, see: Wetherell, Charles. “Historical Social Network Analysis.” _International Review of Social History_ 43, no. S6 (December 1998): 125–44. I drew from Wetherell's clear definitions of social networks in the "Goal and Scope" section of this workshop.

For an insightful and thought-provoking application of historical social network analysis, see: Kane, Maeve. “For Wagrassero’s Wife’s Son: Colonialism and the Structure of Indigenous Women’s Social Connections, 1690–1730.” _Journal of Early American History_ 7, no. 2 (July 21, 2017): 89–114. I drew from Kane's explanations of various metrics of social network analysis in the "Goal and Scope" section of this workshop.

If students are interested in learning more about how to use digital tools to continue developing their social network analysis skills, refer them to the programming historian tutorials on the subject. I recommend beginning with [From Hermeneutics to Data Networks: Data Extraction and Network Visualization of Historical Sources](https://programminghistorian.org/en/lessons/creating-network-diagrams-from-historical-sources) and [Exploring and Analyzing Network Data with Python](https://programminghistorian.org/en/lessons/exploring-and-analyzing-network-data-with-python).


#### **How can I improve this workshop?**


This workshop is a work in progress. I have tried distilling down the concepts that I have found helpful in my own research to touch on some of the basics of social network analysis. But I'm sure that there are ways to improve this workshop. If you have any thoughts, comments, feedback, ideas, please let me know by posting in the comments section.
