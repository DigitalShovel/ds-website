const radioSelection = document.querySelector("input");
const radioLabel = document.querySelector(".fieldset__radio");

if (radioSelection.hasAttribute("checked")) {
  console.log("test1")
  radioLabel.classList.add("input[type=radio]:checked+label");
} else {
  console.log("test2")
  radioLabel.classList.remove("input[type=radio]:checked+label");
}
