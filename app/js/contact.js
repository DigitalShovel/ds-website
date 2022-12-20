const radioSelection = document.querySelector("input");
const radioLabel = document.querySelector(".fieldset__radio");

if (radioSelection.hasAttribute("checked")) {
  radioLabel.classList.add("input[type=radio]:checked+label");
} else {
  radioLabel.classList.remove("input[type=radio]:checked+label");
}
