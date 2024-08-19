---
author: brandon-walsh
date: 2015-09-10 11:19:52+00:00
layout: post
slug: virginia-woolf-natural-language-processing-and-the-quotation-mark
title: Virginia Woolf, Natural Language Processing, and the Quotation Mark
category: essay
tags:
- grad-student-research
crosspost:
  - title: my personal blog
    url: http://walshbr.com/blog/woolf-and-the-quotation-mark/
---

For my fellowship in the Scholars' Lab this year I'll be working with [Eric](http://scholarslab.org/people/eric-rochester/) to expand a project we began last year on Virginia Woolf and natural language processing. My dissertation focuses on sound recordings and modernism, and this year I will focus on how Woolf's quotation marks offer evidence of her engagement with sound as a textual device. In my reading, the quotation mark is the most obvious point at which sound meets text, the most heavily used sound recording technology in use by writers. Patterns in quotation mark usage across large corpora can tell us a lot about the role that sound plays in literature, but, as you might expect, there are _lots_ of quotation marks - hundreds or thousands in any given text. Computational methods can help us make sense of the vast number and turn them into reasonable objects of study.

You can find more information in [this post](http://scholarslab.org/hearing-silent-woolf/) about my thinking on quotation marks and some preliminary results from thinking about them in relation to Woolf. As I discuss there, finding quotation marks in a text is not especially challenging, but this year Eric and I will be focusing on a particular wrinkle in Woolf's use of the marks, best conveyed in _The Hours_, Michael Cunningham's late-century riff on Virginia Woolf. In _The Hours_, Cunningham offers a fictionalized version of Woolf meditating on her composition process:


> She passes a couple, a man and woman younger than herself, walking together, leisurely, bent towards each other in the soft lemon-colored glow of a streetlamp, talking (she hears the man, “told me _something something something_ in this establishment, _something something_, harrumph, indeed”) (166).


The repeated "_somethings_" of the passage suggest the character's imperfect experience of the conversation as well as the limits of her senses. As the moment is conveyed through the character's perspective, the conversation will always be incomplete. Recording technology was largely unreliable during the early days of the twentieth century, and, similarly, the sound record of this conversation as given by the text is already degraded before we hear it. Cunningham points to how the sounded voice is given character in the ears of the listener, and, in a print context, in the pen of the writer. A printed voice can speak in a variety of ways and in a variety of modes.

Cunningham's passage contains echoes of what will eventually be the famous first sentence of Woolf's _Mrs. Dalloway_: "Mrs. Dalloway said she would buy the flowers herself." The text implies that Mrs. Dalloway speaks, but it does not mark it as such: the same conversational tone in Cunningham remains here, but the narrator does not differentiate sound event from narrative by using quotation marks. We see moments of indirect speech like this all the time, when discourse becomes submerged in the texture of the narrative, but it doesn’t disappear entirely. Speech implies a lot: social relations, the thoughts of a speaking body, among others. Things get muddy when the line between narrative voice and speech becomes unclear. If quotation marks imply a different level of speech than unquoted speech, might they also imply changes in the social relations they represent?

_Mrs. Dalloway_ is filled with moments like these, and this year I'll be working to find ways to float them to the surface of the text. Examining these moments can tell us how conversation changes during the period, what people are talking about and for, how we conceive of the limits of print and sound, and about changing priorities in literary aesthetics. The goal this year is to train the computer to identify moments like this, moments that a human reader would be able to parse as spoken but that are not marked as such. Our first pass will be to work with the quoted material, which we can easily identify to build a series of trigger words that Woolf uses to flag speech as sound (said, asked, called, etc.). With this lexicon, we can then look for instances in her corpus where they pop up without punctuation. Teaching the computer to classify these passages correctly will be a big task, and this process alone will offer me lots of new material to work with as I untangle the relationship between modernist print and sound. In upcoming posts I'll talk more about the process of learning natural language processing and about some preliminary results and problems. Stay tuned!

Works Cited:

Cunningham, Michael. _The Hours_. New York: Picador USA : Distributed by Holtzbrinck Publishers, 2002. Print.

Woolf, Virginia. _Mrs. Dalloway_. 1st Harvest/HBJ ed. San Diego: Harcourt Brace Jovanovich, 1990. Print.
