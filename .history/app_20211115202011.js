// Menu effect

var navbarItem= document.querySelectorAll('.navbar-menu-item a')
var subMenu= document.querySelector('.navbar-sub-menu')
var iconmenu = document.querySelector('.navbar-menu-item i')
var menuMobie = document.querySelector('.menu-icon')
var overlayMenu = document.querySelector('.mobile-menu')
var modal = document.querySelector('.modal')
var closeMobile = document.querySelector('.mobile-close-icon')
console.log(navbarItem[2])
navbarItem[2].addEventListener('click', function(){
  subMenu.classList.toggle('active');
  iconmenu.classList.toggle('active');
})

menuMobie.addEventListener("click" , function(){
   overlayMenu.classList.add('active');
   modal.classList.add('active');
})

closeMobile.addEventListener('click', function(){
    overlayMenu.classList.remove('active');
    modal.classList.remove('active');
})

navbarItem.forEach(function(item , index){
  item.onclick = function(){
    document.querySelector('.navbar-menu-item a.active').classList.remove('active');
    this.classList.add('active')
  }
})

const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

var tabs = $$('.tab-item');


var panes = $$('.tab-pane');


// tab-active
tabs.forEach(function(tab, index){
    tab.onclick = function(){
        document.querySelector('.tab-item.active').classList.remove('active')
        this.classList.add('active')
        document.querySelector('.tab-pane.active').classList.remove('active')
        panes[index].classList.add('active')
    }
})

// hero-slide
showSlide();

var timer = setInterval(showSlide,2000);
var slideIndex = 0;

function showSlide(){
 
   var slides = document.querySelectorAll('.slide-item');
   alert(slides)
   var dots = document.querySelectorAll("dot");
   slides.forEach(function(slide , index){
      slides[index].style.display = 'none'
   })

   dots.forEach(function(dot,index){
     dots[index].classList.remove("active");
   })

   slideIndex++;
   if(slideIndex > slides.length) slideIndex = 1;
   slides[slideIndex-1].style.display = "block";
   dots[slideIndex-1].classList.add("active")
}