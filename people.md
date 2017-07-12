---
comments: false
layout: page
link: /people
slug: People
title: People
---

{% assign staff = (site.people | where:"people-category","Staff" | where:"status","current") %}
<nav class="people" role="navigation">
{% for person in staff %}
  <a href="{{ site.url }}/people/{{ person.slug }}">
  <div class="image"></div>
  {{ person.name }}</a>
{% endfor %}
</nav>
