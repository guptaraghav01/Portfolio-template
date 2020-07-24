const hamburger = document.querySelector(".header .navbar .navlist .hamburger");
const mobileMenu = document.querySelector(".header .navbar .navlist ul");
const header = document.querySelector(".header.container");
const menuItem = document.querySelectorAll(".header .navbar .navlist ul li a");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  mobileMenu.classList.toggle("active");
});

document.addEventListener("scroll", () => {
  var scroll_position = window.scrollY;
  if (scroll_position > 250) {
    header.style.backgroundColor = "#29323c";
  } else {
    header.style.backgroundColor = "transparent";
  }
});

menuItem.forEach((item) => {
  item.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    mobileMenu.classList.toggle("active");
  });
});
