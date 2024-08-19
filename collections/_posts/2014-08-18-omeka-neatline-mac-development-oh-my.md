---
author: eric-rochester
date: 2014-08-18 09:41:08+00:00
layout: post
slug: omeka-neatline-mac-development-oh-my
title: Omeka, Neatline, Mac, development, oh my!
category: essay
tags:
- research-and-development
- omeka
- neatline
---

At the Scholars' Lab, we're big big advocates of Open Source. All of our projects are available freely and openly on [Github](https://github.com/), and we're always more than happy to accept pull requests. We'd like to be able to empower everyone to contribute to our projects as much as they're able to and comfortable with.

Unfortunately, one of our flagship projects, [Neatline](http://neatline.org/), isn't easy to contribute to. There are a number of reasons for this, but one is that the development environment is not trivial to get set up. In order to address this and make it easier for others to contribute, we've developed an [Ansible](http://www.ansible.com/) playbook that takes a not-quite-stock Mac and sets up an instance of Omeka with the Neatline plugin available, as well as all the tools necessary for working on Neatline.

[Ansible](http://www.ansible.com/) is a system for setting up and configuring systems. It's often used to set up multiple servers&mdash;for instance, a database server and a static web server, both working with a dynamic web applications deployed on several computers. If you're familiar with [Chef](http://www.getchef.com/) or [Puppet](http://puppetlabs.com/), Ansible solves the same problems. In this case, we'll use it to configure our local development workstation.

We've published these playbooks on [Github](https://github.com/) in the [`neatline.dev` repository, on the `mac-ansible` branch](https://github.com/erochest/neatline.dev/tree/mac-ansible). You can get this by cloning it to your local machine. (Since this is for getting started developing Neatline, I assume that you're already comfortable with [git](http://git-scm.com/). If not, [there](http://rogerdudler.github.io/git-guide/) [are](https://try.github.io/) [lots](http://www.git-tower.com/learn/) [of](http://gitimmersion.com/) [great](http://www.vogella.com/tutorials/Git/article.html) [tutorials](http://git-scm.com/book).)

```
$ git clone --branch mac-ansible https://github.com/erochest/neatline.dev.git
```



## Requirements



In creating this, I've aimed for starting from a stock Mac. And I missed pretty badly. However, the necessary prerequisites are minimal. You'll just need to have these things installed.





  * [XCode](https://itunes.apple.com/us/app/xcode/id497799835)


  * [Homebrew](http://brew.sh/)



Once those two are on your machine, you can install the other two dependencies. These are available through [Homebrew](http://brew.sh/). So open Terminal and type these lines:

```
$ brew install python
$ brew install ansible
```

That's all. You should be ready to go.



## Settings



This project includes a number settings that you can change to customize your installation. Those are found in the file [`playbook.yaml`](https://github.com/erochest/neatline.dev/blob/mac-ansible/playbook.yaml). The relevant section is labelled `vars`, and it allows you to set information about the Omeka database (`omeka_db_user`, `omeka_db_password`, and `omeka_db_name`), which version of Omeka you wish to use (`omeka_version`), where you wish to install it (`omeka_dir`), and where you want to point your browser to (`dev_hostname`) as you're working on the site. The defaults are:

```
vars:
  db_user: root
  db_password:
  omeka_db_user: omeka
  omeka_db_password: omeka
  omeka_db_name: omeka
  dev_hostname: omeka-neatline.dev
  omeka_dir: "{{ ansible_env.HOME }}/omeka/neatlinedev"
  omeka_version: stable-2.1
  debug: true
  neatline_repo: git@github.com:scholarslab/Neatline.git
  php_version: 55
```

Change these to reflect what you'd like your personal Omeka/Neatline installation to look like.

One option that I'll call out in particular is `neatline_repo`. This is the git repository that you'll be working with. If you're using github to host your project, you can [fork](https://help.github.com/articles/fork-a-repo) the primary Neatline repository (from the URL given above). And when you've completed your work, if you'd like to contribute back, you can send us a [pull request](https://help.github.com/articles/using-pull-requests) through the Github site.



## Setting Up



Finally, we're ready to actually create the system. This is quite easy. In the Terminal, from the `neatline.dev` directory, run the `neatline-dev` script.

```
$ cd neatline.dev
$ ./neatline-dev
```

Now wait.

After your computer whirs away for a while, you'll get your prompt back. When that happens, you should be able to point your browser to http://omeka-neatline.dev (in the example above). There you'll see the Omeka installation form.



## What Just Happened?



The Ansible playbook does a number of tasks.





  1. It installs all the dependencies that you'll need, including [PHP](http://php.net/), [NodeJS](http://nodejs.org/), and [MySQL](http://www.mysql.com/).


  2. It sets MySQL to start automatically when you log in, and it creates the Omeka MySQL user and database.


  3. It configures [Apache](http://httpd.apache.org/) to work with PHP and to find your Omeka directory.


  4. It downloads and configures [Omeka](http://omeka.org/) and turns on debugging.


  5. It clones [Neatline](http://neatline.org/) into Omeka's `plugin` directory.


  6. It initializes [git flow](https://github.com/nvie/gitflow) for working in Neatline and leaves you on the `develop` branch.


  7. And it installs the necessary JavaScript and PHP tools, including [Grunt](http://gruntjs.com/), [Bower](http://bower.io/), [Composer](https://getcomposer.org/), and [PHPUnit](http://phpunit.de/).



After all that, it really needs a break.

You probably do too.



## Future



Unfortunately, that's only the first step that we need to take to make the Neatline code-base approachable. Some more things that we have planned include:





  * Documentation on all the moving parts.


  * Documentation on the overall architecture of Neatline.


  * Documentation on the code. What's where? If you wish to change something, where would you find it?



As we get those parts in place, we'll keep you posted.
