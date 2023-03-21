// write a script where the user clicks on an image from the gallery and the image pops up in a modal window

// 1. get the image from the gallery
// 2. add an event listener to the image
// 3. when the image is clicked, the modal window should pop up
// 4. the modal window should contain the image that was clicked
// 5. the modal window should have a close button
// 6. when the close button is clicked, the modal window should close
// 7. the modal window should also close when the user clicks outside of the modal window

// 1. get the image from the gallery
const photos = document.querySelectorAll(".photo");

// 2. add an event listener to the image
photos.forEach((photo) => {
  photo.addEventListener("click", () => {
    // 3. when the image is clicked, the modal window should pop up
    const modal = document.querySelector(".modal");
    modal.classList.add("open");

    html.style.overflow = "hidden";

    // 4. the modal window should contain the image that was clicked
    const modalImg = document.querySelector(".modal__img");
    modalImg.src = photo.src;
  });
});

// 5. the modal window should have a close button
const close = document.querySelector(".close");

// 6. when the close button is clicked, the modal window should close
close.addEventListener("click", () => {
  const modal = document.querySelector(".modal");
  modal.classList.remove("open");
  html.style.overflow = "auto";
});

// 6a. when the ESC key is pressed, the modal window should close
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    const modal = document.querySelector(".modal");
    modal.classList.remove("open");
    html.style.overflow = "auto";
  }
});

// 7. the modal window should also close when the user clicks outside of the modal window
const modal = document.querySelector(".modal");
modal.addEventListener("click", (e) => {
  if (e.target.classList.contains("modal")) {
    modal.classList.remove("open");
    html.style.overflow = "auto";
  }
});
