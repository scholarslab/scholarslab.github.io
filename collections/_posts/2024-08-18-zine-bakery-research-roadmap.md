---
author: amanda-visconti
layout: post
date: 2024-08-18
title: "Zine Bakery: research roadmap"
slug: zine-bakery-research-roadmap
summary: "Plans include an ethical practices project charter, collecting rationale, crosswalk to xZINECOREx metadata, and more."
category: essay
tags:
- dataset
- zines
- zine-bakery
- literature
- metadata
- project management
- bibliography
- web development
- design
- jekyll
- visualization
- fabric arts
- expansive makerspace
- makerspace
- electronics
crosspost:
  - title: Amanda's blog
    url: https://literaturegeek.com/2024/08/18/zine-bakery-research-roadmap
---
Some future work I'm planning for my [Zine Bakery](https://zinebakery.com) project researching, collecting, and amplifying zines at the intersections of tech, social justice, and culture.

## Critical collecting
* **Ethical practices charter**: *how* do I collect and research? 
	* Finish drafting my post on ethics-related choices in my project, such as 
		* not re-hosting zines without creator informed, explicit consent, so that catalogue users use zine creator's versions and see their website; and 
		* taking extra care around whether zines created for classes gave consent outside of any implicit pressures related to grades or the teacher serving as a future job reference
	* Read the Zine Librarians Code of Ethics in full, and modify my charter wit citations to their excellent project.

* **Collecting rationale**: *why* do I collect, and what do I/don't I collect?

* **ID areas I need to collect more actively**, for Zine Bakery @ Scholars' Lab goals of a welcoming, diverse collection reflecting SLab's values and our audience

* **Contact zine creators**: I already don't display, link, etc. zines creators don't positively indicate they want people to. But I could also contact creators to see if they want something added/edited in the catalogue, or if their preferences on replication have changed since they published the zine; and just to let them know about the project as an example of something citing their work.

* **Accessibility**:
	* Improve zine cover image alt text, so rather than title and creators, it also includes a description of important visual aspects of the cover such as color, typography, illustration, general effect. Retry Google Vision AI, write manually, or look at existing efforts to markup (e.g. comics TEI) and/or extrapolate image descriptions.
	* Look into screen-reading experience of catalogue. Can I make a version (even if it requires scheduled manual exports that I can format and display on my website) that is more browsable?
	* Run website checks for visual, navigational, etc. accessibility

## Data, website, coding
* **Better reader view**: 
	* Create a more catalogue-page-like interface for items
	* Make them directly linkable so when I post or tweet about a zine, I can link people directly to its metadata page

* **Self-hosted data and interface**: explore getting off AirTable, or keeping it as a backend and doing regular exports to reader and personal collecting interfaces I host myself, using data formats + Jekyll

* **Make metadata more wieldly for my editing**: 
	* I wish there were a way to collapse or style multiple fields/columns into sections/sets. 
	* I might be able to hackily do this (all-caps for umbrella field for a section? emojis?); or 
	* Using an extension allowing styling view (unsure if these are friendly for bulk-editing);
	* the self-hosted options mentioned above might let me better handle this (use or make my own, better viewing interface)
	
* **Crosswalk my metadata to xZINECOREx metadata?**: so is interoperable with the Zine Union Catalogue and other metadata schema users

* **File renaming**: 
	* I started with a filename scheme using the first two words of a zine title, followed by a hyphen, then the first creator's name (and "EtAl" if other creators exist)
		* I quickly switched to full titles, as this lets me convert them into alt text for my zine quilt
		* I need to go back and regularize this for PDFs, full-size cover images, and quilt-sized cover images.

* **Link cover images to zine metadata** (or free e-reading link, if any?) from zine quilt vis

## Metadata & cataloguing
* **Create personal blurbs for all zines** that don't have one written by me yet

* **Further research collected zines** so I can fill in blank fields, such as publication date and location for all zines

## Community
* **Explore setting up for better availability to the [Zine Union Catalogue](https://zinecat.org/)**, if my project fits their goals

* **Further refine logo/graphics**:
	* finish design work
	* create stickers to hand out, make myself some tshirts :D

* **Learn more about and/or get involved with** some of the
	* cool zine librarian (Code of Ethics, ZLUC, visit zine library collections & archives) and 
	* zine fest (e.g. Charlottesville Zine Fest, WTJU zine library) efforts

## Research & publication
* **Publication**: 
	* In addition to 
		* [multiple blog posts](/tag/zines) and
		* my [Zine Bakery](https://zinebakery.com) site and 
		* public [zine catalogue](https://zinebakery.com/pages/zines),
	* I've published 
		* [one peer-reviewed article](https://dhandlib.org/2024/04/29/book-adjacent-database-makerspace-prototypes-repairing-book-centric-citation-bias-in-dh-working-libraries/) and 
		* given [one conference talk](https://literaturegeek.com/2024/08/06/digital-humanities-makerspace-research) about my zines research
	* I'll be giving another public talk this fall. 
	* I'd like to explore ways to further publish and receive peer review, such as submitting a project statement to Reviews in DH.

* **More visualization** or analysis of metadata fields, e.g. 
	* timeline of publication
	* heatmap of publication locations
	* comparison of fonts or serif vs. sans serif fonts in zines
	
* **Digital zine quilt**: play with look of the zine quilt further:
	* Add way to filter/sort covers?
	* Add CSS to make it look more quilt-like, e.g. color stiching between covers?
	
## Making
* **Thermal mini-receipt printer**:
	* Complete reads/zines recommendation digital quiz and mini-receipt recommendation printout kiosk. 
	* Possibly make a version where the paper spools out of the bread holes of a vintage toaster, to go with the Zine Bakery theme?
	* Thanks to Shane Lin for suggesting a followup: possibly create version that allows printing subset of zines (those allowing it, and with print and post-print settings that are congenial to some kind of push-button, zine-gets-printed setup.

* **Real-quilt zine quilt**: Print a SLab-friendly subset of zine covers as a physical quilt (on posterboard; then on actual fabric, adding quilt backing and stitching between covers?)

* **More zine card decks**: create a few more themed subsets of the collection, and print more card decks like [my initial zine card deck](https://literaturegeek.com/2023/06/29/themed-reading-list-decks-zines)