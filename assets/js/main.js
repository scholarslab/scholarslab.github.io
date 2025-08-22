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
});
