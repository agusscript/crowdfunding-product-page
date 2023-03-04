const menuButton = document.querySelector(".menu-btn");
const bookmarkButton = document.querySelector(".bookmark-btn");

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

function manageBookmarkSectionState () {
  const defaultBookmarkText = document.querySelector(".default-bookmark-text");
  const activeBookmarkText = document.querySelector(".active-bookmark-text");
  const svgBookmarkButton = document.querySelector(".svg-bookmark");

  defaultBookmarkText.classList.toggle("occult");
  activeBookmarkText.classList.toggle("show");
  svgBookmarkButton.classList.toggle("occult");
  svgBookmarkButton.querySelector("path").classList.toggle("path-active");
  svgBookmarkButton.querySelector("circle").classList.toggle("circle-active");
}

bookmarkButton.onclick = manageBookmarkSectionState;
menuButton.onclick = manageMobileMenu;
