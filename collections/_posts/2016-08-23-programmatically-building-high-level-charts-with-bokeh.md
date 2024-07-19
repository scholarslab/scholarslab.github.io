---
author: scott-bailey
date: 2016-08-23 09:43:39+00:00
layout: post
slug: programmatically-building-high-level-charts-with-bokeh
title: Programmatically Building High-level Charts with Bokeh
category: blog
tags:
- code
- visualization
- tutorial
---

A couple of months ago, while preparing for the Digital Humanities 2016 conference, I was trying to build a series of charts to visualize data results from some topic modeling I had done. Specifically, I had a data file in which each row was a document and the columns were topic proportions. Reading across any row, you could understand the document’s composition according to the twenty topics of the topic model. Reading down a column, you could understand how a topic was more or less present across the text corpus, in this case a series of logically and chronologically ordered documents. For the charts, I wanted to create a separate chart for each column of the data table so that I could _see_ the distribution of the topic across documents and understand how it was more or less present in different sections of the corpus. I figured bar graphs would be a straightforward way to do this, with each bar representing the topic proportion for a single document.

I initially tried to do this with [D3](https://d3js.org/), a Javascript library frequently and regularly used to create interactive visualizations. I’ve used D3 before, and while I do find it somewhat tedious, it’s usually not too difficult to craft the more straightforward types of graphs, like bar graphs. I ran into an issue, though, which is that I wanted to take my single data file and produce twenty different bar graphs, and I wanted to do it programmatically rather than having to write code for each graph. This is certainly possible in D3, but while I made progress toward it, my Python loving self grew quickly frustrated with how hard it seemed to be to iterate through the columns of the data table, something I knew I could do quickly and easily with Python and [pandas](http://pandas.pydata.org/), perhaps the most regularly used data analysis library in Python.

I decided, then, that it was a great opportunity to learn to do a bit of data visualization in Python. There are a number of different libraries available to you: [matplotlib](http://matplotlib.org/), [Seaborn](https://stanford.edu/~mwaskom/software/seaborn/), [Bokeh](http://bokeh.pydata.org/en/latest/), and more. I chose to use Bokeh due to its easy integration with pandas and its multi-level API. With Bokeh you can quickly and easily create [high-level charts](http://bokeh.pydata.org/en/latest/docs/user_guide/charts.html), such as bar graphs, box plots, or histograms, with a minimal amount of code and configuration. Or you can work with Bokeh’s [mid-level interface](http://bokeh.pydata.org/en/latest/docs/user_guide/plotting.html), creating figure elements such as circles and adding them to figures you create. Finally, if you want complete control over every bit of the chart, you can work directly with Bokeh’s [models](http://bokeh.pydata.org/en/latest/docs/reference/models.html#bokeh-models).

Since I just wanted to create a series of bar charts, I worked directly with Bokeh’s high-level chart API. Here’s the script I wrote with extensive comments.

```
# import pandas to handle data
import pandas as pd
# from bokeh's high-level charts api, import Bar to create the bar graph,
# output_file to save the generate html files, and show to immediately show
# the generated html files
from bokeh.charts import Bar, output_file, show


def break_names(df):
    """Parse filenames into paragraph numbers and titles, adding those
    into the dataframe"""
    # grab the column with filenames and convert it to a list
    filenames = df['file'].tolist()
    # create empty lists to hold paragraph numbers and titles
    # every document in the corpus has a unique paragraph number and title
    para_nums = []
    titles = []
    # iterate over the filenames, split them, and push each component into the
    # correct list
    for filename in filenames:
        num_and_name = filename.split('/').pop()
        chunks = num_and_name.split('-')
        para_nums.append(chunks[2])
        titles.append(chunks[3])
    # create new dataframe columns from the lists of paragraph numbers
    # and titles
    df['para_nums'] = pd.Series(para_nums)
    df['titles'] = pd.Series(titles)
    # return the dataframe with the added columns
    return df


def main():
    # read in the csv with the data
    data = pd.read_csv('barth_composition.csv')
    # create the dataframe with paragraph number and title columns
    cleaned_data = break_names(data)
    # get the column names from the dataframe
    columns = cleaned_data.columns.values
    # use a list comprehension to create a list of all the column names that
    # contain the word 'topic', e.g. 'topic-01'
    topics = [topic for topic in columns if 'topic' in topic]
    # for each topic/column create a bar graph
    # see documentation here:
    # http://bokeh.pydata.org/en/latest/docs/user_guide/charts.html#bar-charts
    for topic in topics:
        plot = Bar(
            cleaned_data,
            'para_nums',
            values=topic,
            ylabel='Proportion',
            xlabel='Paragraph Number',
            title="Proportion per pararaph of " + topic
        )
        # save the html output file
        output_file('charts/' + topic + '.html')
        # open the html output file in the browser
        show(plot)


if __name__ == '__main__':
    main()
```

I really like Bokeh, and creating a series of bar charts was incredibly straightforward. There is a definite limitation with Bokeh's output options though. At the time I wrote this script, the primary output type is an HTML file, which is entirely reasonable given that Bokeh describes itself as "a Python interactive visualization library that targets modern web browsers for presentation." It is deliberately positioned as a Python alternative to writing D3 yourself. There have been requests for the Bokeh team to add the ability to directly save output as either SVG or PNG, but, given [this Github issue thread](https://github.com/bokeh/bokeh/issues/538), it seems like there are significant technical blocks to implementing this in the near future. That said, the interactive graph window does allow you to click an icon to save a static version of the graph as it currently appears in the browser as a PNG. While this isn't particularly efficient, it works just fine when you need to generate a few static figures for papers or presentations. Since I'm thinking of creating a website that includes these visualizations, I'm not bothered by the HTML output, though in the future, when I'm just creating figures for a presentation, I might use Seaborn, built on matplotlib, which does allow you to save directly to PNG and other formats. On the whole, especially if you're already a Python person and find writing D3 a bit tedious, I strongly recommend taking a look at Bokeh.
