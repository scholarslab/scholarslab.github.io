require 'date'
require 'time'
require 'html-proofer'
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
    sh 'npm install'
end

desc "Run tests on the build."
task :test_build do
    sh 'bundle exec jekyll build'
    options = {
      :assume_extension => true,
      :disable_external => true,
      :empty_alt_ignore => true,
      :allow_hash_href => true,
      :only_4xx => true,
      :http_status_ignore => [404, 403, 410],
      :alt_ignore => ['/.*/'],
      :file_ignore => [/.*\/node_modules\/.*/, /.*\/_sass\/.*/],
      :internal_domains => ['localhost:4000']
    #   :url_swap =>
  }

  HTMLProofer.check_directory("./_site", options).run
  sh 'bundle exec jekyll serve'
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
collaborators:
  - name: First Last
    slug: first-last
    role:
current: false
layout: work
link: ''
slug: #{title_slug}
title: #{titlecase_title}
thumb-img:
banner-img:
research-category:
year: 2018
---
Description of the project goes here")
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
start_time: '15:00:00'
end_date: '#{event_date}'
end_time: '16:00:00'
layout: events
slug: #{title_slug + "-" + event_date}
title: '#{titlecase_title}'
location: 'Alderman 423'
---
Description of the event - meant to be replaced with your information. The above information is meant to offer you a template. Note, you may also add the following, optional metadata by copying it to the above header on a new line after location but before the three dashes:

instructor: 'Brandon and Laura'

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
department: None
email: None
first_name: #{args.first_name.titlecase}
last_name: #{args.last_name.titlecase}
layout: people
name: #{args.first_name.titlecase + ' ' + args.last_name.titlecase}
position: None
short_bio: 'A short one-sentence bio.'
slug: #{slug}
status: current or not_current
twitter: None
website: None
people-category:
- Pick one of student or staff
roles:
- LAMI FELLOW, 2018 (for example)
---
A flashy bio goes here. The above information is meant to give you a template.")
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
  current_time = Time.new.strftime("%Y-%m-%d %H:%M:%S")
  File.open(fn, 'w'){|f|
    f.puts("---
author: #{author_slug}
date: #{current_time}
layout: post
slug: #{title_slug}
title: #{args.title.titlecase}
categories:
- Example category
- Digital Humanities
tags:
- Digital Humanities
crosspost:
  - title: if your post is crossposted, the text here will be the text of the link, while the URL key will be the link itself. If not crossposting you can delete the crossposting key.
    url: https://yourcoollink.com
---
content of your post here. The above information is meant to be a template.")
  }
  puts "New post created at #{fn}"
end

desc "Delete corpus files to regenerate"
task :delete_corpus do
    if File.file?('./corpus.json')
        File.delete('./corpus.json')
    end
    if File.file?('./search_index.json')
        File.delete('./search_index.json')
    end
    if File.exist?('./_site')
        FileUtils.rm_rf('./_site')
    end
end

desc "Create corpus for search"
file './corpus.json' => ['./', *Rake::FileList['collections/**/*.md'].exclude('./ISSUE_TEMPLATE.md', './PULL_REQUEST_TEMPLATE.md', './README.md', './index.md', './code_of_conduct.md')] do |md_file|
    unsafe_loader = ->(string) { YAML.load(string) }
    corpus = md_file.sources.grep(/\.md$/)
      .map do |path|
        file_path = './' + path
        parsed = FrontMatterParser::Parser.parse_file(file_path, loader: unsafe_loader)
        contentHtml = Kramdown::Document.new(parsed.content).to_html
        {
          id: path.pathmap('%n'),
          title: parsed.front_matter["title"],
          author: parsed.front_matter["author"],
          date: parsed.front_matter["date"],
          categories: parsed.front_matter["categories"],
          url: parsed.front_matter["slug"],
          layout: parsed.front_matter["layout"],
          content: contentHtml.striphtml,
        }
      end
  File.open(md_file.name, 'w') do |f|
    f << JSON.generate(corpus)
  end
end

file './search_index.json' => ['./corpus.json'] do |t|
  Open3.popen2('node script/build-index') do |stdin, stdout, wt|
    IO.copy_stream(t.source, stdin)
    stdin.close
    IO.copy_stream(stdout, t.name)
  end
end

task :generate_search => [:delete_corpus, './corpus.json', './search_index.json']
task :default => [:install_dependencies, :test_build]
task :publish => [:install_dependencies, :generate_search, :build_site]
