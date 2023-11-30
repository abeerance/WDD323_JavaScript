function calculate(zahl1, operator, zahl2) {
  if (operator === "+") {
    return add(zahl1, zahl2);
  } else if (operator === "-") {
    return sub(zahl1, zahl2);
  } else if (operator === "*") {
    return mul(zahl1, zahl2);
  } else if (operator === "/") {
    return div(zahl1, zahl2);
  } else {
    return "Operator not supported";
  }
}

function add(zahl1, zahl2) {
  return zahl1 + zahl2;
}

function sub(zahl1, zahl2) {
  return zahl1 - zahl2;
}

function mul(zahl1, zahl2) {
  return zahl1 * zahl2;
}

function div(zahl1, zahl2) {
  if (zahl2 === 0) {
    return "You can't divide by Zero"
  }
  return zahl1 / zahl2;
}


const zahl1 = parseFloat(prompt('Enter first number'))
const operator = prompt('Enter your operator (+, -, *, /)')
const zahl2 = parseFloat(prompt('Enter second number'))

alert(calculate(zahl1, operator, zahl2))



