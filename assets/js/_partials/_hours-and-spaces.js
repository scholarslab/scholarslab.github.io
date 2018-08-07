/* Hours & Spaces SVG: */

if (document.querySelector(".home__find-us")) {
	var spaceList	= document.querySelector(".home-find__content ul");
	var spaceItems 	= document.querySelectorAll(".home-find__content ul li");
	var dataNames 	= Array.from(spaceItems, item => item.getAttribute("data-name"));
	var svg 		= document.querySelector(".home-find__diagram svg");
	var svgElems 	= document.querySelectorAll(".home-find__diagram svg g");
	// shapes that are labeled spaces:
	var svgFiltered = Array.prototype.filter.call(svgElems, elem =>
		dataNames.find( name => name == elem.id)
	);
	// touch event handler:
	var touchEv = new Hammer(spaceList);
	console.log(dataNames);
	console.log(svgElems);
	console.log(svgFiltered);

	spaceList.addEventListener("mouseover", highlightMatchingElem);
	touchEv.on("tap", highlightMatchingElem);

	function highlightMatchingElem(e) {
		if (e.target !== e.currentTarget) {
			let elem  = e.target;
			let g 	  = svgFiltered.find(g => g.id == elem.getAttribute("data-name"));
			let fills = g.querySelectorAll('[class*="fill__"]');

			e.target.classList.add("highlight-text--js");
			for (let fill of fills) {
				fill.classList.add("highlight-svg--js");
			}

			// tap
			if (e.type == "tap") {
				touchEv.on("tap", () => {
					e.target.classList.remove("highlight-text--js");
					for (let fill of fills) {
						fill.classList.remove("highlight-svg--js");
					}
				});
			}
			// hover
			else {
				elem.addEventListener("mouseleave", () => {
					e.target.classList.remove("highlight-text--js");
					for (let fill of fills) {
						fill.classList.remove("highlight-svg--js");
					}
				});
			}
		}
		if (e.type !== "tap") {
			e.stopPropagation();
		}
	} // end highlight fxn
}