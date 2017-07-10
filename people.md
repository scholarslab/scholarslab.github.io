---
comments: false
layout: page
link: /people
slug: People
title: People
---
{% for person in site.people %}
{{ person.title }}
{% endfor %}
