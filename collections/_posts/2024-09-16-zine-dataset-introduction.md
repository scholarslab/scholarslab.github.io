---
author: amanda-visconti
layout: post
date: 2024-09-16
title: "Zine Bakery: catalog as dataset research"
slug: zine-dataset-introduction
summary: "A catalog is a collection; my Zine Bakery catalog fuels data-driven coding, viz, and making scholarship."
category: essay
tags:
- dataset
- zines
- zine-bakery
- literature
- metadata
- bibliography
- design
- visualization
- expansive-makerspace
- makerspace
crosspost:
  - title: Amanda's blog
    url: https://literaturegeek.com/2024/09/16/zine-dataset-introduction
---
A catalog is also a dataset, which means because of my [Zine Bakery](https://zinebakery.com) project's zine catalog, I've got a hand built, richly described, tidily organized dataset I know well. Seeing my zine catalog as a dataset opens it to my data science and digital humanities skillset, including data viz, coding, and data-based making. Below, I share some of the data-driven scholarship I've pursued as part of my Zine Bakery project.

![Photo of Amanda Wyatt Visconti presenting virtually at the DH 2024 conference](https://literaturegeek.com/assets/post-media/2024-09-16-zine-dataset-introduction/2024_08_06-DH2024-DHMakesTalk-AmandaWyattVisconti.png)
_Giving a talk on data-driven making for the DH 2024 conference_

# A peek under the hood
Screenshot of just a small portion of my thematic tagging. I've got 134 different tags used on catalog zines (as of 9/16/2024):
![Screenshot of a portion of the Zine Bakery catalog, showing a variety of thematic tags including AI, anti-racism, and coding](https://literaturegeek.com/assets/post-media/2024-09-16-zine-dataset-introduction/2024_ZineTags_Screenshot.png)

Below, a zoomed-out screenshot of my tagging table, which does not capture the whole thing (which is about twice as wide and twice as a tall as what's shown); and a zoomed-in view:
![Screenshot of a portion of the Zine Bakery catalog, showing a way-zoomed-out screenshot of a portion of the zine catalogue's underlying thematic tags to zine titles table](https://literaturegeek.com/assets/post-media/2024-09-16-zine-dataset-introduction/2024_ZineTagsTableZoomedOut_Screenshot.png)
![Screenshot of a portion of the Zine Bakery catalog, showing a zoomed-in screenshot of a portion of the zine catalogue's underlying thematic tags to zine titles table](https://literaturegeek.com/assets/post-media/2024-09-16-zine-dataset-introduction/2024_ZineTagsTableZoomedIn_Screenshot.png)

The tags are just one of many fields (78 total fields per zine, as of 9/16/2024) in my database:
![Screenshot of a portion of the Zine Bakery catalog, showing several titles of zines](https://literaturegeek.com/assets/post-media/2024-09-16-zine-dataset-introduction/2024_ZineTitles_Screenshot.png)

I'm able to easily pull out stats from the catalog, such as the average zine length in my collection being 27 pages (and shortest, longest zine lengths):

![Screenshot of a portion of the Zine Bakery catalog, showing average zine length is 27 pages long, longest zine is 164 pages long, and shortest zine length is 4 pages long](https://literaturegeek.com/assets/post-media/2024-09-16-zine-dataset-introduction/2024_ZinePageCounts_Screenshot.png)

# Data-driven making research
My Spring 2024 peer-reviewed article ["Book Adjacent: Database & Makerspace Prototypes Repairing Book-Centric Citation Bias in DH Working Libraries”](https://dhandlib.org/2024/04/29/book-adjacent-database-makerspace-prototypes-repairing-book-centric-citation-bias-in-dh-working-libraries/) discusses the relational database I built underlying the Zine Bakery project, as well as 3 makerspace prototypes I've built or am building based on this data.

One of those projects was a card deck and case of themed zine reads, with each card displaying a zine title, creators, and QR code linking to free reading of the zine online:
![Example themed reading card deck, prepared for the ACH 2023 conference's #DHmakes (digital humanities making) session. An open plastic playing card case holds a playing-card-style card with information about the "#DHMakes at #ACH2023" project governing the readings chosen for inclusion in the deck; next to the case is a fanned-out pile of playing-card-style cards showing tech, GLAM, and social justice zine titles such as "Kult of the Cyber Witch #1" and "Handbook for the Activist Archivist"; on the top of the fanned pile you can see a whole card. The whole card is white with black text; the title "Design Justice for Action" is in large print at the top of the card, followed by a list of the zine's creators (Design Justice Network, Sasha Costanza-Chock, Una Lee, Victoria Barnett, Taylor Stewart), the hashtags "#DHMakes #ACH2023, and a black square QR code (which links to an online version of that zine).](https://literaturegeek.com/assets/post-media/2024-09-16-zine-dataset-introduction/2024_dh+lib-article_ThemedCardDeckCaseFannedPhoto.jpeg)

![Photo of a fake, adult-size skeleton (Dr. Cheese Bones) wearing the ACH 2023 #DHMakes crew's collaborative DH making vest, which boasts a variety of neat small making projects such as a data visualization quilt patch and felted conference name letters. One of my themed reading card decks is visible half-tucked into its vest pocket. Photo and Dr. Bones appearance by Quinn Dombrowski.](https://literaturegeek.com/assets/post-media/2024-09-16-zine-dataset-introduction/ACH2023_DHMakesTeamCreationPhoto.jpeg)

My online [zine quilt dataviz](https://zinebakery.com/zine-quilt) will eventually be an offline actual quilt, printed on fabric with additional sewn features that visualize some of the collection's data:
![Screenshot of a digital grid of photos of zine front covers; it's very colorful, and around 200 zine covers are shown](https://literaturegeek.com/assets/post-media/2024-09-16-zine-dataset-introduction/2024-08-03-zine-quilt-screenshot.png)

The dataset is also fueling design plans for a public interactive exhibit, with a reading preferences quiz that results in a receipt-style printout zine reading list:
![My sketches and notes planning the layout of the Mini Book List Printer's acrylic case. A photo of a spiral-bound sketchbook, white paper with black ink. The page is full of notes and drawings, including sketches of a simplified Mac Classic-style computer case, as well as the various pieces of acrylic that would need to be cut to assemble the case and their dimensions. The notes contain ideas about how to assemble the case (e.g. does it need air holes?), supplies I needed to procure for the project, and note working out how to cut and adhere various case piece edges to achieve the desired final case dimensions.](https://literaturegeek.com/assets/post-media/2024-09-16-zine-dataset-introduction/2024_dh+lib-article_MiniBookListPrinterPhoto-scaled.jpeg)

![Author's sketch of what the final Mini Book List printer should look like. A rough drawing in black ink on white paper, of a computer shaped like a simplified retro Mac (very cubic/boxy); the computer screen reads "We think you'll enjoy these reads:" followed by squiggles to suggest a list of suggested reads; from the computer's floppy drive hole comes paper receipt tape with squiggles listed on it to suggest a reading recommendation list printout on receipt-width paper. There are sparkly lines drawn around the receipt paper, with an annotation stating these denote "magic" rather than light, as there are no LEDs in this project.
](https://literaturegeek.com/assets/post-media/2024-09-16-zine-dataset-introduction/2024_dh+lib-article_MiniBookListPrinterPhoto-2.jpeg)

I'm also experimenting with ways to put digital-only zines visibly on physical shelves:
![Photo of materials for the Ghost Books project artfully arranged on a floor, including a swirl of blue LEDs with silicone diffusion making them look like neon lights, superglue, acrylic and glass cut to size to be assembled into a rectangular-prism/book shape with smoothe or crenellated edges, and one of the books I'm basing the initial prototype on (10 PRINT) because of it's interesting blue and white patterned cover.](https://literaturegeek.com/assets/post-media/2024-09-16-zine-dataset-introduction/2024_dh+lib-article_GhostBooksPhoto2.jpeg)