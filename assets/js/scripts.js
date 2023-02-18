var body = document.querySelector('body')
var menuTrigger = document.querySelector('#toggle-main-menu-mobile');
var menuContainer = document.querySelector('#main-menu-mobile');

menuTrigger.onclick = function() {
    menuContainer.classList.toggle('open');
    menuTrigger.classList.toggle('is-active')
    body.classList.toggle('lock-scroll')
}

// custom
document.getElementById("js-copyright-year").innerHTML = new Date().getFullYear();

var mobileDropdowns = [...document.querySelectorAll(".js-mobile-dropdown-toggle")]

function handleClickMobileDropdown() {
    mobileDropdowns.forEach((item) => item.nextElementSibling.classList.remove("active"))
    this.nextElementSibling.classList.toggle("active")
}

mobileDropdowns.forEach((item) => {
    item.addEventListener("click", handleClickMobileDropdown)
})
