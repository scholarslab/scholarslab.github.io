# topic-pages.py
# generic purpose:  find files in directory, turn into proper titles, format inside strings
# specific purpose: find and list names of all topic pages for GH Project board

# operating system module
import os

# grab all filenames from pages/ dir, alphabetize
pages = sorted(os.listdir('../pages'))

# remove subdir - will include later
pages.remove('graduate-opportunities')

# list where input: 'file-name.ext' -> output: 'File Name'
names = [p.partition('.')[0].replace('-', ' ').title() for p in pages]

# list, takes strings -> .md checkbox w/ string value
markdown = ['''- [ ] {0}'''.format(n) for n in names]

for m in markdown:
	print(m)