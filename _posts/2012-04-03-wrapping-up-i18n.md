---
author: alex-gil
date: 2012-04-03 15:07:38+00:00
layout: post
slug: wrapping-up-i18n
title: Wrapping up i18n
categories:
- Grad Student Research
tags:
- development
- i18n
- praxis program
---

Yesterday I was able to wrap up the internationalization of the site. It took us a while to figure out how we wanted the user to choose languages. We have several options: A setting on the browser can decide; users can indicate their preferences in the user account; we can have the location of your IP address decide for you. In the end we opted for the language link approach. No flags in our case, just links with the name.

Once the links were made, the next challenge was to make the language choices stick. In order to accomplish this, I had to set all link methods in our rails application attach the ?locale parameter automatically. In practice this meant that every link helper in any of our pages would generate the right language after we had already set the variable for locale at least once. If you didn't do anything the locale would default to English.

Hard links were a completely different matter. Thus far, I was only able to find one hard-link to worry about: the link to the about page on the header section. In order to deal with hard links we had to come up with a little rails hack. We (I had help from Eric Rochester figuring this one out) sent a variable from the actual header tag back into the yml file to have the yml file generate the links in the right language. The code looks something like this:
  

## on app/views/layouts/_header.html.erb
[html gutter="false"]
&lt;p class=&quot;description&quot;&gt;&lt;%= t 'header.description_html', 
:about_url =&gt; url_for(:controller =&gt; 'pages', :action =&gt; 
'about') %&gt;&lt;/p&gt;[/html]
  

## on the config/locales yml files
[html gutter="false"]
   description: &gt;
      Prism es un conjunto de herramientas que sirven 
      para &lt;a href='%{about_url}'&gt;colectivizar la
      interpretación &lt;/a&gt;de textos... [/html]
