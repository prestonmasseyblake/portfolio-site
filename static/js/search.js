
DJANGO_STATIC_URL = "/static";
const projects = [
  {
    id: "1",
    title: "M-B HOMES REALTY",
    link: "https://www.m-bhomes.com",
    image: "MBHOMESLAYOUT.png",
    overview:
      "Real Estate website for an agent that is currently in use. Consists of multiple pages and live mls feed on homes currently for sale.",
    accomplishments:
      "Leads have come through the site in combination with social media advertising that have resulting in tens of thousands of dollars in commision. Client stated statisfaction in the site and improved brand equity.",
    tags: ["REACT", "NEXTJS", "SELENIUM", "DJANGO-RESTFRAMEWORK", "SCSS"],
    summary:
      "Full Stack Real Estate Application. Django Rest backend with Postgres and Nextjs frontend with SSR. Scrapes real time real estate data (BS4 & Selenium). Generated 68% more leads and several conversions. Visit m-bhomes.com.",
  },
  {
    id: "2",
    title: "ShoePal",
    link: "http://shoepal.herokuapp.com",
    image: "Shoepal.png",
    overview:
      "Real Estate website for an agent that is currently in use. Consists of multiple pages and live mls feed on homes currently for sale.",
    accomplishments:
      "Leads have come through the site in combination with social media advertising that have resulting in tens of thousands of dollars in commision. Client stated statisfaction in the site and improved brand equity.",
    tags: ["REACT", "TAILWIND CSS", "SCSS"],
    summary:
      "React e-commerce application has dynamic inventory of Nike shoes. Single Page application using React and Tailwind CSS.",
  },
  {
    id: "3",
    title: "Chain Marriage",
    link: "https://www.chainmarriage.com",
    image: "chainMarriageHome.png",
    overview:
      "The future of marriage is here. Platform that allows you to solidity your love for someone on the blockchain. Marriage in the future will be conducted on the blockchain due to the transparency and ability to create an easily accessible public leger. ",
    accomplishments:
      "I was the first person to use the platform becoming either the youngest or first person to get married on the polygon blockchain.",
    tags: ["REACT", "SOLIDITY", "POLYGON", "DJANGO-RESTFRAMEWORK"],
    summary:
      "Full stack blockchain web application. Proof of concept that marriage documents can be published to the blockchain and would be a more effective and efficient process than traditional marriage documents. Implements Solidity contracts that are interfacing with the Polygon blockchain. The contract are imbedded into the React frontend and on addition save data to the Django Rest Backend.",
  },
  {
    id: "4",
    title: "Krypt | Exchange",
    link: "https://crpytoexchange.herokuapp.com",
    image: "KryptHome.png",
    overview:
      "Krypto a crypto currency exchange platform build for use with the ethereum network.",
    accomplishments:
      "Has been successfuly tested using chai and is hosted on the ropsten test blockchain.",
    tags: ["REACT", "Ethereum", "METAMASK", "Tailwind CSS", "WEB3"],
    summary:
      "React front-end application allows user to connect their Metamask wallets directly to the application. They then can then test toggling between currencies such as Etherium, Polygon, and USD coin. ",
  },
  {
    id: "5",
    title: "What The Doge NFT",
    link: "https://opensea.io/assets/matic/0x2953399124f0cbb46d2cbacd8a89cf0599974963/115280045661947983841653635798987528830528599257518677970676727668494697496577",
    image: "NFTGif.gif",
    overview:
      "One of One NFT project to develop an NFT for the polygon blockchain. It was listed for sale on Opensea for .1 Eth.",
    accomplishments:
      "Sucessfuly posted an NFT that was made from scratch in a marketplace. It has not sold yet.",
    tags: ["Adobe After Effects", "Blender", "OpenSea", "Polygon"],
    summary: "",
  },
  {
    id: "6",
    title: "UI DESIGN",
    link: "https://www.instagram.com/visionhow/",
    image: "visionhowUI.png",
    overview: "Visit Visionhow on Instagram to see UI Desgins.",
    accomplishments:
      "Have created several UI Designs and have started to gain a following. My rolex UI Design was reposted by a more popular UI/UX Instagram page.",
    tags: ["FIGMA", "Photoshop", "IlluSTRATOR"],
    summary:
      "An assortment of my UI design work can be found @visionhow on instagram. Most of the UI’s were built using Figma, Photoshop and Illustrator.",
  },
  {
    id: "7",
    title: "Taskier App",
    link: "https://apps.apple.com/us/app/taskier/id1592401860",
    image: "TaskierApp.png",
    overview:
      "Simple ToDo Application that is currently on the app store. It was completed to showcase that I can create apps and push them into production as well as maintain them completing the full app development lifecycle.",
    accomplishments:
      "Have a published app on the Apple App Store. Showcased the app to friends and family recieving 10 downloads and 2 five star reviews to date currently.",
    tags: ["REACT-NATIVE", "EXPO", "FIGMA", "PHOTOSHOP"],
    summary:
      "Basic React Native Application using a built in SQLLite Database. Uses Material UI and custom components. Hosted for download on the Apple App Store.",
  },
  {
    id: "8",
    title: "FIFTH ST HAIR",
    link: "https://5thstreethair.com",
    image: "FifthStreetHair.png",
    overview:
      "A custom website for a new hair saloon incorperating booking. The site was launched during Covid and helped make the business successful due to the booking feature allowing the hair saloon to still take customers.",
    accomplishments:
      "Website was launched with business genereating booking starting on first week. Hundreds of haircuts have been booked through the site resulting in thousands of dollars of revenue and improving efficency and customer satisfaction.",
    tags: ["WORDPRESS", "CSS", "ELEMENTOR", "PHOTOSHOP"],
    summary:
      "A wordpress site built using custom css and UI Design. Uses Woocommerce booking with custom scripts. Has been used by over 500+ customers to book hair appointments.",
  },
  {
    id: "9",
    title: "VisionHow App & Web Development",
    link: "https://www.visionhow.com",
    image: "Visionhow.png",
    overview:
      "A small web design firm I manage and run. Visionhow has created production project for several businesses. For my UI Design work look up Visionhow on Instagram.",
    accomplishments:
      "Created a handfull of production websites for businesses with all positive customer reviews. Helped businesses generate hundred of leads and thousands of dollars in conversions.",
    tags: ["NEXTJS", "SCSS", "DJANGO-RESTFRAMEWORK", "FIGMA"],
    summary:
      "Full stack web application. Is using Next.js for server side rendering and improved SEO capabilities. Is using STMP server for automating emails and responses to potential clients.",
  },
];
function initializeProjects(projs) {
  let projectsContainer = document.getElementById("projects-container");
  while (projectsContainer.firstChild) {
    projectsContainer.removeChild(projectsContainer.firstChild);
  }
  console.log("gregeg", projectsContainer);
    projs.forEach((project) => {
      console.log(project)
        let projectCard = document.createElement("div");
        // projectCard.setAttribute("onclick", `toggleModelOpen(${project.id})`);
      // projectCard.setAttribute("onclick", `toggleModel()`);
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
      projectHeaderButton.setAttribute("href", project.link);
      projectHeaderButton.setAttribute("target", "_blank");
      
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
      projectCardTechTitle.classList = "px-4"
      projectCardTechTitle.innerHTML = "Tech Used";
      projectCardTechTitle.style.color = "#000";
      projectCard.appendChild(projectCardTechTitle);
      // create the tags for the card 
      let projectCardTechUsedContainer = document.createElement("div");
      projectCardTechUsedContainer.className = "tech-used-container px-4";
      for (let i = 0; i < project.tags.length; i++) {
        let projectCardTechUsedIcon = document.createElement("div");
        projectCardTechUsedIcon.className = "tech-used-icon";
        projectCardTechUsedIcon.innerHTML = project.tags[i];
        projectCardTechUsedContainer.appendChild(projectCardTechUsedIcon);
      }
         projectCard.appendChild(projectCardTechUsedContainer);
      let projectCardTechAbout = document.createElement("h1");
      projectCardTechAbout.classList = "px-4";
      projectCardTechAbout.innerHTML = "Summary";
      projectCardTechAbout.style.color = "#000";
      let projectCardTechSummary = document.createElement("p");
      projectCardTechSummary.innerHTML = project.summary;
      projectCardTechSummary.style.color = "#000";
      projectCardTechSummary.classList = "px-4 mb-4"
      projectCard.appendChild(projectCardTechAbout);
      projectCard.appendChild(projectCardTechSummary);


   
      
      // create the drop down card part
      projectsContainer.append(projectCard);
  });
}
//initalize projects
initializeProjects(projects);

// search function for projects 
function search(projs, value) {
  let return_arr = [];
  for (let i = 0; i < projs.length; i++) {
    console.log(projs[i].title, ":", value)
    if (projs[i].title.toLowerCase().includes(value.toLowerCase())) {
      return_arr.push(projs[i])
    }
  }
  console.log(return_arr.length)
  initializeProjects(return_arr);
}

let searchInput = document.getElementById("search-input");
searchInput.addEventListener("keyup", (e) => {
  console.log(e.target.value);
  search(projects, e.target.value);
});


function toggleModelOpen(id) {
  console.log(projects[id -1].title)
  let toggleModel = document.getElementById("model-popup-container");
  console.log(toggleModel.style.display);
  let model = document.getElementById("model-popup");
  if (toggleModel.style.display == "none") {
    toggleModel.style.display = "flex";
  }
  else {
    toggleModel.style.display = "none";
  }

}

function toggleModelClose() {
  let toggleModel = document.getElementById("model-popup-container");
  console.log(toggleModel.style.display);
  let model = document.getElementById("model-popup");
  if (toggleModel.style.display == "none") {
    toggleModel.style.display = "flex";
  } else {
    toggleModel.style.display = "none";
  }
}
 
    