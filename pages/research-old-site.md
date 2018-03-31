---
comments: false
layout: research
link: /research
permalink: /research/
title: Research
---
<div id="lab-grid">
{% for page in site.research %}
<div class="project">
<a href="{{ site.url }}/research/{{ page.slug }}">
<img src="{{ site.url }}/assets/img/example.png" alt="{{ page.title }}">
<div class="research-caption">
{{ page.title }}
</div>
</a>
</div>
{% endfor %}
</div>
