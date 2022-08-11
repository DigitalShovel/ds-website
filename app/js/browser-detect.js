function fnBrowserDetect() {
  let userAgent = navigator.userAgent;
  let fan = document.querySelectorAll(".fan-swing-base");

  if (userAgent.match(/chrome|chromium|crios/i)) {
    browserName = "chrome";
  } else if (userAgent.match(/firefox|fxios/i)) {
    browserName = "firefox";
  } else if (userAgent.match(/safari/i)) {
    console.log("it worked for safari");
    for (let i = 0; i < fan.length; i++) {
      fan[i].classList.add("only-safari");
    }
  } else if (userAgent.match(/opr\//i)) {
    browserName = "opera";
  } else if (userAgent.match(/edg/i)) {
    browserName = "edge";
  } else {
    browserName = "No browser detection";
  }
}
