/* 
For loops 
A for loop iterates as long as a condition is met
for (START: let i= 0; END i < 30; COUNTER i++) {
  console.log( 'the value of i is:', i)
}

*/

// Example loop #1

console.log('I am outside the loop')
// Output : I am outside the loop

for (let i = 0; i < 10; i++){
  console.log('I am in the loop :D')
}
// Output : 10 x I am in the loop :D

// Example loop #2

let counter = 0
for (let i = 0; i < 20; i++){
  counter = counter + 1
  console.log(counter)
}
// Output: 1, 2, 3 ... 20



for (let i= 0;  i < 30;  i++) {
  console.log( 'the value of i is:', i)
}

// Output: the value of i is: 0 ,the value of i is: 1, the value of i is: 2 ... the value of i is: 29


let food = ['apple', 'banana', 'pear', 'mango']

for ( let i = 0; i < food.length; i++ ){
  console.log(food[i])
}

// Output: apple, banana, pear


// Cars Exercise:
let cars = ['BMW', 'Audi', 'Volkwagen', 'Ford', 'Fiat'];

// If there is a fiat in the list:
  // "There is a Fiat in the list"
// Otherwise:
  // "There is NO Fiat in the list"

for ( let i = 0; i < cars.length; i++) {
  if (cars[i] === 'Fiat') {
    console.log('There is a Fiat in the list')
  } else {
    console.log('The current item is not a fiat')
  }
}

// Output: 4x  'The current item is not a fiat' 
//         1x 'There is a Fiat in the list' 