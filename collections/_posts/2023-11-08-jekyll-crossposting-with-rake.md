---
author: brandon-walsh
date: 2023-11-08
layout: post
slug: jekyll-crossposting-with-rake
title: "Jekyll Crossposting with Raketags"
category: essay
tags:
- jekyll
- tutorial
- web development
- code
crosspost:
  - title: Brandon's blog
    url: https://walshbr.com/blog/jekyll-crossposting-with-rake
---
If you've spent any time at all reading on my blog you've probably noticed that I crosspost virtually all my material to the [Scholars' Lab](https://scholarslab.org/) site. There are good reasons for this: almost everything I do in one space is relevant to the other, and it's way to drive traffic between the two places. It's a bit of a pain though. While both sites are built with Jekyll, they live in two different repositories, two different folders on my computer. They also each have slightly different frontmatter. So my old workflow looked something like this:

1. Compose and edit in my blog repository.
2. Open a second window.
3. Carefully copy and past everything from my original post into the identical post in the other site folder.
4. Edit the front matter.
5. Publish.
6. Grumble the whole time. 

I use a rake task to automate the building of the initial post, which saves a little time by generating everything for my post templates. 

That command looks like this: 

{% raw %}

```
desc "Begin a new post in #{posts_dir}"
task :new_post, :title do |t, args|
  if args.title
    title = args.title
  end
  clean_title = title.downcase.gsub(/\s/,'-')
  title_slug =clean_title.downcase.gsub(' ', '-').gsub(/[^\w-]/, '')
  filename = "#{posts_dir}/#{Time.now.strftime('%Y-%m-%d')}-#{clean_title}.#{new_post_ext}"
  if File.exist?(filename)
    abort("rake aborted!") if ask("#{filename} already exists. Do you want to overwrite?", ['y', 'n']) == 'n'
  end
  puts "Creating new post: #{filename}"
  open(filename, 'w') do |post|
    post.puts "---"
    post.puts "layout: post"
    post.puts "title: \"#{title.gsub(/&/,'&amp;')}\""
    post.puts "date: #{Time.now.strftime('%Y-%m-%d')}"
    post.puts "
tags: [digital-humanities]"
    post.puts "crosspost:
  - title: #{crosspost_title}
    url: #{crosspost_url}#{title_slug}"
    post.puts "---"
  end
end
```
{% endraw %}

A lot of the core code here was adapted from [Octopress](http://octopress.org/), a blogging framework I haven't used per se in several years. There are some useful rake tasks that have persisted as my blog changed though. There's a lot of Ruby above, but the upshot is that, when I go to blog, I give a command in this form from the terminal:

* ```$ rake new_post["Flashy title here"]```

The rake task will create a new post in my _drafts folder with 2023-10-23-flashy-title-here.md that looks like this:

```
---
layout: post
title: "Flashy title here"
date: 2023-10-23tags: [digital-humanities]
crosspost:
  - title: the Scholars' Lab blog
    url: https://scholarslab.lib.virginia.edu/blog/flasy-title-here
---

```

I'll then fill in the content of the post below the triple dashes. After years of manually crossposting things, I decided to make another rake task that would mirror this one, a terminal command that I could run from my blog folder like so:

* ```$ rake crosspost['2023-10-23-flashy-title-here.md','True']```

This command would copy my completed post file to the other project folder for the Scholars' Lab site, spin up the necessary metadata, and copy over any images that are necessary for the post. 

Here's what that rake command looks like:
{% raw %}

```
desc "Makes a crossposted file in the slab folder"
task :crosspost, [:file_name, :images] do |t, args|
  if args.file_name
    file_name = args.file_name
  end
  puts file_name
  old_file = "_posts/#{file_name}"
  new_file = "#{slab_dir}/#{file_name}"
  puts new_file

  parsed = FrontMatterParser::Parser.parse_file(old_file, loader: FrontMatterParser::Loader::Yaml.new(allowlist_classes: [Date]))

  title_slug = parsed.front_matter['title'].downcase.gsub(' ', '-').gsub(/[^\w-]/, '')
  if File.exists?(new_file)
    File.delete(new_file)
  end
  File.open(new_file, 'w'){|f|
f.puts("---
author: brandon-walsh
date: #{parsed.front_matter['date']}
layout: post
slug: #{title_slug}
title: #{parsed.front_matter['title']}
categories:
crosspost:
  - title: #{blog_title}
    url: #{blog_url}/#{title_slug}
---
#{parsed.content}
")
}
    puts "Crossposted file created at #{new_file}"
  post_image_folder = blog_image_dir + '/' + title_slug
  crosspost_image_folder = slab_image_dir  + '/' + title_slug
if args.images
  if File.exists?(crosspost_image_folder)
    FileUtils.rm_rf(crosspost_image_folder)
    Dir.mkdir(crosspost_image_folder) 
  end
  FileUtils.cp_r(post_image_folder + '/.', crosspost_image_folder)
end
end
```
{% endraw %}

This lets me pass the name of the post file and whether or not it contains images to a new crosspost rake task, which will then handle everything else for me. Now my workflow is _much_ more streamlined. If you're interested in setting this for on your crossposting needs, you can follow these steps.

Assumptions:

* File structure
  * You have two jekyll blogging folders on your computer. 
  * Each of these blogging folders has a regularized system for image handling, where you store the images for your post in project-folder/assets/sluggified-name-of-post
  * I've included at the top of the Rakefile a series of variables that you can update for the particulars of your file structure
* Each blog post has the crossposting code as a part of _layouts/post.html 
* You will update the Rakefile to account for your own metadata, as well as any differences between metadata in the two blogs.

To implement on your own, then, do the following:

1. Create a Rakefile in the root of your main jekyll blog folder.
2. Paste into it the [contents of this Rakefile](https://raw.githubusercontent.com/walshbr/walshbr.github.io/source/Rakefile)
3. You'll need to install one gem - front_matter_parser - by running this command from your main blogging folder: ```$ gem install front_matter_parser```
4. In each Jekyll blog folder, add the following code to your post layout to actually use the crossposting metadata. Both folders have this in their _layouts/post.html file:
{% raw %}

```
{% if page.crosspost %}
<div class="post_crosspost">
    {% if page.crosspost.size == 1 %}
    Crossposted to <a href="{{ page.crosspost[0].url }}">{{ page.crosspost[0].title }}</a>.
    {% else %}
  {% capture crosspostings %}
  {% for target in page.crosspost %}
  <a href="{{ target.url }}">{{ target.title }}</a>,
  {% endfor %}
  {% endcapture %}
  {% assign crosspostarray = crosspostings | strip | split: "," %}
  Crossposted to {{ crosspostarray | array_to_sentence_string }}.
  {% endif %}
  <br><br>
</div>
{% endif %}
```
{% endraw %}

Now you should be able to do something like the following as your workflow.

1. Make my new post: ```$ rake new_post["Title of Blog post"]```
2. Draft and finalize post
3. Crosspost it by passing a filename and True if there are images to crosspost: ```$ rake crosspost["year-month-day-sluggified-title.md","True"]```

Hope that helps! I tried to abstract things so that this could be usable by others with slightly different setups than mine, but let me know if you try to use it and run into problems.
