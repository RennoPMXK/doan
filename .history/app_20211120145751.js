// Menu effect

var navbarItem= document.querySelectorAll('.navbar-menu-item a')
var subMenu= document.querySelector('.navbar-sub-menu')
var iconmenu = document.querySelector('.navbar-menu-item i')
var menuMobie = document.querySelector('.menu-icon')
var overlayMenu = document.querySelector('.mobile-menu')
var modal = document.querySelector('.modal')
var closeMobile = document.querySelector('.mobile-close-icon')
var iconInfo = document.querySelector('.eye');
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

var tabs = document.querySelectorAll(".tab-item");





// tab-active
tabs.forEach(function(tab, index){
    tab.onclick = function(){
        document.querySelector('.tab-item.active').classList.remove('active')
        this.classList.add('active')
        
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
      anh : "./img/nam1.jpg",
      anh2: "./img/nam1.1.jpg",
      anh3: "./img/nam1.2.jpg",
      anh4: "./img/nam1.3.jpg",
      loai : "nam"
  },

  {
      id : 2,
      ten : "Slate",
      giacu : "", 
      giamoi : "5.600.000đ",
      anh: "./img/nam2.jpg",
      anh: "./img/nam2.1.jpg",
      anh: "./img/nam2.2jpg",
      anh: "./img/nam2.3jpg",
      loai : "nam"
  },


  {
      id : 3,
      ten : "Desert",
      giacu : "5.600.000đ", 
      giamoi : "4.100.000đ",
      anh : "./img/nam3.jpg",
      anh : "./img/nam3.1.jpg",
      anh : "./img/nam3.2.jpg",
      anh : "./img/nam3.3.jpg",
      loai : "nam"
  },


  {
       id : 4,
       ten: "Opar",
       giacu : "6.500.000đ", 
       giamoi : "4.900.000đ",
       anh : "./img/nam4.jpg",
       anh : "./img/nam4.1.jpg",
       anh : "./img/nam4.2jpg",
       anh : "./img/nam4.3jpg",
       loai : "nam"
  },

  {
       id : 5,
       ten : "Champion Gold",
       giacu : "6.000.000đ", 
       giamoi : "5.700.000đ",
       anh : "./img/nam5.jpg",
       anh : "./img/nam5.1.jpg",
       anh : "./img/nam5.2.jpg",
       anh : "./img/nam5.3jpg",
       loai : "nam"
  },


  {
       id : 6,
       ten : "Black Rose Leather",
       giacu : "6.500.000đ", 
       giamoi : "4.900.000đ",
       anh : "./img/nam6.jpg",
       anh : "./img/nam6.1.jpg",
       anh : "./img/nam6.2.jpg",
       anh : "./img/nam6.3jpg",
       loai: "nam"
  },

  {
       id : 7,
       ten : "Axiom",
       giacu : "6.500.000đ", 
       giamoi : "5.000.000đ",
       anh : "./img/nam7.jpg",
       anh : "./img/nam7.1.jpg",
       anh : "./img/nam7.2.jpg",
       anh : "./img/nam7.3.jpg",
       loai : "nam"
  },


  {
       id : 8,
       ten : "Ralley Green Gunmetal",
       giacu : "6.700.000đ", 
       giamoi : "5.700.000đ",
       anh : "./img/nam8.jpg",
       anh : "./img/nam8.1.jpg",
       anh : "./img/nam8.2.jpg",
       anh : "./img/nam8.3.jpg",
       loai: "nam"
  },


    {
       id : 9,
       ten : "Coronoda Blanc",
       giacu : "3.700.000đ", 
       giamoi : "3.500.000đ",
       anh : "./img/nu1.jpg",
       loai : "nu"
  },



  {
       id : 10,
       ten : "Bloom Rose",
       giacu : "",
       giamoi : "4.400.000đ",
       anh : "./img/nu2.jpg",
       loai : "nu"
  },


  {
       id : 11,
       ten : "Rodeo",
       giacu : "6.700.000đ", 
       giamoi : "5.700.000đ",
       anh : "./img/nu3.jpg",
       loai : "nu"
  },



   {
       id : 12,
       ten : "Ashen Taupe",
       giacu : "4.600.000đ", 
       giamoi : "3.200.000đ",
       anh : "./img/nu4.jpg",
       loai : "nu"
  },



  {
       id : 13,
       ten : "Aubrey",
       giacu : "4.500.000đ", 
       giamoi : "3.800.000đ",
       anh : "./img/nu5.jpg",
       loai : "nu"
  },


    {
       id : 14,
       ten : "Hayden",
       giacu: "",
       giamoi : "4.500.000đ",
       anh : "./img/nu6.jpg",
       loai : "nu"
  },


  {
       id : 15,
       ten : "Sherry",
       giacu : "",
       giamoi : "3.100.000đ",
       anh : "./img/nu7.jpg",
       loai : "nu"
  },



  {
       id : 16,
       ten: "Belamar",
       giacu : "",
       giamoi : "3.900.000đ",
       anh :"./img/nu8.jpg",
       loai : "nu"
  },



  {
       id : 17,
       ten : "Minimal Cuff",
       giacu : "",
       giamoi : "1.600.000đ",
       anh : "./img/phukien1.jpg",
       loai : "phukien"
  },


  {
       id : 18,
       ten : "Twist Cuff",
       giacu: "",
       giamoi : "2.400.000đ",
       anh : "./img/phukien2.jpg",
       loai : "phukien"
  },


  {
       id : 19,
       ten: "Crown Cuff",
       giacu : "",
       giamoi : "2.400.000đ",
       anh : "./img/phukien3.jpg",
       loai : "phukien"
  },



  {
       id : 20,
       ten : "Charm Cuff",
       giacu : "3.000.000đ",
       giamoi : "2.400.000đ",
       anh : "./img/phukien4.jpg",
       loai : "phukien"
  },



  {
       id : 21,
       ten : "Origin Bracelet",
       giacu : "",
       giamoi : "2.800.000đ",
       anh : "./img/phukien5.jpg",
       loai : "phukien"
  },
  
   
];

function createProduct() {

  if(localStorage.getItem('product')===null) {
  
  
  
      localStorage.setItem('product',JSON.stringify(product_arr));
  
  }
}


// Render sp

function changeProducts(id) {
     var tabs = document.querySelectorAll(".menu-best-sale-title-item")
     for (var i=0; i<tabs.length; i++){
         tabs[i].style.background = "white"
         tabs[i].style.color = "black"
     }
     document.getElementById(id).style.background = '#343434' 
     document.getElementById(id).style.color = 'white'
    var product = localStorage.getItem('product') ? JSON.parse(localStorage.getItem('product')) : []
    var tmp = [];
    var count = 0;
    var j = 0;
    for(let i = 0; i < product.length; i++) {
         if(product[i].loai == id){
            tmp[j] = product[i]
            j++
            count++
               
             
         }

        
    }

    if(localStorage.getItem('tmp')==null){
         localStorage.setItem('tmp', JSON.stringify(tmp))
    }

    renderProduct(tmp)

}

function renderProduct(arr) {
   var contentProduct = '';  
   for(let i = 0; i < arr.length; i++){
        console.log(arr[i].anh)
        contentProduct+= `
        <div class="menu-best-sale-content-item col-3 col-md-4 col-sm-6">
        <div class="menu-best-sale-content-item-img">
        <img src= ${arr[i].anh} alt="" class="product-img">
               <i class='bx bx-bullseye product-icon'></i>
               <i class='bx bx-shopping-bag product-icon'></i>
               <h5 class="discount">-12%</h5>
        </div>

        <div class="menu-best-sale-content-item-content">
             <h3 class="item-content-name">${arr[i].ten}</h3>
             <div class="price">
                 <div class="price-old price-item"><del>${arr[i].giacu}</del></div>
                 <div class="price-new price-item">${arr[i].giamoi}</div>

             </div>
        </div>
 </div>
        `;
   }

   document.getElementById('content').innerHTML = contentProduct;
}




