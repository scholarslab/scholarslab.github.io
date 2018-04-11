(function() {
	// Research gallery:
	(function() {
		var items = document.querySelectorAll(".research__item");

		document.addEventListener("DOMContentLoaded", setItemHeight)

		window.addEventListener("resize", setItemHeight);

		// equalize width & height
		function setItemHeight() {
			var width = items[0].offsetWidth;
			for (let item of items) {
				var newHeight = width.toString() + "px";
				item.style.height = newHeight;
			}
		}
	})();
})();