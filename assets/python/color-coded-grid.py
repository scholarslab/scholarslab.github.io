# color-coded-grid.py

# goal: count up all the unique strings in the skills section, make a grid out of them alphabetically
# assign 1 or 0 to each person's grid row depending on expertise

############ 1. Input: ########################

students_raw = '''<span>Catherine Addington:</span>3D Printing, Digital Humanities<br/>
					<span>Andrew Carl:</span>3D Printing, Electronics, Wearables<br/>
					<span>Nic Dalton:</span>3D Printing, Modelling<br/>
					<span>Brandon Phan:</span>3D Printing<br/>
					<span>Marysia Serafin:</span>3D Printing'''

staff_raw = '''<span>Jeremy Boggs:</span>3D Printing, Electronics, Programming, Digital Humanities<br/>
					<span>Shane Lin:</span>3D Printing, Programming, Digital Humanities<br/>
					<span>Laura Miller:</span>3D Printing, Photogrammetry, Digital Humanities<br/>
					<span>Ammon Shepherd:</span>3D Printing, Electronics, Programming, Digital Humanities'''

########### 2. Functions: #####################

# split original strings at end of span tag
def splitNamesFromSkills(list):
	nospan = []
	for l in list:
		tuple = l.partition('</span>')
		name = tuple[0] + tuple[1]
		nospan.append([name, tuple[2]])
	return nospan

# only name span tags
def listOfNames(nameskills):
	names = []
	for n in nameskills:
		names.append(n[0])
	return names

# only string listing skills
def listOfSkills(nameskills):
	skills = []
	for n in nameskills:
		skills.append(n[1])
	return skills

# 1 if have skill, 0 if no
def skillsMatrix(skills, unique_skills):
	matrix = []
	for s in skills:
		binary = [0] * len(unique_skills)
		for i, u in enumerate(unique_skills):
			if u in s:
				binary[i] = 1
		matrix.append(binary)
	return matrix

# 1 -> [col #, row #] of grid area
# 0 -> [0]
def mapToGridAreas(matrix):
	cssnums = []
	for i, row in enumerate(matrix):
		for j, r in enumerate(row):
			if r == 1:
				cssnums.append([i+1, j+1])
			elif r == 0:
				cssnums.append([0])
	return cssnums

# string formatting -> HTML
def numsToHTML(cssnums):
	html = []
	for item in cssnums:
		if len(item) > 1:
			div = '''<div class="maker-grid__skill" id="ppl{0}skill{1}"></div>'''.format(item[0], item[1])
			html.append(div)
		elif len(item) == 1:
			div = '''<div class="maker-grid__default"></div>'''
			html.append(div)
		else:
			html.append('ERROR')
	return html

# string formatting -> CSS selectors
def numsToCSS(cssnums):
	css = []
	for item in cssnums:
		if len(item) > 1:
			div = '''#ppl{0}skill{1} {{\n\tgrid-column: {1};\n\tgrid-row: {0};\n}}\n'''.format(item[0], item[1])
			css.append(div)
	return css

########### 3. Calculations: ####################

split = [r.splitlines() for r in [students_raw, staff_raw]]

# keeping separate for eventual HTML output if needed:
studslist = [s.strip().replace('<br/>', '') for s in split[0]]
stafflist = [s.strip().replace('<br/>', '') for s in split[1]]

both = [studslist, stafflist]
flattened = [i for j in both for i in j]

# returns list of lists, 1 per person: [<span w/ name>, <skills list>]
nameskills = splitNamesFromSkills(flattened)

# '<span><nameval>:</span>' per person
names = listOfNames(nameskills)

# list of all skills, 1 string per person
skills = listOfSkills(nameskills)

# alphabetized list of all unique skills named in original strings
unique_skills = sorted(set([t for s in skills for t in s.split(', ')]))

# list of lists: 9 vectors (ppl), 7 items each (skills)
# 1 if have skill, 0 if not
matrix = skillsMatrix(skills, unique_skills)

# convert any 1s -> coordinates of grid areas
cssnums = mapToGridAreas(matrix)
# print(cssnums, len(cssnums))

# len = 63, list of formatted divs
html = numsToHTML(cssnums)

# len = 23, list of id selectors w/ grid areas
css = numsToCSS(cssnums)

# for h in html:
#	print(h)
# for c in css:
#	print(c)
