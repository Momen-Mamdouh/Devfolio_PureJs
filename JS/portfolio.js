"use strict"

export class Portfolio{


    constructor(){
        this.today = new Date();
        this.portfolioItems = [
            {
                portfolioImageSrc: `./Images/WorkSection/uiDesigner.jpg`,
                portfolioSubImagesSrcs:[
                    `./Images/WorkSection/uiDesigner.jpg`,
                    `./Images/productSlider/Fokir_Home.jpg`,
                    `./Images/productSlider/Fokir_Portfolio.jpg`,
                ],
                portfolioService: `Ui Design`,
                portfolioTitle: `Fokir Site`,
                productId:`101`,
            },

            {
                portfolioImageSrc: `./Images/WorkSection/WebDevlopment.jpg`,
                portfolioSubImagesSrcs:[
                    `./Images/WorkSection/WebDevlopment.jpg`,
                    `./Images/productSlider/`,
                    `./Images/productSlider/`,
                ],
                portfolioService: `Web Development`,
                portfolioTitle: `Mealify site`,
                productId:`102`,
            },

            {
                portfolioImageSrc: `../Images/WorkSection/JavaScript.jpg`,
                portfolioSubImagesSrcs:[
                    `./Images/WorkSection/JavaScript.jpg`,
  
                ],
                portfolioService: `JavaScript Capsules`,
                portfolioTitle: `JavaScript Capsules`,
                productId:`103`,
            },


            {
                portfolioImageSrc: `./Images/WorkSection/TypeScript.png`,
                portfolioSubImagesSrcs:[
                    `./Images/WorkSection/TypeScript.png`,
 
                ],
                portfolioService: `TypeScript Capsules`,
                portfolioTitle: `TypeScript Capsules`,
                productId:`104`,
            },

            {
                portfolioImageSrc: `./Images/WorkSection/Angular.jpg`,
                portfolioSubImagesSrcs:[
                    `./Images/WorkSection/Angular.jpg`,
  
                ],
                portfolioService: `Angular`,
                portfolioTitle: `Angular Projects`,
                productId:`105`,
            },

            {
                portfolioImageSrc: `./Images/WorkSection/React.jpg`,
                portfolioSubImagesSrcs:[
                    `./Images/WorkSection/React.jpg`,
                ],
                portfolioService: `React`,
                portfolioTitle: `React Projects`,
                productId:`106`,
            },
        ];
        localStorage.setItem("productData", JSON.stringify(this.portfolioItems));
        this.portfolioItemsSection = document.querySelector(".portfolio-items");
        this.displayedItems = ``;

        this.displayPortfolioItems();

    }

    displayPortfolioItems(){
        this.portfolioItems.forEach((item)=>{
                this.displayedItems += `

                    <div class="col-md-4">
                            <div class="card portfolio-card text-center" data-product-id="${item.productId}">
                            <div class="portfolio-image text-center">
                                <img srcset="${item.portfolioImageSrc}" class="portfolioImage card-img-top" alt="${item.portfolioTitle}">
                            </div>
                            <div class="card-body  py-4 row ">
                                <div class="col-sm-10 text-start">
                                    <h5 >${item.portfolioTitle}</h5>
                                    <h6> <span class="card-category"><small>${item.portfolioService}</small></span>: <span class="product-date"><small>${this.today.getUTCMonth()+1} /${this.today.getDate()}/ ${this.today.getFullYear()}</small></span></h6>
                                </div>

                                <div class="card-icon col-sm-2 px-0 text-center d-flex align-items-center justify-content-center">
                                    <a href="../products.html?workId=${item.productId}" > <i class="fa-solid fa-circle-plus fa-2x"></i></a>
                                </div>

                            </div>
                        </div>

                    </div>

                `
        })

        this.portfolioItemsSection.innerHTML = this.displayedItems;
        
    }

}