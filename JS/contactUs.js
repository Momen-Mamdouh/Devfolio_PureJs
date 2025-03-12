'use strict'


export class ContactUs {


    constructor() {
        this.vaildUserContact = JSON.parse(localStorage.getItem("UsersContact")) || [];
        this.isValid = false    
        this.nameRegex = /([a-zA-Z0-9_\s]{2,})/;
        this.emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

        this.formInputs = document.querySelectorAll(".form-inputs input");
        this.formtextArea = document.querySelector(".form-inputs textarea");
        this.formBtn = document.querySelector(".form-inputs button");
        this.formName = document.querySelector(".userName");
        this.formEmail = document.querySelector(".userEmail");
        this.formSubject = document.querySelector(".userSubject");
        this.formComment = document.querySelector(".userComment");
        this.formBtn = document.querySelector(".submationBtn");

        this.formModal = document.getElementById("formModal");
        this.formCloseModalBtn = document.querySelector(".closing");

        this.btnState();    
        this.checkFormVaildation();
        
        this.formBtn.addEventListener("click", ()=>{
                this.submitForm();
        });
        this.closeModal();

    }


    checkFormVaildation(){
        this.formInputs.forEach((input)=>{
            input.addEventListener("change",()=>{
            if(input.name == "Name"){
                this.checksInput(input, this.nameRegex);
            }
            else if(input.name == "Email"){
                 this.checksInput(input, this.emailRegex);
            }
                })  
        })
    };

    checksInput(inputElement, inputRegex){
                if(inputRegex.test(inputElement.value)){
                    this.changeToVaild(inputElement)
                    // this.formBtn.classList.remove("disabled");
                    this.isValid = true;
                    this.btnState(); 

                }
                else{
                    this.isVaild = false;
                    this.changeToInVaild(inputElement);
                    // this.formBtn.classList.add("disabled"); 
                    this.isValid = false;
                    this.btnState();
                                                    
                }
    };

    changeToVaild(input){
        input.classList.add("is-valid");
        input.classList.remove("is-invalid");
        input.nextElementSibling.classList.replace("d-flex","d-none");
    };

    changeToInVaild(input){
        input.classList.remove("is-valid");
        input.classList.add("is-invalid");
        input.nextElementSibling.classList.replace("d-none","d-flex");
    };

    addNewContact(){
        const inputObj = {
            userName: this.formName.value,
            userEmail: this.formEmail.value,
            userSubject: this.formSubject.value,
            userMessage: this.formComment.value,
        };
        this.vaildUserContact.push(inputObj);
        localStorage.setItem("UsersContact",JSON.stringify(this.vaildUserContact))
    };

    btnState(){
        if (this.isValid) {
            this.formBtn.removeAttribute("disabled");
        } else {
            this.formBtn.setAttribute("disabled", "true");
        }
    };

    resetValues(){
        this.formInputs.forEach((input)=>{
            input.value = null;
            input.classList.remove("is-valid");
            input.classList.remove("is-invalid");
        });
        this.formtextArea.value = null;
        this.isValid = false;
        this.btnState();
    }

    submitForm(){
        if(this.isValid){
            this.addNewContact();
            this. resetValues();  
            this.showModal(); 
        }
    };

    showModal(){
        this.formModal.classList.remove("d-none");
    };

    closeModal(){
        this.formCloseModalBtn.addEventListener("click",()=>{
            this.formModal.classList.add("d-none");
        });
    };

   


}