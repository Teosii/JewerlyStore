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

var modalBtn = document.querySelector(".modal-btn");
var modalBg = document.querySelector(".modal-bg");
var modalClose = document.querySelector(".modal-close");
var loginBtn = document.querySelector(".loginBtn");

modalBtn.addEventListener("click", function () {
  modalBg.classList.add("bg-active");
});

modalClose.addEventListener("click", function () {
  modalBg.classList.remove("bg-active");
});

function validateLogin() {
  var username = document.getElementById("loginName").value;
  var password = document.getElementById("passwordLogin").value;
  var email = document.getElementById("emailLogin").value;

  if (username === "" || password === "" || email === "") {
    alert("Please enter both username and password and email");
  } else {
    alert("Login successful!");
  }
}
