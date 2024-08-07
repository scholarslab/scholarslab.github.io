---
author: eric-rochester
date: 2012-11-06 13:38:22+00:00
layout: post
slug: teaching-git
title: Teaching Git
category: blog
tags:
- grad student research
- praxis
- code
- pedagogy
---

In Praxis, we just finished covering [Git](http://git-scm.com/). Everyone seemed to catch on pretty well, so I thought I’d write a bit about my thought process as I was planning the sessions. There were a few principles I tried to keep in mind:



<figure>
  ![](http://farm1.staticflickr.com/10/11250506_58dee63095_m.jpg)Photo by [The Rocketeer](http://www.flickr.com/photos/kt/11250506/), [CC BY-NC-ND 2.0](https://creativecommons.org/licenses/by-nc-nd/2.0/)
  <figcaption>

</figcaption>

</figure>



**Repeat ourselves.** Rather than work on something new, we repeated Jeremy’s lessons on HTML and CSS, except that where he went into detail on HTML and skipped over Git, we went into detail on Git and skipped over HTML.




This meant that&mdash;although the project we were working on was a web page&mdash;everyone copied-and-pasted the exact same content for every page and commit. I [posted](https://raw.github.com/erochest/git-play/edd6619718f815203653cfd927ac11ffbac6f0ed/index.html) [links](https://raw.github.com/erochest/git-play/36ee68cb09a29d73f570fce0a6346d1dd67f60a1/index.html) to [raw](https://raw.github.com/erochest/git-play/f317f0b2cebf4f17381b7a8d493399eafb75183f/index.html) [HTML](https://raw.github.com/erochest/git-play/82d683e38908a6bc1ddcc66b068c76235c649965/index.html) [pages](https://raw.github.com/erochest/git-play/cbd3827be861f9fe6e6d1de48ef425fb09cc347b/index.html) that everyone could copy into their text editors. We then examined the changes and committed them in Git.




This meant that the task we were performing was a little familiar so no one had to think about it. Instead they could focus on Git and the new concepts we were encountering there.




**Repeat ourselves.** I tend to get a bit abstract when I’m explaining things, but I was careful to keep things concrete. I stopped to explain constantly.




However, I didn’t expect that the explanations would make sense until everyone had gone through them in practice several times. At one point, I even told everyone that I wasn’t going to ask if they had questions, because I knew that they did. And I wasn’t going to answer them.




Enlightenment would come through use.




(I should mention that this is why I’m not actually posting the tutorial itself: the guided practice _was_ the tutorial.)




**Repeat ourselves.** In different media.




I explained the task, and we did them. I explained the concepts. I also kept two diagrams: one of the working area, staging area, and committed repository and one of the commit log tree. As we talked and I explained what was happening, I kept updating those.




These diagrams also made good discussion points to make sure everyone was keeping up.




**It’s an onion, all the way down.** Git sees the world as a series of concentric circles, and my explanation followed that.




First we worked only in the working directory. Then we moved a file into staging. Then into the repository itself. For this we needed a limited number of git commands: `status`, `diff`, `add`, `commit`, and `log`.




Then we introduced branching, so we used `checkout`, `branch`, and `merge`.




For the next session, I introduced the remote repositories and `push`.




**Keep a Cheatsheet on Hand.** I printed out a [cheatsheet](http://rogerdudler.github.com/git-guide/files/git_cheat_sheet.pdf) for everyone and passed them out in the first session.




My central theory for all of this was that we learn technical things not by explanation, but by practice. However, we often need to have someone hold our hands and guide the way while we’re learning. This seemed to work pretty well in these sessions.




I’d be interested to hear from those in those Praxis sessions. Let me know what worked and what didn’t.




And I’d like to hear from everyone else. Are there Git tutorials that you like.
