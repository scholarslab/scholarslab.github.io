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

## Makin' Recipes

- [A good article on getting started with Gulp](https://markgoodyear.com/2014/01/getting-started-with-gulp/), and what applications it might have. Includes instructions for some simple recipes, though it's from 2014 so the syntax is for v3.9.1.
	- "Recipe" = instructions for some tasks you want Gulp to accomplish.

- Kinds of tasks you might want to outsource to Gulp:
	- Auto-refresh the browser when you save a file
	- Convert SCSS to CSS and add vendor prefixes
	- Watch for any changes to files and copy those changes to the output directory (for any site whose source files differ from the compiled version of the site, like is true in Jekyll)
	- Bundle and minify stylesheets and/or JavaScripts

### Basic Setup

- All your tasks will live in a file called `gulpfile.js`. This should go in your site's root directory (probably wherever `index.html` lives).

Empty setup:

```javascript
var gulp = require('gulp'); // loads gulp module

gulp.task('default', function() {
	// code for task here
});
```

Here, we're doing 2 things:

1. Loading the `gulp` library, so we can call functions from it in the rest of our file. You might have seen similar syntax before when using jQuery.
	- In Python, the "equivalent" statement would be `import gulp`.
2. Setting up our "default" gulp task, which is exactly what it sounds like. To run it, you just have to type `gulp` in the command line (still in the root of our site directory!)&mdash;if you want to run any other task, you have to write `gulp <taskname>`. We'll look at how to do that next.

### Making a Task

- All functions referenced are from the v4.0.0 API. [Link to documentation](https://github.com/gulpjs/gulp/blob/getting-started/docs/API.md).

- Some notes on the functions I used most (mix of API definitions and own notes):

#### gulp.src

- **Syntax**: `gulp.src(globs[, options])`
- **What it does**: emits files matching a [glob](https://en.wikipedia.org/wiki/Glob_(programming)) or array of globs
- **Return value**: "a stream of Vinyl files," according to the API docs. I'm not positive what that is, but in practice it creates a data stream to send on to more Gulp functions, where we can do things like minify and concatenate our files.

*NB: anything in syntax inside of brackets means it's optional to include (hence the comma being inside the brackets, since it's not needed unless we include an additional argument). We won't be working with options much, but they're covered extensively in the API docs.*

This is how you specify where you want to pull files from, for things like, say, concatenating all of your JavaScript files into one main file, or telling Gulp to put vendor prefixes on your CSS. It can specify a directory (aka a folder), a file, or a mix of each. (See link.)

#### gulp.dest

- **Syntax**: `gulp.dest(path[, options])`
- **What it does**: writes file(s) to the directory specified in `path`. If the directory doesn't exist, this function creates it.
- **Return value**: re-emits all the data so it can be piped (sent) to additional functions/folders if needed.

#### .pipe()

- **Syntax**: `.pipe(destination)`
- **What it does**: takes a readable object and puts the information in specified destination. (Think of this function as literally like intercepting a hose.)
- Not strictly a gulp function&mdash;it's part of the [broader Node.js environment](https://www.sitepoint.com/basics-node-js-streams/)&mdash;but I didn't know what this was when I started learning Gulp, so I figured including it couldn't hurt.

#### gulp.task

- **Syntax**: `gulp.task([name,] function)`
- **What it does**: names and performs operations that can be run from the command line
- Notes on `.task()`:
	- If a name isn't specified, the task will be named the function name. If you specify a name, you can use an [anonymous function](http://helephant.com/2008/08/23/javascript-anonymous-functions/).
	- Takes several formats: you can set a task as a variable or as a statement, with the function defined in or outside of the task itself. (The syntax is pretty similar to JS event listeners.) We'll look at these in a sec.
	- **Must return something.** This can be a stream, a child process, a promise, or other things I didn't write down when I took notes; it just needs to receive a return value so the function knows when things are over.
		- This is *new in v4.0.0*.
		- It's because the instructions in a task are interpreted asynchronously (the lines of code don't have to execute one after another; they can execute at the same time&mdash;picture writing to multiple files at once). If you're not following steps one-by-one, you don't know what's done/not done until you can successfully output a final value.
		- You don't need to use the return value for anything; it just has to exist.

**Example:**

```javascript
function someTask() {
	return gulp.src(['some/glob/*.extension'])
	.pipe(pluginname());
}
someTask.description = "Metadata describing what the Gulp task (function) does"

gulp.task(someTask); // call function
```

- Recall: when write function names w/o () after, calls whole definition -> calls function
- Function only contains 1 semicolon, because it's a single statement broken onto multiple lines

#### gulp.parallel

- **Syntax**: `gulp.parallel(...tasks)`
	- `...` = spread operator
- **What it does**: takes some task names and/or functions and returns a function of composed tasks/functions.
	- In algebra terms: takes f(x), g(x) -> f(g(x))
	- All the functions inside of it execute at the same time

#### gulp.series

- **Syntax**: `gulp.series(...tasks)`
- **What it does**: like `gulp.parallel`, but does things sequentially. (Similar to JS promise chains, if you're familiar.)

The main difference between `parallel` and `series` is that `parallel` executes regardless of errors it runs into, but `series` stops if it runs into an error. This makes sense, because if you're executing all functions at once, you won't know there's been an error until the end (recall our return value requirement!); if you're executing things one after another, you'll know exactly when an error happens and will stop at that point.

#### gulp.watch

- **Syntax**: `gulp.watch(globs | array of globs[, options][, function])`
	- Function: we'll mostly use gulp.series or gulp.parallel, but technically any function is fine
- **What it does**: takes path(s) or glob(s) and executes the function or array of tasks given when the file being watched changes. (Similar in concept to the `--watch` option when running the local Jekyll server.)
	- Basic form: "if X, do Y"

**Example:**

```javascript
gulp.watch('js/**/*.js', gulp.parallel(
	'concat',
	'uglify'
));
```

In English: if a JS file anywhere inside the main `js/` directory changes&mdash;e.g. `js/main.js` or `js/partials/navbar.js`, whereas `js/*.js` would only match the first one&mdash;run the tasks named 'concat' and 'uglify' simultaneously on that file. (Concat = concatenate; uglify = compress code so it's smaller but less readable.)

### Putting it all together

Going to write out an example dummy function/task to demonstrate the places each function would actually go, since they all do pretty specific things.

```javascript
// gulpfile.js
var gulp = require('gulp');

var hello_world = () => {
	return gulp.src('path/to/file.extension')
		.pipe(pluginname())
		.pipe(gulp.dest('desired/output_dir/'));
}

gulp.task('watch_files', () => {
	return gulp.watch('path/to/file.extension', hello_world);
});

gulp.task('default', gulp.series('watch_files', function(done) {
	console.log('Hello, world!');
	done();
}));
```

#### In English:

- Don't worry about the `pluginname()` part right now. It just means that we're doing something to the files we just grabbed. (Can be as simple as capitalizing the first letter of every file.)

- Create function called `hello_world` that grabs a file with the basename `file.extension`, runs it through the plugin function, and writes the modified version of the file to the path `desired/output_dir`.

- Create a Gulp task called `watch_files` that keeps track of our `file.extension` from before, and runs the `hello_world` function every time it changes. That means that the file in the output directory will be updated every time we update the original file.

- Create our default Gulp task, where we use `gulp.series` to call the `watch_files` task, then, once that's finished running, call an anonymous function that logs the string `Hello, world!` in our console, before finishing.
	- [Stackoverflow answer on the 'done' parameter](https://stackoverflow.com/questions/33334019/what-is-the-meaning-of-using-done-as-a-parameter-in-a-javascript-function). Again, it's a consequence of asynchronicity; just tells the function we're, well, done.
	- (Not totally sure that we need the 'done' parameter if it's not `gulp.parallel`, but don't quote me on that)

#### Using the example gulpfile

Since we already have `gulp` installed from before, and we assigned the 'watch_files' task to execute using our default task, we literally just have to type one word in the command line:

```bash
gulp
```

- Once you press enter, the gulp task will continue executing (aka updating the file, or whatever you want it to do instead) until it's done, or until you type `Ctrl+C`.

## Introducing Plugins

- This is where the `pluginname()` part comes in. We're just going to install some JS modules (aka big functions) from npm the same way we did gulp. That's all the plugins are: functions that other people wrote, which we'll use to automate code tasks.

- We'll start with the one I've been most eager to implement: JavaScript concatenation! This way, I can keep all of my JS functions in nice separate files like I do with SCSS, but still only link to one main JS file in the `default.html` layout.

### Step 1: Write task goal in English

We won't know what to install until we know explicitly what our goals are. So:

1. Take all the files in my JS partials folder, found under `assets/js/_partials/*.js`.
2. Put all of those in 1 big file, and take out most of the nice spacing.
3. Write to the JS file that I'll link to in HTML pages, which I want to live at `assets/js/main.js`. (This is where the main JS file has been living 'til now, too.)
4. Update that new JS file whenever I make a change to a file in my `_partials` folder, including deleting or creating a file.

### Step 2: Find plugins matching those descriptions

Based on that, we need plugins for concatenating files, minifying/uglifying files, and cleaning the main JS folder before we re-write to it. Luckily, these are all pretty common tasks, so we can just use our handy npm command to grab them:

```bash
npm install --save-dev gulp-concat
npm install --save-dev gulp-uglify-es
npm install --save-dev gulp-clean
```

NB: there's a pretty high chance a Gulp plugin exists for what you want to do&mdash;a quick Google search for "npm gulp [thing I want]" or heading to the npm docs (e.g. [gulp-concat](https://www.npmjs.com/package/gulp-concat)) should give you an idea of usage and which plugin is most applicable to your needs.

### Step 3: Set plugins as required modules in gulpfile

Same syntax we used for the main `gulp` module:

```js
// if you use commas, 'var' only needed once

var gulp   = require('gulp'),
	clean  = require('gulp-clean'),
	concat = require('gulp-concat'),
	uglify = require('gulp-uglify-es');
```