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
	var jobBubbles = document.querySelectorAll(".job");

	// wrap each .job + .uva-program in a .job-pair so they stay together when row wraps
	jobBubbles.forEach(function(bubble) {
		const sibling = bubble.nextElementSibling;
		if (sibling && sibling.classList.contains("uva-program")) {
			const wrapper = document.createElement("div");
			wrapper.classList.add("job-expanded");
			bubble.parentNode.insertBefore(wrapper, bubble);
			wrapper.appendChild(bubble);
			wrapper.appendChild(sibling);
		}
	});

	jobBubbles.forEach(function(clickedBubble) {
		clickedBubble.addEventListener("click", function() {
			const isExpanded = clickedBubble.classList.contains("is-expanded");

			jobBubbles.forEach(function(bubble) {
				bubble.classList.remove("is-expanded");
				const sibling = bubble.nextElementSibling;
				if (sibling && sibling.classList.contains("uva-program")) {
					sibling.style.display = "none";
				}
			});

			if (!isExpanded) {
				clickedBubble.classList.add("is-expanded");
				const programDiv = clickedBubble.nextElementSibling;
				if (programDiv && programDiv.classList.contains("uva-program")) {
					programDiv.style.display = "flex";
				}
			}
		});
	});
});