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

	document.querySelectorAll(".job").forEach(function(clickedBubble) {
		clickedBubble.addEventListener("click", function() {
			const isExpanded = clickedBubble.classList.contains("is-expanded");
			document.querySelectorAll(".job").forEach(function(b) {
				b.classList.remove("is-expanded");
			});
			if (!isExpanded) clickedBubble.classList.add("is-expanded");

			// on click, create div.uva-program right to div.job
			uvaProgramDiv = document.createElement('div');
			clickedBubble.appendChild(uvaProgramDiv);
			uvaProgramDiv.classList.add('uva-program');

			// add ul inside div.uva-program  and how many ppl each

		});
	});
});