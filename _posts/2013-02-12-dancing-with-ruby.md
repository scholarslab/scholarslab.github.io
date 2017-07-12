---
author: chris-peck
date: 2013-02-12 15:57:13+00:00
layout: post
slug: dancing-with-ruby
title: Dancing with Ruby
categories:
- Grad Student Research
tags:
- dance
- praxis program
- Programming
- ruby
- speech
---

As the Praxis Team grapples with the necessity of making decisions (difficult decisions!) about our priorities when it comes to creating at tangible product between now and May, I continue to find new uses for Ruby in my own non-Prism-related work.

Last week [ a choreographer friend](http://goodmove.be) asked for help with a problem that came up in her rehearsal last week for our new project. She had devised a system of textual instructions to guide a dance improvisation. This meant that in rehearsal one of the dancers would have to sit out and play the role of reading the instructions. Her system was a chance procedure, so it had already occurred to her that it might be possible to record the instructions one by one and place the soundfiles in a shuffled iTunes playlist. But she wanted another level of organization as well: an instruction drawn at random from one of three categories in sequence. A random instruction from the first category, another random selection from the second category, one from the third, then back to the first category, and so on. She had seen me whip up [Max Patches](http://cycling74.com/whatismax/) to shuffle soundfiles in various ways and wondered if I could do something like that for this case.

Using Ruby's ability to execute shell commands, and the CLI for Mac's speech synthesizer, I was able to come up with a solution that didn't require recording all of the instructions.

`
require "csv"
adjectives_file = "adjectives.csv"
pause = 5`

adj = CSV.read(
adjectives_file,
{
:headers => true,
:header_converters => :symbol
}
)

adj_by_cat = {}

adj.each do |a|
if adj_by_cat[a[:category]].nil?
adj_by_cat[a[:category]] = []
end
adj_by_cat[a[:category]].push a[:adjective]
end

20.times do
adj_by_cat.each do |cat, adjs|
cmd = "say "#{adjs.shuffle.pop}"; sleep #{pause};"
#puts cmd
%x( #{cmd} )
end
end

This little script reads in the instructions (organized into categories in a CSV file) and speaks them in a synthesized voice like [this](https://soundcloud.com/chris-peck-6/adjective-shuffle-test). Fun, right?
