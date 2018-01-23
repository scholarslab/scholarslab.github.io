string = "1.0,1.1,1.2,1.3,1.4,1.5,1.6,1.7,1.8,2.0,2.1,2.2,2.3,2.4,3.0,3.1,4.0,4.1,4.2,4.3,4.4,4.5,4.6,4.7"

nums = string.split(",")

newnums = ["0." + num for num in nums]

for num in newnums:
	print(num)