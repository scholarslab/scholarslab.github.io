---
author: wayne-graham
date: 2010-09-24 14:27:06+00:00
layout: post
slug: synchronizing-development-databases
title: Synchronizing Development Databases
category: blog
tags:
- research and development
- code
---

As a developer, I routinely work on multiple machines during the course of a project. One of the biggest pains is working on a database-driven project is that I often need to move the data on machine X to machine Y, make changes, then move the updated data from machine Y back to machine X.

Back in the day (ok, so like last week), I would typically write a mysqldump/pgdump script that would dump the data to a tarball, then scp the data around as needed. If it were really important, I might take the time to set up rsync, or even a master/slave configuration for the data. What I found, however, is that I could "break" my development databases and I did this often, wasting time recovering from this foolishness. There had to be a better way. <!-- more -->

Turns out there is. If you've ever deployed anything to [heroku](http://www.heroku.com), you'll find they have a really neat way to allow you to synchronize your databases. From the command line, you can pull the database running on the server to your local database (and it actually doesn't matter if you're running sqlite, mysql, or postgresql locally, it just works) with:

```
heroku db:pull mysql://user:pass@localhost/mydb
heroku db:pull sqlite://path/to/my.db
```

Need to push changes to the server?

```
heroku db:push
```

Behind the scenes, heroku is using the [taps](http://rubygems.org/gems/taps) gem, so you can actually use this same technique for your local setups.

The following will walk through a "typical" (e.g. the way I have my dev system set up) use case for integrating taps in to your workflow. I use a Mac, so if you're on Linux or worse (Windows), you'll need to slightly adjust some of these directions.

The first thing you need to do is make sure that your gems are up-to-date. From a terminal, issue this command:

```
sudo gem update --system
```

Now, we need the taps gem:

```
sudo gem install taps
```

This will take a while as the library dependencies are calculated, and the documentation is generated, but you will some something along these lines:

```
devbox:~ user$ gem install taps
Building native extensions.  This could take a while...
Successfully installed json_pure-1.4.6
Successfully installed rack-1.2.1
Successfully installed sinatra-1.0
Successfully installed mime-types-1.16
Successfully installed rest-client-1.4.2
Successfully installed sequel-3.15.0
Successfully installed sqlite3-ruby-1.3.1
Successfully installed taps-0.3.12
8 gems installed
Installing ri documentation for json_pure-1.4.6...
Installing ri documentation for rack-1.2.1...
Installing ri documentation for sinatra-1.0...
Installing ri documentation for mime-types-1.16...
Installing ri documentation for rest-client-1.4.2...
Installing ri documentation for sequel-3.15.0...
Installing ri documentation for sqlite3-ruby-1.3.1...
Installing ri documentation for taps-0.3.12...
Installing RDoc documentation for json_pure-1.4.6...
Installing RDoc documentation for rack-1.2.1...
Installing RDoc documentation for sinatra-1.0...
Installing RDoc documentation for mime-types-1.16...
Installing RDoc documentation for rest-client-1.4.2...
Installing RDoc documentation for sequel-3.15.0...
Installing RDoc documentation for sqlite3-ruby-1.3.1...
Installing RDoc documentation for taps-0.3.12...
```

You will need to have this installed on each of the boxes you want to be able to push/pull to/from.

Ok, assuming you've got the taps gem installed on all the computers you want to use, you need to fire up the taps server on each box that actually responds to the push/pull requests. This is a simple [Sinatra](http://www.sinatrarb.com/) application that runs and listens for push/pull requests. To fire this up, issue the command:

```
taps server mysql://user@localhost:port/database tapsusername tapspassword
```

Let's unpack this a little. The taps server needs to know what database to connect to, and a secret user/password to use. Let's say you're running MAMP with the default mysql server and accounts running, and you want to be able to sync your Omeka database. Your connection string would look like this:

```
taps server mysql://root@localhost:8889/omeka tapuser IeEf643
 ```

Now we can test that the server is running by pointing your browser at [http://localhost:5000](http://localhost:5000). You should see something along these lines after using the username and password you set with the server:

[![](http://static.scholarslab.org/wp-content/uploads/2010/09/taps_server-300x149.jpg)](https://scholarslab.org/slab-code/synchronizing-development-databases/attachment/taps_server/)

Now this doesn't actually do anything, just ensures that you have the server up-and-running. Now to get the data loaded on another box...

Assuming you're on another computer now (and that you're not blocking port 5000 on the host machine), you issue a pull command (assuming you've already created the omeka database in the MAMP phpMyAdmin):

```

taps pull mysql://root@localhost:3306/omeka http://tapuser:IeEf643@remoteip:5000

```

Again, assuming you don't have a firewall port blocking issues, you should see the tables getting propagated on your system:

```
Receiving schema
Schema:        100% |==========================================| Time: 00:00:22
Receiving data
25 tables, 228 records
omeka_item_ty: 100% |==========================================| Time: 00:00:00
omeka_tags:    100% |==========================================| Time: 00:00:00
omeka_entity_: 100% |==========================================| Time: 00:00:00
omeka_items:   100% |==========================================| Time: 00:00:00
omeka_section: 100% |==========================================| Time: 00:00:00
omeka_element: 100% |==========================================| Time: 00:00:00
omeka_record_: 100% |==========================================| Time: 00:00:00
omeka_tagging: 100% |==========================================| Time: 00:00:00
omeka_users_a: 100% |==========================================| Time: 00:00:00
omeka_element: 100% |==========================================| Time: 00:00:00
omeka_element: 100% |==========================================| Time: 00:00:00
omeka_entitie: 100% |==========================================| Time: 00:00:00
omeka_data_ty: 100% |==========================================| Time: 00:00:00
omeka_item_ty: 100% |==========================================| Time: 00:00:00
omeka_options: 100% |==========================================| Time: 00:00:00
omeka_entitie: 100% |==========================================| Time: 00:00:00
omeka_mime_el: 100% |==========================================| Time: 00:00:00
omeka_section: 100% |==========================================| Time: 00:00:00
omeka_items_s: 100% |==========================================| Time: 00:00:00
omeka_process: 100% |==========================================| Time: 00:00:00
omeka_collect: 100% |==========================================| Time: 00:00:00
omeka_exhibit: 100% |==========================================| Time: 00:00:00
omeka_files:   100% |==========================================| Time: 00:00:00
omeka_plugins: 100% |==========================================| Time: 00:00:00
omeka_users:   100% |==========================================| Time: 00:00:00
Receiving indexes
Resetting sequences

```

You should now have a functional copy of all your data from the server machine. Now all you have to do is make your changes, then push those changes back to the server.

```

$ taps push mysql://root@localhost:8889/omeka http://tapuser:IeEf643@localhost:5000
Sending schema
Schema:        100% |==========================================| Time: 00:00:20
Sending data
25 tables, 0 records
omeka_item_ty: 100% |==========================================| Time: 00:00:00
omeka_tags:    100% |==========================================| Time: 00:00:00
omeka_section: 100% |==========================================| Time: 00:00:00
omeka_entity_: 100% |==========================================| Time: 00:00:00
omeka_items:   100% |==========================================| Time: 00:00:00
omeka_element: 100% |==========================================| Time: 00:00:00
omeka_tagging: 100% |==========================================| Time: 00:00:00
omeka_users_a: 100% |==========================================| Time: 00:00:00
omeka_record_: 100% |==========================================| Time: 00:00:00
omeka_entitie: 100% |==========================================| Time: 00:00:00
omeka_element: 100% |==========================================| Time: 00:00:00
omeka_element: 100% |==========================================| Time: 00:00:00
omeka_item_ty: 100% |==========================================| Time: 00:00:00
omeka_options: 100% |==========================================| Time: 00:00:00
omeka_data_ty: 100% |==========================================| Time: 00:00:00
omeka_entitie: 100% |==========================================| Time: 00:00:00
omeka_section: 100% |==========================================| Time: 00:00:00
omeka_mime_el: 100% |==========================================| Time: 00:00:00
omeka_process: 100% |==========================================| Time: 00:00:00
omeka_items_s: 100% |==========================================| Time: 00:00:00
omeka_collect: 100% |==========================================| Time: 00:00:00
omeka_plugins: 100% |==========================================| Time: 00:00:00
omeka_files:   100% |==========================================| Time: 00:00:00
omeka_exhibit: 100% |==========================================| Time: 00:00:00
omeka_users:   100% |==========================================| Time: 00:00:00
Sending indexes
Resetting sequences

```


## So what can go wrong?


This is a young project, so there are a few things you should know. As of the time of writing this (taps v 3.12.0), there are a few issues being worked on:



	
  * Foreign Keys get lost in the schema transfer

	
  * Tables without primary keys will be incredibly slow to transfer. This is due to it being inefficient having large offset values in queries.

	
  * Multiple schemas are currently not supported


**I strongly suggest only using this in a development setting for non-Rails projects**. Rails-based projects have a special object for table relations which help manage keys. If you're doing heavy database development, use the tools your database provides (mysqldump/pgdump) to create snapshots of your data! Script it, crontab it, download it!
