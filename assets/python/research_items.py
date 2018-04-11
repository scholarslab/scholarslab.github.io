items = [(1, 1, 1), (2, 4, 1), (3, 6, 2), (4, 4, 3), (5, 3, 5), (6, 6, 7), (7, 1, 8), (8, 4, 8), (9, 2, 11), (10, 4, 11), (11, 5, 13), (12, 1, 14), (13, 4, 16)]

for (num, col, row) in items:
	css = '''&:nth-child({0}) {{\n\tgrid-column-start: {1};\n\tgrid-row-start: {2};\n}}\n'''.format(num, col, row)
	print(css)


