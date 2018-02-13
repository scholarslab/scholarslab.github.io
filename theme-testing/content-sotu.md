# Content State of the Union:

This document contains each section of content that will exist on the eventual home page of the new SLab site. Its purpose is to make visible the actual HTML (*as of 2/3*) alongside in-depth commentary on what kind of TLC it needs to get functional.

Notes:
1. I've tried to include names as specifically as possible so that the document is searchable per person.
2. However, I don't want this to be constricting; I'm sure I've left out names, and I want people to feel free to comment/take on sections in which they're not mentioned.
3. This is an absolute total spitball on how to handle an early-stage document with so many contributors, so, uh, buckle up and we'll see if we need to change approaches.
4. *Document does not include all homepage HTML; only that in the main content section.*
5. All commentary corresponds to comments in `content-index.html` as of 2/3.
6. All content can be seen in rendered form in `localhost:4000/theme-testing` if running server for site.

## Without Further Adieu:

1. Hero
* Status: good
	```html
	<div class="home__hero">
		<div class="home-hero__text">At the Scholars' Lab, our most important digital humanities <span class="if-big"><br/></span>project is our community of scholars: <span>mentors,</span> <span>learners,</span> <span>researchers,</span> <span>teachers,</span> <span>crafters & </span><span>makers,</span> <span>collaborators.</span> This site hopes to explore what that means, because we'd love for you to be a part of it.</div>
	</div>
	```
2. FAQ
* Status: good
	```html
	<div class="home__faq">
		<div class="home-faq__title">Frequently Asked Questions</div>
		<div class="home-faq__content">
			<div class="home-faq__subtitle">A round-up of some questions about the Scholars' Lab that we encounter most.</div>
			<div class="home-faq__questions">
				<div><a href="#">What is digital humanities?</a></div>
				<div><a href="#">How does the Scholars' Lab fit with what you're doing?</a></div>
				<div><a href="#">How does the Lab fit into to the University of Virginia Library system?</a></div>
			</div>
			<div class="home-faq__cta">Find answers to these questions and more. <a href="#">FAQ Home</a></div>
		</div>
	</div>
	```

3. Contact
* Status: surface = fine; core = bad
* Issues: no consensus on what the page links to; if it's not a straightforward contact page we should address where to put one, and if it is, is this wording misleading? Possible solutions include: add another sentence to this that is clearly linking to a straight up contact page, so that "Click here" can reasonably link to a consultation form
Content needed: contact form. We need to have a meeting about what specific ways we want people to be able to contact us, and then create appropriate form(s) to make that happen. This is urgent and should happen at the beginning of this coming week (2/5).
	```html
	<div class="home__contact--1">
		<div class="home-contact__title">Contact Us</div>
		<div class="home-contact__cta">Curious about experimental & digital humanities research & teaching? <a href="#">Click here</a> to join our community&mdash;absolutely zero experience needed.</div>
	</div>
	```

4. Graduate Hub
* Status: good
	```html
	<div class="home__grads">
		<div class="home-grads__title">Student Opportunities</div>
		<div class="home-grads__content">
			<div class="home-grads__subtitle">One of our primary missions is to support the work of emerging scholars and digital humanities practitioners&mdash;particularly UVa graduate students. We offer a variety of fellowships and opportunities to this end, which collectively aim to support graduate students during the full measure of their time at UVA. From the innovative <a href="praxis.scholarslab.org">Praxis Program</a> to professionalization training for students on the DH job market, we're here to help whether you're looking to answer a specific call for applications or simply looking to discuss your research.</div>
			<div class="home-grads__cta"><a href="#">Student Opportunities Home</a></div>
		</div>
	</div>
	```
	
5. Office Hours
* Status: good
	```html
	<div class="home__office-hours">
		<div class="home-hours__title">Open Office Hours</div>
		<div class="home-hours__when">Every Monday during fall and spring term, 10am-11:30am.</div>
		<div class="home-hours__info">Stop by the discussion area just inside the Scholars' Lab Common Room to chat with our DH experts about your ideas, from your earliest questions and broad ideas through formal projects. (See diagram for where we are!)</div>
	</div>
	```

6. Floor Diagrams
* Status: bad right now, fine once KBD puts Beth's diagram in, good once have final diagram
* Issues:  basic floor diagram now exists! KBD needs to look it over and get back to Beth about making any additional ones, if we want one to label where office hours are or something.
	```html
	<div class="home__floor-diagram">
		<div class="home-diagram__title">Our Spaces: A Diagram</div>
	<!--span>Because no one was born knowing where a common room is.</span-->
		<div class="home-diagram__content">
			<img src="img/dummy-floor-plan.png" height="300px" alt="Floor diagram of Scholars' Lab spaces" title="By the lovely Beth Mitchell">
		</div>
	</div>
	```
	
7. Makerspace
* Status: fine
* Issues: mostly need to ask Shane and Laura to look it over and make changes as they see fit.
	```html
	<div class="home__makerspace-corner">
		<div class="home-makerspace__title">Makerspace</div>
		<div class="home-makerspace__content">
			<div class="home-makerspace__text"><!-- Insert short description, a pic, and event preview, or whatever @Shane et al. find useful -->The Scholars’ Lab Makerspace is a place for tinkering and experimentation with technologies like desktop fabrication, physical computing, and augmented reality. Open to everyone, we specialize in applications and research questions in the humanities and arts.
			Find things like 3-D printing, wearable technologies, physical computing, & more at our space <a href="#">in the middle of the Scholars' Lab Common Area</a>.</div>
			<div class="home-makerspace__hours"><span>Staffed Hours:</span>Mondays: 1-7pm<br/>Tuesdays: 1-9pm<br/>Wednesday: 1-7pm<br/>Thursday: 1-9pm<br/>Friday: 1-5pm</div>
			<div class="home-makerspace__cta"><a href="#">Makerspace Home</a></div>
		</div>
	</div>
	```

8. Spatial Tech
* Status: here = good, page itself = bad
* Issues: KBD should change class name, page doesn't exist in final form (merging GIS + AR/VR/etc) yet
	```html
	<div class="home__gis-corner">
		<div class="home-gis__title">Spatial Technologies</div>
		<div class="home-makesrpace__content">
			<div><strong>Experts at thinking about space+time.</strong>We've got experts in GIS and other mapping approaches (including our own Neatline project for telling stories that combine timelines+maps), cultural heritage informatics, augmented reality, virtual reality, 3D modeling, photogrammetry and scanning, aerial footage, and more (e.g. workshops, job opportunities, internships)Insert short description, a pic, and event preview, or whatever @Will/Arin/Drew/Chris et al. find useful here; update list of stuff supported above to be accurate.</div>
		</div>
	</div>
	```
	
9. Events
* Status: fine (wording = good, event preview = bad)
* Issues: need to ask Zoe, Amanda, and/or Laura on how to actually get the events in here. Also: ask Laura about the 3-5 event categories so can get to work on colorizing
	```html
	<div class="home__events">
		<div class="home-events__title">Events</div>
		<div class="home-events__description">One-time or regular, hands-on workshops and discussion-rich symposia, a quick intro or community group&mdash;whatever your flavor, we probably have an event for it. Upcoming events below, or find the full list <a href="#" aria-label="Events page">here</a>.</div>
		<!-- insert div previewing some events -->
	</div>
	```

10. Learning Hub
* Status: fine
* Issues: page itself doesn't exist, you want to be the one to think through how these are presented and haven't gone through the materials yet. Use Amanda's text analysis + Zoe's network outlines + yours for CSS to shape what the common elements of these sections are. If there aren't that many common elements, just disclaim on the homepage that the learning process for these is different. Each author should also kind of make an estimate on how long it took them to learn something so that people know what they're in for. (Contextualized and disclaimed as individual experience, of course. Makes nice tie-in to link to the author's origin story, actually.)
	```html
	<div class="home__learn">
		<div class="home-learn__title">Learning Resources: Our Starter Kits</div>
		<div class="home-learn__content">Starter kits contain example projects, novice-friendly explainers and tutorials, and other hints for dipping your toes into a DH method or figuring out what method you want to learn. Maybe you don't even know you're interested in DH yet, or want to check out the basics of mapping or web design before you come talk to us. Curated by our in-house experts on each topic.</div>
		<div class="home-learn__links">
			<a href="#">Peruse all starter kits</a> or check out our most popular resources:
			<div class="home-learn__link--1">What are networks and why might I care?</div>
			<div class="home-learn__link--2">Sustainable web projects</div>
			<div class="home-learn__link--3">Getting the text for your digital text project</div>
			<div class="home-learn__link--4">You can also <a href="#">request a starter kit</a> around a topic we haven't covered yet.</div>
		</div>
	</div>
	```

11. Listserv
* Status: fine
* Issues: ask Laura/Amanda for listserv address and/or how to hook that up to email input; Zoe might also know stuff about the email part.
	```html
	<div class="home__listserv-prompt">
		<div class="home-listserv__title" title="Also maybe dogs">Keep up with what we're doing. We'll only send you cool stuff about upcoming events and workshops, grants, and opportunities for collaboration or paid apprenticeships.</div>
		<div class="home-listserv__content">
			<div class="home-listserv__input">< insert input tag for entering email ></div>
			<button class="home-listserv__btn">Keep me in the loop</button>
		</div>
	</div>
	```

12. People
* Status: good
	```html
	<div class="home__people">
		<div class="home-people__title">Our People</div>
		<div class="home-people__content">Like we said, our digital humanities is people. Meet the folks who give this place its soul&mdash;and its abundance of dog memes.<br/><a href="#" aria-label="Link to 'People' page">Find them here.</a></div>
	</div>
	```

13. Origin Stories
* Status: here = good, page itself = bad
* Issues: page itself doesn't exist
	```html
	<div class="home__origin-stories">
		<div class="home-origins__title">Origin Stories</div>
		<div class="home-origins__content"><span>"How did you... end up in digital humanities?" </span>Most of our answers are closer to a spiral than a straight line. Insert words about some of us started in history or English or econ and tumbled from there, and it's relevant because you the user might be nervous that everyone got there in a straight line. Give a couple of <a href="#">funny hints</a> about anecdotes that link to <a href="#">specific people's</a> pages. Check out the full round-up <a href="#">here</a>.</div>
	</div>
	```

14. Blog
* Status: bad
* Issues: see: everything I wrote on the "Events" section (#9), and need to determine appropriate preview for posts. Tagging system also applies here and I can't remember whom I've talked about that with, so clear that up with Amanda and Laura ASAP.
	```html
	<div class="home__blog">
		<div class="home-blog__title">Our Blog</div>
		<div class="home-blog__content">Preview a few recent posts here. <a href="#" aria-label="Blog home">Check out</a> what we're writing about/thinking/doing.</div>
	</div>
	```

15. Staff Project
* Status: fine
* Issues: page itself doesn't exist, but isn't urgent and will be one of the last things created for the site. We can go live without this section existing yet. Prioritize finishing integral sections before starting this one, unless something ends up dovetailing.
	```html
	<div class="home__staffer-projects">
		<div class="home-projects__title">Staffer Projects</div>
		<div class="home-projects__content"><span>See what our staff is passionate about.</span><a href="#" aria-label="Staffer projects home">Insert link words.</a></div>
	</div>
	```

16. Contact Us IRL
* Status: bad
* Issues: should this be different than the first one? In what way? Boils down to same issues as first contact section (#3), in that we don't have established links/forms for given situations, nor have we decided that a one-size-fits-all solution is best. Need to figure out ASAP.
	```html
	<div class="home__contact--2" title="SLab casual: just shirt, shoes, & curiosity required">
		<div class="home-contact2__title">Let's meet up.</div>
		<div class="home-contact2__content">Come set up a <a href="#">consultation</a> with us. Very casual. Something something if you have a project and wanna fit DH into it, or something something no pressure other reason. <span>Just fill out the form found <a href="#">here</a>.</div>
	</div>
	```
	
17. Charter
* Status: good
	```html
	<div class="home__charter-link">
		<div class="home-charter__title">Our Charter</div>
		<div class="home-charter__content">We do our best to put action into <a href="#">our values</a>, but we can always do better. Read about our mission and help us shape the digital humanities we want to see.</div>
	</div>
	```

18. Colophon
* Status: surface = bad; core = fine
* Issues: need to figure out ASAP if this is still what we want this section called, and get history on why it's called that in the first place since this is usually a thing for books. It's important to have a credits section so I want to work out what goes in here and what the title is by the end of next week (2/5-2/9).
	```html
	<div class="home__colophon">
		<div class="home-colophon__title">Colophon</div>
		<div class="home-colophon__content" title="Ingredients, one might say...">How the <s>sausage</s>, (er, website) gets made. We're pretty proud of the <a href="#" aria-label="Colophon page">ingredients.</a></div>
	</div>
	```