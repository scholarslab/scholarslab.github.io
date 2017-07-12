---
author: ethan-gruber
date: 2010-09-09 11:50:16+00:00
layout: post
slug: omeka-solr-and-tei
title: Omeka, Solr, and TEI
categories:
- Digital Humanities
- Research and Development
tags:
- Digital Humanities
---

One of the most vital tools that computers bestow upon the humanities scholar is the ability to rapidly sort and group data that are relevant to the scholar's own research needs.  A digital collection of several thousand artifacts is useful, but it is even more useful if, for example, the user can filter the results for lithographs created or published by a certain person or corporate identity.  Omeka's built-in search mechanism is fairly simple, and it may suffice for most collections, but it may also fall short of providing the kind of advanced querying abilities that scholars are growing accustomed to with other digital collections, such as Northwestern's [Winterton Collection](http://repository.library.northwestern.edu/winterton/browse.html#actiontgetAllPhotos) or [modern library catalogs](http://search.lib.virginia.edu) such as the one released publicly here at the University of Virginia Library in July.  Apache Solr is an open-source Java-based search index that provides this functionality.

<!-- more -->

Folks in the Scholars' Lab and other U.Va. Library departments have been using Solr for a number of years.  I have used it for nearly a dozen different projects since 2007, when Bess Sadler (now with Stanford's Digital Library Systems and Services group) introduced it to the department.  About two months ago, I began work on a Solr plugin for Omeka which would post public collection items to a Solr index.  The search results then would be rendered in the public theme.  A table in the Omeka database contains all of the elements that the user may select as facets, displayable fields, or sortable fields, and the user may check boxes in a form in the administrative panel to customize the Solr results.  Collections, item types, and tags may also be selected as facet, displayable, or sortable fields, and thumbnail images may be displayed in the search results.  The simple admin interface to the variety of Solr options outlined above can transform your Omeka collection into a great resource that visitors can manipulate to meet their own research interests.

Yesterday, I released [SolrSearch 0.9](http://omeka.org/codex/Plugins/SolrSearch).  In this most recent version of the plugin, text nodes from XML files attached to items are indexed for full text searching.  SolrSearch, then, is an important plugin to install in conjunction with [TeiDisplay](http://omeka.org/codex/Plugins/TeiDisplay), a plugin the Scholars' Lab developed for rendering Text Encoding Initiative (TEI) XML files.  Therefore, not only can a user read TEI transcriptions of textual works, but search the collection for words or phrases in these works as well.  SolrSearch will feature a hit highlighting option in a future version so that the user may see their search keywords in context.

I know of at least one institution that is using SolrSearch (at least, in an experimental state) for their collection, so hopefully as more people begin to use it, a larger developer group can form around adapting Solr features to Omeka.  Solr is useful for controlled vocabulary services, and it would be great to maximize the application's capabilities.
