---
author: ammon-shepherd
date: 2015-05-19 14:05:36+00:00
layout: post
slug: can-you-get-the-data-out-of-this-file
title: Can you get the data out of this file?
categories:
- Geospatial and Temporal
---

That was the question I was asked by a student who came into the Scholars' Lab this semester.

My answer is always, "Yes. That can be done." Wether I know how at the time is a different matter, but that's the beauty of the Lab, the opportunity to learn new things.


# The Challenge


A student came in with a database file and the need to view the data in the file. At first I thought it would be easy to pull the data into a database and export it out as a spread sheet. Once I got a copy of the SQL file, I realized it would be a bit more work than firing up phpMyAdmin to import the SQL file and export as a CSV or Excel file.

First of all, the SQL file was a database dump from PostgreSQL. Second, it was a PostGIS data file.


# Solution


To be able to view the data in the file I needed to set up a PostgreSQL database with PostGIS, and then use QGIS (a free, cross-platform alternative to ArcMaps) to actually visualize the geographic data stored in the SQL file.


## PostgreSQL


Installing PostgreSQL is the first step. There are many ways to do it.


### For Windows, Linux, etc





	
  * From PostgreSQL themselves: [http://www.postgresql.org/download/](http://www.postgresql.org/download/)

	
  * Handy tutorial for different OS's: [https://www.codefellows.org/blog/three-battle-tested-ways-to-install-postgresql](https://www.codefellows.org/blog/three-battle-tested-ways-to-install-postgresql)




### For the Mac:


Since I'm using a Mac and had some issues, I'll detail that installation below.



	
  * The easiest: [http://postgresapp.com/](http://postgresapp.com/)

	
  * The next easiest: Use homebrew,`brew install postgresql`

	
  * The hardest: Install from source, but that's not really needed. The PostgreSQL site has a list of install options, including the two above: [http://www.postgresql.org/download/macosx/](http://www.postgresql.org/download/macosx/)


I went the homebrew way because of a required extension that doesn't get installed with the PostgreSQL app or other means.


#### Installing



    
    <code class="hljs">brew install postgres postgis
    </code>


Follow the instructions for starting and stoping the PostgreSQL server, with the addition of making life easier by installing and using `lunchy`.

    
    <code class="hljs">brew install lunchy
    </code>


Now you can start and stop PostgreSQL with `lunchy start postgres` and `lunchy stop postgres`

We'll also need to install pgrouting. This looks like it can be installed with homebrew, but it didn't actually install for me. I ended up installing from source.

Using this StackExchange answer as a guide, install pgrouting: [http://gis.stackexchange.com/questions/26330/issues-with-installing-pgrouting-in-mac](http://gis.stackexchange.com/questions/26330/issues-with-installing-pgrouting-in-mac)

There is a bug in the main stable version of pgrouging, so you'll need to grab the development branch from their github repo.

[https://github.com/pgRouting/pgrouting/archive/develop.zip](https://github.com/pgRouting/pgrouting/archive/develop.zip)

Download and unzip that file.

Enter the directory created by unzipping, and do the following steps:

    
    <code class="hljs">mkdir build
    cd build
    cmake -DPOSTGRESQL_INCLUDE_DIR='/usr/local/Cellar/postgresql/9.4.1/include/server' -DBoost_DIR='/usr/local/Cellar/boost/1.57.0' ..
    make
    sudo make install
    </code>




#### Enabling the Extensions


After installing and starting PostgreSQL, you'll need to create/install/enable the extensions.

Log into the PostgreSQL server:

    
    <code class="hljs">psql postgres
    </code>


View which extensions are already installed by typing `\dx` on the PostgreSQL command prompt.

Create an extension by typing `create extension <extension name>`, replacing `<extension name>` with the name of the extension, of course.

You'll need to have the following extensions installed:



	
  * plpgsql

	
  * hstore

	
  * intarray

	
  * pgcrypto

	
  * postgis

	
  * pgrouting


Installing the extensions this way lets you see if there are any problems before trying to import the SQL file.


## Import the SQL file


First set up a role/user and a database.

    
    <code class="hljs">createdb dbname
    createuser username
    </code>


I needed to change the name of the user in the SQL file to match the database/username in the PostgreSQL database, or I could have created a database/user with the same name as in the SQL file. But to change all of the names I did a one line perl call:

    
    <code class="hljs">perl -pi bak -e 's/alec/test1/g' 20130930_dbdump_Alec.sql
    </code>


This will change all instances of 'alec' to 'test1' in the file, and create a backup of the file.

Now you can import the file by running:

    
    <code class="hljs">psql database < filename
    </code>




## QGIS


QGIS is a free alternative to ArcMaps. Install from their website. Installation is pretty straight forward.[http://qgis.org/en/site/forusers/download.html](http://qgis.org/en/site/forusers/download.html)


### Connect to PostgreSQL database





	
  * A tutorial: [http://gis-techniques.blogspot.com/2012/04/how-to-connect-spatial-databasepostgis.html](http://gis-techniques.blogspot.com/2012/04/how-to-connect-spatial-databasepostgis.html)


To connect to the PostgreSQL database, you'll actually add the database as a layer. Go to the Layer menu -> Add Layer -> Add PostGIS Layers.



[![Screen Shot 2015-05-19 at 12.56.01 PM](http://static.scholarslab.org/wp-content/uploads/2015/05/Screen-Shot-2015-05-19-at-12.56.01-PM-300x144.png)](http://static.scholarslab.org/wp-content/uploads/2015/05/Screen-Shot-2015-05-19-at-12.56.01-PM.png)

Under the Connections section, click on the New button.

    
    <code class="hljs">Name = anything you want
    Host = localhost
    User = the same as you used above in the createuser command
    </code>


[![Screen Shot 2015-05-19 at 12.56.21 PM](http://static.scholarslab.org/wp-content/uploads/2015/05/Screen-Shot-2015-05-19-at-12.56.21-PM-217x300.png)](http://static.scholarslab.org/wp-content/uploads/2015/05/Screen-Shot-2015-05-19-at-12.56.21-PM.png)



Now select the tables you need and click the "Add" button.

[![Screen Shot 2015-05-19 at 12.56.38 PM](http://static.scholarslab.org/wp-content/uploads/2015/05/Screen-Shot-2015-05-19-at-12.56.38-PM-300x193.png)](http://static.scholarslab.org/wp-content/uploads/2015/05/Screen-Shot-2015-05-19-at-12.56.38-PM.png)



Enjoy multiple layers on your map!
