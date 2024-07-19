---
author: eric-rochester
date: 2012-03-23 09:09:09+00:00
layout: post
slug: shell-programming-in-haskell-converting-s5-slides-to-pdf
title: 'Shell Programming in Haskell: Converting S5 Slides to PDF'
category: blog
tags:
- Research and Development
- code
- tutorial
---

Recently, I gave an introduction to Python for Chris’ and Kelly’s [GIS Workshop](http://tinyurl.com/s12gis). It was a really great experience, and we had a lot of fun learning about Python and how to use it with ArcGIS.




I did [my slides](http://people.virginia.edu/~err8n/pythongis/) for it in Markdown, using [S5](http://meyerweb.com/eric/tools/s5/). Others around the Scholars’ Lab have used [Show-off](https://github.com/schacon/showoff) to compose slide-shows in Markdown, but I wanted something a little simpler, and it had been a while since I’d looked at S5, so I used that instead.




Then Kelly asked me for a PDF version of the slideshow. Heh.




At first I thought I might have to covert it to Showoff or (worse yet) PowerPoint. But I Googled around and found that converting it wouldn’t be too difficult. The process itself would be simple, and a small shell script would make it even easier.


![](http://static.scholarslab.org/wp-content/uploads/2012/03/philosoraptor.jpg)


And then my infallible instinct to make any project ten times more interesting (i.e., _complicated_) kicked in.




I remembered that I’d just read Greg Weber’s post about [Shelly](http://www.yesodweb.com/blog/2012/03/shelly-for-shell-scripts), a library to make shell scripting a bit easier in Haskell. I’ve been seriously playing with Haskell for almost a year now, using it for most of my side-projects and for anything that no one else will have to maintain. The thought of using Haskell for shell scripting was intriguing, just because it would be another way for me to wrap my head around this very different computer language.




But I was skeptical. At first glance, Haskell doesn’t seem like a good candidate for shell programming. Typically, these scripts are quick, one-off programs, often written in anger, that need to be created quickly and nimbly (dare I say, _agily_?). However, Haskell is statically-typed, and its type system is not given to making quick changes. (Well, I’ve found that not to be quite accurate, but it is the perception.) Generally, I think that languages like Haskell are more suited to larger systems, because their power and concision really only become apparent when working with large bodies of code.




Whatever my reaction, though, a small script like this, with limited scope, seemed perfect.




## The Process




The process I found to handle the conversion was fairly simple.






1. Get a PNG screenshot of each slide using [webkit2png](http://www.paulhammond.org/webkit2png/);


2. Concatenate all of the PNGs into a PDF using the [ImageMagick](http://www.imagemagick.org/script/index.php) tool `convert`;


3. Clean up the PNGs.




With that laid out, let’s jump in.




## Preface




First, some book-keeping: I have to let Haskell know that I’m going to use string literals in places that require [Data.Text.Text](http://hackage.haskell.org/package/text) instances:




<code class="sourceCode haskell"><span class="ot">{-# LANGUAGE OverloadedStrings #-}</span></code>




Also, we have to import the [Shelly](http://www.yesodweb.com/blog/2012/03/shelly-for-shell-scripts) module.




<code class="sourceCode haskell"><span class="kw">import</span>           <span class="dt">Shelly</span></code>




And we need some other modules for working with characters, text, and other things.




<code class="sourceCode haskell"><span class="kw">import</span>           <span class="dt">Control.Monad</span> (forM_)
<span class="kw">import</span> <span class="kw">qualified</span> <span class="dt">Data.Char</span> <span class="kw">as</span> <span class="dt">C</span>
<span class="kw">import</span> <span class="kw">qualified</span> <span class="dt">Data.Text.Lazy</span> <span class="kw">as</span> <span class="dt">T</span>
<span class="kw">import</span>           <span class="dt">Filesystem.Path</span>
<span class="kw">import</span>           <span class="dt">Prelude</span> <span class="kw">hiding</span> (<span class="fu">FilePath</span>)
<span class="kw">import</span>           <span class="dt">System.Environment</span></code>




## Converting to PNGs




The first step is taking screenshots of each slide. To do that, I used the [webkit2png](http://www.paulhammond.org/webkit2png/) script.




For most things, I’m using Python 2.7, but I haven’t bothered installing `pyobjc` for it. `webkit2png` uses `pyobjc`, though, so I have to run that program with Python 2.6, which is the default Python shipped with Mac OS 10.6. I only generate the full-sized screenshot, and I output it to a filename that includes the slide number. In Bash, that would look like this:




    <code class="sourceCode bash">python2.6 <span class="ot">$(</span><span class="kw">which</span> webkit2png<span class="ot">)</span> <span class="kw"></span>
            --fullsize <span class="kw"></span>
            --filename pythongis-000 <span class="kw"></span>
            http://people.virginia.edu/~err8n/pythongis/#slide0</code>




First, let’s create a generic function to run commands in Python 2.6. In Shelly, the convention is to add an underscore to functions that throw away their output:




<code class="sourceCode haskell">python26_ script args <span class="fu">=</span> run_ <span class="st">"python2.6"</span> (script<span class="fu">:</span>args)</code>




This is kind of interesting because I wouldn’t abstract this out if I were writing this in Bash, Python, or Ruby. But adding this function felt quite natural in Haskell, which tends to encourage smaller, more generic, yet more focused, functions.




Now I’ll build on that to create a command to look for the program `webkit2png`, and if it finds it, pass it to Python 2.6:




<code class="sourceCode haskell">webkit2png_ filename url <span class="fu">=</span> <span class="kw">do</span>
script <span class="ot"><-</span> which <span class="st">"webkit2png"</span>
<span class="kw">case</span> script <span class="kw">of</span>
<span class="kw">Nothing</span>      <span class="ot">-></span> echo <span class="st">"ERROR: webkit2png not installed."</span>
<span class="kw">Just</span> script' <span class="ot">-></span> <span class="kw">do</span>
s <span class="ot"><-</span> toTextWarn script'
python26_ s [ <span class="st">"--fullsize"</span>
, <span class="st">"--filename"</span>, filename
, url
]</code>




This could be better. For one thing, this command could print an error message if `webkit2png` isn’t available. If that happens, it should probably also short-circuit the rest of the script. The way to do this in Haskell would be to return a [Maybe](http://www.haskell.org/ghc/docs/latest/html/libraries/base/Data-Maybe.html) value, which is what the `which` function above does. In this case, I know that the program is installed and on the `PATH`, so I’m being a little sloppy.




## Converting to PDF




The next step is to concatenate all the PNGs into one PDF. I’m using the `convert` program from [ImageMagick](http://www.imagemagick.org/script/index.php) to do this. This takes a list of PNG files to convert, the name of the PDF file, and generates the output.




<code class="sourceCode haskell"><span class="ot">convert ::</span> <span class="fu">FilePath</span> <span class="ot">-></span> [<span class="fu">FilePath</span>] <span class="ot">-></span> <span class="dt">ShIO</span> ()
convert pdf pngs <span class="fu">=</span> run_ <span class="st">"convert"</span> <span class="fu">=<<</span> <span class="fu">mapM</span> toTextWarn (pngs <span class="fu">++</span> [pdf])</code>




## Working on Multiple Files




Right now, `webkit2png_` (the function to download the slides as PNGs) operates on a single slide. But we’ll need to do this for every slide in the show. `downloadSlides` takes the number of slides and the base URL, and it calls `webkit2png_` for each slide. It returns a list of file names for the downloaded PNGs.




<code class="sourceCode haskell"><span class="ot">downloadSlides ::</span> <span class="dt">Int</span> <span class="ot">-></span> <span class="dt">String</span> <span class="ot">-></span> <span class="dt">ShIO</span> [<span class="fu">FilePath</span>]
downloadSlides slideCount baseUrl <span class="fu">=</span> <span class="kw">do</span>
forM_ inputs <span class="fu">$</span> (url, file) <span class="ot">-></span> webkit2png_ file url
<span class="fu">return</span> files'
<span class="kw">where</span>
baseUrl' <span class="fu">=</span> T.pack <span class="fu">$</span> baseUrl <span class="fu">++</span> <span class="st">"#slide"</span>
<span class="fu">range</span>    <span class="fu">=</span> <span class="fu">map</span> (T.pack <span class="fu">.</span> <span class="fu">show</span>) [<span class="dv">0</span><span class="fu">..</span>slideCount]
urls     <span class="fu">=</span> <span class="fu">map</span> (T.append baseUrl') <span class="fu">range</span>
files    <span class="fu">=</span> <span class="fu">map</span> (T.append <span class="st">"slide-"</span>) <span class="fu">range</span>
files'   <span class="fu">=</span> <span class="fu">map</span> (fromText <span class="fu">.</span> <span class="fu">flip</span> T.append <span class="st">"-full.png"</span>) files
inputs   <span class="fu">=</span> <span class="fu">zip</span> urls files</code>




The only wrinkle here is that the file names that are passed to `webkit2png` aren’t the ones that are output. Instead, the program appends the size of the image (thumbnail, full, etc.) and the .png extension. Since I want to operate on those files later, I have to create both the file name prefix to pass to `webkit2png` and the full file name to process later. This is unfortunate and brittle, because if `webkit2png` ever changes how it names the output files, my script will break.




This is also shell-script sloppy in another way. I should really create a temporary directory and download the PNGs there. Maybe someday.




## Putting it all Together and Getting the Inputs




All the pieces are in place. The only things left are to parse the command-line arguments, call `downloadSlides` and `convert`, and delete the downloaded PNGs.




The `main` function is the entry-point for the script. It picks three parameters from the command line and tries to make one a `Int`. If that can’t happen for any reason, it prints the usage message and exits. If the command-line is right, the script continues processing.




<code class="sourceCode haskell"><span class="ot">main ::</span> <span class="dt">IO</span> ()
main <span class="fu">=</span> shelly <span class="fu">$</span> verbosely <span class="fu">$</span> <span class="kw">do</span>
args <span class="ot"><-</span> liftIO <span class="fu">$</span> getArgs
<span class="kw">case</span> args <span class="kw">of</span>
[slides, url, pdf] <span class="fu">|</span> <span class="fu">all</span> C.isNumber slides <span class="ot">-></span> <span class="kw">do</span>
pngs <span class="ot"><-</span> downloadSlides (<span class="fu">read</span> slides) url
convert (fromText <span class="fu">$</span> T.pack pdf) pngs
echo <span class="fu">.</span> T.pack <span class="fu">$</span> <span class="st">"Wrote PDF to "</span> <span class="fu">++</span> pdf
<span class="fu">mapM_</span> rm_f pngs
<span class="fu">otherwise</span> <span class="ot">-></span> echo usage</code>




This is the usage/help message.




<code class="sourceCode haskell"><span class="ot">usage ::</span> <span class="dt">T.Text</span>
usage <span class="fu">=</span> <span class="st">"</span>
<span class="st">    usage: s5topdf.lhs [slides] [url] [output] n</span>
<span class="st">     n</span>
<span class="st">      slides is the number of slides in the slideshow.n</span>
<span class="st">      url    is the URL to access the slideshow at.n</span>
<span class="st">      output is the filename of the PDF file to create.n"</span></code>




## Running




To run this script, pass it to `runhaskell` with the right command-line arguments. For example, here’s a small [wrapper script](https://gist.github.com/2150126#file_s5topdf).




## Conclusion




Using Haskell for shell programming hasn’t been bad, but it’s not as fast as shell programming usually is, either. This is still more verbose than the bash, Python, or Ruby versions would be, and it took me (a little) longer to write. (Of course, I was unfamiliar with several of these libraries, and that slowed me down.)




However, I needed to do almost no debugging. Once I got the types to line up and `runghc` to stop complaining, it just worked. There were no bugs hiding in parts that hadn’t run yet. Based on experience with other languages, I’d expected to have to tweak the `convert` function (the second stage of processing) once I got the `webkit2png` part working (the first stage). But that wasn’t necessary. After I coaxed the complete script into printing the usage message, everything else worked flawlessly.




The bottom line: For very short one-off scripts, this seems like over-kill. For scripts that you expect to grow, Haskell plus Shelly might be more attractive.




## Second Conclusion




One of the things that attracts me to Haskell is it’s history of using [literate programming](http://en.wikipedia.org/wiki/Literate_programming). In fact, I’m using it right now. This post was generated from the script itself. I’ve posted the raw version to a [gist](https://gist.github.com/2150126), so you can compare them.




Using literate Haskell was a success. I really liked being able to interleave extended commentary with the code and to have both be part of the final product. I think it changed the nature of both the script and the post. This might not work as well for larger projects with more lines of code and multiple modules, but for a small script, it was very comfortable. I can see doing this again for descriptions of small algorithms, projects, or demos.




Also, having this file double as a script _and_ the post is kind of neat, at least for the moment.




<code class="sourceCode haskell"><span class="co">-- vim: set filetype=lhaskell:</span></code>
