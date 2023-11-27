

// square function
// Function Declaration
function square ( n ) {
  return n * n
}

// in Arrow form ( Ab ES6 )
// var square = n => console.log(n * n)

// calling a function
// square(2)
// square(5)
// square(90)
// square(29)

// Function declarations are pushed to the top due to js hoisting
lordify('Martin', 'Wallisellen')

function lordify ( person, city ) {
  return person + ' of ' + city
}

var lordMartin = lordify('Martin', 'Cali') // "Martin of Cali"
console.log(lordify('Kim', 'Portugal'))

// In arrow form 
// var lordify = (person, city) => console.log(person + ' of ' + city)

// var userName = prompt('What is your name?')
// var userCity = prompt('Where do you come from?')
// lordify (userName, userCity)

// Function Expression
// var lordify = function (person, city) {
//   console.log(person + ' of ' + city)
// }