/* JavaSCript Introduction */

// Das ist ein single line comment, eine Zeile ist kommentiert

/*
    Das ist ein Block komment
    mehrere Zeilen sind kommentiert
    Das auch
*/

//---- Variablen ----//
// var content = "Hello this is a content"; -> alte Schreibweise
let mutableVariable = "Hello this is a content"; // Diese variable kann geändert werden
const immutableVariable = "Hello this is a content"; // Diese variable kann nicht geändert werden
// mutableVariable = "This is a new content"; // mutableVariable kann geändert werden
// console.log(mutableVariable); --> console.log() gibt den Wert der Variable in der Konsole aus
// immutableVariable = "This is a new content"; // immutableVariable kann nicht geändert werden
// console.log(immutableVariable);

//---- Variable Naming Convention ----//
// CamelCase
const iLovePizza = "I love pizza"; // wird am häufigsten verwendet
// Snake_case
const i_love_pizza = "I love pizza";
// UpperCamelCase
const ILovePizza = "I love pizza"; // wird für Klassen verwendet
// kebab-case
// const i-love-pizza = "I love pizza";

//---- Datentypen ----//
/*
    Number (Zahl)
*/
let number = 10; // Eine Nummer wird immer ohne Anführungszeichen geschrieben
// console.log(number);

/*
    String (Zeichenkette)
*/
let string = "Hello World"; // Ein String wird immer mit Anführungszeichen geschrieben
// console.log(string);
// console.log("Hello World"); // Ein String kann auch direkt in der console.log() Funktion geschrieben werden
let iAmAString = "300"; // Eine Zahl in Anführungszeichen ist ein String
// console.log(iAmAString);

/*
    Booleans (Wahrheitswerte) -> immer entweder TRUE oder FALSE
*/
let foo = false;
let bar = true;
// console.log(foo);
// console.log(bar);

/*
    undefined (nicht definiert)
*/

let undefinedVariable; // Eine Variable ohne Wert ist undefined / sollte wenn möglich vermieden werden
// ist gleich -> let undefinedVariable = undefined
// console.log(undefinedVariable);
// eine undefined Variable ist eine initialisierte Variable, welches keinen Wert hat

/*
    Null (nicht vorhanden)
*/
let nullVariable = null; // Eine Variable mit dem Wert null ist null
// console.log(nullVariable);
// eine null Variable ist eine initialisierte Variable, welches den Wert null hat, NULL === EMPTY

/*
    Object (Objekt) -> eine Sammlung von Eigenschaften (hier könenn alle Datentypen verwendet werden)
*/
let car = {
  door: "red",
  wheel: 4,
  speed: "240km/h",
  drivable: true,
  owner: {
    fistname: "Max",
    lastname: "Mustermann",
    age: 30,
  },
};

// console.log(car); // gibt das gesamte Objekt aus
// console.log(car.owner); // gibt das owner Objekt aus
// console.log(car.speed); // gibt die speed Eigenschaft aus

/*
    Array (Array) -> eine Liste von Werten (hier könenn alle Datentypen verwendet werden)
*/
let fruits = ["apple", "banana", "orange", "strawberry"];
/*
Jeder Wert in einem Array hat einen Index, der Index beginnt immer bei 0
0: apple
1: banana
2: orange
3: strawberry
*/
// console.log(fruits); // gibt das gesamte Array aus
// console.log(fruits[3]); // gibt den Wert mit dem Index 3 aus (strawberry)
// console.log(fruits.length); // gibt die Länge des Arrays aus (4)
let mixmatch = ["apple", 10, true, null, undefined, car, fruits];
// console.log(mixmatch); // gibt das gesamte Array aus

/*
    Date (Datum) -> ein Datum
*/
const date = new Date(); // gibt das aktuelle Datum aus
// console.log(date);
// console.log(date.getMonth()); // gibt den aktuellen Monat aus (0-11)

//---- Important Sidestuff ----//

// 1. JavaScript ist case sensitive
let caseSensitive = "Hello World";
// console.log(CaseSensitive); // Gibt eine Fehlermeldung aus, da CaseSensitive nicht definiert ist

// 2. JavaScript ist dynamisch typisiert, d.h. der Datentyp wird automatisch erkannt und kann sich ändern
let dynamic = "Hello World";
// console.log(dynamic); // gibt den Wert von dynamic aus (Hello World)
dynamic = 10;
// console.log(dynamic); // gibt den Wert von dynamic aus (10)

// 3. JavaScript ist nicht in der Lage zwei verschiedene Typen zu kombinieren
console.log(10 + "hello world"); // gibt "10hello world" als String aus.

/*
    4. JavaScript hat einige komische Eigenschaften, wie dass Strings zu Zahlen werden können
*/
console.log("5" - "2"); // gibt 3 als Number aus
