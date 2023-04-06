let navBar = document.querySelector(".navbar");
let toggleDiv = document.querySelector(".navbar_toggle");
let toggleButton = document.querySelector(".navbar_toggle-icon");
let logo = document.querySelector(".navbar_logo");
let navNames = document.querySelectorAll(".navbar_nav-name");
let pages = document.querySelectorAll(".page");

toggleButton.addEventListener("click", toggleButtonEvent);

function toggleButtonEvent() {
  toggleLogo();
  toggleNavNames();
  toggleTextRight();
  invertToggleButton();
  toggleMarginLeft();
}

function invertToggleButton() {
  toggleButton.classList.toggle("invert");
}

function toggleLogo() {
  logo.classList.toggle("reduced");
}

function toggleTextRight() {
  toggleDiv.classList.toggle("align-left");
}

function toggleNavNames() {
  navNames.forEach(function (navName) {
    navName.classList.toggle("reduced");
  });
}

function toggleMarginLeft() {
  pages.forEach(function (page) {
    page.classList.toggle("margin-left-small");
  });
}
