const nav = document.querySelector(".navbar-nav");
const navLinks = document.querySelectorAll(".nav-link");
const navToggleBtn = document.querySelector(".menu-toggle-btn");
const navToggleClose = document.querySelector(".close-toggle-btn");

// nav toggle function
const navToggleFunc = function () {
  nav.classList.toggle("navbar-nav-active");
  navToggleBtn.classList.toggle("menu-toggle-btn-active");
  navToggleClose.classList.toggle("close-toggle-btn-active");
};

// close toggle function
const closeToggleFunc = function () {
  nav.classList.toggle("navbar-nav-active");
  navToggleBtn.classList.toggle("menu-toggle-btn-active");
  navToggleClose.classList.toggle("close-toggle-btn-active");
};

// add event on nav-toggle-btn
navToggleBtn.addEventListener("click", function () {
  navToggleFunc();
});

// add event on close-toggle-btn
navToggleClose.addEventListener("click", function () {
  closeToggleFunc();
});

// add event on all nav-link
for (let i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click", navToggleFunc);
}
