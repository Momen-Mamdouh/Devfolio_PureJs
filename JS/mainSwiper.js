"use strict"

export class MainSwiper{


    constructor(){


        this.swiperWrapper = document.querySelector(".swiper-wrapper");

        this.slideData = [
            {
                slideImageSrc :`./Images/aboutImage.jpg`,
                slideImageAlt: `Mo'men Mamdouh Cv Image`,
                slidePersonName: `Mo'men Mamdouh`,
                slidePersonParagraph: `Passionate front-end developer crafting responsive, user-friendly
                      interfaces with modern technologies and creative design solutions.`,
            },

            {
                slideImageSrc :`./Images/aboutImage2.jpg`,
                slideImageAlt: `Mo'men Mamdouh Cv Image`,
                slidePersonName: `Mo'men Mamdouh`,
                slidePersonParagraph: `Skilled Angular web developer specializing in building efficient, scalable solutions with a focus on clean code.`,
            },
        ]

        this.displayedData= ``;

        this.displaySlide();
    } 
    
    

    displaySlide(){

        this.slideData.forEach((slide)=>{
            this.displayedData += `
                <div class="mainSwiper swiper-slide pb-5">
                <div class="row">

                    <div class="col-sm-12">
                    <div class="slider-items d-flex justify-content-center align-items-center flex-column text-center">

                        <div class="slider-image ">
                        <img src="${slide.slideImageSrc}" alt="${slide.slideImageAlt}">
                        </div>

                        <h4 class="slider-person-name py-3 fs-2">${slide.slidePersonName}</h4>
                        <p class="slider-person-paragraph fs-5 w-75 m-auto text-center">${slide.slidePersonParagraph}</p>
                        
                    </div>
                    </div>

                </div>

                </div>
                `
        })
        this.swiperWrapper.innerHTML = this.displayedData;
    }


}