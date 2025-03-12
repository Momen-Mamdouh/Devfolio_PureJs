"use strict"


export class Products{


    constructor(){
        this.today = new Date();
        this.ProductsItems = JSON.parse(localStorage.getItem("productData"));
        this.productId = ''
        this.ProductsItemsSection = document.querySelector(".Products-items");
        this.displayedItems = ``;

        this.displayProductsItems();

    }

    getIdFromUrl(){
        this.productId = window.location.pathname.split("/").pop();
        return this.productId;
    }

    displayProductsItems(){
        this.ProductsItems.forEach((item)=>{
              if(item.productId == this. getIdFromUrl()){
                    console.log(item);
                    
              }
        })

        this.ProductsItemsSection.innerHTML = this.displayedItems
    }

}