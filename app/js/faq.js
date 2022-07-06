const questionList = document.querySelectorAll(".faq__question");

questionList.forEach((question) =>
  question.addEventListener("click", () => {
    question.classList.toggle("toggle");
  })
);
