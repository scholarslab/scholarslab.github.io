*Issues for GitHub that I keep being too lazy to submit in the moment, if discovered when have good flow going.*

- Person: 'posts by blah' farther to left than edge of flexbox content but when tried wrapping w/ same thing it made everything tiny so gotta investigate further on that

- Person: button on bottom needs margin-bottom and also prob to be for seeing the rest of someone's posts if they exist rather than taking to all people page. Will also need Liquid logic that only displays this button if someone has more than 3 posts.

- ~~Blog: sort by date, descending~~

- Does not work :( added as real GH issue; is harder than thought. ~~Research: do `sort_natural` rather than `sort` so it doesn't care about 'the' (also verify what `sort_natural` means because you kinda just assumed on that one)~~

- Data entry: JS form to select what kind of thing you wanna make, enter the fields, and it spits out copy-pastable YAML to start a markdown document with. Also will need simple instructions to save as `.md`, a link to Markdown syntax guide, how to name your document (or it can print the document name for you in a comment?), and simple instructions on what folder to save your document under

- ~~Topics: should our meta-type pages be nested under an umbrella category? Am thinking things like Accessibility, Colophon, About, Charter... Things that both a) won't be updated regularly and b) won't be a primary target for people to view as a goal of coming to the site (unlike, for example, Makerspace).~~

- ~~Makerspace: find where calendar fits, and rearrange HTML if needed. Hide the skillset block thing for Phase 1 until you have time to properly label it, which seems like it will take more time than it's worth right now.~~

- ~~All: add 60px margin or padding to top of every page, to make room for the navigation bar. Probably apply this to `<main>`. Once done, remove `margin-top: calc(60px + num)` from all pages where you've inserted it to adjust manually.~~

- 3D Printer Calendar: forgot this was a separate page, too - calendar on Makerspace also needs to go here. It's clearly supposed to go somewhere on the page, based on wording referencing it, but unsure where.

- Update: Images exist, Amanda assigning labels right now. ~~Research: need replacement images for gallery - unsure how many left. I know Praxis is still missing and Jeremy should know where that is, since I saw they used it on their poster. This is why I need to investigate Google Drive folders more thoroughly...~~

- Update: yep! Or vice versa, doesn't really matter. ~~Event data structure: Tags may be across the site; categories may be event-specific?~~

- ### Update: Done! ~~Event Questions~~
> ### Event Questions/Asks for Ronda (4/19):
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

> - ### Addendum: List of possible event data
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

- ~~Events page subtitle~~

- Run CSS through prefixer and manually add to SCSS where needed - do at end so don't have to do more than once

## 4/23/18

- *Update: add as Phase 2 issue.* Blog: Posts with >1 author --> do we want to allow that? If so, need to change YAML (or, at least, change Liquid to check if 'author' is an array rather than a string)

- ~~Blog: Probably change 'read more' on blog to something else unless give preview of post~~

## 4/24/18

- Blog & events: add 'recent posts'/'upcoming' or some label thing to top. More crucial on events than blog.

## 4/25/18

- Types of events, topics for events, disciplines that'd be interested in said events
	- R: used diff icon for all types of events (e.g. data, GIS) for helpful visual sorting

- Blog
	- how to strip content of markdown stuff without displaying images? Got some of it.
	- pagination -> rn displaying all posts on one page ~~only displaying most recent 20~~
	- filtering -> put in at top so people can only view posts about given thing, or nah?
	- set base font size as what you wanna use for the title then arrange everything else based on that. There are few enough elements that it's not hard and it's making it look super weird that the label span is 14 points and the name/date are 16 points on screens < 768px.

## 4/27 - 4/28/18

- Fixed! Was line height issue. ~~Makerspace/Nav: fix whatever is making the down arrow on 'More' jump below where it's supposed to be - must be some override-y thing for all elems of that type or something?~~

- R&D: there's nothing except example text on `lab.html` right now. Do we want to fix that before we show to people, or not time yet?

- Amanda is assigning! ~~Spatial Tech: need to add/combine existing text to get on there ASAP~~

- Research
  - ~~Make text white~~
  - ~~Set intro text to base-mono-narrow~~
  - ~~Add years to each entry~~
  - ~~Make GH issue re. Ronda & Jerm validating years~~
  - Sort entries by title minus leading "the"

### Styling per page:

- Brainstorm: 
	1. Loop through all pages
	2. Print the following:
		- Margins
		- Padding
		- Number of classes declared
		- Markdown or HTML
	3. Determine how to do that in terms of "what's the maximum width the content is taking up"?
	4. Possible solution:
		- Have all raw CSS for anything declaring margins or padding of 1/24 or 1/12, which is standard on your docs.
		- Compare the names of the CSS classes to whether "string up 'til '__' or '-' is a substring of `page.permalink` or `page.title`
		- If so, list those declarations underneath that page title in the `<ul>` already set up for pages.

- Hopeful outcome: see which pages still need Literally All Formatting done.

- Switch from test logo to old logo

## Temporary: Copy/Pasted Spatial Text

_While making new HTML structure._

<!-- use this for homepage as well -->
<div class="spatial__ethos">
	<div class="spatial-ethos__title">Ethos</div>
	<p>We specialize in a wide-range of methods in spatial analysis related to mapping and the collection of cultural heritage data, for use across disciplines. Our expert staff are here to collaborate and support the application of spatial technologies in your research and in the classroom. We provide training and consultations on the latest software and documentation tools, including GIS, 3D modeling, laser scanners, aerial drones, photogrammetric technologies, our own Neatline exhibit-builder for storytelling in the humanities, and more.</p>
</div>

<!-- current, unedited GIS text: -->
<div class="spatial__gis-text">
	<div>Geospatial Services</div>
	<p>As part of <a href="/spatial-technologies">the Spatial Technologies group</a>, our expert staff supports application of GIS and mapping technologies across the disciplines. We also provide consultation on data and software for research and classroom use.</p>

<div>Getting started with GIS</div>
<p>Need help finding data, getting it on a map, or downloading the newest version of ArcGIS?  Check the FAQ’s on the <a href="http://guides.lib.virginia.edu/gis">GIS research page</a>, search the <a href="http://gis.lib.virginia.edu/">UVA Library Geoportal</a>, or come to a session in our Fall or Spring <a href="http://www.scholarslab.org/events/">workshop series</a>.   You can also consult directly with GIS specialist Chris Gist.  If you have questions or would like to schedule an appointment, please contact <a href="mailto:slabgis@virginia.edu">slabgis@virginia.edu</a>.</p>

<div>Geospatial Research Projects</div>
<p>With the support of the NEH and Library of Congress and in collaboration with the creators of <a href="http://omeka.org">Omeka</a>, we made <a href="http://neatline.org">Neatline</a>, a major contribution to spatial and temporal annotation and storytelling in the humanities.  In order to spark the “spatial humanities” in the United States, in 2011, we also hosted <a href="http://spatial.scholarslab.org/">GeoInst</a>, a 2-year NEH-funded workshop for librarians, scholars, and technologists. See more of our spatial humanities and GIS projects done in collaboration with UVa faculty on our <a href="http://scholarslab.org/research/">Research page</a>.</p>
</div>

<!-- excerpt from CHI website right now -->
<div class="spatial__chi-text">
	<div>Currently collecting yesterday&#8217;s data for tomorrow.</div>
	<p lang="en">The University of Virginia has the rare privilege and honor of being located at a UNESCO World Heritage Site. We are surrounded by history at every level, from artifact to architecture. With equipment obtained by a far-sighted grant obtained in 2011, the University of Virginia Library has been collecting cultural heritage data of the buildings, monuments, sites and objects that surround us and that come to us via our faculty and students. We have documentation tools that include laser scanners, aerial drones and photogrammetric technologies, as well as industry-standard software to collect and process what we recognize to be primary source data that is vital to our historic record as well as significant for scholarly use. In pursuit of our mission, we are researching methods of collecting, archiving and disseminating this data to our academic constituency, which ranges across our schools of Architecture and Architectural History to Mechanical and Civil Engineering and beyond. Because libraries across our nation and across the world are located close to historic sites and culturally significant objects, we believe that libraries everywhere can gather and steward cultural heritage data at some scale. The University of Virginia Library is interested in establishing a collaborative environment focused on cultural heritage data methods and workflow. We are looking to tap into the expertise that the broader research-library community brings in developing metadata standards, modes of use and innovative applications of cultural heritage data.</p>
</div>

### Code Process Example

- See screenshot of SCSS setup for Spatial Tech

- Commit message explaining why I added it (hope to use concept for future educational purposes):

> ### Add screenshot of empty STech SCSS as process example

>- Comments on classes explaining what types of elements they are

>- Looking at HTML structure and anticipating complicated nesting ->
  set up selectors *first* so not surprised by how your webpage is
  behaving later

>- Can always delete them later if turns out they're not needed

## 4/30/18

- Main stylesheet:
	- Move universal style selectors either to separate SCSS partial or to very beginning of `style.scss` document
	- Put SCSS imports in logical order
	- Move homepage declarations to a partial file

## 5/1/18

- Update: added as issue, Amanda doing today (5/3/18). ~~Research:~~
	- ~~Change image names to updated files, add another variable that does it w/ the thumbs~~
	- ~~"thumb-img", "banner-img", e.g.~~

- Asks for content:
	- Spatial Tech inventory list (see Makerspace version, which is currently there)
		- Find GIS inventory
		- Download CHI inventory into usable format (is currently a webpage)
		- Hopefully synthesize the categories or whichever one you think makes sense
	- Spatial tech hours/times
	- Spatial tech spaces/locations
	- Spatial tech contact: GIS has a special one, is there one for CHI?
		- How to make an appointment? (Again, see Makerspace version)
	- Re-label all of the YAML in _research/ to reflect updated image names
		- Current: `preview-img: imgname.ext`
		- Need:  `banner-img: imgname.ext` and `thumb-img: imgname.ext`
		- Where: lines 5-6 of each research document. All YAML is in same order in them. (Replacing line 5 and creating a new line for the second var.)


## 5/3/18

- Move 'PEOPLE //' above img at mobile sizes