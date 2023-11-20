
// Name the data types of the following values:

// Numbers
let height = 5;
let width = 6.5;

// String
let color = "Yellow";
let weight = "60";
let firstName = "John"
let lastName = "Johnson";

// Boolean
let x = true;
let y = false;

// Object
const person = {firstName:"John", lastName:"Doe"};

// Array
const cars = ["Saab", "Volvo", "BMW"];

// Date
const deadline = new Date("2024-03-25");

// What value do I get if after the following operations

const _1 = height + width

const _2 = weight + height
console.log(_2)

const _3 = weight + weight

const _4 = firstName + " " + lastName
console.log(_4)

// true or false ? 

const trueOrFalse1 = 25 > 24

const trueOrFalse2 = 25 > "26"
console.log(trueOrFalse2)

const trueOrFalse3 = 25 == 25

const trueOrFalse4 = 25 === "25"

// Will it run ? 

// const cond1 = 25
// const cond2 = 0
// const cond3 = -1
// const cond4 = true
// const cond5 = undefined
// const cond6 = null
// const cond7 = "SAE"

// if ( cond5 ) {
//   console.log('Yes it will')
// } else {
//   console.log('no it wont')
// }

// What is the final value? 

// const counter1 = 5
// counter1 ++
// console.log('counter 1: ', counter1)

// Now for real

let counter2 = 5
counter2++
counter2+=2
counter2++
// console.log('counter 2: ', counter2)


// Will it run ? 

const truthy = true
const falsy = false

if (truthy && falsy) {
  console.log('It will run')
} else {
  console.log("It won't run")
}