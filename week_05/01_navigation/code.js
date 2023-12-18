// select the burger button
const burgerButton = document.querySelector(".burger");

// Select the hiddne mobile navigation content
const mobileNav = document.querySelector(".mobile-navigation-content-hidden");

// function to toggle nav content
function showMobileNav() {
  // logic to check if the mobile nav content is hidden
  //   if (mobileNav.classList.contains("mobile-navigation-content-hidden")) {
  //     mobileNav.classList.remove("mobile-navigation-content-hidden");
  //   } else {
  //     mobileNav.classList.add("mobile-navigation-content-hidden");
  //   }
  mobileNav.classList.toggle("mobile-navigation-content-visible");
}

// add event listener to burger button
burgerButton.addEventListener("click", showMobileNav);

// Do the same thing for the About / Project content in the mobile navigation
// So that the sub-navigation are visible, once you clicked on their
// respective parent navigation item

// select the about & project buttons
const aboutButton = document.querySelector(".about-button");
const projectButton = document.querySelector(".project-button");

// select the about & project hidden content
const aboutContent = document.querySelector(".about-sub-content-hidden");
const projectContent = document.querySelector(".project-sub-content-hidden");

// define functions to show about & project content
function showAboutContent() {
  aboutContent.classList.toggle("about-sub-content-visible");
}

function showProjectContent() {
  projectContent.classList.toggle("project-sub-content-visible");
}

// add event listeners to about & project buttons
aboutButton.addEventListener("click", showAboutContent);
projectButton.addEventListener("click", showProjectContent);
