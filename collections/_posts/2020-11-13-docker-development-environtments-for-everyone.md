---
author: ammon-shepherd
date: 2020-11-13 13:27:09
layout: post
slug: docker-development-environments-for-everyone
title: Docker Development Environments For Everyone
category: blog
tags:
- research and development
- web development
- code
- tutorial
crosspost:
  - title: https://mossiso.com
    url: https://mossiso.com/docker-development-environment-for-everyone/
---
<p>One of the biggest challenges when collaborating with others in developing
software and websites is setting up the development environment. The good ol
"it works on my machine..." problem.</p> 

<p>Well, this is no panacea for development, but it does a good job of setting
up a basic environment pretty quickly.</p>

<p>You're in for a special treat, because I'm going to show you not one (1),
but two (2) different development environments; one for PHP, MySQL, Apache and
phpMyAdmin, and one for Python (Flask) and PostgreSQL with pgAdmin. Each of
these in a Docker container for ease of use.</p>

<h2>Pre-requisites</h2>

<p>For any of this to work, make sure you have <a
href="https://www.docker.com/get-started" data-type="URL"
data-id="https://www.docker.com/get-started">Docker Desktop</a> installed and
running.</p>

<p>We'll be using a terminal application for running some commands, so you'll
need some familiarity with that too.</p>

<p>Git is used to copy the files from the GitHub repo, but you can also
download them as a zip file.</p> 

<figure>
  <img src="https://mossiso.com/wp-content/uploads/2020/11/Screen-Shot-2020-11-13-at-2.46.50-PM-1024x653.png"
  alt="" />
</figure>


<h2>PMAMP</h2>

<p>We'll tackle the <strong>P</strong>hp<strong>M</strong>yadmin
<strong>A</strong>pache <strong>M</strong>ysql <strong>P</strong>hp (PMAMP)
environment first.</p>

<p>After setting this up, we'll have a place to put PHP code, a running Apache
web server, a MySQL server and a running instance of phpMyAdmin.</p>

<p>The quickest way to get this going is to download the files from this GitHub
repo <a href="https://github.com/ammonshepherd/pmamp" target="_blank"
rel="noreferrer noopener">https://github.com/ammonshepherd/pmamp</a></p>

<code>git clone https://github.com/ammonshepherd/pmamp.git</code>

<p>Change into that directory.</p>

<code>cd pmamp</code>

<p>And start the Docker containers</p>

<code>docker-compose up -d</code>

<p>You can view the website at <a href="http://lvh.me">http://lvh.me</a>.
lvh.me is just a nice service that points back to your local machine (127.0.0.1
or localhost). It makes it look like you are using a real domain name.</p>

<p>You can view phpMyAdmin at <a
href="http://pma.lvh.me">http://pma.lvh.me</a>.</p>

<p>You can even use a real domain name. Just edit the docker-compose.yml file.
There is a line like this:  </p>

<code>- "traefik.http.routers.php-apache.rule=Host(`lvh.me`, `pmamp.lvh.me`, `example.com`)"</code>

<p>Just add your domain to the list (or remove the other ones). Each entry must
use the backtick, rather than the single quotes.</p>

<p>Now you just need to let your computer know to redirect all traffic to that
domain name to itself.</p>

<p>You'll need to edit the /etc/hosts file (<a
href="https://www.makeuseof.com/tag/modify-manage-hosts-file-linux/">Linux or
Mac</a>), or c:windowssystem32driversetchosts (<a
href="https://www.howtogeek.com/howto/27350/beginner-geek-how-to-edit-your-hosts-file/">Windows</a>).
Now you can develop for any domain name right on your computer as if it were
using the actual domain name.</p>

<p>Put all of your website files in the 'www' folder and you're ready to develop!</p>

<p>Check the README at <a
href="https://github.com/ammonshepherd/pmamp">https://github.com/ammonshepherd/pmamp</a>
for more details on how it works and things to change.</p>

<p>To stop the services (turn off Apache, MySQL and phpAdmin) run</p>

<code>docker-compose down </code>

<p>in the same directory where the docker-compose.yml file lives.</p>


<figure>
  <img src="https://mossiso.com/wp-content/uploads/2020/11/Screen-Shot-2020-11-13-at-2.43.18-PM-1024x653.png" alt="" />
</figure>

<h2>pFp</h2>

<p>The set up for Python (using a Flask app) and PostgreSQL is exactly the same process.</p>

<p>Grab the files from <a href="https://github.com/ammonshepherd/pfp">https://github.com/ammonshepherd/pfp</a>.</p>

<code>git clone https://github.com/ammonshepherd/pfp.git</code>

<code>cd pfp</code>

<code>docker-compose up -d</code>

<p>You now have a running Flask app at <a
href="http://lvh.me">http://lvh.me</a>, or <a
href="http://pfp.lvh.me">http://pfp.lvh.me</a> and a running pgAdmin
application at <a href="http://pga.lvh.me">http://pga.lvh.me</a>.</p>

<p>The same trick for custom domain names applies here too.</p>

<p>And also check out the README for more details: <a href="https://github.com/ammonshepherd/pfp">https://github.com/ammonshepherd/pfp</a></p>

<p>Follow the same commands above to shutdown the Python, PostgreSQL and pgAdmin containers.</p>
