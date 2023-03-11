const menuButton = document.querySelector(".menu-btn");
const bookmarkButton = document.querySelector(".bookmark-btn");
const backProjectButton = document.querySelector(".back-project-btn");
const closeModalButton = document.querySelector(".close-modal-btn");
const radioButtons = document.querySelectorAll("input[type='radio']");
const pledgeTitles = document.querySelectorAll(".pledge-title");
const modalsReward = document.querySelectorAll(".modal-reward");
const pledgeContainers = document.querySelectorAll(".pledge-container");

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

function togglePledgeMenu() {
  for (let i = 0; i < pledgeContainers.length; i++) {
    if (radioButtons[i].checked === true) {
      modalsReward[i].classList.add("active-pledge");
      pledgeContainers[i].classList.add("show");
    } else {
      modalsReward[i].classList.remove("active-pledge");
      pledgeContainers[i].classList.remove("show");
    }
  }
}

function manageRadioButtonsModalState() {
  radioButtons.forEach(function (element, index) {
    element.onclick = () => {
      radioButtons[index].checked = true;
      togglePledgeMenu();
    };
  });

  pledgeTitles.forEach(function (element, index) {
    element.onclick = () => {
      radioButtons[index].checked = true;
      togglePledgeMenu();
    };
  });
}

function openModal() {
  document.querySelector(".modal").classList.remove("occult-modal");
  document.querySelector(".modal").classList.toggle("show-modal");
  document.querySelector("body").style.overflow = "hidden";
  document.querySelector(".overlay").classList.add("show");
  document.querySelector(".overlay-out").classList.add("occult");
}

function closeModal() {
  document.querySelector(".modal").classList.remove("show-modal");
  document.querySelector(".modal").classList.add("occult-modal");
  document.querySelector("body").style.overflow = "auto";
  document.querySelector(".overlay").classList.remove("show");
  document.querySelector(".overlay-out").classList.remove("occult");
}

function manageModalState() {
  backProjectButton.onclick = openModal;
  closeModalButton.onclick = closeModal;
}

function manageContinueButtons() {
  document.querySelectorAll(".continue-btn").forEach(function (button) {
    button.onclick = () => {
      document
        .querySelector(".modal-success")
        .classList.add("modal-success-active");
      document.querySelector(".modal").classList.add("occult-modal");
    };
  });
}

function manageSelectRewardButtons() {
  document.querySelectorAll(".select-btn").forEach(function (button, index) {
    button.onclick = () => {
      openModal();
    };
  });
}

function manageGotItButton() {
  document.querySelector(".got-it-btn").onclick = () => {
    location.reload();
  };
}

bookmarkButton.onclick = manageBookmarkSectionState;
menuButton.onclick = manageMobileMenu;
manageRadioButtonsModalState();
manageModalState();
manageContinueButtons();
manageSelectRewardButtons();
manageGotItButton();
