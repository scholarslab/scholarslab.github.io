---
author: ammon-shepherd
date: 2016-01-14 13:15:41+00:00
layout: post
slug: working-with-d3-part-one
title: Working with D3, Part One.
categories:
- Visualization and Data Mining
tags:
- charts
- d3
- graphs
---

# [![graph](http://scholarslab.org/wp-content/uploads/2016/01/graph.png)](http://scholarslab.org/wp-content/uploads/2016/01/graph.png)





# Track-n-Treat



Halloween is great. Free candy. And I have six kids to go out and get it for me. :)

I cull some of the finest chocolates from their bags after trick-or-treating and enjoy them throughout the next week. We usually eat everything within a week...

This year I decided to track how much candy I ate, and which ones, in the week after Halloween. It was only because we needed to do something like this for [Praxis](http://praxis.scholarslab.org/memo/2015/10/30/track-the-treat/). Otherwise I eat candy without a second thought.



## [](https://github.com/mossiso/track-n-treat/blob/master/D3-Instructions-Part-1.md#getting-started-with-d3)Getting started with d3



D3 is a Decent tool for visualizing Data, hence the name Data-Driven Documents. It is basically a JavaScript framework for making charts, graphs, maps, or anything you can images, based on data from a file, database, etc.

The best way to learn d3 is to practice it over and over. I suggest looking at one or both of these d3 tutorials first.




    
  * [https://www.dashingd3js.com/table-of-contents](https://www.dashingd3js.com/table-of-contents)

    
  * [http://alignedleft.com/tutorials/d3/about](http://alignedleft.com/tutorials/d3/about)



After you've been through one, or both of them, try looking at my examples here:


    
  * [https://github.com/mossiso/track-n-treat](https://github.com/mossiso/track-n-treat)





# [](https://github.com/mossiso/track-n-treat/blob/master/D3-Instructions-Part-1.md#making-the-chart)Making the chart



This post is an expanded version of the actual code files which contain lots of comments.



## [](https://github.com/mossiso/track-n-treat/blob/master/D3-Instructions-Part-1.md#a-note-about-data)A note about data



How you structure the data is actually pretty important. It can make it super easy or super hard to get at the information you want. The most simple method usually is the best way to start.

In my case, every time I ate a piece of candy, I took a note of what day it was, what time, and which candy. Something like this:

`day: 2015-11-01, time: 11:15, candy: Snickers`

As it so happens, this is a great format. Each day on it's own line. The data gets a little redundant, the day and time information are repeated many times, but it makes it super easy to read and we can easily manipulate it later with d3.

For d3 to use this, we have several options. CSV and JSON are the easiest to work with, so I'll pick one of them.

A CSV option would look like this:


    
    <code>2015-11-01, 13:15, Snickers
    2015-11-01, 15:24, KitKat
    2015-11-02, 19:33, Twix
    2015-11-02, 17:42, KitKat
    2015-11-03, 21:51, Snickers
    </code>



A JSON option is a bit more intense. Here I'm creating an array of objects.





    
     [ 
       {<span class="pl-s"><span class="pl-pds">"</span>day<span class="pl-pds">"</span></span>: <span class="pl-s"><span class="pl-pds">"</span>2015-11-01<span class="pl-pds">"</span></span>, <span class="pl-s"><span class="pl-pds">"</span>time<span class="pl-pds">"</span></span>: <span class="pl-s"><span class="pl-pds">"</span>17:25<span class="pl-pds">"</span></span>, <span class="pl-s"><span class="pl-pds">"</span>candy<span class="pl-pds">"</span></span>: <span class="pl-s"><span class="pl-pds">"</span>Heath Bar<span class="pl-pds">"</span></span>},
       {<span class="pl-s"><span class="pl-pds">"</span>day<span class="pl-pds">"</span></span>: <span class="pl-s"><span class="pl-pds">"</span>2015-11-01<span class="pl-pds">"</span></span>, <span class="pl-s"><span class="pl-pds">"</span>time<span class="pl-pds">"</span></span>: <span class="pl-s"><span class="pl-pds">"</span>17:25<span class="pl-pds">"</span></span>, <span class="pl-s"><span class="pl-pds">"</span>candy<span class="pl-pds">"</span></span>: <span class="pl-s"><span class="pl-pds">"</span>Kitkat Bar<span class="pl-pds">"</span></span>},
       {<span class="pl-s"><span class="pl-pds">"</span>day<span class="pl-pds">"</span></span>: <span class="pl-s"><span class="pl-pds">"</span>2015-11-01<span class="pl-pds">"</span></span>, <span class="pl-s"><span class="pl-pds">"</span>time<span class="pl-pds">"</span></span>: <span class="pl-s"><span class="pl-pds">"</span>20:25<span class="pl-pds">"</span></span>, <span class="pl-s"><span class="pl-pds">"</span>candy<span class="pl-pds">"</span></span>: <span class="pl-s"><span class="pl-pds">"</span>Kitkat Bar<span class="pl-pds">"</span></span>},
       {<span class="pl-s"><span class="pl-pds">"</span>day<span class="pl-pds">"</span></span>: <span class="pl-s"><span class="pl-pds">"</span>2015-11-02<span class="pl-pds">"</span></span>, <span class="pl-s"><span class="pl-pds">"</span>time<span class="pl-pds">"</span></span>: <span class="pl-s"><span class="pl-pds">"</span>17:38<span class="pl-pds">"</span></span>, <span class="pl-s"><span class="pl-pds">"</span>candy<span class="pl-pds">"</span></span>: <span class="pl-s"><span class="pl-pds">"</span>Whopper<span class="pl-pds">"</span></span>}, 
       <span class="pl-ii">...</span> 
     ]






This is an array (designated with square brackets `[]`) of objects (designated with curly braces `{}`). The object consists of names (day, time, candy) and their associated values. If we assign the above to the variable 'array', we can access the first element of the array with `array[0]`. That would return the first line above.



<blockquote>A good tutorial on JavaScript arrays is at Lynda.com (free subscription through the [library](https://www.library.virginia.edu/lynda/)). Search for 'Introducing the JavaScript Language with Joe Chellman'.</blockquote>



To access any element within the object, we can use dot notation.

`array[0].day` would return `2015-11-01`.

`array[0].time` would return `17:25`.

`array[3].candy` would return `Whopper`.

_What would array[2].time return?_

_How would you get the value "Kitkat Bar" (there are two ways)?_



## [](https://github.com/mossiso/track-n-treat/blob/master/D3-Instructions-Part-1.md#setting-up-the-document)Setting up the document



First off, we'll create a generic HTML page with the standard HTML





    
    <!DOCTYPE html>
    <<span class="pl-ent">html</span> <span class="pl-e">lang</span>=<span class="pl-s"><span class="pl-pds">"</span>en<span class="pl-pds">"</span></span>>
        <<span class="pl-ent">head</span>>
            <<span class="pl-ent">meta</span> <span class="pl-e">charset</span>=<span class="pl-s"><span class="pl-pds">"</span>utf-8<span class="pl-pds">"</span></span>>
            <<span class="pl-ent">title</span>>D3 Test</<span class="pl-ent">title</span>>
            <<span class="pl-ent">link</span> <span class="pl-e">href</span>=<span class="pl-s"><span class="pl-pds">"</span>styles.css<span class="pl-pds">"</span></span> <span class="pl-e">rel</span>=<span class="pl-s"><span class="pl-pds">"</span>stylesheet<span class="pl-pds">"</span></span> <span class="pl-e">type</span>=<span class="pl-s"><span class="pl-pds">"</span>text/css<span class="pl-pds">"</span></span> />
    <span class="pl-s1">        <<span class="pl-ent">script</span> <span class="pl-e">type</span>=<span class="pl-s"><span class="pl-pds">"</span>text/javascript<span class="pl-pds">"</span></span> <span class="pl-e">src</span>=<span class="pl-s"><span class="pl-pds">"</span>d3/d3.v3.js<span class="pl-pds">"</span></span>></<span class="pl-ent">script</span>></span>
        </<span class="pl-ent">head</span>>
        <<span class="pl-ent">body</span>>
        </<span class="pl-ent">body</span>>
    </<span class="pl-ent">html</span>>






Everything is pretty standard. The `<script>` tag is what pulls in the d3 library from the folder named 'd3'.

`<script type="text/javascript" src="d3/d3.v3.js"></script>`

Next we create a couple of divs, one for placing some text and links, and another that we'll use to attach our graph to. This code goes in between the `<body>` and `</body>` tags in the code above.





    
          <<span class="pl-ent">div</span> <span class="pl-e">id</span>=<span class="pl-s"><span class="pl-pds">"</span>wrap<span class="pl-pds">"</span></span>>
            <<span class="pl-ent">h1</span>>Track-n-Treat</<span class="pl-ent">h1</span>>
            <<span class="pl-ent">p</span>>How many candies did I eat each day the week after Halloween?</<span class="pl-ent">p</span>>
            <<span class="pl-ent">div</span> <span class="pl-e">id</span>=<span class="pl-s"><span class="pl-pds">"</span>graph<span class="pl-pds">"</span></span>></<span class="pl-ent">div</span>>
          </<span class="pl-ent">div</span>>








## [](https://github.com/mossiso/track-n-treat/blob/master/D3-Instructions-Part-1.md#diving-into-d3)Diving into D3



The rest of the code is written in JavaScript. The JavaScript can live anywhere in the code: in between the `<header>` and`</header>` tags, or anywhere in between the `<body>` and `</body>` tags. I just put it after the above code after the `<body>`tag.

To have JavaScript in the body of the HTML document, we'll surround it with `<script>` tags like so:





    
    <span class="pl-s1"><<span class="pl-ent">script</span> <span class="pl-e">type</span>=<span class="pl-s"><span class="pl-pds">"</span>text/javascript<span class="pl-pds">"</span></span>></span>
    <span class="pl-s1"> <span class="pl-c">/* Add some JavaScript here.</span></span>
    <span class="pl-s1"><span class="pl-c">    '/*' starts a multi-line comment, and the next line ends it.</span></span>
    <span class="pl-s1"><span class="pl-c">*/</span></span>
    
    <span class="pl-s1"><span class="pl-c">// This is a single line comment</span></span>
    <span class="pl-s1"></<span class="pl-ent">script</span>></span>






Our first line of JavaScript, and d3, is one to pull in a file that has the data in it. It is the first line within our `<script>` tags above.


    
    <code>d3.json("data/track-n-treat.json", function(data) {
      // More d3 code will go in here
    
    }
    </code>



This function surrounds all of the d3 code that makes the graph. Supply the path (relative to this html file) and a variable name for the data (within the function's parenthesis) Here we pull in the data from a separate file. `d3` calls the main d3 method, `.json` calls d3's json method that takes care of loading all of the data from the json file. The json function needs a file path (data/track-n-treat.json) that is relative to where this file is, and a function that creates an internal variable/object to hold the data.

So now all of the data from the json file is available as a variable, in our case it is named 'data'. (We could change that to anything we want.)

It's as if we had this in the code:





    
    data <span class="pl-k">=</span> [ 
       {<span class="pl-s"><span class="pl-pds">"</span>day<span class="pl-pds">"</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">"</span>2015-11-01<span class="pl-pds">"</span></span>, <span class="pl-s"><span class="pl-pds">"</span>time<span class="pl-pds">"</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">"</span>17:25<span class="pl-pds">"</span></span>, <span class="pl-s"><span class="pl-pds">"</span>candy<span class="pl-pds">"</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">"</span>Heath Bar<span class="pl-pds">"</span></span>},
       {<span class="pl-s"><span class="pl-pds">"</span>day<span class="pl-pds">"</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">"</span>2015-11-01<span class="pl-pds">"</span></span>, <span class="pl-s"><span class="pl-pds">"</span>time<span class="pl-pds">"</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">"</span>17:25<span class="pl-pds">"</span></span>, <span class="pl-s"><span class="pl-pds">"</span>candy<span class="pl-pds">"</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">"</span>Kitkat Bar<span class="pl-pds">"</span></span>},
       {<span class="pl-s"><span class="pl-pds">"</span>day<span class="pl-pds">"</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">"</span>2015-11-01<span class="pl-pds">"</span></span>, <span class="pl-s"><span class="pl-pds">"</span>time<span class="pl-pds">"</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">"</span>20:25<span class="pl-pds">"</span></span>, <span class="pl-s"><span class="pl-pds">"</span>candy<span class="pl-pds">"</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">"</span>Kitkat Bar<span class="pl-pds">"</span></span>},
       {<span class="pl-s"><span class="pl-pds">"</span>day<span class="pl-pds">"</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">"</span>2015-11-02<span class="pl-pds">"</span></span>, <span class="pl-s"><span class="pl-pds">"</span>time<span class="pl-pds">"</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">"</span>17:38<span class="pl-pds">"</span></span>, <span class="pl-s"><span class="pl-pds">"</span>candy<span class="pl-pds">"</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">"</span>Whopper<span class="pl-pds">"</span></span>}, 
       ... 
     ]








### [](https://github.com/mossiso/track-n-treat/blob/master/D3-Instructions-Part-1.md#some-variables)Some Variables



Next, we'll set some variables to use later.

The 'margin' variable is really an object, so we can call the elements within using dot notation like so: `margin.top` returns '40', or `margin.right` will return '40'.





    
    <span class="pl-k">var</span> margin <span class="pl-k">=</span> {top<span class="pl-k">:</span> <span class="pl-c1">40</span>, right<span class="pl-k">:</span> <span class="pl-c1">40</span>, bottom<span class="pl-k">:</span> <span class="pl-c1">40</span>, left<span class="pl-k">:</span><span class="pl-c1">40</span>},
        width <span class="pl-k">=</span> <span class="pl-c1">700</span>,
        height <span class="pl-k">=</span> <span class="pl-c1">300</span>,
        workingHeight <span class="pl-k">=</span> height <span class="pl-k">-</span> <span class="pl-smi">margin</span>.<span class="pl-c1">top</span> <span class="pl-k">-</span> <span class="pl-smi">margin</span>.<span class="pl-c1">bottom</span>;








### [](https://github.com/mossiso/track-n-treat/blob/master/D3-Instructions-Part-1.md#axes)Axes



D3 can take care of a lot of the functionality of creating and placing the x and y axes. D3 puts the axis in the right spot, puts the tick marks on, spaces them appropriately, and labels the tick marks.

There are two parts to creating an axis. First, create a scale. Second, apply the scale to the axis.

Let's start by making the x axis.



#### [](https://github.com/mossiso/track-n-treat/blob/master/D3-Instructions-Part-1.md#the-x-axis-scale)The X-Axis (scale)



We want the x axis to show the days.

We'll use a time scale, since we're plotting days. We'll first set 'x' to be a function that converts dates that we plug into it, into pixels on the screen. Think of this as a range or scale converter.

The domain represents the minimum and maximum values that exist in the data. The range is the minimum and maximum values as represented on the web page. This will basically be a date to pixel converter.



<blockquote>For a great write up on how d3 scales work, look here:

> 
> 
    
>   * [http://www.jeromecukier.net/blog/2011/08/11/d3-scales-and-color/](http://www.jeromecukier.net/blog/2011/08/11/d3-scales-and-color/)
> 

</blockquote>



Our next line of code creates the x function and assigns the domain and range for the scale. This code goes right after the variables we created above.





    
    <span class="pl-k">var</span> x <span class="pl-k">=</span> <span class="pl-smi">d3</span>.<span class="pl-smi">time</span>.<span class="pl-en">scale</span>()
              .<span class="pl-en">domain</span>([ <span class="pl-k">new</span> <span class="pl-en">Date</span>(data[<span class="pl-c1">0</span>].<span class="pl-smi">day</span>), <span class="pl-smi">d3</span>.<span class="pl-smi">time</span>.<span class="pl-smi">day</span>.<span class="pl-en">offset</span>(<span class="pl-k">new</span> <span class="pl-en">Date</span>(data[<span class="pl-smi">data</span>.<span class="pl-c1">length</span> <span class="pl-k">-</span> <span class="pl-c1">1</span>].<span class="pl-smi">day</span>), <span class="pl-c1">1</span>)])
              .<span class="pl-en">rangeRound</span>([<span class="pl-c1">0</span>, width <span class="pl-k">-</span> <span class="pl-smi">margin</span>.<span class="pl-c1">left</span> <span class="pl-k">-</span> <span class="pl-smi">margin</span>.<span class="pl-c1">right</span>]);






Let's walk through this in a bit more detail.

D3's [time.scale](https://github.com/mbostock/d3/wiki/Time-Scales) function takes a 'domain' and a 'range', which both take a minimum and maximum value. We plug the minimum and maximum dates into the domain section and we set the pixel limits in the range section.

The minimum date is the first day I ate candy, the maximum date is the last day I ate candy. To calculate the first day, we can get the date from the data array: 'data[0].day' corresponds with the first element in the 'data' array (which is an object), and the value of that objects 'day' key.

Since the json file is assigned to the 'data' variable, we can get the first 'day' by accessing `data[0].day`. We put that in the default JavaScript `Date` function to return the date as a String.

Getting the last day is similar, we can also get the last day from the data in the json file. We just need to get the last object element in the array, and get the value of the day element. But how do we specify which is the last element in the array if we don't know how many elements there are? We could count, but what if we change the data?

We can do a little math to calculate the last element in the array. The JavaScript builtin `.length` method gives us how many elements are in an array. Since array elements begin counting at 0, we just get the length, number of elements, minus 1 to give us the index of the last element. We can then we put that into d3's `time.day.offset` function which adds or subracts a given amount of days from the day that you input. In our case we'll offset by one day, so that the axis goes from the first day until the day after the last day that I ate candy.

The range is basically the width we specify above, but subtract some of the padding. So the range would be from 0 to 620 (700 - 40 - 40).

A visualization of what the domain to range looks like





    
    2015-11-1      2015-11-4         2015-11-8
       <span class="pl-k">|</span>---------------<span class="pl-k">|</span>-----------------<span class="pl-k">|</span>
      /                /                  \
     /                /                    \
    <span class="pl-k">|</span>----------------<span class="pl-k">|</span>----------------------<span class="pl-k">|</span>
    0                  88.5                620
    








#### [](https://github.com/mossiso/track-n-treat/blob/master/D3-Instructions-Part-1.md#the-x-axis-axis)The X-Axis (axis)



We create an x axis by calling the `d3.svg.axis` method, and assigning it to a variable. Let's call it 'xAxis'.





    
    <span class="pl-k">var</span> xAxis <span class="pl-k">=</span> <span class="pl-smi">d3</span>.<span class="pl-smi">svg</span>.<span class="pl-c1">axis</span>()
                  .<span class="pl-en">scale</span>(x)
                  .<span class="pl-en">orient</span>(<span class="pl-s"><span class="pl-pds">"</span>bottom<span class="pl-pds">"</span></span>)
                  .<span class="pl-en">ticks</span>(<span class="pl-smi">d3</span>.<span class="pl-smi">time</span>.<span class="pl-smi">days</span>, <span class="pl-c1">1</span>)
                  .<span class="pl-en">tickFormat</span>(<span class="pl-smi">d3</span>.<span class="pl-smi">time</span>.<span class="pl-en">format</span>(<span class="pl-s"><span class="pl-pds">'</span>%a %d<span class="pl-pds">'</span></span>));






Again, this can all be written out on one line, but we separate each chained method onto its own line to make the code more legible.

We plug in the scale created above using the `.scale` method, and we assign an orientation using the `.orient` method.

`.ticks` sets the ticks or marks on the x axis. `d3.time.days` sets a range of days within the dates used in the scale (above). '1' means show each day in that range (a '2' would show every other day in the range).

`.tickFormat` sets the format for the tick to be a date using the `d3.time.format` function in the form 'DDD ##'.



#### [](https://github.com/mossiso/track-n-treat/blob/master/D3-Instructions-Part-1.md#y-axis-scale)Y-Axis (scale)



The y-axis represents how many candies eaten each day. The height of this axis is determined by the maximum number of candies eaten in a single day. A few times I ate multiple candies at the same time. We'll need to get the number of candies for each time period in a day and add them all up. This will determine the max height of the y axis.

We'll use the d3 `nest` function which manipulates the data array. The `key` function pulls out all of the separate days as a key, the value is all of the times that are associated with that day.

We can then use the `rollup` function to turn the values into something else. In this case it returns the length of the values array, which is the number of candies eaten that day.





    
    <span class="pl-k">var</span> timesPerDay <span class="pl-k">=</span> <span class="pl-smi">d3</span>.<span class="pl-en">nest</span>()
                        .<span class="pl-en">key</span>(<span class="pl-k">function</span>(<span class="pl-smi">d</span>) { <span class="pl-k">return</span> <span class="pl-smi">d</span>.<span class="pl-smi">day</span>; })
                        .<span class="pl-en">rollup</span>(<span class="pl-k">function</span>(<span class="pl-smi">t</span>) { <span class="pl-k">return</span> <span class="pl-smi">t</span>.<span class="pl-c1">length</span>; })
                        .<span class="pl-en">entries</span>(data);






The `key` part of the `nest` function turns the data from this:





    
    [ 
    {<span class="pl-s"><span class="pl-pds">"</span>day<span class="pl-pds">"</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">"</span>2015-11-01<span class="pl-pds">"</span></span>, <span class="pl-s"><span class="pl-pds">"</span>time<span class="pl-pds">"</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">"</span>17:25<span class="pl-pds">"</span></span>, <span class="pl-s"><span class="pl-pds">"</span>candy<span class="pl-pds">"</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">"</span>Heath Bar<span class="pl-pds">"</span></span>},
    {<span class="pl-s"><span class="pl-pds">"</span>day<span class="pl-pds">"</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">"</span>2015-11-01<span class="pl-pds">"</span></span>, <span class="pl-s"><span class="pl-pds">"</span>time<span class="pl-pds">"</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">"</span>17:25<span class="pl-pds">"</span></span>, <span class="pl-s"><span class="pl-pds">"</span>candy<span class="pl-pds">"</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">"</span>Kitkat Bar<span class="pl-pds">"</span></span>},
    {<span class="pl-s"><span class="pl-pds">"</span>day<span class="pl-pds">"</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">"</span>2015-11-01<span class="pl-pds">"</span></span>, <span class="pl-s"><span class="pl-pds">"</span>time<span class="pl-pds">"</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">"</span>20:25<span class="pl-pds">"</span></span>, <span class="pl-s"><span class="pl-pds">"</span>candy<span class="pl-pds">"</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">"</span>Kitkat Bar<span class="pl-pds">"</span></span>},
    {<span class="pl-s"><span class="pl-pds">"</span>day<span class="pl-pds">"</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">"</span>2015-11-02<span class="pl-pds">"</span></span>, <span class="pl-s"><span class="pl-pds">"</span>time<span class="pl-pds">"</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">"</span>17:38<span class="pl-pds">"</span></span>, <span class="pl-s"><span class="pl-pds">"</span>candy<span class="pl-pds">"</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">"</span>Whopper<span class="pl-pds">"</span></span>}, 
    {<span class="pl-s"><span class="pl-pds">"</span>day<span class="pl-pds">"</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">"</span>2015-11-02<span class="pl-pds">"</span></span>, <span class="pl-s"><span class="pl-pds">"</span>time<span class="pl-pds">"</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">"</span>18:38<span class="pl-pds">"</span></span>, <span class="pl-s"><span class="pl-pds">"</span>candy<span class="pl-pds">"</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">"</span>Whopper<span class="pl-pds">"</span></span>}, 
    ... 
    ]






Into this:





    
    [
      {<span class="pl-s"><span class="pl-pds">'</span>key<span class="pl-pds">'</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>2015-11-01<span class="pl-pds">'</span></span>,
        <span class="pl-s"><span class="pl-pds">'</span>values<span class="pl-pds">'</span></span><span class="pl-k">:</span> [
        {<span class="pl-s"><span class="pl-pds">'</span>day<span class="pl-pds">'</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>2015-11-01<span class="pl-pds">'</span></span>, <span class="pl-s"><span class="pl-pds">'</span>time<span class="pl-pds">'</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>17:25<span class="pl-pds">'</span></span>, <span class="pl-s"><span class="pl-pds">'</span>candy<span class="pl-pds">'</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>Heath Bar<span class="pl-pds">'</span></span>},
        {<span class="pl-s"><span class="pl-pds">'</span>day<span class="pl-pds">'</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>2015-11-01<span class="pl-pds">'</span></span>, <span class="pl-s"><span class="pl-pds">'</span>time<span class="pl-pds">'</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>17:25<span class="pl-pds">'</span></span>, <span class="pl-s"><span class="pl-pds">'</span>candy<span class="pl-pds">'</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>Kitkat Bar<span class="pl-pds">'</span></span>},
        {<span class="pl-s"><span class="pl-pds">'</span>day<span class="pl-pds">'</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>2015-11-01<span class="pl-pds">'</span></span>, <span class="pl-s"><span class="pl-pds">'</span>time<span class="pl-pds">'</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>20:25<span class="pl-pds">'</span></span>, <span class="pl-s"><span class="pl-pds">'</span>candy<span class="pl-pds">'</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>Kitkat Bar<span class="pl-pds">'</span></span>},
        ]
      },
      {<span class="pl-s"><span class="pl-pds">'</span>key<span class="pl-pds">'</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>2015-11-02<span class="pl-pds">'</span></span>,
        <span class="pl-s"><span class="pl-pds">'</span>values<span class="pl-pds">'</span></span><span class="pl-k">:</span> [
        {<span class="pl-s"><span class="pl-pds">'</span>day<span class="pl-pds">'</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>2015-11-02<span class="pl-pds">'</span></span>, <span class="pl-s"><span class="pl-pds">'</span>time<span class="pl-pds">'</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>17:38<span class="pl-pds">'</span></span>, <span class="pl-s"><span class="pl-pds">'</span>candy<span class="pl-pds">'</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>Whopper<span class="pl-pds">'</span></span>}, 
        {<span class="pl-s"><span class="pl-pds">"</span>day<span class="pl-pds">"</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">"</span>2015-11-02<span class="pl-pds">"</span></span>, <span class="pl-s"><span class="pl-pds">"</span>time<span class="pl-pds">"</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">"</span>18:38<span class="pl-pds">"</span></span>, <span class="pl-s"><span class="pl-pds">"</span>candy<span class="pl-pds">"</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">"</span>Whopper<span class="pl-pds">"</span></span>}, 
        ...
        ]
      },
      ...
    ]






And the `rollup` part of the `nest` function further converts the data into this:





    
    [
      {<span class="pl-s"><span class="pl-pds">'</span>key<span class="pl-pds">'</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>2015-11-01<span class="pl-pds">'</span></span>, <span class="pl-s"><span class="pl-pds">'</span>values<span class="pl-pds">'</span></span><span class="pl-k">:</span> <span class="pl-c1">3</span> },
      {<span class="pl-s"><span class="pl-pds">'</span>key<span class="pl-pds">'</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">'</span>2015-11-02<span class="pl-pds">'</span></span>, <span class="pl-s"><span class="pl-pds">'</span>values<span class="pl-pds">'</span></span><span class="pl-k">:</span> <span class="pl-c1">2</span> },
      ...
    ]






`.entries` is where we plug in which data is to be 'key'ed and 'rollup'ed. We assign the result to the variable 'timesPerDay'.

Next we need to pull out the highest number from this array.





    
    <span class="pl-k">var</span> maxEats <span class="pl-k">=</span> <span class="pl-smi">d3</span>.<span class="pl-c1">max</span>(timesPerDay, <span class="pl-k">function</span>(<span class="pl-smi">v</span>) { <span class="pl-k">return</span> <span class="pl-smi">v</span>.<span class="pl-smi">values</span>; })






The `d3.max` function looks at an array and returns the highest value. It takes an array and a function. The array is the 'timesPerDay' array we created above. The function allows us to specify which part of the array to count. Here the `v` stands for the array of day objects, and `v.values` is the 'values' element within each day object, which holds the number of times a candy was eaten for that day. So `d3.max` is now just looking at the different 'values' fields and returns the highest number.

Since we're just using numbers (not dates), we use a regular linear scale for the y axis. We use the maximum number of candy in a day as the maximum for the domain.





    
    <span class="pl-k">var</span> y <span class="pl-k">=</span> <span class="pl-smi">d3</span>.<span class="pl-smi">scale</span>.<span class="pl-en">linear</span>()
              .<span class="pl-en">domain</span>([<span class="pl-c1">0</span>, maxEats ])
              .<span class="pl-en">range</span>([workingHeight, <span class="pl-c1">0</span>]);






The range is the working height (the height minus the padding) to 0.



<blockquote>What happens if the range is 0 to `workingHeight`</blockquote>





#### [](https://github.com/mossiso/track-n-treat/blob/master/D3-Instructions-Part-1.md#the-y-axis-axis)The Y-Axis (axis)



No we can create the y axis using the scale above.





    
    <span class="pl-k">var</span> yAxis <span class="pl-k">=</span> <span class="pl-smi">d3</span>.<span class="pl-smi">svg</span>.<span class="pl-c1">axis</span>()
                  .<span class="pl-en">scale</span>(y)
                  .<span class="pl-en">orient</span>(<span class="pl-s"><span class="pl-pds">'</span>left<span class="pl-pds">'</span></span>)
                  .<span class="pl-en">tickPadding</span>(<span class="pl-c1">8</span>);






Most of this is self-explanatory. The `.scale` calls the y scale we made above. The `.orient` sets the axis on the left hand side. `.tickPadding` determines the space between the tick marks. We set all of this to the variable name 'yAxis'.

We'll use the variables 'xAxis' and 'yAxis' later in the code.



### [](https://github.com/mossiso/track-n-treat/blob/master/D3-Instructions-Part-1.md#put-it-all-together)Put it all together





#### [](https://github.com/mossiso/track-n-treat/blob/master/D3-Instructions-Part-1.md#the-main-svg-element)The main SVG element



This is where the magic happens. First, we create a variable/object for the svg elements to live under, because we want to add to it later. `d3` calls the main d3 method. `select` specifies which part of the DOM we want to target. We're going to target an HTML div tag with the id 'graph'.





    
    <span class="pl-k">var</span> svg <span class="pl-k">=</span> <span class="pl-smi">d3</span>.<span class="pl-c1">select</span>(<span class="pl-s"><span class="pl-pds">'</span>#graph<span class="pl-pds">'</span></span>)
                .<span class="pl-en">append</span>(<span class="pl-s"><span class="pl-pds">'</span>svg<span class="pl-pds">'</span></span>)
                  .<span class="pl-en">attr</span>(<span class="pl-s"><span class="pl-pds">'</span>class<span class="pl-pds">'</span></span>, <span class="pl-s"><span class="pl-pds">'</span>graph<span class="pl-pds">'</span></span>)
                  .<span class="pl-en">attr</span>(<span class="pl-s"><span class="pl-pds">'</span>width<span class="pl-pds">'</span></span>, width)
                  .<span class="pl-en">attr</span>(<span class="pl-s"><span class="pl-pds">'</span>height<span class="pl-pds">'</span></span>, height)
                .<span class="pl-en">append</span>(<span class="pl-s"><span class="pl-pds">'</span>g<span class="pl-pds">'</span></span>)
                  .<span class="pl-en">attr</span>(<span class="pl-s"><span class="pl-pds">'</span>transform<span class="pl-pds">'</span></span>, <span class="pl-s"><span class="pl-pds">'</span>translate(<span class="pl-pds">'</span></span> <span class="pl-k">+</span> <span class="pl-smi">margin</span>.<span class="pl-c1">left</span> <span class="pl-k">+</span><span class="pl-s"><span class="pl-pds">'</span>, <span class="pl-pds">'</span></span> <span class="pl-k">+</span> <span class="pl-smi">margin</span>.<span class="pl-c1">right</span> <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">'</span>)<span class="pl-pds">'</span></span>);






This targets, or selects, the HTML tag with the id of 'graph'. We then append an svg tag to the div tag, give it a class of 'graph', and set the width and height.

Then we append an svg group element `g` where the chart will reside. We're going to offset this group to create some padding where the axes will go. To better understand the `transform` and `translate` functions, take a minute to read through the section on 'SVG Transform as a Coordinate Space Transformation'.




    
  * [https://www.dashingd3js.com/svg-group-element-and-d3js](https://www.dashingd3js.com/svg-group-element-and-d3js)





#### [](https://github.com/mossiso/track-n-treat/blob/master/D3-Instructions-Part-1.md#the-graph-section)The graph section



We attach the graph using the [selectAll ](https://github.com/mbostock/d3/wiki/Selections#d3_selectAll)method, and attaching to our previously created `svg` variable/object.





    
    <span class="pl-smi">svg</span>.<span class="pl-en">selectAll</span>(<span class="pl-s"><span class="pl-pds">'</span>.graph<span class="pl-pds">'</span></span>)
        .<span class="pl-c1">data</span>(timesPerDay)
        .<span class="pl-en">enter</span>().<span class="pl-en">append</span>(<span class="pl-s"><span class="pl-pds">'</span>rect<span class="pl-pds">'</span></span>)
          .<span class="pl-en">attr</span>(<span class="pl-s"><span class="pl-pds">'</span>class<span class="pl-pds">'</span></span>, <span class="pl-s"><span class="pl-pds">'</span>bar<span class="pl-pds">'</span></span>)
          .<span class="pl-en">attr</span>(<span class="pl-s"><span class="pl-pds">'</span>x<span class="pl-pds">'</span></span>, <span class="pl-k">function</span>(<span class="pl-smi">d</span>) {<span class="pl-k">return</span> <span class="pl-en">x</span>(<span class="pl-k">new</span> <span class="pl-en">Date</span>(<span class="pl-smi">d</span>.<span class="pl-smi">key</span>)) <span class="pl-k">+</span> <span class="pl-c1">14</span>; })
          .<span class="pl-en">attr</span>(<span class="pl-s"><span class="pl-pds">'</span>y<span class="pl-pds">'</span></span>, <span class="pl-k">function</span>(<span class="pl-smi">d</span>) { <span class="pl-k">return</span> workingHeight <span class="pl-k">-</span> (workingHeight <span class="pl-k">-</span> <span class="pl-en">y</span>(<span class="pl-smi">d</span>.<span class="pl-smi">values</span>)); })
          .<span class="pl-en">attr</span>(<span class="pl-s"><span class="pl-pds">'</span>width<span class="pl-pds">'</span></span>, <span class="pl-c1">24</span>)
          .<span class="pl-en">attr</span>(<span class="pl-s"><span class="pl-pds">'</span>height<span class="pl-pds">'</span></span>, <span class="pl-k">function</span>(<span class="pl-smi">d</span>) { <span class="pl-k">return</span> workingHeight <span class="pl-k">-</span> <span class="pl-en">y</span>(<span class="pl-smi">d</span>.<span class="pl-smi">values</span>) });






The data we use in the `data` method is the `timesPerDay` array created above. The `.enter` method represents the elements that will be appended to the svg group. The elements that we will append are rectangles, `rect`. Basically, this allows us to loop through the array and places the bar on the graph depending on the x and y positions.

The x position for the bar uses the `x` function created above, the 'date' and '14' for some padding. We give it the date, because the x scaler that we created above will turn that into a pixel within the range that we can use.

The y axis starts from the top of the screen, so we set the y location of the bar to start at the highest value of the height (so it starts at the bottom of the screen), then subract from that value to move the bar up the screen. We move it up the height of the axis minus the number of candies that day. The height is the workingHeight minus the number of candies.



### [](https://github.com/mossiso/track-n-treat/blob/master/D3-Instructions-Part-1.md#attach-the-axes)Attach the Axes



This just attaches the x axis to a svg group element





    
    <span class="pl-smi">svg</span>.<span class="pl-en">append</span>(<span class="pl-s"><span class="pl-pds">'</span>g<span class="pl-pds">'</span></span>)
        .<span class="pl-en">attr</span>(<span class="pl-s"><span class="pl-pds">'</span>class<span class="pl-pds">'</span></span>, <span class="pl-s"><span class="pl-pds">'</span>x axis<span class="pl-pds">'</span></span>)
        .<span class="pl-en">attr</span>(<span class="pl-s"><span class="pl-pds">'</span>transform<span class="pl-pds">'</span></span>, <span class="pl-s"><span class="pl-pds">'</span>translate(0, <span class="pl-pds">'</span></span> <span class="pl-k">+</span> workingHeight <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">'</span>)<span class="pl-pds">'</span></span>)
        .<span class="pl-c1">call</span>(xAxis);






Attach the y axis





    
    <span class="pl-smi">svg</span>.<span class="pl-en">append</span>(<span class="pl-s"><span class="pl-pds">'</span>g<span class="pl-pds">'</span></span>)
        .<span class="pl-en">attr</span>(<span class="pl-s"><span class="pl-pds">'</span>class<span class="pl-pds">'</span></span>, <span class="pl-s"><span class="pl-pds">'</span>y axis<span class="pl-pds">'</span></span>)
        .<span class="pl-c1">call</span>(yAxis);








## [](https://github.com/mossiso/track-n-treat/blob/master/D3-Instructions-Part-1.md#finish-the-javascript-code-and-html-page)Finish the JavaScript code and HTML page



We need to close the function we started above, and close the HTML script tag





    
    });
    </<span class="pl-ent">script</span>>
    
    </<span class="pl-ent">body</span>>
    </<span class="pl-ent">html</span>>






And there you have it. A bar graph showing how many candies I ate each day for the week after Halloween. [See it here.](http://mossiso.com/d3-instructions/eats.html)

Check here for all of the code together without comments: [https://github.com/mossiso/track-n-treat/blob/master/eats-no-comments.html](https://github.com/mossiso/track-n-treat/blob/master/eats-no-comments.html)

Next up, a graph to show how many times a day and which candies I ate for each day.
