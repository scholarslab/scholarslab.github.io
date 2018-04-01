---
layout: default
permalink: /research-old-site/
title: Research (Old Site)
status: in progress
notes:
- Probably just delete this page; the new one is pretty stable now.
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
