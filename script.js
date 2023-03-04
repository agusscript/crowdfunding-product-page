const menuButton = document.querySelector(".menu-btn");

function manageMobileMenu() {
  const openMenuIcon = document.querySelector(".open-menu");
  const closeMenuIcon = document.querySelector(".close-menu");
  const navUl = document.querySelector(".nav-ul");
  const overLay = document.querySelector(".overlay");

  navUl.classList.toggle("active-ul");
  closeMenuIcon.classList.toggle("show");
  openMenuIcon.classList.toggle("occult");
  overLay.classList.toggle("show");
}

menuButton.onclick = manageMobileMenu;
