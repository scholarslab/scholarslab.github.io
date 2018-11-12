---
layout: page
title: Hours and Spaces
permalink: /hours-and-spaces/
redirect_from:
  - /locations/
  - /about/hours-and-spaces/
  - /locations/alderman-library-rm-317/
  - /locations/alderman-library-room-421/
  - /locations/alderman-library-room-421-2/
  - /locations/alderman-library-room-423/
  - /locations/alderman-library-room-423-2/
  - /locations/alderman-library-room-423-3/
  - /locations/auditorium-harrison-institutesmall-special-collections-library/
  - /locations/brooks-hall-common-room/
  - /locations/brooks-hall-commons/
  - /locations/brown-library-rm-133-clark-hall/
nav: true
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