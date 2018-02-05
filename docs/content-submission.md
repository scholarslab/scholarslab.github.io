# Contributing Written Content

## What this page covers:

* This guide discusses the submission of language edits or creation on *non-repeating* pages. For routine submission of blog posts and other repeating content, please see "Managing Site Content" in our [main README](https://github.com/scholarslab/scholarslab.org/blob/master/README.md).
	* Non-repeating pages include: Home, Makerspace, Praxis, etc.

* This process should be roughly the same for *pre-existing pages* whose content changes significantly (e.g. Home) and *newly-created pages* whose content will be constructed from scratch (e.g. Origin Stories).

* Minor edits on pre-existing pages probably don't need to go through this, but that's just spitballing on KBD's part right now.


## Okay, let's go:

**1.** Check out `kbd-content` branch.

**2.** Edit the file or file section you're working on. Go wild. Restructure HTML inside of section if needed, etc.

**3.** Within file, directly above your edits, leave a comment using the following format:
	```html
	<!-- content
		 author: <your name>
		 comments: [optional | final edits, first draft, date, etc.]
		 remaining issues: [if any | e.g. need someone with X expertise to write Y part, CSS no longer works w/ structure edits, etc.]
		 -->
	```

This format means that it's easy to search the HTML file for the word "content" to see if there are any new edits *while* you have the file open (versus only having that ability through Git/Github). [Insert description of how weekly SOTU updates will work in relation to this. Basically this means I can paste updates into the SOTU thing and update any remaining issues with it. Searchability of edits makes sure I don't miss anything. -KBD]

**4.** If editing lots of sections at once, leave at least one comment just so that the word "content" is in the document. Additionally, leave a separate comment above any section you edited where there are remaining issues.