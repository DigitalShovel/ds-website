function plugIn() {
  document.querySelector(".income__plug").style.transform = "translate(-13px)";
  document.querySelector(".income__passive").style.color = "var(--primary-color)";
}

function plugOut() {
  document.querySelector(".income__plug").style.transform = "translate(0)";
  document.querySelector(".income__passive").style.color = "var(--blue-900)";
}

function showChatBubble() {
  document.querySelector(".testimonials__left-person").style.transform = "translateX(0px)";
  document.querySelector(".testimonials__right-person").style.transform = "translateX(0px)";
  document.querySelector(".testimonials__chat-bubble").style.transform = "scale(1) rotate(0deg)";
  document.querySelector(".testimonials__chat-bubble").style.opacity = "1";
}

function hideChatBubble() {
  document.querySelector(".testimonials__left-person").style.transform = "translateX(-10px)";
  document.querySelector(".testimonials__right-person").style.transform = "translateX(10px)";
  document.querySelector(".testimonials__chat-bubble").style.transform = "scale(0) rotate(-90deg)";
  document.querySelector(".testimonials__chat-bubble").style.opacity = "0";
}

let pauseBtn = document.querySelector(".btn__pause")
let pausedPath = document.querySelector(".btn__pause > svg > path")
let minipodRotation = document.querySelector(".cameraRotate_right")

pauseBtn.addEventListener("click", () => {
  minipodRotation.classList.toggle("paused");
  pausedPath.classList.toggle("playing");
})