---
author: james-ascher
date: 2017-07-05 18:28:23+00:00
layout: post
slug: transcribing-typography-with-markdown
title: Transcribing Typography with Markdown
categories:
- Digital Humanities
- Experimental Humanities
- Grad Student Research
- Research and Development
tags:
- bibliography
- eighteenth century
- long s
- markdown
- Samuel Butler
- textual bibliography
- transcription
- typography
---

Digital technologies are not new solutions to our old problems, but are new problems asking for us to return to old solutions. People have been transcribing texts for as long as there have been texts. So it is no surprise that some of the earliest applications for computers were concerned with transcribing texts. These applications built on ideas based on previous ideas which were themselves based on yet earlier ones---the genealogical chains of some going back centuries. These genealogies have their own fascinating histories, but the problem that concerns this post is finding ways to use those centuries of accumulated ideas to reproduce texts in a computerized platform that has developed its own sense of how texts should function. That is, how do we digitally transcribe using the techniques that already exist? Techniques developed in prior decades can be difficult to use with computer-based methods because these computer-based methods have only recently developed and have not yet been applied to as wide a range of sources as traditional transcription methods. The solutions that computer applications first stumbled across for one problem initially seem to be right for every problem, but on careful study it turns out they often obscure important details. We do not yet have an extensive repertoire of computer transcription to consider, so it naturally seems like the solution that exists, however idiosyncratic, is the solution for all situations. For example, `<em>` is widely used to indicate both italics and emphasis, which seems fine, but conflates two different sorts of text forms: The former could indicate poetry, summaries, Latin or citations, while the later suggests something that is an exception---a key glossary term or foreign phrase. The conventional computerized scheme is to treat the stylistic choice of italic as separate from the semantic choice of emphasis. For a non-emphasis use of italic, a style could be applied to distinguish that particular semantic meaning, but these semantic meanings would have to be carefully integrated into the existing scheme without conflicting with any other components. This integration becomes increasingly complicated as the schemes become more complete because there are more opportunities for conflict. New standards for HTML and TEI make the situation more flexible, but fundamentally transcriptions on computers must either force their intellectual goals into an existing framework---i.e. marking a distinct convention of italics as though it was the same as emphasis---or extend the framework itself---i.e. inventing a tag that distinguishes all the semantic types of italic used in the work.

When I consider what digital tools could bring to the humanities, I envision new forms of writing which challenge us to reimagine traditional questions in systems with new capabilities but which accept their own limited application and eventual obsolescence in a long history of writing technologies. If a writer recognizes that eventually all technologies become obsolete, they cannot reasonably ignore the wisdom recorded by the technologies of the past. Furthermore, writing serves a wider range of uses when it collaborates with as many conventions as possible, encoding the wisdom of old and new systems and clearly seeing the goals of past writers as well-worn traditional tools, and not creating new tools when a better old one remains to be understood. Timothy Morton's idea of "ecology" serves as well as any other metaphor here: he invites a move from placing nature on a pedestal to thinking of ecology as a sort of _ambient poetics_. Rather than asking how nature writing is done, we ask about the contexts in places, space and material that surround both nature and the writing about nature. I propose that his idea of ecology can be extended to the way we think of computer tools and their relationship to the wider range of writing tools---the more widely we share tools and link to other ideas, the more comprehensible will be our approach which also sets us up for the next innovation. We ought not put a particular scheme on a pedestal but instead recognize how it interacts with all other schemes.1

Translating the physical and intellectual features of a text into a system of transcription requires judgment and I think adapting the most established technologies to the task does more good than taking on the unproven baggage of complicated new systems. A note on the scope of technology I'm talking about here: By established, I don't mean HTML or even ASCII, I mean conventions that span hundreds or even thousands of years: punctuation, glossing, words in sequence, and that sort of thing. The stability of the technology of punctuation means that it has been adopted in more recent technologies and could be used without careful consideration, but I think that people concerned with the past need to ask what questions the past has already answered well enough. Questions of how to transcribe have two components: the intellectual work of selection and description that needs to be done and the conventions available for encoding. The former requires developing judgment, the later only familiarity with a particular system.

Adapting the ethos of the 1999 essay by David L. Vander Meulen and G. Thomas Tansell, "A System of Manuscript Transcription," which broke new ground by adhering as closely to common sense as possible rather than breaking new ground with a byzantine new system, we can write to foreground the historical text and our judgments about it.2 Their approach admits that a transcription re-forms a text, requiring decisions and highlighting where those decisions are made. Consider a hypothetical example in Markdown using something like the Vander Meulen-Tanselle approach:

    
    <code>The [?funny *conceled*] cat ran after the [*next two words
    inserted*] big brown dog.</code>


Which renders as: "The [?funny _canceled_] cat ran after the [_next two words inserted_] big brown dog."

The convention of using square brackets to mark later insertions is so well established that it requires little explanation to understand that these are editorial comments and that the text that the editor believes is correct is outside of the brackets.3 Enclosing italic text in asterisks is a Markdown convention, but is relatively familiar to most readers of digital texts. In contrast, one way to mark the same text in TEI would be:

    
    <code> <p>The <del> <unclear> funny </unclear> </del> cat ran after the
     <add> big brown </add> dog </p></code>


But those more familiar with TEI might be tempted to write:

    
    <code>  <p>The <del rend="strikethrough" cert="medium"> <unclear
      reason="smudged"> funny </unclear> </del> cat ran after the <add
      place="above"> big brown </add> dog </p></code>


These tags instantiate collaboratively delineated concepts intended to be broadly applicable to a wide range of texts, which aspire to encode the document as it is. Various style sheets can cause these semantic meanings to render as floating notes, in brackets, as plain text or in nearly any other way imagined by the designer of the particular style sheet. However, there is no default rendering and no rule about which details to record. TEI users are tempted to imagine that they merely record what they see rather than applying their judgment. Does knowing that the certainty of the word "funny" is medium, that it was canceled with a strike, and that "big brown" was above the line add to the meaning of this text? I think, typically, it would not. But, if in a project the method of cancellation mattered, it could easily be included in the editorial comments in the Vander Meulen-Tanselle system in plain English. Indeed, if the method of cancellation mattered, writing it in English would emphasize it rather than hide it in the appearance of the display. Another difference between a TEI-like approach and an approach like Vander Meulen and Tanselle's is whether or not the system is expanded using the resources of plain English or by using the coding expertise of a specific community, and, by implication, whether either system encourages developing judgment appropriate to the task at hand and demonstrating where that judgment is applied---or if it encourages outsourcing judgment to experts unfamiliar with your particular problem and hiding that application of judgment under the aegis of an official standard. In one case, capable readers of English can understand the markup, while in the later case, you would need access to the TEI standards and discussions to determine how to express and understand a feature correctly according to people probably not involved with your particular project. The plain English system can be read by competent and informed readers; the TEI system requires specialist expertise.

Now, I do not mean to pick on the members of the TEI Consortium, who do good work, but to outline the sort of thinking that influences the use of digital technology in transcription. If we care to write about a text in history, we must think about which of the innumerable facts about that text apply to the project at hand. This work can be shortcut by adhering to any present or future standard that displaces judgment onto someone else, but at the expense of the system working for your project. A system needs to grow from the problems in the project.

For this project, we aim to _recreate, digitally, the experience of reading eighteenth-century texts for commonplace entries._ Having looked at several eighteenth-century books that survive and thinking about manuals on preparing commonplace books (Locke has [a particularly good one](https://archive.org/details/gu_newmethodmaki00lock)), we realized that the physical layout of the text affected reading. Since texts occur in some layout which presents their meaning, it is obvious that the layout links to meaning, but you would not think so based on text encoding standards that ignore white space and line breaks. Furthermore, commonplacing readers may read with a pen in hand to mark the text itself in the margin. Conventional computer document formats are not well suited to those approaches that remain attentive to the layout of the page of the text they comment on. Recently, [Ted Nelson began a new lecture series](https://www.youtube.com/watch?v=KdnGPQaICjk) describing how current computer systems reflect arbitrary compromises that stuck. One example he mentions is that most modern document formats include no way to indicate marginal notes. For centuries, people commonly commented on texts with marginal notes, but because the early designers did not use those sorts of notes in their own day-to-day work, they were not included in most modern standards for texts.

We aim to capture features like white space and line breaks that are not currently recorded in transcription systems, but which would have been part of the eighteenth-century text's features. But, how can we wrestle the strangeness of old texts to the modern systems we know? One approach draws on improv theater---just start doing it and then look over the work to see which parts are useful. For this portion, three of us---Sarah Berkowitz, Elizabeth Ferguson and James P. Ascher---each transcribed a few pages of the printed text we have been studying---Samuel Butler's _Characters_---after talking about the aims of the project. We compared our approaches to find what did and did not work. These solutions, like other good transcription solutions, were developed collaboratively but are quite specific to this project. Our hope is that the reasoning here, while it should not be used to answer your specific questions, should demonstrate an approach to thinking about your own project.


## Headings


Within Butler's _Characters_, each character has its own distinct heading, so they are important to record because they structure the text and name the theme for each part. On the printed page, these headings have a different appearance from the main text: They are centered, in a larger face, use capitals and small caps, and have rules above and below them. One approach might be to transcribe thus:

    
    <code>{Double Rule}
    
    A {Small Caps}
    
    HUFFING COURTIER</code>


Or, with kerning between the letters

    
    <code>{Double Rule}
    
       A
    
    S M A L L  P O E T</code>


Both of these approaches recreate the layout of the text in the document and preserve the capitalization. Another approach could ignore the layout and kerning:

    
    <code>[*two rules*]
    
    PREFACE.</code>


Or, following the Markdown convention for signaling a heading, we could write:

    
    <code>[*two rules*]
    
    # AN
    # ALDERMAN</code>


All four approaches, although they may seem somewhat different, are shaped by two consistent categories of decision making: first, the selection of the elements worthy of notice and, second, the system of recording those elements that have been noted. In each example, the heading is marked as different: in two cases by giving the typography and in two other cases by interpreting the typography as bearing semantically equivalent meaning to a heading. Going back to the aim of the project, recreating the reading practices of the past, since the typography of headings is fairly consistent, it seems right to merely apply semantic judgment to the text and save the reader of the transcription time---as long as we're confident of our interpretation. Sure, they could figure out that centered small caps words are headlines, but instead we could tell them every headline is like that in an introduction and just note any variation. All four transcriptions, however, regard the presence of the rules as significant. The rule seems like an element to notice since a reader of the text would come to expect the pattern and the rules interrupt the purely alphabetic text before and after. The matter of how to transcribe is more about convenience for converting the file and will be treated later.


## Initial Letters


Each section also begins with what is called a "drop cap," a capital letter that is bigger than the adjacent letters, and which drops down several lines. We have a few examples of how to record this as well (unrelated portions of the transcription are omitted):

    
    <code> [*two line initial*]HAS taken his Degree in Cheating [...]
     [*two line initial*] the higheſt of his Faculty [...]</code>


Another:

    
    <code> [I]s one, that would fain make [...]
     [ ]which Nature never meant him; [...]</code>


Another:

    
    <code> [Two Line initial*]Is a Cypher, that has no Value himsself, but
                        from the Place he stands in.  All his Hap-</code>


Another:

    
    <code> T^2^HE writing of Characters [...]
     much in Faſhion [...]</code>


The first three mark the lines that a the drop cap initial spreads to. This spread may be significant as drop caps in many French books of this same time period go upwards rather than downwards, extending above the line. Furthermore, the word on the next line might be confused as relating to the drop capital; resolving this confusion could be part of the reading practice. Note also, that the first and third example preserve the space between the capital and the text of the second line, the second does not (but that seems fine because the extension of the capital is already blank). The last transcription, which is based on the suggestion of Fredson Bowers in his _Principles_, uses a superscript in Markdown to signal the initial, but does not record whether or not it goes up or down.4 This choice may be fine if we are restricted to English books of a certain type where these always seem to go down, but might be a problem if developing a transcription standard that covers all types of books. Since in our case the practice is uniform across the text and merely serves to signal the reader that they have arrived at the beginning of a new section, Bower's approach seems to best preserve the readability of the text. It would render "T2HE writing of Characters." While the superscript 2 is somewhat confusing, a note could explain and the superscript follows a convention developed from early twentieth-century work on incunabula that has been used in certain serious scholarship for over a century.


## Long 's' characters


Eighteenth-century printers used both the long s---i.e. 'ſ'---and the short s---i.e. 's.' Typically, the long s is used in the middle of a word and the short one at the beginnings and endings, but the practice is hardly consistent. It is not until 1785 that the short s really dominates mainstream printing as it does now. For this reason, most transcriptions note the presence of a long s in some way. We have three examples in our transcriptions: as "ſ," as "ss" or as "s*." Each transcriber seems to want to include the letter as distinct from 's,' which seems like the right choice since long s at the very least could potentially be confused with an 'f' by current, or past, readers. However, each mode of transcription emphasizes the long s in different ways. On the one hand, one marks it with an asterisk, suggesting that something unusual is going on; the asterisk is the convention for notae and footnotes, so this could work to mark and make visible all the places that this unusual letter occurs. Consider this passage,

    
    <code>    He has found out a Way to s*ave the Expence
     of much Wit and Sens*e: For he will make
     les*s than s*ome have prodigally laid out upon
     five or s*ix Words s*erve forty or fifty Lines.
     This is a thrifty Invention, and very eas*y; and,
     if it were commonly known, would much in-
     creas*e the Trade of Wit, and maintain a Mul-</code>


It makes it extremely clear that the long s occurs throughout in the beginning and middle of words, pointing out that it deviates from the convention I proposed above. On the other hand, using "ss" blends in and seems to be another spelling of a word. Since spelling was mostly normalized in this time period, a deliberate misspelling can signal special typography, but we can never be totally certain that that something might not be an error or a word we do not know. Consider "paſs" and "pasſ," which would both be transcribed in this system as "passs," which seems to conflate the common situation with the odder one. Using the [Unicode character, 'ſ,'](https://codepoints.net/U+017F) seems to both mark the letter as exceptional and to leave a readable text. Those familiar with the conventions of eighteenth-century printing will be not be surprised by it, but for those who are not familiar with the conventions, it would recommend itself for further study.


## Footnotes, Quotations and Certainty


Brief, conventional quotations provide no special problems since the quote mark in ASCII and Unicode serves well enough, but two kinds of typographic style associated with references require special attention: footnotes in smaller type at the foot of the page and running quotes. An example that combines both (slightly altered so that only those two conventions are apparent),

    
    <code>if it were commonly known, would much in-
    crease the Trade of Wit, and maintain a Mul-
    
    We read that Virgil used to make, &c ] This alludes to a Passage
    in the Life of Virgil ascribed to Donatus. " Cum Georgica scrie-
    " traditur quotidio meditatos mane plurianos versus dic_tare so-
    " litus, [---Illegible need to check original copy (sarah)]"</code>


While the footnote text in the original is smaller, this transcription does not document that fact, reasonably since the bracket and the verbal text itself alerts us that we are in a footnote. Additionally, skipping one line and continuing on the same page preserves the ability to make line references to both the main text and the footnotes in the same system. Yet, in comparison to our treatment of headings, it seems like we could provide some signal to the reader that the text before them has special semantic value. Following the convention of square brackets, we can adopt the Markdown notation, "`[^1]`" and "`[^1]:`," to signal, respectively, the location in the source text that is marked and the lines of the text that comment on it. The problem we run into using this notation with this particular footnote is that it comments not on the page it occurs on, but on the facing page. If several footnotes occur, the number can be incremented, but---as far as I know---footnotes commenting on a text in another file are uncommon enough as to not have been dealt with. It seems that such a linkage needs two pieces of information: a linking symbol (i.e. the footnote mark or passage footnoted) and the file that contains the proper footnote. Markdown provides such a mechanism in the "reference link"; i.e. our source passage could be `[words][^1]` and the note could read `[^1]: otherfile.md`. The problem is that to Markdown, this reference notation means the word "words" becomes a hyperlink to file "otherfile.md," which isn't quite the right linkage. A simple extension of this scheme would be to include a statement of the location at both ends of the footnote viz., for page 22,

    
    <code>[...]
    The words were found in the notes. \*[^1]
    
    [^1]: [*the footnote occurs on page 23*]</code>


Page 23 has an additional footnote but still refers back:

    
    <code>[...]
    Someunrelated text with its own note, \*[^1]
    that doesn't relate to the wrong note.
    
    [^1]: This is a note for this page, so no comment.
    [^2]: [*referring to the note on page 22*] I here note.</code>


Notice a few aspects of this approach. Since the numbering for footnotes in the brackets is not part of the transcription, but merely an aid for the abstract structure, it only matters that the numbers are consistent within one document. Footnote "1" on one page could very well be footnote "2" on another page while preserving the enumeration or symbols provided by the printer. In this imaginary example, we prefixed the asterisk with a backslash so that any computerized parser would see that it is a symbol not a special character indicating an italic font.

In the original example, note also that the running quotation marks are simply transcribed in the margin with their apparent spacing. This seems right as the aim is to preserve the reading experience of the page which would have these marked out by quotes. Lastly, note the final editorial comment that expresses the uncertainty of the transcription. While a uniform language for expressing uncertainty is desirable, the nature of uncertainty is so various that providing free-reign to the editor to explain what's going on seems the most prudent.


## Italics, Small Caps and Other Type Changes


Transcribing italics is both conventional and is part of the procedure used by all three of the transcribers in this project. Options include tagging the text with `[i]` or `{i}` or `<i>` as well as using `*` to enclose the passage. In each case, the transcription identifies the moment in setting type where the compositor would have switched from pulling letters out of the physical case of roman type to pulling letters out of the physical case of italic type and vice versa. Whichever sign is used, the aim is to note the presence of another style of typeface with the same body size. As [Markdown](https://daringfireball.net/projects/markdown/) understands asterisks to mean italic, something like `*this*` seems to be the right approach only because it makes the text easier to parse with conventional tools and does not misstate the situation.

Following the same technique, small capitals often signal different sorts of information in the text. Markdown does not provide a solution that is quite as elegant as the one for italic, but these type changes are a bit less common. The convention is to write `<span style="font-variant:small-caps;">In Small Caps</span>` for a passage with _I_, _S_ and _C_ in full caps with the remaining letters in small caps. Aside from being unwieldy, this captures exactly what is happening and provides a pattern for other changes between type cases that warrant note in the transcribed text: Simply alter "small-caps" to the appropriate font-variant of interest for a particular project. It is worth remembering, however, that the goal is to digitally recreate a reading experience, so for cases of different type sizes indicating a heading, it seems sufficient to use the mark for heading. For cases of different type sizes indicating footnotes, the semantic marking for footnotes seems sufficient.

Lastly, we may come across a broken or damaged letter. One example transcribes a _t_ that is damaged as `<t>`, which follows the old tradition of using angle-brackets to indicate portions of the text that have been mutilated but which the editor can recover. However, given the inconsistent use of different kinds of brackets in different kinds of editions, this might be confusing. Another option is to use editorial notes, i.e. `t [*previous letter shifted*]` which interrupts the text to announce the damage. A further option would be to note the _t_ plainly and include a note at the bottom of the page, such as this one:

    
    <code>[*letter t on line 8 shifted*]</code>


This last approach emphasizes that the situation with the letter _t_ is totally comprehensible---it is just shifting type---and would not interrupt the reading experience. It seems that the choice between these last two approaches has to do with how prominent the mistake seems to be.


## Material in the Skeleton: Headlines, Page Numbers and Signatures


A page of text includes not just the text of the work, but also what Genette would call paratexts which indicate the subject of chapters, location in the book or instructions to a binder. These occur in type imposed into a forme, but have a different sort of relationship to the text set in a continuous operation by the compositors. Only in unusual circumstances would an author expect a printer to follow their page numbers, so compositors normally just provide the body text and footnotes; when these are imposed, a skeleton forme of page numbers, signatures and headlines from the previous imposition can be moved over and the details corrected for the new set of pages. A full description of a book should account for all the textual elements of a page, but it makes perfect sense to segregate the information that was inserted as a guide surrounding the main text from the text itself. Since this project includes a conventional bibliographical description, this information can be put there while the text transcriptions can focus on the text that forms the work of the compositors before the material was imposed in a skeleton forme.


## Spacing Between Letters and Around Punctuation


Eighteenth-century punctuation often used spacing differently than we do now. A semicolon might have a thin space before it and a thick space after it. To fit some punctuation into a line, there might be no spaces after a period but before the next sentence begins. In another line, the space after a period might be exceptionally large, or the spaces between words exceptionally large. A compositor may put extra spaces between the letters of a word to give it emphasis as a heading, which seems like a semantic choice rather than one that aims to preserve the justification of the line. That is, there seem to be two possible reasons to have a noticeable variation in space: either the need to provide a line of type of a certain width or to indicate a type of semantic information. Experience must be the guide in distinguishing between these two, but the situation should generally be clear after some study. The problem becomes one of how to represent variations in spacing widths if it is decided that they represent semantic meaning.

Since each line is justified separately, the unit of analysis must be the line. Different widths of spaces between two different lines almost certainly represent the need to justify that particular line, but different widths within a line may---if the editor judges it to have meaning---be transcribed within that line. To encode this, Unicode provides a range of spaces of different widths. The characters ["HAIR SPACE," "PUNCTUATION SPACE," "EM SPACE," "THREE-PER-EM SPACE," "FOUR-PER-EM SPACE," "SIX-PER-EM SPACE"](https://www.cs.tut.fi/~jkorpela/chars/spaces.html) cover a wide variety of types of spaces and widths of spaces (the [Unicode Standard itself](http://www.unicode.org/versions/Unicode10.0.0/ch06.pdf) covers these in far more detail). The most sensible treatment of space, since a compositor would not really be distinguishing a space used for punctuation from a similarly narrow space, would be to follow Peter Blayney's approach in the Appendix to his _Texts of King Lear._5 When different sizes of space appear in the same line, simply use different sizes of space in the transcription to indicate that. The only modification for our project is that those spacing elements ought---in the judgment of the editor---to bear some sort of semantic meaning.


## An Example Page


This post has discussed a wide range of choices in transcribing a text to preserve the reading experience from a printed book that can be summarized simply: use Markdown and Unicode and make judgments clear in square brackets when alterations are needed to use Unicode and Markdown. Yet, it can be useful to have an example---however fabricated---that brings these elements together,

    
    <code>[*two rules*]
    
    #AN\
    EXAMPLE PAGE
    
    T^2^he *text* on this page isn't in any book, but <span
    style="font-variant:small-caps;">Demonstrates</span> some
    techniques you might use to tranſ-\
    scribe texts as you see them.  Note that each line breaks with a\
    backſlash before the newline. [^1]  This signals the difference
    between\
    a newline needed to fit the text on one screen and one which rep-\
    resents an actual line break.  "We find that the quotes run\
    " along the side for extended quotes.  Just as they do in\
    " eighteenth century texts." And , that punctuation spaces can be\
    coded as such .  What a text! [*last word poorly inked, could be "hex"*]
    
    [^1]: before the newline ] a newline is a special sort of chara-\
    cter that means you begin a new line of text.
    
    [*the letter t in "techniques" on the first line of the text is
    shifted upward*]</code>


One way this would render by default would be:

[_two rules_]

#E X A M P L E P A G E

T2he _text_ on this page isn't in any book, but Demonstrates some techniques you might use to tranſ-
scribe texts as you see them. Note that each line breaks with a
backſlash before the newline.6 This signals the difference between
a newline needed to fit the text on one screen and one which rep-
resents an actual line break. "We find that the quotes run
" along the side for extended quotes. Just as they do in
" eighteenth century texts." And , that punctuation spaces can be
coded as such . What a text! [_last word poorly inked, could be "hex"_]

[_the letter t in "techniques" on the first line of the text is shifted upward_]






* * *






 	
  1. Timothy Morton, _Ecology Without Nature: Rethinking Environmental Aesthetics_ (Cambridge, Mass.: Harvard University Press, 2009).↩

 	
  2. David L. Vander Meulen and G. Thomas Tanselle, “A System of Manuscript Transcription,” _Studies in Bibliography_ 52 (1999): 201–12.↩

 	
  3. For those unfamiliar, brackets are a standard symbol used to indicate editorial additions and italics distinguish descriptions and explanations of the roman text: since "big brown" is conjectured to belong to the final text, the words are placed outside of the brackets; since "funny" is conjectured to belong to an earlier version, the word is place inside the brackets.↩

 	
  4. Fredson Bowers, _Principles of Bibliographical Description_ (New York: Russell & Russell, 1962).↩

 	
  5. Peter W.M. Blayney, _The Texts of King Lear and Their Origins_ (Cambridge: Cambridge University Press, 1982); Blayney is studying the recurrence of types so chooses to transcribe both semantic meaning and what evidence he finds of the typographical habits of the compositors.↩

 	
  6. before the newline ] a newline is a special sort of chara-
cter that means you begin a new line of text.↩



