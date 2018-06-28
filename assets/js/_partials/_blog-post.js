// 4. Blog Post:
if (document.querySelector(".post-wrapper")) {
	var postContent = document.querySelector(".post__content");
	var elems = postContent.children;
	var first = elems[0];
	if (first.querySelector("em") && first.innerText.length === first.querySelector("em").innerText.length) {
		first.classList.add("post-content__letter--default");
		elems[1].classList.add("post-content__letter--styled");
	}
	// test for elems that are a) bold and b) have only one child
	// Markdown would be: **Newlines surrounding this statement**
	for (let elem of elems) {
		if (elem.querySelector("strong") && elem.children.length === 1 && elem.innerText.length === elem.querySelector("strong").innerText.length) {
			elem.classList.add("post__section-title");
		}
	}
}