let product = document.querySelector("#product");
let specs = document.querySelector("#specifications");
let bundle = document.querySelector("#bundle");
let configs = document.querySelector("#configurations");

let productLink = document.querySelector(".subnav__link--product");
let specsLink = document.querySelector(".subnav__link--specs");
let bundleLink = document.querySelector(".subnav__link--bundle");
let configsLink = document.querySelector(".subnav__link--configs");

window.addEventListener("scroll", () => {
  if (scrollY <= 800) {
    console.log("first scroll");
    specsLink.classList.remove("subnav__link--active");
    bundleLink.classList.remove("subnav__link--active");
    configsLink.classList.remove("subnav__link--active");

    productLink.classList.add("subnav__link--active");
  } else if (scrollY <= 1700) {
    console.log("second scroll");
    productLink.classList.remove("subnav__link--active");
    bundleLink.classList.remove("subnav__link--active");
    configsLink.classList.remove("subnav__link--active");

    specsLink.classList.add("subnav__link--active");
  } else if (scrollY <= 2500) {
    console.log("third scroll");
    productLink.classList.remove("subnav__link--active");
    specsLink.classList.remove("subnav__link--active");
    configsLink.classList.remove("subnav__link--active");

    bundleLink.classList.add("subnav__link--active");
  } else if (scrollY >= 2501) {
    console.log("fourth scroll");
    productLink.classList.remove("subnav__link--active");
    bundleLink.classList.remove("subnav__link--active");
    specsLink.classList.remove("subnav__link--active");
    
    configsLink.classList.add("subnav__link--active");
  }
});
