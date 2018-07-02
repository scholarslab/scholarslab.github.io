# file-text-search.py
# this module returns all class declarations in a given HTML file

# using regex to search and grab
def regexTextSearch(file, pattern):
	import re

	with open(file, 'rt', encoding='utf8') as myfile:
		matches = re.findall(pattern, myfile.read())
		return matches

# take each 'class="<val>"' & return <val>
def stripClassStrings(matches):
	quoted_names = [m.replace('class=', '') for m in matches]
	class_names = [q.replace('"', '') for q in quoted_names]
	return class_names

''' ASIDE: '''
# list of all section-level classes
def sectionLevelClasses(class_names):
	css = []
	for i, c in enumerate(class_names):
		if c.startswith("makerspace"):
			css.append(c)
	return css

def createGridAreas(sections):
	areas = [s.split('__')[1] for s in sections if '__' in s]
	return areas
''' /END ASIDE '''

# take class names -> CSS selectors
def classesToCSS(class_names):
	css = []
	for i, c in enumerate(class_names):
	#	if '__' in c:
		selector = '''.{0} {{\n\n}}\n'''.format(c)
		css.append(selector)
	return css

# match string s where s == 'class="<val>"'
# NB: throws error if quoted, e.g. "r'<pattern>'"
#
# '.*?' = 'non-greedy', which is regex language
# for "starts looking for a match at the beginning of the string, 
# rather than the end" (aka not trying to get the longest string possible)
pattern = r'class=".*?"'

# list of all 'class="<val>"' in file
matches = regexTextSearch('../../_layouts/events.html', pattern)

# list of all val for 'class="<val>"' in matches
class_names = stripClassStrings(matches)

# section levels (use for grid-areas)
sections = sectionLevelClasses(class_names)


css = classesToCSS(class_names)
for c in css:
	print(c)
