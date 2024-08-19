---
author: ethan-gruber
date: 2010-06-17 14:00:59+00:00
layout: post
slug: expanding-the-capabilities-of-omeka
title: Expanding the Capabilities of Omeka
category: essay
tags:
- research-and-development
- metadata
- omeka
---

Because I have a keen interest in the description of cultural heritage artifacts and in doing interesting things with metadata, in recent months I have developed a handful of Omeka plugins to meet these interests.  My first foray into plugin development for the application was with the [EAD Importer](https://addons.omeka.org/svn/plugins/EadImporter/).  The EAD Importer, as the name suggests, extracts item-level metadata (along with a bit of collection-level metadata, like rights) from Encoded Archival Description finding aids and generates a CSV file which can be imported through the CSV Import plugin developed by the Omeka crew.  The plugin would be useful to archivists who would like to use Omeka to build online exhibits of their collections.  I took this framework a step further to create a plugin that is capable of importing any [flat XML](https://addons.omeka.org/svn/plugins/GenericXmlImporter/trunk/) into Omeka by transforming that file into a CSV file.

Most recently, I have turned my attention to expanding the descriptive abilities of Omeka into the realm of collections of artwork.  Omeka items are described with Dublin Core, which is capable of describing _anything_, though not particularly well.  I developed [VraCoreElementSet](https://addons.omeka.org/svn/plugins/VraCoreElementSet/trunk/), which incorporates VRA Core fields into the Edit Item form.  VRA Core is a much more semantically appropriate schema for describing art and artifacts.  Since it was conceived as an XML standard (not strictly a flat list of fields), some elements have hierarchical sub-componenets.  For example, a work may have several agents involved in its production, and each agent has a name as well as a role, culture, birth date, and, as the case may be, a death date.  The VraCoreElementSet plugin creates a table for agents so that a user may enter this data separately.  Then in the Edit Item form, the user may select VRA Core agents from a drop down menu restricted by the records in the agents table.  Items may also be exported to schema-compliant VRA Core XML.  There is still some work remaining on this plugin, but it is well on its way toward completion.

Now that the Scholars' Lab has contributed EAD Importer and VRA Core Element Set plugins, Omeka may attract new institutional users from the library, archive, and museum fields, who may have otherwise settled for proprietary applications to disseminate their digital collections.
