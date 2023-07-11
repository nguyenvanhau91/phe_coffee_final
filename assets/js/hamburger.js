const hamburgerMenu = document.querySelector(".hamburger");

hamburgerMenu.onclick = function () {
  navbar = document.querySelector(".navbar");
  hamburgerMenu.classList.toggle("open");
  navbar.classList.toggle("active");
};
