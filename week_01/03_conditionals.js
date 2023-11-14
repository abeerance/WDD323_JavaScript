// Definieren 3 Variablen
let a = 10;
let b = 20;
let c = 30;

//---- Syntax of conditionals ----//
/*
    if (condition) {
        code to run if condition is true
    } else {
        code to run if condition is false
    }

    Die ELSE Condition ist optional, ist aber in den meisten Fällen notwendig.
*/

//---- IF Statement ----//
// Man kann das if statement mit verschiedenen Operatoren verwenden
// ==, ===, !=, !==, >, <, >=, <=
if (a < b) {
  console.log("a is smaller than b");
}

//---- IF ELSE Statement ----//
if (a > b) {
  console.log("a is bigger than b");
} else {
  console.log("a is smaller than b");
}
/*
    Der IF code-block wird ausgeführt wenn die condition true ist.
    Der ELSE code-block wird ausgeführt wenn die condition false ist.
*/

// Wir können auch den AND und den OR operator in einem IF Statement verwenden
if (a < b && a < c) {
  console.log("a is the smallest number");
}

console.clear();

if (a > b || a > c || b < c) {
  console.log("a is the smallest number, but b is smaller than c");
}

console.clear();

//---- IF, ELSE IF, ELSE, Statement ----//
// Wir können auch mehrere IF Statements hintereinander verwenden
// Sobald eine Condition TRUE ist, dann führt es den Code-Block aus und bricht ab
// Falls keine Condition TRUE ist, dann wird der ELSE code-block ausgeführt

if (b < a) {
  // ist 20 kleiner als 10?
  console.log("b is smaller than a"); // code block wird nicht ausgeführt
} else if (c < b) {
  // is 30 kleiner als 20?
  console.log("c is smaller than b"); // code block wird nicht ausgeführt
} else if (b < c) {
  // is 20 kleiner als 30?
  console.log("b is smaller than c"); // code block wird ausgeführt
} else {
  console.log("every conition return FALSE");
}

//---- IF inside IF ----//
// Wir können auch ein IF Statement in einem IF Statement verschachteln
// Sobald ihr eine Komplexe Logik habt, dann benützt das SWITCH statement
// Versucht nicht mehr als max. 2/3 IF Statements zu verschachteln

if (b > c) {
  if (a !== 10) {
    console.log("a is not 10");
  } else {
    console.log("a is 10");
  }
} else if (c > a) {
  if (a === b) {
    console.log("a is 10 1232131");
  } else {
    console.log("a is not 10 123123");
  }
} else {
  console.log("nothing is true");
}

console.clear();

//---- Booleans in IF Statements ----//
let hamburger = true;
let popcorn = false;

// popcorn ist false,
// !popcorn ist true

if (!popcorn) {
  // wir überprüfen hier, ob popcorn false ist
  // weil popcorn false ist, ist die condition TRUE
  // und darum wird die console.log() ausgeführt
  console.log("I want popcorn");
}

//---- Order of the code matters ----//
// console.log(counter); // Error: Weil counter noch nicht definiert ist
let counter = 0;

counter = 10;

if (counter < 11) {
  counter--;
}

console.log(counter); // 9

console.clear();

//---- Switch Statement ----//
// Das Switch Statement ist eine alternative zum IF Statement
// Es ist übersichtlicher und einfacher zu lesen
// Es ist auch einfacher zu erweitern
// Man sollte ein SWITCH statement benützen, sobald eine komplexe Logik vorhanden ist
// Ansonsten reicht ein IF Statement, weil diese super flexibel sind

// Syntax

// Statisches Beispiel
const expressionArray = ["Papayas", "Mangos", "Bananas", "Apples", "Oranges"];
let expression = expressionArray[4];
// Das Switch Statement überprüft den Wert und den Typ einer Expression
switch (
  expression // expression ist der Wert, den wir überprüfen wollen
) {
  case "Papayas":
    console.log("Papayas are $2.79 a pound."); // statements
    break;
  case "Mangos":
    console.log("Mangos are $2.79 a pound."); // statements
    break;
  case "Bananas":
    console.log("Bananas are $2.79 a pound."); // statements
    break;
  case "Apples":
    console.log("Apples are $2.79 a pound."); // statements
    break;
  default:
    console.log("Sorry, we are out of " + expression + ".");
}
