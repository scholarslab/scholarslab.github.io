---
author: kelly-johnston
date: 2010-01-07 15:40:08+00:00
layout: post
slug: calculating-county-to-county-distances-with-gis
title: Calculating county-to-county distances with GIS
categories:
- Geospatial and Temporal
tags:
- ESRI
- gis
---

In the Scholars' Lab we recently worked with a researcher whose study areas focused on several groups of US counties.  Of interest was the distance from every county within a group to every other county in that same group. We used geographic information systems (GIS) software to calculate these distances.

<!-- more -->GIS software creates, manages, analyzes, and visualizes geographically referenced data.  Environmental Systems Research Institute (ESRI) in Redlands, California, produces ArcGIS desktop, a GIS software suite.  The following examples use ArcGIS ArcMap software version 9.3.1 at the ArcInfo product level.  Instructions for accessing GIS software at the University of Virginia are here: [http://guides.lib.virginia.edu/gis](http://guides.lib.virginia.edu/gis).  If you are not affiliated with UVA, contact your local IT support person or ESRI for information on accessing this GIS software.

**Calculating polygon centroids** – When working with polygon features (like county boundaries) in GIS it is often necessary to locate the geographic center or centroid of each polygon as a point feature.  In ESRI’s ArcGIS desktop software the ‘Feature To Point’ tool creates polygon centroids.

[![](http://www.scholarslab.org/wp-content/uploads/2010/01/FeatureToPoint1.jpg)](http://www.scholarslab.org/geospatial-and-temporal/calculating-county-to-county-distances-with-gis/attachment/featuretopoint-2/)

For more information see the ArcGIS online help for the ‘Feature To Point’ tool:

[http://webhelp.esri.com/arcgisdesktop/9.3/index.cfm?id=1798&pid=1790&topicname=Feature_To_Point_%28Data_Management%29](http://webhelp.esri.com/arcgisdesktop/9.3/index.cfm?id=1798&pid=1790&topicname=Feature_To_Point_%28Data_Management%29)

** **

** **

** **

** **

** **

** **

** **

** **

** **

** **

**Creating a point distance table** – Given a set of point features, GIS software can calculate the straight-line distance from each point in the set to every other point in the set.   The output distance table contains one row for each point-to-point combination along with the calculated distance.  In ESRI’s ArcGIS desktop software the ‘Point Distance’ tool creates a point distance table.

[![Point Distance](http://www.scholarslab.org/wp-content/uploads/2010/01/PointDistance.jpg)](http://www.scholarslab.org/geospatial-and-temporal/calculating-county-to-county-distances-with-gis/attachment/pointdistance/)

For more information see the ArcGIS online help for the Point Distance tool: [http://webhelp.esri.com/arcgisdesktop/9.3/index.cfm?id=1353&pid=1347&topicname=Point_Distance_%28Analysis%29](http://webhelp.esri.com/arcgisdesktop/9.3/index.cfm?id=1353&pid=1347&topicname=Point_Distance_%28Analysis%29)

** **

** **

** **

** **

** **

**Example using the ‘Feature To Point’ and ‘Point Distance’ tools – **Given a polygon dataset representing boundaries of a group of US counties, calculate the distance between each county in the group and every other county in the group.



	
  1. After ensuring the county polygon boundary file is projected using a distance-preserving projection, select the county polygons for the study area.[![](http://www.scholarslab.org/wp-content/uploads/2010/01/Counties1-1024x763.jpg)](http://www.scholarslab.org/geospatial-and-temporal/calculating-county-to-county-distances-with-gis/attachment/counties-2/)

	
  2. Convert the selected county polygons to county polygon centroid points using the ‘Feature To Point’ tool. [![Counties with Centroids](http://www.scholarslab.org/wp-content/uploads/2010/01/CountiesCentroids-1024x763.jpg)](http://www.scholarslab.org/geospatial-and-temporal/calculating-county-to-county-distances-with-gis/attachment/countiescentroids/)

	
  3. Generate the point distance table for all county centroid points created in step 2 using the ‘Point Distance’ tool.  Distance is expressed in the linear unit of the input dataset, which is meters in our example.[![](http://www.scholarslab.org/wp-content/uploads/2010/01/Matrix1.jpg)](http://www.scholarslab.org/geospatial-and-temporal/calculating-county-to-county-distances-with-gis/attachment/matrix-2/)


