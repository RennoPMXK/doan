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
var slideIndex = 0;
showSlide();

var timer = setInterval(showSlide, 3000);
var slideContainer = document.querySelector('.hero-section')
var slideControl = document.querySelector('.slide-control')

slideContainer.onmouseover = function(){
  clearInterval(timer);
}

slideControl.onmouseover = function(){
  clearInterval(timer);
}

slideContainer.onmouseleave = function(){
  timer = setInterval(showSlide,3000);
}

slideControl.onmouseleave = function(){
  timer = setInterval(showSlide, 3000);
}

function showSlide(){
 
   var slides = document.querySelectorAll('.slide-item');
   var dots = document.querySelectorAll(".dot");

   slides.forEach(function(slide , index){
      slides[index].style.display = 'none'
      slides[index].classList.remove('active')
   })

   dots.forEach(function(dot,index){
     dots[index].classList.remove("active");
   })

   slideIndex++;
   if(slideIndex > slides.length) slideIndex = 1;
   slides[slideIndex-1].style.display = "block";
   slides[slideIndex-1].classList.add('active')
   dots[slideIndex-1].classList.add("active");
}

function chooseSlide(n){
  slideIndex = n;
  showSlide();
  clearInterval(timer);
}



var product_arr = [
  {
      id : 1,
      ten : "Black Pink",
      giacu : "4.500.000đ", 
      giamoi : "3.200.000đ",
      anh : "./img/nam1",
      loai : "dong ho nam"
  },

  {
      id : 2,
      ten : "Slate",
      giacu : "", 
      giamoi : "5.600.000đ",
      anh: "./img/nam2",
      loai : "dong ho nam"
  },


  {
      id : 3,
      ten : "Desert",
      giacu : "5.600.000đ", 
      giamoi : "4.100.000đ",
      anh : "./img/nam3",
      loai : "dong ho nam"
  },


  {
       id : 4,
      "ten" : "Opar",
      "gia cu" : "6.500.000đ", 
      "gia moi" : "4.900.000đ",
      "anh" : "./img/nam3",
      "loai" : "dong ho nam"
  },
];

// Render sp
var product_list = product_arr;
function changeProductList(type, element) {
  let tabs = document.getElementsByClassName('menu-best-sale-title-item');

  for( i = 0; i < tabs.length; i++ ) {
      tabs[i].style.background = 'white'
  } 

  element.style.background = '#ee4d2d'

  for(let i = 0; i < product_list.length ; i++ ){
    document.getElementById('nam').innerHTML += `
    <div class="menu-best-sale-content-item col-3">
    <div class="menu-best-sale-content-item-img">
           <img src="${product_list[i].img}" alt="" class="product-img">
           <i class='bx bx-bullseye product-icon'></i>
           <i class='bx bx-shopping-bag product-icon'></i>
    </div>

    <div class="menu-best-sale-content-item-content">
         <h3 class="item-content-name">Black Pink</h3>
         <div class="price">
             <div class="price-old"><del>4.500.000đ</del></div>
             <div class="price-new">3.200.000đ</div>
         </div>
    </div>
  </div>
    `
  }

  
    
  switch(type) {
      case 'nam' :
         document.getElementById(type).innerHTML = 
          document.getElementById('nu').style.display = 'none';
          document.getElementById('phukien').style.display = 'none';
          break;


       case 'nu' :
        
          document.getElementById('nam').style.display = 'none';
           document.getElementById('phukien').style.display = 'none';
           break;


      case 'phukien' :
         
          document.getElementById('nam').style.display = 'none';
           document.getElementById('nu').style.display = 'none';
           break;    
  }
}


function renderProduct() {
   document.getElementById()

}