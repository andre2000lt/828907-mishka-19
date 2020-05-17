// Меню
var main_nav = document.querySelector(".main-nav");

var site_nav = document.querySelector(".main-nav__site-nav");
var search = document.querySelector(".main-nav__search-wrapper");
var cart = document.querySelector(".main-nav__cart-wrapper");
// Переключатель меню
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

// -- ВЫБОР ОПЦИЙ ТОВАРА --
var order_button = document.querySelector(".week-product__order-button");
var cart_buttons = document.querySelectorAll(".product__cart-button");
var option_menu = document.querySelector(".product-options");

function showOptionWindow() {
  option_menu.classList.remove("product-options--hidden");
}

function hideOptionWindow() {
  option_menu.classList.add("product-options--hidden");
}

function clickToOrder(button) {
  button.addEventListener("click", function(evt) {
    showOptionWindow();
  });
}

function clickToCloseOrder(button) {
  button.addEventListener("click", function(evt) {

    if(evt.target.classList.contains("product-options")) {
      hideOptionWindow()
    }
  });
}

function closeMenu() {
  toggle.classList.remove("main-nav__toggle--hidden");
  toggle.classList.remove("main-nav__toggle--close");
  toggle.classList.add("main-nav__toggle--open");
  hideMenu();
}

main_nav.onload = closeMenu();

//index
if(order_button) {
  clickToOrder(order_button);
}

if(option_menu) {
  clickToCloseOrder(option_menu);
}


//catalog.html
if(cart_buttons) {
  cart_buttons.forEach(function(cart_button){
    clickToOrder(cart_button);
  });
}
