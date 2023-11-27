// Create a calculator using confirm, prompt and / or alert.
/**
 * This calculator should be able to do the following operations with 2 numbers
 * ADD
 * SUBSTRACT
 * MULTIPLY
 * DIVIDE
 * --------
 * Here are some TIPS
 * - You can do this in MANY WAYS, but here is how I would do it first
 * 1. Use 3 prompts the first one asks for the first number, the second one
 *    asks for the operator and the third one for the second number.
 * 2. Save the user inputs into variables so that they can be reused.
 * 3. First you want to transform the input which is a string by default into a number
 *    we use parseInt() for this
 * 4. You need to ask what operator was inputed, if it was '+' for example then you
 *    need to do the addition operation with number 1 + number 2
 * 5. alert the result to the user
 * 6. You want to make sure that you have an else at the end of your four different
 *    if statements, here you can say something like 'neither +, -, / or * were chosen'
 * 7. You want to make sure that the numbers the users are inputing are actually numbers,
 *    for this you need isNaN() which will return true, if a value is NOT a number!
 */
while (true){
const zahl1 = parseInt(prompt("Enter first number")); // 2
const operator = prompt("Enter operator (+,-,/,*)"); // +
const zahl2 = parseInt(prompt("Enter second number")); // 2

function calculate(operator, zahl1, zahl2) {
  if (isNaN(zahl1) || isNaN(zahl2)) {
    return "Make sure your use numbers";
  } else if (operator === "+") {
    // Add
    return add(zahl1, zahl2);
  } else if (operator === "-") {
    // Substract
    return sub(zahl1, zahl2);
  } else if (operator === "/") {
    // Divide
    return div(zahl1, zahl2);
  } else if (operator === "*") {
    // Multiply
    return mul(zahl1, zahl2);
  } else {
    // User wrote the wrong operator
    return "Incorrect Operator, refresh and try again";
  }
}

function add(zahl1, zahl2) {
  return zahl1 + zahl2;
}
function sub(zahl1, zahl2) {
  return zahl1 - zahl2;
}
function div(zahl1, zahl2) {
  if (zahl1 === 0 || zahl2 === 0) {
    return "you can't divide by zero"
  }
  return zahl1 / zahl2;
}
function mul(zahl1, zahl2) {
  return zahl1 * zahl2;
}


alert(calculate(operator, zahl1, zahl2));

}