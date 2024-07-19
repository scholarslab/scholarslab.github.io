---
author: brandon-walsh
date: 2023-06-26
layout: post
slug: jekyll-tag-clouds
title: Jekyll Tag Clouds
category: blog
tags:
- tutorial
- jekyll
- code
crosspost:
  - title: Brandon's Blog
    url: https://walshbr.com/blog/jekyll-tag-clouds
---

Blogging more this summer has unsurprisingly meant that I have spent a lot of time on my blog. I noticed that the way I had my site generate category pages had stopped working at some point. I set the whole thing up so long ago that troubleshooting it was hard. My old way involved using a plugin to generate categories, which meant that I needed to host my Jekyll site separately from GitHub Pages. Searching around for other options eventually took me to [Long Qian's post on generating tags in Jekyll](https://longqian.me/2017/02/09/github-jekyll-tag/), which promised to do a similar approach but with vanilla Jekyll and liquid syntax.

I got their approach working to replace my old system. My old use of categories was pretty restricted though–I had really only used them to create separate pages for my pedagogy, DH Now, and DH+Lib posts. But Quian's post got me thinking about discovery and my blog archive, so I took things a step further and added just a couple tweaks to their post (based on a [Stack Overflow post they linked](https://stackoverflow.com/questions/13025281/how-to-get-a-sorted-tags-list-in-jekyll)). I got a [little tag cloud visualization working](https://walshbr.com/projects#blogging) - pretty simple, but I hadn't thought such a thing was possible in vanilla Jekyll/liquid.

<img alt="tag cloud from projects page" src="{{ root_url }}/assets/post-media/2023-bw-cloud.png">

If you're interested in getting it going on your own, you'll follow all the steps in Qian's post. But then the last tag cloud code will need to be modified slightly - 

{% highlight html %}{% raw %}

{% capture temptags %}
  {% for tag in site.tags %}
    {{ tag[1].size | plus: 10 }}#{{ tag[0] }}#{{ tag[1].size }}
  {% endfor %}
{% endcapture %}

{% assign sortedtemptags = temptags | split:' ' %}
{%- for temptag in sortedtemptags -%}
  {% assign tagitems = temptag | split: '#' %}
  {%- capture tagsize -%}{{ tagitems[0] }} {%- endcapture -%}
  {%- capture tagname -%}{{ tagitems[1] }}{%- endcapture -%}
  <a href="/tag/{{ tagname }}"><code class="highligher-rouge" style="font-size:{{ tagsize }}px;"><nobr>{{ tagname }}</nobr></code></a>
{% endfor %}

{% endraw %}{% endhighlight %}{: .highlight-left }

I modified the last couple lines to adapt the Stack Overflow response. You count the number of posts associated with each tag and use that to set the font-size for each link. And then I edited an earlier line to set a baseline font-size of 12px.