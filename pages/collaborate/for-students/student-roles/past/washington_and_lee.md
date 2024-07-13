---
layout: page
title: Guest DH Workshop Teaching at W&L
nav: false
redirect_from:
  - /visiting-workshops-at-washington-and-lee-university
---

Funded by the Andrew W. Mellon Foundation, Washington and Lee University was a collaborating with the Scholars’ Lab at the University of Virginia to bring UVA graduate students to give presentations or workshops on their digital research to enrich undergraduate courses at W&L. The grant aimed to give graduate students the opportunity to develop workshop materials based on their work in digital humanities and to gain experience teaching in a liberal arts context in preparation for the job market. W&L courses and students gained contact with cutting edge digital research and pedagogy.

Graduate students who participated received a $500 honorarium in exchange for their work consulting with the W&L faculty member, preparing and delivering their materials in a course visit, and then following up with the faculty member afterwards. These questions guided the students:

* How might you take your research interests as they pertain to digital humanities and articulate them to undergraduates in a single class session?
* How can you imagine reshaping your project into a teaching workshop?
What hands-on activities can you use to shape a discussion of the work for newcomers?
* How can you connect your interest to the particular course topic?

Some past presentations included:

* Basics of project management with a workshop on writing charters (documents to establish goals and rules for the team) for a DH intro course
* Introduction to web design by discussing “bad” websites for a DH intro course
* Discussion of use of digital humanities for theatre followed by a Prism game asking students to map stage directions in Hamlet for a course on King Lear
* Introduction to text analysis through a hands-on exercise on topic modeling for an intro to DH course
* Lecture on the history of technology in fashion and hands-on sewing workshop for a seminar on Fashion in Global History, drawing on grad student’s own research in wearable technology
* Design jams for helping students scope, shape, and develop their own course projects

Past posts by participants:

{% assign project_posts = site.posts | where: 'tags', 'WLU Collab' %}
<ul>
{% for post in project_posts %}
{% capture authorstring %}
{% include author-name.html authorid=post.author %}
{% endcapture %}
<li><a href="{{ site.baseurl }}{{ post.url }}">{{ post.title }}</a> by {{ authorstring }}</li>
{% endfor %}
</ul>