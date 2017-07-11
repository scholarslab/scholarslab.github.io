---
comments: false
layout: page
link: /people
slug: People
title: People
---
{% for person in site.data.people %}
{% assign this_person = person[1] %}
{{ this_person.name }}

{{ this_person.bio }}

===

{% endfor %}
asdfadasdf
