document.addEventListener("DOMContentLoaded", () => {
	const nav = document.querySelector("nav");
	const menuElement = nav.querySelector("ul");
	const controllerElement = document.getElementById("global-navigation-toggle");
	const menu = new TopLinkDisclosureMenu({
		menuElement,
		submenuItemSelector: ".dropdown",
		containerElement: nav,
		controllerElement,
		optionalKeySupport: true,
		hoverType: "on", // "on", "dynamic"
	});

	controllerElement.addEventListener("click", function() {
		var isExpanded = this.getAttribute('aria-expanded');
		if (isExpanded == "false") {
			this.textContent = "☰";
		} else {
			this.textContent = "×";
		}
	});
	
	// click event for Alumni Placements 
	document.querySelectorAll(".job").forEach(function(clickedBubble) {
		clickedBubble.addEventListener("click", function() {
			const isExpanded = clickedBubble.classList.contains("is-expanded");
			const uvaProgramDiv = document.createElement('div');
			const uvaProgramClass = uvaProgramDiv.classList.contains("uva-program");
			const bubbleParent = // clickedBubble.closest('expanded-bubble');
			
			document.querySelectorAll(".job").forEach(function(bubble) {
				bubble.classList.remove("is-expanded");
			});

			if (!isExpanded) clickedBubble.classList.add("is-expanded"); 
			
			if (isExpanded && !uvaProgramClass) bubbleParent.appendChild("uvaProgramDiv");
			uvaProgramDiv.classList.add("uva-program");

			// remove .uva-program from all .job
			// on click, create div.uva-program right to div.job;
			// add ul inside div.uva-program and how many ppl each;

		});
	});
});