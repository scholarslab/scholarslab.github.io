# for spreadsheet:

string = "1.0,1.1,1.2,1.3,1.4,1.5,1.6,1.7,1.8,2.0,2.1,2.2,2.3,2.4,3.0,3.1,4.0,4.1,4.2,4.3,4.4,4.5,4.6,4.7"
nums = string.split(",")
newnums = ["0." + num for num in nums]

#for num in newnums:
#	print(num)

# for homepage test grid (evening of 1/23/18)



s = "small"
m = "medium"
l = "large"

sizes = [s, s, s, s, s, l, m, s, m, m, l, s, m, s, m, l, s, m, s, s, s, s]
sizeinitials = [s[0] for s in sizes]
nums = [str(n) for n in range(1,23)]

for size, letter, num in zip(sizes, sizeinitials, nums):
	div = '''<div id="{1}{2}" class="home-item--{0}">{2}, {0}</div>'''.format(size, letter, num)
#	print(div)

# for homepage round 2 (1/24/18):

# pasted + lightly edited from 'Design Notes' spreadsheet
contents = '''Hero text
contact link 1
FAQ
Charter link
office hours
floor diagram
GIS corner
Makerspace corner
Grads
Events
Learn
Blog
Staffer projects
Contact link 2
listserv prompt
People
Origin stories'''

def baseClasses(contents):
	classbasis = contents.lower().replace(' ', '-').splitlines()
	return classbasis

def makeHomeClasses(classbasis):
	home_classes = ["home__" + c for c in classbasis]
	# shortened further if 17+ chars -> these were originally global vars
	class_lengths = [len(c) for c in classbasis]

	return home_classes

def makeHomeDivs(home_classes, classbasis):
	divs = []
	for h, c in zip(home_classes, classbasis):
		div = '''<div class="{0}">{1}</div>'''.format(h, c)
		divs.append(div)
	return divs

# split into list on newlines -> class name base strings
classbasis = baseClasses(contents)

# add "home__" prefix per BEM specification
home_classes = makeHomeClasses(classbasis)
# print(home_classes)

# make 1 div per class created
# len: 17
home_divs = makeHomeDivs(home_classes, classbasis)

# print for HTML
''' for h in home_divs:
	print(h) '''

# empty CSS setup for all classes created
def makeCSSClasses(home_classes):
	for h in home_classes:
		print(
			'''.{0}'''.format(h) + " {\n\n}\n")

# same classes but make grid-area property
def makeCSSClasses(home_classes):
	for h in home_classes:
		print(
			'''.{0}'''.format(h) + " {\n\tgrid-area: ;\n}\n")

# makeCSSClasses(home_classes)

# CSS grid setup
def printGridAreas():
	area_string = "origins people listserv contact2 projects blog learn events grads make gis floor hours charter faq contact hero"
	grid_areas = area_string.split(' ')[::-1] # reverse order (entered from bottom up)
	for g in grid_areas:
		print('"' + g + '"')

printGridAreas()
