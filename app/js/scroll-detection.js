let product = document.querySelector("#product");
let specs = document.querySelector("#specifications");
let bundle = document.querySelector("#bundle");
let configs = document.querySelector("#configurations");

let productLink = document.querySelector(".subnav__link--product");
let specsLink = document.querySelector(".subnav__link--specs");
let bundleLink = document.querySelector(".subnav__link--bundle");
let configsLink = document.querySelector(".subnav__link--configs");

let check = false;

window.addEventListener("scroll", () => {
  if (window.innerWidth >= 992) {
    if (scrollY <= 600) {
      specsLink.classList.remove("subnav__link--active");
      bundleLink.classList.remove("subnav__link--active");
      configsLink.classList.remove("subnav__link--active");

      productLink.classList.add("subnav__link--active");
    } else if (scrollY <= 1700) {
      productLink.classList.remove("subnav__link--active");
      bundleLink.classList.remove("subnav__link--active");
      configsLink.classList.remove("subnav__link--active");

      specsLink.classList.add("subnav__link--active");
    } else if (scrollY <= 2400) {
      productLink.classList.remove("subnav__link--active");
      specsLink.classList.remove("subnav__link--active");
      configsLink.classList.remove("subnav__link--active");

      bundleLink.classList.add("subnav__link--active");
    } else if (scrollY >= 2401) {
      productLink.classList.remove("subnav__link--active");
      bundleLink.classList.remove("subnav__link--active");
      specsLink.classList.remove("subnav__link--active");

      configsLink.classList.add("subnav__link--active");
    }
  } else {
    if (scrollY <= 600) {
      specsLink.classList.remove("subnav__link--active");
      bundleLink.classList.remove("subnav__link--active");
      configsLink.classList.remove("subnav__link--active");

      productLink.classList.add("subnav__link--active");
    } else if (scrollY <= 2500) {
      productLink.classList.remove("subnav__link--active");
      bundleLink.classList.remove("subnav__link--active");
      configsLink.classList.remove("subnav__link--active");

      specsLink.classList.add("subnav__link--active");
    } else if (scrollY <= 3600) {
      productLink.classList.remove("subnav__link--active");
      specsLink.classList.remove("subnav__link--active");
      configsLink.classList.remove("subnav__link--active");

      bundleLink.classList.add("subnav__link--active");
    } else if (scrollY >= 3601) {
      productLink.classList.remove("subnav__link--active");
      bundleLink.classList.remove("subnav__link--active");
      specsLink.classList.remove("subnav__link--active");

      configsLink.classList.add("subnav__link--active");
    }
  }
});
