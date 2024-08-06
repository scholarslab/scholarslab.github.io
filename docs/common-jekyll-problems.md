*Please add problems you've run into here, even if you don't remember the solution!*

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
I think I solved this but forgot to document how?

4. "You must use Bundler 2 or greater with this lockfile."
Enter `gem install bundler` to update to Bundler 2 (`sudo gem install bundler` if you get `ERROR:  While executing gem ... (Gem::FilePermissionError) You don't have write permissions for the /Library/Ruby/Gems/2.3.0 directory.`

5. `bundler: failed to load command: jekyll (/Users/wyatt/.gem/ruby/3.2.2/bin/jekyll)
<internal:/Users/wyatt/.rubies/ruby-3.2.2/lib/ruby/site_ruby/3.2.0/rubygems/core_ext/kernel_require.rb>:37:in `require': cannot load such file -- webrick (LoadError)`

Solution: `bundle add webrick`
