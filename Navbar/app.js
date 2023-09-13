// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

// --- longer method using add and remove classlist ---

// navToggle.addEventListener("click", function () {
// 	// console.log(links.classList);
// 	if (links.classList.contains("show-links")) {
// 		links.classList.remove("show-links");
// 	} else {
// 		links.classList.add("show-links");
// 	}
// });

// --- end of longer method ---

// --- "one liner" method using toggle classlist ---
navToggle.addEventListener("click", function () {
	links.classList.toggle("show-links");
});
// ---  end of "one liner" method ---
