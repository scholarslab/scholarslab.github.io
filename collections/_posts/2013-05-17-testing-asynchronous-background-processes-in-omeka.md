---
author: david-mcclure
date: 2013-05-17 10:16:22+00:00
layout: post
slug: testing-asynchronous-background-processes-in-omeka
title: Testing asynchronous background processes in Omeka
category: blog
tags:
- Research and Development
- omeka
crosspost:
  - title: dclure.org
    url: http://dclure.org/logs/testing-asynchronous-background-processes-in-omeka/
---

I ran into an interesting testing challenge yesterday. In Neatline, there are a couple of controller actions that need to spawn off asynchronous background processes to handle operations that are too long-running to cram inside of a regular request. For example, when the user imports Omeka items into an exhibit, Neatline needs to query a (potentially quite large) collection of Omeka items and insert a corresponding Neatline record for each of them.

Jobs extend `Omeka_Job_AbstractJob` and define a public `perform` method:



And can be dispatched asynchronously by getting the `job_dispatcher` out of the registry and passing the job name and parameters to `sendLongRunning`:



It's easy enough to directly unit test the `perform` method on the job, but, since actual execution of the process is non-blocking, the jobs can't be tested at the integration level in the ordinary manner. For example, I'd like to just dispatch a request with a mock item query, and check that the correct Neatline records were created. This can't be asserted reliably, though, since there's no guarantee that the job will have completed before the testing assertions are executed.

The job itself is non-blocking, but the job invocation in the controller code _is_ blocking, and can be tested pretty easily by replacing the `job_dispatcher` with a testing double and spying on the `sendLongRunning` method. Since this is a pattern that needs to be implemented in more than one test, I started by adding a `mockJobDispatcher` method to the abstract test-case class that mocks the job dispatcher and injects it into the registry:



Then, in the test, we can just call this method to mock the dispatcher, assert that the dispatcher is expecting a call to `sendLongRunning` with the correct job and parameters, and then fire off a mock request to the controller action under test:



This is a pretty good solution, but not perfect: The integration test is really asserting an intermediate step in the implementation of the controller action, not the end result - it tests _that_ the job was called with certain parameters, not the final effect of the request. This opens up the door to false positives. For example, in the future, I might make a breaking change to the public API of the `Neatline_ImportItems`. Assuming I've changed the job's unit tests to assert against the new API, the test suite would pass even if I completely forget to update any of the job invocations, since the integration tests are just asserting the structure of the invocation, not the final effects.

I've encountered a version of this problem more than once, and I've never really found a good solution to it. Short of moving up to something like in-browser Selenium tests, or resorting to hacky execution pauses in the integration tests, has anyone ever come across a better way to do this?
