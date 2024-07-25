document.addEventListener("DOMContentLoaded", () => {
	const nav = document.querySelector("nav");
	const menuElement = nav.querySelector("ul");
	const controllerElement = nav.querySelector("button");

	const menu = new TopLinkDisclosureMenu({
	  menuElement,
	  submenuItemSelector: ".dropdown",
	  containerElement: nav,
	  controllerElement,
	  optionalKeySupport: true,
	  hoverType: "on", // "on", "dynamic"
	});
  });
