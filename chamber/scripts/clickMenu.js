const menubutton = document.querySelector("header button");
const menuitems = document.querySelectorAll("nav");

menubutton.addEventListener("click", () => {
	menuitems.forEach((item) => item.classList.toggle("open"));
	menubutton.classList.toggle("close");
});
