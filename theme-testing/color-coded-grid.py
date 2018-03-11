# color-coded-grid.py
# make a grid based on presence or absence of values from string input

students_raw = '''<span>Catherine Addington:</span>3D Printing, Digital Humanities<br/>
					<span>Andrew Carl:</span>3D Printing, Electronics, Wearables<br/>
					<span>Nic Dalton:</span>3D Printing, Modelling<br/>
					<span>Brandon Phan:</span>3D Printing<br/>
					<span>Marysia Serafin:</span>3D Printing'''

staff_raw = '''<span>Jeremy Boggs:</span>3D Printing, Electronics, Programming, Digital Humanities<br/>
					<span>Shane Lin:</span>3D Printing, Programming, Digital Humanities<br/>
					<span>Laura Miller:</span>3D Printing, Photogrammetry, Digital Humanities<br/>
					<span>Ammon Shepherd:</span>3D Printing, Electronics, Programming, Digital Humanities'''

raw = [students_raw, staff_raw]
split = [r.splitlines() for r in raw]

studs_list = [s.strip().replace('<br/>', '') for s in split[0]]
staff_list = [s.strip().replace('<br/>', '') for s in split[1]]

# goal: count up all the unique strings in the skills section, make a grid out of them alphabetically
# assign 1 or 0 to each person's grid row depending on expertise

nospan = [s.split('</span>') for s in staff_list]
# somespan = [s + '</span>' for s in nospan] # doesn't work, need to go 1 layer deeper