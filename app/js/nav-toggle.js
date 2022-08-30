const navBar = document.querySelector(".navbar");
const navLinks = document.querySelector(".navbar__links");
const navToggle = document.querySelector(".navbar__hamburger");
const body = document.querySelector("body");
const html = document.querySelector("html");

let configsClass = document.querySelector(".subnav__link--configs");
let specsClass = document.querySelector(".subnav__link--specs");

navToggle.addEventListener("click", () => {
  const visibility = navLinks.getAttribute("data-visible");
  const expanded = navToggle.getAttribute("aria-expanded");

  if (visibility === "false") {
    navLinks.setAttribute("data-visible", true);
  } else {
    navLinks.setAttribute("data-visible", false);
  }

  if (expanded === "true") {
    html.classList.remove("no-scroll");
    navToggle.setAttribute("aria-expanded", false);
    navLinks.classList.toggle("show");
  } else {
    html.classList.add("no-scroll");
    navToggle.setAttribute("aria-expanded", true);
    navLinks.classList.toggle("show");
  }
});

window.matchMedia("(max-width: 450px)").onchange = (e) => {
  if (e.matches) {
    specsClass.innerHTML = "Specs";
    configsClass.innerHTML = "Configs";
    console.log("This is a narrow screen — less than 450px wide.");
  } else {
    specsClass.innerHTML = "Specifications";
    configsClass.innerHTML = "Configurations";
    console.log("This is a wide screen — more than 450px wide.");
  }
};
