# for spreadsheet:

string = "1.0,1.1,1.2,1.3,1.4,1.5,1.6,1.7,1.8,2.0,2.1,2.2,2.3,2.4,3.0,3.1,4.0,4.1,4.2,4.3,4.4,4.5,4.6,4.7"
nums = string.split(",")
newnums = ["0." + num for num in nums]

#for num in newnums:
#	print(num)

# for homepage grid:

s = "small"
m = "medium"
l = "large"

sizes = [s, s, s, s, s, l, m, s, m, m, l, s, m, s, m, l, s, m, s, s, s, s]
sizeinitials = [s[0] for s in sizes]
nums = [str(n) for n in range(1,23)]

for size, letter, num in zip(sizes, sizeinitials, nums):
	div = '''<div id="{1}{2}" class="home-item--{0}">{2}, {0}</div>'''.format(size, letter, num)
	print(div)