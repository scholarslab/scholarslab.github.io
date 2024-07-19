---
author: david-mcclure
date: 2012-07-20 05:19:18+00:00
layout: post
slug: parent-child-relationships-in-neatline
title: Parent-child relationships in Neatline
category: blog
tags:
- geospatial and temporal
- neatline
- tutorial
---

One of the most powerful features in [Neatline](http://neatline.org), our newly-released [Omeka](http://omeka.org)-based tool for geo-temporal interpretation of humanities collections, is the ability to create parent-child relationships between records in an exhibit. Any record can be the parent of any other record, and there are no limits on the depth of the nesting - a parent record can itself have a parent record, and so on and so forth.

This relationship is established _from_ the child _to_ the parent. To set a parent record, click into the "Relations" fieldset and use the dropdown to select a record:

[![](http://static.scholarslab.org/wp-content/uploads/2012/07/parent-record-field.jpg)](http://www.scholarslab.org/geospatial-and-temporal/parent-child-relationships-in-neatline/attachment/parent-record-field/)

What's the point of this? When you set a parent record, the child _automatically inherits all of the styling and visibility settings of the parent_. In a nutshell, this makes it possible to create "batches" of records that share a common set of styles and phase in and out of visibility in unison.

For example, imagine that you need to split the records in your exhibit into two a "blue" category and a "red" category. Instead of combing through each record and typing in the exact same lineup of styles for all the records in each of the categories, you can just create two abstract "template" records that contain the style defaults for each group and associate each of the content records with one of the templates.

With six records, three blue and three red, that would look like this:

[![](http://static.scholarslab.org/wp-content/uploads/2012/07/blue-red-item-browser.jpg)](http://www.scholarslab.org/geospatial-and-temporal/parent-child-relationships-in-neatline/attachment/blue-red-item-browser/)

Blue 1, Blue 2, and Blue 3 are children of [Blue Parent], and Red 1, Red 2, and Red 3 are children of [Red Parent]:

[![](http://static.scholarslab.org/wp-content/uploads/2012/07/blue-1.jpg)](http://www.scholarslab.org/geospatial-and-temporal/parent-child-relationships-in-neatline/attachment/blue-1/)

And in the final exhibit, the colors are rendered correctly without ever having to set a single style on Blue 1, Blue 2, Blue 3, Red 1, Red 2, or Red 3:


Powered by [Neatline](http://neatline.org/) | [View fullscreen](http://sandbox.scholarslab.org/webservice/david/parent-records)

This also works for the record visibility settings that control the date range on the timeline during which the a record is visible - the "Start Visible Date" and "End Visible Date" fields in the "Temporal" fieldset. In the example above, say that you want the blue points to be visible from 1900-1960, and the red points from 1940-2000. Set these visibility intervals on the parent records, and the child records will phase in and out of visibility in unison:


Powered by [Neatline](http://neatline.org/) | [View fullscreen](http://sandbox.scholarslab.org/webservice/david/parent-records-date)

What if you need to selectively override the defaults, though? What if you want a record to inherit most style and visibility settings from upstream in the inheritance chain, but you want to adjust one or two settings to differentiate the record?

For example, imagine you want one of the blue points to be yellow - but you still want it to phase in and out of view with the other blue points. Instead of having to break away the record and re-set all of the settings just in order to make the color change, you can just directly change the color setting on the record, and all of the other unchanged settings will continue to inherit from upwards in the chain:


Powered by [Neatline](http://neatline.org/) | [View fullscreen](http://sandbox.scholarslab.org/webservice/david/parent-records-overrides)

Neatline always tries to find record-specific value first, meaning that an inherited value can always be clobbered by a locally-set value (think of it as `!important` in CSS). If Neatline doesn't find a record-specific value, it starts to traverse up the inheritance chain to the parent record(s), and stops when it finds a record-specific value on one of the parents. If none of the parents have a value for the attribute in question, then Neatline falls back on the exhibit default values, which can be configured in the "Map Settings" dropdown tab.

**Parent records in action**

How does this work with real content? The [Battle of Chancellorsville demo exhibit](http://hotchkiss.scholarslab.org/neatline-exhibits/show/battle-of-chancellorsville/fullscreen) makes heavy use of parent records. This is a complex exhibit with a lot of moving parts. There are three separate base maps, one for each of the three days of the battle - May 2, May 3, and May 4, 1863. Each of the maps has a large collection of spatial annotations and numbered waypoints that are relevant to _just one of the maps_ - as the map switches out in response to the position of the timeline, the corresponding set of annotations and waypoints needs to phase into view at the same time. Meanwhile, the spatial vectors can be broken down into categories that should share similar styles - the Union and Confederate lines should all share the same shades of blue and red.

You could just go through and directly set the correct colors and visibility dates on each individual record. This is labor-intensive, though, and it tends to lock you into design decisions that you make at the beginning of the process – if you change your mind down the road and want to adjust the Union blue, you’d have to work through 50-odd records and update them individually.

Parent records make it possible to formalize the conceptual relationships and manipulate the groupings in bulk – once the correct inheritance chain is set up, you can set the style and visibility settings a single time at the top of the stack and the settings will cascade downwards to all of the children. For this exhibit, the inheritance structure looks like this:

```

**May 2, 1863** (visible: May 2 - May 3)
--- **[may 2 condeferate lines]** (color: #b52f2f)
-------- May annotation 1 (visible: May 2 - May 3; color: #b52f2f)
-------- May annotation 2 (" ")
-------- May annotation 3 (" ")
-------- (...)
--- **[may 2 union lines]** (color: #093696)
-------- May annotation 4 (visible" May 2 - May 3; color: #093696)
-------- May annotation 5 (" ")
-------- May annotation 6 (" ")
-------- (...)

**May 3, 1863** (visible: May 3 - May 4)
--- **[may 3 condeferate lines]** (color: #b52f2f)
-------- May annotation 7 (visible: May 3 - May 4; color: #b52f2f)
-------- May annotation 8 (" ")
-------- May annotation 9 (" ")
-------- (...)
--- **[may 3 union lines]** (color: #093696)
------ May annotation 10 (visible: May 3 - May 4; color: #093696)
------ May annotation 11 (" ")
------ May annotation 12 (" ")
------ (...)

**May 4, 1863** (visible: May 4 - May 5)
--- **[may 4 condeferate lines]** (color: #b52f2f)
-------- May annotation 13 (visible: May 4 - May 5; color: #b52f2f)
-------- May annotation 14 (" ")
-------- May annotation 15 (" ")
-------- (...)
--- **[may 4 union lines]** (color: #093696)
-------- May annotation 16 (visible: May 4 - May 5; color: #093696)
-------- May annotation 17 (" ")
-------- May annotation 18 (" ")
-------- (...)

```

The top-level visibility dates are set on the three records that house the base maps. Under each of the three map records, abstract style records define the colors and opacities for the Union and Confederate lines. The actual content records then inherit from these records, receiving both the top-level visibility parameters on the map records and the styles on the abstract records.

Now, there is some duplication of content here - the colors for Union blue and Confederate red have to be set separately in each of the three sets of abstract styling records. This is because all of the styles/visibilities on record can only be a part of a single inheritance chain, making it necessary to "split" each of the three chains under the top-level map records.

Originally, I toyed around with the idea of making it possible to create "style-specific" inheritance chains - so, for example, a record could inherit its fill color from one record, its line width from another, its visibility from another, etc. In the end, though, this would have required a large amount of added UI overhead, and the same results can be achieved with a minimal amount of extra work with the technique used here.
