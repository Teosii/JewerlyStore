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

const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

gsap.fromTo(".qa-section", { opacity: 0 }, { opacity: 1, duration: 2 });
