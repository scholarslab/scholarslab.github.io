---
layout: page
title: Lab
permalink: /lab/
fake: true # for now
time-requirement: unknown
notes:
- Content: not started
- Style: not started
- NB: NOT a Phase 1 page
---

<div class="research-intro">This is a page for proofs of concept, prototypes, silly work to learn scholarly methods, and other experimental research that doesn't quite fit <a href="{{ site.url }}/research">our formal Research page</a>.</div>

<div id="lab-grid">
{% for page in site.lab %}
<div class="project">
<a href="{{ site.url }}/lab/{{ page.slug }}">
<img src="{{ site.url }}/assets/img/example.png">
<div class="research-caption">
{{ page.title }}
</div>
</a>
</div>
{% endfor %}
</div>

<iframe allowtransparency="true" frameborder="0" scrolling="no" seamless="seamless"
src="http://colmdoyle.github.io/gh-activity/gh-activity.html?user=scholarslab&type=user" width="300" height="300"></iframe>s
