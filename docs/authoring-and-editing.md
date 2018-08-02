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
See [here] for a full cheatsheet of Markdown syntax, or here for a discussion of the how/why of markdown.
Below are a few frequently used kinds of Markdown:

- Links (remember to include https if not self-referential!)
- Embed images
- Bold
- Italic
- Bulleted lists
- Numbered lists
- Headings
