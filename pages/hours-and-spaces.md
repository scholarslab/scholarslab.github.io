---
layout: page
title: Hours and Spaces
permalink: /hours-and-spaces/
nav: true
time-required: ~1.5hrs
notes:
- Content: wording is done unless content team wants to change. Beth's diagrams need incorporating.
- Style: not started
- NB: just leaving as simple text-based Markdown page for Phase 1, though content lends itself to more specific layout in future.
---

The Common Room of the Scholars' Lab is open [whenever Alderman is](http://www.library.virginia.edu/hours/#!/scholars-lab,alderman), and during the semester our central [Makerspace](http://www.scholarslab.org/makerspace/) is staffed from **1:00 pm - 7:00 pm, Monday through Thursday and 1:00 pm - 5:00 pm, Friday**. Visit the Common Room, Seminar Room (Alderman 423), and Classroom (Alderman 421)! Scholars' Lab [staff](http://scholarslab.org/people) offices are nearby, where [our grad fellows](http://www.scholarslab.org/graduate-fellowships/) also have access to a workspace and office.

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