---
author: jeremy-boggs
date: 2013-08-12 01:00:56+00:00
layout: post
slug: displaying-recent-neatline-exhibits-on-your-omeka-home-page
title: Displaying Recent Neatline Exhibits on your Omeka Home Page
categories:
- Research and Development
tags:
- neatline
- omeka
- php
- themes
---

The charismatic [Alex Gil](http://www.elotroalex.com/) submitted a feature request to Neatline asking to be able to browse [Neatline exhibits on your Omeka home page](https://github.com/scholarslab/Neatline/issues/211). Turns out you can already [specify which page you want as your home page in Omeka 2.0](http://omeka.org/codex/Managing_Navigation_2.0#Choose_a_Homepage), so that helped with Alex's original query. But as we discussed the issue, Alex also wondered about putting a list of recent Neatline exhibits on the home page, much the same way Omeka already does with recent items. While we're not sure yet about putting this kind of thing in the plugin itself, I mentioned that it's fairly easy to do in your own them using one of Omeka's hooks, and promised him a blog post explaining more. Here's me making good on that promise.

In case you didn't know, Omeka has plenty of ways for developers to add new content to an Omeka site or filter existing content using hooks and filters, respectively. To use them, you first need to write a function that adds or changes content to your preference, then you pass that function to the relevant hook or filter in Omeka. Some dummy code to illustrate:

[sourcecode language="php"]
<?php

function my_custom_function() {
  echo 'Hello world!';
}

add_plugin_hook('hook_name', 'my_custom_function');

[/sourcecode]

You could put this kind of code anywhere that Omeka could run it, particularly a new plugin or your activated theme's `custom.php` file. (An Omeka theme's `custom.php` file is a great place to put some custom code for your Omeka site, without having to go to the trouble of creating and activating a plugin.)

In our case, we want to append some new content to the home page of an Omeka site, so we'll need to find a hook to let us do that. Fortunately, we have one available—`public_home`—so let's use that to display some recent Neatline exhibits.

(Keep in mind that the following code should work in Omeka 2.0 and Neatline 2.0; you can take a similar approach for earlier versions of each, but some of the functions would be different.)

First, we'll need to create a `custom.php` file in your current active theme, if one doesn't already exist. (If it does exist, we'll use that one.) Make sure the file is in the root of your theme: `omeka/themes/your-theme/custom.php`.

Next we'll need to write a function that gets a certain number of Neatline exhibits and lists them out, and put that in our `custom.php` file. We'll name our function `display_recent_neatline_exhibits`, and put all our goodies in there. Let's create the function:

[sourcecode language="php"]
<?php

function display_recent_neatline_exhibits() {

}

[/sourcecode]

After we've created the function, we'll go ahead and pass that function to the `public_home` hook:

[sourcecode language="php"]
<?php

function display_recent_neatline_exhibits() {

}

add_plugin_hook('public_home', 'display_recent_neatline_exhibits');
[/sourcecode]

We still shouldn't see any changes on the home page, since our function isn't actually doing anything. But you shouldn't get any errors on the page either. If you do, make sure you have every curly brace and semicolon and all the other characters right; PHP is quite dramatic about syntax errors.

Now lets add some stuff to our function to get some recent Neatline exhibits. First, let's define a variable `$html` and set that equal to an empty string. In the end, we'll echo the value of `$html`, so we want it equal to at least something, in case you actually don't have any Neatline exhibits to display.

[sourcecode language="php"]
<?php

function display_recent_neatline_exhibits() {
    $html = '';

    echo $html;
}

add_plugin_hook('public_home', 'display_recent_neatline_exhibits');
[/sourcecode]

Next we'll create a variable, `$neatlineExhibits`, and assign it to the results of a query using Omeka's `get_records` function. The [`get_records` function](http://omeka.readthedocs.org/en/latest/Reference/libraries/globals/get_records.html) takes three arguments: the type of record, an array of query parameters, and number to limit results. We'll query for 'NeatlineExhibit' record type, make sure that the `recent` parameter is `true`, and limit our results to five:

[sourcecode language="php"]
<?php

function display_recent_neatline_exhibits() {
    $html = '';

    // Get our recent Neatline exhibits, limited to five.
    $neatlineExhibits = get_records('NeatlineExhibit', array('recent' =&gt; true), 5);

    echo $html;
}

add_plugin_hook('public_home', 'display_recent_neatline_exhibits');
[/sourcecode]

Now we'll set the results in `$neatlineExhibits` for a record loop, and check to see if in fact we have exhibits to display in a PHP `if` statement:

[sourcecode language="php"]
<?php

function display_recent_neatline_exhibits() {
    $html = '';

    // Get our recent Neatline exhibits, limited to five.
    $neatlineExhibits = get_records('NeatlineExhibit', array('recent' =&gt; true), 5);

    // Set them for the loop.
    set_loop_records('NeatlineExhibit', $neatlineExhibits);
 
    // If we have any to loop, we'll append to $html.
    if (has_loop_records('NeatlineExhibit')) {

    }

    echo $html;
}

add_plugin_hook('public_home', 'display_recent_neatline_exhibits');
[/sourcecode]

Inside our `if` statement, we'll update the value of `$html` so that, instead of echoing an empty string, it echos some HTML that includes links to each of our recent Neatline exhibits. Remember that this will only get printed if we actually have Neatline exhibits in the database, otherwise we'll just return an empty string.

[sourcecode language="php"]
<?php

function display_recent_neatline_exhibits() {
    $html = '';

    // Get our recent Neatline exhibits, limited to five.
    $neatlineExhibits = get_records('NeatlineExhibit', array('recent' =&gt; true), 5);

    // Set them for the loop.
    set_loop_records('NeatlineExhibit', $neatlineExhibits);
 
    // If we have any to loop, we'll append to $html.
    if (has_loop_records('NeatlineExhibit')) {
        $html .= '&lt;ul&gt;';
        
        foreach (loop('NeatlineExhibit') as $exhibit) {
            $html .= '&lt;li&gt;'
                   . nl_getExhibitLink(
                         $exhibit,
                         'show',
                         metadata($exhibit, 'title'),
                         array('class' =&gt; 'neatline')
                     )
                   . '&lt;/li&gt;';
        }

        $html .= '&lt;/ul&gt;';
    }

    echo $html;
}

add_plugin_hook('public_home', 'display_recent_neatline_exhibits');
[/sourcecode]

As you can see, we append an opening unordered list tag, `<ul>` to `$html`. (Using `.=` in PHP lets us append additional strings onto an existing variable.) Then, we use Omeka's `loop` function to loop through our set of Neatline exhibits. Inside that loop, we once again adding something to the value of `$html`: A list item wrapping a link to a the current Neatline exhibit in the loop. To help us make that link, we'll use a function provided by the Neatline plugin: `nl_getExhibitLink`. We're passing values for four arguments: The exhibit object (defined in `$exhibit` in the foreach loop); the `action` or route you want the link to take; the text of the link (here we've used Omeka's `metadata` function to give us the title of the exhibit); and an array of attributes for the link (we've added a `class` attribute equal to 'neatline'). Then we end with a closing list item tag.

And that should do it. You can see a version more or less the same as what I demonstrate here in a [public gist](https://gist.github.com/clioweb/6178723) I published earlier in the week. If you'd like to display a recent list of Neatline exhibits on your Omeka home page, just grab this code, and put it in your theme's `custom.php` template.
