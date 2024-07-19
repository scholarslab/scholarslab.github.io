---
author: alex-gil
date: 2012-03-19 14:55:16+00:00
layout: post
slug: a-cukeybara-sandwich
title: a cukeybara sandwich
category: blog
tags:
- grad student research
- praxis
---

During Spring Break I started working on integration tests for Prism. An [integration test](http://en.wikipedia.org/wiki/Integration_testing) is a bit more involved than the regular [unit tests](http://en.wikipedia.org/wiki/Unit_testing) we've been doing with the RSpec framework so far. An integration test seeks to test the software by imitating a typical user interacting with it. In particular, we wanted to make sure that all the different translations from the i18n process were working. In order to get it right, we needed to emulate a user visiting the homepage in different languages.

For Rails development, the tools of choice for this kind of testing are [Cucumber ](http://cukes.info/)and [Capybara](https://github.com/jnicklas/capybara). Cucumber is a language, a framework and a workflow if I understand it correctly. It is much more human readable than RSpec (even though it borrows some RSpec for some tasks), which makes ideal to share with non-developers in the team. Here, for example, is the .feature file I created to test i18n:


    
    
    Feature: Check language
      In order to test the selected language is right
      As a cosmopolitan developer
      I want to make sure the right words are present in the header
    
      Scenario: English pages
        When I visit the "English" homepage
        Then the header should have the words 'Prism is'
    
      Scenario: French pages
        When I visit the "French" homepage
        Then the header should have the words 'Prism est'
    
      Scenario: Spanish pages
        When I visit the "Spanish" homepage
        Then the header should have the words 'Prism es'
    
      Scenario: German pages
        When I visit the "German" homepage
        Then the header should have the words 'Prism ist'
    



Once a feature file has been created, the next step is to 'translate' the natural language into 'step definitions.' Line by line, we convert the .feature file to Ruby... actually, to Capybara. Capybara is a Ruby gem that helps us imitate the behavior of users visiting a page by sending GET and POST requests if I understand it correctly. Below is our sample .rb 'step definition' file translating the original feature into ruby actions.

    
    
    When /^I visit the "([^"]*)" homepage$/ do |lang|
      if lang == 'French'
        locale = 'fr'
      elsif lang == 'English'
        locale = 'en'
      elsif lang == 'Spanish'
        locale = 'es'
      elsif lang == 'German'
        locale = 'de'
      end
    
      visit('/' + "?locale=" + locale)
    end
    
    Then /^the header should have the words ([a-z]*|[A-Z]*)/ do |desc|
      page.should have_content(desc)
    end
    



Once the feature descriptions and the step definitions are in place, we run the test by simply invoking cucumber from the command line. I am happy to announce that after running the tests above, Prism is in the GREEN. I repeat, Prism is in the GREEN.
