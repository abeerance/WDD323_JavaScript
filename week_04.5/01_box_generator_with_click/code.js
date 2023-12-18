// Create a script that will generate a div in the document when a button is clicked
// You can use CSS to style your boxes
// 1: If the button is clicked, you should
document.querySelector("button").addEventListener("click", (event) => {
  // a. create a div
  const box = document.createElement("div");

  // This is the version with HEX-Colors
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);

  box.style.backgroundColor = `#${randomColor}`;

  // This is the version with RBG
  //   // BONUS a.1: create 3 random values for the background color
  //   const randomRed = Math.floor(Math.random() * 256);
  //   const randomGreen = Math.floor(Math.random() * 256);
  //   const randomBlue = Math.floor(Math.random() * 256);

  //   // BONUS a.2: use the RGB-Numbers to add a background-color to the box
  //   box.style.backgroundColor = `rgb(${randomRed}, ${randomGreen}, ${randomBlue})`;

  // b. insert it in the .container element
  document.querySelector(".container").appendChild(box);

  // BONUS 2: Add an event listener to all the boxes
  // So that we can delete them
  // For that we need to iterate through all the boxes (divs)
  box.addEventListener("click", (event) => {
    console.log(event.target);
    // And remove the box that was clicked
    event.target.remove();
  });
});
