---
author: david-mcclure
date: 2013-05-28 13:30:41+00:00
layout: post
slug: announcing-neatline-2-0-alpha2
title: Announcing Neatline 2.0-alpha2!
category: essay
tags:
- geospatial-and-temporal
- neatline
crosspost:
  - title: dclure.org
    url: http://dclure.org/logs/announcing-neatline-2-0-alpha2/
---

We're pleased to announce Neatline 2.0-alpha2, a second developer-preview version that gets us one step closer to a stable 2.0 release! For now, this is still just an testing release aimed at engineers and other folks who want to experiment with the new set of features (for more information, check out the [announcement for the first testing release](https://scholarslab.org/geospatial-and-temporal/announcing-neatline-2-0-alpha1/)). Grab the code here:

[Neatline-2.0-alpha2](http://static.scholarslab.org/wp-content/uploads/2013/05/Neatline-2.0-alpha2.zip) | [NeatlineWaypoints-2.0-alpha2](http://static.scholarslab.org/wp-content/uploads/2013/05/NeatlineWaypoints-2.0-alpha2.zip) | [NeatlineSimile-2.0-alpha2](http://static.scholarslab.org/wp-content/uploads/2013/05/NeatlineSimile-2.0-alpha2.zip

This revision fixes a couple of bugs and adds two new features that didn't make it into the first preview release:

**A user-privileges system**, which makes Neatline much easier to use in collaborative, multi-user settings like classrooms and workshops. In a lot of ways, this feature reflects an expanded focus for Neatline. During the first cycle of development last year, we were mainly focused on building a tool designed for individual scholars and students working on focused projects. In that setting - when just a handful of trusted collaborators are working on a project - it's often not necessary to assign "ownership" to individual pieces of content to protect them from being changed or deleted by other users.

Over the course of the last year, though, we've realized that there's a lot of interest in using Neatline in a classroom setting, which introduces a new set of requirements. When 50 students are all building their own Neatline exhibits inside a single installation of Omeka, it would be easy for someone to accidentally edit or delete someone else's work - there need to be guard rails to prevent users from modifying content that doesn't belong to them.

In Neatline 2.0-alpha2, we've added an ACL (access control list) that makes it possible to enforce a three-level user privileges system:

* **Admin** and **Super** users can do everything - they can create, edit, and delete all Neatline exhibits and records, regardless of who they were originally created by.

* **Contributor** users can add, edit, and delete their own exhibits, but can't make changes to exhibits or records that they didn't create.

* **Researcher** users are denied all Neatline-related privileges - they can't create, edit, or delete any Neatline exhibits or records.

This is a simple approach, but we think it addresses most of the basic patterns for classroom use that we've encountered here at UVa and elsewhere. If students are working on individual projects, each can be given a separate "Contributor" account, which allows them to create and update their own exhibits, but blocks them from changing anyone else's work. If students are working together in groups, each group can be assigned an individual "Contributor" account, which allows group members to update each other's work, but prevents them from making changes other groups' exhibits.

**An exhibit-specific theming system** that makes it possible to create completely custom "sub-themes" for individual Neatline exhibits. Before, it was possible to customize the layout and styling of the Neatline exhibit views by editing the Omeka theme, which would change the appearance of _all_ the exhibits on the site. In many cases, though, individual exhibits have specific requirements. Depending on the content, it might be useful for different exhibits to have different page headers, typography, or viewport layouts; and it's also really useful to be able to load exhibit-specific JavaScript files, which can be used to define custom interactions for individual exhibits.

In this release, every aspect of an exhibit's public view can be completely customized by adding an "exhibit theme" that sits inside of the regular Omeka theme. For example, if I have an exhibit called "Testing Exhibit" with a URL slug of `testing-exhibit`, I can define a custom theme for the exhibit by adding a directory in the public theme at `neatline/exhibits/themes/testing-exhibit`. With the directory in place, Neatline will automatically load any combination of custom assets:

* If a `template.php` file is present in the directory, it will be used as the view template for the exhibit in place of the default `show.php` template that ships with Neatline.


* If a `template.php` file is present in the directory, it will be used as the view template for the exhibit in place of the default `show.php` template that ships with Neatline.



* All `.js` and `.css` files in the directory will be loaded in the public view. This makes it possible to break additional styling and JavaScript functionality across multiple files, which makes it easier to break complex customizations into smaller units.




This gives the theme developer full control over the appearance and behavior of each individual exhibit, making it possible to build a extremely diverse collection of Neatline projects inside a single installation of Omeka.


Check out the [change log](https://github.com/scholarslab/Neatline/blob/develop/CHANGELOG.md#v20-alpha2-commits) for more details. And let us know what you think!
