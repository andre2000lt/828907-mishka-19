// Меню
var site_nav = document.querySelector(".main-nav__site-nav");
var search = document.querySelector(".main-nav__search-wrapper");
var cart = document.querySelector(".main-nav__cart-wrapper");
// Переключатель
var toggle = document.querySelector(".main-nav__toggle");

function hideMenu() {
  site_nav.classList.add("hide-menu");
  search.classList.add("hide-menu");
  cart.classList.add("hide-menu");
}

function showMenu() {
  site_nav.classList.remove("hide-menu");
  search.classList.remove("hide-menu");
  cart.classList.remove("hide-menu");
}

toggle.addEventListener("click", function(evt) {
  if(toggle.classList.contains("main-nav__toggle--close")) {
    toggle.classList.remove("main-nav__toggle--close");
    toggle.classList.add("main-nav__toggle--open");
    hideMenu();
  }
  else {
    showMenu();
    toggle.classList.remove("main-nav__toggle--open");
    toggle.classList.add("main-nav__toggle--close");
  }

});
