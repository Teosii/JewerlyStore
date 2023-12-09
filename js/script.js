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




const navSlider = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-items");
  const navLinks = document.querySelectorAll(".nav-items li");

  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");

    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 0.3
        }s`;
      }
    });
    burger.classList.toggle("toggle");
  }); 
};
navSlider();