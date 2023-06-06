if (window.matchMedia("(min-width: 769px)").matches) {
  // Execute code for non-mobile devices

  /*------------------------------
  Register plugins
  ------------------------------*/
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

  /*------------------------------
  Init ScrollSmoother
  ------------------------------*/

  ScrollTrigger.normalizeScroll(true);

  // create the scrollSmoother before your scrollTriggers
  ScrollSmoother.create({
    smooth: 1, // how long (in seconds) it takes to "catch up" to the native scroll position
    effects: true, // looks for data-speed and data-lag attributes on elements
    smoothTouch: 0.1, // much shorter smoothing time on touch devices (default is NO smoothing on touch devices)
    normalizeScroll: true, // force the scroll target to always be a positive number
  });
}

document.querySelector(".scroll__i300").addEventListener("click", () => {
  // scroll to the spot where the specifications section is in the viewport.
  // parameters: element, smooth, position
  scrollerSmoother.scrollTo("#specifications", true, "top 150px");
});

document.querySelector(".subnav__link--product").addEventListener("click", () => {
  // scroll to the spot where the product section is in the viewport.
  // parameters: element, smooth, position
  scrollerSmoother.scrollTo("#product", true, "top 100px");
});

document.querySelector(".subnav__link--specs").addEventListener("click", () => {
  // scroll to the spot where the specifications section is in the viewport.
  // parameters: element, smooth, position
  scrollerSmoother.scrollTo("#specifications", true, "top 150px");
});

document.querySelector(".subnav__link--bundle").addEventListener("click", () => {
  // scroll to the spot where the bundle section is in the viewport.
  // parameters: element, smooth, position
  scrollerSmoother.scrollTo("#bundle", true, "top 100px");
});