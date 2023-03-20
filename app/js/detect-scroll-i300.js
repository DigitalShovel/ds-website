// detects the scroll position and adds the active class to the corresponding link

let product = document.querySelector("#product");
let specs = document.querySelector("#specifications");
let bundle = document.querySelector("#bundle");

let productLink = document.querySelector(".subnav__link--product");
let specsLink = document.querySelector(".subnav__link--specs");
let bundleLink = document.querySelector(".subnav__link--bundle");

let check = false;

window.addEventListener("scroll", () => {
  if (window.innerWidth >= 992) {
    if (scrollY <= 400) {
      specsLink.classList.remove("subnav__link--active");
      bundleLink.classList.remove("subnav__link--active");

      // set the active class to the product link
      productLink.classList.add("subnav__link--active");
    } else if (scrollY <= 1250) {
      console.log("Scroll position: " + scrollY);
      productLink.classList.remove("subnav__link--active");
      bundleLink.classList.remove("subnav__link--active");

      // set the active class to the specs link
      specsLink.classList.add("subnav__link--active");
    } else if (scrollY > 1250) {
      productLink.classList.remove("subnav__link--active");
      specsLink.classList.remove("subnav__link--active");

      // set the active class to the bundle link
      bundleLink.classList.add("subnav__link--active");
    }
  } else {
    if (scrollY <= 400) {
      specsLink.classList.remove("subnav__link--active");
      bundleLink.classList.remove("subnav__link--active");

      // set the active class to the product link
      productLink.classList.add("subnav__link--active");
    } else if (scrollY <= 1800) {
      console.log(scrollY);
      productLink.classList.remove("subnav__link--active");
      bundleLink.classList.remove("subnav__link--active");

      // set the active class to the specs link
      specsLink.classList.add("subnav__link--active");
    } else if (scrollY > 1800) {
      productLink.classList.remove("subnav__link--active");
      specsLink.classList.remove("subnav__link--active");

      // set the active class to the bundle link
      bundleLink.classList.add("subnav__link--active");
    }
  }
});
