---
author: amanda-visconti
date: 2023-09-18
layout: post
slug: jekyll-content-interfaces
title: "Jekyll content interfaces: a review of tools for friendlier authoring/editing on collaborative Jekyll sites"
categories:
- Digital Humanities
tags:
- Digital Humanities
crosspost:
  - title: Amanda's blog
    url: https://literaturegeek.com/2023/09/18/jekyll-content-interfaces
---

We want our DH/DS research center's collaborative website ([ScholarsLab.org](https://scholarslab.org/) to be easier for everyone to edit/author on; this post shares my research notes from looking into some improvement options.

Scholars' Lab migrated its website ([ScholarsLab.org](https://scholarslab.org/)) from WordPress to a Jekyll-generated static site back in early 2019. We [blogged our reasons](https://scholarslab.lib.virginia.edu/blog/site-relaunch/): less developer maintenance time, more ownership and portability of our work, a way to make the labor (and learning) of maintaining our site shared across more folks (e.g. Praxis Fellows who learn GitHub versioning with us can apply those skills/familiarity when blogging for our site too). Brandon Walsh, me, and the Scholars' Lab community published a peer-reviewed piece with _The Programming Historian_ (["Running a Collaborative Research Website and Blog with Jekyll and GitHub"](https://programminghistorian.org/en/lessons/collaborative-blog-with-jekyll-github)) that builds on my previous _Programming Historian_ publication (["Building a static website with Jekyll and GitHub Pages"](https://programminghistorian.org/en/lessons/building-static-sites-with-jekyll-github-pages)), teaching how to move from a basic individual blog site to one that can handle collaborative authoring and editing workflows. 

I'm referenced in Quinn Dombrowski's _Digital Humanities Quarterly_ piece ["Minimizing Computing Maximizes Labor"](https://www.digitalhumanities.org/dhq/vol/16/2/000594/000594.html) on the main downside for us: "Despite buy-in from the Scholars’ Lab community on a Jekyll-based site relaunch, ongoing uneasiness with the interface has reduced the number of website contributions by community members who have run into technical difficulties in the past and who feel like they 'should' understand the technology after reading the documentation but continue to struggle with making it work". 

It isn't that learning to author and edit on the site is difficult. For folks who don't get to work with GitHub or coding regularly, these skills decay from disuse, and thus relearning presents a barrier to posting or updating the site when people wish.
I recently had time to complete some research on options to make authoring/editing lower barrier to folks who don't work with the site or similar activities regularly. This post shares my notes, particular to our specific context (library-based DH research center with an active collaborative blog) and goals.

Things we're looking to improve:
1. It's hard for folks to edit the homepage or other main content pages because the files are messy and not always commented in a way that's useful for non-developers (just getting to our desired cleanup of HTML and better commentng around liquid templating will partially address this)
2. Ease of adding/editing our post and other data (e.g. authors) files
3. Simplicity of image uploading and insertion into posts
4. In-browser site appearance preview (for folks not running the site locally, working via GitHub.com; Netlify provided this back when it was free)

Things we want to retain from our current status:
- Content is easily exportable (e.g. MD, CSV, JSON)
- Free (reasonable cost also okay, if scales to our needs); see how not-free options interact w/longevity, lock-in (but so do single-person hobbyist projects)
- Easy to back up regularly
- Fast site search
- Minimal maintenance
- Page load time is reasonable
- Accessible (e.g. to screenreaders)
- Markdown rather than HTML for post authoring

# A review of content interface options 
## The 3 most interesting options (for our context)

### Jekyll admin plugin
- URL: https://github.com/jekyll/jekyll-admin
- About
    - "A Jekyll plugin that provides users with a traditional CMS-style graphical interface to author content and administer Jekyll sites."
    - "The project is divided into two parts. A Ruby-based HTTP API that handles Jekyll and filesystem operations, and a JavaScript-based front end, built on that API."
    - Last release: Sept 2022
    - GH Used by 12.5k
- Verdict: try this locally (and also try prose.io), before trying Decap 

## Prose.io
- URL: https://prose.io
- Last release: 2014; last commits Sept 2022. Last commits that look significant/aren't mostly merging external PRs were 2019. This is probably active enough for our purposes? 
- About
    - "Prose provides a beautifully simple content authoring environment for CMS-free websites. It's a web-based interface for managing content on GitHub. Use it to create, edit, and delete files, and save your changes directly to GitHub."
    - "Prose has advanced support for Jekyll sites and markdown content. Prose detects markdown posts in Jekyll sites and provides syntax highlighting, a formatting toolbar, and draft previews in the site's full layout."
    - "We offer Prose.io as a hosted service for the latest version, or you can download the source code and host it on your own."
    - "Simple" publish/unpublish workflow 
    - OS
    - Prose can be used to edit text files of any GitHub repository (not just ones underlying Jekyll-generated sites)
    - "Prose itself is built with Jekyll and [Backbone](http://backbonejs.org/) and hosted on GitHub. The browser side application interacts directly with the [GitHub API](http://developer.github.com/v3/) for managing your repo’s contents. The only server side logic deals with authentication. Since [the GitHub API does not support a user agent OAuth flow ](http://blog.vjeux.com/2012/javascript/github-oauth-login-browser-side.html), we resorted to a small server side application to handle authentication: [Gatekeeper](https://github.com/prose/gatekeeper)."
- Verdict: Worth trying out now to get a better sense of it, alongside Jekyll admin plugin test

### Decap
- URL: https://decapcms.org/
- About
    - Open source content management for your Git workflow: Use Decap CMS **with any static site generator** for a faster and more flexible web project 
    - "Static + content management = ♥ Get the speed, security, and scalability of a static site, while still providing a convenient editing interface for content."
    - An integrated part of your Git workflow: Content is stored in your Git repository alongside your code for easier versioning, multi-channel publishing, and the option to handle content updates directly in Git.
    - An extensible CMS built on React: Decap CMS is built as a single-page React app. Create custom-styled previews, UI widgets, and editor plugins or add backends to support different Git platform APIs. Built on the Jamstack
Decap CMS is based on client-side JavaScript, reusable APIs and prebuilt Markup.
    - The web-based app includes **rich-text editing, real-time preview, and drag-and-drop media uploads**.
    - Supports draft > review > publish workflow
    - Gets around issue of folks not using GH enough to remember how to use = barrier? "With [Git Gateway](https://decapcms.org/docs/git-gateway-backend/#git-gateway-with-netlify-identity), you can add CMS access for any team member — even if they don’t have a GitHub account."
- Getting started
    - Templates for Hugo, Eleventy, others; what about Jekyll?
    - Jekyll is supported (https://docs.netlify.com/integrations/frameworks/#jekyll) but unclear if there's one of their "start from scratch" Jekyll templates (unclear we'd want that unless we want to restart code cleanup/design) 
- Verdict: try "Jekyll admin plugin" first, then look into maybe trying this (run through checklist above, then check if any staff feedback)
### TinaCMS 
- URL: https://tina.io/
    - About
        - Tina is a fully open-source headless CMS that supports Git (Git-backed)
        - You don't need to lock your content in a 3rd-party service. Tina writes to your repository (MDX, Markdown, JSON, etc) and gives you a queryable Data Layer for fetching that content.
        - An API for your files: Easily fetch your file-based content using Tina's Data Layer. With Tina, Markdown content can be federated across other sites and applications.
        - Reviewers can manage publication workflow
        - Fully OS: Tina is licensed under Apache 2.0. It can be self-hosted or hosted on Tina Cloud. Run Tina locally and talk to your local filesystem.
        - Can Store Media assets in your repo or connect to S3, Cloudinary, etc.
        - Composable Blocks: Create reusable components that you can edit with Tina. Let your team assemble pages like a site-builder.
        - Says its performance is good (gotta test that though)
        - **Live preview while authoring/editing (plus WYSIWYG editor toolbar)**
        - Cloud version: free forever (limited to 2 users and 2 roles)
    - Questions
        - Can we serve free from our own servers w/unlimited user accounts etc? 
        - Data storage and access: "To interface with the API, you can use Tina's type-safe client for data-fetching, or manually write custom GraphQL queries and hit the API yourself." 🤔
    - Answers
        - "TinaCMS treats the filesystem as the single source of truth for you content but **still requires the Tina Data Layer to do its job**. [Tina Cloud](https://tina.io/docs/tina-cloud/) runs the Tina Data Layer for you and also handles user authentication and communication with GitHub. For users who do not wish to rely on Tina Cloud, we also offer a **self-hosted alternative** where you can **host your own Tina Data Layer and provide your own user authentication and GitHub connection**. We love the control and portability you get when storing content in Markdown and JSON files and want to extend that to the rest of the CMS"
    - Verdict: Decap sounds better than TinaCMS (works with existing Jekyll we have, no "data layer" migration/learning). It's more involved than Jekyll admin plugin and Prose.io, so we'll test those 2 first.

## Less interesting or not what we need options

### Netlify
- URL: https://www.netlify.com/
- Our context
    - Before they started charging, we used free Netlify to preview the site before publication. This was very helpful for folks who couldn't or didn't want to test changes locally (or wanted to make small edits via the GH edit file interface, but still preview to check nothing broke).
    - We could just pay to return to this, depending on cost and features. We'd probably need this to not just allow live preview, but also help authoring/editing and merging be otherwise easier for everyone here.
- This is now Enterprise junk; look at NetlifyCMS (now DeCapCMS) instead

## MeetHyde
- URL: https://github.com/bzerangue/MeetHyde
- About
    - "Meet Hyde provides a simple web interface to manage content in Jekyll powered Github Pages. Use Meet Hyde to create and edit posts and pages, manage the images in your repository and use the markdown editor to easily insert them in your pages or posts content."
    - Repo looks inactive; readme link broken; no release/not many forks/users
    - Off-GH website won't resolve
- Verdict: Project is dead : / 

### CloudCannon
- URL: https://cloudcannon.com/
- "The visual CMS that gives content teams full autonomy on your developer-approved tech stack."
- Tradeoff for lots of seamless options is a lot of developer setup and/or maintenance. Re: "Publish without bugging a developer. Build pages visually with your on-brand custom components. Share and review changes on a fully functioning preview site. Publish content live with the push of a button." Though that's similar to other tools I've looked at—maybe this is just the page's framing speaking to non-developer decision makers?
- Does work with Jekyll! (And other SGGs including Eleventy.) "Build locally with your favorite tools and frameworks, then sync changes to content editors with a Git push."
- Verdict: pricing makes this never an option (lowest is $45/month; maybe that pays for all the obsfuscated dev work?)

### Grav
- URL: https://getgrav.org/
- About
    - "Grav is a modern open source flat-file CMS"
    - OS/code on GH
    - "The Grav admin plugin provides a simple and intuitive interface to make configuration and content creation easy and enjoyable."
- Verdict: Didn't read further—too much stuff we don't need (aimed at enterprise programming)

## Future research options
Didn't spend any/much time with these, but some links in case we need to research more options in the future:
- Start with this: many options on this "Awesome Jekyll editors" page https://github.com/planetjekyll/awesome-jekyll-editors (if want to definitely stay w/Jekyll)
- Searches
    - https://www.google.com/search?client=firefox-b-1-d&q=Content+management+for+static-site+generators
    - https://www.google.com/search?q=headless+cms+for+static+site
- Visual Studio Code plugin: https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer
- Forum discussions of web-based editors for various SSGs, e.g. https://discourse.gohugo.io/t/web-based-editor/155
- DIY templating inspired by this text from somewhere on the Web: "exposing relevant text strings, image URLs and alts, etc in a separate YAML or JSON or JS file that’s just a friendly human-readable list"
- GDocs workflow: GDoc add-on for conversion to markdown https://twitter.com/kjhealy/status/1583415033421529093

## Next steps
I'll be testing out the options in the "most interesting" section, and will share if I find any of them fit our needs.
