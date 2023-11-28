const slider = document.querySelector(".slider");
const slides = document.querySelectorAll(".slide");
let currentIndex = 0;

function showSlide(index) {
  const slideWidth = slider.clientWidth;
  const offset = -index * slideWidth;
  slider.style.transform = `translateX(${offset}px)`;
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
}


setInterval(nextSlide, 3000);


showSlide(currentIndex);
