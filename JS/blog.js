"use strict"



export class Blog {

    constructor() {

        this.blogPostsData = [
            {
                postImageSrc: `./Images/Posts/javaScript-Blog.jpg`,
                postImageAlt:`JavaScript computer code`,
                postTitle: `JavaScript`,
                postParagraph: `JavaScript is a versatile programming language used for web development. It enables 
                                interactive and dynamic content on websites, runs on both client and server sides, 
                                and powers modern web applications.`,
                postAnchorText: `Some ideas about JavaScript`,
                postAnhcorLink:`https://www.linkedin.com/in/mo-men-mamdouh-aa5baa20a/`,
                postAuthor: `Mo'men`,
                postFooterAuthorImageSrc: `./Images/aboutImage3.jpg`,
                postFooterAuthorImageAlt: `Mo'men Mamdouh Image`,
            },

            {
                postImageSrc: `./Images/Posts/web-design-computer.jpg`,
                postImageAlt:`Salad Plate`,
                postTitle: `Web Design`,
                postParagraph: `Web design combines creativity and functionality to craft visually stunning, user-friendly 
                                websites that deliver seamless experiences and meaningful interactions.`,
                postAnchorText: `Some ideas about Web Design`,
                postAnhcorLink:`https://www.linkedin.com/in/mo-men-mamdouh-aa5baa20a/`,
                postAuthor: `Mo'men`,
                postFooterAuthorImageSrc: `./Images/aboutImage3.jpg`,
                postFooterAuthorImageAlt: `Mo'men Mamdouh Image`,
            },

            {
                postImageSrc: `./Images/Posts/web-development-computer.jpg`,
                postImageAlt:`Office`,    
                postTitle: `Web Dev`,
                postParagraph: `Web development brings ideas to life by building dynamic, responsive websites that 
                                prioritize performance, user experience, and functionality across platforms.`,
                postAnchorText: `Some ideas about Web Dev`,
                postAnhcorLink:`https://www.linkedin.com/in/mo-men-mamdouh-aa5baa20a/`,
                postAuthor: `Mo'men`, 
                postFooterAuthorImageSrc: `./Images/aboutImage3.jpg`,
                postFooterAuthorImageAlt: `Mo'men Mamdouh Image`,  
             },


        ];
        this.blogPost = document.querySelector(".blog-section .blog-cards");
        this.blogDisplayedPost = ``;
        this.date =  new Date();
        this.displayPosts();
        
    }


    displayPosts(){
        let currentTime = this.date.toLocaleString([], {
            hour: "2-digit",
            minute: "2-digit",
      });
        this.blogPostsData.forEach((post)=>{
            
        this.blogDisplayedPost += `
                <div class="col-md-4">

                    <div class="card position-relative h-100">

                        <div class="card-image">
                        <img style="height: 250px;"  src="${post.postImageSrc}"
                            alt="${post.postImageAlt}">
                        </div>

                        <div class="card-box ">
                            <h6 class="card-title ">${post.postTitle}</h6>
                        </div>

                        <div class="card-body">
                            <h4><a href="${post.postAnhcorLink}" class="fs-5"> ${post.postAnchorText} </a></h4>
                            <p>${post.postParagraph}</p>

                        </div>

                        <div class="card-footer row align-items-center  m-0">
                            <div class="col-sm-12 ps-0">
                               <div class="card-footer-image post-author fs-6 d-flex align-items-center w-100 justify-content-start gap-2">


                                       <img  srcset="${post.postFooterAuthorImageSrc}" alt="${post.postFooterAuthorImageAlt}">
                                        <a class="px-2" href="#">${post.postAuthor}</a>
                               
                                    
                                    
                                    <div class=" text-end posted-time ms-5 ps-2">
                                        <span class="text-end"><i class="fa-regular fa-clock px-2"></i>${currentTime}</span>
                                    </div>
                                </div>
                            </div>

                            
                        </div>

                    </div>

                </div>
                `
        })
        this.blogPost.innerHTML = this.blogDisplayedPost



    }
}