// Es gibt viele Operatoren in JavaScript, welche uns helfen, Werte zu verändern oder zu vergleichen.

//---- Assignment Operator ( = ) ----//
// Der Assignment Operator wird verwendet, um einen Wert einer Variable zuzuweisen.
let myNum = 24; // myNum ist jetzt 24
let myString = "Hello World"; // myString ist jetzt "Hello World"
let myBool = true; // myBool ist jetzt true

//---- Addition Operator ( + ) ----//
// Der Addition Operator wird verwendet, um zwei Werte zu addieren.
let sum = 2 + 2; // sum ist jetzt 4
let sum2 = sum + 4; // sum2 ist jetzt 8

// Der Addition Operator kann auch verwendet werden, um Strings zu verbinden (concatination).
let firstName = "John";
let lastName = "Doe";
let seperator = " ";

let concatination = firstName + seperator + lastName; // concatination ist jetzt "John Doe"
// console.log(concatination);

//---- Subtraction Operator ( - ) ----//
// Der Subtraction Operator wird verwendet, um zwei Werte zu subtrahieren.
let difference = 4 - 2; // difference ist jetzt 2
let difference2 = difference - 1; // difference2 ist jetzt 1

//---- Greater than ( > ), less than ( < ), equal to ( == ), equal to type ( === ), not equals to type ( !== ) ----//
// Der Greater than Operator wird verwendet, um zu prüfen, ob ein Wert größer ist als ein anderer Wert.
// Alle drei Operatoren geben immer Boolean zurück (true oder false).
let isGreater = 4 > 2; // isGreater ist jetzt true
// console.log(isGreater);
let isGreater2 = 2 > 4; // isGreater2 ist jetzt false
// console.log(isGreater2);

// Der Equal to Operator ( == ) wird verwendet, um zu prüfen, ob zwei Werte gleich sind.
// Überprüft aber nur den Wert, nicht den Typ.
const num1 = 24;
const num2 = "24";
let isEqual = num1 == num2; // isEqual ist jetzt true
// console.log(isEqual);

// Der Equal to type Operator ( === ) wird verwendet, um zu prüfen, ob zwei Werte gleich sind.
// Überprüft den Wert und den Typ.
let isEqual2 = num1 === num2; // isEqual2 ist jetzt false
// console.log(isEqual2);

// Der Not equals to type Operator ( !== ) wird verwendet, um zu prüfen, ob zwei Werte nicht gleich sind.
// Überprüft den Wert und den Typ.
let isNotEqual = num1 !== num2; // isNotEqual ist jetzt true
// console.log(isNotEqual);

//---- Modulo Operator ( % ) ----//
// Der Modulo Operator wird verwendet, um den Rest einer Division zu erhalten.
// Der Modulo Operator schaut immer zuerst den gröstmöglichen dividierbaren Wert an.
// Und das Ergebnis ist der Rest der Division, welches nicht dividierbar ist.

console.log(13 % 5); // output: 3
console.log(-13 % 5); // output: -3
console.log(4 % 2); // output: 0
console.log(15 % 4); // output: 3
