---
author: scholars-lab
date: 2020-06-30
layout: post
slug: participating-in-statue-removal-history-crowdsourcing
title: "When They Came Down: Participating in crowdsourced documentation of racist statue removals"
categories:
- digital humanities  
- tutorial  
---

The ["When They Came Down"](https://whentheycamedown.com/) crowdsourced project, run by Emily Gorcenski, is a communal effort to document info in one place as various racist monuments are removed, renamed, and/or recontextualized: "a people's history of ejecting the stained legacy of colonialism, slavery, and genocide from our public spaces"[^1]. People are invited to contribute info about related actions to research and write up for the website, which runs from the GitHub repo [https://github.com/Gorcenski/whentheycamedown](https://github.com/Gorcenski/whentheycamedown).

I decided to volunteer, and have added two statue pages so far ([1](https://github.com/Gorcenski/whentheycamedown/pull/102), [2](https://github.com/Gorcenski/whentheycamedown/pull/114)). Some colleagues took me up on my offer to support their adding content as well; below, I've shared the instructions I gave them, in case any readers would like to assist with this project as well (and/or get a better sense of how group Github-hosted sites work). Note that in addition to researching content and adding it to the site, translations of content between Spanish and English, and improved details and citations on existing writing appear useful to the project.

I wrote these instructions at 2am, and regardless would love to make them better. Please let me know if you run into trouble following them, or have suggestions for making them better.

## Easier volunteering: research & write about a statue
If you haven't used GitHub before, you might want to start (or only ever participate by) just doing the research and content writing, and asking someone else to add your writing to the website. (If you're at UVA, I can help you with this anytime before 7/8/2020; or SLab community members can ask on our Slack's #general channel; or anyone can research, write, and add content to an issue with a written request that someone else add the content to the site for them).  

1. Visit the [issues page](https://github.com/Gorcenski/whentheycamedown/issues) for the "When They Came Down" repository (aka repo: webpages containing code that runs the website) and click on one of the items (aka issues) listed there. (If you see no items listed, it's because people have completed all current requests to provide statue content; on 6/30/2020 there were 40+ issues, so not likely to happen soon). Here's a screenshot with an arrow pointing at the initial issue I picked for a colleague to work on (don't work on that issue, though, it's already being worked on):  
![](/assets/post-media/2020-06-30-participating-in-statue-removal-history-crowdsourcing-1.png)

2. On any issue you pick, check to make sure no one has indicated they're already working on that issue (screenshot is of the issue I picked for a colleague, so you can see what someone claiming an issue might look like):  
![](/assets/post-media/2020-06-30-participating-in-statue-removal-history-crowdsourcing-2.png)  

3. _Optional step_: If you're not lightning fast, it might make sense to leave a comment on an issue to say you'll be working on it, so no one else starts doing redundant work. (You'd need to create a GitHub account to do this.)

4. Use the information in the issue (might only be a Twitter link or location; searching for local newspaper article coverage is a good way to start) to research and write the following info about the monument (a couple sentences at least, but more is great if you want to):  
* who commissioned it and why (if known)  
* when and where it was created/established  
* the person/people that were honored by the statue  
* when/how/why it was removed  
To cite your sources, insert [^1] at the end of a sentence (change the 1 to whatever endnote number you're on). At the bottom of the text, write [^1] (or whatever number you're on) and link to your source (don't need to use any particular citation style, could just provide a web link).

Here's [a statue post I created](https://raw.githubusercontent.com/Gorcenski/whentheycamedown/trunk/content/english/post/company-a-capitol-guards-little-rock-ar.md), as an example. Ignore the weird text between the '+++' symbols at the top.

5. Also get the following to the person who'll be posting your work to GitHub:  
* One or more photos related to the statue or its removal, with info on who to credit for taking the photo(s)  
* The date the statue came down, and time range if known (e.g. if the article says it came down in the evening before a 7:30 council meeting, I'd guess 5pm-7:29pm, and maybe add a note to the text about why I estimated that so future folks know whether they can adjust that time if they have better info)  
* Whether the statue was removed by municipal action or citizens acting on their own

## Advanced volunteering: add content via GitHub yourself
1. [Create a GitHub account](https://github.com/join) if you don't have one  

2. Visit the [issues page](https://github.com/Gorcenski/whentheycamedown/issues) for the "When They Came Down" repository (aka repo: code that runs the website) and click on one of items (aka issues). (If you see no items listed, it's because people have completed all current requests to provide statue content; on 6/30/2020 there were 40+ issues, so not likely to happen soon). Here's a screenshot with an arrow pointing at the initial issue I picked for a colleague to work on (don't work on that issue, though, it's already being worked on):  
![](/assets/post-media/2020-06-30-participating-in-statue-removal-history-crowdsourcing-1.png)

3. On any issue you pick, check to make sure no one has indicated they're already working on that issue (screenshot is of the issue I picked for a colleague, so you can see what someone claiming an issue might look like):  
![](/assets/post-media/2020-06-30-participating-in-statue-removal-history-crowdsourcing-2.png)

4. Start a new post...  
* [Here](https://github.com/Gorcenski/whentheycamedown/tree/trunk/content/english/post) if writing a new post in English or translating an existing Spanish post  
* [Here](https://github.com/Gorcenski/whentheycamedown/tree/trunk/content/espanol/post) if writing a new post in Spanish or translating an existing English post  
* By choosing the "add file" > "create new file" option in the upper-right (see screenshot below)  
![](/assets/post-media/2020-06-30-participating-in-statue-removal-history-crowdsourcing-3.png)

5. This is a little complicated, because we're not allowed to edit the code directly (which keeps people from messing up the site accidentally or intentionally), so GitHub will create a "fork" (a copy of the code, where you can make changes and create content without affecting the live website's code), you'll make your changes there, and then you'll submit a request for the site's maintainer to incorporate your work into the live website/main repo (aka a pull request, aka "PR"). To do this, I'll refer you to a tutorial Scholars' Lab staff wrote for folks who are doing similar actions to create new blog posts on the Scholars' Lab website (just change the website you're working on from the 'https://github.com/scholarslab/scholarslab.org' link used in that tutorial, to 'https://github.com/Gorcenski/whentheycamedown'): [https://github.com/scholarslab/scholarslab.org/blob/master/docs/authoring-and-editing.md](https://github.com/scholarslab/scholarslab.org/blob/master/docs/authoring-and-editing.md) (the "Branch and write/edit!" and "Move your writing to the main repo" sections are what's pertinent).

6. Using the info written on the issue page (often just a Twitter or newspaper link), try to find some reputable source(s) of info on the statue's removal. Write some text about the statue/site (can just be a few sentences unless you want to write more):  
* who commissioned it and why (if known)  
* when and where it was created/established  
* the person/people that were honored by the statue  
* when/how/why it was removed  

7. To cite your sources, insert **[^1]** at the end of a sentence (change the 1 to whatever endnote number you're on). At the bottom of the text, write **[^1]** (or whatever number you're on) and link to your source (don't need to use any particular citation style, could just provide a web link).
Here's a [post I created](https://raw.githubusercontent.com/Gorcenski/whentheycamedown/trunk/content/english/post/company-a-capitol-guards-little-rock-ar.md), as an example.

8. You'll also need to edit the special info that goes at the top of your content file (aka front matter or post metadata), which you'll see in between two sets of '+++' symbols:  
* **howonlyimage = true** (leave as is)  
* **draft = false** (leave as is)  
* **image = "img/company-a-capitol-guards-little-rock-ar.jpeg"** (file name of main image associated with your post, if any)  
* **date = "2020-06-18:00:00-21:29"** (year/month-day and 24-hour-format time the statue is known or estimated to have come down during)  
* **title = "Memorial to Company A, Little Rock, AR, U.S.A."** (change to name of the statue you're writing about, city, state, country)  
* **photo_credits = "unknown"** (change to name of photographer if known)  
* **photo_source_url = https://www.waymarking.com/waymarks/WM979Y_Memorial_To_Company_A_Capital_Guards_Little_Rock_Arkansas** (web link to the photo you found)  
* **categories = ["confederates", "confederate soldiers"]** (change depending on what the statue you wrote about was; the options are: colonizers, confederates, racists, rapists, slavers, war-criminals; place inside quotes as demonstrated, and use a comma to separate if using multiple category names)  
* **tags = ["municipal-action"]** (change to the appropriate one of these options: municipal-action, renaming, direct-action, private-action)  
* **weight = 1** (leave as is)  

9. Upload any images to [https://github.com/Gorcenski/whentheycamedown/tree/trunk/static/img](https://github.com/Gorcenski/whentheycamedown/tree/trunk/static/img)

10. Create a pull request so someone knows to check your work and add it to the live website (see [this section](https://github.com/scholarslab/scholarslab.org/blob/master/docs/authoring-and-editing.md#move-your-writing-to-the-main-repo) from Scholars' Lab's blogging documentation, but ignore the parts about assigning reviewers)

Thanks to Emily Gorcenski for creating and running this project, as well as structuring it so volunteers can contribute; and to the 20+ folks who have worked on the project. Thanks also to GitHub user @ligerzero459 for starting a post template, @jonahbron for comments on that template, and @shushugah for template improvements and reviewing/merging PRs. Finally, thanks to my colleague Rebecca for encouraging us to work on this project.

## Footnotes:
[^1]: [https://mobile.twitter.com/EmilyGorcenski/status/1270760701678796802](https://mobile.twitter.com/EmilyGorcenski/status/1270760701678796802)
