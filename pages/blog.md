---
layout: page
title: Blog
permalink: /blog/
status: in progress
notes:
- Main topic page
- Not started here, but layout for preview & single-post both exist in patterns repo
- /text/ in this repo is also a pattern for blog posts
---

{% for post in site.posts %}
<h3><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h3>
{% endfor %}
