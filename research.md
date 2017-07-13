---
comments: false
layout: page
link: /research
slug: research
title: Research
---

{% for page in site.research %}
  <section><a href="{{ site.url }}/research/{{ page.slug }}"><img src="{{ site.url }}/assets/images/{{ page.slug }}.png">{{ page.title }}</a></section>
{% endfor %}