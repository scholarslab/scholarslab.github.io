---
author: chris-gist
date: 2017-11-14 12:35:03+00:00
layout: post
slug: 3d-printed-enclosures-with-openscad
title: 3D Printed Enclosures with OpenSCAD
categories:
- Digital Humanities
- Grad Student Research
- Makerspace
- Technical Training
---

This is a tutorial on how to use OpenSCAD to design a 3D object via code instead of using a WYSIWYG editor like Tinkercad, Fusion360, etc. We are currently creating a customized media player to allow people to interact with MP3 artifacts. We've been working in Python to prepare the audio and wanted to generate the enclosure programmatically as well, ideally using open source software. OpenSCAD is a great open source solution for CAD and 3D printing projects.

**Modules**

In OpenSCAD, you can quickly build duplicates of small parts into more complex designs using "modules". By assigning variables to parameters, you can vary the size and location of these objects easily. Modules also help break a larger job into more manageable parts and keep the code nice and clean. The four modules below construct the main body of the enclosure, arrange the holes in the enclosure for our electronic components, add a texture to the enclosure, and assemble all the pieces together. After calling those four modules, all that is left to do is split the enclosure in two and render the halves as separate STL files for printing.



**Main Enclosure Body**

    
    <code>
    /* This module constructs the main body of the enclosure. First, we name the module: */
    
    module enclosure() {
    
    /* Next, we call the difference function. This specifies that we will be subtracting the second object we call from the first. We will use this to make our cube hollow. */
    
    difference() {
    
    /* The first object will be our main cube. to give the cube rounded edges, we call minkowski, which will trace the shape we specify around the edges. We will use a sphere, so that the hard edges of the cube will take on the shape of the sphere. */
    
    minkowski()
    {
    
    /* Lastly, I am calling difference again here because I wanted to add a small indentation to the bottom of the cube so that it would be more comfortable to hold. Again, difference subtracts the second object from the first, so here, we see a cube; and then an offset (translated), smaller cube(); */
    
    difference()
    {
    cube([60,40,15], center=true);
    translate([-15,-10,-8])
    cube([30,20,1.5]);
    };
    
    /* Having constructed the main box, we can now specify the size of the sphere that we will use to round the edges. */
    
    sphere(2);
    };
    
    /* Having specified our main enclosure body with rounded edges and an indentation on the bottom, we finally hollow it out. */
    
    cube([61.5,41.5,16], center=true);
    }
    }
    </code>






**Making Holes for Electronics Components**

The second module creates all of the holes that we will place in the enclosure for our electronics components.

    
    <code>
    module enclosureHoles() {
    
    /* This section of the code constructs all of the independent holes and joins them into a uniform object. */
    
    union() {
    
    // Screen
    translate([-13.75,-11,5.5])
    cube([27.5, 19.375, 5]);
    
    // LED Backlight
    translate([-14.6875,10,5.5])
    cube([29.375, 8.75, 5]);
    
    // Volume Pot
    translate([0,-15.75,5.5])
    rotate([0,0,0])
    cylinder(r=1.25, h=5);
    
    // Pushbutton #1
    translate([21.5,0,5.5])
    rotate([0,0,0])
    cylinder(r=4.75, h=5);
    
    // Pushbutton #2
    translate([23.5,-12,5.5])
    rotate([0,0,0])
    cylinder(r=4.75, h=5);
    
    // Pushbutton #3
    translate([-21.5,0,5.5])
    rotate([0,0,0])
    cylinder(r=4.75, h=5);
    
    // Pushbutton #4
    translate([-23.5,-12,5.5])
    rotate([0,0,0])
    cylinder(r=4.75, h=5);
    }
    }
    </code>






**Adding a surface texture**

The next module creates a texture on the surface of our enclosure from an image file. We wanted to use an image of JPEG artifacts for our project, but you could use anything you'd like, or skip this step entirely. Be sure to keep your PNG files very simple here, otherwise you will run into problems when trying to render. When our PNG file was 31kb it took many hours to render and resulted in a huge STL file that was impossible to print. We needed to get our PNG down to 6kb to make it render in a reasonable amount of time. This resulted in a 5mb STL file. Still kind of big, but reasonable. Below, we call the translate() function so that it sits right on the surface of our enclosure.

    
    <code>
    module texture() {
    translate([0,0,9])
    scale([.41,.36,.006]) surface(file="/Users/YourUsername/Path/To/Your/File/fileName.png",
    center=true);
    }
    </code>






**Bringing it all together**

The final module assembles the previous three modules together.

    
    <code>
    module concat() {
    
    /* Difference subtracts the second object from the first */
    
    difference() {
    
    /* Our first object is the Union of two objects. Here, union attaches the texture to the enclosure. */
    
    union() {
    texture();
    enclosure();
    };
    
    /* the semicolon signals that that is a complete object. Now the second object is the one we made from the various holes. */
    
    enclosureHoles();
    }
    }
    </code>






**Rendering and Printing**

Now all we have to do is render using concat() and save as an STL!

    
    <code>
    /* To render the entire design, run: */ 
    
    concat();
    
    /* To actually print, we’ll need to render it in two separate halves which we will attach later. So, comment out the above concat() command and instead run the below code to render the top only */
    
    difference() {
    concat();
    translate([0,0,-8.5])
    cube([65,44,2], center=true);
    }
    
    /* then, comment the above out and run the following code to render the bottom only */
    
    difference() {
    concat();
    translate([0,0,2])
    cube([65,44,16], center=true);
    }
    </code>




That's all there is to it! With the two halves rendered, all you have to do is save them as STL Files and then use your favorite 3D printing prep software to print.

If you'd like to learn more about OpenSCAD, here is a link to a great [cheat sheet](http://www.openscad.org/cheatsheet/).
