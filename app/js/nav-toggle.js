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
    html.classList.remove("no-scroll")
    navToggle.setAttribute("aria-expanded", false);
  } else {
    html.classList.add("no-scroll")
    navToggle.setAttribute("aria-expanded", true);
  }
});