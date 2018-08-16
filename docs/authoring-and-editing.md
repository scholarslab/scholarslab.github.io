This tutorial covers authoring and editing new pages and posts in detail. You can instead jump to a [concise set of steps] once you've read the detailed version once.

There are **two big steps** to authoring/editing on our website:
1. Create a new "branch" and do your authoring/editing there—[instructions on Step 1]

2. Move that work back to the main repo (aka master branch) so it shows up on [maybe.scholarslab.org](http://maybe.scholarslab.org)—[instructions on Step 2]  
*3rd step, coming soon!* on how to move this work from the development site to the production (public) site.

# 1. Do your writing!
## Add new content

### Add a new page
make new page where
workflow for sharing publicly (Twitter, newsletter, UVA Library SLab channel)
YAML
commit message
check your work on github repo page (not as it will look on live site)
move to step 2

### Add a new blog post
make new post where
scheduling? (when should it be published?)
workflow for sharing publicly (Twitter, newsletter, UVA Library SLab channel)
YAML
	author: firstname-lastname
	date: YYYY-MM-DD HH:MM:SS+0:00
	layout: post
	slug: title-words-go-here
	title: 'title'
	categories: [always blank]
commit message
check your work on github repo page (not as it will look on live site)
move to step 2

## Edit existing content

### Embedding media (photos, GIFs, videos...)
Waiting on Ammon/Jeremy deciding where we'll store media.
- formatting of link  
- location to upload image  
- how to upload to the server  

# 2. Move your writing to the main repo!

Watch out—the page might initially show you there are no conflicts and it's okay to press that green merge button. But wait! There's one set of checks that won't appear for a few extra seconds than you'd probably think to wait before merging—up to a slow count of 30. Watch this GIF to know what to expect:
![Wait for Travis check to complete when doing a PR](docs-images/PR-wait-for-travis.gif)

# Cheatsheet
## Concise set of steps
For folks who've read the longer explanations above already and just want a checklist.

## Commonly used terms:
Repo (aka repository):
Master (aka master branch)
Conflicts:
Tests:
Branch:
PR = "pull request". You're asking that
Merge =
Syntax = 
Markdown / .md =
YAML, front matter, and metatdata =
Dev(elopment) vs. production site =

## Markdown
[This full cheatsheet](https://daringfireball.net/projects/markdown/syntax) for Markdown syntax offers everything you might need, while John Gruber's own site offers a good [discussion of the how/why of markdown](https://daringfireball.net/projects/markdown/).

Below are a few frequently used kinds of Markdown that you're likely to encounter while working on the site:

### Links 
In markdown, a link consists of the text for the link within bracks and the actual web hyperlink itself within parentheses. Remember not to leave a space between the two pieces.

\[Look a link!\](http://scholarslab.org)

renders as

[Look a link!](http://scholarslab.org)

Remember to include http(s) if you're not linking to something internal to the Scholars' Lab website.

### Embed images
An image looks exactly like a link, except with an exclamation point at the front. The parentheses provide the path to your image, while the brackets denote the image's alt text. 

!\[A good dog\](/assets/img/people/scholarslab.png)

will render as 

![A good dog](/assets/img/people/scholarslab.png)

### Bold

Bold can be added to your text with pairs of asterices on either side of the passage you want bold.

\*\*Scholars' Lab is great\*\*

Will render as

**Scholars' Lab is great**

### Italic

You can italicize your text with an underscore on either side of the passage to be italicized.

Have you seen that \_dog\_ though?

Will render as

Have you seen that _dog_ though?

### Bulleted lists

You can create an unordered list with a series of dashes or asterices, each on their own line and followed by a space.

\- A dog is good.  
\- You know what is better?  
\- A list of dogs.  
 
Renders as

- A dog is good.
- You know what is better?
- A list of dogs.

### Numbered lists

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

### Headings

To achieve different levels of bolded headings in a document, you make use of a varying number of hashtags followed by a space on a single line.

\# Something very important

\#\# Less important

\#\#\# Who even cares about this?

Will render as 

# Something very important

## Less important

### Who even cares about this?


Some awesome text from Brandon to incorporate:
First, you'll need to create a new branch to work on. You will want your branch to have a name descriptive of the work that you are doing on it. For example, this file was added on a branch called documentation Then we'll switch to that branch. You do so using the following commands (branch-name-here being substituted with the branch of your choice).


	$ git branch branch-name-here
	$ git checkout branch-name-here 

In this case, we used the following commands:

	$ git branch documentation
	$ git checkout documentation

Now you are on a git branch, a parrallel universe of sorts, where you can work without affecting the general state of the project. As you make changes to your work, you will save them in your text editor. But you'll also go a step further by recording these changes in git and sharing them on GitHub for all to see. 

	** make some changes in your text editor and save them**
	$ git add filename
	$ git commit -m 'A helpful message'
	$ git push

This workflow - edit, add, commit, push - represents the vast majority of what you will need to do with git. git add prepares your files for being recorded in your project history, while git commit actually does the recording. When you make a git commit, it's useful to always provide a message describing what it is you are committing. That way, people looking at the log files can easily see at a glance who made what changes. Finally, git push takes your local commits and adds them to the public record on GitHub. When making this file, for example, we followed the following steps.

	** Added some paragraphs of text using a text editor. **
	$ git add authoring-and-editing.md
	$ git commit -m 'Added instructions for using git'
	$ git push

**Maybe a note about when you git push for the first time? And maybe a note about git add .**
