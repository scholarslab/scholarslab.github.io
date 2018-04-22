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

	// Recent posts:
	(function() {
		if (document.querySelector(".person-wrapper")) {
			var postList = document.querySelector(".person-posts__list");
			var posts = postList.children;

			document.addEventListener("DOMContentLoaded", setItemHeight)

			window.addEventListener("resize", setItemHeight);

			// equalize width & height
			function setItemHeight() {

				var width = posts[0].offsetWidth;
				var n = 1;
				for (let post of posts) {
					post.style.gridColumn = n.toString();
				//	let width = post.offsetWidth / posts.length;
				//	var newHeight = width.toString() + "px";
					post.style.height = width.toString() + "px";
					// increment
					n = n+1;
				}

		//		var rowHeight = (width / 2).toString() + "px";
		//		for (let gallery of galleries) {
		//			gallery.style.gridAutoRows = "minmax(" + rowHeight + ", auto)";
		//		}
			}	
		}
	})();
})();