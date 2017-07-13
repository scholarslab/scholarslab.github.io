---
comments: false
layout: page
link: /research
slug: research
title: Research
---

<div id="lab-grid">
{% for page in site.research %}
<section><a href="{{ site.url }}/research/{{ page.slug }}"><img src="{{ site.url }}/assets/images/example.png"><br>{{ page.title }}</a></section>
{% endfor %}
</div>