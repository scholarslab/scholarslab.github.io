---
author: wayne-graham
date: 2012-09-10 09:18:03+00:00
layout: post
slug: geocoding-for-neatline-part-i
title: Geocoding for Neatline - Part I
categories:
- Digital Humanities
- Research and Development
tags:
- Digital Humanities
- geocoding
- hacks
- mechanize
- neatline
- neatline features
- ruby
---

Recently I was asked if there was a way to [import place names in connection with lat/lon points](https://twitter.com/S_moores/status/222369341390331904). Twitter's character limitation does't provide an adequate format to respond, and this technique can be quite useful outside of Neatline too, so I thought I would dive in a bit and explain a method to can get prepare place names for use in Omeka and beyond. This will be a two part series where I cover the basics of geocoding locations in a CSV file, then move to using these points with the [NeatlineFeatures](http://omeka.org/add-ons/plugins/neatlinefeatures/) and [Neatline](http://omeka.org/add-ons/plugins/neatline/) plugins for [Omeka](http://omeka.org/).



# Geocoding


Geocoding is a method of deriving geographic descriptions (a latitude/longitude point or series of points) from  geographic data like an address (or portion of an address) or place name. The more granular the geographic data, the more accurate the location information. For example, Charlottesville, Virginia is far more accurate than Virginia, and the center point that a geocoder would return would use different points to represent this data. As you can see, the red marker is the center point for geocoding '**Virginia**,' where the blue marker codes the center of '**Charlottesville, Virginia**.'

[iframe src="http://jsfiddle.net/wsgrah/rbHhj/embedded/result,js,html,css/" allowfullscreen="allowfullscreen" frameborder="0"]

There are some complexities, as data can be a bit ambiguous (e.g. W Jefferson St. vs Jefferson St.), but clever engineers have been working on issues like that and (generally) do a good job figuring out what is intended from partial address information. It is also worth noting that different services have different algorithms for calculating the result from a partial address (center of a county, city, state, country, etc.), so be sure to check your results to make sure they're what you are expecing!



## Web Services


With the growth of different mapping services over the last several years, getting access to geographic information has become pretty straight forward thanks to a lot of really smart engineers working on the problem of providing location-based information. Most likely you've consumed these services (even if you didn't realize) and you've probably heard of some of the big companies that provide [APIs](http://en.wikipedia.org/wiki/Application_programming_interface) to their Geocoding services like [Google](https://developers.google.com/maps/documentation/geocoding/), [Yahoo!](http://developer.yahoo.com/maps/rest/V1/geocode.html), and [Microsoft](https://www.microsoft.com/maps/developers/web.aspx). These are great resources, and provide well documented access to their data, but do place some restrictions on the use of the data retrieved from their system. Generally these restrictions are on the commercial re-use of the information, but do read and understand the Terms of Service to make sure your intended use is in compliance with the Terms of Service for the geocoding service you use for  your project.

While these companies provide access to their information, I did want to take a moment to  highlight some other services that are not backed by large corporate entities. [Geocoder.us](http://geocoder.us/) is a service that has good coverage if you're data is in the US ([Geocoder.ca](http://geocoder.ca/) provides a service for Canadian addresses) and allows up to 50,000 requests per day.  [USC's GIS Research Laboratory](https://webgis.usc.edu/Services/Geocode/Default.aspx) provides a service for up to 2,500 addresses per day, with very few restrictions on its use. The last one I'll mention (and there are many more of these services), [Geonames.org](http://www.geonames.org/) has world-wide coverage, with more than 8 million place names. This service is particularly useful for things you don't have a street address for (e.g. [Eiffel Tower](http://www.geonames.org/search.html?q=eiffel+tower&country=)).



# First Steps


I'll start out by saying it's not necessary for you to do any coding whatsoever to do geocoding. However, this is a good programming exercise, allowing you to work with a number of technologies. If you have no interest in writing custom code for this, you can check out [Google's Fusion Tables](http://support.google.com/fusiontables/bin/answer.py?hl=en&answer=1012281) to do something similar to what I will explain here. 

The examples in this exercise will be written in Ruby, but the concept can be ported to just about any language ([node](http://search.npmjs.org/#/wheredat), [Python](http://code.google.com/p/geopy/), [PHP](http://geocoder-php.org/), [Haskell](https://github.com/mrd/geocode-google), [jQuery](https://github.com/tristandunn/jquery-auto-geocoder), ...). 

If you don't have Ruby (use a 1.9 version) installed on your computer, you will need that ([Windows](http://railsinstaller.org/), [OS X](https://rvm.io/), [Linux](https://rvm.io/)). I'll also be using the [Geocoder](http://www.rubygeocoder.com/) gem as well as the built-in Ruby libraries for working with spreadsheets (specifically [CSV](http://en.wikipedia.org/wiki/Comma-separated_values), comma-separated values).




## Project Setup



The basic approach for this project will be to create a project directory, install the necessary libraries, create a spreadsheet of the addresses we want to look up, write a short program that will retrieve the latitude/longitude points (and other information) we need, then write those back this information to a new spreadsheet we can use later on.

Assuming you have Ruby (and [rubygems](http://rubygems.org/)) properly installed, all you will need to get going is set up a new project space. A few simple commands will get this project going in your **terminal**:

[code lang="bash"]
mkdir -p ~/projects/geocode
gem install geocoder
touch ~/projects/geocode/locations.csv
touch ~/projects/geocode/geocoder.rb
cd ~/projects/geocode/
[/code]

This set of commands commands created a new directory (`~/projects/geocode`) for the project if it does not exist, installed the **geocoder** library, and created a couple of empty files to store our locations and our program logic. Lastly, we change the current directory (`cd ~/projects/geocode` for the terminal to be the project directory containing the files.



## The Datasource


In order to explore this technique, we need some data. A really easy format for working with text is the CSV format, or comma separated values. For the purposes of this exercise, paste the following in to a file named `locations.csv`.

[code]
Address,City,State
"1600 Pennsylvania Ave",Washington,DC
"931 Thomas Jefferson Parkway",Charlottesville,VA
"Eiffel Tower"
[/code]

The CSV format is pretty straight forward; you literally separate the values (columns) with commas. The one gotcha is that if you have something with a comma in it, you will need to escape the comma with a backslash (e.g. "Charlottesville, VA" as a single field).



## Reading the File


Now with a little bit of data, we can turn our attention to reading the values out of the CSV file with an actual program. This is done with the [Ruby CSV class](http://ruby-doc.org/stdlib-1.9.3/libdoc/csv/rdoc/CSV.html), which provides methods to read and manipulate the contents of CSV data. Our program for this exercise will go in  the `geocoder.rb` file. With your favorite text editor, open the `geocoder.rb` file and add the following:

[code lang="ruby"]
require 'csv'

LOCATIONS = './locations.csv'

CSV.foreach(LOCATIONS, :headers => true, :header_converters => :symbol) do |line|
  p line[:address]
  p line[:city]
  p line[:state]
end
[/code]

This code reads the CSV file, converts each header value in to a symbol (for easy reference) then steps over each line in the file and prints the `address`, `city`, and `state` fields on a new line in the terminal. You can run this program in the terminal by executing the Ruby script with `ruby geocoder.rb`. When you do, you should see output along these lines:

[code]
○ → ruby geocoder.rb
"1600 Pensylvania Ave"
"Washington"
"DC"
"931 Thomas Jefferson Parkway"
"Charlottesville"
"VA"
[/code]



## Adding Geocoding



Now that we can read the data, we can change (or refactor) the program to use the geocoder gem and write logic to look up location information. At this point, we need to _include the Geocoder library_, concatenate the address fields together, then retrieve the location information.

[code lang="ruby"]
require 'csv'
require 'geocoder'
LOCATIONS = './locations.csv'

CSV.foreach(LOCATIONS, :headers => true, :header_converters => :symbol) do |line|
  address_string = "#{line[:address]}, #{line[:city]}, #{line[:state]}"
  result = Geocoder.search(address_string)
  p result
end

[/code]

Now when you run the program (`ruby geocoder.rb`), you'll see that there is a lot more information returned from the geocoding web service. To make this a bit more useful for our purposes here, we can use the `latitude` and `longitude` convenience methods to display the latitude and longitude coordinates.

[code lang="ruby"]

require 'csv'
require 'geocoder'

LOCATIONS = './locations.csv'

CSV.foreach(LOCATIONS, :headers => true, :header_converters => :symbol) do |line|
  address_string = "#{line[:address]}, #{line[:city]}, #{line[:state]}"
  result = Geocoder.search(address_string).first
  lat = result.latitude
  lon = result.longitude

  puts "#{lat}, #{lon}"
end

[/code]

Now when you run the program, you should see that the program prints the latitude and longitude for the address line.

[code lang="bash"]
○ → ruby geocoder.rb
38.8976777, -77.03651700000002
38.0054041, -78.4563433
48.858278, 2.294254
[/code]

This is great, but what we really want to do is write this back to a CSV file in a format that we can use in Omeka. The Neatline plugins currently use a format called [WKT format](http://en.wikipedia.org/wiki/Well-known_text) to describe geographic information, so we need to get our results in this format using the WKT ** "Point"** data definition. If you can remember any of your middle school algebra, a point is a set of coordinates (typically X and Y). The Earth's X axis is longitude, and the Y axis latitude, so we just use this format and wrap the coordinates with "**POINT()**:

[code lang="ruby"]
require 'csv'
require 'geocoder'

LOCATIONS = './locations.csv'

puts "address,city,state,point,lat,lon"

CSV.foreach(LOCATIONS, :headers =>
 true, :header_converters =>
 :symbol) do |line|
    address_string = "#{line[:address]}, #{line[:city]}, #{line[:state]}"
    result = Geocoder.search(address_string).first
    lat = result.latitude
    lon = result.longitude

    point = "POINT(#{lon} #{lat})"

    puts "#{address_string}, #{point}, #{lat}, #{lon}"

end
[/code]

Notice I **removed the comma in the POINT value**; this is important as this is specified in the WKT format. Now with a shell trick ([not this kind](http://blog.affiliatetip.com/wp-content/uploads/2011/02/iStock_000000395946XSmall.jpg)), we can run the program and generate a file that contains the new data. The trick is actually the [I/O redirection command](http://tldp.org/LDP/abs/html/io-redirection.html) (`<`) which can takes the output of one command and redirects it to a file. I generally prefer (when possible) to generate new files when dealing with massaging data. I've just deleted too many files accidentally in code.

[code lang="bash"]
ruby geocoder.rb > geocoded.csv
[/code]

This command will run the file, but redirect the content that was being shown on the screen in to a file named '`geocoded.csv`.'



## Coordinate Systems



Did you know that there were a lot of different ways to actually define latitude and longitude? Before taking this job I had only really seen coordinates expressed in either in the degrees, minutes, seconds format (e.g.  38° 1′ 48″ N, 78° 28′ 44″ W) or it's decimal equivalent (e.g. 38.03, -78.478889). Turns out there are a lot different ways to actually describe these coordinates because our maps are flat, and our planet is not. If the world was actually a real sphere, this wouldn't be a difficult problem, but the Earth's shape actually what is referred to as an [oblate spheroid](http://en.wikipedia.org/wiki/Oblate_spheroid), which makes getting precise locations on from the curved Earth to a flat map problematic. How you deal with the conversion of points on the spheroid (Earth) to a map is a projection. This conversion can introduce distortion, like the maps I remember in school growing up where Greenland is larger than Africa.  Projections are chosen according to the purpose of the map to preserve qualities like shape, area, distance, or direction. The European Petroleum Survey Group (EPSG) maintains a database of all the myriad projections and datums. After a while, you start to know the more regularly used projections, and the results we got back from the Geocoder gem are in a projection for the [WGS 84](http://en.wikipedia.org/wiki/World_Geodetic_System) coded [EPSG:4326](http://spatialreference.org/ref/epsg/4326/).  (**Note:** for a nice piece on projections, check out [Projection Lessons in Maps](http://www.scholarslab.org/geospatial-and-temporal/projection-lessons-in-maps/).)


But what does this have to do with the coordinates? In Neatline we are using a different coordinate system to make some of the conversions in using Google base maps a bit easier. Basically we need to take the decimal degrees and covert them to meters. For example, the coordinates of the White House, this:

[code lang="text"]
POINT(-77.03651700000002 38.8976777)
[/code]

Which uses a spherical interpretation of the globe becomes the following when converted to meters.

[code lang="text"]
POINT(-8575665.843733624 4707025.360473459)
[/code]

These are the same points, just described differently. So how can we handle this in the code? There are services that you can go out and use to re-project your data, but this one is pretty straight forward with a little trigonometry (didn't think you'd read that today, did you). With a little mathematical hand-waving, I wrote the following method to convert degrees to meters:

[code lang="ruby"]
def degrees_to_meters(lon, lat)
    half_circumference = 20037508.34
    x = lon * half_circumference / 180
    y = Math.log(Math.tan((90 + lat) * Math::PI / 360)) / (Math::PI / 180)

    y = y * half_circumference / 180

    return [x, y]
end
[/code]

The `20037508.34` the the above code is half the circumference of the earth in meters (I looked it up), and there are some math tricks to account for a generalized flattening of the earth. Now we can call this function and calculate the projected coordinates to use in a Neatline exhibit.

[code lang="ruby"]
require 'csv'
require 'geocoder'

LOCATIONS = './locations.csv'

def degrees_to_meters(lon, lat)
    half_circumference = 20037508.34
    x = lon * half_circumference / 180
    y = Math.log(Math.tan((90 + lat) * Math::PI / 360)) / (Math::PI / 180)

    y = y * half_circumference / 180

    return [x, y]
end

puts 'address,city,state,point,lat,lon'
CSV.foreach(LOCATIONS, :headers => true, :header_converters => :symbol) do |line|
    address_string = "#{line[:address]}, #{line[:city]}, #{line[:state]}"
    result = Geocoder.search(address_string).first

    lat = result.latitude
    lon = result.longitude

    #point = "POINT(#{lon} #{lat})"
    projected = degrees_to_meters(lon, lat)
    point = "POINT(#{projected[0]} #{projected[1]})"

    puts "#{address_string}, #{point}, #{lat}, #{lon}"
end
[/code]

When you run the program as described above, you will get results similar to this:

[code]
address,city,state,point,lat,lon
1600 Pennsylvania Ave, Washington, DC, POINT(-8575665.843733624 4707025.360473459), 4707025.360473459, -8575665.843733624
931 Thomas Jefferson Parkway, Charlottesville, VA, POINT(-8733720.184442518 4580189.258447956), 4580189.258447956, -8733720.184442518
Eiffel Tower, , , POINT(255395.18699487977 6250848.2584100235), 6250848.2584100235, 255395.18699487977
[/code]

Now you can regenerate your CSV file of the properly formatted location information from the terminal:


[code lang="bash"]
ruby geocoder.rb > geocoded.csv
[/code]

If you've already created a `geocoded.csv` file, the above command will overwrite the file. If you're wanting to append similar content to the same file, you can use the `>>` operator which will add the output to the end of the file.



# Summary



In this post I covered the basics of using geocoding services through a programming API, as well as reading CSV files, and redirecting output to a new file. I waved my hands with a little magic (some math, some programming, some Unix commands), but there are a lot of techniques here you can use in a variety of scenarious. In my next post, I will cover how to automate populating this information in an Omeka instance, automating the population of this information in new items, then them in a Neatline exhibit.
