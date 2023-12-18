// add eventListener to the submit button
document.querySelector("#submit").addEventListener("click", validateForm);

// declare the validateForm function
function validateForm(event) {
  // the preventDefauilt() disables the default behavior
  // of a usbmit button, which reloads the entire page
  // this way we can keep the value inside of the inputs
  event.preventDefault();

  /* Here comes the deletion of error messages */

  // define a data object in which we store the user input
  let data = {};
  // define validationErrors object in which we store errors
  let validationErrors = {};

  // create 4 properties on the data object
  // 1. firstName
  // 2. lastName
  // 3. email
  // 4. message
  // store the value of the input inside those properties
  // of the data object
  // try to console.log either the data object or the properties
  // inside the data object when pressing the submit button
  // to see if the values are stored correctly
  data.firstName = document.querySelector("#first-name").value;
  data.lastName = document.querySelector("#last-name").value;
  data.email = document.querySelector("#email").value;
  data.message = document.querySelector("#message").value;

  // Form validation for first name, check if it's empty
  // the ! checks if the value is empty
  if (!data.firstName) {
    validationErrors.firstName = "Please enter your first name";
  } else {
    console.info("First name: ", data.firstName);
  }

  // Form validation for last name, check if it's empty
  if (!data.lastName) {
    validationErrors.lastName = "Please enter your last name";
  } else {
    console.info("Last name: ", data.lastName);
  }

  // Form validation for email, check if it's empty
  if (!data.email) {
    validationErrors.email = "Please enter your email";
  } else {
    // define variable for email RegExp
    const emailRegExp =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  }
}
