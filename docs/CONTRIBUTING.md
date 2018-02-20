# How to Contribute

## Table of Contents

1. [Contribute to homepage](#homepage-contribution)
2. [Contribute to a topic homepage](#topic-page-contribution)
3. [Contribute an image](#image-submission)
4. [Contribute information](#information-submission)
5. [Notes & Explanations](#notes-and-explanations)

*NB: part 4 is intended for raw info, like answers to questions, rather than edits to an HTML or MD document.*

## Homepage Contribution

How to make and submit changes to the homepage, `index.html`.

### Steps:

1. Check out `kbd-content` branch.

2. Create a feature branch off of it.

3. Open `theme-testing/index.html`. Go wild. Restructure HTML inside of section if needed, etc.

4. Within file, directly above your edits, leave a comment using the following format (or edit preexisting comment, as the case may be):
```html
<!-- content
		 author: <your name>
		 comments: [optional | final edits, first draft, date, etc.]
		 remaining issues: [optional | see below ]
-->
<div>
...edits, content...
</div>
```
**IMPORTANT:** *Using this format is integral to the workflow - please do not remove non-optional sections, including the string literal 'content'.*

5. After editing file and leaving comment(s), commit as normally would.

6. Create a new pull request to merge your feature branch back into `kbd-content`, and request review from @kbdonnally. *Note:* Your pull request doesn't need a ton of detail since we're using the comment system, but do make sure to describe the gist of your changes in a sentence or two.

7. That's it! You're done.

## Topic Page Contribution

How to make and submit language edits or creation for *non-repeating* pages *other than* the main homepage. For routine submission of blog posts and other repeating content, please see "Managing Site Content" in our [main README](https://github.com/scholarslab/scholarslab.org/blob/master/README.md). Non-repeating pages include: Home, Makerspace, Praxis, etc.

Follow the steps listed in the [Homepage Contribution section](#homepage-contribution), but change Step 3 to:

3. Open and edit the file or file section you're working on (no `theme-testing/` version required if it's not the site homepage). Go wild. Restructure HTML inside of section if needed, etc.

## Image Submission

Definition of 'image' in this context: any file in a visual medium, whether raster or vector graphic. 

Please provide source attribution for all images. If you made it, just note that and you'll be credited; else, provide the desired attribution text from the source (unless the source specifically notes it's not needed).

This process can be more casual, since it's not directly affecting published documents. As of 2/20: email or Slack the image to Katherine, or to Laura or Ronda if you're already sending them information at that time.

## Information Submission

Definition of 'information' in this context: something you've written (facts, language, opinion, etc.) that helps inform or create the site's HTML content, but isn't an actual edit of an HTML file. Sans many data points as of 2/20, I'm guessing the most common use case will be "answering questions from Laura &/or Ronda about your areas of knowledge in the Lab."

*NB:* If links to external webpages are part of such information, include those as well. 

Same philosophy from [Image Submission](#image-submission) applies here, since, again, the information is not directly affecting published documents. As of 2/20: email or Slack the information to Laura, or to Ronda or Katherine if you're already sending them information/pics at that time.

## Notes and Explanations:

1. **"Remaining issues"** are defined here as "things that should be changed in the section you edited before it can go live." Includes things like: still need someone with X expertise to write Y part, language you still want changed, etc. Any CSS or structural issues can be taken care of separately; don't worry about noting these.

2. Why this comment format? Why leave in-text comments at all when we're using Git?

* This format means that it's easy to search the HTML file for the word "content" to see if there are any new edits *while* the file is open (versus only having that ability through Git/Github). 
* Basically this means I can paste updates into the State of the Union (SOTU) document and update any remaining issues with it. Searchability of edits makes sure I don't miss anything, and can add my own updates or additions to issues before merging the new content into the `theme-testing` branch. *-Katherine*

3. If editing lots of sections at once, leave at least one comment just so that the word "content" is in the document. Additionally, leave a separate comment above any section you edited where there are remaining issues.

4. This process should be roughly the same for *pre-existing pages* whose content changes significantly (e.g. Home) and *newly-created pages* whose content will be constructed from scratch (e.g. Origin Stories).

5. Minor edits on pre-existing pages probably don't need to go through this, but that's just spitballing on KBD's part right now.