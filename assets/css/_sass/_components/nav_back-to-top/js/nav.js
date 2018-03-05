(function() {
	// Section 2.1: Top nav 2, electric boogaloo
	(function() {
		var wrapper = document.querySelector(".nav-wrapper");
		wrapper.setAttribute("data-scroll-y", window.scrollY);

		function showHideNav() {
			console.log(window.scrollY.toFixed(2));
			console.log(wrapper.getAttribute("data-scroll-y"));
			var lastPosition = parseInt(wrapper.getAttribute("data-scroll-y"));

			if (window.scrollY < lastPosition && window.scrollY >= window.innerHeight / 2) {
			 	console.log("UP");
				wrapper.classList.add("nav-wrapper--scroll-up");
			}
			else if (window.scrollY > lastPosition || window.scrollY.toFixed(1) <= 10) {
				console.log("DOWN");
				wrapper.classList.remove("nav-wrapper--scroll-up");
			}
			
			wrapper.setAttribute("data-scroll-y", window.scrollY);
		}

		window.addEventListener("scroll", showHideNav, false);
	})();
})();