(function() {
	// set dot height = width
	var dotsWrapper = document.querySelector(".home-dots-wrapper");
	var dot = document.querySelector(".home-dots__dot");
	var width = dot.getBoundingClientRect().width;
	dot.style.height = width + "px";
	var dotUpdate = document.querySelector(".home-dots__dot");
	dotsWrapper.setAttribute("style", `grid-auto-rows:${width}px`);
	// repeat this on resize

	// calculate # of divs to make (grid matrix dimensions)
	var cols = Math.floor(dotsWrapper.offsetWidth / width);
	var rows = Math.floor(dotsWrapper.offsetHeight / width);
	var numDots = cols * rows;

	for (var i=0; i<numDots; i++) {
		dotsWrapper.appendChild(dotUpdate.cloneNode());
	}
})();