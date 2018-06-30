/* Hours & Spaces SVG: */

if (document.querySelector(".home__find-us")) {
	var spaceList	= document.querySelector(".home-find__content ul");
	var spaceItems 	= document.querySelectorAll(".home-find__content ul li");
	var dataNames 	= Array.from(spaceItems, item => item.getAttribute("data-name"));
	var svgElems 	= document.querySelectorAll(".home-find__diagram svg g");
	// shapes that are labeled spaces:
	var svgFiltered = Array.prototype.filter.call(svgElems, elem =>
		dataNames.find( name => name == elem.id)
	);
	console.log(dataNames);
	console.log(svgElems);
	console.log(svgFiltered);

	var touchEv = new Hammer(spaceList);

	touchEv.on("tap", highlightMatchingElem);

	function highlightMatchingElem(e) {
	//	e.target.style.color = "red";
	}
}