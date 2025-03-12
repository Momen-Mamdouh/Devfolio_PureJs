"use strict"
import { NavBar } from "./navbar.js";
import { Service } from "./services.js";
import { Counter } from "./counter.js";
import { Portfolio } from "./portfolio.js";
import { MyModal } from "./modal.js";
import { MainSwiper } from "./mainSwiper.js";
import { Blog } from "./blog.js";
import { ContactUs } from "./contactUs.js";
import { ProductSwiper } from "./productsSwiper.js";


// !!=======================================START MAINJS============================================>






// !!=======================================START MAIN_DECLARATIONS============================================>

const loader = document.querySelector('.loader');
console.log(loader);

const myNavbar = new NavBar();
  
  
checkLoadingContentToDisplayLoader();


// !!=======================================END MAIN_DECLARATIONS============================================>


// ^^=======================================START HEADER============================================>

    
    let typed = new Typed('#element', {
      strings: ['A Front-End Developer', 'Angular', ' React Soon'],
      typeSpeed: 50,
      backSpeed: 50,
      smartBackspace: true,
      loop: true,
      loopCount: Infinity,
      showCursor: true,
      cursorChar: '|',
      });

      const swiper = new Swiper('.swiper', {
        //? Optional parameters
    
        loop: false,
        spaceBetween: 100,
    
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
    
      }); 
      


      let headerData = {
        headerHeading: "Mo'men Mamdouh",
      }
    
      let headerHeading = document.querySelector(".header-title");
      let headerSubHeading = document.querySelector(".headerSubHeading")
      headerHeading.innerHTML = headerData.headerHeading;

   

// ^^=======================================END HEADER============================================>


// ??=======================================START MAINPAGE============================================>
if(!window.location.href.includes("workId")){
       
        const serviceInstance = new Service();
        const counterInstance = new Counter();
        const portfolioInstance = new Portfolio();
        const MyModalInstance = new MyModal();
        const MyMainSwiperInstance = new MainSwiper();
        const MyBlogInstance = new Blog();
        const MyContactUsInstance = new ContactUs();
        
}
else if(!window.location.href.includes("profile")){
    

}
// ??=======================================END MAINPAGE============================================>

// !!=======================================START MAINJS============================================>
  function checkLoadingContentToDisplayLoader() {
    setTimeout(() => {
      if (document.readyState === 'complete') {
        if (loader) {
          loader.classList.add('d-none');
        }
      } else {
        window.addEventListener('load', () => {
          if (loader) {
            loader.classList.add('d-none');
          }
        });
      }
    },2000)
  }
  

  (function displayProductPageData(){
    if (window.location.href.includes("workId")) {
      headerSubHeading.innerHTML = `<a href="index.html" >Home</a> / <a href="#">Product</a>`;
      const MyProductSwiperInstance = new ProductSwiper();
    
    }
    })();
// !!=======================================END MAINJS============================================>  



