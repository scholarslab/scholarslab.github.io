---
comments: false
layout: page
link: /people
slug: People
title: People
---

<h2>Staff</h2>
{% assign staff = (site.people | where:"people-category","Staff" | where:"status","current") %}
<nav class="people" role="navigation">
{% for person in staff %}
  <a href="{{ site.url }}/people/{{ person.slug }}">
  <div class="image"></div>
  {{ person.name }}</a>
{% endfor %}
</nav>

<h2>Alumni</h2>
<nav class="people" role="navigation">
{% assign everyone = site.people %}
{% for person in everyone %}
  {% if person.status != 'current' %}
    <a href="{{ site.url }}/people/{{ person.slug }}">{{ person.name }}</a>
  {% endif %}
{% endfor %}
