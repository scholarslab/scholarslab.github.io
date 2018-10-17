This tutorial explains, in detail, how to author and edit new pages and posts on ScholarsLab.org. You can instead jump down to a [concise summary of the required steps](#cheatsheet) if you don't want these details.

## Tutorial difficulty level

This tutorial is appropriate for folks interested in understanding how the Scholars' Lab website works. You'll need prior experience browsing the Web, but no other specialized skills. 

We tried to make this tutorial very detailed, marking actual do-something-now steps as items in a numbered list, and text explaining why you're doing these steps formatted as normal paragraphs; we also included regular screenshots, so you can compare what you're seeing with what the lesson thinks you should be seeing. (And there's a [handy cheatsheet version](#cheatsheet), for once you've read through the details and just need a reference guide.) Whether learning these skills will feel comfortable and/or worthwhile to you, is particular to each person's experiences and interests. What we can tell you is that the steps in this tutorial are "straightforward"—that is, there are very few choices you need to make as you work through this lesson.

You'll learn some new terms and get familiar with the GitHub.com interface. You will *not* need to use the command line nor understand git/versioning. (We'll discuss two versioning concepts briefly, but you will not need to understand these to use this tutorial.)

If the workflow in this lesson doesn't work for your needs, there are two simpler options for authoring blog posts on SLab.org:

1. Email the text (preferably as either a GoogleDoc or Microsoft Word file, though let us know if you prefer writing in a different format) to TBD, and they'll post your content for you.
2. Visit the ["SLab.org posts & pages" GDrive folder](https://drive.google.com/drive/u/0/folders/1oVLf4TqqsxAbTuWc7J3XTJ8EqFxDiPOG) folder. You can make a copy of the [page template](https://docs.google.com/document/d/10OeLQUflD5txvjPQXFPHRgCpzfvu9_c9LC7R6nfXLl4/edit?usp=sharing) or [post template](https://docs.google.com/document/d/1OWBTybWrpZuesu8BQVQTbpXMkIC5p-nyAW26DV7r_A4/edit?usp=sharing) by going to the upper-left menu and clicking **File** > **Make a copy...** Let TBD know when you're finished, and they'll post your content for you.

Already comfortable with the command line and git? You may prefer to switch to [this tutorial](/docs/git-authoring-and-editing) for doing your authoring/editing of the site locally; this tutorial instead allows you to do everything from the GitHub.com interface.

## Let's get started!

There are **two main steps** to authoring/editing on our website:
1. **Create a new "branch", and create/edit your post/page there.** A branch is a copy of the website files, where you can make changes without affecting the live website or other folks' development or authoring work. [Instructions here](#branch-and-write/edit).
2. **Move ("merge") your work back to the main website branch, which makes your work show up on the live site** ([maybe.scholarslab.org](http://maybe.scholarslab.org) before the public launch, ScholarsLab.org after the public launch). The "main website" is the website consisting of the code in the "master" branch; that is, the main website/master branch is just the copy of the website files ("branch") from which we've told the live website to get its data. "Merging" means adding any changes/additions you've made in your new branch to another branch (in our case, back to the master branch).  [Instructions here](#move-your-writing-to-the-main-repo!).

(*A third review step may be added here, when we've finalized our editorial guidelines and process.*)

## 1. Branch and write/edit!
### Branch

A repo is a collection of code, and this repo in particular is the place on GitHub.com where we store all the files that make up the SLab.org website.

1. Visit the SLab.org "repo" (repository) at https://github.com/scholarslab/scholarslab.org

Now we'll create a new "branch" of this repo. A branch is just a copy of the repo (i.e. the set of files that = our website). We create this copy so you can make changes to the website (draft a new blog post, edit a page, play with the site's visual design...) without affecting how the live website looks (your changes won't appear on ScholarsLab.org until you're ready!), *and* without conflicting with other folks' work on the site.

When you visit https://github.com/scholarslab/scholarslab.org, you're seeing, by default, the default repo branch named "master"*. This "master" branch contains the code making up the site that's publicly visible at ScholarsLab.org. *A glimpse into the future:* When we finish our work at a new branch, we'll be moving that work back to the "master" branch so it shows up at ScholarsLab.org.

2. In the mid-left of your browser window, click on the grey "Branch: master 🔽" button. A dropdown appears! 
3. In the empty text field (it says "Find or create a branch..." in light grey text in the text field's background), write some name for your new branch... 

![docs-gonna-name-branch](/docs/docs-images/docs-gonna-name-branch.png)

If your branch name has spaces in it, these will be replaced by hyphens. It's best to keep these names short (1-4 words, easy to see without the text getting cut off, but still clear what you're doing) and descriptive (so folks have an idea what the work happening in the branch is). 

For example, I'm currently writing this tutorial page in a branch I named "documentation". You wouldn't want to name your branch "new-post" because other folks might also be working on new posts in other branches, and your branch name might confuse them. In this tutorial, we'll pretend that we're authoring a blog post as if the University Librarian's dog Henry hacked our website—because that's what serious digital humanities scholars do, sometimes—and we'll call the branch "henry-blog-takeover". 

![docs-branch-named](/docs/docs-images/docs-branch-named.png)

When you're creating your own branch, please substitute whatever you want where henry-blog-takeover in this lesson (unless you're Henry—if you are, then *woof*!). It doesn't matter too much what you name your branch, as long as you can recognize the branch name when you see it.

Now that we've created our branch, we need to switch to working there.

4. Once you've finished typing your new branch name in the field, you'll see a blue rectangle just below with the words "Create branch: henry-blog-takeover". Click anywhere on that blue rectangle.

The page will reload, and you'll notice a few changes:

- The URL will have switched from https://github.com/scholarslab/scholarslab.org to https://github.com/scholarslab/scholarslab.org/tree/henry-blog-takeover
- More importantly (because it's annoying to parse the URL to check whether you're in the right branch!), you can look at the branch dropdown to verify that we're now in the branch henry-blog-takeover. This is that same grey button in the mid-left of the page we clicked before, when we created a new branch.

![docs-on-new-branch](/docs/docs-images/docs-on-new-branch.png)

Now you are on a branch—a parrallel universe of sorts!—where you can work without affecting the main state of the project (in this case, the SLab.org website). You're ready to do one of the following (click to jump to that part of the tutorial): [create a new post](#add-a-new-post), [create a new page](#add-a-new-page), or [edit an existing post or page](#edit-existing-content).

### Add new content

#### Add a new blog post
After creating and switching [to a new branch](#branch), we'll navigate to the folder that holds blog posts, then create a new blog post file there.

1. Click on the "collections" link in the list of files (should be near the bottom left of your browser window). 

This navigates you into where we keep "collections" of similar files for the website, such as event info and the biographical file for each current and former SLab affiliate. Notice in the upper-left corner that we're still in our new henry-blog-takeover branch.

![docs-nav-to-collections](/docs/docs-images/docs-nav-to-collections.png)

2. Click on the "_posts" link in the list of files (should be near the mid left of your browser window). 

This is the folder where we keep all the blog posts.

![docs-nav-to-posts](/docs/docs-images/docs-nav-to-posts.png)

3. In the upper-right quarter of the page, click on the grey "Create new file" button.

![docs-create-new-post](/docs/docs-images/docs-create-new-post.png)

We now see a text editor for creating a new post! 

![docs-new-post-empty](/docs/docs-images/docs-new-post-empty.png)

We'll start by giving our post a filename Jekyll understands.

4. In the text field near the top middle of the screen (see screenshot below), type in a filename matching our restrictions, then press enter:

- The filename needs to start with the date, using the format YYYY-MM-DD, e.g. 2018-10-17. Note that the year comes first; hyphens separate the year, month, and day; and that dates with leading zeroes (e.g. 2018-02-05) need to include those zeroes.
- After the formatted date and an ending hyphen, a short (1-5 word) "slug", with any spaces replaced with hyphens. This is going to be part of the URL for your finished post, so something that summarizes your title or otherwise briefly refers to what your post is about is good. 
- End the file name with **.md**, which is the file ending for Markdown files (we'll be using [Markdown formatting](#markdown) to format our posts... more on that below!)
- In our example, the date is **2018-10-16**, the slug is **henry-rulez**, and putting it all together gives us a filename of **2018-10-16-henry-rulez.md**

![docs-new-post-empty-filename](/docs/docs-images/docs-new-post-empty-filename.png)

Now we're ready to write our post. Before we write our content, though, we need to put some text at the top that helps Jekyll know how to display, sort, and otherwise deal with our post. This post metadata is called "front matter" (cuz it's at the front of the file); it's also sometimes referred to as YAML ("yeah-mole"), which seriously stands for Yet Another Markup Language and is the language the front matter uses.

5. Paste in and customize the post's front matter.

You can copy the front matter (and some handy markdown formatting examples) from [this GoogleDoc](https://docs.google.com/document/d/1OWBTybWrpZuesu8BQVQTbpXMkIC5p-nyAW26DV7r_A4/edit?usp=sharing). An example of post front matter and explanation of the of each line follows:

```markdown
---
author: firstname-lastname
date: 2018-10-16 01:00:00+00:00
layout: post
slug: henry-hacked-slab
title: "10 Reasons Henry Rules: A Digital Humanities Blessay"
categories:
- Digital Humanities
---
```

HUMANS MUST EXPLAIN

commit message: When you make a git commit, it's useful to always provide a message describing what it is you are committing. That way, people looking at the log files can easily see at a glance who made what changes. Finally, git push takes your local commits and adds them to the public record on GitHub.
check your work on github repo page (not as it will look on live site)
move to [step 2](#move-your-writing-to-the-main-repo!)

#### Add a new page

After creating and switching [to a new branch](#branch),

make new page where

GDoc template

workflow for sharing publicly (Twitter, newsletter, UVA Library SLab channel)
YAML
commit message: When you make a git commit, it's useful to always provide a message describing what it is you are committing. That way, people looking at the log files can easily see at a glance who made what changes. Finally, git push takes your local commits and adds them to the public record on GitHub.
check your work on github repo page (not as it will look on live site)
move to [step 2](#move-your-writing-to-the-main-repo!)

#### Embedding media (photos, GIFs, videos...)

Where to store media? any size, naming, file type conventions?

For other kinds of gettin' fancy with format (adding hyperlinks, embedding videos, bulleted lists, bolding and italics...) see [our Markdown cheatsheet below](#cheatsheet##markdown).

### Edit existing content

After creating and switching [to a new branch](#branch),

Where's the file I want?

[add an annotated screenshot of the GitHub.com repo file structure here, to help folks know where to edit stuff!]

How do I edit it?

## 2. Move your writing to the main repo!

Watch out—the page might initially show you there are no conflicts and it's okay to press that green merge button. But wait! There's one set of checks that won't appear for a few extra seconds than you'd probably think to wait before merging—up to a slow count of 30. Watch this GIF to know what to expect:
![Wait for Travis check to complete when doing a PR](docs-images/PR-wait-for-travis.gif)

## Editorial process

(*A third step will be added here, when we've finalized our editorial guidelines and process.*)

## Cheatsheet

### Concise set of steps
For folks who've read the longer explanations above already and just want a checklist.

1. Create branch
2. New file or edit existing file
3. Pull request
4. Review
5. Merge

### Commonly used terms:
Repo (aka repository):

Branch:

Master (aka master branch)

Dev(elopment) vs. production site =

Conflicts:
Tests:
PR = "pull request". You're asking that
Merge =
Syntax = 
Markdown / .md =
YAML, front matter, and metadata =

### Markdown
[This full cheatsheet](https://daringfireball.net/projects/markdown/syntax) for Markdown syntax offers everything you might need, while John Gruber's own site offers a good [discussion of the how/why of markdown](https://daringfireball.net/projects/markdown/).

Although you can write Markdown in any plain text editor, you may enjoy using a Markdown-specific app such as [Typora](https://typora.io/) (currently free!). In addition to providing menu items and keyboard shortcuts to do different kinds of Markdown formatting you may not want to memorize, the key advantage is that a Markdown editor lets you see how the final, formatted text will look as you're writing it.

Below are a few frequently used kinds of Markdown that you're likely to encounter while working on the site:

#### Links 
In markdown, a link consists of the text for the link within bracks and the actual web hyperlink itself within parentheses. Remember not to leave a space between the two pieces.

\[Look a link!\](http://scholarslab.org)

renders as

[Look a link!](http://scholarslab.org)

Remember to include http(s) if you're not linking to something internal to the Scholars' Lab website.

#### Embed images
An image looks exactly like a link, except with an exclamation point at the front. The parentheses provide the path to your image, while the brackets denote the image's alt text. 

!\[A good dog\](/assets/img/people/scholarslab.png)

will render as 

![A good dog](/assets/img/people/scholarslab.png)

#### Bold

Bold can be added to your text with pairs of asterices on either side of the passage you want bold.

\*\*Scholars' Lab is great\*\*

Will render as

**Scholars' Lab is great**

#### Italic

You can italicize your text with an underscore on either side of the passage to be italicized.

Have you seen that \_dog\_ though?

Will render as

Have you seen that _dog_ though?

#### Bulleted lists

You can create an unordered list with a series of dashes or asterices, each on their own line and followed by a space.

\- A dog is good.  
\- You know what is better?  
\- A list of dogs.  

Renders as

- A dog is good.
- You know what is better?
- A list of dogs.

#### Numbered lists

Numbered lists work in a similar way to bulleted lists, but you'll begin each line with a number, a period, and a space. The numbers themselves actually don't matter - markdown will simply recognize that you're starting a numbered list and count for you.


```
1. Amanda
2. Alison
3. Jeremy
2. Laura
```

Will render as 

1. Amanda
2. Alison
3. Jeremy
2. Laura

#### Headings

To achieve different levels of bolded headings in a document, you make use of a varying number of hashtags followed by a space on a single line. For example:

`# Very important title about very good dogs`

`## Less important subtitle about good dogs`

`### Sub-subtitle (woof)` 

will render as... 

(insert screenshot)

## What comes next?

If you got stuck on any part of this tutorial, please let Amanda know so she can improve this text (if you ran into a problem, others will run into the same one...).

If you get comfortable with this process and would like to explore another way of authoring/editing the website, you can check out [this tutorial](/docs/git-authoring-and-editing) for doing your authoring/editing of the site using the command line, locally. No prior comfort with the command line is required—we'll tell you what to type, and try to anticipate common error messages you might run into (those are the downside of how the command line lets you do some stuff faster or easier). You'll also learn how to work with a "local" copy of the site—this is just like visiting ScholarsLab.org, except that it's only viewable on your machine, and you can view the site as it looks using any branch's code (ScholarsLab.org always shows the site as it looks using the "master" branch's code, so this is a nice way to check out how changes you've made to the site look, before merging your new branch into the "master" branch/main website's code.

Alternatively, or in addition! The information in this page's tutorial + [a friendly tutorial on creating your own Jekyll site](https://programminghistorian.org/en/lessons/building-static-sites-with-jekyll-github-pages) (+ some help from the SLab Slack #development channel when you run into inscrutable command line errors, the deathless bane of all) are enough to not only create and maintain your own website, but to understand how it works.

/* We tried to rename our default branch from "master" to something else to get away from the “master”/“slave” naming that gets used in other tech places, and to rename that default branch into something it's clearer is what the public sees on our production website. Unfortunately, as long as we stay hosted on GitHub Pages, GH forces us to use either "master" or "gh-pages". We lost some time reconfiguring stuff before realizing this limitation and were worried "gh-pages" was confusing as a default branch, so reverted to "master" for the time being. We're hoping to revist this after launching the new site, possibly by making the restriction moot by moving the site to our own server.