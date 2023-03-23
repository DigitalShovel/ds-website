// Description: This file contains the JavaScript for the bear market promo
// Author: Nicholas Panayotakos

// get all the elements with an attribute of data-specs and data-pricing
// get all the elements with a class of .card__data-specs-popup and .card__data-pricing-popup
// when the users hovers over the element with the attribute of data-specs, the popup with the class of .card__data--specs-popup should appear
// when the user is hovered over the element with the attribute of data-pricing, the popup with the class of .card__data--pricing-popup should appear
// when the user us hovered out of the element with the attribute of data-specs, the popup with the class of .card__data--specs-popup should disappear after 1.25 seconds
// when the users hovers out of the element with the attribute of data-pricing, the popup with the class of .card__data--pricing-popup should disappear after 1.25 seconds

const specifications = document.querySelectorAll("[data-specs]");
const prices = document.querySelectorAll("[data-pricing]");
const specsPopup = document.querySelectorAll(".card__data--specs-popup");
const pricingPopup = document.querySelectorAll(".card__data--pricing-popup");

specifications.forEach((spec, i) => {
  spec.addEventListener("mouseover", () => {
    specsPopup[i].classList.add("card__data--specs-popup-show");
  });
});

specifications.forEach((spec, i) => {
  spec.addEventListener("mouseleave", () => {
    setTimeout(() => {
      specsPopup[i].classList.remove("card__data--specs-popup-show");
    }, 1250);
  });
});

prices.forEach((price, i) => {
  price.addEventListener("mouseover", () => {
    pricingPopup[i].classList.add("card__data--pricing-popup-show");
  });
});

prices.forEach((price, i) => {
  price.addEventListener("mouseleave", () => {
    setTimeout(() => {
      pricingPopup[i].classList.remove("card__data--pricing-popup-show");
    }, 1250);
  });
});
