---
author: eric-rochester
date: 2011-12-02 16:40:58+00:00
layout: post
slug: acceptance-testing-for-omeka-plugins
title: Acceptance Testing for Omeka Plugins
categories:
- Research and Development
tags:
- code
- omeka
- requirements-gathering
---

For the month of December, I'm going to be heads-down on NeatlineFeatures ([project page](http://neatline.scholarslab.org/plugins/neatline-features/); [Github](https://github.com/scholarslab/NeatlineFeatures)). This is an [Omeka](http://omeka.org/) plugin that lets people associate geo-spatial metadata with Omeka items by drawing on a map.





Before I started coding, I wanted to make sure I knew what I was doing, so I wrote a few [user stories](http://www.extremeprogramming.org/rules/userstories.html) and passed them around for comment. Part of the value of user stories is that they are expressed in short, natural language statements, but they can also be transitioned into [acceptance tests](http://en.wikipedia.org/wiki/Acceptance_testing) that everyone has had a voice in.





(I should mention that I'm really just trying out user stories. They seem like a good idea in theory, but we'll have to see how it works in practice.)





When testing Omeka plugins, I use [Omeka's unit testing framework (PHPUnit)](http://omeka.org/codex/Unit_Testing). I don't see a reason to change that. However, unit testing frameworks generally aren't a good fit for acceptance tests. They are both too focused and low-level and sometimes don't have a great way of acting like a browser. A bigger problem is that they shut non-coders out of the loop. Having an English-y way of expressing tests helps to involve everyone working on the project, not just the developers.





For the [Praxis Program](http://praxis.scholarslab.org/), we've been talking about using [Cucumber](http://cukes.info/) for testing. I thought this would be a good time to try it out.





I expected this would be painful.





Fortunately, I was wrong.





# About the System





The tests will be driven by Cucumber. Since this is in Ruby, they won't interact directly with Omeka (there is [cuke4php](https://github.com/olbrich/cuke4php/wiki), but I'm not going there). Instead, everything will take place through the browser. Here's how the system breaks down:





**[Cucumber](http://cukes.info/)** will read in the tests and execute them. It provides the language that we use to write the tests and the code we use to implement them.





**[Capybara](https://github.com/jnicklas/capybara)** defines a DSL for interacting with the browser. We'll use this when we define actions or steps for the tests.





**[selenium-webdriver](http://rubygems.org/gems/selenium-webdriver)** allows Capybara, Cucumber, or any Ruby code to talk to the browser.





**[Selenium](http://seleniumhq.org/)** is a system for writing tests that run in the browser. It has a Firefox plugin, which we'll use today for actually doing the tests.





**[Omeka](http://omeka.org/), [PHP](http://www.php.net/), and [MySQL](http://www.mysql.com/)** are all running in a VM, managed by [Vagrant](http://vagrantup.com/). (See [this post](http://www.scholarslab.org/announcements/omeka-development-with-vagrant/) for how to set up the system.)





**[Rake](http://rake.rubyforge.org/)** is used to control the system.





# Adding Ruby





Most of these tools are in [Ruby](http://www.ruby-lang.org/), so the first step is to mix Ruby into the Omeka/PHP plugin project. To manage Ruby, I use [RVM](https://rvm.beginrescueend.com/), so I added a `.rvmrc` file to switch to the right version of Ruby and make sure all the right gems are installed:



[sourcecode language="bash"]
rvm use 1.9.3
bundle install
[/sourcecode]



The gems are listed in a `Gemfile`:



[sourcecode language="ruby"]
source :rubygems
gem 'rake'
gem 'cucumber'
gem 'capybara'
gem 'selenium-webdriver'
[/sourcecode]



That's it. Now, when I change to the plugin directory, Ruby and the gems I need are available.





# Setting up Cucumber





Cucumber expects a specific directory structure. I created that with these Bash commands:



[sourcecode language="bash"]
mkdir features
mkdir features/step_definitions
mkdir features/support
[/sourcecode]



Cucumber also needs a configuration file in `features/support/env.rb`:



[sourcecode language="ruby"]
require 'selenium-webdriver'
require 'capybara'
require 'capybara/cucumber'
require 'capybara/dsl'
Capybara.app_host = 'http://features.dev'
Capybara.run_server = false
Capybara.default_wait_time = 15
Capybara.default_driver = :selenium
[/sourcecode]



# Adding Features





Cucumber groups tests into [features](https://github.com/cucumber/cucumber/wiki/Feature-Introduction). Each feature is in a separate file, and each contains one or more scenarios.





For a contrived example, I tested logging into into the Omeka admin console.





## Feature Files





The feature file for this is easy to read and understand, by design. I put this into `features/login.feature`:



[sourcecode language="ruby"]
Feature: AdminLogin
  In order to make changes to the site
  As the site administrator
  I want to be able to log into the admin console

  Scenario: Login
    Given I visit the admin page
    And I enter "features" for the "Username"
    And I enter "features" for the "Password"
    When I press "Log In"
    Then I should see a page title of "Omeka Admin:"
    And I should see a header of "Dashboard"
[/sourcecode]



That's it. I could have added a scenario for not authenticating correctly or other cases, but I won't worry about that right now.





## Step Files





Feature files are great for people, but Cucumber/Ruby still doesn't know what to do with it. To fill that gap, I defined what to do for each step in the scenario in a step file. I put this into `features/step_definitions/login_steps.rb`:



[sourcecode language="ruby"]
Given /^I visit the admin page$/ do
  visit('/admin')
end

Given /^I enter "([^"]*)" for the "([^"]*)"$/ do |value, label|
  fill_in(label, :with => value)
end

When /^I press "([^"]*)"$/ do |button|
  click_on(button)
end

Then /^I should see a page title of "([^"]*)"$/ do |page_title|
  find(:xpath, '//title').has_content?(page_title)
end

Then /^I should see a header of "([^"]*)"$/ do |header|
  find(:xpath, '//h1').has_content?(header)
end
[/sourcecode]



(It would be better to group the step definitions into files by task or domain or some other way than one-step-file-per-feature-file, but for this demonstration, this is fine.)





Step definitions tell Cucumber what to do for each test. Inside each definition, I used Capybara commands that tell the browser what to do or check the page that the browser's looking at. These commands use Selenium to actually drive the action, but I don't have to worry about that.





# Running Tests





We have a couple of steps left to see actual tests being run. First, we could use the `cucumber` command, but we'll probably have other things to automate (PHPUnit tests, I'm looking at you), so we'll go ahead and create a `Rakefile` that runs the Cucumber tests. This is easy to do, since Cucumber ships with some rake tasks.





Put this into `Rakefile`:



[sourcecode language="ruby"]
require 'cucumber/rake/task'

task :default => :cucumber

Cucumber::Rake::Task.new do |t|
  t.cucumber_opts = %w{--format pretty}
end
[/sourcecode]



Now, as I mentioned before, the Omeka site is running in a Vagrant-managed VM. Start it up:



[sourcecode language="bash"]
vagrant up
[/sourcecode]



Once the VM's up, run the tests by just calling `rake`. You'll see Firefox start up and close down, and at the end, you should see something like this (you may want to set the video to full screen):





[Cucumber-Omeka](http://vimeo.com/32990350) from [Eric Rochester](http://vimeo.com/user2087066) on [Vimeo](http://vimeo.com).
