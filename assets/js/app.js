const portfolio = [
    {
        id:1,
        workImg:'assets/images/background/desktop/portfolio image 1.png',
        workTitle:'tonic',
        workRole:{role: 'canopy', job: 'Back End Dev', year: 2015},
        workDetails:'A daily selection of privately personalized reads; no accounts or sign-ups required.',
        workTools:{stack1:'HTML',stack2:'CSS',stack3:'Javascript'}
    },
    {
        id:2,
        class:'two',
        workImg:'assets/images/background/desktop/portfolio image 2.png',
        workTitle:'Multi-Post Stories',
        workRole:{role: 'facebook', job: 'Full Stack  Dev', year: 2015},
        workDetails:'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
        workTools:{stack1:'HTML',stack2:'Ruby on rails',stack3:'CSS',stack4:'Javascript'}
    },
    {
        id:3,
        workImg:'assets/images/background/desktop/portfolio image 3.png',
        workTitle:'facebook 360',
        workRole:{role: 'facebook', job: 'Full Stack  Dev', year: 2015},
        workDetails:'A daily selection of privately personalized reads; no accounts or sign-ups required.',
        workTools:{stack1:'HTML',stack2:'Ruby on rails',stack3:'CSS',stack4:'Javascript'}
    },
    {
        id:4,
        class:'two',
        workImg:'assets/images/background/desktop/portfolio image 4.png',
        workTitle:'uber navigation',
        workRole:{role: 'uber', job: 'Lead Developer', year: 2018},
        workDetails:'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
        workTools:{stack1:'HTML',stack2:'Ruby on rails',stack3:'CSS',stack4:'Javascript'}
    },
]


const sectionPortfolio = document.querySelector('#work-section-desktop')
const modalContainer = document.querySelector('.modal-container')

window.addEventListener('DOMContentLoaded',()=>{
    displayPortfolio(portfolio);
    console.log(portfolio[1].id);
})

const displayPortfolio = (portfolio)=>{
    let displayPortfolio = portfolio.map((item)=>{
        return `
        <div class="project one ${item.class}" id='${item.id}'>
        <div class="work-img">
            <img src="${item.workImg}" alt="tonic image">
        </div>
        <div class="work-description" id="${item.id}">
            <h2 class="work-title">${item.workTitle}</h2>
            <ul class="canopy">
                <li>${item.workRole.role}</li>
                <li>${item.workRole.job}</li>
                <li>${item.workRole.year}</li>
            </ul>
            <p class="work-details">
            ${item.workDetails}
            </p>
            <ul class="work-tools">
                <li>${item.workTools.stack1}</li>
                <li>${item.workTools.stack2}</li>
                <li>${item.workTools.stack3}</li>
                ${item.workTools.stack4 ? `<li>${item.workTools.stack4}</li>` : ''}
            </ul>
            <button class="btn" data-modal="${item.id}">See Project</button>
        </div>
    </div>
        `
    }).join('')
    sectionPortfolio.innerHTML = displayPortfolio;

    const modalBtn = document.querySelectorAll('.btn')
    const overlay = document.querySelector(".modal-overlay");
    const closeBtn = document.querySelector(".close-btn");

    
    // modal functions
    modalBtn.forEach((btn)=>{
        btn.addEventListener('click',()=>{
            let modal = btn.getAttribute('data-modal')
            // const modalContent = portfolio.filter(item => item.id == modal).shift();
            document.getElementById(modal).addEventListener('click',()=>{
                overlay.classList.add('open-modal')
                displayModalContent(portfolio)
            })
            closeBtn.addEventListener("click", () => {
                overlay.classList.remove("open-modal");
              });
              window.addEventListener('click',(e)=>{
                if(e.target == overlay){
                    overlay.classList.remove('open-modal')
                }
              })
        })
    })
}

// const displayModalContent = (id)=>{
//     const content = portfolio[id]
//     const modalContent = `
//     <div class="modal-project">
//     <h2 class="work-title">${content.workTitle}</h2>
//     <ul class="canopy">
//       <li>${content.workRole.role}</li>
//       <li>${content.workRole.job}</li>
//       <li>${content.workRole.year}</li>
//     </ul>
//     <div class="work-img">
//       <img src="${content.workImg}" alt="tonic image">
//     </div>
//     <div class="project-description">
//       <p>${content.workDetails}</p>
//       <ul class="work-tools">
//         <li>${content.workTools.stack1}</li>
//         <li>${content.workTools.stack2}</li>
//         <li>${content.workTools.stack3}</li>
//         ${content.workTools.stack4 ? `<li>${content.workTools.stack4}</li>` : ''}
//       </ul>
//     </div>
//   </div>
//     `;
//     modalContainer.innerHTML = modalContent;
// }

const displayModalContent = (portfolio)=>{
    let modalContent = portfolio.map((content)=>{
        return `
     <div class="modal-project">
     <h2 class="work-title">${content.workTitle}</h2>
     <ul class="canopy">
       <li>${content.workRole.role}</li>
       <li>${content.workRole.job}</li>
       <li>${content.workRole.year}</li>
     </ul>
     <div class="work-img">
       <img src="${content.workImg}" alt="tonic image">
     </div>
     <div class="project-description">
       <p>${content.workDetails}</p>
       <ul class="work-tools">
         <li>${content.workTools.stack1}</li>
         <li>${content.workTools.stack2}</li>
         <li>${content.workTools.stack3}</li>
         ${content.workTools.stack4 ? `<li>${content.workTools.stack4}</li>` : ''}
       </ul>
     </div>
   </div>     
    `
    }).join('')
    modalContainer.innerHTML = modalContent
}