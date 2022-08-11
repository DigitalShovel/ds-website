function fnBrowserDetect() {
  let userAgent = navigator.userAgent;
  let fan = document.querySelectorAll(".fan-swing-base");

  if (userAgent.match(/safari/i)) {
    for (let i = 0; i < fan.length; i++) {
      fan[i].classList.add("only-safari");
    }
  }
}
