// Menu effect


console.log(navbarItem[2])
navbarItem[3].addEventListener('click', function(){
    var navbarItem= document.querySelectorAll('.navbar-menu-item a')
var subMenu= document.querySelector('.navbar-sub-menu')
  subMenu.classList.toggle('active');
})