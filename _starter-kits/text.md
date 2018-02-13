Questions to think through when embarking on text-based projects (editions in particular, but possibly also expand to support text analysis questions with assistance from others?)
How do you get that text?
Copyright, non-consumptive use
Scanning vs. manual input, OCR, OCR correction, formatting/style
annotation/metadata around physical book+page
markup of text and physical book+page

[toc]

You may find this useful if you're...
You want to create a scholarly digital edition.
You want an online copy of a text that you, your students, or some other group can annotate.

# Ed and minimal editions

[Ed](https://elotroalex.github.io/ed/) is a tool for creating a certain kind of digital edition (online text for reading, research, teaching, annotation, etc.). From Ed's homepage:

>  "Ed is a Jekyll theme designed for textual editors based on minimal computing principles, and focused on legibility, durability, ease and flexibility. Our underlying technology is easy to learn and teach, and can produce beautifully rendered scholarly or reading editions of texts meant to last."

Ed was created by Alex Gil, Susanna Allés Torrent, Terry Catapano, and Johann Gillium (see [the credits page](https://elotroalex.github.io/ed/credits/) for full credit info).

[The Ed tool](https://elotroalex.github.io/ed) uses 
- Jekyll (a tool for making simple websites while still getting some of the benefits of complex website tools like Drupal)
- [Hypothesis](http://hypothes.is) (a tool for annotating text on the web and in PDFs: highlight any amount of text and add comments, questions, interpretations, etc.)
- CSS (the basic language for changing how webpages visually appear)
- [thorough documentation](https://github.com/elotroalex/ed/blob/master/documentation.md)
and other work to make it easy to create a public digital edition that's also a minimal edition: easy to access (for multiple meanings of access), maintain, and preserve

Why make a minimal edition? It's easy to create, customize, and get online where you can actually use it; it's easy to maintain for longterm use; it's more accessible in a number of ways, including for people accessing the edition over a slow internet connection and using screen readers. [See here for the Ed creators' full explanation!](https://elotroalex.github.io/ed/about/)

[Here is the main website for Ed](https://elotroalex.github.io/ed/), and a list of Ed examples you can visit is also on that main webpage. You can check out other minimal editions made with Ed: [Fugitive Verses](http://fugitiverses.viraltexts.org/) and [mini lazarillo](https://minilazarillo.github.io/).
[Ed's documentation](https://elotroalex.github.io/ed/documentation) is excellent.

# Finding a digital version of a text to use

If you don't already have a digital version of the text you want to use in your edition, you might be able to find one on the web. 

## Easiest method
[Project Gutenberg](https://www.gutenberg.org/) has many public domain texts in multiple digital formats. Keep in mind that the accuracy of these texts can vary. The best format to download a text in from Project Gutenberg for Ed use is plain text, but HTML is okay if it's important that you retain formatting such as bold, italics, and indents.

## Other resources and quality considerations
If you need a text that's more authoritative (e.g. one or more textual scholars have identified the digital text as accurately representing a specific print edition), try searching for the title of your text plus "digital edition" or "scholarly edition". For example, [the Modernist Versions Project offers a free digital text of James Joyce's **Ulysses**](http://web.uvic.ca/~mvp1922/the-algorithmic-ulysses/) that has been checked over by textual and Joyce scholars. [Here's a resource created by Lisa Spiro on evaluating the quality of digital texts](https://digitalscholarship.wordpress.com/2008/05/09/evaluating-the-quality-of-electronic-texts/), and [a piece by Sarah Werner on evaluating digitization projects](http://sarahwerner.net/blog/2015/10/questions-to-ask-when-you-learn-of-digitization-projects/).

Also look for textual "corpora" or a "corpus", "[online archives](https://github.com/dh-notes/dhnotes/blob/master/pages/online-archives.md)", "[text datasets](https://github.com/dh-notes/dhnotes/blob/master/pages/datasets.md)", and resources aimed at people wanting to do text analysis [such as this UPenn library guide](http://guides.library.upenn.edu/c.php?g=476112&p=3255815) that includes places to locate usable digital texts.

Other possible sources include contacting a librarian, either via the reference chat options on some libraries' webpages or via email. Look for the library's staff directory page, and then search for librarians with expertise in the digital humanities, digital scholarship, or your specific field (e.g. literature); if you're not sure who to contact, a short and polite query on who to email using the right contact can help (don't contact the library's director; do use the library's general contact or help/reference desk address). Even if you don't work or study at a library's university or college, a single politely worded, short email request could result in assistance. I recommend not presuming the person you're contacting will have the time or permission to answer, and thus not sending the request more than once.

## Why not just scan a print text?
This is an option, but if you haven't done this before you might not know all the work involved and the level of quality/accuracy of text this can produce. You'll need a 2D scanner that fits the pages of your print text, and has a high enough resolution that the resulting scan images are easier for transcription software to recognize; you may need someone to turn the text's pages if it has multiple ones; the ability of software to correctly identify the letters on a page is dependent on the pages formatting and typography, and on the software in question (e.g. some software that does this can be expensive, but there are free options; options you may already have such as Adobe PDF OCR may not be very good). You may need to do a lot of cleanup and correction on the digital text this method creates. For texts with fragile pages or tight bindings, it may be difficult or impossible to protect the pages or not break the binding to place the pages properly on the scanner.

If you work at a university or college, your library there may have a digital preservation unit or staff whose expertise includes this kind of work. Keep in mind they may or may not have the time or permission to answer questions, scan a text for you, and/or allow use of their equipment. They will probably need you to prove you have the legal right to copy and use the text as you intend. To read more about this approach to creating a digital text, check out [DH at Berkeley's resource page](http://digitalhumanities.berkeley.edu/resources/digitization-workflows-scanning-ocr-and-audio-transcription) or the [UCLA Center for DH's short page](http://support.cdh.ucla.edu/help/120/137-save-mailbox-space).

## I'm covered under "fair use", right?

If the text you want to use is in the public domain, the creator has licensed it for reuse (e.g. with a Creative Commons license allowing the way you want to reuse it), or you have been otherwise granted permission to use the text, you're good to go! 

If one of these doesn't apply to your situation, though, **the phrase "fair use" does not magically apply just because you're an educator or aren't making money from the (re)use**. Copyright and intellectual property is something to consider here, both in terms of *legal* and *ethical* behavior (I'm no copyright or law expert, so please take the following as something to explore, rather than explicit legal guidance). 

"Fair use" decisions depend on each specific situation and how many of the four fair-use factors of fair use apply. These four factors are 
- the purpose and character of your (re)use
- whether your reuse is more creative (more likely supported) or factual (less likely supported)
- the amount of work being (re)used
- the possible market effect of your reuse 
See [this resource from Purdue University](https://www.lib.purdue.edu/uco/CopyrightBasics/fair_use.html) for more info, or try applying this [copyright decision tree from Tufts University](https://sites.tufts.edu/scholarlycommunication/copyright/decision-tree/copyright-decision-tree-textual-representation/) to your own situation. If you're at a university, there's probably a law or copyright librarian with which you can discuss your specific situation, or your local library might also be able to advise.

Alternatively, a person... could... base your decision on text reuse on what's what you've decided is *ethical* in addition to (or instead of) what's *legal*. What you're doing with an edition may be on a small enough scale that no one will ever hit you with a legal challenge. You may consider what you're modeling for your students: Is it possible to have an understanding of remix and reuse that fulfills all *ethical* obligations without being *legally* allowed?

For example, maybe you feel it's reasonable to include a video clip of a birthday party where a recent copyrighted song is playing in the background in your documentary, if you credit the song's title and creators at the end of the film. Would you feel the same if the song were from a successful Disney movie, or if the song were by a local band that hadn't made much money off it? (Do you think your ethical obligation changes depending on how much money and/or attribution you're guessing soemthing's already accrued?) And if you're okay with using *ethical* rather than *legal* boundaries for your edition, are you okay with your students taking a similar attitude toward their coursework, such as reuse and remix of text in written assignments? Again, this isn't legal (or moral!) guidance, just some things you might want to think through when (re)using others work.

# Formatting your text for use with Ed

## What are we doing? 
This section will explain how to take a digital text that is either in a plain text (.txt) or HTML (.html) format, and convert to the following [genres supported by Ed](https://elotroalex.github.io/ed/documentation/#genres):

* prose single page
* multiple pages
* lines in poetry
* special poetry indents
* footnotes

For HTML, this resource will only include certain elements formatted in certain ways (e.g. we include page breaks, but only if they're written as ```<br>``` and not, for example, ```< /br >```.) The elements we include are paragraphs (```<p>```), line breaks (```<br>```), bold (```<strong>```), italic (```<em>```), and ordered and unordered lists (```<ul>, <ol>, <li>```). I'm open to adding more if anyone has suggestions, and I guess I could eventually improve the scripts to catch things like alternative ways to write ```<br>``` (but might not get around to it—it's not at all difficult, just didn't seem like it would be useful often enough to justify the time).

We're taking text that's in format—plain or marked up with HTML—and converting it to the markdown format used by Ed (and any Jekyll tool) so that Ed knows how to display things correctly (the CSS code telling webpages how to style your Ed website will be able to match specific commands like "display this in bold font" to the right places in your text). This means figuring out what the markdown or Ed-specific markdown equivalent is of various formats, and automating updating your text to use those equivalents instead so everything looks right on your Ed digital edition.

## I'm working with plain text

* prose single page
* multiple pages
* lines in poetry
* special poetry indents
* footnotes

## I'm working with HTML

* prose single page
* multiple pages
* lines in poetry
* special poetry indents
* footnotes

# Importing annotations

## Do you need to import annotations?
If you have just a handful of annotations, the easiest thing may be making a new edition and then manually adding them once your Ed edition is live (i.e. using the included Hypothesis to highlight words/phrases and paste in your annotations to them).

If you have lots of annotations, you may prefer to convert the annotation dataset into something Hypothesis can import. *I haven't worked on a solution for this yet, but hope to have time to do so.* The types of annotation sets I'd like to cover:

* Other formats of existing annotation sets (CSV, plain text)
