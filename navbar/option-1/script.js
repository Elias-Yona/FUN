const nav = document.querySelector(".navbar-nav");
const navLinks = document.querySelectorAll(".nav-link");
const navToggleBtn = document.querySelector(".menu-toggle-btn");

// nav toggle function
const navToggleFunc = function () {
  nav.classList.toggle("active");
  navToggleBtn.classList.toggle("active");
};

// add event on nav-toggle-btn
navToggleBtn.addEventListener("click", function () {
  navToggleFunc();
  console.log(1);
});

// add event on all nav-link
for (let i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click", navToggleFunc);
}
