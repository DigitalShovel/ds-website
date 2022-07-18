function plugIn() {
  document.querySelector(".income__plug").style.transform = "translate(-18px, -1px)";
  document.querySelector(".income__passive").style.color = "var(--primary-color)";
  document.querySelector(".income__cable").style.strokeDashoffset = "0";
  document.querySelector(".income__cable").style.strokeDashoffset = "-1000";
}

function plugOut() {
  document.querySelector(".income__plug").style.transform = "translate(2px, -1px)";
  document.querySelector(".income__passive").style.color = "var(--blue-900)";
  document.querySelector(".income__cable").style.strokeDashoffset = "0";
}
