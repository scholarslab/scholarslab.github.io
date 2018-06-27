# Gulp: Installation & Getting Started

## Introduction

- Date: 6/27/18 (*versions may have changed since writing this.*)

- Gulp is a JavaScript library that you can use from the command line to make your life easier when it comes to boring, repetitive code tasks. [Link to their "Getting Started" page on Github](https://github.com/gulpjs/gulp/tree/getting-started).

- We'll be using Gulp 4, which separates its command line interface (CLI) from the library itself. Basically, the commands to start tasks, print output, and see what's going on are now separate from the actual JS library functions that Gulp does.
	- Not positive, but am guessing it's so that it's easier to update functions without touching the code that affects how people interact with the functions, or vice versa.

- So, we need to install both the CLI package and the library itself.

## How to install

We'll install Gulp using Node.js and npm (aka, Node.js package manager... it just lets you download libraries from the command line). See our [README](../README.md) for links to those sites. 

Starting point:

- **If you're able to run the site locally:** awesome! That means you've got Node.js and npm running fine. Hopefully, that also means that Gulp is installed, and eventually this section will just be for an explainer article (or for those lookin' to [~go deep~ on dependencies](https://stackoverflow.com/questions/19223051/grunt-js-what-does-save-dev-mean-in-npm-install-grunt-save-dev)).

- **If you're *not* able to run the site locally:** I hate when people write things like *"Node.js and npm are prerequisites to Gulp. Once you've got those running..."* because it assumes I know what those words mean and how to get them "running". So, please come talk to me (@kbdonnally), Zoe (@ZoeLeBlanc), or Jeremy (@jeremyboggs). Personally, I hope that we're able to write an explainer like this on most of the command line stuff that we use, so I would love if the reason why I'm hearing about this is that it's outdated information since we have an article covering it. (Of course, you're still welcome to come talk to us :) ).

If you just want to DIY the command line installation:

- Here is a [slightly outdated guide](https://www.joezimjs.com/javascript/complete-guide-upgrading-gulp-4/) to installation. The commands are mostly the same, *except* that v4.0.0 can be installed without the funky Git command now.

- Instructions below lift heavily from the linked guide above.

Otherwise, keep reading:

- Open the command line (Windows: cmd.exe; Mac: Terminal) and make sure the prompt says you're in our project root folder. It should look something like this:

**Windows:**
```posh
C:\my-projects\scholarslab.org>
```
**Mac:**
```bash
$
```

I'll just be writing the commands from here out, but the prompt will still be there IRL. Also, side note: when I write two commands in a row, it's just because they go together logically; you still type them in and enter them one at a time.

***

#### Step 1:

- Make sure you don't have old versions lurking on your computer. This really matters, since the functionality in Gulp 3.9.x and below is a lot different than 4.0.

If Gulp is implemented on the site, you should only need to do the first command (which looks everywhere on your computer). The second one (with `--save-dev`) looks at your current [devDependencies](https://docs.npmjs.com/files/package.json#devdependencies) variable in `package.json`.

```bash
npm uninstall gulp --global
npm uninstall gulp --save-dev
```

#### Step 2:

- Tell our site's librarian file (aka `package.json`) to download Gulp, and write down the fact that you'll need it to do local development on the site.

- Like I mentioned above, the command line interface and the library itself are now separate, so we'll need to install both of them. To make sure anyone trying to set up a local version of our website in the future will have those installed, we'll put the `--save-dev` flag again:

For the curious: [npm's dev dependencies explainer](https://docs.npmjs.com/files/package.json#devdependencies).

```bash
npm install --save-dev gulp-cli
npm install --save-dev gulp@next
```

At the time of this writing, Gulp 4 is still new enough that the default `npm install gulp` downloads version 3.9.1, so we use the `@` after it to specify which version we want. [Explainer on that syntax linked here.](https://60devs.com/npm-install-specific-version.html)

Your `package.json` and `package-lock.json` files both will have updated from these installations. Here's what got added to my `package.json`, for reference:

```json
"devDependencies": {
    "gulp": "^4.0.0",
    "gulp-cli": "^2.0.1"
}
```

**Done!** Installation complete.