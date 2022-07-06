const orderBtn = document.querySelector("#order");
const order = document.querySelector(".fieldset__order");
const messageBtn = document.querySelector("#message");
const message = document.querySelector(".fieldset__message");
const bothBtn = document.querySelector("#both");
const both = document.querySelector(".fieldset__order .fieldset__message");

orderBtn.addEventListener("click", () => {
  order.style.display = "flex";
  message.style.display = "none";
});

messageBtn.addEventListener("click", () => {
  message.style.display = "flex";
  order.style.display = "none";
});

bothBtn.addEventListener("click", () => {
  message.style.display = "flex";
  order.style.display = "flex";
});