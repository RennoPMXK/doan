// Menu effect

// Menu effect

var navbarItem= document.querySelectorAll('.navbar-menu-item a');
var subMenu= document.querySelector('.navbar-sub-menu');
var iconmenu = document.querySelector('.navbar-menu-item i');
var menuMobie = document.querySelector('.menu-icon');
var overlayMenu = document.querySelector('.mobile-menu');
var modal = document.querySelector('.modal');
var closeMobile = document.querySelector('.mobile-close-icon');
var tabs = document.querySelectorAll(".tab-item");
var closeModalProduct = document.querySelector('.close-modal-product');
var closeModalCart = document.querySelector('.close-modal-cart');
var closeModalLogin = document.querySelector('.close-modal-login');
var iconUser = document.querySelector('.login')
var modalLogin  = document.querySelector('.modal-login')
var modalProduct = document.querySelector('.modal-product');
var modalCart = document.querySelector('.modal-cart');
var modalSignUp = document.querySelector('.modal-signup')
var modalIntroduce = document.querySelector('.modal-introduce')
var closeModalSignUp =  document.querySelector('.close-modal-signup')
var closeModalIntroduce =  document.querySelector('.close-modal-introduce')
var Register = document.querySelector('.Register')
var SignUp = document.querySelector('.SignUp')
var account = document.querySelector('.account')

navbarItem[2].addEventListener('click', function(){
  subMenu.classList.toggle('active');
  iconmenu.classList.toggle('active');

})

document.getElementsByClassName('btn-modal-cart')[1].onclick = function(){
    
          modal.classList.remove('active');
          modalCart.style.display = 'none';   
    
     
}

Register.addEventListener('click', function(){
     modalSignUp.style.display = 'block';
     modalLogin.style.display = 'none';
     document.getElementById('LogIn-email').value = ''
     document.getElementById('LogIn-pass').value = ''
     document.getElementById('RegisterForm-name').value = ""
     document.getElementById('RegisterForm-email').value = ''
     document.getElementById('RegisterForm-pass').value = ''
     document.getElementById('RegisterForm-confirmpass').value = ''
})

SignUp.addEventListener('click', function(){
     modalSignUp.style.display = 'none';
     modalLogin.style.display = 'block';
     document.getElementById('LogIn-email').value = ''
     document.getElementById('LogIn-pass').value = ''
     document.getElementById('RegisterForm-name').value = ""
     document.getElementById('RegisterForm-email').value = ''
     document.getElementById('RegisterForm-pass').value = ''
     document.getElementById('RegisterForm-confirmpass').value = ''
})

closeModalSignUp.addEventListener('click', function(){
     modal.classList.remove('active');
     modalSignUp.style.display = 'none';
})

menuMobie.addEventListener("click" , function(){
   overlayMenu.classList.add('active');
   modal.classList.add('active');
})

closeMobile.addEventListener('click', function(){
    overlayMenu.classList.remove('active');
    modal.classList.remove('active');
})

iconUser.addEventListener('click', function(){
     modal.classList.add('active');
     modalLogin.style.display = 'block'
     document.getElementById('LogIn-email').value = ''
     document.getElementById('LogIn-pass').value = ''
     document.getElementById('RegisterForm-name').value = ""
     document.getElementById('RegisterForm-email').value = ''
     document.getElementById('RegisterForm-pass').value = ''
     document.getElementById('RegisterForm-confirmpass').value = ''
})

closeModalLogin.addEventListener('click', function(){
     modal.classList.remove('active');
     modalLogin.style.display = 'none'
})

closeModalIntroduce.addEventListener('click', function(){
     modal.classList.remove('active');
     modalIntroduce.style.display = 'none'
})

document.getElementById("chooseintroduce").addEventListener('click', function(){
     modal.classList.add('active');
     modalIntroduce.style.display = 'block'
})

navbarItem.forEach(function(item , index){
  item.onclick = function(){
    document.querySelector('.navbar-menu-item a.active').classList.remove('active');
    this.classList.add('active');
  }
})

closeModalProduct.addEventListener('click', function(){
     modal.classList.remove('active');
     modalProduct.style.display = 'none';   
})

closeModalCart.addEventListener('click', function(){
     modal.classList.remove('active');
     modalCart.style.display = 'none';   
})

// Checkout

 document.querySelector('.btn-modal-cart:first-of-type').addEventListener('click', function(){
     var x = document.getElementsByClassName('cart-row')
     var y = document.querySelector('.account span').innerHTML
      if(x.length==0){
           alert('Bạn chưa mua hàng')
      }else if(y==''){
          alert('Vui lòng đăng nhập trước khi thanh toán !')
      }else {
          document.getElementsByClassName('modal-cart')[0].style.display = 'none' 
          modal.classList.remove('active');
          PageCheckout2()
           } 
           
          
          
      }
           
 )         


 

// tab-active
tabs.forEach(function(tab, index){
    tab.onclick = function(){
        document.querySelector('.tab-item.active').classList.remove('active')
        this.classList.add('active')
        
    }
})


// Open Cart
var openCart =  document.getElementsByClassName('opencart')[0]
openCart.addEventListener('click', function(){
     modal.classList.add('active');
     modalCart.style.display = 'block';
     
      var x = document.getElementsByClassName('cart-row')
      if(x.length== 0 ){
           document.getElementsByClassName('emty-cart')[0].classList.add('active')
           var a = document.querySelectorAll('.cart-table-list tr')
           for(var i=0;i<a.length;i++){
                var b = a[i]
                b.style.display = 'none'
           }
      }else {
          document.getElementsByClassName('emty-cart')[0].classList.remove('active')
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


function PageCheckOut() {
     document.getElementById('product-list').style.display = 'none'
         document.getElementById('best-sale').style.display = 'none'
         document.getElementById('flash-sale').style.display = 'none'
         document.getElementById('male').style.display = 'none'
         document.getElementById('female').style.display = 'none'
         document.getElementById('sub-architecture').style.display = 'none'
         document.getElementById('infomation').style.display = 'none'
         document.getElementById('brand').style.display = 'none'
         document.getElementById('hero-section').style.display = 'none'
         document.getElementById('hero-section-mini').style.display = 'none'
         document.getElementById('PageCheckout').style.display = 'none'
         document.getElementById('PageSearch').style.display = 'none'
         document.getElementById('PageContact').style.display = 'none'
         document.getElementById('search').style.display = 'none'
         document.getElementById('bill').style.display = 'block'
       
}

function PageHome(){
     document.querySelector('.navbar-menu-item a.active').classList.remove('active');
     document.querySelector('#choosehome a').classList.add('active')
     document.getElementById('product-list').style.display = 'block'
     document.getElementById('best-sale').style.display = 'block'
     document.getElementById('flash-sale').style.display = 'block'
     document.getElementById('male').style.display = 'block'
     document.getElementById('female').style.display = 'block'
     document.getElementById('sub-architecture').style.display = 'block'
     document.getElementById('infomation').style.display = 'block'
     document.getElementById('brand').style.display = 'block'
     document.getElementById('hero-section').style.display = 'block'
     document.getElementById('hero-section-mini').style.display = 'block'
     document.getElementById('bill').style.display = 'none'
     document.getElementById('PageSearch').style.display = 'none'
     document.getElementById('PageContact').style.display = 'none'
     document.getElementById('PageCheckout').style.display = 'none'
     document.getElementById('search').style.display = 'none'


}

function PageCheckout2() {
     document.getElementById('product-list').style.display = 'none'
     document.getElementById('best-sale').style.display = 'none'
     document.getElementById('flash-sale').style.display = 'none'
     document.getElementById('male').style.display = 'none'
     document.getElementById('female').style.display = 'none'
     document.getElementById('sub-architecture').style.display = 'none'
     document.getElementById('infomation').style.display = 'none'
     document.getElementById('brand').style.display = 'none'
     document.getElementById('hero-section').style.display = 'none'
     document.getElementById('hero-section-mini').style.display = 'none'
     document.getElementById('bill').style.display = 'none'
     document.getElementById('PageSearch').style.display = 'none'
     document.getElementById('PageContact').style.display = 'none'
     document.getElementById("PageCheckout").style.display = 'block'
     document.getElementById('search').style.display = 'none'

}

function TopSale() {
     
     document.getElementById('product-list').style.display = 'none'
     document.getElementById('best-sale').style.display = 'block'
     document.getElementById('flash-sale').style.display = 'none'
     document.getElementById('male').style.display = 'none'
     document.getElementById('female').style.display = 'none'
     document.getElementById('sub-architecture').style.display = 'none'
     document.getElementById('infomation').style.display = 'none'
     document.getElementById('brand').style.display = 'none'
     document.getElementById('hero-section').style.display = 'none'
     document.getElementById('hero-section-mini').style.display = 'none'
     document.getElementById('bill').style.display = 'none'
     document.getElementById('PageSearch').style.display = 'none'
     document.getElementById('PageContact').style.display = 'none'
     document.getElementById('PageCheckout').style.display = 'none'
     document.getElementById('search').style.display = 'none'

}

function Male(){
     document.getElementById('product-list').style.display = 'none'
     document.getElementById('best-sale').style.display = 'none'
     document.getElementById('flash-sale').style.display = 'none'
     document.getElementById('male').style.display = 'block'
     document.getElementById('female').style.display = 'none'
     document.getElementById('sub-architecture').style.display = 'none'
     document.getElementById('infomation').style.display = 'none'
     document.getElementById('brand').style.display = 'none'
     document.getElementById('hero-section').style.display = 'none'
     document.getElementById('hero-section-mini').style.display = 'none'
     document.getElementById('bill').style.display = 'none'
     document.getElementById('PageSearch').style.display = 'none'
     document.getElementById('PageContact').style.display = 'none'
     document.getElementById('PageCheckout').style.display = 'none'
     document.getElementById('search').style.display = 'none'
     document.getElementById('male').scrollIntoView()
}


function Female(){
     document.getElementById('product-list').style.display = 'none'
     document.getElementById('best-sale').style.display = 'none'
     document.getElementById('flash-sale').style.display = 'none'
     document.getElementById('male').style.display = 'none'
     document.getElementById('female').style.display = 'block'
     document.getElementById('sub-architecture').style.display = 'none'
     document.getElementById('infomation').style.display = 'none'
     document.getElementById('brand').style.display = 'none'
     document.getElementById('hero-section').style.display = 'none'
     document.getElementById('hero-section-mini').style.display = 'none'
     document.getElementById('bill').style.display = 'none'
     document.getElementById('PageSearch').style.display = 'none'
     document.getElementById('PageContact').style.display = 'none'
     document.getElementById('PageCheckout').style.display = 'none'
     document.getElementById('search').style.display = 'none'
     document.getElementById('female').scrollIntoView()

}

function Subarchitecture(){
     document.getElementById('product-list').style.display = 'none'
     document.getElementById('best-sale').style.display = 'none'
     document.getElementById('flash-sale').style.display = 'none'
     document.getElementById('male').style.display = 'none'
     document.getElementById('female').style.display = 'none'
     document.getElementById('sub-architecture').style.display = 'block'
     document.getElementById('infomation').style.display = 'none'
     document.getElementById('brand').style.display = 'none'
     document.getElementById('hero-section').style.display = 'none'
     document.getElementById('hero-section-mini').style.display = 'none'
     document.getElementById('bill').style.display = 'none'
     document.getElementById('PageSearch').style.display = 'none'
     document.getElementById('PageContact').style.display = 'none'
     document.getElementById('PageCheckout').style.display = 'none'
     document.getElementById('search').style.display = 'none'
     document.getElementById('sub-architecture').scrollIntoView()

}



function PageSearch(){
     document.querySelector('.navbar-menu-item a.active').classList.remove('active');
     document.querySelector('#chooseinfo a').classList.add('active')
     document.getElementById('product-list').style.display = 'none'
     document.getElementById('best-sale').style.display = 'none'
     document.getElementById('flash-sale').style.display = 'none'
     document.getElementById('male').style.display = 'none'
     document.getElementById('female').style.display = 'none'
     document.getElementById('sub-architecture').style.display = 'none'
     document.getElementById('infomation').style.display = 'none'
     document.getElementById('brand').style.display = 'none'
     document.getElementById('hero-section').style.display = 'none'
     document.getElementById('hero-section-mini').style.display = 'none'
     document.getElementById('PageContact').style.display = 'none'
     document.getElementById('PageSearch').style.display = 'block'
     document.getElementById('PageContact').style.display = 'none'
     document.getElementById('PageCheckout').style.display = 'none'
     document.getElementById('search').style.display = 'none'
     document.getElementById('PageSearch').scrollIntoView()
}

function PageContact() {
     document.querySelector('.navbar-menu-item a.active').classList.remove('active');
     document.querySelector('#choosecontact a').classList.add('active')
     document.getElementById('product-list').style.display = 'none'
     document.getElementById('best-sale').style.display = 'none'
     document.getElementById('flash-sale').style.display = 'none'
     document.getElementById('male').style.display = 'none'
     document.getElementById('female').style.display = 'none'
     document.getElementById('sub-architecture').style.display = 'none'
     document.getElementById('infomation').style.display = 'none'
     document.getElementById('brand').style.display = 'none'
     document.getElementById('hero-section').style.display = 'none'
     document.getElementById('hero-section-mini').style.display = 'none'
     document.getElementById('PageSearch').style.display = 'none'
     document.getElementById('PageCheckout').style.display = 'none'
     document.getElementById('PageContact').style.display = 'block'
     document.getElementById('search').style.display = 'none'
     document.getElementById('PageContact').scrollIntoView()
}
var product_arr = [
  {
      id : 1,
      ten : "Black Pink",
      giacu : "4.500.000đ", 
      giamoi : "3.200.000đ",
      anh : "./img/nam1.jpg",
      anh1: "./img/nam1.1.jpg",
      anh2: "./img/nam1.2.jpg",
      anh3: "./img/nam1.3.jpg",
      loai : "nam",
      masp : 'DHN01',
      doanhSo: 30,
      giamgia : '12%'
      
      
  },

  {
      id : 2,
      ten : "Slate",
      giacu : "", 
      giamoi : "5.600.000đ",
      anh: "./img/nam2.jpg",
      anh1: "./img/nam2.1.jpg",
      anh2: "./img/nam2.2.jpg",
      anh3: "./img/nam2.3.jpg",
      loai : "nam",
      masp : 'DHN02',
      doanhSo: 30,
      giamgia : '12%'
  },


  {
      id : 3,
      ten : "Desert",
      giacu : "5.600.000đ", 
      giamoi : "4.100.000đ",
      anh : "./img/nam3.jpg",
      anh1 : "./img/nam3.1.jpg",
      anh2 : "./img/nam3.2.jpg",
      anh3 : "./img/nam3.3.jpg",
      loai : "nam",
      masp : 'DHN03',
      doanhSo: 20,
      giamgia : '14%'
  },


  {
       id : 4,
       ten: "Opar",
       giacu : "6.500.000đ", 
       giamoi : "4.900.000đ",
       anh : "./img/nam4.jpg",
       anh1 : "./img/nam4.1.jpg",
       anh2 : "./img/nam4.2.jpg",
       anh3 : "./img/nam4.3.jpg",
       loai : "nam",
       masp : 'DHN04',
       doanhSo: 10,
       giamgia : '18%'
  },

  {
       id : 5,
       ten : "Champion Gold",
       giacu : "6.000.000đ", 
       giamoi : "5.700.000đ",
       anh : "./img/nam5.jpg",
       anh1 : "./img/nam5.1.jpg",
       anh2 : "./img/nam5.2.jpg",
       anh3 : "./img/nam5.3.jpg",
       loai : "nam",
       masp : 'DHN05',
       doanhSo: 50,
       giamgia : '19%'
  },


  {
       id : 6,
       ten : "Black Rose Leather",
       giacu : "6.500.000đ", 
       giamoi : "4.900.000đ",
       anh : "./img/nam6.jpg",
       anh1 : "./img/nam6.1.jpg",
       anh2 : "./img/nam6.2.jpg",
       anh3 : "./img/sp7-4.jpg",
       loai: "nam",
       masp : 'DHN06',
       doanhSo: 40,
       giamgia : '11%'
  },

  {
       id : 7,
       ten : "Axiom",
       giacu : "6.500.000đ", 
       giamoi : "5.000.000đ",
       anh : "./img/nam7.jpg",
       anh1 : "./img/nam7.1.jpg",
       anh2 : "./img/nam7.2.jpg",
       anh3 : "./img/nam7.3.jpg",
       loai : "nam",
       masp : 'DHN07',
       doanhSo: 30,
       giamgia : '13%'
  },


  {
       id : 8,
       ten : "Ralley Green Gunmetal",
       giacu : "6.700.000đ", 
       giamoi : "5.700.000đ",
       anh : "./img/nam8.jpg",
       anh1 : "./img/nam8.1.jpg",
       anh2 : "./img/nam8.2.jpg",
       anh3 : "./img/nam8.3.jpg",
       loai: "nam",
       masp : 'DHN08',
       doanhSo: 25,
       giamgia : '2%'
  },

  {
     id : 1,
     ten : "Black Pink",
     giacu : "4.500.000đ", 
     giamoi : "3.200.000đ",
     anh : "./img/nam1.jpg",
     anh1: "./img/nam1.1.jpg",
     anh2: "./img/nam1.2.jpg",
     anh3: "./img/nam1.3.jpg",
     loai : "nam",
     masp : 'DHN01',
     giamgia : '4%'
     
 },

 

 {
      id : 4,
      ten: "Opar",
      giacu : "6.500.000đ", 
      giamoi : "4.900.000đ",
      anh : "./img/nam4.jpg",
      anh1 : "./img/nam4.1.jpg",
      anh2 : "./img/nam4.2.jpg",
      anh3 : "./img/nam4.3.jpg",
      loai : "nam",
      masp : 'DHN04',
      giamgia : '34%'
 },


 {
     id : 3,
     ten : "Desert",
     giacu : "5.600.000đ", 
     giamoi : "4.100.000đ",
     anh : "./img/nam3.jpg",
     anh1 : "./img/nam3.1.jpg",
     anh2 : "./img/nam3.2.jpg",
     anh3 : "./img/nam3.3.jpg",
     loai : "nam",
     masp : 'DHN03',
     giamgia : '12%'
 },


 {
     id : 2,
     ten : "Slate",
     giacu : "", 
     giamoi : "5.600.000đ",
     anh: "./img/nam2.jpg",
     anh1: "./img/nam2.1.jpg",
     anh2: "./img/nam2.2.jpg",
     anh3: "./img/nam2.3.jpg",
     loai : "nam",
     masp : 'DHN02',
     giamgia : '17%'
 },



    {
       id : 9,
       ten : "Coronoda Blanc",
       giacu : "3.700.000đ", 
       giamoi : "3.500.000đ",
       anh : "./img/nu1.jpg",
       anh1 : "./img/nu1.1.jpg",
       anh2 : "./img/nu1.2.jpg",
       anh3 : "./img/nu1.3.jpg",
       loai : "nu",
       masp : 'DHG01',
       doanhSo: 10,
       giamgia : '22%'
  },



  {
       id : 10,
       ten : "Bloom Rose",
       giacu : "",
       giamoi : "4.400.000đ",
       anh : "./img/nu2.jpg",
       anh1 : "./img/nu2.1.jpg",
       anh2 : "./img/nu2.2.jpg",
       anh3 : "./img/nu2.3.jpg",
       loai : "nu",
       masp : 'DHG02',
       doanhSo: 27,
       giamgia : '13%'
  },


  {
       id : 11,
       ten : "Rodeo",
       giacu : "6.700.000đ", 
       giamoi : "5.700.000đ",
       anh : "./img/nu3.jpg",
       anh1 : "./img/nu3.1.jpg",
       anh2 : "./img/nu3.2.jpg",
       anh3 : "./img/nu3.3.jpg",
       loai : "nu",
       masp : 'DHG03',
       doanhSo: 70,
       giamgia : '20%'
  },



   {
       id : 12,
       ten : "Ashen Taupe",
       giacu : "4.600.000đ", 
       giamoi : "3.200.000đ",
       anh : "./img/nu4.jpg",
       anh1 : "./img/nu4.1.jpg",
       anh2 : "./img/nu4.2.jpg",
       anh3 : "./img/nu4.3.jpg",
       loai : "nu",
       masp : 'DHG04',
       doanhSo: 80,
       giamgia : '28%'
  },



  {
       id : 13,
       ten : "Aubrey",
       giacu : "4.500.000đ", 
       giamoi : "3.800.000đ",
       anh : "./img/nu5.jpg",
       anh1 : "./img/nu5.1.jpg",
       anh2 : "./img/nu5.2.jpg",
       anh3 : "./img/nu5.3.jpg",
       loai : "nu",
       masp : 'DHG05',
       doanhSo: 10,
       giamgia : '21%'
  },


    {
       id : 14,
       ten : "Hayden",
       giacu: "",
       giamoi : "4.500.000đ",
       anh : "./img/nu6.jpg",
       anh1 : "./img/nu6.1.jpg",
       anh2 : "./img/nu6.2.jpg",
       anh3 : "./img/nu6.3.jpg",
       loai : "nu",
       masp : 'DHG06',
       doanhSo: 20,
       giamgia : '27%'
  },


  {
       id : 15,
       ten : "Sherry",
       giacu : "",
       giamoi : "3.100.000đ",
       anh : "./img/nu7.jpg",
       anh1 : "./img/nu7.1.jpg",
       anh2 : "./img/nu7.2.jpg",
       anh3 : "./img/nu7.3.jpg",
       loai : "nu",
       masp : 'DHG07',
       doanhSo: 39,
       giamgia : '3%'
  },



  {
       id : 16,
       ten: "Belamar",
       giacu : "",
       giamoi : "3.900.000đ",
       anh :"./img/nu8.jpg",
       anh1 : "./img/nu8.1.jpg",
       anh2 : "./img/nu8.2.jpg",
       anh3 : "./img/nu8.3.jpg",
       loai : "nu",
       masp : 'DHG08',
       doanhSo: 28,
       giamgia : '18%'
  },

  

  {
       id : 17,
       ten : "Minimal Cuff",
       giacu : "",
       giamoi : "1.600.000đ",
       anh : "./img/phukien1.jpg",
       anh1 : "./img/phukien1.1.jpg",
       anh2 : "./img/phukien1.2.jpg",
       anh3 : "./img/phukien1.3.jpg",
       loai : "phukien",
       masp : 'PK01',
       doanhSo: 34,
       giamgia : '12%'
  },


  {
       id : 18,
       ten : "Twist Cuff",
       giacu: "",
       giamoi : "2.400.000đ",
       anh : "./img/phukien2.jpg",
       anh1 : "./img/phukien2.1.jpg",
       anh2 : "./img/phukien2.2.jpg",
       anh3 : "./img/phukien2.3.jpg",
       loai : "phukien",
       masp : 'PK02',
       doanhSo: 30,
       giamgia : '12%'
  },


  {
       id : 19,
       ten: "Crown Cuff",
       giacu : "",
       giamoi : "2.400.000đ",
       anh : "./img/phukien3.jpg",
       anh1 : "./img/phukien3.1.jpg",
       anh2 : "./img/phukien3.2.jpg",
       anh3 : "./img/phukien3.3.jpg",
       loai : "phukien",
       masp : 'PK03',
       doanhSo: 45,
       giamgia : '25%'
  },



  {
       id : 20,
       ten : "Charm Cuff",
       giacu : "3.000.000đ",
       giamoi : "2.400.000đ",
       anh : "./img/phukien4.jpg",
       anh1 : "./img/phukien4.1.jpg",
       anh2 : "./img/phukien4.2.jpg",
       anh3 : "./img/phukien4.3.jpg",
       loai : "phukien",
       masp : 'PK04',
       doanhSo: 49,
       giamgia : '32%'
  },



  {
       id : 21,
       ten : "Origin Bracelet",
       giacu : "",
       giamoi : "2.800.000đ",
       anh : "./img/phukien5.jpg",
       anh1 : "./img/phukien5.1.jpg",
       anh2 : "./img/phukien5.2.jpg",
       anh3 : "./img/phukien5.3.jpg",
       loai : "phukien",
       masp : 'PK05',
       doanhSo: 38,
       giamgia : '12%'
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


   
    
    handlePage(1,tmp)
   

   
}




function renderProduct(arr) {
     
     var contentProduct = '';  
     for(let i = 0; i < arr.length; i++){
        
          contentProduct+= `
          <div class="menu-best-sale-content-item col-3 col-md-4 col-sm-6">
          <div class="menu-best-sale-content-item-img">
          <img src= ${arr[i].anh} alt="" class="product-img">
                 <i class='bx bx-bullseye product-icon'onclick="ModalProduct('${arr[i].anh}' , '${arr[i].ten}' , '${arr[i].giacu}', '${arr[i].giamoi}', '${arr[i].anh}', '${arr[i].anh1}' , '${arr[i].anh2}','${arr[i].anh3}' )"></i>
                 <i class='bx bx-shopping-bag product-icon btn-add' onclick="ModalCart('${arr[i].anh}', '${arr[i].ten}', '${arr[i].giamoi}')"></i>
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




function handlePage(key , tmp) {
    let currentPage = key;
    let perPage = 8
    let totalPage = Math.ceil(tmp.length / perPage)
    let perPost = []
     perPost = tmp.slice(
          (currentPage - 1) * perPage,
          (currentPage - 1) * perPage + perPage
     )
    console.log(perPost)
     var contentProduct = ''
     for(let i = 0; i < perPost.length; i++){
         
          contentProduct+= `
          <div class="menu-best-sale-content-item col-3 col-md-4 col-sm-6">
          <div class="menu-best-sale-content-item-img">
          <img src= ${perPost[i].anh} alt="" class="product-img">
                 <i class='bx bx-bullseye product-icon'onclick="ModalProduct('${perPost[i].anh}' , '${perPost[i].ten}' , '${perPost[i].giacu}', '${perPost[i].giamoi}', '${perPost[i].anh}', '${perPost[i].anh1}' , '${perPost[i].anh2}','${perPost[i].anh3}' )"></i>
                 <i class='bx bx-shopping-bag product-icon btn-add' onclick="ModalCart('${perPost[i].anh}', '${perPost[i].ten}', '${perPost[i].giamoi}')"></i>
                 <h5 class="discount">-${perPost[i].giamgia}</h5>
          </div>
  
          <div class="menu-best-sale-content-item-content">
               <h3 class="item-content-name">${perPost[i].ten}</h3>
               <div class="price">
                   <div class="price-old price-item"><del>${perPost[i].giacu}</del></div>
                   <div class="price-new price-item">${perPost[i].giamoi}</div>
  
               </div>
          </div>
   </div>
          `;
     }
  
     document.getElementById('content').innerHTML = contentProduct;
     var x = document.querySelector(".pagination button:first-child")
     var y = document.querySelector(".pagination button:last-child")
     x.onclick = function(){
          handlePage(1,tmp)
     }

     y.onclick = function(){
          handlePage(2,tmp)
     }

}

function handlePageSearch(key ,tmp) {
    let currentPage = key;
    let perPage = 8
    let totalPage = Math.ceil(tmp.length / perPage)
    let perPost = []
     perPost = tmp.slice(
          (currentPage - 1) * perPage,
          (currentPage - 1) * perPage + perPage
     )
    console.log(perPost)
     var contentProduct = ''
     for(let i = 0; i < perPost.length; i++){
         
          contentProduct+= `
          <div class="menu-best-sale-content-item col-3 col-md-4 col-sm-6">
          <div class="menu-best-sale-content-item-img">
          <img src= ${perPost[i].anh} alt="" class="product-img">
                 <i class='bx bx-bullseye product-icon'onclick="ModalProduct('${perPost[i].anh}' , '${perPost[i].ten}' , '${perPost[i].giacu}', '${perPost[i].giamoi}', '${perPost[i].anh}', '${perPost[i].anh1}' , '${perPost[i].anh2}','${perPost[i].anh3}' )"></i>
                 <i class='bx bx-shopping-bag product-icon btn-add' onclick="ModalCart('${perPost[i].anh}', '${perPost[i].ten}', '${perPost[i].giamoi}')"></i>
                 <h5 class="discount">-${perPost[i].giamgia}</h5>
          </div>
  
          <div class="menu-best-sale-content-item-content">
               <h3 class="item-content-name">${perPost[i].ten}</h3>
               <div class="price">
                   <div class="price-old price-item"><del>${perPost[i].giacu}</del></div>
                   <div class="price-new price-item">${perPost[i].giamoi}</div>
  
               </div>
          </div>
   </div>
          `;
     }
  
     document.getElementById('search-content').innerHTML = contentProduct;
     var x = document.querySelector(".search-pagination button:first-child")
     var y = document.querySelector('.second')
     var z = document.querySelector(".search-pagination button:last-child")
     x.onclick = function(){
          handlePageSearch(1,tmp)
     }

     y.onclick = function(){
          handlePageSearch(2,tmp)
     }

     z.onclick = function(){
          handlePageSearch(3,tmp)
     }
}

function renderBottom(id , content){
    
    var malecontent = '';  
   for(let i = 0; i < product_arr.length; i++){
        if(product_arr[i].loai == id){
             console.log(i);
             malecontent += `
             <div class="menu-best-sale-content-item col-3 col-md-4 col-sm-6">
             <div class="menu-best-sale-content-item-img">
             <img src= ${product_arr[i].anh} alt="" class="product-img">
                    <i class='bx bx-bullseye product-icon'onclick="ModalProduct('${product_arr[i].anh}' , '${product_arr[i].ten}' , '${product_arr[i].giacu}', '${product_arr[i].giamoi}', '${product_arr[i].anh}', '${product_arr[i].anh1}' , '${product_arr[i].anh2}','${product_arr[i].anh3}' )"></i>
                    <i class='bx bx-shopping-bag product-icon btn-add' onclick="ModalCart('${product_arr[i].anh}', '${product_arr[i].ten}', '${product_arr[i].giamoi}')"></i>
                    <h5 class="discount">-${product_arr[i].giamgia}</h5>
             </div>
     
             <div class="menu-best-sale-content-item-content">
                  <h3 class="item-content-name">${product_arr[i].ten}</h3>
                  <div class="price">
                      <div class="price-old price-item"><del>${product_arr[i].giacu}</del></div>
                      <div class="price-new price-item">${product_arr[i].giamoi}</div>
     
                  </div>
             </div>
          </div>

        
        `;
   }
   document.getElementById(content).innerHTML = malecontent;
   
  } 
}

function renderTop(id , content , start , end){
     var malecontent = '';  
     for(let i = start; i < end; i++){
          if(product_arr[i].loai == id){
               malecontent += `
               <div class="menu-best-sale-content-item col-6 col-md-4 col-sm-6">
               <div class="menu-best-sale-content-item-img">
               <img src= ${product_arr[i].anh} alt="" class="product-img">
                      <i class='bx bx-bullseye product-icon'onclick="ModalProduct('${product_arr[i].anh}' , '${product_arr[i].ten}' , '${product_arr[i].giacu}', '${product_arr[i].giamoi}', '${product_arr[i].anh}', '${product_arr[i].anh1}' , '${product_arr[i].anh2}','${product_arr[i].anh3}' )"></i>
                      <i class='bx bx-shopping-bag product-icon btn-add' onclick="ModalCart('${product_arr[i].anh}', '${product_arr[i].ten}', '${product_arr[i].giamoi}')"></i>
                      <h5 class="discount">-${product_arr[i].giamgia}</h5>
               </div>
       
               <div class="menu-best-sale-content-item-content">
                    <h3 class="item-content-name">${product_arr[i].ten}</h3>
                    <div class="price">
                        <div class="price-old price-item"><del>${product_arr[i].giacu}</del></div>
                        <div class="price-new price-item">${product_arr[i].giamoi}</div>
       
                    </div>
               </div>
            </div>
  
          
          `;
     }
document.getElementById(content).innerHTML = malecontent;
   
     } 
}

function renderPK(id , content ,start , end){
     var malecontent = '';  
   for(let i = start ; i < end; i++){
        if(product_arr[i].loai == id){
             console.log(i)
             malecontent += `
             <div class="menu-best-sale-content-item col-6 col-md-6 col-sm-6">
             <div class="menu-best-sale-content-item-img">
             <img src= ${product_arr[i].anh} alt="" class="product-img">
                    <i class='bx bx-bullseye product-icon'onclick="ModalProduct('${product_arr[i].anh}' , '${product_arr[i].ten}' , '${product_arr[i].giacu}', '${product_arr[i].giamoi}', '${product_arr[i].anh}', '${product_arr[i].anh1}' , '${product_arr[i].anh2}','${product_arr[i].anh3}' )"></i>
                    <i class='bx bx-shopping-bag product-icon btn-add' onclick="ModalCart('${product_arr[i].anh}', '${product_arr[i].ten}', '${product_arr[i].giamoi}')"></i>
                    <h5 class="discount">-${product_arr[i].giamgia}</h5>
             </div>
     
             <div class="menu-best-sale-content-item-content">
                  <h3 class="item-content-name">${product_arr[i].ten}</h3>
                  <div class="price">
                      <div class="price-old price-item"><del>${product_arr[i].giacu}</del></div>
                      <div class="price-new price-item">${product_arr[i].giamoi}</div>
     
                  </div>
             </div>
          </div>

        
        `;
   }
   document.getElementById(content).innerHTML = malecontent;
   
  } 
}
renderTop('nam' , 'male-top' , 0 , 2)
renderBottom('nam', 'male-bottom')
renderTop('nu','female-top' , 12 , 14)
renderBottom('nu', 'female-bottom')
renderPK('phukien', 'pk' , 20 , 24 )


// Modal Product
function ModalProduct(anh,ten,giacu,giamoi,anh1,anh2,anh3,anh4) {
     modal.classList.add('active');
     modalProduct.style.display = 'block';   
     document.querySelector('.modal-left-top img').src = anh
     document.querySelector('.anh1 img').src = anh1;
     document.querySelector('.anh2 img').src = anh2;
     document.querySelector('.anh3 img').src = anh3;
     document.querySelector('.anh4 img').src = anh4;
     document.querySelector('.modal-right h3').innerText = ten
     document.querySelector('.modal-price-old').innerHTML = `<del>${giacu}</del>`
     document.querySelector('.modal-price-new').innerText = giamoi
    document.querySelector('.btn-modal-info').onclick = function(){
         ModalCart(anh,ten,giamoi)
         
    }
}

// Change Picture Modal Product

function ChangeModalPicture(e){
     var Imgmain =  document.querySelector('.modal-left-top img');
     Imgmain.src = e;
     
}
document.getElementsByClassName('btn-flash-sale')[0].addEventListener('click', function(){
     ModalCart(product_arr[0].anh , product_arr[0].ten , product_arr[0].giamoi)
})

// Modal Cart




function ModalCart(anh,ten,gia){
     alert("Sản phẩm đã được thêm vào giỏ hàng")
     var cartList = document.querySelector('.cart-table-list:last-of-type')
     var cartItem = document.createElement('div')
     var cartRow = document.createElement('tr');
     cartRow.classList.add('cart-row')
     cartItem.classList.add('cart-item')
     cartRow.innerHTML += `
    
     <td width = "480px" height = "150px">
         <div class="img-wrapper">
             <div class="cart-img">
                 <img src=${anh} alt="">
             </div>
             <div class="cart-content">
                 <p class = 'namesp' >${ten}</p>
                 <a onclick = "removeCart(this)" href="#">Bỏ sản phẩm</a>
             </div>

         </div>
     </td>

    

     <td width= "170px">
            <h3 id="price" class="price-new">
                ${gia}
            </h3>

     </td>

     <td width ="170px">

             <input onchange = "updateCart()" class="quantityCart" type="number" min="1" value="1">
     </td>

      <td width ="170px">
              <h3 id="price-total" class="price-new text-center price-modal">
                 ${gia}
              </h3>
      </td>
 
     `;

     
    
     cartList.appendChild(cartRow)
     updateCart()
     
     
 }
    

function removeCart(e) {
      e.parentElement.parentElement.parentElement.parentElement.remove()
      var x = document.getElementsByClassName('cart-row')
      if(x.length== 0 ){
          document.getElementsByClassName('emty-cart')[0].classList.add('active')
          var a = document.querySelectorAll('.cart-table-list tr')
          for(var i=0;i<a.length;i++){
               var b = a[i]
               b.style.display = 'none'
          }
     }else {
         document.getElementsByClassName('emty-cart')[0].classList.remove('active')
     }
     updateCart()
}

function format2(n, currency) {
     return currency + n.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
   }
   

function updateCart() {
     var cartItemList = document.getElementsByClassName('cart-table-list')
     for(let i = 0; i < cartItemList.length; i++){
          var textQuantity = document.querySelector(' .cart-shopping-top-right-item p span')
          console.log(textQuantity)
               var cartRows = cartItemList[i].getElementsByClassName('cart-row')
               var total = 0 ;
               for(let i = 0; i < cartRows.length; i++) {
                    var cartRow = cartRows[i]
                    var quantityElm = cartRow.getElementsByClassName('quantityCart')[0]
                         var priceElm = cartRow.querySelector('#price')
                         var pricetotal = cartRow.querySelector('#price-total')
                         var price = parseFloat(priceElm.innerText.replace('đ', ''))
                         var quantity = quantityElm.value
                         
                         total = (total + (price * quantity))
                        
     
                    
                         pricetotal.innerHTML = `${((price *quantity)*1000000).toFixed(0)}đ`
                    
               }
              
             total = (total*1000000)
             var x = Math.round(total)
     }

     

     document.querySelector(".sum-total h3").innerHTML = `${x}đ `
     document.getElementById("number-total").innerHTML = `${x}đ `
    document.getElementsByClassName('cart-info')[0].innerHTML = cartRows.length
    document.getElementById('length-num').innerHTML = cartRows.length



    
}



var userArray = [
     {
                    username: 'Admin' , 
                    password: 'adminsgu' , 
                    email : 'admin@gmail.com',
                    makh : "admin",
                    userType: 'Admin',
                    datesignup: '20/4/2021'
     },
];

function LoadUser() {
     if(localStorage.getItem('user')===null) {
          localStorage.setItem('user',JSON.stringify(userArray));
       
      }
}

function createnewuser(fullname, password , email)
{
     var flag
     var userArray = JSON.parse(localStorage.getItem('user'));
      for(var i=0; i < userArray.length; i++){
           if(userArray[i].email == email){
                alert("Email đã được đăng ký")
                flag = 0
                break;
           }
        flag = 1   
     }     
           if(flag==1){
               var today = new Date()
               var day =  String(today.getDate())+"/"+String(today.getMonth() + 1)+"/"+String(today.getFullYear())
               var user1 = {
                    username: fullname , 
                    password: password , 
                    email : email,
                    makh : Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 8).toUpperCase(),
                    userType: 'Customer',
                    datesignup: day
                    };
  
              userArray.push(user1);
              alert("Đăng ký thành công tự động đăng nhập !")
              modal.classList.remove('active')
              modalSignUp.style.display = 'none';
              account.style.display = 'block'
              iconUser.style.display = 'none'
              document.querySelector('.account span').innerHTML = fullname
              document.querySelector('.out-account').style.display = 'block'
              
           }
      
	localStorage.setItem('user',JSON.stringify(userArray));
}





function checkLogin(email , password){
     var flag
     var userArray = JSON.parse(localStorage.getItem('user'));

     for(var i=0; i < userArray.length; i++){
          

             if((userArray[i].email == email) && (userArray[i].password == password)){
               if((userArray[i].email == 'admin@gmail.com') && (userArray[i].password == "adminsgu")){
                    alert('Chào Admin')
                    modal.classList.remove('active')
                       modalLogin.style.display = 'none'
                       account.style.display = 'block'
                       document.querySelector('.account span').innerHTML = userArray[i].username
                       iconUser.style.display = 'none'
                       document.querySelector('.opencart a').style.display = 'none'
                       document.querySelector('.admin').style.display = 'block' 
                       document.getElementsByClassName('cart-info')[0].style.display = 'none'
                       
                       flag = 0;
                       break
               }else {
                    alert("Đăng nhập thành công !")
                    modal.classList.remove('active')
                    modalLogin.style.display = 'none'
                    account.style.display = 'block'
                    document.querySelector('.account span').innerHTML = userArray[i].username
                    iconUser.style.display = 'none'
                    document.querySelector('.out-account').style.display = 'block'
                    var makh
                    var email1 = document.getElementsByClassName('emailkh1')[0].value
                     console.log(email1)
                    var email2  = document.getElementsByClassName('emailkh2')[0].value
                     console.log(email2)
                    var userArray = JSON.parse(localStorage.getItem('user'));
                        for(var i=0; i<userArray.length; i++){
                 
                         if(userArray[i].email == email2 || userArray[i].email == email1){
                           makh = userArray[i].makh
                              break
                             }      
                
                     
            
                        } 
                   InnerBill(makh)
                    flag = 0;
                   
                    break;

               }
           }
        flag = 1   
     }

     if (flag==1){
          alert("Tài khoản không tồn tại")
     }

    

}

//  Check Login

function Login() {
    
     let email = document.getElementById('LogIn-email').value;
     let password = document.getElementById('LogIn-pass').value;
     if (email.length == 0 || password.length < 8) {
         if (email.length == 0) {
             document.getElementById('errorEmail').style.display = 'block';
             document.getElementById('LogIn-email').style.border = '1px solid red';
         }
         else {
             document.getElementById('errorEmail').style.display = 'none';
             document.getElementById('LogIn-email').style.border = '1px solid #ccc';
         }
         if (password.length < 8) {
             document.getElementById('errorPass').style.display = 'block';
             document.getElementById('LogIn-pass').style.border = '1px solid red';
         }
         if (password.length >= 8) {
             document.getElementById('errorPass').style.display = 'none';
             document.getElementById('LogIn-pass').style.border = '1px solid #ccc';
         }


     }
     else {
         checkLogin(email , password)
         
     }
 }

//  check logout

function Logout() {
     if(confirm('Bạn có thực sự muốn thoát ?')){
          location.href = './index.html'
     }

}

//  Check Sign Up 

function Register2() {
     let name = document.getElementById('RegisterForm-name').value;
     let confirmpass = document.getElementById('RegisterForm-confirmpass').value;
     let email = document.getElementById('RegisterForm-email').value;
     let password = document.getElementById('RegisterForm-pass').value;
 
     if (name.length == 0 || confirmpass !== password || email.length == 0 || password.length < 8 || !(email.includes('@')) || password.length > 16) {
         if (name.length == 0) {
             document.getElementById('errorName').style.display = 'block';
             document.getElementById('RegisterForm-name').style.border = '1px solid red';
         }
         if (name.length != 0) {
             document.getElementById('errorName').style.display = 'none';
             document.getElementById('RegisterForm-name').style.border = '1px solid #ccc';
         }
         if (confirmpass !== password) {
             document.getElementById('errorcofirmPass').style.display = 'block';
             document.getElementById('RegisterForm-confirmpass').style.border = '1px solid red';
         }
         if (confirmpass === password) {
             document.getElementById('errorcofirmPass').style.display = 'none';
             document.getElementById('RegisterForm-confirmpass').style.border = '1px solid #ccc';
         }
         if (email.length == 0 || !(email.includes('@'))) {
             document.getElementById('errorEmailRegister').style.display = 'block';
             document.getElementById('RegisterForm-email').style.border = '1px solid red';
         }
         if (email.length != 0 && (email.includes('@'))) {
             document.getElementById('errorEmailRegister').style.display = 'none';
             document.getElementById('RegisterForm-email').style.border = '1px solid #ccc';
         }
         if (password.length < 8 || password.length > 16) {
             document.getElementById('errorPassRegister').style.display = 'block';
             document.getElementById('RegisterForm-pass').style.border = '1px solid red';
         }
         if (password.length >= 8 && password <= 16) {
             document.getElementById('errorPassRegister').style.display = 'none';
             document.getElementById('RegisterForm-pass').style.border = '1px solid #ccc';
         }

     }
     else {
         createnewuser(name , password ,email)
     
 }
} 



//Enter search
const node = document.getElementsByClassName("navbar-search-input")[0];

node.addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
        timKiem();
    }
});


//Xu ly nhan icon tim kiem
function timKiem() {
     let search_value = node.value;
     if (search_value.length > 0) {

         document.getElementById('product-list').style.display = 'none'
         document.getElementById('best-sale').style.display = 'none'
         document.getElementById('flash-sale').style.display = 'none'
         document.getElementById('male').style.display = 'none'
         document.getElementById('female').style.display = 'none'
         document.getElementById('sub-architecture').style.display = 'none'
         document.getElementById('infomation').style.display = 'none'
         document.getElementById('brand').style.display = 'none'
         document.getElementById('hero-section').style.display = 'none'
         document.getElementById('hero-section-mini').style.display = 'none'
         document.getElementById('search').style.display = 'block'
         timKiemNangCao();
     }
     else {
         alert('Vui lòng nhập từ khoá để tìm kiếm!');
     }
 }
 
 function timKiemNangCao() {
     let searchValue = node.value;
     node.value = "";
     let product_sort = product_arr
     let typeProduct = document.getElementById('select-product').value;
     let minPrice = document.getElementById('min-price').value;
     let maxPrice = document.getElementById('max-price').value;
     let sort = document.getElementById('select-sort').value;
     if (minPrice == '') minPrice = 0;
     if (maxPrice == '') maxPrice = 9999999;
     dem = 0
    
     
    
     //  Sort Low To Height
     if (sort == "LowToHeight")
         for (i = 0; i < product_sort.length - 1; i++) {    
          console.log(parseFloat(product_sort[i].giamoi.replace('đ','')))
             for (j = i+1; j < product_sort.length; j++)
                 if (parseFloat(product_sort[i].giamoi.replace('đ','')) > parseFloat(product_sort[j].giamoi.replace('đ',''))) {
                     let temp = product_sort[i];
                     product_sort[i] = product_sort[j];
                     product_sort[j] = temp
                     console.log(product_sort[j].giamoi)    
                     
                 }
            
         }
     // Sort Height To Low
     else
         for (i = 0; i < product_sort.length - 1; i++) {
             for (j = i+1; j < product_sort.length; j++)
             if (parseFloat(product_sort[i].giamoi.replace('đ','')) < parseFloat(product_sort[j].giamoi.replace('đ','')))  {
                     let temp = product_sort[i];
                     product_sort[i] = product_sort[j];
                     product_sort[j] = temp
                 }
         }
 
         var contentProduct = ''  
         let tmp = []
     for (i = 0; i < product_sort.length; i++) {
         let aLoai = product_sort[i].loai;
         let aGia = parseFloat(product_sort[i].giamoi.replace('đ',''))*1000000
         console.log(aGia)
         let aTen = product_sort[i].ten;
 
         if ((aLoai != typeProduct && typeProduct != 'all') || aGia < minPrice || aGia > maxPrice ||
             !aTen.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()))
             continue;
          dem++
         tmp.push(product_sort[i])
         
         
              
          
     }
     if(dem==0){
          document.getElementsByClassName('search-top')[0].style.display = 'none';
          document.getElementsByClassName('search-content')[0].style.display = 'none';
          document.getElementsByClassName('search-pagination')[0].style.display = 'none';
          document.getElementsByClassName('no-search')[0].style.display = 'flex'

     }else {
          document.getElementsByClassName('search-top')[0].style.display = 'flex';
          document.getElementsByClassName('search-content')[0].style.display = 'flex';
          document.getElementsByClassName('search-pagination')[0].style.display = 'flex';
          document.getElementsByClassName('no-search')[0].style.display = 'none'
     }
     handlePageSearch(1 , tmp)
         document.querySelector('.num-result span').innerText = dem
         console.log(dem)
           
     }


// BILL --------------------------------------------------------------------------------------------------------

 var bill_arr = [

     
    
 ];     

 // ma hoa don 
 // ma khach hang 
// ma nv
// ngay hoa don
// hoa don 1 khA nvA 2/12/2021 tongtien
 var detailBill_arr = [


 ];    
     
// ma hoa don 
// ma san pham
// don gia 
//sl 
// thanh tien
 // mahd1 maspA dongia : 1.500.000 sl:2 thanh tien : 
 // hoadon1 spb .....




 function LoadBill() {
     if(localStorage.getItem('bill')===null) {
          localStorage.setItem('bill',JSON.stringify(bill_arr));
       
      }
}

function LoaddetailBill() {
     if(localStorage.getItem('detailbill')===null) {
          localStorage.setItem('detailbill',JSON.stringify(detailBill_arr));
       
      }
}

 
function AddToBill(){
    
    console.log('1')
     var makh
     var email1 = document.getElementsByClassName('emailkh1')[0].value
     console.log(email1)
     var email2  = document.getElementsByClassName('emailkh2')[0].value
     console.log(email2)
     var userArray = JSON.parse(localStorage.getItem('user'));
          for(var i=0; i<userArray.length; i++){
               
              if(userArray[i].email == email2 || userArray[i].email == email1){
                   makh = userArray[i].makh
                   break
              }      
              
                   
          
          } 
     

    console.log(makh)

     var bill_arr = JSON.parse(localStorage.getItem('bill'))
      let mahd = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 8).toUpperCase()
      var today = new Date()
      var day =  String(today.getDate())+"/"+String(today.getMonth() + 1)+"/"+String(today.getFullYear())
          var Bill1 = {
               mahd: mahd,
               makh: makh , 
               manv : Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 8).toLocaleUpperCase(),
               ngayhd : day,
               tongtien : AddToDetailBill(mahd ,makh),
               xuly : 0
               };
     
               bill_arr.push(Bill1)
              
               
               
              
     console.log(makh)          
     
     localStorage.setItem('bill',JSON.stringify(bill_arr));
   
     InnerBill(makh)
     
} 


function AddToDetailBill(mahd , makh){
    
     var detailBill_arr = JSON.parse(localStorage.getItem('detailbill'))
     var cartItemList = document.getElementsByClassName('cart-table-list')[0]
     
               var cartRows = cartItemList.getElementsByClassName('cart-row')
               var total = 0 ;
               for(let i = 0; i < cartRows.length; i++) {
                   
                    var cartRow = cartRows[i]
                    var namesp = cartRow.getElementsByClassName('namesp')[0].innerHTML
                    var quantityElm = cartRow.getElementsByClassName('quantityCart')[0]
                         var priceElm = cartRow.querySelector('#price')
                         var price = parseFloat(priceElm.innerText.replace('đ', ''))
                         var quantity = quantityElm.value
                         
                         total = total + (price * quantity)
                          
                        
                     
                    for(let j = 0; j < product_arr.length; j++) {

                         if(namesp == product_arr[j].ten){
                              
                                    var billDetail1 = {
                                         mahd : mahd,
                                         makh : makh,
                                         masp : product_arr[j].masp,
                                         dongia : price,
                                         sl: quantity,
                                         thanhtien: price*quantity,
                                         tensp : product_arr[j].ten
                                         
                          
                                    }
                                    detailBill_arr.push(billDetail1)
                                    break;
                                    

                         }
                        
                        
                    }
                 
                   
               }

     
    
               var x = (total*1000000).toFixed(0)
     
     localStorage.setItem('detailbill',JSON.stringify(detailBill_arr));
     return x;
}


function InnerBill(makh){
     var checkout = document.getElementsByClassName('checkout')[0]
     var bill_arr = JSON.parse(localStorage.getItem('bill'))
     var detailBill_arr = JSON.parse(localStorage.getItem('detailbill'))
     
     console.log(makh)
     checkout.innerHTML = `
     <tr  class="checkout-item"> 
     <th width="170px" height="40px" >Mã đơn hàng</th>
     <th width= "480px">Chi tiết</th>
     <th width= "170px">Ngày mua</th>
     <th width= "250px">Phương thức thanh toán</th>

     <th width= "170px">Thành tiền</span></th>
     </tr>
     `
     for(let i = 0; i < bill_arr.length; i++){
          var content = document.createElement('tr')
          content.classList.add('checkout-item')
          
        
                   if(bill_arr[i].makh === makh){
                    var detail = ''
                    for(let j = 0; j < detailBill_arr.length; j++){
                        
                         if(detailBill_arr[j].mahd == bill_arr[i].mahd && detailBill_arr[j].makh == makh){
                              
                              detail += `
                              ${detailBill_arr[j].tensp} x <span>${detailBill_arr[j].sl}</span> 
                          `
                         }
                         
                    }    

                   
                        
            
                        content.innerHTML = `
                        <th id="bill-num" >
                          ${bill_arr[i].mahd}
                        </th>
                       
                        <th id="bill-des" >
                          ${ detail}
                        </th>
                       
              
                        <th id="bill-date" >
                            ${bill_arr[i].ngayhd}
                        </th>
              
                        <th id ="bill-trans">
                           <p>Thanh toán khi nhận hàng</p>
                        </th>
              
                        <th id="bill-total" >
                                ${bill_arr[i].tongtien} vnđ
                        </th>
                        `
                        ;
    
                         
                
              }
     
               
          
                 
             checkout.appendChild(content); 
            
          }

            
}
function checkBill(){
    
         alert('Thanh toán thành công. Tự động trở về trang chủ !')
         
         AddToBill()
         var a = document.querySelector('.cart-table-list')
         a.innerHTML = ''
         document.getElementsByClassName('emty-cart')[0].classList.add('active')
         document.getElementById('number-total').innerHTML = '0'
         updateCart()
         PageHome()
         document.getElementById('Payment-name').value = ''
          document.getElementById('Payment-email').value = ''
          document.getElementById('Payment-city').value = ''
          document.getElementById('Payment-district').value = ''
          document.getElementById('Payment-ward').value = ''
          document.getElementById('Payment-address').value = ''
         
     }        

        


// var checkout1 = {
//      mahd: mahd,
//      ngaymua: bill_arr[i].ngayhd,
//      donvivanchuyen : 'Giao hàng tận nơi',
//      thanhtien : bill_arr[i].tongtien,
//      soluong : bill_arr[i].soluong,

// }




// var checkout1 = {
//      mahd: mahd,
//      ngaymua: bill_arr[i].ngayhd,
//      donvivanchuyen : 'Giao hàng tận nơi',
//      thanhtien : bill_arr[i].tongtien,
//      soluong : bill_arr[i].soluong,

// }



//Xu ly thanh toan
function thanhtoan() {
     let name = document.getElementById('Payment-name').value;
     let email = document.getElementById('Payment-email').value;
     let city = document.getElementById('Payment-city').value;
     let district = document.getElementById('Payment-district').value;
     let ward = document.getElementById('Payment-ward').value;
     let address = document.getElementById('Payment-address').value;
 
     if (name.length == 0 || email.length == 0 || city.length == 0 || district.length == 0 || ward.length == 0 || address.length == 0 ||!(email.includes('@'))) {
         if (name.length == 0) {
             document.getElementById('errorName2').style.display = 'block';
             document.getElementById('Payment-name').style.border = '1px solid red';
         }
         if (name.length != 0) {
             document.getElementById('errorName2').style.display = 'none';
             document.getElementById('Payment-name').style.border = '1px solid #ccc';
         }
         if (email.length == 0 || !(email.includes('@'))) {
             document.getElementById('errorEmail2').style.display = 'block';
             document.getElementById('Payment-email').style.border = '1px solid red';
         }
         if (email.length != 0  && (email.includes('@')) ) {
             document.getElementById('errorEmail2').style.display = 'none';
             document.getElementById('Payment-email').style.border = '1px solid #ccc';
         }
         if (city.length == 0) {
             document.getElementById('errorCity').style.display = 'block';
             document.getElementById('Payment-city').style.border = '1px solid red';
         }
         if (city.length != 0) {
             document.getElementById('errorCity').style.display = 'none';
             document.getElementById('Payment-city').style.border = '1px solid #ccc';
         }
         if (district.length == 0) {
             document.getElementById('errorDistrict').style.display = 'block';
             document.getElementById('Payment-district').style.border = '1px solid red';
         }
         if (district.length != 0) {
             document.getElementById('errorDistrict').style.display = 'none';
             document.getElementById('Payment-district').style.border = '1px solid #ccc';
         }
         if (ward.length == 0) {
             document.getElementById('errorWard').style.display = 'block';
             document.getElementById('Payment-ward').style.border = '1px solid red';
         }
         if (ward.length != 0) {
             document.getElementById('errorWard').style.display = 'none';
             document.getElementById('Payment-ward').style.border = '1px solid #ccc';
         }
         if (address.length == 0) {
             document.getElementById('errorAddress').style.display = 'block';
             document.getElementById('Payment-address').style.border = '1px solid red';
         }
         if (address.length != 0) {
             document.getElementById('errorAddress').style.display = 'none';
             document.getElementById('Payment-address').style.border = '1px solid #ccc';
         }
         
     }else {
          
          checkBill()
          
          
     }
 }

 window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
    document.getElementsByClassName('to-top')[0].style.display = 'flex';
  }else{
       document.getElementsByClassName('to-top')[0].style.display = 'none'
  }

 

}


function LienHe() {
     let name = document.getElementById('contact-name').value;
     let phone = document.getElementById('contact-phone').value;
     let email = document.getElementById('contact-email').value;
     let subject = document.getElementById('subject').value;
 
     if (name.length == 0 || email.length == 0 || phone.length < 10 || subject.length == 0 || !(email.includes('@')) || isNaN(phone)) {
         if (name.length == 0) {
             document.getElementById('errorName3').style.display = 'block';
             document.getElementById('contact-name').style.border = '1px solid red';
         }
         if (name.length != 0) {
             document.getElementById('errorName3').style.display = 'none';
             document.getElementById('contact-name').style.border = '1px solid #ccc';
         }
         if (email.length == 0 || !(email.includes('@'))) {
             document.getElementById('errorEmail3').style.display = 'block';
             document.getElementById('contact-email').style.border = '1px solid red';
         }
         if (email.length != 0 && (email.includes('@'))) {
             document.getElementById('errorEmail3').style.display = 'none';
             document.getElementById('contact-email').style.border = '1px solid #ccc';
         }
         if (phone.length < 10 || isNaN(phone)) {
             document.getElementById('errorPhone').style.display = 'block';
             document.getElementById('contact-phone').style.border = '1px solid red';
         }
         if (phone.length == 10 && !isNaN(phone)) {
             document.getElementById('errorPhone').style.display = 'none';
             document.getElementById('contact-phone').style.border = '1px solid #ccc';
         }
         if (subject.length == 0) {
             document.getElementById('errorAnswer').style.display = 'block';
             document.getElementById('subject').style.border = '1px solid red';
         }
         if (subject.length != 0) {
             document.getElementById('errorAnswer').style.display = 'none';
             document.getElementById('subject').style.border = '1px solid #ccc';
         }
         
     }else {
          alert("Gửi thông tin thành công. Tự động quay về trang chủ !")
          PageHome()
          document.getElementById('contact-name').value = ''
          document.getElementById('contact-phone').value = ''
          document.getElementById('contact-email').value = ''
          document.getElementById('subject').value = ''
         

     }
 }




