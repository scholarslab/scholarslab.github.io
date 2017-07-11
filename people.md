---
comments: false
layout: page
link: /people
slug: People
title: People
---
{% for person in site.people %}
<a href="{{ site.url }}/people/{{ person.slug }}">{{ person.name }}</a>

{{ person.bio }}

===

{% endfor %}
asdfadasdf
