
DJANGO_STATIC_URL = "/static";
const projects = [
  {
    id: "1",
    title: "M-B HOMES REALTY",
    link: "https://www.m-bhomes.com",
    image: "MBHOMESLAYOUT.png",
  },
  {
    id: "2",
    title: "Chain Marriage",
    link: "https://www.chainmarriage.com",
    image: "chainMarriageHome.png",
    tags: ["REACT", "SOLIDITY", "POLYGON", "DJANGO-RESTFRAMEWORK", "WEB3"],

  },
];
function initializeProjects() {
  let projectsContainer = document.getElementById("projects-container");
  console.log("gregeg", projectsContainer);
    projects.forEach((project) => {
      console.log(project)
        let projectCard = document.createElement("div");
        projectCard.setAttribute("onclick", "toggleModel()");
        projectCard.classList = "project-container"
        projectCard.style.backgroundColor = "#FFF"
        let projectHeaderContainer = document.createElement("div");
        projectCard.appendChild(projectHeaderContainer);
        let projectHeaderContainerTitle = document.createElement("div");
        projectHeaderContainer.appendChild(projectHeaderContainerTitle);
        projectHeaderContainer.classList = "project-container-header";
        let headerText = document.createElement("h1");
        headerText.classList = "text-3xl";
        headerText.style.color = "#000";
        headerText.innerHTML = project.title;
        projectHeaderContainerTitle.appendChild(headerText);
        let projectHeaderContainerButton = document.createElement("div");
        projectHeaderContainer.appendChild(projectHeaderContainerButton);
        let projectHeaderButton = document.createElement("a");
        projectHeaderButton.classList = "view-site-btn";
        projectHeaderButton.innerHTML = "Visit Site";
      projectHeaderContainerButton.appendChild(projectHeaderButton);
      let projectCardInner = document.createElement("div");
      projectCardInner.classList = "project-container-inner";
      projectCard.appendChild(projectCardInner);
      let projectCardImageContainer = document.createElement("div");
      projectCardImageContainer.classList = "project-image";
        let projectImage = document.createElement("img");
      projectImage.src = DJANGO_STATIC_URL + `/images/${project.image}`;
      projectImage.classList = "website-image";
      projectCardImageContainer.appendChild(projectImage)
      projectCardInner.appendChild(projectCardImageContainer);
      projectCard.className = "project-container";
      let projectCardTechTitle = document.createElement("h1");
      projectCardTechTitle.innerHTML = "Tech Used";
      projectCardTechTitle.style.color = "#000";
      projectCard.appendChild(projectCardTechTitle);
      // create the tags for the card 
      let projectCardTechUsedContainer = document.createElement("div");
      projectCardTechUsedContainer.className = "tech-used-container";
      let projectCardTechUsedIcon = document.createElement("div");
      projectCardTechUsedIcon.className = "tech-used-icon";
      projectCardTechUsedIcon.innerHTML = "NextJs";
      projectCardTechUsedContainer.appendChild(projectCardTechUsedIcon);
      projectCard.appendChild(projectCardTechUsedContainer);
      projectsContainer.append(projectCard);
  });
}

initializeProjects();
let searchInput = document.getElementById("search-input");
searchInput.addEventListener("keyup", (e) => {
  console.log(e.target.value);
});

// search function for projects 
function search() {

}

// function toggleModel() {
//   console.log("model toggle")
//   let toggleModel = document.getElementById("model-popup-container");
//   if (toggleModel.style.display == "none") {
//     toggleModel.style.display = "block";
//   }
//   else {
//     toggleModel.style.display = "none";
//   }

// }

  // <div class="project-container">
  //                   <div class="project-container-header">
  //                       <div>
  //                       <h1 class="text-3xl">Chain Marriage</h1>
  //                       </div>
  //                       <div>
  //                           <a href="https://www.chainmarriage.com" target="_blank" class="view-site-btn">Visit Site</a>
  //                       </div>
  //                   </div>
  //                   <div class="project-container-inner">
  //                       <div   class="project-image">
  //                           <img class="website-image" src="{% static 'images/chainMarriageHome.png' %}"/>
  //                       </div>
  //                       <div class="project-info-container">
  //                           <div class="project-info-container-wrapper">
  //                               <div>
  //                               <h1 style="font-size: 24px; ">OVERVIEW</h1>
  //                               <p>The future of marriage is here. 
  //                                   Platform that allows you to solidity your love for someone on the blockchain. 
  //                                   Marriage in the future will be conducted on the blockchain due to the transparency and ability to create an easily accessible public leger. 
  //                               </p>
  //                               </div>
  //                                   <br>
  //                               <div>
  //                               <h1 style="font-size: 24px; ">ACCOMPLISHMENTS</h1>
  //                               <p>
  //                                <span class="bullet-point">-</span> I was the first person to use the platform becoming either the  
  //                                youngest or first person to get married on the polygon blockchain.</p>
  //                               </div>
  //                                   <br>
  //                               <div>
  //                                   <h1 style="font-size: 24px; ">TECH USED</h1>
  //                               <div class="tech-used-container">
  //                                   <div class="tech-used-icon">SOLIDITY</div>
  //                                   <div class="tech-used-icon">REACT</div>
  //                                   <div class="tech-used-icon">POLYGON</div>
  //                                   <div class="tech-used-icon">DJANGO-RESTFRAMEWORK</div>
  //                                   <div class="tech-used-icon">WEB3</div>
  //                               </div>
  //                           </div>
  //                           </div> 
  //                       </div>
  //                   </div>
  //               </div>
            
  //           <div class="project-container">
  //               <div class="project-container-header">
  //                   <div>
  //                   <h1 class="text-3xl">Krypt | Exchange</h1>
  //                   </div>
  //                   <div>
  //                       <a href="https://crpytoexchange.herokuapp.com" target="_blank" class="view-site-btn">Visit Site</a>
  //                   </div>
  //               </div>
  //               <div class="project-container-inner">
  //                   <div   class="project-image">
  //                       <img class="website-image" src="{% static 'images/KryptHome.png' %}"/>
  //                   </div>
  //                   <div class="project-info-container">
  //                       <div class="project-info-container-wrapper">
  //                           <div>
  //                           <h1 style="font-size: 24px; ">OVERVIEW</h1>
  //                           <p>Krypto a crypto currency exchange platform build for use with the ethereum network. 
  //                           </p>
  //                           </div>
  //                               <br>
  //                           <div>
  //                           <h1 style="font-size: 24px; ">ACCOMPLISHMENTS</h1>
  //                           <p>
  //                            <span class="bullet-point">-</span> Has been successfuly tested using chai and is hosted on the ropsten test blockchain.</p>
  //                           </div>
  //                               <br>
  //                           <div>
  //                               <h1 style="font-size: 24px; ">TECH USED</h1>
  //                           <div class="tech-used-container">
  //                               <div class="tech-used-icon">REACT</div>
  //                               <div class="tech-used-icon">Ethereum</div>
  //                               <div class="tech-used-icon">METAMASK</div>
  //                               <div class="tech-used-icon">Tailwind CSS</div>
  //                           </div>
  //                       </div>
  //                       </div> 
  //                   </div>
  //               </div>
  //           </div>
  //           <div class="project-container">
  //               <div class="project-container-header">
  //                   <div>
  //                   <h1 class="text-3xl">What The Doge NFT</h1>
  //                   </div>
  //                   <div>
  //                       <a href="https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/115280045661947983841653635798987528830528599257518677970676727668494697496577" target="_blank" class="view-site-btn">Visit Site</a>
  //                   </div>
  //               </div>
  //               <div class="project-container-inner">
  //                   <div   class="project-image">
  //                       <img class="website-image" src="{% static 'images/NFTGif.gif' %}"/>
  //                   </div>
  //                   <div class="project-info-container">
  //                       <div class="project-info-container-wrapper">
  //                           <div>
  //                           <h1 style="font-size: 24px; ">OVERVIEW</h1>
  //                           <p>A One of One NFT project to develop an NFT for the polygon blockchain. It was listed for sale on Opensea for .1 Eth.
  //                           </p>
  //                           </div>
  //                               <br>
  //                           <div>
  //                           <h1 style="font-size: 24px; ">ACCOMPLISHMENTS</h1>
  //                           <p>- Sucessfuly posted an NFT that was made from scratch in a marketplace. It has not sold yet.
  //                           </p>
  //                           </div>
  //                               <br>
  //                           <div>
  //                               <h1 style="font-size: 24px; ">TECH USED</h1>
  //                           <div class="tech-used-container">
  //                               <div class="tech-used-icon">Adobe After Effects</div>
  //                               <div class="tech-used-icon">Blender</div>
  //                               <div class="tech-used-icon">OpenSea</div>
  //                               <div class="tech-used-icon">Polygon</div>
  //                           </div>
  //                       </div>
  //                       </div> 
  //                   </div>
  //               </div>
  //           </div>
           
            
  //           <div class="project-container">
  //               <div class="project-container-header">
  //                   <div>
  //                   <h1 class="text-3xl">UI DESIGN</h1>
  //                   </div>
  //                   <div>
  //                       <a href="https://www.instagram.com/visionhow/" target="_blank" class="view-site-btn">See Designs</a>
  //                   </div>
  //               </div>
  //               <div class="project-container-inner">
  //                   <div   class="project-image">
  //                       <img class="website-image" src="{% static 'images/visionhowUI.png' %}"/>
  //                   </div>
  //                   <div class="project-info-container">
  //                       <div class="project-info-container-wrapper">
  //                           <div>
  //                           <h1 style="font-size: 24px; ">OVERVIEW</h1>
  //                           <p>Visit Visionhow on Instagram to see UI Desgins.</p>
  //                           </div>
  //                               <br>
  //                           <div>
  //                           <h1 style="font-size: 24px; ">ACCOMPLISHMENTS</h1>
  //                           <p>
  //                            <span class="bullet-point">-</span>Have created several UI Designs and have started to gain a following.</p>
  //                           <p>- My rolex UI Design was reposted by a more popular UI/UX Instagram page.</p>
  //                           </div>
  //                               <br>
  //                           <div>
  //                               <h1 style="font-size: 24px; ">TECH USED</h1>
  //                           <div class="tech-used-container">
  //                               <div class="tech-used-icon">FIGMA</div>
  //                               <div class="tech-used-icon">PHOTOSHOP</div>
  //                               <div class="tech-used-icon">ILLUSTRATOR</div>
  //                           </div>
  //                       </div>
  //                       </div> 
  //                   </div>
  //               </div>
  //           </div>

  //               <div class="project-container">
  //                   <div class="project-container-header">
  //                       <div>
  //                       <h1 class="text-3xl">M-B HOMES REALTY</h1>
  //                       </div>
  //                       <div>
  //                           <a href="https://www.m-bhomes.com" target="_blank" class="view-site-btn">Visit Site</a>
  //                       </div>
  //                   </div>
  //                   <div class="project-container-inner">
  //                       <div   class="project-image">
  //                           <img class="website-image" src="{% static 'images/MBHOMESLAYOUT.png' %}"/>
  //                       </div>
  //                       <div class="project-info-container">
  //                           <div class="project-info-container-wrapper">
  //                               <div>
  //                               <h1 style="font-size: 24px; ">OVERVIEW</h1>
  //                               <p>Real Estate website for an agent that is currently in use.
  //                                   Consists of multiple pages and live mls feed on homes currently 
  //                                   for sale.
  //                               </p>
  //                               </div>
  //                                   <br>
  //                               <div>
  //                               <h1 style="font-size: 24px; ">ACCOMPLISHMENTS</h1>
  //                               <p>
  //                                <span class="bullet-point">-</span> Leads have come through the site in combination with social media advertising that have resulting in tens of thousands of dollars in commision.</p>
  //                               <p>- Client stated statisfaction in the site and improved brand equity.</p>
  //                               </div>
  //                                   <br>
  //                               <div>
  //                                   <h1 style="font-size: 24px; ">TECH USED</h1>
  //                               <div class="tech-used-container">
  //                                   <div class="tech-used-icon">NEXTJS</div>
  //                                   <div class="tech-used-icon">REACT</div>
  //                                   <div class="tech-used-icon">SELENIUM</div>
  //                                   <div class="tech-used-icon">DJANGO-RESTFRAMEWORK</div>
  //                                   <div class="tech-used-icon">SCSS</div>
  //                               </div>
  //                           </div>
  //                           </div> 
  //                       </div>
  //                   </div>
  //               </div>
            
  //           <div class="project-container">
  //               <div class="project-container-header">
  //                   <div>
  //                   <h1 class="text-3xl">Taskier App</h1>
  //                   </div>
  //                   <div>
  //                       <a href="https://apps.apple.com/us/app/taskier/id1592401860" target="_blank" class="view-site-btn">Download</a>
  //                   </div>
  //               </div>
  //               <div class="project-container-inner">
  //                   <div   class="project-image">
  //                       <img class="website-image" src="{% static 'images/TaskierAppLayout.png' %}"/>
  //                   </div>
  //                   <div class="project-info-container">
  //                       <div class="project-info-container-wrapper">
  //                           <div>
  //                           <h1 style="font-size: 24px; ">OVERVIEW</h1>
  //                           <p>Simple ToDo Application that is currently on the app store. It was completed to showcase 
  //                               that I can create apps and push them into production as well as maintain them completing the full app 
  //                               development lifecycle.
  //                           </p>
  //                           </div>
  //                               <br>
  //                           <div>
  //                           <h1 style="font-size: 24px; ">ACCOMPLISHMENTS</h1>
  //                           <p>
  //                            <span class="bullet-point">-</span> Have a published app on the Apple App Store.</p>
  //                           <p>- Showcased the app to friends and family recieving 10 downloads and 2 five star reviews to date currently.</p>
  //                           </div>
  //                               <br>
  //                           <div>
  //                               <h1 style="font-size: 24px; ">TECH USED</h1>
  //                           <div class="tech-used-container">
  //                               <div class="tech-used-icon">REACT-NATIVE</div>
  //                               <div class="tech-used-icon">EXPO</div>
  //                               <div class="tech-used-icon">FIGMA</div>
  //                               <div class="tech-used-icon">PHOTOSHOP</div>
  //                           </div>
  //                       </div>
  //                       </div> 
  //                   </div>
  //               </div>
  //           </div>
  //           <div class="project-container">
  //               <div class="project-container-header">
  //                   <div>
  //                   <h1 class="text-3xl">FIFTH ST HAIR</h1>
  //                   </div>
  //                   <div>
  //                       <a href="https://5thstreethair.com" target="_blank" class="view-site-btn">Visit Site</a>
  //                   </div>
  //               </div>
  //               <div class="project-container-inner">
  //                   <div   class="project-image">
  //                       <img class="website-image" src="{% static 'images/FifthStreetHair.png' %}"/>
  //                   </div>
  //                   <div class="project-info-container">
  //                       <div class="project-info-container-wrapper">
  //                           <div>
  //                           <h1 style="font-size: 24px; ">OVERVIEW</h1>
  //                           <p>A custom website for a new hair saloon incorperating booking. The site was launched during Covid and helped make the business 
  //                               successful due to the booking feature allowing the hair saloon to still take customers.
  //                           </p>
  //                           </div>
  //                               <br>
  //                           <div>
  //                           <h1 style="font-size: 24px; ">ACCOMPLISHMENTS</h1>
  //                           <p>
  //                            <span class="bullet-point">-</span>Website was launched with business genereating booking starting on first week.</p>
  //                           <p>- Hundreds of haircuts have been booked through the site resulting in thousands of dollars of revenue and 
  //                               improving efficency and customer satisfaction.
  //                           </p>
  //                           </div>
  //                               <br>
  //                           <div>
  //                               <h1 style="font-size: 24px; ">TECH USED</h1>
  //                           <div class="tech-used-container">
  //                               <div class="tech-used-icon">WORDPRESS</div>
  //                               <div class="tech-used-icon">CSS</div>
  //                               <div class="tech-used-icon">ELEMENTOR</div>
  //                           </div>
  //                       </div>
  //                       </div> 
  //                   </div>
  //               </div>
  //           </div>
  //           <div onclick="toggleModel()" class="project-container">
  //               <div class="project-container-header">
  //                   <div>
  //                   <h1 class="text-3xl">VisionHow App & Web Development</h1>
  //                   </div>
  //                   <div>
  //                       <a href="https://www.visionhow.com" target="_blank" class="view-site-btn">Visit Site</a>
  //                   </div>
  //               </div>
  //               <div class="project-container-inner">
  //                   <div   class="project-image">
  //                       <img class="website-image" src="{% static 'images/Visionhow.png' %}"/>
  //                   </div>
  //                   <div class="project-info-container">
  //                       <div class="project-info-container-wrapper">
  //                           <div>
  //                           <h1 style="font-size: 24px; ">OVERVIEW</h1>
  //                           <p>A small web design firm I manage and run. Visionhow has created 
  //                               production project for several businesses. For my UI Design work look up Visionhow on Instagram.
  //                           </p>
  //                           </div>
  //                               <br>
  //                           <div>
  //                           <h1 style="font-size: 24px; ">ACCOMPLISHMENTS</h1>
  //                           <p>
  //                            <span class="bullet-point">-</span> 
  //                            Created a handfull of production websites for businesses with all positive customer reviews.</p>
  //                           <p>- Helped businesses generate hundred of leads and thousands of dollars in conversions.</p>
  //                           </div>
  //                               <br>
  //                           <div>
  //                               <h1 style="font-size: 24px; ">TECH USED</h1>
  //                           <div class="tech-used-container">
  //                               <div class="tech-used-icon">NEXTJS</div>
  //                               <div class="tech-used-icon">SCSS</div>
  //                               <div class="tech-used-icon">DJANGO-RESTFRAMEWORK</div>
  //                               <div class="tech-used-icon">FIGMA</div>
  //                               <div class="tech-used-icon">ILLUSTRATOR</div>
  //                           </div>
  //                       </div>
  //                       </div> 
  //                   </div>
  //               </div>
  //           </div>
            
  //           <div onclick="toggleModel" class="project-container">
  //               <div class="project-container-header">
  //                   <div>
  //                   <h1 class="text-3xl">UI DESIGN</h1>
  //                   </div>
  //                   <div>
  //                       <a href="https://www.instagram.com/visionhow/" target="_blank" class="view-site-btn">See Designs</a>
  //                   </div>
  //               </div>
  //               <div class="project-container-inner">
  //                   <div   class="project-image">
  //                       <img class="website-image" src="{% static 'images/visionhowUI.png' %}"/>
  //                   </div>
  //                   <div class="project-info-container">
  //                       <div class="project-info-container-wrapper">
  //                           <div>
  //                           <h1 style="font-size: 24px; ">OVERVIEW</h1>
  //                           <p>Visit Visionhow on Instagram to see UI Desgins.</p>
  //                           </div>
  //                               <br>
  //                           <div>
  //                           <h1 style="font-size: 24px; ">ACCOMPLISHMENTS</h1>
  //                           <p>
  //                            <span class="bullet-point">-</span>Have created several UI Designs and have started to gain a following.</p>
  //                           <p>- My rolex UI Design was reposted by a more popular UI/UX Instagram page.</p>
  //                           </div>
  //                               <br>
  //                           <div>
  //                               <h1 style="font-size: 24px; ">TECH USED</h1>
  //                           <div class="tech-used-container">
  //                               <div class="tech-used-icon">FIGMA</div>
  //                               <div class="tech-used-icon">PHOTOSHOP</div>
  //                               <div class="tech-used-icon">ILLUSTRATOR</div>
  //                           </div>
  //                       </div>
  //                       </div> 
  //                   </div>
  //               </div>
  //           </div>