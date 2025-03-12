"use strict"

export class NavBar{



    constructor(){
        this.viewportHeight = window.innerHeight;

        this.myNavbar = document.querySelector('.navbar');
        this.navbarToggler = document.querySelector('button.navbar-toggler'); 
        this.navbarCollapse = document.querySelector('#navbarNav'); 

        this.handleScroll = this.debounce(() => this.checkScroll(), 100);    

       
        window.addEventListener('scroll',()=> this.handleScroll());



    }

    debounce(func, delay) {
        let timeout;
        return function (...args) {
          clearTimeout(timeout);
          timeout = setTimeout(() => func.apply(this, args), delay);
        };
    }


    checkScroll() {
        const scrollY = window.scrollY; 
        if (scrollY > this.viewportHeight ) {                    
            this.myNavbar.classList.add("py-2");
            this.myNavbar.classList.remove("bg-transparent");
        } 
        else{
            this.myNavbar.classList.remove("py-2");
            this.myNavbar.classList.add("bg-transparent");
        };

    }


 
   
}
