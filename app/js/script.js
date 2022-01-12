/*=============== DARK LIGHT THEME ===============*/
const themeBtn = document.getElementById("theme-button");
const lightTheme = "light";
const iconTheme = "ri-sun-line";

//Previosly selected theme
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

//Obtain current theme based on selection type
const getCurrentTheme = () => (document.body.classList.contains(lightTheme) ? "light" : "dark");
const getCurrentIcon = () => (themeBtn.classList.contains(iconTheme) ? "ri-moon-line" : "ri-sun-line");

if (selectedTheme) {
	document.body.classList[selectedTheme === "light" ? "add" : "remove"](lightTheme);
	themeBtn.classList[selectedIcon === "ri-moon-line" ? "add" : "remove"](iconTheme);
}

themeBtn.addEventListener("click", () => {
	// Add or remove the light / icon theme
	document.body.classList.toggle(lightTheme);
	themeBtn.classList.toggle(iconTheme);
	// We save the theme and the current icon that the user chose
	localStorage.setItem("selected-theme", getCurrentTheme());
	localStorage.setItem("selected-icon", getCurrentIcon());
});

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
	origin: "top",
	distance: "50px",
	duration: 3000,
	delay: 500,
	// reset: true
});

sr.reveal(`.nav`);
sr.reveal(`.hero__tag`, { delay: 3000 });
sr.reveal(`.hero-left`, { delay: 600, origin: "left" });
sr.reveal(`.hero__desc,.hero__btns`, { delay: 600, origin: "bottom" });
sr.reveal(`.hero-right`, { delay: 1000, origin: "right" });
sr.reveal(`.exercises`, { origin: "bottom" });
sr.reveal(`.exercises__header`, { delay: 600 });
sr.reveal(`.trainers__heading,.trainers__artwork`, { interval: 100, origin: "right" });
sr.reveal(`.trainers-box`, { interval: 100, origin: "left" });
sr.reveal(`.trainer-1,.trainer-2,.trainer-3`, { interval: 100 });

const programs = document.querySelectorAll(".program__item");

programs.forEach(() => {
	sr.reveal(`.program__item`, { interval: 100 });
});
