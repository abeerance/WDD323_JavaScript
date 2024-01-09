// select the elemnts we wish to manipulate in advance
const sliderContainer = document.querySelector(".slider");

// select the two buttons with the arrows and addd an eventListener
// event listener for the left button
document
  .querySelector(".controls-container .left")
  .addEventListener("click", moveLeft);
// event listener for the right button
document
  .querySelector(".controls-container .right")
  .addEventListener("click", moveRight);
// event listener for the autoplay button
document
  .querySelector(".autoplay-btn")
  .addEventListener("click", toggleAutoplay);

// we will implement the current slide counter
// this variable will be changed every time we move to the left or right
// it gets incremented or decremented
let currentSlide = 1;

// Now we will define the functions to move the pictures
// The first one will be the moveRight function
// since we are moving to the right, we need to get the first slide
// and out it at the end of the container
function moveRight() {
  // here we take the first element of our array (slide)
  // and append it (add it to the end of the array) in the slider container
  sliderContainer.append(document.querySelectorAll(".slide")[0]);
  updateCurrentSlide("right");
}

function moveLeft() {
  // here we calculate the length of the array
  // and store it in a variable
  const arrayLength = document.querySelectorAll(".slide").length;
  // and prepend it (add it to the beginning of the array) in the slider container
  // since the length is one more than the last index, we need to subtract 1
  sliderContainer.prepend(document.querySelectorAll(".slide")[arrayLength - 1]);
  updateCurrentSlide("left");
}

function updateCurrentSlide(direction) {
  if (direction === "right") {
    currentSlide =
      currentSlide === sliderContainer.children.length ? 1 : currentSlide + 1;
  } else {
    currentSlide =
      currentSlide === 1 ? sliderContainer.children.length : currentSlide - 1;
  }
  updateSlideDisplay();
  updateDescription();
}

// current slide display
function updateSlideDisplay() {
  document.querySelector(
    ".description h2"
  ).innerText = `Current Slide: ${currentSlide}`;
}

// description display
function updateDescription() {
  // get the alt attribute of the first image in the slide
  const description = sliderContainer.querySelector(
    ".slide:first-child img"
  ).alt;
  document.querySelector(".description p").innerText = description;
}

// variable for the autoplayInterval Id
let autoplayIntervalId;

// autoplay function
function toggleAutoplay() {
  // check if the autoplayIntervalId is undefined / null
  if (autoplayIntervalId) {
    // clear the interval
    clearInterval(autoplayIntervalId);
    autoplayIntervalId = null;
  } else {
    // set the interval for autoplay
    autoplayIntervalId = setInterval(moveRight, 1000); // 1 second interval
  }
}

// initial update on pageload
updateSlideDisplay();
updateDescription();

/*
Ziel: Ich möchte ein Autplay für meine Slideshow implementieren

Was benötige ich?
- Ein neuer Button im HTML
- Button stylen im CSS
- Funktionalität mit JS implementieren

Wie gehe ich vor?
1. Autoplay Button im HTML erstellen und eine Klasse hinzufügen
2. Autoplay Button im CSS mit der neuen Klasse stylen
3. Autoplay Button in JS anhand docuemnt.querySelector() auswählen
3.1 Button ist ausgewählt, wie kann ich den Button interaktiv gestalten?
4. Dem Button im JS einen EventListener hinzufügen und eine Callback Funktion definieren
4.1 Wie kann ich den Autoplay Button implementieren?
4.2 Keine Magic-Numbers verwenden
4.3 Dynamisch bleiben
5. autoplayIntervalId definieren, damit ich das Interval starten/clearen kann
6. toggleAutoplay Callback-Funktion definieren
6.1 Wie kann ich das Interval starten/clearen gleich einem Toggle?
7. Implementierung eines Intervals (Toggle-Funktionalität)
*/
