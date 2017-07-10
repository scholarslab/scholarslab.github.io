---
author: ssl2ab
comments: true
date: 2013-02-14 11:09:26+00:00
layout: post
link: http://scholarslab.org/grad-student-research/rails-is-kind-of-hard-to-get-up-and-running/
slug: rails-is-kind-of-hard-to-get-up-and-running
title: Rails is kind of hard to get up and running
wordpress_id: 7265
categories:
- Grad Student Research
tags:
- praxis program
- rails
---

To pile onto an overrused trope: for a web framework famed for its use of use, Rails (and maybe Ruby itself) are really surprisingly difficult to get up and running. In hindsight, the very existence of tools like RVM and Bundler to handle the management of Ruby environments and libraries is a bit of a hint. I've set up Prism twice now, on my old Thinkpad running Ubuntu Precise and now on my new Thinkpad running Ubuntu Quantal and I think I've had a bit of a different experience each time.

This time, I first ran into the usual problems with Ruby Bundler. I'm sure that once things are set up and running, Bundler is a lifesaver and that the speedbumps I ran into are more the fault of individual gems. But it's very clearly not the automated process that it's made out to be out of the box. Nokogiri and SQLite both caused the process to fail; figuring out why required me to manually gem install them: it was, of course, because my Linux distro doesn't come with their dependencies. It's certainly no big deal to Google what these dependencies are and apt-get them and it's reasonable that a Ruby gem manager shouldn't be expected to manage non-gem software, but a more streamlined process would be nice.

Then, db:migrate threw back the "you don't have a javascript runtime" error, which directs me to the execjs gem. Again, it seems reasonable that it isn't a dependency because in theory any JS runtime will work, but it also seems reasonable that there should be a better mechanism somewhere upstream to handle this.

Then, db-migrate returned the more inscrutable "no such file to load -- ripper" error. The first problem was that  "ripper" is not a very unique name, even within the ruby namespace (there's apparently a ruby-ripper gem for audio encoding). The ripper I was looking for is a 1.8 port of implementation built into Ruby 1.9. I was confused that this wasn't just handled by Bundler (or at least uncovered by it). When it didn't work, I eventually realized that Prism actually simply required Ruby 1.9. Maybe I should have known this from the start (I seem to recall figuring it out faster the first time around), but I also feel that this fact would have been less ambiguously messaged and discovered earlier with other languages with split versions (Python 2 vs 3, for example).

So, getting RVM installed on Ubuntu also required a bit of configuration, revealed through the web documentation rather than the actual error reporting. But even after getting it and Ruby 1.9 installed, Prism wouldn't run without Readline support. That came with a helpful error message about what packages to install, which actually turned out to be a Bad Thing, because installing it actually broke recompiling Ruby with Readline support on Ubuntu 12.04+...

Long story short: it's a series of issues that aren't fundamentally unreasonable in themselves, but in aggregate leech away all of a person's resolve and aspiration, leaving only a desiccated and hollow husk.
