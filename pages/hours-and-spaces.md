---
layout: page
title: Hours and Spaces
permalink: /hours-and-spaces/
nav: true
---

The Common Room of the Scholars' Lab is open [whenever Alderman is](https://www.library.virginia.edu/hours), and during the semester our central [Makerspace](/makerspace/) is staffed from **1:00 pm - 7:00 pm, Monday through Thursday and 1:00 pm - 5:00 pm, Friday**. Visit the Common Room, Seminar Room (Alderman 423), and Classroom (Alderman 421)! Scholars' Lab [staff](/people/) offices are nearby, where [our grad fellows](/graduate-fellowships/) also have access to a workspace and office.

{% assign spaces = site.spaces | sort: 'order' %}
{% for space in spaces %}
## {{ space.title }}

_{{ space.room }}_

{{ space.content }}

{% if space.hours %}
  - **Hours:** {{ space.hours }}
{% endif %}
{% if space.seating %}
  - **Size:** seating for {{ space.seating }}
{% endif %}
{% if space.equipment %}
  - **Equipment:** {{ space.equipment }}
{% endif %}
{% if space.reservations %}
  - **Reservations:** {{ space.reservations }}
{% endif %}
{% endfor %}
