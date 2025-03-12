"use strict"

export class ProductSwiper{


    constructor(){


        this.swiperWrapper = document.querySelector(".swiper-wrapper");

        this.slideData = JSON.parse(localStorage.getItem("productData"));
        this.displayedData= ``;

       
        this.productId = this.getProductId("workId");
        this.productIdIndex;
        this.productFound = false;
        this.defineProductIndexInData()
        this.displaySlide();
 

    } 
    
    
     getProductId(param) {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get(param);

        }

    defineProductIndexInData(){
        this.slideData.forEach((slide,index)=>{ 
           if(slide.productId == this.productId){
                this.productIdIndex = index;
                this.productFound =  true

           }
         })
    }
    

    displaySlide(){

        if(this.productFound){
            this.slideData[this.productIdIndex].portfolioSubImagesSrcs.forEach((slideImage,index)=>{
                    this.displayedData += `
                        <div class="swiper-slide pb-5">
                            <div class="row">
            
                                <div class="col-sm-12">
                                    <div class="slider-items d-flex justify-content-center align-items-center flex-column text-center">
            
                                        <div class="slider-image rounded-circle w-100 ">
                                            <img class="w-100 rounded-5" srcset="${slideImage}" alt="Project Image">
                                        </div>
            
                                    
                                        
                                    </div>
                                </div>
            
                            </div>
        
                        </div>
                    `  
            })
            this.swiperWrapper.innerHTML = this.displayedData;
           ;
            
        }
       
        
    }


}