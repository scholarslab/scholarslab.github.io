---
author: wayne-graham
date: 2012-03-19 10:04:42+00:00
layout: post
slug: wordpress-pharma-hack
title: WordPress Pharma Hack
category: blog
tags:
- research and development
- web development
---

A few weeks ago I was walking to my car and was copied on an email from the director of the IT department for the UVa Library:


> It appears that website redacted has been commandeered…hacked.. Beware if you use windows as there is a malware service running….


Just the kind of email you love to get! By the time I got home (takes me about an hour and a half), there had been a flurry of emails between the company that had a support contract for the site, and various people who were reacting. By the time I actually had a chance to sit down, the site URL had redirected the site to UVa's home page as a stop-gap measure to not expose the site's users to malware.

I started taking a look at what had happened and apparently the hackers had exploited Wordpress by posting a comment in such a way that Wordpress wrote a file to the filesystem, when then injected code (in base64) everywhere it found the string '`<?php`'. Ah yes, pharma hack. It would be brilliant if it weren't so diabolical. Some clarification on what is actually going on here. There are a few levels of compromise that systems administrators worry about; web defacement and server compromise. The latter is really serious, but outward facing defacement is really really the Internet equivalent of someone tagging your fence. What these hacks are designed to do is abscond with your Internet search results. This is quite a different attack vector than say brute-forcing passwords on a Wordpress site. If you know a little about what you're doing, this is actually pretty straight forward. In fact, you can script these things pretty easily; this example was written by a hacker over a weekend:



With hacks like this, attackers usually have much darker intentions (e.g. there's a high probability you use the same password for Work/Facebook/Twitter/Google as you do for your Wordpress).

Let me take a second here to briefly pause say that I'm not trying to scare anyone in to shutting down their WordPress site. I will, however, say that annoyances like these go along with the maintaining a WordPress site; sooner or later, you will have to deal with with the fact that some script kiddy found an attack vector to leverage your WordPress site for their purposes. WordPress a great tool, lots of people use it, but there are a lot of moving parts in the platform, and there are always 'issues' that pop up (issues in PHP itself, plugins, themes, etc.). If you are really concerned about this, you may like to take a look at an alternative like [Jekyll](http://jekyllrb.com/); it's much harder to inject content in to static files than it is a dynamic framework based on PHP (or Ruby, Python, etc.).

Getting back to what was going on with our compromised site, I considered what I saw as a "those damn kids" attack, and not actually commandeering the site . I then set about cleaning up the Wordpress installation to move it to a server environment that I controlled and could make sure that the server had some elements to make this style of attack just a little harder to do.

As a former systems administrator who used to actually read the daily security bulletins put out by Windows, the various Linux distributions, my approach to these recovery is a little more dramatic than what [various blogs suggest](http://blog.sucuri.net/2010/05/simple-cleanup-solution-for-the-latest-wordpress-hack.html) to clean up. If we're using the tagging-the-fence metaphor, these posts show you how to paint over the graffiti. Since hackers can be clever little buggers, and I've found on at least one occasion that the hackers left something crazy and 'simple' to fix to mask what they were really doing (that time it was setting up a store-and-forward server for pornography), I adopted the equivalent of burning down the fence and building a new one when I see this happen.

Caveat: I spend almost [all day in a terminal](https://scholarslab.org/dh-developer/customizing-bash/), so the code I show to back-up and massage the code is going to use the terminal. If this really isn't your cup-of-tea, there are generally [GUI](http://en.wikipedia.org/wiki/Graphical_user_interface) tools that will do the same (e.g. [PHPMyAdmin](http://www.phpmyadmin.net/home_page/index.php)) which, if you are on a hosted environment, most likely this tool is there. I just say this in case you are really not comfortable (or have shell access to the server) that you can use the same techniques, but use the tools available.

The basic workflow I was using was to get all the data out the MySQL server, and the WordPress theme that was 'infected' on to my local machine, download a fresh version of WordPress, import the WordPress data, reinstall any needed plugins, and the theme the site was using. For the particular hack in question, I actually had remote access (on a non-default port) to the MySQL server, so I could actually pull the data directly from the machine to my computer ([as a gist](https://gist.github.com/883062))

```
mysqldump -h [mysql server] --port=[port number] -u [username] -p [database name] | gzip -c | cat ~/Desktop/`date +%Y-%m-%d-%T`.sql.gz
```

If you aren't comfortable with a Terminal commands, this can be a little scary. Basically this is a set of chained commands ([Pipes and Redirects](http://www.westwind.com/reference/os-x/commandline/pipes.html)) that dump out the entire database ([mysqldump](http://dev.mysql.com/doc/refman/5.1/en/mysqldump.html)), compress the output ([gzip](http://www.gzip.org/)), and write the compressed output to a file on my Desktop with a current timestamp ([cat](http://en.wikipedia.org/wiki/Cat_(Unix))). As an example, my output file with all of the WordPress data was named 2012-02-28:20:40:02.sql.gz.

Now to download the latest version of Wordpress and set up a database named hack and inject the data from the remote server in to the newly created database.

```

gunzip ~/Desktop/2012-02-28:20:40:02.sql.gz

mkdir -p ~/public_html/hack && cd ~/public_html/hack

curl -O http://wordpress.org/latest.tar.gz

tar xvf latest.tar.gz

mysqladmin create hacked

mysql -u [local mysql root] -p hacked < ~/Desktop/2012-02-28:20:40:02.sql

```

There is a lot here, and worth explaining briefly. These commands




1. Decompress the SQL file from the server that sits on the Desktop;


2. Create a new directory in the user's public_html directory named hack (creating public_html/hack if it does not already exist);


3. Changes the terminal in to the newly created directory (you can chain multiple commands together with the && operator)


4. Downloads the latest version of WordPress with [cURL](http://en.wikipedia.org/wiki/CURL);


5. Creates a new database on you local machine named "hacked" using the [mysqladmin](http://dev.mysql.com/doc/refman/5.5/en/mysqladmin.html) command;


6. Connects to the local MySQL server and inserts the contents of the SQL file generated earlier


If you are running some other type of system, you may need to change the location of where you put WordPress, but the rest should be pretty much the same. You can now log on to the WordPress system locally (e.g. http://localhost/~wsg4w/hacked/wordpress/wp-admin/) and reinstall your plugins. The one thing that will take a little bit of effort would be cleaning up the theme you are using if  you have made any significant changes to a theme (and not it in a [revision control system](http://en.wikipedia.org/wiki/Revision_control)), you will need to clean out the hack additions.

```
find ./ -name "*.php" -type f |  xargs sed -i 's#<?php /**/ eval(base64_decode("aWY.*?>##g' 2>&1
find ./ -name "*.php" -type f |  xargs sed -i '/./,$!d' 2>&1
```

These lines use the [find](http://en.wikipedia.org/wiki/Find) command to find PHP files and then use [sed](http://www.grymoire.com/Unix/Sed.html) to remove any of the crazy base64_decode from your files.  If you don't already have your theme in an SCM, this is a good time. [Github](https://github.com/) is a good option, but if you want a private repository, you can also check out [Bitbucket](https://bitbucket.org/). This will make things easier in the future...

After you have everything cleaned up on your local machine, it's time to push it back up to the server. There are a few ways to go about doing this. If I'm doing this on a regular basis, I typically use [rsync](http://en.wikipedia.org/wiki/Rsync), but if it's a one time deal, I use [scp](http://en.wikipedia.org/wiki/Scp). If you only have FTP access, I highly recommend the [lftp](http://lftp.yar.ru/) utility.

```

cd ~/public_html/

scp -R hacked username@servername:~/path/to/wordpress/install

```

This should put things back on your server to a clean state for your WordPress site. You may want to also make a backup of the file contents occasionally too. This is a script I use to backup servers, modified to look at WordPress:

```

#! /bin/bash
cd path/to/wordpress
tar cvpzf backup.tgz --exclude=/backup.tgz .

```


## Postmortem


Having a WordPress site compromised can be kind of embarrassing. There are a lot of factors that can go in to the attack vectors that can affect your site. Even if  you regularly update the versions of WordPress, the plugins, etc., you can find yourself in a situation, especially on a shared server, where someone you don't even know about has left their site open to an attack that compromises your site. There really isn't a good way to keep this from happening, but what you can do is make it harder for these types of attacks to success. Here are some general guidelines to keeping your WordPress site Cialis free:



	
  * Keep Wordpress updated;

	
  * Disable plugins you aren't using; better yet, delete them off the server;

	
  * Keep your theme in an SCM;

	
  * Disable comments (this is one of the most common attack vectors); if you really want them, you can also use [IntenseDebates](http://intensedebate.com/) or [Disqus](http://disqus.com/)

	
  * Set your file permissions properly;


If this is happening to you more than you'd like, I would also suggest taking a look at some of the static web generators. We use [jekyll](http://jekyllrb.com/) for the [Praxis webiste](http://praxis.scholarslab.org); [SecondCrack](https://github.com/marcoarment/secondcrack) by Maro Arment if you like PHP, and [Growl](https://github.com/xfire/growl/) if you prefer Python.
