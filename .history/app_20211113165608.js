// Menu effect

var navbarItem= document.querySelector('.navbar-menu-item a')
var subMenu= document.querySelector('.navbar-sub-menu')

navbarItem.addEventListener('click', function(){
  subMenu.classList.toggle('active');
})