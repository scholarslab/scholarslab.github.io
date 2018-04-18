---
layout: page
title: People
permalink: /people/
time-required: ~3.5hrs
notes:
- Content: generated from `_people`
- Style: not started. Using simple grid gallery as base.
---

<h2>Staff</h2>
{% assign staff = site.people | where:"people-category","Staff" | where:"status","current" %}
<nav class="people" role="navigation">


{% for person in staff %}
  <a href="{{ site.url }}/people/{{ person.slug }}">
    {% assign profile_pictures = site.static_files | where: "basename",person.slug | limit: 1 %}
    {% if profile_pictures == empty %}
        <div class="image"><img src="{{ site.baseurl }}/assets/img/people/scholarslab.png" alt="Scholars' Lab Lab"></div>
    {% else %}
        {% for profile_picture in profile_pictures %}
          <div class="image"><img src="{{ profile_picture.path }}" alt="{{ person.name }}"></div>
        {% endfor %}
    {% endif %}
  <span class="fn name">{{ person.name }}</span>
  <span class="title">{{ person.position }}</span>
  </a>
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
