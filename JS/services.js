"use strict"


export class Service{

    constructor(){

        this.allCards = ``;
        this.displayedCards = [

            {
                serviceCardIcon:`fa-brands fa-sketch`,
                serviceCardTitle: `Ui Designs`,
                serviceCardDescription: `A professional UI design services, crafting visually stunning, user-friendly interfaces. I focus on usability, 
                                            aesthetics, and modern design trends to enhance user experiences.`,
            },

            {
                serviceCardIcon:`fas fa-code`,
                serviceCardTitle: `Web Development`,
                serviceCardDescription: `Web development involves building and maintaining websites, combining front-end and back-end 
                                        technologies. It ensures functionality, performance, and scalability to deliver dynamic, interactive, 
                                        and user-centered online experiences.`,
            },

            {
                serviceCardIcon:`fa-brands fa-js`,
                serviceCardTitle: `JavaScript Capsules`,
                serviceCardDescription: `JavaScript Capsules, are bite-sized posts that simplify key concepts for easy understanding. 
                                        These concise  posts help developers quickly grasp essential JS topics. `,
            },

            {
                serviceCardIcon:`fas fa-file-code`,
                serviceCardTitle: `TypeScript Capsules`,
                serviceCardDescription: `TypeScript Capsules, are bite-sized posts that simplify key concepts for easy understanding. 
                                        These concise  posts help developers quickly grasp essential TS topics.`,
            },

            {
                serviceCardIcon:`fa-brands fa-angular`,
                serviceCardTitle: `Angular`,
                serviceCardDescription: `Angular projects with modern UI, seamless performance, and responsive design. My work focuses on scalable, 
                                        efficient, and dynamic web applications for an enhanced user experience. `,
            },

            {
                serviceCardIcon:`fa-brands fa-react`,
                serviceCardTitle: `React`,
                serviceCardDescription: `I'm currently learning React and will soon offer dynamic, high-performance projects. Excited to build modern, scalable 
                                            applications with interactive UIs. Stay tuned for updates! 
                `,
            },
        ];

        
        this.serviceCardSection = document.querySelector(".services-cards");
        this.displayServiceCards();
    }


    displayServiceCards(){
        this.displayedCards.forEach((card)=>{
            this.allCards += `
                <div class="col-md-4 ">
                    <div class="service-card text-center d-flex flex-column justify-content-center align-items-center p-3">
                        <div class="section-icon">
                        <i class="${card.serviceCardIcon}"></i>
                        </div>
                        <h3 class="pt-4 pb-3 fs-4">${card.serviceCardTitle}</h3>
                        <p class="px-2 pb-2">
                            ${card.serviceCardDescription}
                        </p>
                    </div>
                 </div>
            `
        });

        this.serviceCardSection.innerHTML =  this.allCards;
    }
    


}