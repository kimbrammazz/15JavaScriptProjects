// select elements
const sidebar = document.querySelector(".sidebar");
const toggleBtn = document.querySelector(".sidebar-toggle");
const closeBtn = document.querySelector(".close-btn");

// functionality
toggleBtn.addEventListener("click", function () {
	// console.log(sidebar.classList);
	sidebar.classList.toggle("show-sidebar");
});

closeBtn.addEventListener("click", function () {
	sidebar.classList.remove("show-sidebar");
});
