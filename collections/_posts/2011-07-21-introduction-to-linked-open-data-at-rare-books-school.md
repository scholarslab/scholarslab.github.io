---
author: eric-rochester
date: 2011-07-21 14:15:20+00:00
layout: post
slug: introduction-to-linked-open-data-at-rare-books-school
title: Introduction to Linked Open Data at Rare Book School
categories:
- Research and Development
tags:
- code
- Digital Libraries
- lod
---

Yesterday, I was fortunate to be invited by [Andrew Stauffer](http://www.engl.virginia.edu/faculty/stauffer_andrew.shtml) and [Bethany Nowviskie](http://nowviskie.org/) to present at their [Rare Book School](http://www.rarebookschool.org/) course, [Digitizing the Historical Record](http://rarebookschool.org/courses/libraries/l65/). I talked about [Linked Open Data](http://en.wikipedia.org/wiki/Linked_Data) (LOD), and afterward, [Dana Wheeles](http://twitter.com/#!/bluesaepe) talked about the [NINES](http://www.nines.org/) project and how they use RDF and LOD.




I tried to present a gentle, mostly non-technical introduction to LOD, with an example of it in action. Hopefully, this posting will be a 50,000 foot overview also.




### The Linked Open Data Universe





[ ![Linked Open Data cloud](https://lod-cloud.net/clouds/lod-cloud.svg) ](http://lod-cloud.net/) _Linking Open Data cloud diagram, by Richard Cyganiak and Anja Jentzsch. [http://lod-cloud.net/](http://lod-cloud.net/)_






The first thing to know about LOD is that it’s everywhere. Look at the [Linked Open Data cloud diagram](http://lod-cloud.net/) above. All of these institutions are publishing data that anyone can use, and their data references others' data also.




### Linked Data vs Open Data vs RDF Data




First we need to unpack the term _Linked Open Data_:




**Linked** is an approach to data. You need to provide context for your data; you need to point to other’s data.




**Open** is a policy. Your data is out there for others to look at and use; you explicitly give others this permission.




**Data** is a technology and a set of standards. Your data is available using an RDF data model (usually) so computers can easily process it.




_(See [Christopher Gutteridge’s post](http://blogs.ecs.soton.ac.uk/webteam/2011/07/17/linked-data-vs-open-data-vs-rdf-data/) for more about this distinction.)_




### Five Stars




Creating LOD can seem overwhelming. Where do you start? What do you have to do? It’s not an all or nothing proposition. You can take what you have, figure out how close you are to LOD, and work gradually toward making your information a full member of the LOD cloud. The LOD community talks about having four-star data or five-star data. Here are what the different stars denote:






  1. You’ve released the data using any format under an **open** license that allows others to view and use your data;


  2. You’ve released the data in a **structured** format so that some program can deal with it (e.g., Excel);


  3. You’ve released the data in a **non-proprietary** format, like CVS;


  4. You’ve used **HTTP URIs** (things you can type into your web browser’s location bar) to identify things in your data and made those URIs available on the web so others can point to your stuff;


  5. You explicitly **link** your data to others’ data to provide context.




_(This is all over the web. [Michael Hausenblas’ explanation with examples](http://lab.linkeddata.deri.ie/2010/star-scheme-by-example/) is a good starting point.)_




### Representing Knowledge




A large part of this is about representing knowledge so computers can easily process it. Often LOD is encoded using [Resource Description Framework (RDF)](http://en.wikipedia.org/wiki/Resource_Description_Framework). This provides a way to model information using a series of statements. Each statement has three parts: a subject, a predicate, and an object. Subjects and predicates _must_ be URIs. Objects can be URIs (linked data) or data literals.




The predicates that you can use are grouped into _vocabularies_. Each vocabulary is used for a specific domain.




We’re getting abstract, so let’s ground this discussion by looking at a specific vocabulary and set of statements.




#### Friend of a Friend




For describing people, there’s a vocabulary standard called [Friend of a Friend (FOAF)](http://www.foaf-project.org/). I’ve used that on my web site to provide information about me. (The file on my website is in [RDF/XML](http://en.wikipedia.org/wiki/RDF/XML), which can be frightening. I’ve converted it to [Turtle](http://en.wikipedia.org/wiki/Turtle_(syntax)), which we can walk through more easily.)




I’ll show you parts of it line-by-line.




(Ahem. Before we start, a disclaimer: I need to update my FOAF file. It doesn’t reflect best practices. The referencing URL isn’t quite the way it should be, and it uses deprecated FOAF predicates. That said, if you can ignore my dirty laundry, it still illustrates the points I want to make about the basic structure of RDF.)




First,




```
@prefix foaf: <http://xmlns.com/foaf/0.1/> .
```




This just says that anywhere `foaf:` appears later, replace it with the URL `http://xmlns.com/foaf/0.1/`.




```
[] a <http://xmlns.com/foaf/0.1/Person>;
```




This is a statement. `[]` just means that it’s talking about the document itself, which in this case is a stand-in for me. The predicate here is `a`, which is a shortcut that’s used to tell what type of an object something is. In this case, it says that I’m a person, as FOAF defines it.




And because the line ends in a semicolon, the rest of the statements are also about me. Or more specifically, about `[]`.




```
foaf:firstName "Eric";
foaf:surname "Rochester";
foaf:name "Eric Rochester";
foaf:nick "Eric";
```




This set of statements still have the implied subject of me, and they use a series of predicates from FOAF. The object of each is a literal string, giving a value. Roughly this translates into four statements:






  * Eric’s first name is “Eric.”


  * Eric’s given name is “Rochester.”


  * Eric’s full name is “Eric Rochester.”


  * Eric’s nickname is “Eric.”




The next statement is a little different:




```
foaf:workplaceHomepage <http://www.scholarslab.org/> .
```




This final statement has a URI as the object. It represents this statement:






  * Eric’s workplace’s home page is “[http://www.scholarslab.org/](http://www.scholarslab.org/)”.




If this was a little overwhelming, thank you for sticking around this far. Now here’s what you need to know about modeling information using RDF:






  1. Everything is expressed as subject-predicate-object statements; and


  2. Predicates are grouped into vocabularies.




The rest is just details.




### Linked Open Data and the Semantic Web




During my presentation, someone pointed out that this all sounds a lot like the [Semantic Web](http://en.wikipedia.org/wiki/Semantic_web).




Yes, it does. LOD is the semantic web without the focus on understanding and focusing more on what we can do. Understanding may come later&mdash;or not&mdash;but in the meantime we can still do some pretty cool things.




### So What?




The benefit of all this is that it provides another layer for the internet. You can use this information to augment your own services (e.g., Google augments their search results with RDF data about product reviews) or build services on top of this information.




If you’re curious for more or still aren’t convinced, visit the [Open Bibliographic Data Guide](http://obd.jisc.ac.uk/). They make a business case and articulate some use cases for LOD for libraries and other institutions.




### For Example




Discussing LOD can get pretty abstract and pretty meta. To keep things grounded, I spent a few hours and threw together a quick demonstration of what you can do with LOD.




The Library of Congress’ [Chronicling America](http://chroniclingamerica.loc.gov/) project exposes data about the newspapers in its archives using RDF. It’s five-star data, too. For example, to tell the geographic location that the papers covered, it links to both [GeoNames](http://www.geonames.org/) and [DBpedia](http://dbpedia.org/About). The LoC doesn’t provide the coordinates of these cities, but because they express the places with a link, I can follow those and read the latitude and longitude from there.




I wrote a [Python](http://www.python.org/) script that uses [RDFlib](http://www.rdflib.net/) to read the data from the LoC and GeoNames and writes it out using [KML](http://en.wikipedia.org/wiki/Kml). You can view this file using Google Maps or Google Earth.




Here’s the results of one run of the script. (I randomly pick 100 newspapers from the LoC, so the results of each run is different.)





[View Larger Map](http://maps.google.com/maps?f=q&source=embed&hl=en&geocode=&q=https:%2F%2Fgithub.com%2Ferochest%2Floc-chronicling-map%2Fraw%2Fmaster%2Fdata%2Fnewspapers.kml&aq=&sll=38.063606,-78.505873&sspn=0.011741,0.016093&ie=UTF8&t=h&ll=34.64296,-115.5352&spn=26.67204,84.64626)




You can find the source for this example on both Github and BitBucket:






  * [https://github.com/erochest/loc-chronicling-map](https://github.com/erochest/loc-chronicling-map)


  * [https://bitbucket.org/erochest/loc-chronicling-map/overview](https://bitbucket.org/erochest/loc-chronicling-map/overview)




### Resources




Throughout this post, I’ve tried to link to some resources. Here are a few more (not all of these will be appropriate to a novice):






  * [The Wikipedia page on linked data](http://en.wikipedia.org/wiki/Linked%5C_Data).


  * [The Open Bibliographic Data Guide](http://obd.jisc.ac.uk/), which provides rationales for LOD.


  * [A portal to LOD resources and tools](http://linkddata.org/).


  * [A portal maintained by the W3C](http://www.w3.org/wiki/LinkedData).


  * [The LOD cloud](http://lod-cloud.net/).


  * [The four rules of LOD](http://www.w3.org/DesignIssues/LinkedData.html).


  * [The five rules](http://lab.linkeddata.deri.ie/2010/star-scheme-by-example/).


  * [Linked vs Open vs Data](http://blogs.ecs.soton.ac.uk/webteam/2011/07/17/linked-data-vs-open-data-vs-rdf-data/).


  * [A book on publishing LOD on the internet](http://linkeddatabook.com/book).
