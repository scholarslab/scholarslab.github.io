This tutorial explains, in detail, how to author and edit new pages and posts on ScholarsLab.org. 

- [Tutorial difficulty level](#tutorial-difficulty-level)
- [Let's get started!](#let-s-get-started-)
- [Branch and write/edit!](#branch-and-write-edit-)
  * [Branch](#branch)
  * [Add new content](#add-new-content)
    + [Important alert: save your work](#important-alert--save-your-work)
    + [Add a new blog post](#add-a-new-blog-post)
    + [Add a new page](#add-a-new-page)
  * [Edit existing content](#edit-existing-content)
- [Move your writing to the main repo!](#move-your-writing-to-the-main-repo-)
- [Editorial process](#editorial-process)
- [Cheatsheet](#cheatsheet)
  * [Concise set of steps](#concise-set-of-steps)
  * [Commonly used terms:](#commonly-used-terms-)
  * [Markdown & formatting](#markdown---formatting)
    + [Links](#links)
    + [Embed images](#embed-images)
    + [Uploading media](#uploading-media)
    + [Bold](#bold)
    + [Italic](#italic)
    + [Bulleted lists](#bulleted-lists)
    + [Numbered lists](#numbered-lists)
    + [Headings](#headings)
- [What comes next?](#what-comes-next-)

## Tutorial difficulty level

This tutorial is appropriate for folks interested in understanding how the Scholars' Lab website works. You'll need prior experience browsing the Web, but no other specialized skills. 

We tried to make this tutorial very detailed, marking actual do-something-now steps as items in a numbered list, and text explaining why you're doing these steps formatted as normal paragraphs; we also included regular screenshots, so you can compare what you're seeing with what the lesson thinks you should be seeing. (And there's a [handy cheatsheet version](#cheatsheet), for once you've read through the details and just need a reference guide.) Whether learning these skills will feel comfortable and/or worthwhile to you, is particular to each person's experiences and interests. What we can tell you is that the steps in this tutorial are "straightforward"—that is, there are very few choices you need to make as you work through this lesson.

You'll learn some new terms and get familiar with the GitHub.com interface. You will *not* need to use the command line nor understand git/versioning. (We'll discuss two versioning concepts briefly, but you will not need to understand these to use this tutorial.)

We've set up the website repository such that folks who aren't comfortable with GitHub yet, do *not* need to worry about deleting other folks' work or the whole website. [See this note below](#important-alert-save-your-work) for more info what can and can't go wrong.

If the workflow in this lesson doesn't work for your needs, there are two simpler options for authoring blog posts on SLab.org:

1. Email the text (preferably as either a GoogleDoc or Microsoft Word file, though let us know if you prefer writing in a different format) to TBD, and they'll post your content for you.
2. Visit the ["SLab.org posts & pages" GDrive folder](https://drive.google.com/drive/u/0/folders/1oVLf4TqqsxAbTuWc7J3XTJ8EqFxDiPOG) folder. You can make a copy of the [page template](https://docs.google.com/document/d/10OeLQUflD5txvjPQXFPHRgCpzfvu9_c9LC7R6nfXLl4/edit?usp=sharing) or [post template](https://docs.google.com/document/d/1OWBTybWrpZuesu8BQVQTbpXMkIC5p-nyAW26DV7r_A4/edit?usp=sharing) by going to the upper-left menu and clicking **File** > **Make a copy...** Let TBD know when you're finished, and they'll post your content for you.

Already comfortable with the command line and git? You may prefer to switch to [this tutorial](/docs/git-authoring-and-editing) for doing your authoring/editing of the site locally; this tutorial instead allows you to do everything from the GitHub.com interface.

## Let's get started!

There are **two pieces** to authoring/editing on our website:

1. **Create a new "branch", and create/edit your post/page there.** A branch is a copy of the website files, where you can make changes without affecting the live website or other folks' development or authoring work. [Instructions here](#branch-and-write/edit).
2. **Move ("merge") your work back to the main website branch, which makes your work show up on the live site** ([maybe.scholarslab.org](http://maybe.scholarslab.org) before the public launch, ScholarsLab.org after the public launch). The "main website" is the website consisting of the code in the "master" branch; that is, the main website/master branch is just the copy of the website files ("branch") from which we've told the live website to get its data. "Merging" means adding any changes/additions you've made in your new branch to another branch (in our case, back to the master branch).  [Instructions here](#move-your-writing-to-the-main-repo!).

(*A third review step may be added here, when we've finalized our editorial guidelines and process. See [this GitHub issue](https://github.com/scholarslab/scholarslab.org/issues/511) to volunteer work on this.*)

## Branch and write/edit!

### Branch

A repo is a collection of code, and this repo in particular is the place on GitHub.com where we store all the files that make up the SLab.org website.

1. Visit the SLab.org "repo" (repository) at https://github.com/scholarslab/scholarslab.org

Now we'll create a new "branch" of this repo. A branch is just a copy of the repo (i.e. the set of files that = our website). We create this copy so you can make changes to the website (draft a new blog post, edit a page, play with the site's visual design...) without affecting how the live website looks (your changes won't appear on ScholarsLab.org until you're ready!), *and* without conflicting with other folks' work on the site.

When you visit https://github.com/scholarslab/scholarslab.org, you're seeing, by default, the default repo branch named "master"*. This "master" branch contains the code making up the site that's publicly visible at ScholarsLab.org. *A glimpse into the future:* When we finish our work at a new branch, we'll be moving that work back to the "master" branch so it shows up at ScholarsLab.org.

1. In the mid-left of your browser window, click on the grey "Branch: master 🔽" button. A dropdown appears! 
2. In the empty text field (it says "Find or create a branch..." in light grey text in the text field's background), write some name for your new branch... 

![docs-gonna-name-branch]()

If your branch name has spaces in it, these will be replaced by hyphens. It's best to keep these names short (1-4 words, easy to see without the text getting cut off, but still clear what you're doing) and descriptive (so folks have an idea what the work happening in the branch is). 

For example, I'm currently writing this tutorial page in a branch I named "documentation". You wouldn't want to name your branch "new-post" because other folks might also be working on new posts in other branches, and your branch name might confuse them. In this tutorial, we'll pretend that we're authoring a blog post as if the University Librarian's dog Henry hacked our website—because that's what serious digital humanities scholars do, sometimes—and we'll call the branch "henry-blog-takeover". 

![docs-branch-named]()

When you're creating your own branch, please substitute whatever you want where henry-blog-takeover in this lesson (unless you're Henry—if you are, then *woof*!). It doesn't matter too much what you name your branch, as long as you can recognize the branch name when you see it.

Now that we've created our branch, we need to switch to working there.

1. Once you've finished typing your new branch name in the field, you'll see a blue rectangle just below with the words "Create branch: henry-blog-takeover". Click anywhere on that blue rectangle.

The page will reload, and you'll notice a few changes:

- The URL will have switched from https://github.com/scholarslab/scholarslab.org to https://github.com/scholarslab/scholarslab.org/tree/henry-blog-takeover
- More importantly (because it's annoying to parse the URL to check whether you're in the right branch!), you can look at the branch dropdown to verify that we're now in the branch henry-blog-takeover. This is that same grey button in the mid-left of the page we clicked before, when we created a new branch.

![docs-on-new-branch]()

Now you are on a branch—a parrallel universe of sorts!—where you can work without affecting the main state of the project (in this case, the SLab.org website). You're ready to do one of the following (click to jump to that part of the tutorial): [create a new post](#add-a-new-post), [create a new page](#add-a-new-page), or [edit an existing post or page](#edit-existing-content).

### Add new content

#### Important alert: save your work

GitHub is very forgiving; the whole magic of using git to keeping many versions of text (e.g. code) over time is that you can always roll things back to how they were. We've set up the website repository such that folks who aren't comfortable with GitHub yet, do *not* need to worry about deleting other folks' work or the whole website—options are set such that it's possible for you to accidentally (or on purpose, DH Darksider!) do anything that we can't easily undo. 

**The one way GitHub is not forgiving is that you can lose text you're currently drafting in the GitHub.com text editor**, if your tab/browser/computer closes/restarts when you've added new text to the file, but not committed it yet. (The text editor looks like the screenshot below—it's the place we'll be drafting text on GitHub.com.)

![docs-alert-save-while-drafting]()

Commit (aka save; described in detail below) about as often as you'd save a word document. Or, draft your text elsewhere (e.g. in a GoogleDoc), then paste the final text into the GitHub text editor just when ready to publish. 

#### Add a new blog post

After creating and switching [to a new branch](#branch), we'll navigate to the folder that holds blog posts, then create a new blog post file there.

1. Click on the "collections" link in the list of files (should be near the bottom left of your browser window). 

This navigates you into where we keep "collections" of similar files for the website, such as event info and the biographical file for each current and former SLab affiliate. Notice in the upper-left corner that we're still in our new henry-blog-takeover branch.

![docs-nav-to-collections]()

1. Click on the "_posts" link in the list of files (should be near the mid left of your browser window). 

This is the folder where we keep all the blog posts.

![docs-nav-to-posts]()

1. In the upper-right quarter of the page, click on the grey "Create new file" button.

![docs-create-new-post]()

We now see a text editor for creating a new post! 

![docs-new-post-empty]()

We'll start by giving our post a filename Jekyll understands.

1. In the text field near the top middle of the screen (see screenshot below), type in a filename matching our restrictions, then press enter:

- The filename needs to start with the date, using the format YYYY-MM-DD, e.g. 2018-10-17. Note that the year comes first; hyphens separate the year, month, and day; and that dates with leading zeroes (e.g. 2018-02-05) need to include those zeroes.
- After the formatted date and an ending hyphen, a short (1-5 word) "slug", with any spaces replaced with hyphens. This is going to be part of the URL for your finished post, so something that summarizes your title or otherwise briefly refers to what your post is about is good. 
- End the file name with **.md**, which is the file ending for Markdown files (we'll be using [Markdown formatting](#markdown) to format our posts... more on that below!)
- In our example, the date is **2018-10-16**, the slug is **henry-rulez**, and putting it all together gives us a filename of **2018-10-16-henry-rulez.md**

![docs-new-post-empty-filename]()

Now we're ready to write our post. Before we write our content, though, we need to put some text at the top that helps Jekyll know how to display, sort, and otherwise deal with our post. This post metadata is called "front matter" (cuz it's at the front of the file); it's also sometimes referred to as YAML ("yeah-mole"), which seriously stands for Yet Another Markup Language and is the language the front matter uses.

1. Paste in and customize the post's front matter.

You can copy the front matter from [this GoogleDoc](https://docs.google.com/document/d/1OWBTybWrpZuesu8BQVQTbpXMkIC5p-nyAW26DV7r_A4/edit?usp=sharing) (which also uses color highlighting to ID which things you can customize, and which you *must* customize). An example of post front matter and explanation of each line follows:

```markdown
---
author: firstname-lastname
date: 2018-10-16 01:00:00+00:00
layout: post
slug: henry-hacked-slab
title: "10 Reasons Henry Rules: A Digital Humanities Blessay"
categories:
- Digital Humanities
- Research and Development
- Announcements
- Job Announcements
- Makerspace
- Grad Student Research
- Podcasts
---
```

The first line of the post and the line after the last line of front matter should each just contain three hyphens: `---`

- **author:** 
  - Your sluggified name (firstname-lastname, keep the hyphen between)
  - For example, alison-booth or shane-lin
  - This must match the biographical file the site has for you (if you're not sure what this is because you have multiple ways of writing your name, [check here](https://github.com/scholarslab/scholarslab.org/tree/master/collections/_people)). If you want to change the name shown as the author of your post on the website (to a new name, nickname, etc.), please contact someone on the R&D team and they'll update your biographical file or show you how. Using a name other than the firstname-lastname [listed here](https://github.com/scholarslab/scholarslab.org/tree/master/collections/_people) will break things.
- **date:**
  - The date the post is to be listed as published, using the YYYY-MM-DD  01:00:00+00:00 format, e.g. 2018-10-17 01:00:00+00:00. Note that the year comes first; hyphens separate the year, month, and day, followed by a space and then time info. 
  - Dates with leading zeros (e.g. 2018-02-05) need to include those zeros.
  - This is just when the post will say it was published, in the URL and in the page metadata. Currently, it does not have anything to do when the post actually goes live on our website.
  - Unless you care about the exact time of day the post is listed as published, just leave the  01:00:00+00:00 part as is. If you do care, I think that may be in UTC rather than EST?
- Leave **layout: post** as is
  - This tells the site to use our standard template for laying out a blog post
- **slug:**
  - The slug is the bit that goes after scholarslab.org/YYYY/MM/DD/ in the URL for your new post, with the date filled in from what you wrote above.
  - The slug should be short (preferably 1-3 words) and refer to the post's title and/or content. 
  - Past post slugs include transcription-is-complicated, site-relaunch, and music-theory-in-ruby—you have a sense of what's in these posts from reading these slugs, and they don't include a bunch of words that don't add to that info.
- **title:**
  - The title of your blog post, e.g. "Teaching Black Arts Poetry and Computational Methods"
  - Put quotation marks around your title—this keeps the site from breaking when your title includes things like colons
- **categories:**
  - Always leave the Digital Humanities category as is (unless your post really isn't at all DHy)
  - Delete the entire line (hyphen, space, category name) for categories that don't apply to your post
  - In addition to allowing us to filter posts by category (e.g. all our job announcements in one place), category is used in the visual design of a post

![docs-post-yaml-example]()

1. Once you've got your front matter added, you can start writing your post on the line below the final front matter `---`. 

There are some formatting examples at the bottom of [the post template Doc](https://docs.google.com/document/d/1OWBTybWrpZuesu8BQVQTbpXMkIC5p-nyAW26DV7r_A4/edit?usp=sharing), or you can check out our [Markdown formatting cheatsheet](#markdown) below.

You can click on the "No wrap" dropdown in the upperish right to select "Soft wrap", which will make your text continue to the next line when it reaches the right margin, instead of extending right forever until you hit return/move to a new line.

![docs-post-body-wrapping]()

1. Scroll all the way down the page to see the commit area—this is git's version of "save". 

Once you commit, what you've written is hypothetically publicly visible (to anyone who thinks to visit our repo, switch to your particular branch, and look at your commits).

The **first text field** is a place to write a short description to remind you and inform others about what changes you made to the code (in our case, to your new blog post). The field will make you stop typing if you attempt to go over the character limit. If you're writing or editing a new blog post, **I recommend you type nothing here**; that accepts the grey default text already in the field ("Create 2018-10-16-henry-rulez.md" in the screenshot) as your commit message. 

The **larger text box** ("Add an optional extended description...") gives you more space to explain what the code you're committing (saving) does. If you were making changes to the website's code that others needed to understand, adding text here to explain your changes would be useful, but you can **ignore it** when you're authoring a new blog post.

When changing code or editing existing webpages, writing a commit message helps people looking at the log files can easily see at a glance who made what changes. These messages will be part of the public record of the repo on GitHub, so don't write anything you wouldn't want seen publicly.

![docs-commit-area-empty]()

1. Two choices! 

   A. If you want to do more work on your blog post after saving (right away, or some time way in the future), leave the radio buttons as-is and click the green "Commit new file" button and continue reading the tutorial immediately after 8B.

   B. If you're Totally Ready to Publish your new blog post, instead switch the radio button to "Create a new branch for this commit and start a pull request", leave the text field that appears as-is, and click the green "Propose new file" button. [Jump down this tutorial to Section 2]((#move-your-writing-to-the-main-repo!)), which covers what to do next now that you're ready to publish.

If you followed step 8A ("commit new file"), you're now back in the directory that holds all the blog post files on our henry-blog-takeover branch.

1. To make additional edits to your blog post, scroll down to find your post in the list (they're organized by oldest-newest, so a new post will appear at the bottom of the list). Click on the linked file name (e.g. 2018-10-16-henry-rulez.md).
2. Near the middle of the right side of the page, click on the small pencil icon. 

If you hover over the pencil icon, you'll see the words "edit this file" appear. 

![docs-edit-existing-file-icon]()

Clicking this edit button takes you back to the file editor we started working with back in Step 3. Please remember [this warning](#warning) about avoiding losing work you've drafted but not yet committed.

Return to Step 7 when you're ready to commit (aka save) your changes again. 

When you've finished drafting the post and you're ready to publish, jump down to ["instructions on moving your writing to the main repo"](#2-move-your-writing-to-the-main-repo).

*Want a sneak peak at the final visual appearance of your post?* Although this isn't the same as seeing what your post will look like when published to our website, you can always look at the GitHub repo version of your post to see whether your Markdown formatting looks right (Step 9 above, except don't click on the edit icon, just scroll down to see your post). To see what your post looks like on the final website (i.e. incorporating all our special website design/styling), you'll either need to [follow this other tutorial](/docs/git-authoring-and-editing.md) to learn to edit the site locally, or wait until you're ready to publish. (There's a tool called Netlify that lets you see what your webpage will look like, but we only have it set up to work when you're moving your page to the live site—not when you're still drafting.)

#### Add a new page

Pages, unlike blog posts, are intended for the kinds of big things you see listed in our website's menu: about page, makerspace page, events page. The steps to create a page are similar to [creating a new blog post](#add-a-new-blog-post), except:

1. After creating and switching to a new branch using the [instructions in the Branch section](#branch) above, click on the "pages" link in the list of files (should be near the top left of your browser window). 
2. Unlike naming a new blog post file, page naming does not follow a pattern other than being limited to 1-3 simple words (e.g. about.md, work.md, student-opportunities.md)
3. The front matter for pages is different from posts, so use [this page template](https://docs.google.com/document/d/10OeLQUflD5txvjPQXFPHRgCpzfvu9_c9LC7R6nfXLl4/edit?usp=sharing) instead when creating your front matter.

When you've finished creating your new page, jump to [Step 2](#move-your-writing-to-the-main-repo!) below to learn how to move your writing to the live website.

### Edit existing content

If you want to edit a blog post or page that already exists on our live website:

1. Create and switch to a new branch using the [instructions in the Branch section](#branch) above.
2. Find the file you want to edit:
   1. If it's a blog post, follow Steps 1 & 2 under the [Adding a New Blog Post section](#add-a-new-blog-post), then click on the name of the post you want to edit.
   2. If it's a page, click the "pages" link in the list of website files, then click on the name of the file you want to edit.
3. Near the middle of the right side of the page, click on the small pencil icon. This brings you to a text editor.

If you hover over the pencil icon, you'll see the words "edit this file" appear. 

![docs-edit-existing-file-icon]()

1. At the top of the file, you'll notice three hyphens `---`, followed by a couple lines of text, followed by three more hyphens. You can read more about what this "front matter" does for a post (in the Add a new blog post [instructions](#add-a-new-blog-post)) or page (in the Add a new page [instructions](#add-a-new-blog-post)), but basically just leave that text as-is to avoid breaking things.
2. Go to Step 7 under [creating a new blog post](#add-a-new-blog-post) for instructions on "committing"—saving a draft of your text.

## Move your writing to the main repo!

Our very first step was creating a new branch to do this work in, so that our work happens separately from other changes folks might want to make to the site at the same time. Now you've committed some change to our code: either creating a new post or page file, or editing an existing one. In this final step, we'll incorporate your work back into the master branch, so your changes show up on our live website.

Some terminology:

- **Merging:** Taking two sets of code (that already have some shared code/text between them, e.g. our master branch and the duplicated then altered branch we created), and combining these into one set of updated code. 
  - Our workflow for posts and pages is pretty straightforward: we duplicated the master branch of our website code, made some changes to the code in a separate branch, and now we're going to move your changes into the master branch. For repos where multiple people are changing the code at any time, sometimes working from branches of the code duplicated when the repo was in different states of progress, this is a much more complicated process.
- **Pull request, aka PR:** Asking that the changes you've made in your branch be "pulled" (moved) into the master branch. 
  - Our repo's pull request process runs two "checks" or "tests" on your code: *Travis* makes sure your changes don't break anything on the main website, and *Netlify* lets you take a peek at how your changes will look on the website, before we actually publish those changes for the world to see.
- **Review:** For our repo, making a pull request notifies other SLab folks that someone's making a change to our website, allowing the opportunity for feedback on your work. 

1. Commit your final changes:

![docs-file-ready-to-commit-message]()

1. Click the "Pull request" link in the upper-right of your screen.

![docs-click-pr-link]()

1. You're now on the "Open a pull request" page. You may see a bunch of text in the text field (like the text "# Description..." below). If so, you can ignore it; or, select it all and delete it to make room for any notes you'd like to leave about what the changes you made in your separate branch are. 

![docs-new-pr-template]()

1. On the right, click the "Reviewers" link to make a dropdown appear.

![docs-add-reviewers-pr]()

1. Start typing the word "reviewers", then click on the option "scholar slab/reviewers" when it appears.

![docs-add-reviewers-pr2]()

This notifies the set of SLab staff comfortable with Jekyll that you're making a change (e.g. adding a blog post) to the website.

1. Click on the green "Create pull request" button in the lower right

![docs-new-pr-2]()

1. Wait for the yellow "Some checks haven't completed yet" text to change to green "All checks have passed" text. If you get a message that checks have failed, email/Slack someone on the R&D team for troubleshooting assistance.

*What's taking so long?* Our pull request process runs two tools over code you're hoping to merge: *Travis* makes sure your changes don't break anything on the main website, and *Netlify* lets you take a peek at how your changes will look on the website, before we actually publish those changes for the world to see.

![docs-pr-checks-start]()

1. When all checks have passed, click the green "Merge pull request" button on the lower left.

![docs-pr-checks-passed]()

1. Click the green "Confirm merge" button.

![docs-pr-confirm-merge]()

1. You've successfully merged your changes! You can now click the "Delete branch" button on the right. You'll need to wait from 1-10 minutes to see your work appear on the updated live website.

Getting rid of branches once we're done with them helps us keep the repo clean, as we may have multiple branches open at one time that are seeing active work.

![docs-pr-done-delete-branch]()

## Editorial process

(*A third step will be added here, when we've finalized our editorial guidelines and process.*)

## Cheatsheet

### Concise set of steps

For folks who've read the longer explanations above already and just want a checklist.

1. Create new branch & switch into that branch
2. Create new file or edit existing file
3. Pull request
4. Add reviewers
5. Pass all checks
6. Merge
7. Delete branch
8. Wait up to 10 minutes to see your work on the live site

### Commonly used terms:

- **Repo** (aka repository): A collection (aka set) of code. This repo in particular (GitHub.com/ScholarsLab/ScholarsLab.org) is the place on GitHub.com where we store all the files that make up the SLab.org website
- **Branch:** A copy of the website files where you can make changes without affecting the live website or other folks' development or authoring work
- **Master** (aka master branch): The branch from which our live website gets it data
- **Merging:** Taking two sets of code (that already have some shared code/text between them, e.g. our master branch and a duplicated-then-altered branch we created), and combining these into one set of updated code. 
- **Pull request, aka PR:** Asking that the changes you've made in your branch be "pulled" (moved) into another branch (usually master). 
- **Review:** For our repo, making a pull request notifies other SLab folks that someone's making a change to our website, allowing the opportunity for feedback on your work. 
- **Checks** aka **tests**: Our pull request process runs two tools over code you're hoping to merge: *Travis* makes sure your changes don't break anything on the main website, and *Netlify* lets you take a peek at how your changes will look on the website, before we actually publish those changes for the world to see.
- **Conflicts**: While trying to merge your code, git ran into something it doesn't know how to solve (e.g. Line X in File Y says a different thing in each branch, and git doesn't know which one to keep), requiring human intervention
- **Development** vs. **production** (e.g. dev vs. production website): Not currently set up for this website, but this is the standard practice of having one website the public sees (production), and one non-public version of the site where we make and test changes (development).
- **Markdown**: Markdown is a very lightweight way of marking up text to format it; the goal is commands that are easy to remember, easy to type, and easy to transform into other markup languages. For example, where HTML uses `<strong>bagels</strong>` to bold the word bagels, markdown uses the simpler `**bagels**` (italics: `*bagels*`). The file format for Markdown is .md (e.g. events.md).
- **Front matter** aka **YAML**: Metadata about a post or page, appearing at the top of a file. Also sometimes referred to as YAML ("yeah-mole"), which seriously stands for Yet Another Markup Language (the language the front matter uses). Metadata such as publication date and author helps the site do stuff like sorting and filtering content (e.g. "display all blog posts by current or former student affiliates on this page").

### Markdown & formatting

[This full cheatsheet](https://daringfireball.net/projects/markdown/syntax) for Markdown syntax offers everything you might need, while John Gruber's own site offers a good [discussion of the how/why of markdown](https://daringfireball.net/projects/markdown/).

Although you can write Markdown in any plain text editor, you may enjoy using a Markdown-specific app such as [Typora](https://typora.io/) (currently free!). In addition to providing menu items and keyboard shortcuts to do different kinds of Markdown formatting you may not want to memorize, the key advantage is that a Markdown editor lets you see how the final, formatted text will look as you're writing it.

Below are a few frequently used kinds of Markdown that you're likely to encounter while working on the site...

#### Links 

In markdown, a link consists of the text for the link within bracks and the actual web hyperlink itself within parentheses. Remember not to leave a space between the two pieces.

\`[Look, a link!\](http://scholarslab.org)`

will render as... 

[Look, a link!](http://scholarslab.org)

Remember to include http(s) if you're not linking to a page that's part of the Scholars' Lab website (aka an internal link).

#### Embed images

The code to embed an image looks exactly like a link, except with an exclamation point at the front. The parentheses provide the path to your image, while the brackets denote the image's alt text.

```markdown
![A good dog](https://pbs.twimg.com/media/Dkj2VxIU0AEe_r2.jpg)
```

![A good dog](https://pbs.twimg.com/media/Dkj2VxIU0AEe_r2.jpg)

#### Uploading media

You can link to an image hosted anywhere, but to upload and link an image:

1. To help us organize our images, please rename your file to follow the pattern **YYYY-MM-DD-descriptor**, e.g. **2018-11-05-Texas-BBQ**.png
2. After creating and moving into [a new branch](#branch), click the "assets" folder link, then the "post-media" link. 
3. Click the "Upload files" button on the right. Either drag and drop your file onto the page, or click "choose your files" to find them using a file manager. You can leave the commit message as-is, and press "Commit changes".

![docs-upload-file]()

1. Your image is now located in our repo, in assets > post-media folder. To get its URL, right-click on the filename and choose "copy link address". (You can also click on the filename, then right-click on the image and choose "Copy Image Address".) Use the instructions above to embed the image in your post.

#### Bold

Bold can be added to your text with pairs of asterices on either side of the passage you want bold.

`**Scholars' Lab is great**`

will render as... 

**Scholars' Lab is great**

#### Italic

You can italicize your text with an underscore on either side of the passage to be italicized.

`What a *good* dog!`

will render as... 

What a *good* dog!

#### Bulleted lists

You can create an unordered list with a series of dashes or asterices, each on their own line and followed by a space.

```
- A dog is good.
- You know what is better?
- A list of dogs.
```

will render as... 

- A dog is good.
- You know what is better?
- A list of dogs.

#### Numbered lists

Numbered lists work in a similar way to bulleted lists, but you'll begin each line with a number, a period, and a space. 

```
1. Beagles
2. Corgis
3. Pitbulls
```

will render as... 

1. Beagles
2. Corgis
3. Pitbulls

#### Headings

To achieve different levels of bolded headings in a document, you make use of a varying number of hashtags followed by a space on a single line. For example:

`# Very important title about very good dogs`

`## Less important subtitle about good dogs`

`### Sub-subtitle (woof)` 

will render as... 

![docs-markdown-headings-rendered]()

## What comes next?

If you got stuck on any part of this tutorial, please let Amanda or Ronda know so they can improve this text (if you ran into a problem, others will run into the same one...).

If you get comfortable with this process and would like to explore another way of authoring/editing the website, you can check out [this tutorial](/docs/git-authoring-and-editing) for doing your authoring/editing of the site using the command line, locally. No prior comfort with the command line is required—we'll tell you what to type, and try to anticipate common error messages you might run into (those are the downside of how the command line lets you do some stuff faster or easier). You'll also learn how to work with a "local" copy of the site—this is just like visiting ScholarsLab.org, except that it's only viewable on your machine, and you can view the site as it looks using any branch's code (ScholarsLab.org always shows the site as it looks using the "master" branch's code, so this is a nice way to check out how changes you've made to the site look, before merging your new branch into the "master" branch/main website's code.

Alternatively, or in addition! The information in this page's tutorial + [a friendly tutorial on creating your own Jekyll site](https://programminghistorian.org/en/lessons/building-static-sites-with-jekyll-github-pages) (+ some help from the SLab Slack #development channel when you run into inscrutable command line errors, the deathless bane of all) are enough to not only create and maintain your own website, but to understand how it works.

/* We tried to rename our default branch from "master" to something else to get away from the “master”/“slave” naming that gets used in other tech places, and to rename that default branch into something it's clearer is what the public sees on our production website. Unfortunately, as long as we stay hosted on GitHub Pages, GH forces us to use either "master" or "gh-pages". We lost some time reconfiguring stuff before realizing this limitation and were worried "gh-pages" was confusing as a default branch, so reverted to "master" for the time being. We're hoping to revist this after launching the new site, possibly by making the restriction moot by moving the site to our own server.

*Thanks to Ronda, Brandon, Laura, and Amanda for work on this tutorial!*
