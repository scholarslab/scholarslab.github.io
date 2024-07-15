---
author: zane-schwarzlose
date: 2012-02-19 18:00:18+00:00
layout: post
slug: commentary-on-migrating-an-omeka-site
title: Commentary on Migrating an Omeka Site
categories:
- Research and Development
tags:
- migration
- omeka
- Programming
- TEI
- TEIDisplay
---

This week, for the TEIDisplay project, I migrated an existing Omeka installation to another server for Carin and me to use as our development sandbox. (We could have also locally installed an Omeka collection on our computers, but I wanted to make sure we were always wading through the same river.)

I found some good documentation on [moving installations of Omeka](http://omeka.org/codex/Moving_to_Another_Server) between servers, but I wanted to add some commentary to these instructions. Institutions might use these instructions and commentary when they wish to upgrade servers or change hosts for their Omeka sites.

**First, install a new version of Omeka on your new server.**
Carin and I needed to complete this step so we were sure we were using the latest version of Omeka. The [steps for installing Omeka](http://omeka.org/codex/Installation) are well documented. I should note that several web hosting companies offer one-click installations of Omeka. This might a preferable option for information professionals lacking technical expertise.

**Second, export your existing database file.**
In a moment, we're going to copy all of your files from your old server to your new server. Intuitively, you might think that the database file storing your collections would be moved along with those files. Unfortunately, that is not the case. [Export your database file using these instructions.](http://omeka.org/codex/Backing_up_an_Omeka_Database)

Please note: these instructions don't remind you that you need to update the host, user name, password, and database name fields in the database file before importing it into your new server. Make these changes.

**Third, import your modified database into your new database on the new server.**
You can import these database commands from phpMyAdmin or the command line. It is important to note that if you don't change some of the information described above, your tables will still get created. Things will appear to be happening. This is not the case.Your database will not be able to talk to your new server.

**Fourth, copy all of your files from your previous installation to a hard drive.**
Get the FTP information for your old server (host name, user, and password.) Use an FTP program to copy these files. Preserve your file structure. Highlight your entire file directory for the site and copy it while preserving the file structure. Moving the files might take some time. (6 hours in my case!) Much of this time is taken by the archival quality image files. Don't worry.

If your FTP program stops working in the middle of the transfer, don't worry. You might have just disconnected from the Internet for a second. Alternately, some hosting companies throttle your connection if you're taking up too much bandwidth. Just reconnect to your FTP program and restart the transfer where you started.

**Fifth, copy the files on your hard drive to your new server.**
Get the FTP information for your old server (host name, user, and password.) Highlight the entire file directory for the old site (stored on your hard drive) and copy it to the new site. Be sure to overwrite existing files and folders.

You now have made a copy of an Omeka installation on a new server. Your user names and passwords will be the same as for the previous installation.

Aside from reactivating plug ins and themes, the most prevalent problem I saw in this process were servers write-protecting the database file. This means that the file db.ini in the root directory will remain the default file despite you trying to overwrite it. There are many ways to fix this problem, but you can just delete the default db.ini file from your root directory and then transfer the db.ini from your hard drive.
