---
author: chris-gist
date: 2011-08-17 09:27:38+00:00
layout: post
slug: charlottesvilles-street-car-system-in-gis
title: Charlottesville's Street Car System in GIS
categories:
- Digital Humanities
- Geospatial and Temporal
tags:
- albemarle county
- cartography
- charlottesville
- Digital Humanities
- gis
- historic
- map
---

Did you know that Charlottesville once had streetcars?  Since moving to town, I've heard tales of the once-thriving transportation system that connected Fry's Spring, UVa and downtown.  It wasn't until an inquiry came in from a student looking for GIS data for the system that I investigated it.

[caption id="attachment_1917" align="aligncenter" width="470"][![](http://www.scholarslab.org/wp-content/uploads/2011/08/muleCar-1024x520.jpg)](http://www.scholarslab.org/digital-humanities/charlottesvilles-street-car-system-in-gis/attachment/mulecar/) Mules pulling streetcar on Main St. - Special Collections, University of Virginia Library[/caption]

I first found the following 1890 map which shows the holdings and plans for the Charlottesville Land Company.  The map highlights the existing streetcar system and plans to extend the system into their new neighborhoods.  We also found a large number of streetcar-related images from the [Holsinger Photo Collection](http://search.lib.virginia.edu/?f%5Bdigital_collection_facet%5D%5B%5D=Holsinger+Studio+Collection&sort=date_received_facet+desc).

[caption id="attachment_1922" align="aligncenter" width="470"][![](http://www.scholarslab.org/wp-content/uploads/2011/08/venable-1024x605.jpg)](http://www.scholarslab.org/digital-humanities/charlottesvilles-street-car-system-in-gis/attachment/venable/) Charlottesville Land Co., 1890 - Special Collections, University of Virginia Library[/caption]

The Charlottesville Land Co. map is intriguing.  Not only does it show the eventual street grid for Belmont and Rose Hill, it has unrealized plans for the southwest quadrant of the city.  The extensive streetcar plan designed to service these new developments piqued my interest. After a little research, I found a book called _"Forward is the Motto of Today": Street Railways in Charlottesville, Virginia, 1866-1936 _by Jefferson Randolph Kean.  The UVa Library has two copies, one in Special Collections and one in general circulation.  The book gives the entire history of the rail system from its modest beginnings with mule-drawn cars down Main St. to an extensive electric system.  One of the best qualities of the book is that it has maps drawn by the book's publisher, Harold E. Cox.

[caption id="attachment_1919" align="aligncenter" width="470"][![](http://www.scholarslab.org/wp-content/uploads/2011/08/1891map-1024x836.jpg)](http://www.scholarslab.org/digital-humanities/charlottesvilles-street-car-system-in-gis/attachment/1891map/) Charlottesville streetcar system 1891 from "Forward is the Motto of Today": Street Railways in Charlottesville, Virginia, 1866 - 1936 - H.E. Cox, reproduced with permission[/caption]

The 1891 map shows the main trunk line which connects the UVa Corner to the C & O station on the east end of downtown via Main Street. Notice the Fry's Spring R.R. line from the train station area to the Hotel Albemarle.  This line was eventually abandoned and replaced with one following the Jefferson Park Avenue route.  The Belmont R.R. line servicing "The Grove" (now Belmont Park) was also later abandoned.

[caption id="attachment_1920" align="aligncenter" width="470"][![](http://www.scholarslab.org/wp-content/uploads/2011/08/1895map-1024x684.jpg)](http://www.scholarslab.org/digital-humanities/charlottesvilles-street-car-system-in-gis/attachment/1895map/) Charlottesville streetcar system 1895 from "Forward is the Motto of Today": Street Railways in Charlottesville, Virginia, 1866 - 1936 - H.E. Cox, reproduced with permission[/caption]

The 1895 map shows planned expansion to Woolen Mills, Fifeville, and 10th and Page neighborhoods.  The section downtown (South Street, 1st Street, and Market Street) that was built but abandoned is particularly interesting.  The entire section was never more than two blocks from the main line, which probably explains why it was removed.

[caption id="attachment_1929" align="aligncenter" width="470"][![](http://www.scholarslab.org/wp-content/uploads/2011/08/1920map-1024x705.jpg)](http://www.scholarslab.org/digital-humanities/charlottesvilles-street-car-system-in-gis/attachment/1920map/) Charlottesville streetcar system 1920 from "Forward is the Motto of Today": Street Railways in Charlottesville, Virginia, 1866 - 1936 - H.E. Cox, reproduced with permission[/caption]

The 1920 map shows an expansion through UVa to service Lambeth Field and down Jefferson Park Ave. to Fry's Spring.  This map also depicts the "pass-bys" (represented with the double lines in five locations), car barn (on Ridge St.), and turn-arounds at the end of all the lines.


# GISing the Data


Reviewing Kean's work and other maps led me to some interesting questions.  What exact streets did the trolleys use?  Are any of the facilities remaining?  If the Charlottesville Land Co.'s streetcar plan was implemented and still existed, how many Charlottesville citizens would be served?  How do you answer these questions?  Here is where GIS can help.

Steps in spatial analysis:

1. Georeference the maps.  Georeferencing is the process of taking scanned maps and geolocating them - generally through the use of control points - for use in GIS or other tools.  Check [here](http://webhelp.esri.com/arcgisdesktop/9.3/index.cfm?TopicName=Georeferencing_a_raster_dataset) for more information.
2  Digitize the relevant features using the ArcMap editor.  More information [here](http://help.arcgis.com/en/arcgisdesktop/10.0/help/index.html#//001t00000001000000.htm).
3. Perform spatial analysis.  In this case, creating a service area around the lines using 1/4 mile buffer.  That distance is considered a serviceable walking distance.

[caption id="attachment_1939" align="aligncenter" width="470"][![](http://www.scholarslab.org/wp-content/uploads/2011/08/CLC-1024x768.png)](http://www.scholarslab.org/digital-humanities/charlottesvilles-street-car-system-in-gis/attachment/clc/) Georeferenced Charlottesville Land Co. map[/caption]

The above image shows the georeferenced Charlottesville Land Co. map with 40% transparency overlaid on an [Open Street Map](http://www.openstreetmap.org/) (OSM) layer.

[caption id="attachment_1940" align="aligncenter" width="470"][![](http://www.scholarslab.org/wp-content/uploads/2011/08/1920-1024x768.png)](http://www.scholarslab.org/digital-humanities/charlottesvilles-street-car-system-in-gis/attachment/1920/) 1920 map with OSM base map[/caption]

This copy of the 1920 map was the first one I acquired using a handheld camera (opposed to scanning as with the other version).  Notice my fingers in the lower left holding the book open.  While nowhere near optimal, this shows that even poor quality photographs of maps can be georeferenced with decent results. Once all the maps were georeferenced, I was able to digitize all the pertinent streetcar system features.  I chose to show all lines from the maps including conceptual, planned, and abandoned.  I also included all the pass-bys, turn-arounds and support buildings including the electric generation plant on the Rivanna River near Woolen Mills (not on the map above but found using aerial images).

[caption id="attachment_1948" align="aligncenter" width="470"][![](http://www.scholarslab.org/wp-content/uploads/2011/08/trolleyFeatures-1024x791.png)](http://www.scholarslab.org/digital-humanities/charlottesvilles-street-car-system-in-gis/attachment/trolleyfeatures/) Digitized Charlottesville streetcar system overlayed on modern aerial imagery[/caption]

The above map shows all the streetcar routes, realized or otherwise.  It includes all the system features except the power plant adjacent to the Rivanna River.  A PDF showing the full extent of the system (with the ability to toggle layers on and off) is available [here](http://people.virginia.edu/~dcg6b/CvilleTrolleySystem.pdf).

So what if the Charlottesville streetcar system was fully realized and still existed today?  How many Charlottesville citizens would it serve?   Using spatial analysis techniques, we can answer that question.  To do this, I downloaded the 2010 census population counts and joined them to a block-level boundary layer.  I then created the walking buffer of 1/4 mile around the streetcar routes and aggregated the census blocks within the buffer to get the answer.

[caption id="attachment_1974" align="aligncenter" width="470"][![](http://www.scholarslab.org/wp-content/uploads/2011/08/trolleyCensus-1024x768.png)](http://www.scholarslab.org/digital-humanities/charlottesvilles-street-car-system-in-gis/attachment/trolleycensus/) Proposed Charlottesville streetcar system with 1/4 mile service area buffer overlayed on 2010 census blocks[/caption]

The above map shows the full streetcar system in black with the service buffer around it in red.  The background is the 2010 census blocks.  Notice the two donut holes and the white areas.  The white areas in the map are Albemarle County.  At this point, we are only interested in city residents.  However, if you wanted to get the full extent of the service population, the UVa Grounds would have to be included (the eastern section of the service area is mainly over the river and unpopulated areas).  The next step is to use a technique called a spatial join to aggregate the total population for each block to the streetcar service area.  More on that [here](http://help.arcgis.com/en/arcgisdesktop/10.0/help/index.html#//005s0000002n000000.htm).

[caption id="attachment_1979" align="aligncenter" width="470"][![](http://www.scholarslab.org/wp-content/uploads/2011/08/bufferJoin.png)](http://www.scholarslab.org/digital-humanities/charlottesvilles-street-car-system-in-gis/attachment/bufferjoin/) Showing attributes of spatial join aggregation[/caption]

You can see by the last column in the above table that the streetcar service area covers around 33,267 city residents.  I say around because any block that intersected the service area buffer boundary was counted in full even though a percentage of people living within that block may not be within the buffer.  Using our block level tabular data, we can gather some basic statistics including total population for the city.

[caption id="attachment_1980" align="aligncenter" width="470"][![](http://www.scholarslab.org/wp-content/uploads/2011/08/sum.png)](http://www.scholarslab.org/digital-humanities/charlottesvilles-street-car-system-in-gis/attachment/sum/) Using the basic statistics feature in ArcMap[/caption]

The 2010 total population for Charlottesville is 43,475 which mean that approximately 76% of the city's population would be served by the streetcar system.


# Some More Pictures


The Holsinger Collection in the UVa Library's Special Collections has many great pictures of the streetcar system.  Here are some of my favorites along with a few other images.

[caption id="attachment_1918" align="aligncenter" width="470"]![](http://www.scholarslab.org/wp-content/uploads/2011/08/X02377B-1024x809.jpg) Streetcar near Rotunda - Holsinger Collection - Special Collections, University of Virginia Library[/caption]

[caption id="attachment_1981" align="aligncenter" width="470"][![](http://www.scholarslab.org/wp-content/uploads/2011/08/Y20866B-1024x801.png)](http://www.scholarslab.org/digital-humanities/charlottesvilles-street-car-system-in-gis/attachment/y20866b/) Main St. looking east, electric street car about to pass Christian's Pizza (third full building on the right) - Holsinger Collection - Special Collections, University of Virginia Library[/caption]

[caption id="attachment_1982" align="aligncenter" width="450"][![](http://www.scholarslab.org/wp-content/uploads/2011/08/X1803B.jpg)](http://www.scholarslab.org/digital-humanities/charlottesvilles-street-car-system-in-gis/attachment/x1803b/) Looking north towards power plant, Rivanna River on the right - Holsinger Collection - Special Collections, University of Virginia Library[/caption]

[caption id="attachment_1983" align="aligncenter" width="470"][![](http://www.scholarslab.org/wp-content/uploads/2011/08/X06208B1-copy-1024x861.png)](http://www.scholarslab.org/digital-humanities/charlottesvilles-street-car-system-in-gis/attachment/x06208b1-copy/) Working on the tracks, looking north up JPA Extended - houses in background exist today - Holsinger Collection - Special Collections, University of Virginia Library[/caption]

[caption id="attachment_1986" align="aligncenter" width="470"][![](http://www.scholarslab.org/wp-content/uploads/2011/08/X06114B11-1024x837.png)](http://www.scholarslab.org/digital-humanities/charlottesvilles-street-car-system-in-gis/attachment/x06114b1-2/) Troops marching north up Rugby along tracks, Fayerweather Hall on the left, Mad Bowl on the right - Holsinger Collection - Special Collections, University of Virginia Library[/caption]

[caption id="attachment_1985" align="aligncenter" width="470"][![](http://www.scholarslab.org/wp-content/uploads/2011/08/X06208B3-1024x854.png)](http://www.scholarslab.org/digital-humanities/charlottesvilles-street-car-system-in-gis/attachment/x06208b3/) Ridge St. with car barn in background, bridge over tracks and church exist today, car barn now the Greyhound station bus entrance - Holsinger Collection - Special Collections, University of Virginia Library[/caption]

[caption id="attachment_1987" align="aligncenter" width="470"][![](http://www.scholarslab.org/wp-content/uploads/2011/08/Y08206B-1024x810.png)](http://www.scholarslab.org/digital-humanities/charlottesvilles-street-car-system-in-gis/attachment/y08206b/) Installing tracks on University Ave. near the Corner - Holsinger Collection - Special Collections, University of Virginia Library[/caption]

Of course once you know where to look, evidence of the streetcar system is around.

[caption id="attachment_1988" align="aligncenter" width="470"]![](http://www.scholarslab.org/wp-content/uploads/2011/08/trolley-005-1024x768.jpg) Intersection of University and Rugby looking southeast[/caption]

If you look closely in the crosswalk there, you can see the old track as it turns off University Ave. onto Rugby Ave.

[caption id="attachment_1991" align="aligncenter" width="470"]![](http://www.scholarslab.org/wp-content/uploads/2011/08/trolley-008-1024x768.jpg) Closeup of exposed streetcar track in crosswalk across Rugby at University[/caption]
