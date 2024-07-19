---
author: ethan-gruber
date: 2009-12-15 11:20:25+00:00
layout: post
slug: dynamic-web-forms-for-the-creation-of-xml
title: Dynamic web forms for the creation of XML
category: blog
tags:
- research and development
- code
---

Among my regular tasks in the Scholars' Lab Research and Development department, I have been developing applications to enable users to easily edit XML metadata within web forms.  As those familiar with metadata creation workflows will know, methods for creating XML documents were prone to human error and required some level of technical knowledge.  With XForms, a W3C standard for creating dynamic web forms, the technical barriers for creating robust metadata can finally be removed.

I began working with XForms (and the enterprise application, Orbeon, for rendering the forms and managing data interactions) in July as I improved [Numishare](http://sourceforge.net/projects/numishare/), the open source application developed to deliver the [University of Virginia Art Museum Numismatic Collection](http://coins.lib.virginia.edu/).  The UVA coin collection, described in Encoded Archival Description (EAD) is a visual site with no administrative back end.  In order to provide tools to entice users to try the new software, I had to develop a method that curators could use to quickly and easily manage artifactual information--standard creating, updating, and deleting commands.  I was able to accomplish this entirely with Orbeon and XForms.  The application is sophisticated enough to allow auto-suggest capabilities for controlled vocabulary (based on TermsComponent in Solr 1.4), as well as post directly to the Solr search index when the user saves or deletes a record.

Most recently, I have been developing an XForms application that can generally be applied to the creation and management of EAD finding aid collections.  The project, titled [EADitor](http://code.google.com/p/eaditor/), has been met with interest from the archival and library coding communities.  While there is much work left to do, the application has definite potential.  It is possible to interact with EAD data that resides in the institutional repository, simplifying the process by which the guides are edited and saved back in the repo.

Other institutions have developed forms for other metadata standards common to libraries, so my colleague in the Scholars' Lab, Adam Soroka, and I have started a listserv in order to facilitate better discussion and collaboration between units working on similar projects.  Hopefully, the library community will eventually use XForms applications that streamline the metadata creation process for all XML standards that are commonly used.
