const menuHamburger = document.querySelector(".menu-mobile");
const menuHamburgerImg = document.querySelector(".menu-mobile img")
const menu = document.querySelector(".menu ul");

function handleMenu() {
    if (menu.classList.contains('open-menu') === false) {
        menu.classList.remove('close-menu');
        menu.classList.add('open-menu');
        menuHamburgerImg.src = "images/icon-close.svg";
    } else {
        menu.classList.remove('open-menu');
        menu.classList.add('close-menu');
        menuHamburgerImg.src = "images/icon-hamburger.svg";
    }
}

menuHamburger.addEventListener('click', handleMenu);