let menuButton = document.querySelector(".header__button");
let menuBackground = document.querySelector(".page__header");
let menuLogo = document.querySelector(".header__logo");
let menuNavigation = document.querySelector(".header__navigation");
let menuAuthorization = document.querySelector(".header__authorization");
let menuContacts = document.querySelector(".header__contacts");
let menuMedia = document.querySelector(".header__media");
let otherContent =document.querySelector(".page__main");
let menuIndex = 0;

function showMenu(n) {
    if (n !== 1){
        menuButton.classList.add("-close");
        menuBackground.classList.add("-mobile-menu");
        menuLogo.classList.add("-alternate");
        menuNavigation.classList.remove("-resolution-hidden");
        menuAuthorization.classList.remove("-resolution-hidden");
        menuContacts .classList.remove("-resolution-hidden");
        menuMedia.classList.remove("-resolution-hidden");
        otherContent.classList.add("-menu-toggled");
        menuIndex = 1;
    }
    if (n !== 0){
        menuButton.classList.remove("-close");
        menuBackground.classList.remove("-mobile-menu");
        menuLogo.classList.remove("-alternate");
        menuNavigation.classList.add("-resolution-hidden");
        menuAuthorization.classList.add("-resolution-hidden");
        menuContacts .classList.add("-resolution-hidden");
        menuMedia.classList.add("-resolution-hidden");
        otherContent.classList.remove("-menu-toggled");
        menuIndex = 0;
    }
}