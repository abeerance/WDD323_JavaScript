//** Very simple static thumbnail image gallery with vanilla JS **/

/* 1. Declare all the variables we want to interact with */
// currentImage => big image
const currentImage = document.querySelector("#active");
// all other images => thumbnails
const thumbnails = document.querySelectorAll(".images img");
// magic number opacity, which our selected image will have
const opacity = 0.6;
// we set the opacity of the first image in the thumbnail array
thumbnails[0].style.opacity = opacity;

/* 2. eventListener of thumbnails */
// Since we get an array of querySelectorAll, we can iterate through it
// and add an eventListener to every single image
// We can use the higher order function forEach to iterate through the array (thumbnails)
// this is also an anonymous callback function
thumbnails.forEach((thumbnail) => {
  // now that we have all the thumbnails individually, we can add individual eventListeners
  // and we pass a callback function to the eventListener
  thumbnail.addEventListener("click", imageClick);
});

/* 3. Create tge imageClick callback function */
function imageClick(e) {
  // 3.0 check if the source is the same as the current image
  if (currentImage.src === e.target.src) {
    // an early return will stop the function from running (aborts the function)
    return;
  }
  // 3.1 Reset the opacity of all the images (opacity reset)
  thumbnails.forEach((thumbnail) => (thumbnail.style.opacity = 1));
  // 3.2 Change the current image to the source of the clicked image
  currentImage.src = e.target.src;
  // 3.3 Add fade in class to make it fancy
  currentImage.classList.add("fade-in");
  // 3.4 Remove fade in class after 0.5 seconds, so it can be used again
  setTimeout(() => currentImage.classList.remove("fade-in"), 500);
  // 3.5 Change the opacity of the selected thumbnail to opacity variable
  e.target.style.opacity = opacity;
}
