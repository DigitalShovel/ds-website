const navBar = document.querySelector(".navbar");
const navLinks = document.querySelector(".navbar__links");
const navToggle = document.querySelector(".navbar__hamburger");
const body = document.querySelector("body");
const html = document.querySelector("html");

navToggle.addEventListener("click", () => {
  const visibility = navLinks.getAttribute("data-visible");
  const expanded = navToggle.getAttribute("aria-expanded");

  if (visibility === "false") {
    navLinks.setAttribute("data-visible", true);
  } else {
    navLinks.setAttribute("data-visible", false);
  }

  if (expanded === "true") {
    navToggle.setAttribute("aria-expanded", false);
  } else {
    navToggle.setAttribute("aria-expanded", true);
  }
});

// let last_known_scroll_position = 0;

// window.addEventListener("scroll", () => {
//   last_known_scroll_position = window.scrollY;

//   if (last_known_scroll_position > 0) {
//     navBar.classList.add("no-padding");
//   } else {
//     navBar.classList.remove("no-padding");
//   }
// });
