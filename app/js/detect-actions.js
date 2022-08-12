const ua = detect.parse(navigator.userAgent);
let fan = document.querySelectorAll(".fan-swing-base");
console.log(ua.os);

if (ua.os.family.includes("Mac") || ua.os.family.includes("iPhone") || ua.os.family.includes("iOS")) {
  for (let i = 0; i < fan.length; i++) {
    fan[i].classList.add("only-safari");
    console.log("it worked!");
  }
} else {
  for (let i = 0; i < fan.length; i++) {
    fan[i].classList.remove("only-safari");
    console.log("it didn't work!");
  }
}
