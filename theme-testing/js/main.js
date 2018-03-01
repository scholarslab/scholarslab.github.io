(function() {
	// Section 2.1: Top nav 2, electric boogaloo
	(function() {
		var wrapper = document.querySelector(".nav-wrapper");

		function changeNavHeight() {
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