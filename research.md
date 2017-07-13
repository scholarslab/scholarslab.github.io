---
comments: false
layout: research
link: /research
slug: research
title: Research
---
<div id="lab-grid">
{% for page in site.research %}
<<<<<<< Updated upstream
<section><a href="{{ site.url }}/research/{{ page.slug }}"><img src="{{ site.url }}/assets/images/example.png" alt="{{ page.title }}"><br>{{ page.title }}</a></section>
=======
<div class="project">
<a href="{{ site.url }}/research/{{ page.slug }}">
<img src="{{ site.url }}/assets/images/example.png">
<div class="research-caption">
{{ page.title }}
</div>
</a>
</div>
>>>>>>> Stashed changes
{% endfor %}
</div>
