---
author: wayne-graham
date: 2012-09-12 01:00:07+00:00
layout: post
slug: geocoding-for-neatline-part-ii
title: Geocoding for Neatline - Part II
categories:
- Digital Humanities
- Research and Development
tags:
- Digital Humanities
- geocoding
- geospatial
- mechanize
- neatline
- neatline features
---

In my last post ([Geocoding for Neatline - Part I]( http://www.scholarslab.org/digital-humanities/geocoding-for-neatline-part-i)), I covered how to programmatically geocode a set of addresses and generate a CSV file for use in Neatline. In this post, I'll go over how to actually post this information in Omeka and make it available for use in your Neatline exhibit.



# Requirements



As in the previous post, I'll be making use of Ruby here, but I'll be making use of a different gem ([Mechanize](https://rubygems.org/gems/mechanize)) to handle interacting with an Omeka server. This is what you'll need to get going:





  * A running [Omeka](http://omeka.org/) instance with the [Neatline](http://omeka.org/add-ons/plugins/neatline/), and [NeatlineFeatures](http://omeka.org/add-ons/plugins/neatlinefeatures/) plugins installed.


  * [Ruby](http://www.ruby-lang.org/en/)


  * A text editor (e.g. [vim](http://www.vim.org/), [Sublime Text 2](http://www.sublimetext.com/2), [notepad++](http://notepad-plus-plus.org/))


  * [CSV data](https://gist.github.com/3307210#file_geocoded.csv) from the last exercise


  * The terminal





# The Technique



With a [prepared geocoded CSV file](https://gist.github.com/3307210#file_geocoded.csv), we can start dealing with how to actually get this data in to Omeka. If you've done an Omeka project in the past, you may be familiar with the [CSVImport plugin](http://omeka.org/add-ons/plugins/csv-import/), and this may be a first impulse to use. Unfortunately, because of some technical reasons I won't get in to here, this won't work. However, as a developer, this simply becomes a constraint for a different system. This is where the [Mechanize](http://rubygems.org/gems/mechanize) gem comes to the rescue, allowing us to automate filling out the Omeka forms for our items. The first step here is to install the library with the `gem` command in the terminal:

[code lang="bash"]
gem install mechanize
[/code]

The basic idea in using [Mechanize](http://rubygems.org/gems/mechanize), which allows us to write a set of automated steps, is to take the file [we just generated in the previous post](https://gist.github.com/3307210#file_geocoded.csv), read all the information, then fill out the Omeka form and save the newly created item. In a new script (e.g. `populate.rb`), we require the libraries we'll be using:

[code lang="ruby"]
require 'rubygems'
require 'mechanize'
require 'csv'

# code to process CSV points
[/code]

In Mechanize you can define a user agent (a web browser), and it's a good practice to define the user agent as a browser that you don't use on a daily basis to avoid any caching or username/password issues. For me, I set this to "Mac Safari" (you can use this on Windows too), but you can choose from any of the [user agent aliases](https://github.com/tenderlove/mechanize/blob/master/lib/mechanize.rb#L90) Mechanize provides.

[code lang="ruby"]
agent = Mechanize.new {|a|
  a.user_agent_alias = 'Mac Safari'
}

# code to fill out Omeka forms
[/code]

Now we just need to mechanize how to log on to Omeka. I'm doing everything locally, so you will need to fix the path to the Omeka admin area as needed:

[code lang="ruby"]
agent.get('http://localhost/omeka/admin/') do |page|
  omeka_page = page.form_with(:action => '/omeka/admin/users/login']) do |form|
    form.username = 'your user name'
    form.password = 'your password'
  end.submit

  # read CSV file
end
[/code]

If you ran this code right now, it wouldn't actually do anything visually, but this bit of code finds the form on the admin page that contains the login information, then sets the username and password on the form, and submits it, effectively authorizing you to do other things with Omeka in the context of the program.

Next, we want to read the CSV file (`geocoded.csv`) that we [generated in the previous post](https://gist.github.com/3307210#file_geocoded.csv) to read the data. This is done in the same way before:

[code lang="ruby"]
CSV.foreach('./geocoded.csv', :headers => true, :header_converters => :symbol) do |line|
    # add logic to fill out form
end
[/code]

This should look familiar. The code just reads the CSV file, converts the headers to symbols, and steps through each line. For each line (row) in the CSV file, we want to tell Mechanize to click on the 'Items' link (the Items tab) then the 'Add Items Link' to get to the form to fill out, which will look like the following:

[code lang="ruby"]
# click on items
item_page = agent.click(omeka_page.link_with(:text => %r/Items/))
# click on add items
add_item_page = agent.click(item_page.link_with(:text => %r/Add an Item/))

# Add the item to the form
[/code]

This code tells Mechanize to click on the link with the text of Items with a [regular expression](https://en.wikipedia.org/wiki/Regular_expression). In this case, the regular expression isn't necessary, but is useful when you need to do a partial match on a link (or some other component) that is on a page, and something I do by default.

Now the program is at the new item form, and it's time to set data on the form from the CSV file. This is slightly trickier because of the way in which Omeka names its form fields. There are two areas we want to populate, the **Title** field and the elements to actually create the point for NeatlineFeatures. If you look at the source code of the **Item Add** page, you'll notice that the Title field actually has a name of '`Elements[50][0][text][/text]`,' which looks scary, but the program knows what to do with it. I also know that the **Coverage** field in Omeka is '`Elements[38][0]`' with a field name after it (`[text][/text]`, `[wkt]`, `[zoom]`, `[mapon]`, ...). We can populate this information with data from our spreadsheet now:

[gist id=3307210 file=add_item_snippet.rb]

This bit actually fills out the form, turning the map component on, setting a zoom level of `10` for the map, then setting a center point to focus the map. If you've been following along, your script should now look like this:

[gist id=3307210 file=populate.rb]

After running this script, when you log on to Omeka, you should see newly created items with their locations populated and a pretty map that you can use in Neatline. **Note:** these items were not set to be 'public', but you can easily add this to the script, and can be your homework. 

Assuming you've read the [documentation on creating Neatline exhibits](http://neatline.org/plugins/neatline/), you can now simply add these items and have them placed spatially by clicking on the **Map** icon in the Neatline editor.

[![](http://www.scholarslab.org/wp-content/uploads/2012/09/neatline_features-300x199.png)](http://www.scholarslab.org/wp-content/uploads/2012/09/neatline_features.png)



## Summary


This set of posts shows you how to automate geocoding of your data and integrating it with a Neatline exhibit. These automated methods can save you a lot of time doing data entry, but you should keep in mind that a really great Neatline exhibit really requires you getting in to the exhibit and using your imagination to tell an interactive story. How your users interact with your exhibit depends not only on the quality of your data, but the time you spend working on the interactions.
