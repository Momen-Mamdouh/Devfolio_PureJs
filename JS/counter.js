"use strict";

export class Counter {

  constructor() {
    //^^ Work_Counter section:
        this.counterItems = [
            {
                counterItemIcon: `fa-check`,
                counterItemCount: 450,
                counterItemTitle: `WORKS COMPLETED`,
            },
            {
                counterItemIcon: `fa-book-journal-whills`,
                counterItemCount: 2,
                counterItemTitle: `YEARS OF EXPERIENCE`,
            },
            {
                counterItemIcon: `fa-user`,
                counterItemCount: 601,
                counterItemTitle: `TOTAL CLIENTS`,
            },
            {
                counterItemIcon: `fa-award`,
                counterItemCount: 49,
                counterItemTitle: `AWARD WON`,
            },
        ];
        this.counterItemsSection = document.querySelector(".counter-items");
        this.counterDisplayedItems = ``;

    //^^ Skill_Counter section: 
        // Skills section
        this.skillsValues = {
          htmlSkill: 95,
          cssSkill: 92,
          jsSkill: 94,
          angularSkill: 96,
          reactSkill: 93,
        };
        this.skillsCounter = [
          {
              widthValue: `HTML5 `,
              target: this.skillsValues.htmlSkill,
          },
          {
              widthValue: `CSS3 `,
              target: this.skillsValues.cssSkill,
          },
          {
              widthValue: `JavaSript `,
              target: this.skillsValues.jsSkill,
          },
          {
              widthValue: `Angular `,
              target: this.skillsValues.angularSkill,
          },
          {
              widthValue: `React `,
              target: this.skillsValues.reactSkill,
          },
        ];
        this.skillsData = ``;
        this.skillsSection = document.querySelector(".skills-bars");


    this.timeToDisplayCount = 10000;


    this.displayCounterItems();
    this.displaySkillsData();
    this.observeSection(this.counterItemsSection, ".counter", "text");
    this.observeSection(this.skillsSection, ".progress-bar", "width");
  }

  displayCounterItems() {
    this.counterItems.forEach((item) => {
      this.counterDisplayedItems += `
        <div class="col-md-3 counter-column">
          <div class="counter-card text-center d-flex flex-column justify-content-center align-items-center p-1">
            <div class="section-icon">
              <i class="fa-solid ${item.counterItemIcon}"></i>
            </div>
            <h3 class="pt-4 pb-3">
              <span class="counter" data-target="${item.counterItemCount}">0</span>
            </h3>
            <p class="px-2 pb-2 text-uppercase">${item.counterItemTitle}</p>
          </div>
        </div>
      `;
    });

    this.counterItemsSection.innerHTML = this.counterDisplayedItems;
  }

  displaySkillsData() {
    this.skillsCounter.forEach((skillValue) => {
      this.skillsData += `
        <div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
          <div class="progress-bar" style="width: 0" data-target="${skillValue.target}">${skillValue.widthValue}</div>
        </div>
      `;
    });

    this.skillsSection.innerHTML = this.skillsData;
  }

  animateCounters(selector, property) {
    const elements = Array.from(document.querySelectorAll(selector));

    elements.forEach((element,index) => {
      const target = +element.getAttribute("data-target");
      const increment = Math.ceil(target / (this.timeToDisplayCount / 50));

      const update = () => {
        const current = property === "text" 
          ? +element.innerText 
          : +element.style[property].replace("%", "");

        if (current < target) {
          if (property === "text") {
            element.innerText = current + increment;
          } else {
            element.style[property] = `${current + increment}%`;
            element.innerText = `${this.skillsCounter[index].widthValue} ${current + increment}%`;
          }
          setTimeout(update, 50);
        } else {
          if (property === "text") {
            element.innerText = target;
          } else {
            element.style[property] = `${target}%`;
          }
        }
      };

      update();
    });
  }

  resetCounters(selector, property) {
    const elements = Array.from(document.querySelectorAll(selector));

    elements.forEach((element,index) => {
      if (property === "text") {
        element.innerText = "0";
      } else {
        element.style[property] = "0%";
        element.innerText = `${this.skillsCounter[index].widthValue} 0%`;
      }
    });
  }

  observeSection(section, selector, property) {
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.resetCounters(selector, property);
            this.animateCounters(selector, property);
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(section);
  }
}

