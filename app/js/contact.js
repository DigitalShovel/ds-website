const orderBtn = document.querySelector("#Amount-of-Minipods");
const order = document.querySelector(".fieldset__order");
const messageBtn = document.querySelector("#Message");
const message = document.querySelector(".fieldset__message");
const bothBtn = document.querySelector("#Message-and-Order");
const both = document.querySelector(".fieldset__order .fieldset__message");

const radioSelection = document.querySelector("input");
const radioLabel = document.querySelector(".fieldset__radio");

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


if (radioSelection.hasAttribute("checked")) {
  radioLabel.classList.add("input[type=radio]:checked+label");
} else {
  radioLabel.classList.remove("input[type=radio]:checked+label");
}
