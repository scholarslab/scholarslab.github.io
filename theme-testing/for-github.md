*Issues for GitHub that I keep being too lazy to submit in the moment, if discovered when have good flow going.*

- Person: 'posts by blah' farther to left than edge of flexbox content but when tried wrapping w/ same thing it made everything tiny so gotta investigate further on that

- Person: button on bottom needs margin-bottom and also prob to be for seeing the rest of someone's posts if they exist rather than taking to all people page. Will also need Liquid logic that only displays this button if someone has more than 3 posts.

- Blog: sort by date, descending

- Research: do `sort_natural` rather than `sort` so it doesn't care about 'the' (also verify what `sort_natural` means because you kinda just assumed on that one)

- Data entry: JS form to select what kind of thing you wanna make, enter the fields, and it spits out copy-pastable YAML to start a markdown document with. Also will need simple instructions to save as `.md`, a link to Markdown syntax guide, how to name your document (or it can print the document name for you in a comment?), and simple instructions on what folder to save your document under

- Topics: should our meta-type pages be nested under an umbrella category? Am thinking things like Accessibility, Colophon, About, Charter... Things that both a) won't be updated regularly and b) won't be a primary target for people to view as a goal of coming to the site (unlike, for example, Makerspace).

- Makerspace: find where calendar fits, and rearrange HTML if needed. Hide the skillset block thing for Phase 1 until you have time to properly label it, which seems like it will take more time than it's worth right now.

- All: add 60px margin or padding to top of every page, to make room for the navigation bar. Probably apply this to `<main>`. Once done, remove `margin-top: calc(60px + num)` from all pages where you've inserted it to adjust manually.

- 3D Printer Calendar: forgot this was a separate page, too - calendar on Makerspace also needs to go here. It's clearly supposed to go somewhere on the page, based on wording referencing it, but unsure where.

- Research: need replacement images for gallery - unsure how many left. I know Praxis is still missing and Jeremy should know where that is, since I saw they used it on their poster. This is why I need to investigate Google Drive folders more thoroughly...