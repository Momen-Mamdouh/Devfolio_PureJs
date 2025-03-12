"use strict"


export class MyModal{


    constructor(){

        this.myModalImagesData = [
            {
                imageSrc: `./Images/WorkSection/uiDesigner.jpg`,
                imageAlt: `UI Designing`, 
            },

            {
                imageSrc: `./Images/WorkSection/WebDevlopment.jpg`, 
                imageAlt: `Web Devlopment`, 
            },

            {
                imageSrc: `./Images/WorkSection/JavaScript.jpg`, 
                imageAlt: `JavaScript`, 
            },

            {
                imageSrc: `./Images/WorkSection/TypeScript.png`,
                imageAlt: `TypeScript`,  
            },

            {
                imageSrc: `./Images/WorkSection/Angular.jpg`,
                imageAlt: `Angular`,  
            },

            {
                imageSrc: `./Images/WorkSection/React.jpg`,
                imageAlt: `React Js`,  
            }
        ];

        this.MyModalCloseIconId = document.getElementById("myModalCloseBtn").id;        
        this.MyModalArrowLeftIcon = document.getElementById("myModalArrowLeftIcon");
        this.MyModalArrowRightIcon = document.getElementById("myModalArrowRightIcon");
    
        this.myModal = document.querySelector("#myModal")
        this.myModalImage = document.querySelector(".modal-image img");
        this.currentImageIndex = 0; 
            
        this.detectImageOfModal();


    }

   

    detectImageOfModal(){
        // ** This fn toggle to show
        // ** It creates an array of classes from clicked targeted element then checks if it has calss "card-img-top" that i give to each image in portfoilioSection.
        // ** If it has it'll getSrc value from image and open the modal to display it with targted image
        // ** If not it do nothing.  
        window.addEventListener("click",(e)=>{
                if (e.target.classList.contains("portfolioImage")) {
                        const targetedImageSrc = e.target.getAttribute("srcset");
                        this.openModal(targetedImageSrc);
                }
      
        });  

        this.myModal.addEventListener("click", (e) => {
            if (e.target.closest("#myModalCloseBtn")) {
                this.closeModal();
            } else if (e.target.closest("#myModalArrowLeftIcon")) {
                this.getPreviousImage();
            } else if (e.target.closest("#myModalArrowRightIcon")) {
                this.getNextImage();
            }
        });
    } 

    // myModalClciking(){
    //     document.getElementById('myModal').addEventListener('click',  (e)=> {
    //         const currentModalImageSrc = this.myModalImage.getAttribute("srcset");
    //          if (e.target.closest('#myModalCloseBtn')) {
    //            this.closeModal();
    //          }

    //          if (e.target.closest('#myModalArrowLeftIcon')) {
    //            this.getPreviousImage(currentModalImageSrc);
    //          }
           
    //          if (e.target.closest('#myModalArrowRightIcon')) {
    //            this.getNextImage(currentModalImageSrc);
    //          }
    //        });
    // }

    openModal(targetedImageSrc) {

        this.currentImageIndex = this.myModalImagesData.findIndex(
            (image) => image.imageSrc === targetedImageSrc
        );
        this.updateModalImage();
        this.myModal.classList.remove("d-none");
    }

    closeModal(){
        this.myModal.classList.toggle("d-none");
    }

    updateModalImage() {
        const currentImage = this.myModalImagesData[this.currentImageIndex];
        this.myModalImage.setAttribute("srcset", currentImage.imageSrc);
        this.myModalImage.setAttribute("alt", currentImage.imageAlt);
    }

    getNextImage(){ 
        // **Here we use modulus to made more effective and dynamic code as: 
        // **when this.currentImageIndex + 1 < length it will retrun the this.currentImageIndex + 1 value 
        // **When this.currentImageIndex + 1 == length it will reutrn zero whihc reset the this.currentImageIndex we save value in it 
        this.currentImageIndex = (this.currentImageIndex + 1) % this.myModalImagesData.length;
        this.updateModalImage();
    }

    getPreviousImage(){
         // **Here we use modulus to made more effective and dynamic code as: 
        // **when this.currentImageIndex - 1 < length it will retrun the this.currentImageIndex - 1 value 
        // **When this.currentImageIndex - 1 == length it will reutrn zero whihc reset the this.currentImageIndex we save value in it 
        this.currentImageIndex = (this.currentImageIndex - 1 + this.myModalImagesData.length) % this.myModalImagesData.length;
        this.updateModalImage();


    

}


}


