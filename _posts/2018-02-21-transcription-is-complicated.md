---
author: ethan-reed
date: 2018-02-21 16:15:10+00:00
layout: post
slug: transcription-is-complicated
title: Transcription Is Complicated
---

In a recent _PMLA_ issue on digital methods, Johanna Drucker concludes her article [“Why Distant Reading Isn’t”](http://www.mlajournals.org/doi/abs/10.1632/pmla.2017.132.3.628) by claiming that distant reading’s


<blockquote>literalness makes it the closest form of reading imaginable. What distant reading lacks is distance. That distance is critical; it is the space between the literal text and the virtual text, between the inscriptional, notational surface and the rhetorical, cognitive effect that produces a text. (633)</blockquote>


In other words, when an algorithm “reads” a corpus by scouring it for patterns of one kind or another, it doesn’t transform the text the way that a human reader does. It can get so “close” because it reads without the powerful and dynamic cognitive filters through which human readers conjure, out of the written word, literary worlds. For Drucker, closing the gap between “reader” and text in this way is one of the things that makes distant reading “the closest form of reading imaginable.”

But, crucially, human decisions shape how a program closes that gap in the first place. As Drucker argues elsewhere in the article, “modeling and paramaterization”—decisions made by scholars and programmers as to what a program will look for and, therefore, be able to find—not only “shape the terms by which a text is analyzed to produce quantitative data,” but are also “rendered almost invisible by the forms in which results are expressed” (632). These before-the-fact decisions, then, are what allow an algorithm to read from such a close range—ignoring the “rhetorical, cognitive effect that produces a text,” they engage with “the inscriptional, notational surface” according to a set of pre-established instructions to produce results of one form or another. In this sense, some might argue that the “distance” distant reading “lacks” is the gap in which literature happens: the unpredictable, unwieldy interpretive space in which a reader transforms text on a page or screen into a living work of art.

**Transcription**

As I assemble my corpus of poetry from the Black Arts Movement, I’ve grown more interested in this gap between “inscriptional, notational surface” and “rhetorical, cognitive effect.” In the past three weeks I have transcribed approximately twenty books of poetry. This is, in many ways, the kind of “reading” that we expect a machine to be good at: tedious and time-consuming, sure, but also mechanical, even mindless—something lacking that human “distance” Drucker describes above.

When it comes to transcription, however, the devil is in the details. And anyone familiar with using OCR software to transcribe text from images knows that machines still struggle to get all the details right. After scanning pages into images and processing them with a program like [ABBYY FineReader](https://www.abbyy.com/en-us/finereader/), the resulting text files are often garbled with mistakes—errors that require a human reviewer to identify, compare with the original, and correct by hand. Though an extremely useful piece of software, a program can’t be all things to all people, and I found this especially true for experimental texts like the poetry in my corpus that employ unusual indentation, spacing, punctuation, capitalization, and non-traditional spellings.

But I already knew that ABBYY FineReader would have trouble transcribing text from images from my corpus. That’s one of the reasons I decided to transcribe them by hand in the first place. What I didn’t anticipate was how much trouble I—a presumably well-trained human reader—would have transcribing text from physical documents into a text editor. This being the case even when my documents were fully intact and the text completely legible.

Over the course of the past few weeks, I found that this hairs-breadth, closest-form-of-reading-imaginable reading—the kind that seems to go no further than inscriptional surface—is also a complex task requiring creativity, imagination, and resourcefulness. Moreover, rather than being a mindless or merely mechanical task, the transcription of these texts frequently presented thorny decisions that demanded my judgement as a reader, scholar, and programmer. Arriving at these decisions often required not only a knowledge of digital methods, but also of bibliographical methods, questions of poetic form, and more practical project management skills.

**Spacing**

Take, for example, lines from “a/coltrane/poem,” the final poem from Sonia Sanchez’s 1970 collection _We A BaddDDD People_ (and a poem that got me listening to Coltrane’s music while transcribing):

(soft rise up blk/people. rise up blk/people
chant) RISE. & BE. what u can.
MUST BE.BE.BE.BE.BE.BE.BE.BE-E-E-E-E-
BE-E-E-E-E-E-
yeh. john coltrane.
my favorite things is u.

Like many of the poems from _We A BaddDDD People_, “a/coltrane/poem” makes dramatic use of indentation, punctuation, the spaces between words, and the spaces between lines. Even transcribing these lines to be published here on the Scholars’ Lab WordPress site, however, raises a number of technical and practical issues. For example, there is no easy way to produce this kind of whitespace in HTML. When web browsers parse the whitespace in poetry—indentation, tabs, etc.—they more or less get rid of it. While investigating the poetry of Mina Loy, Andrew Pilsch argues in [his chapter in _Reading Modernism with Machines _](https://www.palgrave.com/us/book/9781137595683)that “the nature of HTML resists—even _prevents_—the easy introduction of … typographic experimentation” (245)—something he discusses earlier on [his blog](https://andrew.pilsch.com/blog/2014/06/24/mina-loy-online-we-turn-into-machines/). Like Pilsch, I ended up having to make use of [the "&nbsp" space](https://en.wikipedia.org/wiki/Non-breaking_space)—something Pilsch discusses more in-depth—to shoehorn spaces into the poem so it would appear correctly, I hope, in web browsers. This means that, in HTML, the above section of poetry looks like this:

![](http://scholarslab.org/wp-content/uploads/2018/02/snippet_from_coltrane_HTML.png)

In other words, a complete mess. But before trying to print parts of this poem in HTML through WordPress, at an even more basic level I had to get it into a text editor, a process which also raised a number of questions requiring practical decisions. As I type out the above lines into Atom, I have to ask: how many spaces should separate the words that seem to be a stage direction on the left— “(soft / … / chant)”—from the words on the right?

In an ideal world, I would have access to all materials used by [Dudley Randall’s](http://www.broadsidelotuspress.org/dudley-randall-broadside-press) [Broadside Press](https://www.cmich.edu/library/clarke/AccessMaterials/Bibliographies/DetroitBroadsidePress/Pages/default.aspx) to publish this 1970 edition, as well as publication materials from all subsequent editions. Comparing these various documents, I would be able to get a better sense of the typographical materials and units of measurement used to represent Sanchez’s poem on paper. This would provide me with a more holistic sense of how to represent Sanchez’s poem in my text editor. However, given constraints on my time and resources as a Ph.D. student, as well as the size of my corpus, deciding how deep I want to dig in the archive to answer such questions requires serious consideration. Moreover, as far as I can tell, while there were printings of this edition of _We A BaddDDD People_ as late as 1973, there were no other new editions of the work—so the edition I have is the only one I have to work with.

So when faced with the question—how many spaces should separate these words in a text file?—I looked at how far a space gets me in relation to other characters, gauged this against the kinds of spaces in poems elsewhere in the book, and made an educated guess: three after “(soft”, and one after “chant)”. The same goes for the space between “& BE.”, which is slightly larger than the gaps separating most other words. I’m not sure exactly how much larger this gap is, so I make another educated guess, giving it two spaces instead of one.

In a multiple-page poem defined by such visual experimentation, however, trying to measure and align every word, space, and line break so that the text in my text editor resembles the text on the page—even roughly—is a real challenge. In some cases, given the functionalities of the editor I’m working with, this challenge becomes an impasse. Even in the example above: the space separating the line “yeh. john coltrane.” from the preceding line—“BE-E-E-E-E-E-”—matches the size of other line breaks within stanzas in this volume. But the space separating this line from its succeeding line—“my favorite things is u.”—is both larger than line breaks within stanzas and smaller than breaks indicating new stanzas. While transcribing, I normally represent adjacent lines in a poem with adjacent lines in my text editor; I represent stanza breaks with an empty line. How do I represent in my text editor a line break that is effectively 1.5 times the size of a normal line break? Without reworking my entire spacing system across all of my poems, I can’t—so I decided to transcribe them as adjacent lines despite the clearly visible difference on the page.

**Textual Scholarship**

The nature of these challenges would come as no surprise to scholars—like Drucker—interested in textual study, bibliographical study, and scholarly editing. Having had the great fortune of taking a seminar here at UVA on textual criticism and scholarly editing with David Vander Meulen, [a course at the Rare Book School](http://rarebookschool.org/courses/history/h50/) on the book in the American industrial era with Michael Winship, as well as many thoughtful conversations with friend, colleague, and textual scholar James Ascher, I’ve had the opportunity to adopt many of these methodological lenses as my own. These lenses help us to ask questions like: what exactly, is a literary work? Is Sanchez’s _We A BaddDDD People_ the words printed in ink on the pages of the physical book I’m holding? If there are discrepancies between this book and later editions, how do we reconcile them? And, more relevant to my current project, how does the digital copy of this work in my text editor differ from the bound copy held at UVA’s library from which I’m making my transcription?

In considering these questions, I find helpful the vocabulary used by textual scholar G.T. Tanselle that distinguishes between _document_, _text_, and _work_. To offer a greatly reduced shorthand for Tanselle’s nuanced thinking on these distinctions: there are _texts of works_ and there are _texts of documents_. _Texts of documents_ refer to the words, markings, or inscriptions on a physical object that is completely unique though it may seem to be identical to other artifacts. _Texts of works_, on the other hand, are slightly more complicated—they consider the words as instructions for performing that intangible thing that is a verbal literary work in the minds of readers.

Though they may seem abstract, conceptual distinctions such as these have emerged from some of the most concrete, hands-on, rubber-meets-the-road scholarship in literary thought—for example, the kind of thinking that goes into examining multiple versions of a work (like [_King Lear_](https://en.wikipedia.org/wiki/King_Lear#Date_and_text)) so as to produce a single scholarly edition. A distinction like Tanselle’s between texts of documents and texts of works offers a guiding light for scholar down in the often bewildering weeds of a given archive. As Tanselle argues in [“Textual Criticism and Deconstruction,”](https://www.jstor.org/stable/40371919)


<blockquote>The distinction between the texts of documents (handwritten or printed, private or published) and the texts of works is basic to textual criticism. The effort to “reconstruct” or “establish” the texts of works presupposes that the texts we find in documents cannot automatically be equated with the texts of the works that those documents claim to be conveying. (1)</blockquote>


In other words, scholars must exercise a great deal of judgement as they try to reconcile meaningful—and sometimes extremely significant—discrepancies between versions of a given physical text as found in physical documents in their efforts to determine the text of the work itself. The role that “intentions” play in all this— as in the words that were meant to be put down—and how best to account for the mediating forces and actors at work in the publication of a book, is a point of debate in textual scholarship, often dependent on the kinds of research questions one hopes to investigate (for more reading here, see D F. McKenzie’s [_Bibliography and the Sociology of Texts_](https://www.cambridge.org/core/books/bibliography-and-the-sociology-of-texts/CF5FE52FD90E0B79D8583FF675C4923D), Jerome McGann’s [_The Textual Condition_](https://press.princeton.edu/titles/4894.html), and Tanselle’s [“Textual Criticism and Literary Sociology”](https://www.jstor.org/stable/40371938)). And as many scholars have argued, these conceptual distinctions central to textual criticism and thought extend to digital artifacts as well—see, for example, Matthew Kirschenbaum’s [“.txtual condition.”](http://www.digitalhumanities.org/dhq/vol/7/1/000151/000151.html) Scholarship such as this helps me to think through how a hand-typed .txt file of _We A BaddDDD People_ relates to a physical codex made of paper and ink.

**Stanza Breaks**

Again, part of the purpose of this post is to expand on just how complicated transcription can be when it comes to performing text analysis on a literary corpus. Moreover, I’m hoping to think through how these practices are bound up with traditional bibliographical lines of inquiry. In short, I’m hoping here to offer further examples of how reading a literary text at extremely close range—Drucker’s “inscriptional, notational surface”—involves all kinds of human thought and judgement. Even if this thought and judgement are hidden in things we might take for granted—like the distinction between thinking of the book I’m holding as being Sonia Sanchez’s _We A BaddDDD People_, as opposed to a unique physical document inscribed with a text that intends to convey _We A BaddDDD People_.

So I want to offer a couple more examples of typographical concerns that came up during my transcription process. Unlike extra spaces between words in a line, these issues also more directly impact the kinds of results my analysis aims to produce, as they impact what “counts” as a line or stanza in my model.

The first has to do with stanza breaks. In my day-to-day reading practice, identifying a stanza break usually feels straightforward: lines grouped together in a poem, probably separated by white space. Digging a little deeper, [_The Princeton Encyclopedia of Poetry & Poetics_](https://press.princeton.edu/titles/9677.html) begins its entry by defining a stanza as “a unit of poetic lines organized by a specific principle or set of principles” (1358). Likewise, [_T__he Oxford Dictionary of Literary Terms_](http://www.oxfordreference.com/view/10.1093/acref/9780199208272.001.0001/acref-9780199208272-e-1080?rskey=bxV0Ev&result=1081) defines a stanza first and foremost as


<blockquote>A group of verse lines forming a section of a poem and sharing the same structure as all or some of the other sections of the same poem, in terms of the lengths of its lines, its metre, and usually its rhyme scheme. In printed poems, stanzas are separated by spaces.</blockquote>


While this definition doesn’t help us much with something like Sanchez’s “a/coltrane/poem”—a poem that more or less flies in the face of traditional stanzaic form—it does seem like it would help us if we wanted to make a “stanza” a parameter in our analytical models, or even in figuring out how best to separate lines and stanzas in our text files.

But even in more traditionally stanzaic poems—of which there are many in my corpus—deciding what “counts” as a stanza can get messy. Something as simple as page breaks, for instance, can wreak havoc in making such decisions. This is particularly the case when only one edition of a work exists, and one doesn’t have access to original manuscripts.

Consider, for example, a poem titled “Malcolm Spoke/ who listened?” from Haki R. Madhubuti’s 1969 collection _Don’t Cry, Scream_, published with Broadside Press. The poem is stanzaic, and distinguishes stanzas with what seem to me like normal breaks. These groupings, however, have no regular rhyme scheme, no regular use of capitalization, no regular number of lines, no tight thematic or narrative structure (i.e. a point of view that alternates from stanza to stanza), and no regular pattern in punctuation (i.e. some stanzas conclude with no punctuation while some conclude with a period). And, crucially, the poem extends partway onto a second page. These are the two groups of lines on either side of the page break:


<blockquote>animals come in all colors.
dark meat will roast as fast as whi-te meat
[PAGE BREAK]
especially in
the unitedstatesofamerica’s
new
self-cleaning ovens.</blockquote>


For a few reasons, I decided to transcribe these two sections as a single stanza. First, at a more visual, design level, the poem has no other stanzas as short as two lines. The book as a whole, in fact, has very few two-line stanzas, and while there are a few single unattached lines, they usually come right at the end of a poem. In comparison with the rest of the poem and the other poems in the collection, then, it seemed more likely to be a larger stanza than not.

More convincingly, however, my feeling that these two chunks are one unit comes from the poem itself—the group of lines above seems, to me, to develop a coherent line of poetic thought. The first two lines introduce the metaphor of meat of “all colors” roasting, and the following line (after the page break) intensifies this imagery by locating this metaphor in the United States and its “new /self-cleaning ovens.” The lines after the page break make most grammatical and metaphorical sense when taken as part and parcel of the lines prior to the page break.

This is not to say that other poems in this volume don’t break up grammatical expressions across stanzas—they definitely do. Other poems in this volume also develop specific metaphors or images over the course of several stanzas. But with this poem in particular, stanzas seem to be doing something else. Each has a kind of conceptual focus—they stand alongside one another as evenly-weighted, coherent units of expression. For example, the stanza preceding the one quoted above is as follows:


<blockquote>the double-breasted hipster
has been replaced with a
dashiki wearing rip-off
who went to city college
majoring in physical education.</blockquote>


This stanza develops, from line to line, a description of—and stance towards—this “dashiki wearing rip-off” who replaces the “double-breasted hipster.” Each line builds on the last, slowly unfolding different aspects of how one figure “has been replaced” with another: the speaker discloses a skeptical attitude towards these figures, identified by what they wear, where they went to school, and what they studied. Like the stanza with the page break, this group of lines seems to me to develop a coherent line of thought that doesn’t spill over into subsequent stanzas.

Understanding these stanzas in light of the poem as a whole, then, aligns with this reading: the rhythm of the poem as it moves from stanza to stanza seems to emerge from a feeling of moving from one idea to the next—and, for me as a reader, breaking this group of lines at the page break into two different stanzas feels like it disrupts that rhythm.

It could certainly be argued that the group of lines with the page break was meant to be two stanzas specifically so as to disrupt the rhythm of this stanzaic form—that such a disruption is vital to the poem’s meaning. But, as is the case with scholarly editing, I had to make a judgement call to proceed with my project. So I considered everything I knew, tried to find out more if possible, and made the best decision I could given what I had in front of me.

**Runovers**

One last example. Lines of poetry can get very long. Sometimes, lines get too long for the physical documents on which they’re inscribed. During an enlightening conversation with Jahan Ramazani on this and many other issues addressed in this post, he gave me the example of editing _The Norton Anthology of Modern and Contemporary Poetry_ and having to print and number the extremely long lines of [Allen Ginsberg’s "Howl."](https://www.poetryfoundation.org/poems/49303/howl) Central to this decision-making process was considering standard practice on what the [_Chicago Manual of Style_](http://www.chicagomanualofstyle.org/16/ch13/ch13_toc.html) calls “Long lines and runovers in poetry.”

The _CMS_ defines runovers as “the remainder of lines too long to appear as a single line,” which are “usually indented one em from the line above.” In other words, when lines get too long—as in Ginsberg’s poetry, or Walt Whitman’s—a hanging indent about an em-dash in length tells the reader that the line was too long for the book. The entry concludes, however, by indicating that it might not always be so clear when an indentation is a runover and when it’s a new line:


<blockquote>Runover lines, although indented, should be distinct from new lines deliberately indented by the poet … Generally, a unique and uniform indent for runovers will be enough to accomplish this.</blockquote>


As we’ve seen already just in this post, much of poetry in my corpus rebels against traditional poetic form, including standard indentation and spacing practices. Determining whether or not a group of words is one or two lines, however, is extremely important for my project. The “line” is the basic unit I’ve been asking sentiment analysis tools in TextBlob and NLTK to evaluate for sentiment. In short: what counts as a line really matters, and ambiguities surrounding runovers could very well add up to have a significant impact on the results of my analyses.

An excellent example of this appears a few pages earlier in Madhubuti’s _Don’t Cry, Scream_, in a poem titled “Gwendolyn Brooks.” The poem [is available online](https://www.poetryfoundation.org/poems/50782/gwendolyn-brooks) through the Poetry Foundation, and it appears in my physical copy as it does on this website, indentations and all. Halfway through the poem there is a distinct sequence, over a dozen lines long, that lists a series of portmanteaus describing different kinds of “black”—from “360degreesblack” to “blackisbeautifulblack” and “i justdiscoveredblack.” Over the course of this sequence, there are three indented lines, each one-word long, that interrupt the otherwise steady stream of images.

At first bluff, these lines struck me as runovers. The list-like nature of the lines felt like they lent themselves to running a little long—as we see with a poet like Whitman, once a list starts, it can just keep going and going. Moreover, no thematic or poetic reason jumped out at me as to why someone might indent these words as opposed to any others. Of course, there is the possibility that such indentations were completely on purpose, and are part of a project to disrupt and transform any resonance with someone like Whitman and the canon he represents. Sitting in front of my computer, a little bleary-eyed from all the transcribing, I honestly wasn’t sure.

So I began looking for other appearances of the poem. The version published by the Poetry Foundation complicated my initial thought that these one-word indented lines were runovers. Jahan Ramazani also suggested that, given the importance of anthologies to the Black Arts Movement, even if a book has no later editions, individual poems therein might appear somewhere in a collection.

Such a realization, however, presents another fork in the road of my research. As a researcher committed to being as thoughtful and thorough as possible as I work with the poetry from a revolutionary art movement, I am delighted to know that I still might be able to pursue questions that I thought would remain unanswered (i.e., “is this a runover line or two separate lines?”). As a researcher with limited resources, however, I have to decide whether or not pursuing these questions will be the best use of my time and energy in this particular project. There are a lot of anthologies containing poetry from the Black Arts Movement out there, so I have to weigh the time it would take to locate and look through them all for instances of those poems from my ~20 book corpus that may have runover lines, against the potential impact it would have on the results of the analyses I hope to perform. As it currently stands, I’ve made a note of this particular ambiguity and plan to reassess what I should do with it and others like it after assembling the rest of the corpus.

**Final Thoughts**

As this post has hopefully shown, transcribing texts from book to screen can get very tricky. More than a simple act of mechanical reproduction, it can stump us with questions about literary works that seem to have no discernible answers. From one moment to the next, it can demand a working knowledge of bibliographical methods; digital methods; aesthetic form; and how to manage a project’s resources. And—as Drucker above argues regarding text analysis more generally—navigating these questions requires rigorous human judgement every step of the way. Even in situations where the practicalities of project management and the realities of our textual archive make this judgement feel all-too-fallible.

There are other, important aspects of this human judgement which I haven't had time to think through as much as I would like to have in this post. For example, digging deeper into those questions explored by Andrew Pilsch mentioned above that investigate the challenging ways in which web browsers are designed to parse the whitespace in poetry in HTML. Or, how the default parameters of [the basic tokenizing packages in NLTK](http://www.nltk.org/_modules/nltk/tokenize.html) throw away whitespace—the idea that the programmers behind these text analysis technologies view their standard use as most likely to focus on text, not the spaces between text.

Very long story short: transcription is complicated! And I hope this post has done something to foreground some of those invisible, behind-the-scenes decisions that—like modeling and parameterization—give shape to the results a text analysis project produces.
