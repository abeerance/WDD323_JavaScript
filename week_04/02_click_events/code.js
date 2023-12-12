// 1. First we select the button as a reference
const button = document.querySelector("#submit");
// We can now use this selection and add an EventListener to it
// Syntax:
// element.addEventListener(event, function(e)){do something}
button.addEventListener("click", function (e) {
  // We can also add a paremeter to the function that is called (callback function)
  // Doing this will give us access to different properties of the event (e)
  // e.g. where the button was clicked (position in the window, etc.)
  // Since the default behaviour of a submit button is to reload the page
  // we need to prevent this default behaviour
  // Syntax: e.preventDefault();
  e.preventDefault();

  // When the user has clicked the button, we can get the values of the input
  // We can save the selections in variables
  const firstName = document.querySelector("#firstName");
  const lastName = document.querySelector("#lastName");

  // To get the values we need to use the .value property
  console.log("First name: ", firstName.value);
  console.log("Last name: ", lastName.value);
});

// A different type of event is the input event
// This event is triggered when the user types something in an input field
// This could be very useful for autocomplete or searchQueries

// select the email input field
const email = document.querySelector("#email");

email.addEventListener("input", function (e) {
  console.log("Email: ", e.target.value);
});
