// we have to select the element that we want to add an event listener
const clickMe = document.querySelector(".button-one");
const styleMe = document.querySelector(".style-button");

/*
    eventListeners usually take two arguments
    1.) the type of the event it should listen to
    2.) a callback function

    A callback function is just a regular function. It's a word we use to describe when
    we pass a function to a method that will then be called at a later point in time
    The callback function is our way of saying to the browser in this example:

    "Hey browser, when the clickMe button is clicked, can you please do me a favour
    and call this function (callback function)"

    Syntax example:
    clickMe.addEventListener('type of event', callBackFunction(){
        function body / statements
    })
*/

const htmlBody = document.querySelector("body");

// it is important to not write handleClick() when using a reference
// else it will fire the function even before the user clicks
// a named function must only be a reference in an event listener
clickMe.addEventListener("click", createElement);

function createElement() {
  // check if there is already a div inside the body
  const checkForDivs = document.querySelector("div");
  // if div is found, delete it
  if (checkForDivs !== null) {
    checkForDivs.remove();
  }

  // the variables we are saving from the user input from the prompts
  const name = prompt("What is your name?");
  const job = prompt("What was your dream job when you were a kid?");
  const superhero = prompt("Who is your favorite superhero?");

  if (name === "" || job === "" || superhero === "") {
    // alert if one of the variables is empty
    alert("You didn't answer all the prompts properly");
    return;
  } else {
    const message = `
    <h1>Hello my name is ${name}</h1>
    <h2>DREAM JOB:</h2>
    <p>My dream job as a kid was ${job} and my favorite superhero is ${superhero}</p>
    `;
    // create a div element
    const divElement = document.createElement("div");
    divElement.innerHTML = message;
    htmlBody.appendChild(divElement);
  }

  /* BONUS */
  styleMe.addEventListener("click", styleElement);
  function styleElement() {
    const div = document.querySelector("div");
    div.classList.add("background-style");
  }
}
