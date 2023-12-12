//** FUNCTION THEORY  **//
// a named function is a function that has a name
// function functionName() {}
function functionName() {}

// a function expression is a function that is assigned to a variable
// const variableName = function() {}
const variableName = function () {};

// arrow functions are a shorthand way of writing a function expression
// const variableName2 = () => {}
const variableName2 = () => {};

// callback functions are functions that are passed to another function
// function callbackFunction() {}
// This is the first function we define
function calculateArea(a, b) {
  return a * b;
}
// function anotherFunction(callbackFunction) {}
// This is the second function we define, which expects an argument (here a function)
function calculateVolume(callbackFunction, a, b, c) {
  const area = callbackFunction(a, b); // this calls the calculateArea function
  return area * c;
  // this returns 1000
}
// anotherFunction(callbackFunction)
// Here we call the second function and pass the first function as an argument
// Here we combine the two functions to calculate the volume
// 1. We call the calculateVolume function
// 2. We pass the calculateArea function as an argument
// 3. The calculateVolume function calls the calculateArea function
const a = 5;
const b = 15;
const c = 10;
// The order is VERY VERY IMPORTANT
calculateVolume(calculateArea, a, b, c);

// callback functions in an event listener
// There are four ways to define a callback function in an event listener
// 1. anomymous function
// this is an anonymous callback function, because it doesn't have a name
styleMe.addEventListener("click", function () {});

// 2. named function, with a reference
// this is a named callback function, because the function has a name
styleMe.addEventListener("click", callbackFunction);
// this is the named callback function reference
const callbackFunction = () => {};

// 3. name function, without a reference
// I personally don't like this way of writing a callback function
// this is a named callback function, because the function has a name
styleMe.addEventListener("click", function helloWord() {});

// 4. anonymous callback arrow function
// this is an arrow callback function, because it uses the arrow syntax
styleMe.addEventListener("click", () => {});
