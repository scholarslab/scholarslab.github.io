test = '''prop: value
		prop2: foobar'''

array = test.replace('\t', '').split('\n')

splitarray = [a.split(': ') for a in array]

key = [a[0] for a in splitarray]

print(key)