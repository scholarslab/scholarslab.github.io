---
author: ammon-shepherd
date: 2022-05-19
layout: post
slug: understanding-file-paths 
title: Understanding File Paths 
category: essay
tags:
- makerspace
- web development
- tutorial
---
<style>
  img {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    border-radius: 4px;
  }
  .big-link {
    background-color:#5BD7DE !important;
    padding: .6em;
    line-height: 1em;
  }
  .big-link:hover {
    background-color: #141e3c !important;
    color: #fff;
  }
</style>

![Photo by Denys Nevozhai on Unsplash](/assets/post-media/paths/denys-nevozhai-k5w21D7PgMk-unsplash.jpg)

# File paths
Understanding which file path to use in your HTML, CSS, PHP, Python, or other web development language can be pretty confusing. Like driving in L.A. if you're from [ Swoope, Virginia ](https://en.wikipedia.org/wiki/Swoope%2C_Virginia). 

While developing a website, you'll invariably type the path to an image or file incorrectly. So how do you know which path is correct?

All file paths boil down to two types; *Absolute* file paths and *Relative* file paths.

In basic terms, 


- Absolute Path
  - The path begins at the computer's root directory (or web root directory for HTML). If the path begins with a forward slash / or the full HTTP protocol, then it is an absolute path.

      <code>&lt;link rel="stylesheet" href="/css/style.css"></code>

      <code>&lt;a href="http://coolwebsite/html/index.html">HTML Page&lt;/a></code>

      <code>&lt;?php include '/var/www/coolwebsite/common/header.php'; ?></code>

      <code>&lt;?php include $_SERVER['DOCUMENT_ROOT'] . 'common/header.php'; ?></code>

- Relative Path
  - The path is relative to the folder where the file lives. If the path begins with a double period .. or NO forward slash /, then it is a relative path.

      <code>&lt;link rel="stylesheet" href="css/style.css"></code>

      <code>&lt;a href="html/index.html">HTML Page&lt;/a></code>

      <code>&lt;?php include 'common/header.php'; ?></code>

      <code>&lt;?php include 'gopher.php'; ?></code>

I created a more in depth tutorial for understanding file paths, both with HTML and PHP in mind.

You can check it out here: <a class="big-link" href="https://ammonshepherd.github.io/understanding-file-paths/">Understanding File Paths for Web Developers</a>


If you have any questions or comments, feel free to reach out to me directly at <a href="mailto:ammon@virginia.edu">ammon@virginia.edu</a>