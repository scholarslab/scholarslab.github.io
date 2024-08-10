---
author: wayne-graham
date: 2010-08-18 08:47:57+00:00
excerpt: 'The following was a response I made in an email exchange with Tom Elliot
  of the Pleiades Project  and Bethany Nowviskie. Our conversation was prompted by
  Tom''s inquiry on planning, budgeting for, and conducting a code review as part
  of a grant-funded project.'
layout: post
slug: code-reviews-and-the-digital-humanities
title: Code Reviews and the Digital Humanities
category: essay
tags:
- research and development
- code
---

The following was a response I made in an email exchange with Tom Elliot of the [Pleiades Project](http://pleiades.stoa.org/) and Bethany Nowviskie. Our conversation was prompted by Tom's inquiry on planning, budgeting for, and conducting a code review as part of a grant-funded project. What follows is a slightly modified (and expanded) version of that email conversation.

Testing and code review is something that has been on my mind a lot lately as our shop has been shifting its focus from boutique, one-off projects, to building upon frameworks maintained by other organizations. As these code bases continue to grow, we need to ensure that subtle changes to the core functionality of the underlying systems do not propagate into bugs in our code. We also need a way to handle this situation quickly and efficiently when this does arise. This was especially reinforced by two recent projects our group undertook to migrate nearly decade-old software on to new servers.

If you ask anyone in the office, they will most likely roll their eyes when I start beating the testing drum. <!-- more --> These are great tools for not only generating pretty green and red bar charts, but also documenting the intention of the programmer in writing the code, and zeroing in on bugs where they occur without weeks of hunting. However, this is only one of the tools in the chest for writing solid code, sans bugs. In fact, there are a lot of sophisticated, freely available, automated tools that help programmers of all skill levels not only write more consistent code, but also zero in on potential performance issues and just plain smelly code (that they obviously wrote just to get running and fully intended to go back and fix later).

Over the years, tools that measure code complexity (like [PMD](http://pmd.sourceforge.net/), [PHPMD](http://phpmd.org/about.html), and [flog](http://ruby.sadi.st/Flog.html)), code dependency analyzers ([JDepend](http://www.clarkware.com/software/JDepend.html), [PHPDepend](http://pdepend.org/news.html), and [rcov](http://eigenclass.org/hiki.rb?rcov)), copy/paste detection (in PMD, [flay](http://ruby.sadi.st/Flay.html), and [phpcpd](http://github.com/sebastianbergmann/phpcpd)), and enforcing coding standards (a la PHPCode Sniffer and rails_best_practices), along with not only unit and integration tests (in whatever style you choose), but a code coverage analysis reports that provides feedback on which lines were executed, go a long way in reducing the number of bugs in code. These tools are really pre-emptive step in writing stronger, more elegant, and ultimately more sustainable code, all before once gets to the point of performing a human code review.

While I don't need to be building software per-se, I have started experimenting with the Hudson continuous integration server as a dashboard to get a quick snapshot of how these different metric tests all play together in the code that our team writes. It is no longer good enough to simply have code functioning, we need the code to pass certain thresholds of quality and sustainability before we can release. Where we find issues in the code, like test coverage, high cyclomatic complexity, lots of copy-n-pasted code, or high volatility in dependency scans, we can sit down and perform a rather focused mini code review (resembling the pair-programming idiom) on that section of code to refactor a better solution or approach To this end, we're currently working on a set of baseline testing and reporting tools for our projects. Currently, we have Ant scripts for our PHP and Java projects, and a gem bundle for Rails and Sinatra projects.

While we take this approach in the Scholars' Lab, we were wondering if there were others out there that had opinions or experiences to share about code review during development? If you do, leave a comment, write a post, or tweet at us (@scholarslab, @nowviskie, @wayne_graham) -- and at @paregorios, who started the conversation in the first place. We'd love to hear about your best practices (and even horror stories) and philosophy on what constitutes good software and useful code reviewing, including whether you think current trends in open source development constitute a good-enough review for DH projects.


## Further Resources


Java



	
  * [PMD](http://pmd.sourceforge.net/)

	
  * [JDedend](http://www.clarkware.com/software/JDepend.html)

	
  * [junit](http://www.junit.org/)

	
  * [Clover](http://www.atlassian.com/software/clover/)

	
  * [Javadoc](http://www.oracle.com/technetwork/java/javase/documentation/index-jsp-135444.html)

	
  * [Checkstyle](http://checkstyle.sourceforge.net/)


PHP

	
  * [PHP Depend](http://pdepend.org/news.html)

	
  * [PHPMD](http://phpmd.org/about.html)

	
  * [phpcpd](http://github.com/sebastianbergmann/phpcpd)

	
  * [PHP Codesniffer](http://pear.php.net/package/PHP_CodeSniffer/redirected)

	
  * [phpDocumentor](http://www.phpdoc.org/)


Ruby

	
  * [Flog](http://ruby.sadi.st/Flog.html)

	
  * [Flay](http://ruby.sadi.st/Flay.html)

	
  * [metric_fu](http://metric-fu.rubyforge.org/)

	
  * [rdoc](http://rdoc.sourceforge.net/)


Javascript

	
  * [QUnit](http://docs.jquery.com/QUnit)

	
  * [JSCoverage](http://siliconforks.com/jscoverage/)


Continuous Integration

	
  * [Hudson](http://hudson-ci.org/)

	
  * [Phing](http://phing.info/trac/)

	
  * [CruiseControl](http://cruisecontrol.sourceforge.net/)


Issue Tracking

	
  * [Google Code](https://code.google.com/hosting/)

	
  * [GitHub](http://github.com/)

	
  * [Project Kenai](http://kenai.com/)

	
  * [Jira](http://www.atlassian.com/software/jira/)

	
  * [Redmine](http://www.redmine.org/)


