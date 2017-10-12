---
author: cory-duclos
date: 2013-03-28 15:56:09+00:00
layout: post
slug: installing-omeka-through-amazon-web-services
title: Installing Omeka through Amazon Web Services
categories:
- Research and Development
---

This set of instructions was developed, in part, during the [Digital Humanities Winter Institute](http://mith.umd.edu/dhwi/) at the University of Maryland. Under the direction of Wayne Graham, a small group set out to install [Omeka](http://omeka.org/) through [Amazon Web Services](https://aws.amazon.com/). The directions were put together collaboratively by David Kim and Cory Duclos.

Unlike other Omeka installation guides, this one does not pretend to be "easy." There are some technical abilities you will need, including being comfortable using a terminal. This guide was written using OS X, but if you are a Windows user, the Git Bash prompt that ships with [Git](http://git-scm.com/downloads) should work. Ideally, you should be doing this install on your own, private computer so that you can add security permissions for future server access.


**Step 1**: Create an amazon web server account at [aws.amazon.com](http://aws.amazon.com). This will require entering a credit card and going through a phone verification process.


[![](http://www.scholarslab.org/wp-content/uploads/2013/01/Step-1-300x149.png)](http://www.scholarslab.org/research-and-development/installing-omeka-through-amazon-web-services/attachment/step-1/)



**Step 2**: After setup, click on "My Account", then "AWS Management Console", then find the link to EC2 (Virtual Serves in the Cloud) and click on it


![](http://www.scholarslab.org/wp-content/uploads/2013/01/Step-2.2-300x149.png)


Then click "Launch Instance":


[![](http://www.scholarslab.org/wp-content/uploads/2013/01/Step-2.3-300x148.png)](http://www.scholarslab.org/?attachment_id=7118)


Select the "Classic Wizard" and click continue:


[![](http://www.scholarslab.org/wp-content/uploads/2013/01/Step-2.4-300x153.png)](http://www.scholarslab.org/research-and-development/installing-omeka-through-amazon-web-services/attachment/step-2-4/)




**Step 3:** In Classic Wizard: Choose an AMI, select _Ubuntu, 12.04.01 LTS  64Bit_:


[![](http://www.scholarslab.org/wp-content/uploads/2013/01/Step-3.1-300x26.png)](http://www.scholarslab.org/?attachment_id=7120)




**Step 4**: In Classic Wizard: Instance Details, Continue with default settings through the next three settings (1 instances; T1 Micro, etc.)


[![](http://www.scholarslab.org/wp-content/uploads/2013/01/Step-4.1-300x203.png)](http://www.scholarslab.org/?attachment_id=7121)




[![](http://www.scholarslab.org/wp-content/uploads/2013/01/Step-4.2-300x204.png)](http://www.scholarslab.org/research-and-development/installing-omeka-through-amazon-web-services/attachment/step-4-2/)




[![](http://www.scholarslab.org/wp-content/uploads/2013/01/Step-4.3-300x205.png)](http://www.scholarslab.org/research-and-development/installing-omeka-through-amazon-web-services/attachment/step-4-3/)




**Step 5**: In Classic Wizard: Instance Details - Key/Value tables: Under Value add a name for your project:


[![](http://www.scholarslab.org/wp-content/uploads/2013/01/Step-5-300x204.png)](http://www.scholarslab.org/?attachment_id=7124)




**Step 6**: In Classic Wizard: KeyPair

Create key pair, adding in a unique username (which will be used again in step 14).


[![](http://www.scholarslab.org/wp-content/uploads/2013/01/Step-6-300x202.png)](http://www.scholarslab.org/research-and-development/installing-omeka-through-amazon-web-services/attachment/step-6/)


This will cause your system to download a [.pem file](http://stackoverflow.com/questions/10733641/what-is-a-pem-file-and-how-to-use-it). Leave it where it is for now.



**Step 7**: Classic Wizard: Configure Firewall

From the drop down menu on the left, select select "HTTP" and click "add rule". It will appear on the right.


[![](http://www.scholarslab.org/wp-content/uploads/2013/01/Step-7-300x203.png)](http://www.scholarslab.org/?attachment_id=7126)




**Step 8**: Classic Wizard: Review

Click **Launch**


[![](http://www.scholarslab.org/wp-content/uploads/2013/01/Step-8-300x204.png)](http://www.scholarslab.org/?attachment_id=7127)


then **Close** in the next window.


[![](http://www.scholarslab.org/wp-content/uploads/2013/01/Step-8.2-300x156.png)](http://www.scholarslab.org/research-and-development/installing-omeka-through-amazon-web-services/attachment/step-8-2/)




**Step 9**: The easy part is over.



**Step 10**:

Back in the EC2 dashboard, click on "0 Running Instances"


[![](http://www.scholarslab.org/wp-content/uploads/2013/01/Step-10-300x149.png)](http://www.scholarslab.org/research-and-development/installing-omeka-through-amazon-web-services/attachment/step-10/)




**Step 11**:

In the subsequent panel, _RIGHT_ click on the code under "**instance**" and select '**connect**'.


[![](http://www.scholarslab.org/wp-content/uploads/2013/01/Step-11.1-300x153.png)](http://www.scholarslab.org/?attachment_id=7130)




[![](http://www.scholarslab.org/wp-content/uploads/2013/01/Step-11.2-300x153.png)](http://www.scholarslab.org/research-and-development/installing-omeka-through-amazon-web-services/attachment/step-11-2/)




**Step 12**:

Select "**Connect with standalone SSH Client**" do not close window yet.


[![](http://www.scholarslab.org/wp-content/uploads/2013/01/Step-12-300x253.png)](http://www.scholarslab.org/?attachment_id=7132)




**Step 13**:

Open the terminal (Applications/utilities/terminal for OS X users); note that your color scheme may vary from these screenshots.

Create a new directory called ec2 by running command

[code lange="bash"]
mkdir -p ~/.ec2
[/code]


[![](http://www.scholarslab.org/wp-content/uploads/2013/01/Step-13-300x170.png)](http://www.scholarslab.org/?attachment_id=7133)




**Step 14**: run

[code lang="bash"]
mv ~/Downloads/[username].pem ~/.ec2
[/code]

The username is what you generated in Amazon EC2 in step 6.

This moves the pem file to the new directory named .ec2


[![](http://www.scholarslab.org/wp-content/uploads/2013/01/Step-14-300x171.png)](http://www.scholarslab.org/research-and-development/installing-omeka-through-amazon-web-services/attachment/step-14/)




**Step 15**: Enter and run the command:

[code lang="bash"]chmod 400 ~/.ec2/*.pem
[/code]


[![](http://www.scholarslab.org/wp-content/uploads/2013/01/Step-15-300x234.png)](http://www.scholarslab.org/?attachment_id=7135)




**Step 16:** Back in your web browser, copy the line in the box labled "**Enter the following command line:**" (begins with '_ssh_') and paste it in terminal. If it tries to run by itself, you copied the return. _Hit the up arrow_ to call back the command so that it can be edited. You won't run the code exactly as you copied it.

After -i add `~/.ec2/[username].pem`

Change _amazon_ to _ubuntu_ so that it looks something like the last line here:


[![](http://www.scholarslab.org/wp-content/uploads/2013/01/Step-16-300x178.png)](http://www.scholarslab.org/?attachment_id=7137)




**Step 17:** run

[code lang="bash"]
sudo apt-get update
[/code]

to update the server libraries. This command will generate a wall of text.


[![](http://www.scholarslab.org/wp-content/uploads/2013/01/Step-17-300x173.png)](http://www.scholarslab.org/?attachment_id=7138)[![](http://www.scholarslab.org/wp-content/uploads/2013/01/Step-17.1-300x171.png)](http://www.scholarslab.org/research-and-development/installing-omeka-through-amazon-web-services/attachment/step-17-1/)




**Step 18:** run

[code lang="bash"]
sudo apt-get upgrade
[/code]

.


[![](http://www.scholarslab.org/wp-content/uploads/2013/01/Step-18-300x168.png)](http://www.scholarslab.org/?attachment_id=7140)


Type "_Yes_" when prompted.


[![](http://www.scholarslab.org/wp-content/uploads/2013/01/Step-18.1-300x172.png)](http://www.scholarslab.org/research-and-development/installing-omeka-through-amazon-web-services/attachment/step-18-1/)


Your server is up and running. Now we can shift our attention to installing all the libraries Ubuntu needs to run Omeka.


**Step 19:** Installing Server Packages

After the server is up and running, we need to get the components that are needed to run a web server installed. I'll use a short-hand here to install a bunch of packages (and their dependencies). Then tell the Apache daemon to enable the mod_rewrite module that Omeka uses to make "pretty" URLs.

NOTE: When logging onto the AWS server, you may be put into the ubuntu directory. You need to get to the main directory. Change the directory and verify by listing the files in that directory.

[code lang="bash"]
cd /
ls
[/code]

[![Screen Shot 2013-02-21 at 7.13.47 PM](http://www.scholarslab.org/wp-content/uploads/2013/02/Screen-Shot-2013-02-21-at-7.13.47-PM-300x80.png)](http://www.scholarslab.org/wp-content/uploads/2013/02/Screen-Shot-2013-02-21-at-7.13.47-PM.png)

[code lang="bash"]
sudo apt-get -y install apache2 php5 php5-xsl php5-mysql php5-curl mysql-server zip imagemagick sendmail
sudo a2enmod rewrite
[/code]

As part of the installation process, you'll be asked to create a 'root' account for the MySQL server. Just remember whatever you use for this account as you'll need it later to create the database and user for Omeka.

[![Screen Shot 2013-02-14 at 1.56.58 PM](http://www.scholarslab.org/wp-content/uploads/2013/02/Screen-Shot-2013-02-14-at-1.56.58-PM-300x239.png)](http://www.scholarslab.org/wp-content/uploads/2013/02/Screen-Shot-2013-02-14-at-1.56.58-PM.png)

After the installation and configuration has finished, you can test that the web server is running by pointing your browser at the server name you have (it'll be something like http://ec2_123.345.56.78/, whatever the server connection in the AWS panel is). If everything is correctly to this point, you should see a page in the browser that says "It Works!"



**Step 20:** Download Omeka

The default location for the web applications for Apache2 is `/var/www/`. For the purposes of this tutorial, we'll download the Omeka application and mv the files here.

Assuming you're still logged on to your server, you will need to issue the following commands to download Omeka:

[code lang="bash"]
cd /tmp
curl -O http://omeka.org/files/omeka-1.5.3.zip
unzip omeka-1.5.3
sudo mv omeka-1.5.3 /var/www/omeka
sudo chmod -R 777 /var/www/omeka/archive
[/code]



**Configure MySQL:**

Assuming you're still on the server you're wanting to run Omeka on (and you're not wanting to mess with the Amazon RDS), you will need to configure the MySQL database to create a user, a database, and allow the user to work with the database locally. You'll be writing this password to the filesystem, so whatever password you choose, you don't really need to remember what the password is, just where it's at. For this reason, I recommend using a password generator (I use [Strong Password Generator](http://strongpasswordgenerator.com/) for these purposes). Whatever the password is, you will need to replace where I type '[your password]' in the following examples (and don't type the '$'or 'mysql'; these just differentiate the difference between the terminal and mysql prompts):

[code lang="bash"]
$ mysql -u root -p
Enter password:
mysql> create database omeka;
Query OK, 1 row affected (0.00 sec)
mysql> grant usage on *.* to omeka_user@localhost identified by '[your password]';
Query OK, 0 rows affected (0.00 sec)
mysql> grant all privileges on omeka.* to omeka_user@localhost;
Query OK, 0 rows affected (0.00 sec)
[/code]

Now that the database is set up, we need to let Omeka know where to go to connect to the database.



**Step 22:** Editing the Omeka `db.ini` file

If you went to the Omeka path on your system right now (e.g. http://yourEC2.instance/omeka), you'll notice that there's a big error on the page. We need to tell Omeka where to look for the database connection, and the tools for doing this can be kind of scary on the terminal.

First get into you Omeka folder and find the db.ini file

[code lang="bash"]
cd /var/www/omeka/
ls
[/code]

Then you can get in to edit this file using the sudo vim command.

[code lang="bash"]
sudo vim db.ini
[/code]

You'll see the contents of the db.ini file, and instructions to replace the X's with your own information. This can be done by pressing the i, which will allow you to insert your own text as follows:

[code lan="html"]
host = "localhost"
username = "omeka_user"
password = "(password generated in step 20)"
dbname = "omeka"
[/code]

[![Screen Shot 2013-02-21 at 7.24.47 PM](http://www.scholarslab.org/wp-content/uploads/2013/02/Screen-Shot-2013-02-21-at-7.24.47-PM-300x226.png)](http://www.scholarslab.org/wp-content/uploads/2013/02/Screen-Shot-2013-02-21-at-7.24.47-PM.png)
Leave everything else the same. Hit control + c to exit the edit mode and :wq to write and quit out of the program.

Now restart apache

[code lang="bash"]
sudo service apache2 restart
[/code]

In your browser navigate to  http://yourEC2.instance/omeka and you should be ready to install.



**Step 23:** Possible Error
It may be the case that you see an error about the mod_rewrite not being activated. To fix this, do the following:

[code lan="bash"]
cd /etc/apache2/sites-available/
sudo vim default
[/code]

Now you'll see the default file. You need to change the allow from to all under <Directory /var/www/> using the vim commands you used to change the db.ini file (see image)

[![Screen Shot 2013-02-21 at 7.38.21 PM](http://www.scholarslab.org/wp-content/uploads/2013/02/Screen-Shot-2013-02-21-at-7.38.21-PM-275x300.png)](http://www.scholarslab.org/wp-content/uploads/2013/02/Screen-Shot-2013-02-21-at-7.38.21-PM.png)

Now you need to change the .htaccess file in the Install directory

[code lang="bash"]
cd /var/www/omeka/install
sudo vim .htaccess
[/code]

Find the instruction in this document which tells you to uncomment a line and add your own directory. Make the changes using the vim commands from above.

[ ](http://www.scholarslab.org/wp-content/uploads/2013/02/Screen-Shot-2013-02-22-at-9.26.51-AM.png)

[
](http://www.scholarslab.org/wp-content/uploads/2013/02/Screen-Shot-2013-02-22-at-9.27.57-AM.png)[![Screen Shot 2013-02-22 at 9.26.51 AM](http://www.scholarslab.org/wp-content/uploads/2013/02/Screen-Shot-2013-02-22-at-9.26.51-AM-300x224.png)](http://www.scholarslab.org/wp-content/uploads/2013/02/Screen-Shot-2013-02-22-at-9.26.51-AM.png)


[![Screen Shot 2013-02-22 at 9.27.57 AM](http://www.scholarslab.org/wp-content/uploads/2013/02/Screen-Shot-2013-02-22-at-9.27.57-AM-300x222.png)](http://www.scholarslab.org/wp-content/uploads/2013/02/Screen-Shot-2013-02-22-at-9.27.57-AM.png)


Then restart apache.

[code lang="bash"]
sudo service apache2 restart
[/code]

Then navigate in your browser back to your site and you should be able to run the install.



**Step 22:** Adding Plugins

To add a plugin, navigate to the plugins folder in terminal, copy the link for the plugin download, and run the following commands. This will download a .zip file, unzip the file, and delete the original .zip file. The plugin should then be available in your omeka. The code below shows how to install the Neatline plugin, but this could work for any other plugin.

[code lang="bash"][/code]


cd /var/www/omeka/plugins
sudo curl -O http://omeka.org/wordpress/wp-content/uploads/Neatline-1.1.2.zip
sudo unzip Neatline-1.1.2.zip
sudo rm Neatline-1.1.2.zip

[code][/code]
