# How To Contribute Content

This guide discusses the submission of language edits or creation on *non-repeating* pages. For routine submission of blog posts and other repeating content, please see "Managing Site Content" in our [main README](https://github.com/scholarslab/scholarslab.org/blob/master/README.md). Non-repeating pages include: Home, Makerspace, Praxis, etc.
	
1. This process should be roughly the same for *pre-existing pages* whose content changes significantly (e.g. Home) and *newly-created pages* whose content will be constructed from scratch (e.g. Origin Stories).

2. Minor edits on pre-existing pages probably don't need to go through this, but that's just spitballing on KBD's part right now.

## Okay, let's go:

**1.** Check out `kbd-content` branch.

**2.** Edit the file or file section you're working on. Go wild. Restructure HTML inside of section if needed, etc.

**3.** Within file, directly above your edits, leave a comment using the following format:
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
**IMPORTANT:** *Using this format is integral to the workflow - please do not remove non-optional sections, including the string literal* `content`.

**4.** After editing file and leaving comment(s), commit as normally would. No pull request needed!

### Notes: 

1. **"Remaining issues"** is defined here as "things that should be changed in the section you edited before it can go live." Includes things like: still need someone with X expertise to write Y part, language you still want changed, etc. Any CSS or structural issues can be taken care of separately; don't worry about noting these.

2. Why this comment format? Why leave in-text comments at all when we're using Git?

This format means that it's easy to search the HTML file for the word "content" to see if there are any new edits *while* the file is open (versus only having that ability through Git/Github). [Insert description of how weekly SOTU updates will work in relation to this. Basically this means I can paste updates into the SOTU thing and update any remaining issues with it. Searchability of edits makes sure I don't miss anything, and can add own updates to issues before merging into theme branch. -KBD]

3. If editing lots of sections at once, leave at least one comment just so that the word "content" is in the document. Additionally, leave a separate comment above any section you edited where there are remaining issues.
