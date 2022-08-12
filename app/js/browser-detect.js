function fnBrowserDetect() {
  let userAgent = navigator.userAgent;
  let fan = document.querySelectorAll(".fan-swing-base");
  console.log(userAgent);

  if (userAgent.match(/iPhone/i)) {
    for (let i = 0; i < fan.length; i++) {
      fan[i].classList.add("only-safari");
    }
  } else {
    for (let i = 0; i < fan.length; i++) {
      fan[i].classList.remove("only-safari");
    }
  }
}
