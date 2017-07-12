require 'date'
require 'time'

desc "Make a research project"
task :new_project, [] do |t, args|

end

desc "Make a new event"
task :new_event, [] do |t, args|

end

desc "Make a new person"
task :new_person, [:first_name, :last_name] do |t, args|
  slug = args.first_name + '-' + args.last_name
  fn = '_people/' + slug + '.md'
  File.open(fn, 'w'){|f|
    f.puts("---")
    f.puts("department: None")
    f.puts("email: None")
    f.puts("first_name: #{args.first_name}")
    f.puts("last_name: #{args.last_name}")
    f.puts("layout: people")
    f.puts("location: None")
    f.puts("name: #{args.first_name + ' ' + args.last_name}")
    f.puts("position: None")
    f.puts("short_bio: None")
    f.puts("slug: #{slug}")
    f.puts("status: not_current")
    f.puts("twitter: None")
    f.puts("website: None")
    f.puts("people-category:")
    f.puts("- Example category")
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
      f.puts("title: #{args.title}")
      f.puts("categories:")
      f.puts("- Example category")
    f.puts("---")
    f.puts("content of your post here")
  }
  puts "New post created at #{fn}"
end
