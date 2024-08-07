---
author: eric-rochester
date: 2012-10-03 11:13:45+00:00
layout: post
slug: hot-off-the-presses-the-solrsearch-plugin
title: 'Hot off the Presses: the SolrSearch Plugin'
category: blog
tags:
- code
---

The Scholars’ Lab is pleased to announce the first release of the [SolrSearch](https://github.com/scholarslab/SolrSearch) [Omeka](http://omeka.org/) plugin.





SolrSearch allows you to replace Omeka’s default search with [Solr](http://lucene.apache.org/solr/). Solr is a standard, popular, open source, fast text search engine server. It handles hit highlighting, date math, numeric aggregation functions (mean, max, etc.), indexing for 33 languages, replication, and many, many more things. It's used by [whitehouse.gov](http://www.whitehouse.gov/), [Instagram](http://instagr.am/), AT&T;'s [yp.com](http://yp.com/), [Ticketmaster](http://www.ticketmaster.com/), and [Netflix](http://www.netflix.com/), to name a few (see the list of [Public websites using Solr](http://wiki.apache.org/solr/PublicServers)).





It does require running Solr as a separate server process (although possibly on the same machine), so it does require more resources--both personnel and technical--but it's often worth the investment.





**Search Pages and Exhibits** SolrSearch now indexes Simple Pages and Exhibits.





**Performance** Did I mention that Solr is fast? It’s been optimized for high-traffic sites, and it can easily handle much more data than MySQL full text search can.





**Scalability** And because it’s been engineered for large, high-traffic sites, Solr can handle more data, faster than MySQL. This especially becomes an issue when you have collections with a large number of items or items with a lot of data attached to each.



[![Configuration](http://static.scholarslab.org/wp-content/uploads/2012/10/Screen-shot-2012-10-02-at-3.12.56-PM-300x167.png)](https://scholarslab.org/announcements/hot-off-the-presses-the-solrsearch-plugin/attachment/screen-shot-2012-10-02-at-3-12-56-pm/)


**Configuration** The SolrSearch plugin in highly configurable. You can decide which fields to search, which can be used for facets, and how to label them.





**Facets** [Facets](http://en.wikipedia.org/wiki/Faceted_search) slice up your items and allow users to navigate through those slices. For example, [The Falmouth Project](http://falmouth.lib.virginia.edu/) used an early version of the SolrSearch plugin to give users not only free-text search, but also to allow users to browse the buildings it records by neighborhood, date, and use.





You can find the download on the [SolrSearch plugin page](http://omeka.org/add-ons/plugins/solrsearch/). The code is hosted on the [SolrSearch github page](https://github.com/scholarslab/SolrSearch). If you have any feedback about the plugin, find any bugs, or want to suggest features, head over to the [issues page](https://github.com/scholarslab/SolrSearch/issues). And if you have questions, feel free to post in the [Omeka forums](http://omeka.org/forums/).





As always, we look forward to seeing how you’ll use this.
