require 'date'
require 'time'
require 'rake'
require 'json'
require 'front_matter_parser'
require 'open3'
require 'jekyll'
require 'fileutils'
require 'kramdown'

class String
  def titlecase
    split(/([[:alpha:]]+)/).map(&:capitalize).join
  end

  def striphtml
    split(/\<.*?\>/)
    .map(&:strip)
   .reject(&:empty?)
   .join(' ')
   .gsub(/\s,/,',')
  end
end

desc "Install dependencies"
task :install_dependencies do
    sh 'bundle install'
end

desc "Build the site."
task :build_site do
    sh 'bundle exec jekyll build'
end

desc "Make a research project"
task :new_project, [:title] do |t, args|
  title_slug = args.title.downcase.gsub(' ', '-').gsub(/[^\w-]/, '')
  fn = 'collections/_work/' + title_slug + '.md'
  if File.exist? fn; raise RuntimeError.new("The file #{fn} already exists."); end
  titlecase_title = args.title.titlecase
  File.open(fn, 'w'){|f|
    f.puts("---
    
layout: work
slug: the-slug
title: ""
collaborators: 
  - name: First Last
    slug: first-last
    role:
research-category: 
start-year:
end-year:    
---
More details to come.")
  }
  puts "New research project created at #{fn}"
end

desc "Make a new event"
task :new_event, [:title, :date] do |t, args|
  title_slug = args.title.downcase.gsub(' ', '-').gsub(/[^\w-]/, '')
  event_date = args.date
  fn = 'collections/_events/' + title_slug + '-' + event_date + '.md'
  if File.exist? fn; raise RuntimeError.new("The file #{fn} already exists."); end
  titlecase_title = args.title.titlecase
  current_time = Time.new.strftime("%Y-%m-%d %H:%M:%S")
  File.open(fn, 'w'){|f|
    f.puts("---
author: first-last
start_date: #{event_date}
end_date: '#{event_date}'
start_time: '00:00:00'
end_time: '00:00:00'
layout: events
location: 'Shannon Library 308 (SLab Common Room)'
title: '#{titlecase_title}'
rsvp: \"https://cal.lib.virginia.edu/calendar/events/GradCamp2024\"
---
More details to come.
    ")
  }
  puts "New event page created at #{fn}"
end

desc "Make a new person"
task :new_person, [:first_name, :last_name] do |t, args|
  slug = args.first_name.downcase.split.join('-') + '-' + args.last_name.downcase.split.join('-')
  fn = 'collections/_people/' + slug + '.md'
  if File.exist? fn; raise RuntimeError.new("The file #{fn} already exists."); end
  File.open(fn, 'w'){|f|
    f.puts("---
layout: people
title: FirstName LastName
slug: firstname-lastname
first_name: FirstName
last_name: LastName
short_bio: 'A short one-sentence bio.'
website:
email: 
status: current or not_current
department: UVA Academic Department If Any
position: Name of Role
people-category:
- Pick one of student, director, or staff
roles:
- LAMI Fellow, 2018 (for example)
- Multiple role get added on a new line like this
---
More details to come.")
  }
  puts "New person created at #{fn}"
end

desc "Make a new post, given a title and author"
task :new_post, [:title, :author] do |t, args|
  author_slug = args.author.downcase.gsub(' ', '-').gsub(/[^\w-]/, '')
  title_slug = args.title.downcase.gsub(' ', '-').gsub(/[^\w-]/, '')
  date = Date.today.to_s
  fn = 'collections/_posts/' + date + '-' + title_slug + '.md'
  if File.exist? fn; raise RuntimeError.new("The file #{fn} already exists."); end
  current_time = Time.new.strftime("%Y-%m-%d")
  File.open(fn, 'w'){|f|
    f.puts("---
author: #{author_slug}
date: #{current_time}
layout: post
slug: #{title_slug}
title: #{args.title.titlecase}
crosspost:
  - title: if your post is crossposted, the text here will be the text of the link, while the URL key will be the link itself. If not crossposting you can delete the crossposting key.
    url: https://yourcoollink.com
---
content of your post here. The above information is meant to be a template.")
  }
  puts "New post created at #{fn}"
end

task :default => [:install_dependencies]
task :publish => [:install_dependencies, :build_site]
