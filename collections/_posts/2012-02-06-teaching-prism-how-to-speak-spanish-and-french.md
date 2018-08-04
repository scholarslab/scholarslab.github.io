---
author: alex-gil
date: 2012-02-06 10:48:10+00:00
layout: post
slug: teaching-prism-how-to-speak-spanish-and-french
title: teaching prism how to speak spanish and french
categories:
- Grad Student Research
tags:
- development
- internationalization
- praxis program
---

Well, it looks like me and Annie will go on different development branches for a few weeks. I have been assigned the noble task of teaching Prism how to speak Spanish and French. The goal is to give the tool the largest possible reach on day one. Internationalization has always been one of my hot-button issues for a while, given that I hail from and engage with the global south, where [the digital divide and the digital humanities divide](http://www.insidehighered.com/blogs/globalisation-digital-humanities-uneven-promise) is more visible.    

So far the tool I'm working with is the [I18n](http://guides.rubyonrails.org/i18n.html) gem which comes bundled with rails. The tool will make it easy for us to translate the interface. I18n so far seems very straightforward. I am creating YAML documents for each language. The YAML documents assign keys or placeholder names (kind of like variables) to all the strings that need to be translated in the views. Instead of writing strings directly in the views, we will write the placeholders. Depending on the _locale_ that is selected, the placeholders will fetch the appropriate strings from the YAML files. Pretty simple! [crosses fingers nervously]. Besides the ability to abstract strings from their context, I18n also takes care of date and currency formats. Not that we will need the latter, though it's nice to know we could make it all about the _pesos_ if we wanted to.

Adding sample texts in French and Spanish remains a decision for the future, given our time constraints. I'm working as fast as I can to develop the i18n functionality, so that we do have time, but there is no guarantee. Stay tuned!


