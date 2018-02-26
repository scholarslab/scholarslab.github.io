(function() { 

	// Section 1: Homepage
/*	(function() {
		// set dot height = width
		var dotsWrapper = document.querySelector(".home-dots-wrapper");
		var dot = document.querySelector(".home-dots__dot");
		var width = dot.getBoundingClientRect().width;
		dotsWrapper.setAttribute("style", `grid-auto-rows:${width}px`);
		// repeat this on resize ** NEED TO DO! **

		// calculate # of divs to make (grid matrix dimensions)
		var cols = Math.floor(dotsWrapper.offsetWidth / width);
		var rows = Math.floor(dotsWrapper.offsetHeight / width) + 2;
		var numDots = cols * rows;

		for (var i=0; i<numDots; i++) {
			dotsWrapper.appendChild(dot.cloneNode(true));
		}
	})(); */

	// Section 2: Top nav
	(function() {
		var topNav = document.querySelector(".include--topnav"); // outer <nav> element
		var navBackground = document.querySelector(".topnav__background");

		function changeNavHeight() {
			// if offsetTop of document is >0 (may change), add class that makes topnav height smaller or 0
			// this part will need nuance ^^^
			// if scroll up by 50px or more - so if change in scrollY is less than -50px? - remove class
			// when to trigger:

			// oh or just do the background opacity thing???  
			console.log(window.scrollY);
			var lastPosition = window.scrollY;
		//	if (lastPosition > window.innerHeight) {
		//		topNav.classList.add("topnav-scroll--hide");
		//	}
			if (lastPosition > topNav.offsetHeight) {
				navBackground.classList.add("topnav-scroll--down");
			}
			else if (lastPosition <= topNav.offsetHeight) {
				navBackground.classList.remove("topnav-scroll--down");
			}
		}

		window.addEventListener("scroll", changeNavHeight);
	})();
})();