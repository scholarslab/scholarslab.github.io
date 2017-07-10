---
comments: false
layout: page
link: /research
slug: research
title: Research
---
{% for project in site.research %}
  {{ project.title }}
{% endfor %}
