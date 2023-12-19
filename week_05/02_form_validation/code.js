// add eventListener to the submit button
document.querySelector("#submit").addEventListener("click", validateForm);

// declare the validateForm function
function validateForm(event) {
  // the preventDefauilt() disables the default behavior
  // of a usbmit button, which reloads the entire page
  // this way we can keep the value inside of the inputs
  event.preventDefault();

  /* Here comes the deletion of error messages */
  // here you need to check if there are any error messages in the form
  // if there are, delete them so we can fill it in again
  document.querySelectorAll(".error").forEach((element) => element.remove());

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
    // test if email is a valid email address with the help of the RegExp
    if (!emailRegExp.test(data.email)) {
      // if it's not a valid email address, store the error message
      validationErrors.email = "Please enter a valid email address";
    } else {
      // if it's a valid email address, log it to the console
      console.info("Email: ", data.email);
    }
  }

  // Form validation for message, check if it's empty
  if (!data.message) {
    validationErrors.message = "Please enter your message";
  } else {
    // check if the message is longer than 30 characters (min. length 30)
    if (data.message.length < 31) {
      validationErrors.message =
        "Your message is too short (min.30 characters)";
    } else {
      console.info("Message: ", data.message);
    }
  }

  // function to display the error in the validationErrors object
  function displayError(validationErrors) {
    if (validationErrors.firstName) {
      // here we create a span element
      const errorContainer = document.createElement("span");
      errorContainer.classList.add("error");
      // we add the error to the span element
      errorContainer.innerHTML = validationErrors.firstName;
      // here we select the div element with the id "first-name"
      // and add the error message after it
      document.querySelector("#first-name").after(errorContainer);
    }

    // Here add all the other validationErrors for the other stuff
    if (validationErrors.lastName) {
      // here we create a span element
      const errorContainer = document.createElement("span");
      errorContainer.classList.add("error");
      // we add the error to the span element
      errorContainer.innerHTML = validationErrors.lastName;
      // here we select the div element with the id "first-name"
      // and add the error message after it
      document.querySelector("#last-name").after(errorContainer);
    }

    if (validationErrors.email) {
      // we add the error to the span element
      errorContainer.innerHTML = validationErrors.email;
      // here we select the div element with the id "first-name"
      // and add the error message after it
      document.querySelector("#email").after(errorContainer);
    }

    if (validationErrors.message) {
      // here we create a span element
      const errorContainer = document.createElement("span");
      errorContainer.classList.add("error");
      // we add the error to the span element
      errorContainer.innerHTML = validationErrors.message;
      // here we select the div element with the id "first-name"
      // and add the error message after it
      document.querySelector("#message").after(errorContainer);
    }
  }

  // If there are no errors, dent the data to the backend
  if (Object.keys(validationErrors).length > 0) {
    // display the error message
    displayError(validationErrors);
  } else {
    // send the data to the backend
    console.log("Data sent to the backend");
  }
}
