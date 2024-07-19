---
author: david-mcclure
date: 2013-05-14 12:23:53+00:00
layout: post
slug: interactive-css-in-neatline-2-0
title: Interactive CSS in Neatline 2.0
category: blog
tags:
- geospatial and temporal
- neatline
crosspost:
  - title: dclure.org
    url: http://dclure.org/uncategorized/interactive-css-in-neatline-2-0/
---

Neatline 2.0 makes it possible to work with really large collections of records - as many as about [1,000,000 in a single exhibit](http://dclure.org/logs/neatline-one-million-records/). This level of scalability opens up the door to a whole range of projects that would have been impossible with the first version of Neatline, but it also introduces some really interesting content management challenges. If the map can _display_ millions of records, it also needs utilities to effectively _manage_ content at that scale.

This often involves a shift from working with individual records to working with groups of records. When there are a million records on the map, it's pretty unlikely that you'll want to change the color of just one of them. More likely, that record will exist as part of a large grouping of related records (eg, "democratic precincts," or "photographs from 1945"), all of which should share a certain set of attributes. There needs to be a way to slice and dice records into overlapping clusters of related records, and then apply bulk updates to the individual clusters.

Really, this is a familiar problem - it's structurally identical to the task of styling web pages with CSS, which makes it possible to address groupings of elements with "selectors" and apply key-value styling rules to the groups. Inspired by projects like Mike Migurski's [**Cascadenick**](https://github.com/mapnik/Cascadenik), Neatline 2.0 makes it possible to use a Neatline-inflected dialect of CSS to update groups of records linked together with "tags," which can be applied in any combination to the individual records.

**Neatline Stylesheet Basics**

Let's take a look at how this works in practice. Imagine you're plotting results from the last four presidential elections. You load in a big collection of 800,000 records (200,000 precincts for each of the four elections), each representing an individual polling place with a point on the map. Each point is scaled to represent the number of ballots cast at that location, and shared red or blue according to which party won more votes. In this case, there are really seven different nested and overlapping taxonomies in the data. All of the records are `precincts`, but each falls into one of the our election seasons - `2000`, `2004`, `2008`, or `2012`. And each precinct went either `democrat` or `republican`, regardless of which election cycle it belongs to. Each record can be tagged with some combination of these tags:

[![tags-input](http://static.scholarslab.org/wp-content/uploads/2013/05/tags-input.jpg)](http://static.scholarslab.org/wp-content/uploads/2013/05/tags-input.jpg)

Each of the groupings needs to share a specific set of attributes - and also _not_ share some attributes that need to be assigned separate values on individual records. For example, all of the precincts - regardless of date or party - should share the same basic `fill-opacity` and `stroke-width` styles. All records in each of the groupings for the four election seasons need to share the same `after-date` and `before-date` visibility settings so that the records phase in and out of visibility in unison. And all republican and democratic records should share the same shares of red and blue. Meanwhile, none of the groupings should define a standard point-radius style, which is used on a per-record basis to encode the number of ballots cast at that location.

Neatline-inflected CSS makes it easy to model these relationships. To start, I'll define some basic styles for the top-level `precinct` tag, which is applied to all the records in the exhibit:



Now, when I click "Save," Neatline instantaneously updates the `stroke-width` and `fill-opacity` styles on all records tagged with `precinct`:

[![precinct-styles](http://static.scholarslab.org/wp-content/uploads/2013/05/precinct-styles-1024x640.jpg)](http://static.scholarslab.org/wp-content/uploads/2013/05/precinct-styles.jpg)

Next, I'll set the `before-date` and `after-date` properties for each of the for election season tags, which ensure that the four batches of records phase in and out of visibility in unison as the timeline is scrolled back and forth:



Now, when I open up any individual record, the `before-date` and `after-date` fields will be updated with new values depending on which election the record belongs to:

[![dates-fieldset](http://static.scholarslab.org/wp-content/uploads/2013/05/dates-fieldset.jpg)](http://static.scholarslab.org/wp-content/uploads/2013/05/dates-fieldset.jpg)

Last, I'll define the coloring rules for the two political parties. First, the Democrats:



Click "Save," and all democratic precincts update with the new color:

[![democrat-styles](http://static.scholarslab.org/wp-content/uploads/2013/05/democrat-styles-1024x640.jpg)](http://static.scholarslab.org/wp-content/uploads/2013/05/democrat-styles.jpg)

**Auto-updating stylesheet values**

So far, we've just been entering hard-coded values into the stylesheet. This often makes sense for properties that have inherently semantic values (eg, dates). For other attributes, though (namely colors), it's much harder to reason in the abstract about what value you want. For example, I know that I want the republican precincts to be "red," but I don't know off-hand that `#ff0000` is the specific hexadecimal value that I want to use. It makes more sense to open up the edit form for an individual record and use the color pickers for the "Fill Color" field to find a color that looks good.

And even for styles that can be reasoned about in the abstract, it's often easier and more intuitive to use the auto-previewing functionality on one of the record forms to tinker around with different values. Once you've decided on a new setting, though, it's annoying to have to manually propagate the value back into the stylesheets so that all of the record's siblings stay in sync - you'd have to copy the value, close the form, open up the stylesheet, find the right rule, and paste in the new value. To avoid this, Neatline also automatically updates the _stylesheet_ when individual record values are changed, and immediately pushes out the new value to all of the record's siblings.

Let's go back to the election results. For the republican precincts, instead of pasting in a specific hex value for the `fill-color` style, we'll just "register" `fill-color` as being one of the properties controlled by the `republican` tag by listing the style and assigning it a value of `auto`:



When I click "Save," nothing happens, since a value isn't defined. Now, though, I can just open up any of the individual `republican` records, choose a shade of red, and save the record. Since we activated the fill-color style for the republican tag, Neatline automatically updates all of the other `republican` records _just as if we had set the value directly on the stylesheet_:

[![republican-record](http://static.scholarslab.org/wp-content/uploads/2013/05/republican-record-1024x640.jpg)](http://static.scholarslab.org/wp-content/uploads/2013/05/republican-record.jpg)

And now, when I go back to the stylesheet, the `fill-color` rule under `republican` is automatically updated with the value that we just set in the record form:

[![updated-stylesheet](http://static.scholarslab.org/wp-content/uploads/2013/05/updated-stylesheet.jpg)](http://static.scholarslab.org/wp-content/uploads/2013/05/updated-stylesheet.jpg)

This also works for styles that already have concrete values. For example, say I change my mind and want to tweak the shade of blue used for democratic precincts. I can just open up any of the individual `democrat`-tagged records, pick a new value with the color picker, and save the record. Again, Neatline automatically replaces the old value on the stylesheet and propagates the change to all of the other democratic precincts.
