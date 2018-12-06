1. [What's an issue?](#whats-an-issue)  
2. [Looking at existing issues](#looking-at-existing-issues)  
3. [Adding an issue](#adding-an-issue)  
4. [Editing an issue](#editing-an-issue)  
5. [Commenting on an issue](#commenting-on-an-issue)
6. [Closing an issue](#closing-an-issue)  

# What's an issue?

An **issue** (aka ticket) is how GitHub lets us make a note about a bug we've identified and need to fix, a feature request, ideas for future site features, and similar tasks. If you have something you want someone (or yourself) to fix, or an idea for future work on the site, issues keep track and help us prioritize this work.

We try to  
* keep these to single tasks when possible (one task per issue), or use checklists if an issue has multiple steps (checklists use this markdown: `- [ ]` for incomplete steps or `- [x]` for completed steps)  
* include enough info so anyone on the team can address the issue  
* add a few pieces of metadata to each issue: ID if a specific person needs to address the issue  
* label what kind of work it requires, if known (e.g. fixing a bug, content writing/editing, design/development work, documentation writing)  
* attach the issue to a "milestone" to signal when it needs to get done (milestone = way of gathering multiple issues under a label, and setting a deadline on addressing them; e.g. "Stuff to fix before annoucing the new website" (due January 15, 2019), "Stuff to get done during Spring 2019", and "Rainy Day" for stuff that isn't urgent)

An "open" issue is one that hasn't been completed; a "closed" issue has been completed.

You can view the [list of all open SLab.org issues](https://github.com/scholarslab/scholarslab.org/issues), or simply click the "Issues" tab at the top-left of the repo:  

![](https://github.com/scholarslab/scholarslab.org/blob/master/docs/docs-images/docs-issues-switch-to-issues-tab.png)

# Looking at existing issues
The [main issues page](https://github.com/scholarslab/scholarslab.org/issues) for this repo looks something like this: 

![](https://github.com/scholarslab/scholarslab.org/blob/master/docs/docs-images/docs-issues-overview-top.png)

* On the left, the filter field shows you which (if any) filters are on. If you've applied a filter to which issues are displayed (e.g. only show issues assigned to no one), it will appear here (so check here if you're not seeing an issue you think exists, because it could be hidden by filtering)  
* The "Labels" and "Milestones" buttons in the top middle of the page take you to  
  1) a page listing this repo's existing labels for organizing issues (you can add additional labels there, or see how many issues have a specific label applied to them), and  
  2) a page listing the repo's existing milestones (with description of what each milestone is for, % of milestone completed, due date; and you can also create new milestones there)  
* To the right, an array of filters let you change which of all the repo's issues are displayed. You can apply multiple filters at the same time (e.g. only issues due in our "before announcing site" milestone with no one assigned to take care of them). The most useful filters are:   
  * Labels (e.g. see only content or documentation issues)  
  * Milestone (e.g. see only issues attached to our "before announcing site" milestone)  
  * Assignee (e.g. see only issues with no assigned to take care of them, or only issues assigned to you)   
* On the far right, the "New issue" button (for creating new issues)  

Looking below these options, you'll see:  
![](https://github.com/scholarslab/scholarslab.org/blob/master/docs/docs-images/docs-issues-overview-bottom.png)  
* On the left, you can select-all or check off multiple issues; the filter options on the upper right change when you've selected issues to allow you to bulk mark an issue closed or bulk-change the label(s), milestone, or assignee(s)  
* Avatars of folks assigned to work on an issue appear on the right of each issue
* Colored labels appear on the nearer right of each issue

# Adding an issue
1. Navigate to the [issues page](https://github.com/scholarslab/scholarslab.org/issues) for this repo and click the green "New issue" button on the right:  

![](https://github.com/scholarslab/scholarslab.org/blob/master/docs/docs-images/docs-issues-new-issue-button.png) 

2. Add some information about the issue...  
![](https://github.com/scholarslab/scholarslab.org/blob/master/docs/docs-images/docs-issues-new-issue-page.png)  

* **Title**: Keep this concise (there's no right length, but maybe aim for 1-10 words?), but try to get across the main point of the issue. This is what folks skimming the entire list of issues will see, so write toward helping them guess whether they can help with the issue from just seeing this title (i.e. without needing to go read the issue's additional description text). E.g. "Update Makerspace hours for summer term" or "add more photos throughout the site for visual interest".  
* **Description**:  
  * You can add as much info as you'd like about the issue, what you'd like done, how you'd like it done.  
  * The description textbox is pre-populated with some template text that can help you describe an issue thoroughly (especially nice if the issue is something you need someone else to help with), but also feel free to select-all and delete the template text and just write what you think best. (Folks can always ask, if they need more details.)  
  * To refer to someone or ask them a question, type @username (clicking on the @ symbol in the style icons—to the immediate upper left of the textbox—gives you a list of possible names)  
  *  To refer to another issue, type `#` and then the number of the issue (this is the number appearing at the end of an issue page's URL)  
* **Apply any desired styles to your description**: You can use these icons to format text, if you don't remember how to format something using markdown. The checkbox formatting icon is especially helpful (to the left of the @ symbol in the style icons, to the immediate upper left of the textbox).  
* **Add metadata**: On the right side of the page, you can click on the gears next to a variety of options to add metadata that will...  
  * **Assignees**: Tell a staffer(s) their help is needed to close the issue.  
  * **Labels**: Help folks see at a glance what kind of work the issue requires (documentation, design/code, content, etc.). Add the "help wanted" label if you're not sure who can help with the issue.  
  * **Milestone**: Choose one milestone, to signal when the issue needs to get attended to (milestone = way of gathering multiple issues under a label, and setting a deadline on addressing them; e.g. "Stuff to fix before annoucing the new website" (due January 15, 2019), "Stuff to get done during Spring 2019", and "Rainy Day" for stuff that isn't urgent). To help people prioritize work, we try to put issues under the milestone by which it's truly critical the work get done, rather than always adding to the the current milestone (e.g. if it isn't critical than X task be done before the "annoucing the site" milestone and it is instead okay if the task gets done during the "Spring 2019" milestone, put it under the "Spring 2019" milestone—if folks have extra time because we get everything critical to the next milestone done before the deadline, we can always go ahead and do other tasks.)

3. Click the green "Submit issue" button (lower mid-right of screen) when you're done.  

# Editing an issue
To edit the name of an issue, visit the issue's page and click the "edit" button on the right side of the issue's name.  

To edit the text of the issue's description (or another comment below that description), click the `...` icon on the top right of the description of comment box:  

![](https://github.com/scholarslab/scholarslab.org/blob/master/docs/docs-images/docs-issues-edit-description.png)

# Commenting on an issue  
Visit the issue's page and use the textbox on the bottom-left to write your comment (remember to use @username to notify folks if you're asking them a question!). Click the green "Comment" button to the bottom-right when done.

# Closing an issue
Visit the issue's page click the "close issue" button (to the immediate left of the green "Comment" button under the commenting textbox) to mark the issue as completed or no longer needed.



