const slides = document.querySelector(".slides");
const images = document.querySelectorAll(".slides img");
const prev = document.querySelector(".prev-image");
const next = document.querySelector(".next-image");

let index = 0;

function updateSlide() {
  const width = images[0].clientWidth;
  slides.style.transform = `translateX(${-index * width}px)`;
}

function showNext() {
  index = (index + 1) % images.length;
  updateSlide();
}

function showPrev() {
  index = (index - 1 + images.length) % images.length;
  updateSlide();
}

next.addEventListener("click", showNext);
prev.addEventListener("click", showPrev);

setInterval(showNext, 5000); // Auto-slide every 5 seconds

window.addEventListener("resize", updateSlide); // Adjust slide on resize
