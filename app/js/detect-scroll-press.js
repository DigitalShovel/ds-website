// Author: Nicholas Panayotakos

// Description: The script below detects the scroll position and adds an active class to the corresponding link in the subnav by highlighting it. This file and its variables are slightly different from the M300 script because the M300 has a different scroll position for all three links.

// TODO: Fix the position where the active class is enabled on each section. Currently, the active class is enabled a little too early on each section.

let check = false;

window.addEventListener("scroll", () => {
  if (window.innerWidth >= 992) {
    if (scrollY <= 1100) {
      articlesLink.classList.remove("subnav__link--active");
      podcastsLink.classList.remove("subnav__link--active");

      // set the active class to the press link
      pressLink.classList.add("subnav__link--active");
    } else if (scrollY <= 2000) {
      pressLink.classList.remove("subnav__link--active");
      podcastsLink.classList.remove("subnav__link--active");

      // set the active class to the articles link
      articlesLink.classList.add("subnav__link--active");
    } else if (scrollY > 2000) {
      pressLink.classList.remove("subnav__link--active");
      articlesLink.classList.remove("subnav__link--active");

      // set the active class to the podcasts link
      podcastsLink.classList.add("subnav__link--active");
    }
  } else {
    if (scrollY <= 1600) {
      articlesLink.classList.remove("subnav__link--active");
      podcastsLink.classList.remove("subnav__link--active");

      // set the active class to the press link
      pressLink.classList.add("subnav__link--active");
    } else if (scrollY <= 3100) {
      pressLink.classList.remove("subnav__link--active");
      podcastsLink.classList.remove("subnav__link--active");

      // set the active class to the articles link
      articlesLink.classList.add("subnav__link--active");
    } else if (scrollY > 3100) {
      pressLink.classList.remove("subnav__link--active");
      articlesLink.classList.remove("subnav__link--active");

      // set the active class to the podcasts link
      podcastsLink.classList.add("subnav__link--active");
    }
  }
});
