sh 'gem install bundler'
sh 'bundle install'

require 'date'
require 'time'
require 'html-proofer'
require 'rake'
require 'json'
require 'front_matter_parser'
require 'open3'
require 'jekyll'
require 'ruby-progressbar'
require 'fileutils'

class String
  def titlecase
    split(/([[:alpha:]]+)/).map(&:capitalize).join
  end
end

desc "Install dependencies"
task :install_dependencies do
    progressbar = ProgressBar.create(
                    :title => "install dependencies",
                    :format => "\e[0;33m%t: |%B|\e[0m",
                    :starting_at => 10)
    50.times { progressbar.increment; sleep 0.1 }
    sh 'npm install'
    progressbar.finish
end


desc "Run travis tests"
task :test_travis do
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
  sh 'bundle exec jekyll serve --incremental'
end

desc "Make a research project"
task :new_project, [:title] do |t, args|
  title_slug = args.title.downcase.gsub(' ', '-')
  fn = '_research/' + title_slug + '.md'
  titlecase_title = args.title.titlecase
  File.open(fn, 'w'){|f|
    f.puts("---")
    f.puts("collaborators: ")
    f.puts("  - name: ")
    f.puts("    role: ")
    f.puts("current: false")
    f.puts("layout: research")
    f.puts("link: ''")
    f.puts("slug: #{title_slug}")
    f.puts("title: #{titlecase_title}")
    f.puts("research-category:")
    f.puts("  - ")
    f.puts("  - ")
    f.puts("---")
    f.puts("Description of the project goes here")
  }
  puts "New research project created at #{fn}"
end

desc "Make a new event"
task :new_event, [] do |t, args|

end

desc "Make a new person"
task :new_person, [:first_name, :last_name] do |t, args|
  slug = args.first_name.downcase.split.join('-') + '-' + args.last_name.downcase.split.join('-')
  fn = '_people/' + slug + '.md'
  File.open(fn, 'w'){|f|
    f.puts("---")
    f.puts("department: None")
    f.puts("email: None")
    f.puts("first_name: #{args.first_name.titleize}")
    f.puts("last_name: #{args.last_name.titleize}")
    f.puts("layout: people")
    f.puts("location: None")
    f.puts("name: #{args.first_name.titleize + ' ' + args.last_name.titleize}")
    f.puts("position: None")
    f.puts("short_bio: None")
    f.puts("slug: #{slug}")
    f.puts("status: not_current")
    f.puts("twitter: None")
    f.puts("website: None")
    f.puts("people-category:")
    f.puts("  - Example category")
    f.puts("---")
    f.puts("A flashy bio goes here")
  }
  puts "New person created at #{fn}"
end

desc "Make a new post, given a title and author"
task :new_post, [:title, :author] do |t, args|
  author_slug = args.author.downcase.gsub(' ', '-')
  title_slug = args.title.downcase.gsub(' ', '-')
  date = Date.today.to_s
  fn = '_posts/' + date + '-' + title_slug + '.md'
  current_time = Time.new.strftime("%Y-%m-%d %H:%M:%S")
  File.open(fn, 'w'){|f|
    f.puts("---")
      f.puts("author: #{author_slug}")
      f.puts("date: #{current_time}")
      f.puts("layout: post")
      f.puts("slug: #{title_slug}")
      f.puts("title: #{args.title.titlecase}")
      f.puts("categories:")
      f.puts("  - Example category")
    f.puts("---")
    f.puts("content of your post here")
  }
  puts "New post created at #{fn}"
end

desc "Delete corpus files to regenerate"
task :delete_corpus do
    progressbar = ProgressBar.create(
                    :title => "deleting existing files",
                    :format => "\e[0;34m%t: |%B|\e[0m",
                    :starting_at => 10)
    50.times { progressbar.increment; sleep 0.1 }
    if File.file?('./corpus.json')
        File.delete('./corpus.json')
    end
    if File.file?('./search_index.json')
        File.delete('./search_index.json')
    end
    if File.exist?('./_site')
        FileUtils.rm_rf('./_site')
    end
    progressbar.finish
end

desc "Create corpus for search"
file './corpus.json' => ['./', *Rake::FileList['./*.md','_posts/*.md'].exclude('./ISSUE_TEMPLATE.md', './PULL_REQUEST_TEMPLATE.md', './README.md', './index.md', './code_of_conduct.md')] do |md_file|
    progressbar = ProgressBar.create(
                    :title => "creating corpus",
                    :format => "\e[0;35m%t: |%B|\e[0m",
                    :starting_at => 10)
    50.times { progressbar.increment; sleep 0.1 }
    unsafe_loader = ->(string) { YAML.load(string) }
    corpus = md_file.sources.grep(/\.md$/)
      .map do |path|
        file_path = './' + path
        parsed = FrontMatterParser::Parser.parse_file(file_path, loader: unsafe_loader)
        {
          id: path.pathmap('%n'),
          title: parsed.front_matter["title"],
          author: parsed.front_matter["author"],
          date: parsed.front_matter["date"],
          categories: parsed.front_matter["categories"],
          url: parsed.front_matter["slug"],
          content: parsed.content,
        }
      end
  File.open(md_file.name, 'w') do |f|
    f << JSON.generate(corpus)
  end
  progressbar.finish
end

file './search_index.json' => ['./corpus.json'] do |t|
  progressbar = ProgressBar.create(
                    :title => "creating search index",
                    :format => "\e[0;36m%t: |%B|\e[0m",
                    :starting_at => 10)
    50.times { progressbar.increment; sleep 0.1 }
  Open3.popen2('node script/build-index') do |stdin, stdout, wt|
    IO.copy_stream(t.source, stdin)
    stdin.close
    IO.copy_stream(stdout, t.name)
  end
  progressbar.finish
end

task :default => [:install_dependencies, :delete_corpus, './corpus.json', './search_index.json', :test_travis]
