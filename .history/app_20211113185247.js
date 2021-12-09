// Menu effect

var navbarItem= document.querySelectorAll('.navbar-menu-item a')
var subMenu= document.querySelector('.navbar-sub-menu')
var iconmenu = document.querySelector('.navbar-menu-item i')
var menuMobie = document.querySelector('.menu-icon')
var overlayMenu = document.querySelector('.mobile-menu')
console.log(navbarItem[2])
navbarItem[2].addEventListener('click', function(){
  subMenu.classList.toggle('active');
  iconmenu.classList.toggle('active');
})

menuMobie.addEventListener("click" , function(){
   overlayMenu.classList.toggle('active');
})