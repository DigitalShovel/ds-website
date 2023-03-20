// Description: This file contains the JavaScript for the bear market promo
// Author: Nicholas Panayotakos

// get all the cardDeal and cardPopup elements
// cardDeal is the element that the user will hover over to show the popup
// cardPopup is the element that will be shown when the user hovers over the cardDeal element and add an event listener to the cardDeal element with a mouseover event showing the cardPopup element and when the mouse leaves the cardDeal element hide the cardPopup element after 1 second
const cardDeals = document.querySelectorAll(".card-9--deal");
const cardPopups = document.querySelectorAll(".card-9--popup");

cardDeals.forEach((cardDeal, index) => {
  cardDeal.addEventListener("mouseover", () => {
    cardPopups[index].classList.add("card-9--popup-show");
  });

  cardDeal.addEventListener("mouseleave", () => {
    setTimeout(() => {
      cardPopups[index].classList.remove("card-9--popup-show");
    }, 1250);
  });
});
