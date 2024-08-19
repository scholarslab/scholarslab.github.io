---
author: wayne-graham
date: 2009-12-16 14:40:05+00:00
layout: post
slug: large-files-and-omeka
title: Large Files and Omeka
category: essay
tags:
- research-and-development
---

This issue came up for a friend of the Scholars' Lab today on Twitter, but it's hard to answer in 140 characters. It's a question about allowing for larger file sizes in Omeka and there are a few ways to handle this.  (Because we want our new blog to be a combination of thoughtful essays on digital scholarship and quick answers to real-world technical problems, I thought I'd post here.)

Since Omeka runs on PHP, this is actually a PHP configuration issue and not something you can currently tweak in Omeka. Basically, you just need to tell PHP to allow larger files sizes that are larger than the default. A very easy way to do this is to edit the .htaccess file that Omeka ships with along the following lines:

```
php_value upload_max_filesize 20971520
php_value post_max_size 20971520
```

I'll note here that doing things this way only affects your Omeka project. Another way to go about this is to add the above to the Apache configuration that defines from where Omeka should be served. For example:

```

<VirtualHost *:80>

ServerName www.coolomeka.org
DocumentRoot /var/www/omeka

<Directory "/var/www/omeka">
    Options FollwSymLinks
    AllowOverride All
    Order allow,deny
    Allow from all
</Directory>

    ErrorLog logs/omeka_error_log
    TransferLog logs/omeka_transfer_log

    php_value upload_max_filesize 20M
    php_value post_max_size 20M
</VirtualHost>
```

Lastly, you can edit the php.ini file (usually in /etc/php.ini or /etc/php5/apache2/php.ini). Just do a search in the file and change the following settings:

```
  memory_limit = 32M
  post_max_size = 20M
  upload_max_size = 20M
```

You typically don't need to reload Apache (as long as you did not edit the Apache configuration file) to get these settings to work.

For more info on this, check out these resources



	
  * [Description of core php.ini directives](http://php.net/manual/en/ini.core.php)

	
  * [PHP Upload Configuration](http://www.radinks.com/upload/config.php)

	
  * [PHP Directives Related to (Large) File Upload](http://www.developershome.com/wap/wapUpload/wap_upload.asp?page=php2)


