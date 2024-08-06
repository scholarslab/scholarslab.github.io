---
author: amanda-visconti
date: 2024-07-20
layout: post
slug: small-command-line-customizations
title: "Making your command line a tiny bit better"
category: blog
tags:
- tutorial
- code
---

There are tons of resources for customizing how your command line looks and works, including:

* [SLab Senior Developer Shane Lin](/people/shane-lin)'s CodeLab curriculum's [resource on environment setup](https://github.com/scholarslab/CodeLab/blob/master/Week01/environment_setup.md), [command line glossary](https://github.com/scholarslab/CodeLab/blob/master/Week01/commandline.md), and the surrounding ["Week 1: Introduction to CodeLab"](https://github.com/scholarslab/CodeLab/tree/master/Week01) lesson;
* the [Oh My Zsh tool](https://ohmyz.sh/) for easy appearance and function customization; and
*  Tracy Osborn's [Really Friendly Command Line Intro zine](https://hellowebbooks.com/learn-command-line/) (free, but requires signing up for free site account to access e-reading and/or PDF download)

What follows are some small changes I made to my command line today, that I thought might be useful to others. These work if you, like me, are using a Mac, and Applications > Utilities > Terminal app as your command line tool.

![Screenshot of the author's command line app, showing the prompt now contains a rainbow emoji](/assets/post-media/2024-07-20_small-command-line-customizations.png)

## Colors & tidiness
**terminal > settings > profiles**

Choose one of the color themes on the left sidebar. Then, to the right, use the "cursor" options to set your preference (bottom of "text" tab; I use a blinking block as most easily visible). 

Under the "window" tab, deselect "restore text when reopening windows" so quitting and restarting gives me a clean screen. Use "title" if you want to put something fun at the top of your terminal window (I use "maple commands" to remind me of my pup Maple).

## Add emojis
**.zshrc**

This part only works if your shell is .zsh, which is default on newer Macs. To check, enter `echo $0` on the command line; it should print "-zsh" if you're using .zsh.

Two options for working with this file!

Option A: enter `nano /Users/wyatt/.zshrc` in the command line, except change out "wyatt" to say your username instead.

Option B: Open a Finder window and hit command-shift-period. This toggles hidden files so they're visible.

Navigate to [your computer]> Users > [your username] > .zshrc (it will appear in light gray text, possibly sorted to the bottom of the file folder). Open the .zshrc file in a text editor.

Paste the following text into the file, and save. If Terminal is already open, quit and reopen to see the changes.

```
# Customize prompt
PS1=$'\n''🌈 %~ %# > '

# alias to print the whole jekyll serve-watch command
alias aaa="bundle exec jekyll serve --watch"
```

The "PS1" line customizes the "prompt" (i.e. stuff at the start of the line where you enter commands). 

`$'\n'` tells it to always leave a blank line on top, which visually helps me when I'm scrolling back through the window to figure out why I'm getting an error message, for example. 

`'🌈 %~ %# > '` starts the prompt with the rainbow emoji (you can paste in any other emoji you'd like!), followed by the file path you're currently inside, followed by a > symbol and space (to visually help you see where the prompt ends and your past input commands start).

The "alias aaa" prompt sets things so that instead of needing to type out the command I use most often, I just type "aaa" instead. (`bundle exec jekyll serve --watch` builds and serves Jekyll sites locally, so that you can add/edit them and preview changes before pushing those to the Web.)
