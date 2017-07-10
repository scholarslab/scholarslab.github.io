---
comments: false
layout: page
link: /research
slug: research
title: Research
---
{% for project in site.research %}
  <a href="{{ site.url }}/research/{{ project.slug }}">{{ project.title }}</a>
{% endfor %}
