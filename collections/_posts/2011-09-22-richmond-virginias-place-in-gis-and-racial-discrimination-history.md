---
author: chris-gist
date: 2011-09-22 11:34:45+00:00
layout: post
slug: richmond-virginias-place-in-gis-and-racial-discrimination-history
title: Richmond, Virginia's Place in GIS and Racial Discrimination History
categories:
- Digital Humanities
- Geospatial and Temporal
tags:
- Digital Humanities
- gis
- Hoyt
- McHarg
- race
- richmond
- Social Sciences
---

Richmond, Virginia is a city steeped in history.  It is the home of [the first commercially viable electric street car system](http://chpn.net/news/2006/02/16/a-history-of-richmonds-trolleys_336/), [the world's only triple train crossing](http://richmondthenandnow.com/Newspaper-Articles/Triple-Train-Crossing.html); [the first woman-owned and African American-owned bank](http://www.encyclopediavirginia.org/Walker_Maggie_Lena_1864-1934), and some great Americans including [Bojangles Robinson](http://atdf.org/awards/bojangles.html) and [Arthur Ashe](http://www.encyclopediavirginia.org/Ashe_Arthur_1943-1993).  Not exactly the history you were thinking about, correct?  There is much more hidden history in Richmond.

[caption id="" align="alignleft" width="155"]![](http://www.csiss.org/classics/uploads/mcharg-image1.jpg) Ian McHarg[/caption]

[Ian McHarg](http://www.nytimes.com/2001/03/12/arts/12MCHA.html) was born around the industrial town of Glasgow, Scotland in 1920.  After World War II, he came to the U.S. and started a career in city planning and landscape architecture.  He founded the Department of Landscape Architecture at the University of Pennsylvania and is considered innovative for his notion that design should work with the landscape instead of fighting or changing it.  He has also been credited with coming up, in the 1960s, with the idea of [map overlay](http://en.wikipedia.org/wiki/Geographic_information_system#Map_overlay) which is a fundamental GIS technique.

So, what do Richmond and McHarg have in common?  Before I can tell that story, I have to tell this one.  When I was a <del>young</del> struggling grad student, I happened to be at work in the Urban Planning Department at VCU one summer day when a PhD student from the University of California, Santa Barbara -- John Cloud -- strolled in. He told a small gathering of a few grad students and professors the story of how during the Great Depression the economic conditions were similar to those we face now. There was a foreclosure crisis and banks were not offering mortgages.  In an attempt to get the industry back on track, the Federal Housing Administration seeked for ways to estimate neighborhood risk for mortgages.  They looked for indicators to predict how neighborhoods would fare at future dates. In partnership with the Richmond Planning Commission (RPC), the FHA used Richmond as one of its major study sites.  Mr. Cloud showed us a report he pulled from the National Archives (NARA) called _Statistical Data Relative to Housing and other Planning Matters_.

[caption id="attachment_2291" align="aligncenter" width="470"]![](http://static.scholarslab.org/wp-content/uploads/2011/09/planninManners-732x1024.jpg) December 1935 Version[/caption]

This report, produced as early as 1935, uses a series of tissue paper overlays to show various themes.  A color, loose-leaf card stock map of rent by block is used as the underlay.  Mr. Cloud has found this report to be the earliest American example of the use of such overlays during his research.  He also found parallel lines of work going on in Germany during the same time period.   Please find John Cloud's detailed article on this story [here](http://www.cartogis.org/docs/proceedings/2005/cloud.pdf).  There may be older examples out there waiting to be discovered!

![](http://static.scholarslab.org/wp-content/uploads/2011/09/IMG_0955-1024x768.jpg)

[caption id="attachment_2312" align="aligncenter" width="470"]![](http://static.scholarslab.org/wp-content/uploads/2011/09/IMG_0951-768x1024.jpg) Rental map under housing study area map[/caption]

[caption id="" align="alignright" width="184"]![](http://4.bp.blogspot.com/_D7-iSeG_eP0/SwGJ0Qs_hiI/AAAAAAAAABI/lOpSGsLH7ks/s1600/Homer%282%29.jpg) Homer Hoyt[/caption]

Another player in this drama, economist Homer Hoyt, was an influential researcher at FHA.  He wrote a book in 1939 about housing research techniques called _[The Structure and Growth of Residential Neighborhoods in American Cities](http://www.archive.org/details/structuregrowtho00unitrich)_.

In that book, Hoyt demonstrated the value of techniques developed during the FHA's neighborhood forecast research including the [sector model](http://en.wikipedia.org/wiki/Sector_model) and -- you guessed it -- map overlays.  He used mylar sheets in the book to do a series of overlays for Richmond, which is clearly a distilled version of the RPC report maps.

[caption id="attachment_2290" align="aligncenter" width="470"]![](http://static.scholarslab.org/wp-content/uploads/2011/09/hoytOverlays-1024x599.jpg) At right, all four of Hoyt's overlays together: Race, Age, Condition, and Rent[/caption]

So, it wasn't really Mr. McHarg who pioneered the use of overlay at all (sorry to all you landscape architects).  At least, the RPC, Mr. Hoyt, and German researchers did it some twenty-five years earlier.

On a related topic, in my recent correspondence with Mr. Cloud he informed me that the Library of Virginia (LVA) had another copy of the RPC report that was missing at least one overlay.  We agreed that I would scan the LVA's copy and send him a copy.  In return, Mr. Cloud promised to get the missing pages from the NARA copy.  However upon further investigation, I have discovered that there are at least two versions of the document.  The NARA version is dated December, 1935, and the LVA version is dated January, 1938.  There are a few discrepancies between the versions and it is hard to tell whether they were produced with different overlays or whether some layers have been lost over the years.  Specifically, there are unique overlays in each document.  The following table is an inventory of the overlays for each document.
<table cellpadding="5" align="center" border="3" >
<tbody >
<tr >
Theme Name
(from report)
NARA Version
(1935)
LVA Version
(1938)
</tr>
<tr >

<td width="15%" >Rental Map
(by city block - card stock color underlay)
</td>

<td style="text-align: center;" >Yes
</td>

<td style="text-align: center;" >Yes
</td>
</tr>
<tr >

<td width="15%" >Rental Map (by area)
</td>

<td bgcolor="red" style="text-align: center;" >No
</td>

<td style="text-align: center;" >Yes
</td>
</tr>
<tr >

<td >Relief Cases (point data)
</td>

<td style="text-align: center;" >Yes
</td>

<td style="text-align: center;" >Yes
</td>
</tr>
<tr >

<td >Juvenile Delinquency (point data)
</td>

<td style="text-align: center;" >Yes
</td>

<td style="text-align: center;" >Yes
</td>
</tr>
<tr >

<td >Adult Delinquency (point data)
</td>

<td style="text-align: center;" >Yes
</td>

<td style="text-align: center;" >Yes
</td>
</tr>
<tr >

<td >Infant Mortality (point data)
</td>

<td style="text-align: center;" >Yes
</td>

<td style="text-align: center;" >Yes
</td>
</tr>
<tr >

<td >Tuberculosis - 1934 (point data)
</td>

<td style="text-align: center;" >Yes
</td>

<td style="text-align: center;" >Yes
</td>
</tr>
<tr >

<td >Population - 1930 (dot density)
</td>

<td style="text-align: center;" >Yes
</td>

<td style="text-align: center;" >Yes
</td>
</tr>
<tr >

<td >Areas Inhabited by Negroes (area)
</td>

<td style="text-align: center;" >Yes
</td>

<td bgcolor="red" style="text-align: center;" >No
</td>
</tr>
<tr >

<td >Certain Statistical Data - 1935
(combination of TB, relief and delinquency)
</td>

<td bgcolor="red" style="text-align: center;" >No
</td>

<td style="text-align: center;" >Yes
</td>
</tr>
<tr >

<td >Principal Thoroughfares
</td>

<td style="text-align: center;" >Yes
</td>

<td bgcolor="red" style="text-align: center;" >No
</td>
</tr>
<tr >

<td >Housing Studies
(shows specific study areas within report)
</td>

<td style="text-align: center;" >Yes
</td>

<td style="text-align: center;" >Yes
</td>
</tr>
<tr >

<td >Territorial Growth
</td>

<td style="text-align: center;" >Yes
</td>

<td bgcolor="red" style="text-align: center;" >No
</td>
</tr>
<tr >

<td >Census Tracts - 1935
</td>

<td style="text-align: center;" >Yes
</td>

<td style="text-align: center;" >Yes
</td>
</tr>
</tbody>
</table>
Mr. Cloud had concluded that purposeful reasons (i.e. a tear out) were to blame for the missing African American overlay from the LVA version of the RPC report. However, based on my comparison of the two different texts, I am not so sure.  I believe Mr. Cloud did not have all the information.  Did the 1939 version of the report originally have different overlays than the 1935 report?  Or were overlays removed/lost from each copy in the subsequent decades?   Of course, it wouldn't be a surprise to find out that someone purposely removed specific overlays from the PRC report given the amount of revisionist history around Richmond.

Hoyt listed four factors (race, age, condition, and rent) in determining neighborhood risk.  According to Hoyt's analysis, we have race, specifically the number of African Americans, as a major indicator for forecasting neighborhood risk.  Is that enough to cement Richmond's place in racial infamy?  Not quite.  However, much of his research went into a survey which concluded in a series of maps produced by the Home Owners' Loan Corporation (HOLC).  The HOLC maps were used as proof of [redlining](http://encyclopedia.chicagohistory.org/pages/1050.html),  as term coined by [John McKnight](http://www.northwestern.edu/ipr/people/mcknight.html) in the late 1960s.

[caption id="attachment_2308" align="aligncenter" width="470"]![](http://static.scholarslab.org/wp-content/uploads/2011/09/07-HOLC-map-1024x801.png) "Redline Map" of Richmond by the Home Owners' Loan Corporation[/caption]

Undoubtedly, race -- specifically the percentage of African Americans -- played a large role in determining the hazard values for the HOLC maps.  The question is whether or not the HOLC maps caused institutional discrimination against African Americans after their production.  Amy Hillier, a researcher at the University of Pennsylvania, says [no](http://cml.upenn.edu/redlining/), at least not in Philadelphia.  According to her analysis, banks were giving mortgages in the redlined districts after the Philadelphia HOLC map was produced.  She surmises that the HOLC maps were not widely circulated outside the federal government and therefore were probably not known or used by lenders.  In fact, a majority of HOLC's mortgages were in the hazardous end of their assessment scale.  However, Hillier does conclude that the FHA policies, which were formed partially from Hoyt's research, were influential in the arena.  The legacy of these maps and policies must not be understated.

The University of Richmond has a excellent [site](http://dsl.richmond.edu/holc/) that shows the HOLC map for Richmond and explains in detail the criteria and survey data used to determine hazard rankings of which presence of African Americans trumped all other factors.  The handwritten survey reports are shocking.


## Next Steps


We have now finished the process of digitizing all the RPC and Hoyt overlays.  We next will do some geostatistical analysis to compare them to the Richmond HOLC map to see how well the data fit together.  I would also like to map the new mortgages and refinancing given from the 1940s to the 1960s, à la Amy Hillier, to see the rates in the different hazard zones of the HOLC map.  [Jeremy Boggs](http://jeremyboggs.net/), a historian in our group here at the Scholars' Lab, has an interest in looking at the City of Richmond's policies during this period to gauge how they were affected by Hoyt's and HOLC's research and maps.

[caption id="attachment_2397" align="aligncenter" width="470"]![](http://static.scholarslab.org/wp-content/uploads/2011/09/map-1024x727.png) GIS map showing overlay from RPC report and HOLC hazard areas[/caption]

Article edited to make corrections to errors pointed out by Mr. Cloud in the comments section.
