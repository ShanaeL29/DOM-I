const siteContent = {
  nav: {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png",
  },
  cta: {
    h1: "DOM Is Awesome",
    button: "Get Started",
    "img-src": "img/header-img.png",
  },
  "main-content": {
    "features-h4": "Features",
    "features-content":
      "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content":
      "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content":
      "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content":
      "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content":
      "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  contact: {
    "contact-h4": "Contact",
    address: "123 Way 456 Street Somewhere, USA",
    phone: "1 (888) 888-8888",
    email: "sales@greatidea.io",
  },
  footer: {
    copyright: "Copyright Great Idea! 2018",
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute("src", siteContent["nav"]["img-src"]);

const navLinks = document.querySelectorAll("nav a"); //selected all nodes which are a tags inside the nav and stored them inside navLinks (node list not true array)
navLinks.forEach(
  (link, index) =>
    (link.textContent = siteContent["nav"][`nav-item-${index + 1}`])
); //reassign the value of textcontent prop

//Append nav link
const addNav = document.createElement("a");
addNav.textContent = "Donate";
document.querySelector("nav").appendChild(addNav);

//Prepend nav link
const newNav = document.createElement("a");
newNav.textContent = "Job";
document.querySelector("nav").prepend(newNav);

//Change font color to green
const navItems = document.querySelectorAll("nav a");
navItems.forEach((item) => (item.style.color = "green"));

document.querySelector("h1").innerHTML = "DOM <br> is <br> Awesome";
document.querySelector("button").textContent = siteContent["cta"]["button"];

//Header Image Source Added***********
// const headerImage = document.getElementById('cta-img');
const headerImage = document.querySelector("#cta-img");
headerImage.setAttribute("src", siteContent["cta"]["img-src"]);

//Middle Image Source Added********
// const middleImage = document.getElementById('middle-img');
const middleImage = document.querySelector("#middle-img");
middleImage.setAttribute("src", siteContent["main-content"]["middle-img-src"]);

const keys = Object.keys(siteContent["main-content"]);
console.log(keys);
const mainStrings = ["features", "about", "services", "product", "vision"];

let mainH4 = document.querySelectorAll(".top-content h4, .bottom-content h4");
let mainP = document.querySelectorAll(".top-content p, .bottom-content p");

mainH4.forEach(
  (h4, idx) =>
    (h4.textContent = siteContent["main-content"][`${mainStrings[idx]}-h4`])
);
mainP.forEach(
  (p, idx) =>
    (p.textContent = siteContent["main-content"][`${mainStrings[idx]}-content`])
);

//Contact Information************
document.querySelector(".contact h4").textContent =
  siteContent["contact"]["contact-h4"];
document.querySelector(".contact p").innerHTML =
  "123 Way 456 Street<br>Somewhere, USA";
document.querySelector(".contact p:nth-of-type(2)").textContent =
  siteContent["contact"]["phone"];
document.querySelector(".contact p:nth-of-type(3)").textContent =
  siteContent["contact"]["email"];

//Footer***************
document.querySelector("footer p").textContent =
  siteContent["footer"]["copyright"];
