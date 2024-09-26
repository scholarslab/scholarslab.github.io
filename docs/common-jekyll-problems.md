*Please add problems you've run into here, even if you don't remember the solution!*

## Is it a sudo problem, and are you working on a Library staff machine?
From Yuji in a Library Slack channel: "I’ve been helping people with macs \[who are Library staff\] negotiate the vagaries of running sudo, especially concerning the way our library mac laptops are setup.  And I think I came up with the simplest solution which is to do :
`su libadm -c "sudo whatever-you-need-to-run-as-root"` whenever the common wisdom (i.e. google search) tells them that they should use sudo.

This came up with fixing a brew install which was giving a lot of confusing errors. Brew is helpful in suggesting fixes, but when the fix required sudo, it usually leads the (library mac) user down a rabbit warren of wrong turns. Especially if there is a mix of things that need to be run via sudo and some that are not.  So I thought it might be better to have one single command to run something via sudo without the risk of accidentally running other things as the wrong user (either libadm or root) later. 

I suppose one could write a script or craft an alias for this, but that can send someone down a different set of rabbit holes.

One slightly confusing downside is that it requires the user to type in the libadm passwd twice the first time you run it.

## Problems & how we solved them
1. `Your Ruby version is 2.0.0, but your Gemfile specified 2.4.1` (or other versions = your version is a lower number)  
Your Ruby version is too old? Enter the following at the command line and press enter: `brew upgrade ruby`  
Note! This process may cause you to have a similar-looking but *different* error message by updating your version of Ruby *past* the version specified in your Gemfile. See 1b below if so.

2. `Your Ruby version is 2.5.1, but your Gemfile specified 2.4.1` (or other versions = your version is a higher number)  
Your Ruby version is too new? Open the "Gemfile" file (in your scholarslab.org repo) in a text editor. Edit "2.4.1" to instead say "2.5.1" (or whatever the versions in your error message are), and save. At the command line, run `bundle install`.  

3. Gem install bundler problems  
```gem install bundler
ERROR:  Could not find a valid gem 'bundler' (>= 0), here is why:
          Unable to download data from https://rubygems.org/ - SSL_connect returned=1 errno=0 state=SSLv2/v3 read server hello A: tlsv1 alert protocol version (https://rubygems.org/latest_specs.4.8.gz)
```

* Solution:
Trying to troubleshoot put me in a loop of it wasn't pointing at the right Ruby version, and wouldn't let me update gems/bundler. Closing terminal and restarting solved, so possibly something I tried worked but not until restart?

4. "You must use Bundler 2 or greater with this lockfile."
Enter `gem install bundler` to update to Bundler 2 (`sudo gem install bundler` if you get `ERROR:  While executing gem ... (Gem::FilePermissionError) You don't have write permissions for the /Library/Ruby/Gems/2.3.0 directory.`

5. `bundler: failed to load command: jekyll (/Users/wyatt/.gem/ruby/3.2.2/bin/jekyll)
<internal:/Users/wyatt/.rubies/ruby-3.2.2/lib/ruby/site_ruby/3.2.0/rubygems/core_ext/kernel_require.rb>:37:in `require': cannot load such file -- webrick (LoadError)`

* Solution: `bundle add webrick`

6. "Calling DidYouMean::SPELL_CHECKERS.merge!(error_name => spell_checker)' has been deprecated. Please call DidYouMean.correct_error(error_name, spell_checker)' instead."

* Solution: 'bundle update --bundler'

## If nothing is working
1. Try adding `--trace` to the command to build and run the site locally, to get more output about what's going wrong. This would look like: `bundle exec jekyll serve --trace`
2. You can delete (maybe move a copy somewhere else than the site folder, rather than delete?) your gemfile.lock (NOT your gemfile); build the site locally; and it'll rebuild the gemfile.lock (sometimes fixing issues). You may need to run bundle install to reinstall things as part of this.
3. You can try this process, which helps if there's something weird in one of your hidden site files (e.g. GH history, caches, Gemfile.lock) causing the site breakage. 
* Make a copy of your current site folder somewhere else as a backup (e.g. on your desktop).
* Then, install a new clean jekyll site (`jekyll new your-new-site-name`) in a different folder from your current site folder (e.g. inside your GitHub folder).
* Check that you can locally build/run that new clean site.
* Then, start pasting in pieces of your broken site (except do *not* copy/paste these folders/files: /_site, /.git, .gitattributes, /.github, /.jekyll-cache, /.sass-cache ), stopping and restarting the build/serve each time to see what breaks things (if anything).
* If something you paste in breaks the site, you know where to focus on troubleshooting before pasting in more of your site.
* If none of this breaks the new site, once you've copied over everything (except those files I listed to not copy), you're ready to replace where GitHub looks for your site. In the GH desktop app, right-click and remove the connection to your site's file folder.
* Delete your old site folder (this is why we made a backup e.g. on your desktop, at the start of these steps, just in case something goes wrong during this process).
* Clone the site to your computer via GH desktop app again.
* Copy everything in the new Jekyll site you created (which had all your old site stuff pasted in), and paste it into the new clone of your site (replacing any files it tells you are duplicates). This makes GH have your working site files, without the hidden files tracking GH history and caches that can mess things up. Push the site to the repo.
