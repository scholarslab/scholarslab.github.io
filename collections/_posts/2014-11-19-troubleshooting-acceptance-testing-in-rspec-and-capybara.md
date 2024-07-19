---
author: scott-bailey
date: 2014-11-19 11:06:30+00:00
layout: post
slug: troubleshooting-acceptance-testing-in-rspec-and-capybara
title: Troubleshooting Acceptance Testing in RSpec and Capybara
category: blog
tags:
- Research and Development
- code
---

Over the past two weeks, I’ve been pair programming with [Eric](http://scholarslab.org/people/eric-rochester/). Together, we’ve been building out a suite of acceptance tests for [Ivanhoe](http://ivanhoe.scholarslab.org) to provide a basic check on critical, user-facing functionality as we refactor parts of the [codebase](http://github.com/scholarslab/ivanhoe). While learning to write basic tests has been relatively straightfoward for me, due to the natural language character of acceptance tests with [RSpec](https://relishapp.com/rspec) and [Capybara](http://jnicklas.github.io/capybara/), we have run into a couple of hang-ups in getting the test suite functional. I want to briefly describe one of these problems and how we resolved it.





### Database Transactions and WordPress Problems





After getting a number of tests working, Eric and I decided to straighten out the database transactions occuring before running the suite and between each test. Before the suite runs, we set up a testing database from fixtures, and between each test we want to reset the database. This reset ensures that any given test is unaffected by database events from previous tests. Initially, this was to be handled with two Ruby gems: [database_cleaner](https://github.com/DatabaseCleaner/database_cleaner) and [sequel](https://github.com/jeremyevans/sequel). The database reset wasn’t working when we attempted to run it however. Eric realized that, due to the testing running in a different process than the application, we would not be able to use the default transaction strategy. Given that WordPress uses a MySQL database, the deletion strategy was not available, leaving us only with truncation. Truncation, however, without some fine tooling, would have cut off more of the database than necessary, requiring a more extensive rebuild from the fixtures. We decided that it would make more sense to write more restrained database transactions ourselves in the [`spec_helper.rb`](https://github.com/scholarslab/ivanhoe/blob/feature/rspec_scott/spec/spec_helper.rb) file. 





While this provided an intial solution, it led to lengthy test times, and lengthy test times lead to a distinct lack of excitement for running tests regularly, substantially hindering the effectiveness of testing at all. We set out to refactor the database transactions to reduce testing time, but in doing so created a perhaps more significant problem. Running our tests led to two significant problems in WordPress:






	
  * TinyMCE, the WYSIWYG editor used by default in the WordPress editor, was no longer working, with relevant failing tests indicating that TinyMCE was not defined on pages with the WordPress editor

	
  * an admin user, with full privileges, was able to login, but not able to access the back-end Dashboard at all, being given instead a message that the user did not have the necessary permissions to access the page. 





### Tracing Errors





The first issue we discovered due to the failure message returned by RSpec and the screenshots at point of failure provided by [capybara-screenshot](https://github.com/mattheworiordan/capybara-screenshot). The second we only discovered in the course of attempting to access the backend of Wordpress to create a post to test whether TinyMCE was being loaded correctly (Ivanhoe uses front-end forms for creating posts of various custom post-types). Given that the first issue was clear and explicit immediately, I began investigating why TinyMCE wasn’t defined. Using the developer tools in Chrome, I discovered that rather a number of links to Javascript files were in fact not being generated in the footer, among those TinyMCE and its component pieces. Thus began a day of tracing out how default Javascript files are queued in the WordPress core. While illuminating as to how WordPress generates and gathers such links, this ultimately led nowhere due to a lack of PHP errors, failure to generate new and helpful PHP errors, and inability to locate any point where the testing script might interfere with the generation of these default links. 





As part of this work, though, I tried to create a post through the WordPress Dashboard to check whether TinyMCE was being loaded along with the editor when called through WordPress core (vs. when called through the front-end forms in Ivanhoe). Doing so revealed the second issue, that even as an admin user I was not able to access the Dashboard due to permissions. Checking the database tables against those of a working installation of WordPress and Ivanhoe, I discovered that the `wp_usermeta` table was being overwritten with key-value pairs from a different table, thereby preventing WordPress from recognizing the user’s permissions. Without knowing precisely why, Eric and I thought that fixing this might fix the Javascript loading problems. 





During our weekly pair programming time, we set out to figure out how and why the testing script was causing this mis-copy of the database table. Through a repeated cycle of starting with a clean database, running the script with different system actions commented out, and checking the database, we eventually discovered that the database fixtures themselves, loaded during the test script, were creating the erroneous key-value pairs in the `wp_usermeta` table. After generating a clean set of fixtures, our tests worked, passing as expected. Both errors in WordPress were resolved. To ensure that we don’t run into this problem again, we used a [rake task](https://github.com/scholarslab/ivanhoe/blob/feature/rspec_scott/Rakefile#L17) to create backup copies of the clean database tables and then used those in [`spec_helper.rb`](https://github.com/scholarslab/ivanhoe/blob/feature/rspec_scott/spec/spec_helper.rb) to ensure clean data between tests.





We still don’t know when the error in the fixtures was introduced, and I’ll be spending at least a bit of time trying to figure that out, but, for now the testing suite for Ivanhoe is working. We’ll continue building that out for better coverage and begin refactoring the Ivanhoe codebase. When I mentioned to [Wayne](http://scholarslab.org/people/wayne-graham/) and [Ammon](http://scholarslab.org/people/ammon-shepherd/) that we had figured out the error, and it turned out not to be the script at all, neither was surprised. They were, I suspect, not suprised by two things: that it took several days of work to debug a problem in WordPress and that it wasn’t the script at all, just bad fixtures.   




