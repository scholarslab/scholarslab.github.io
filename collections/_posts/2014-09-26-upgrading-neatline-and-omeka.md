---
author: ammon-shepherd
date: 2014-09-26 11:53:08+00:00
layout: post
slug: upgrading-neatline-and-omeka
title: Upgrading Neatline and Omeka
category: essay
tags:
- research and development
- neatline
- omeka
- code
- tutorial
---

One of my first projects here at the Scholars' Lab was to help update some Omeka/Neatline sites. These are sites we keep around as examples of our [Neatline](http://neatline.org) plugin for [Omeka](http://omeka.org), and they were a few versions behind. While a pretty easy process to do by hand, having a script to take care of it makes it even easier for future upgrades, too. I call the script ONUS (Omeka Neatline Upgrade Script). While the script was written specifically for our purposes, it may be useful if you have an Omeka install using the Neatline plugin. It can be found here on github.com, feel free to use at your own risk.

[https://github.com/scholarslab/onus](https://github.com/scholarslab/onus)

I perhaps went a little overboard and made the script pretty robust. I was going to take the opportunity to learn some Ruby, but ended up writing it in Bash. What is Bash (or ksh or zsh or tcsh)? Bash is a shell. When you open a terminal, or command line, what you type in is called a shell. It takes your commands and does stuff with them. They are all basically the same, but have various things they do better than others, hence the great number of them. A shell script is basically a document that has a list of commands that the shell can run. Most shells allow for some logic, like if/while/case/for statements, variables, functions, etc. Usually very basic programming. (A good tutorial for learning the command line in general is found here: [http://cli.learncodethehardway.org/book/](http://cli.learncodethehardway.org/book/))

I thought I could write the script very quickly in Bash since I know that language relatively well (much better than Ruby), but one thing I learned is that Bash does not handle comparing floating point numbers. Floating point numbers is a fancy way of saying numbers with decimal points, like version numbers, (ex. 2.2.1 and 1.3.1). Bash does not have an easy, default way to compare these numbers like most programming languages (like Ruby, Python, and Perl), and even other shells (like ksh and zsh).

In retrospect it probably would have been better to write this in Ruby or some "real" programming language from the get go, but alas I didn't have the need for comparing floating point numbers until most of the logic was already figured out and coded in Bash.

I'll run through how to use the script as well as go through some of the logic for working with floating point numbers in Bash.


## Running the Script


The script runs the commands needed to upgrade Omeka from 1.5.x to the latest version, and Neatline from 1.x.x to the latest version.

You would run this script on the server/computer where the Omeka installation is found. You can pass the path to the Omeka install to the script, or it will prompt you for it.

The script can take four flags/switches/options:
```
-L : Upgrade Omeka and Neatline to the latest and greatest versions. (Note: "Pre-2.0 versions of Neatline can't be upgraded directly to version 2.2. Upgrade to version 2.0 first!")
-n [number]  :  Where [number] is a valid Neatline tag from https://github.com/scholarslab/Neatline. This will upgrade Neatline to the specified version number. Note, all Neatline version have three digits x.x.x.
-o [number]  :  Where [number] is a valid Omeka tag from https://github.com/omeka/Omeka. This will upgrade Omeka to the specified version number.
-s  :  Do not upgrade Omeka
-t  :  Do not upgrade Neatline
```

### Basic Usage:

* Download the onus.sh file from the github repo. It doesn't really matter where you put this script, but your home directory is a good location.

* On the command line, enter the directory where the file is located and type the following command. This will allow you to execute the script.

```
chmod u+x onus.sh
```

* If needed, change any default variables at the top of the file, ex. paths to MySQL, PHP, and git. The default is to use your account's system default. This may be different based on your system, if for example you are testing with [MAMP](http://www.mamp.info/de/) on your Mac computer.

```
MYSQL="/path/to/bin/mysql"
MDUMP="/path/to/bin/mysqldump"
MADMIN="/path/to/bin/mysqladmin"
PHP="/path/to/bin/php"
```

* Change one 'sed' line if needed, to work with GNU/Linux. Remove the empty double quotes after -i

```
sed -i "" "80s/.*/${migrate}/" ${path}/plugins/Neatline/migrations/2.0.0/Neatline_Migration_200.php
```

* Run the script by typing the following at the command promp; make sure to type the period ( . ) before the forward slash ( / ) and then the script name.

```
./onus.sh /path/to/omeka/install
```

This will upgrade Omeka and Neatline to the next available major release. Run the script as many times as needed to get to the latest version.

For more examples, please visit the GitHub page at [https://github.com/scholarslab/onus](https://github.com/scholarslab/onus)

NOTE: One important thing to be aware of is when you  upgrade from 1.5.x versions of Omeka and 1.x.x versions of Neatline the Neatline functionality will be broken until Omeka and Neatline are upgraded to the very latest stable versions. So if you plan on using this script, then plan on upgrading to the very latest versions!

## Getting Back Neatline Exhibits After Upgrading to 2.0.0


We noticed one big problem when upgrading sites with versions of Omeka and Neatline previous to 2.0.0 by hand. This section will detail the steps to fix it by hand for demonstration purposes, but they are included in the script.

Omeka and Neatline both go through some significant database (and code) changes from 1.5.x to 2.x.x. The biggest seemed to be that the upgrade script for Neatline didn't "take" and needed to be done manually. For these sites, the Neatline Exhibits did not get transferred from the old database table to the new table.

The first step is always to make a backup copy of the database and files. That way if anything goes awry, you can easily put things back together.

* To back up the database, simply take a MySQL dump.

```
mysqldump -uUserName -pPassword databasename > databasename.sql
```

Do this in the main directory of Omeka. Then make a zip file of the entire Omeka directory.

```
zip -r omeka-backup.zip /path/to/omeka/
```
* Next, deactivate any plugins, including Neatline and NeatlineMaps. One of the big changes with the 2.x.x version is that NeatlineMaps is rolled into Neatline.


* Grab a 2.0.x version of Omeka. Either do this with github

```
git clone https://github.com/omeka/Omeka NewOmeka
```

or with a zip file.

```
wget http://omeka.org/files/omeka-2.0.4.zip
unzip omeka-2.0.4.zip
```
* Add the 2.0.0 version of Neatline plugin into the NewOmeka/plugins directory, along with any other upgraded plugins you may need. NeatlineText, NeatlineSimilie and NeatlineWaypoints may be needed if you used that functionality in the previous version.


* Copy the db.ini file from the old installation to the NewOmeka/ directory.


* Now load the admin page for NewOmeka/ in the browser: http://domain/NewOMeka/admin/. Upgrade the database and login to upgrade and reactivate the Neatline plugin and other plugins as needed.


* You may notice things go smoothly, except the existing Neatline exhibits may not transfer. To get them into the new database tables, add the following two lines at line 80 in the NewOmeka/plugins/Neatline/migrations/2.0.0/Neatline_Migration_200.php file:

```
$fc = Zend_Registry::get("bootstrap")->getPluginResource("FrontController")->getFrontController();
$fc->getRouter()->addDefaultRoutes();
```
* Run the following database command to allow the background process to run:

```
mysql -uuser -ppassword database --execute="UPDATE prefix_processes SET status='starting' WHERE id=1;"
```
* Run the following php command to get the processes started.
```
/path/to/bin/php /path/to/NewOmeka/application/scripts/background.php -p 1
```
* Finally, if everything in the new version looks good, you can remove the old and replace it with the new.
```
mv /path/to/omeka/ /path/to/old-omeka/
mv /path/to/NewOmeka /path/to/omeka
```


## Some Script Logic


Initially, I used the script to upgrade both Omeka and Neatline to the next higher version, going through every single minor version incrementally. When upgrading from Omeka 1.5.1 and Neatline 1.0.0 to the latest versions (2.2.2 for Omeka and 2.3.0 for Neatline), I had to run the script over 20 times!

That was way too labor intensive and time consuming, so next I added some logic to just skip to the next major release. That dropped the times needed to run the script down to four. This is how the script behaves if run without any options.

But I could do better than that! I added in some command line options/flags that allow you to upgrade to any Omeka or Neatline version you specify. Now you can upgrade from Omeka 1.5.x and Neatline 1.x.x directly to Omeka 2.0.4 and Neatline 2.0.0, then right to Omeka 2.2.2 and Neatline 2.3.0. Two steps!


## Bash and floating points


As mentioned above, Bash does not work with floating points, so I had to create a function to deal with that. Dealing with version numbers, especially with minor version numbers kind of requires the need to compare floating point numbers...

In the script I use two different functions:

```
    # Compare two floating point numbers.
    # Usage:
    # if $( compare_floats number1 number 2 ); then
    #     echo 'number1 is less'
    # else
    #     echo 'number2 is less'
    # fi
    #
    # result  : the string 'true' or 'false'
    # number1 : the first number to compare
    # number2 : the second number to compare
    # Read it as: is number1 less than number2? It returns 'true' if number1 is
    # less, and 'false' if number1 is greater.
    function compare_floats() {
        echo | awk -v n1=$1 -v n2=$2 '{if (n1<n2) printf ("true"); else printf ("false");}'
    }
```


This function basically compares two numbers. It outputs true if the first number is less than the second number, and false if the first number is greater than the second number. Another way to think about it would be to ask the question, is the first number less than the second number? It returns 'true' if that is true, and 'false' if that is false.

The function is basically echoing the result of the awk command, so let's look at what it does a bit more closely.
```

    awk -v n1=$1 -v n2=$2 '{if (n1<n2) printf ("false"); else printf ("true");}'
```

First we call the awk command with two 'variable' flags. The -v says that the next expression sets a value to a variable, so n1 is the variable and $1 is the value. The $1 and $2 are actually variables themselves. When you call this function later in the script, you pass it two numbers. These numbers are automatically assigned to variables, the first number to $1 and the second to $2.

The next part of the awk command processes an if/else statement; the part within the single quotes and curly braces. The single quotes are required by Bash, and the curly braces tell awk to process the action. The part within the braces is the basic if/else statement. If the comparison is true, then do the first step; else/otherwise do the next step. So, in our case, if the first number (n1) is less than the second number (n2), then print "true", otherwise print "false".

See here if you are interested in learning more about the ways of awk [http://www.grymoire.com/Unix/Awk.html#uh-1](http://www.grymoire.com/Unix/Awk.html#uh-1).

This function is used in two ways in the script. First, it just does a basic check in an if statement. Check if this number is less than that number:
```

    if $( compare_floats $n_upgrade 2.0.0 ); then
```

This checks if the next Neatline version is less than 2.0.0. If that is true, it runs some commands.

Second, we can use the function as part of a multi conditional check:

```
    if [[ -d $path/archive/ && $( compare_floats $o_upgrade 2.0.0 ) == "true" ]]; then
```

Here we check if the /archive/ directory exists (used with Omeka versions less than 2.0) and we also check if the next version to upgrade Omeka to is less than 2.0.0. If both of those conditions are met, then we can run some code. Otherwise we do some more conditional checking and different code running.

And, the next function...

```
    # Pass the current version first, then the array
    # the function echoes the version just greater than the current version,
    # i.e., the next version to upgrade to.
    #
    # Usage:
    # variable=$( get_next_version $num array[@] )
    #
    # variable : the next version greater than $num
    # $num : the current version
    # array[@] : an array of all possible versions
    function get_next_version() {
        num=$1
        declare -a ARRAY=("${!2}")
        for i in ${ARRAY[@]}
        do
            if awk -v n1=$num -v n2=$i 'BEGIN{ if (n1<n2) exit 0; exit 1}'; then
                echo $i
                break
            fi
        done
    }
```


With this function we are doing a similar thing, comparing two numbers, but we are comparing one number against a list of numbers. To run this function you pass the current version and a list of possible version numbers. The function will compare the number you pass it with the list, and echo the next highest number from the list.

Let's break down this function as well.

```
    num=$1
    declare -a ARRAY=("${!2}")
```


These first two lines are simply getting the input from calling the function and turning them into an internal variable and an internal array. You may remember the '$1' is the first number passed to the function. But where is the '$2'? It's expanded and changed a bit because it is actually an array, or a list of numbers, rather than a single number. In Bash, you can write a variable with a dollar sign (ex. $myNumber) or with curly braces (ex. ${myNumber}). The second option allows you to string multiple variables together and do basic string or array manipulation. For example we could put two variables together: ${myNumber}${anotherNumber}

In this case we are declaring a new array named 'ARRAY' and pre-populating it with the values of the passed array. We do some indirect expansion to get the values of the passed array, that's the "${!2}" part. Basically, this part says set the values of the array passed as the values of the new array (in this case we call it 'ARRAY'), rather than setting the name of the array as the value of the new array. See here for more explanation on Bash arrays and indirection [http://wiki.bash-hackers.org/syntax/arrays#indirection](http://wiki.bash-hackers.org/syntax/arrays#indirection)

Next we do a standard for loop to go through every element or value of the array.

```
    for i in ${ARRAY[@]}
```

Next we check the current version number against each number in the list of version numbers, using the same awk command as before.

```
    if awk -v n1=$num -v n2=$i 'BEGIN{ if (n1<n2) exit 0; exit 1}'; then
```

In this case, though, instead of printing 'true' or 'false' the command exits without errors (exit 0) or exits with an error (exit 1). The if statement that includes the awk command will execute the code within the if statement only if the statement returns true, that is, if the awk command exits without errors. So, if the first number is less than the second number, then exit without errors (true) and echo the second number. This becomes the next version number.

Basically you can think of this as getting the current version number, then comparing this to a list of all possible version numbers, starting with the lowest number. When the current version is greater than the possible version number, do nothing. When the current version is not less than the possible version number, then the possible version number is greater, and therefore should be the next version to upgrade to. The break statement within the for loop tells the for loop to stop looping when it has found the next version number.

## Conclusion

Few, that was a long winded explanation of the script. The two above functions, and accompanying explanation, could have been avoided by using a programming language (like Ruby, Python, or Perl) instead of a shell script because they handle floating point comparisons naturally.

So, just to summarize, if you have Omeka and Neatline installed already, and would like to upgrade to the latest version, then you can run this script on the server where Omeka is installed. It requires that you have git installed. All of the other programs it depends on are pretty standard.
