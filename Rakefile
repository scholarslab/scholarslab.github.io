desc "Make a new person"
task :new_person, [:first_name, :last_name] do |t, args|
  slug = args.first_name + '-' + args.last_name
  fn = '_people/' + slug + '.md'
  File.open(fn, 'w'){|f|
    f.puts("---")
    f.puts("department: ")
    f.puts("email: None")
    f.puts("first_name: #{args.first_name}")
    f.puts("last_name: #{args.last_name}")
    f.puts("layout: people")
    f.puts("location: ''")
    f.puts("name: #{args.first_name + ' ' + args.last_name}")
    f.puts("position: None")
    f.puts("short_bio: ''")
    f.puts("slug: #{slug}")
    f.puts("status: not_current")
    f.puts("twitter: None")
    f.puts("website: None")
    f.puts("people-category:")
    f.puts("-")
    f.puts("---")
    f.puts("A flashy bio goes here")
  }
end

desc "Make a new post"
task :new_post do
end
