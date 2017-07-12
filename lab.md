---
author: admin
comments: false
date: 2008-08-05 19:30:50+00:00
layout: page
link: http://scholarslab.org/lab
slug: lab
title: Lab
---
This is a page for proofs of concept, prototypes, silly work to learn scholarly methods, and other experimental research that doesn't quite fit <a href="{{ site.url }}/research">our formal Research page</a>.

{% for project in site.lab %}
  <a href="{{ site.url }}/lab/{{ project.slug }}">{{ project.title }}</a>
{% endfor %}
