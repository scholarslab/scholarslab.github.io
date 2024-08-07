---
author: chris-gist
date: 2011-01-31 10:33:50+00:00
layout: post
slug: putting-american-community-survey-data-to-work
title: Putting American Community Survey Data to Work
category: blog
tags:
- geospatial and temporal
- visualization and data mining
- gis
- social sciences
---

This past week, I read an [article](http://www.wired.com/autopia/2010/10/more-people-biking-to-work/) that claims the number of people "getting around" by bicycle is steadily growing. The article references the American Community Survey (ACS) and the League of American Bicyclists (LAB). Considering I am a certified instructor from the LAB, I wanted to check the data for myself (and map it). <!-- more -->

I originally went to [Social Explorer](http://www.socialexplorer.com) (SE) to view and map the data. While SE allowed me to easily view data and make some quick thematic maps, it has some limitations. SE only allows you to map one attribute at a time and does not allow for custom attributes (like the rate change in bicycle riding between 2005 and 2009). Also SE only goes back to 2006 for the ACS.  My journey next took me to [American FactFinder](http://factfinder.census.gov) (AFF), the U.S. Census's data portal.

In AFF, I was able to get all the transportation survey data and decided to map rate changes in mass transit, bicycling and walking.  I had to manipulate the downloaded Excel file to make it "GIS ready."


![](http://static.scholarslab.org/wp-content/uploads/2010/10/fullMap150.png)




There are some interesting things going on within this map.  First, why do a majority of the counties have no data?  The ACS only surveys communities with greater than 65K in population.  Therefore, a majority of U.S. counties are not included in the ACS.  Several counties have data for either 2005 or 2009 but rate change can only be calculated for counties with both.  Secondly, how can adjacent counties have such wild differences in rates of change for bicycle usage?  This question is much tougher to answer.  However, the most likely issue is inaccuracies in the ACS survey results stemming from small sample sizes and differences in the way questions are asked.  The LAB article does mention these issues in passing.




[![](http://static.scholarslab.org/wp-content/uploads/2010/10/fullMapMass150.png)](https://scholarslab.org/geospatial-and-temporal/putting-american-community-survey-data-to-work/attachment/fullmapmass150/)




[![](http://static.scholarslab.org/wp-content/uploads/2010/10/fullMapWalk150.png)](https://scholarslab.org/geospatial-and-temporal/putting-american-community-survey-data-to-work/attachment/fullmapwalk150/)




Keeping in mind the classification bins are not uniform across these maps, I think there may be some interesting parallels between counties that have lost mass transit and gained walkers/bicyclists, etc.




I made a few more maps showing the density of cyclists in 2005 and 2009 at a larger scale.




[![](http://static.scholarslab.org/wp-content/uploads/2010/10/bikeVA.png)](https://scholarslab.org/geospatial-and-temporal/putting-american-community-survey-data-to-work/attachment/bikeva/)




[![](http://static.scholarslab.org/wp-content/uploads/2010/10/bikeNEcoor.png)](https://scholarslab.org/?attachment_id=)




[![](http://static.scholarslab.org/wp-content/uploads/2010/10/bikeCO.png)](https://scholarslab.org/geospatial-and-temporal/putting-american-community-survey-data-to-work/attachment/bikeco/)




If you would like more information about the U.S. Census, the ACS, Social Explorer, GIS or bicycling, please contact me at cgist[at]virginia.edu.  Larger version of the maps are also available.
