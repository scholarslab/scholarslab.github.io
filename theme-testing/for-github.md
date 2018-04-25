*Issues for GitHub that I keep being too lazy to submit in the moment, if discovered when have good flow going.*

- Person: 'posts by blah' farther to left than edge of flexbox content but when tried wrapping w/ same thing it made everything tiny so gotta investigate further on that

- Person: button on bottom needs margin-bottom and also prob to be for seeing the rest of someone's posts if they exist rather than taking to all people page. Will also need Liquid logic that only displays this button if someone has more than 3 posts.

- Blog: sort by date, descending

- Research: do `sort_natural` rather than `sort` so it doesn't care about 'the' (also verify what `sort_natural` means because you kinda just assumed on that one)

- Data entry: JS form to select what kind of thing you wanna make, enter the fields, and it spits out copy-pastable YAML to start a markdown document with. Also will need simple instructions to save as `.md`, a link to Markdown syntax guide, how to name your document (or it can print the document name for you in a comment?), and simple instructions on what folder to save your document under

- Topics: should our meta-type pages be nested under an umbrella category? Am thinking things like Accessibility, Colophon, About, Charter... Things that both a) won't be updated regularly and b) won't be a primary target for people to view as a goal of coming to the site (unlike, for example, Makerspace).

- Makerspace: find where calendar fits, and rearrange HTML if needed. Hide the skillset block thing for Phase 1 until you have time to properly label it, which seems like it will take more time than it's worth right now.

- **Update: done!** ~~All: add 60px margin or padding to top of every page, to make room for the navigation bar. Probably apply this to `<main>`. Once done, remove `margin-top: calc(60px + num)` from all pages where you've inserted it to adjust manually.~~

- 3D Printer Calendar: forgot this was a separate page, too - calendar on Makerspace also needs to go here. It's clearly supposed to go somewhere on the page, based on wording referencing it, but unsure where.

- Research: need replacement images for gallery - unsure how many left. I know Praxis is still missing and Jeremy should know where that is, since I saw they used it on their poster. This is why I need to investigate Google Drive folders more thoroughly...

- Event data structure: Tags may be across the site; categories may be event-specific?

- ### Event Questions/Asks for Ronda (4/19):
	- Data to show on single event page (specific event)
	- Data to show on event preview page
	- Tags:
		- Phrasing: tags or categories?
			- Or both, but that seems like a Phase 2 kind of distinction and we can update the data structure accordingly
		- Need definite list of terms for v1.0 of a limited vocabulary. If terms are not self-evident in meaning, definitions of terms also desirable for consistency across event creators. (Unless Laura is primarily the one entering all events, in which case she knows what her words mean and it doesn't matter.)
	- Location:
		- Right now it includes the full address (C'ville, VA, ...) rather than just the room number
	- Sign-ups for events:
		- Would it be easy to include an RSVP thing for events? If so, need to know preferred method of doing so, as well as wording from content team.
		- NB: This is probably a Phase 2 thing, but I think it would help event turnout to have people consciously commit themselves to a given thing at a given time. No repercussions or anything if not; we can note that it's just for a more accurate headcount.
			- Have seen more and more things use "add to calendar" embedding so wondering if that might be easy.
		- Also could be a backdoor to prompt signing up for mailing list, since they'd have to enter name anyway. 
			- UX note: If they're already signed up, it can check the name against who we already have, so anyone already on the list doesn't get a pointless popup.

- ### Addendum: List of possible event data
	- *This list is meant to serve as a starting point, but is non-exhaustive nor final in its phrasing.*

Fields | Data Type
------ | ---------
title | string
location | string
date | string
time | string
duration | num
description | string
part of series | boolean
host(s) | string
tags | list
subject matter | list
experience needed | boolean
supplies needed | boolean

## 4/21/18

- Media queries on person page

- Events page subtitle

- Run CSS through prefixer and manually add to SCSS where needed - do at end so don't have to do more than once

## 4/23/18

- Blog: Posts with >1 author --> do we want to allow that? If so, need to change YAML (or, at least, change Liquid to check if 'author' is an array rather than a string)

- Blog: Probably change 'read more' on blog to something else unless give preview of post

## 4/24/18

- Blog & events: add 'recent posts'/'upcoming' or some label thing to top. More crucial on events than blog.

## 4/25/18

- Types of events, topics for events, disciplines that'd be interested in said events
	- R: used diff icon for all types of events (e.g. data, GIS) for helpful visual sorting