# wrap_strings_in_html.py

title = "The Scholars' Lab"
elem = 'span'

def wrapLettersInHTML(string, elem):
	title_letters = list(string.replace(' ', ''))
	elems = ["<{e}>{t}</{e}>".format(e=elem, t=t) for t in title_letters]
	return elems

spans = wrapLettersInHTML(title, elem)
for span in spans:
	print(span)