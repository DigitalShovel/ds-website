// Author: Nicholas Panayotakos

// Description: The script below detects the scroll position and adds an active class to the corresponding link in the subnav by highlighting it.

let product = document.querySelector("#product");
let specs = document.querySelector("#specifications");
let bundle = document.querySelector("#bundle");
let pricing = document.querySelector("#pricing");

let productLink = document.querySelector(".subnav__link--product");
let specsLink = document.querySelector(".subnav__link--specs");
let bundleLink = document.querySelector(".subnav__link--bundle");
let pricingLink = document.querySelector(".subnav__link--pricing");

let check = false;

window.addEventListener("scroll", () => {
  if (window.innerWidth >= 992) {
    if (scrollY <= 400) {
      specsLink.classList.remove("subnav__link--active");
      bundleLink.classList.remove("subnav__link--active");
      pricingLink.classList.remove("subnav__link--active");

      // set the active class to the product link
      productLink.classList.add("subnav__link--active");
    } else if (scrollY <= 1550) {
      productLink.classList.remove("subnav__link--active");
      bundleLink.classList.remove("subnav__link--active");
      pricingLink.classList.remove("subnav__link--active");

      // set the active class to the specs link
      specsLink.classList.add("subnav__link--active");
    } else if (scrollY <= 2400) {
      productLink.classList.remove("subnav__link--active");
      specsLink.classList.remove("subnav__link--active");
      pricingLink.classList.remove("subnav__link--active");

      // set the active class to the bundle link
      bundleLink.classList.add("subnav__link--active");
    } else if (scrollY >= 2401) {
      productLink.classList.remove("subnav__link--active");
      bundleLink.classList.remove("subnav__link--active");
      specsLink.classList.remove("subnav__link--active");

      // set the active class to the pricing link
      pricingLink.classList.add("subnav__link--active");
    }
  } else {
    if (scrollY <= 600) {
      specsLink.classList.remove("subnav__link--active");
      bundleLink.classList.remove("subnav__link--active");
      pricingLink.classList.remove("subnav__link--active");

      // set the active class to the product link
      productLink.classList.add("subnav__link--active");
    } else if (scrollY <= 2500) {
      productLink.classList.remove("subnav__link--active");
      bundleLink.classList.remove("subnav__link--active");
      pricingLink.classList.remove("subnav__link--active");

      // set the active class to the specs link
      specsLink.classList.add("subnav__link--active");
    } else if (scrollY <= 3400) {
      productLink.classList.remove("subnav__link--active");
      specsLink.classList.remove("subnav__link--active");
      pricingLink.classList.remove("subnav__link--active");

      // set the active class to the bundle link
      bundleLink.classList.add("subnav__link--active");
    } else if (scrollY >= 3401) {
      productLink.classList.remove("subnav__link--active");
      bundleLink.classList.remove("subnav__link--active");
      specsLink.classList.remove("subnav__link--active");

      // set the active class to the pricing link
      pricingLink.classList.add("subnav__link--active");
    }
  }
});
