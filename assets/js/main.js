(function() {
	// Research gallery:
	(function() {
		if (document.querySelector(".research-main-content")) {
			var items = document.querySelectorAll(".research__item");
			var galleries = document.querySelectorAll(".research-items-wrapper");

			document.addEventListener("DOMContentLoaded", setItemHeight)

			window.addEventListener("resize", setItemHeight);

			// equalize width & height
			function setItemHeight() {
				var width = items[0].offsetWidth;
				for (let item of items) {
					var newHeight = width.toString() + "px";
					item.style.height = newHeight;
				}

				var rowHeight = (width / 2).toString() + "px";
				for (let gallery of galleries) {
					gallery.style.gridAutoRows = "minmax(" + rowHeight + ", auto)";
				}
			}
		}
	})();
})();