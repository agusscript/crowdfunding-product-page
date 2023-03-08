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

function manageBookmarkSectionState() {
  const defaultBookmarkText = document.querySelector(".default-bookmark-text");
  const activeBookmarkText = document.querySelector(".active-bookmark-text");
  const svgBookmarkButton = document.querySelector(".svg-bookmark");

  defaultBookmarkText.classList.toggle("occult");
  activeBookmarkText.classList.toggle("show");
  svgBookmarkButton.classList.toggle("occult");
  svgBookmarkButton.querySelector("path").classList.toggle("path-active");
  svgBookmarkButton.querySelector("circle").classList.toggle("circle-active");
}

const radioButtons = document.querySelectorAll("input[type='radio']");
const pledgeTitles = document.querySelectorAll(".pledge-title");
const modalsReward = document.querySelectorAll(".modal-reward");
const pledgeContainers = document.querySelectorAll(".pledge-container");

function manageModalRewardsState() {
  pledgeTitles.forEach(function (element, index) {
    element.onclick = function () {
      radioButtons[index].checked = true;

      if (radioButtons[0].checked === true) {
        modalsReward[0].classList.add("active-pledge");
        pledgeContainers[0].classList.add("show");
      } else {
        modalsReward[0].classList.remove("active-pledge");
        pledgeContainers[0].classList.remove("show");
      }

      if (radioButtons[1].checked === true) {
        modalsReward[1].classList.add("active-pledge");
        pledgeContainers[1].classList.add("show");
      } else {
        modalsReward[1].classList.remove("active-pledge");
        pledgeContainers[1].classList.remove("show");
      }

      if (radioButtons[2].checked === true) {
        modalsReward[2].classList.add("active-pledge");
        pledgeContainers[2].classList.add("show");
      } else {
        modalsReward[2].classList.remove("active-pledge");
        pledgeContainers[2].classList.remove("show");
      }
    };
  });
}

bookmarkButton.onclick = manageBookmarkSectionState;
menuButton.onclick = manageMobileMenu;
manageModalRewardsState();
