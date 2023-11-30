
// Get element by id
// console.log(document.getElementById('display'))


// // Get by class name
// console.log(document.getElementsByClassName('btn')[0])

// // Query Selector

// console.log(document.querySelector('#display'))
// console.log(document.querySelector('.btn'))

// // Query SelectorAll

// console.log(document.querySelectorAll('.btn'))


// Change Text content of element

document.querySelector('#display').innerText = '<span>Tony wants to know :</span> what the difference is.'

// Change the HTML content of an element

document.querySelector('p').innerHTML = '<script>console.log("Bad script")</script><span style="color:red">Tony wants to know :</span> what the difference is.'

// Change Class

document.querySelector('#display').classList.add('underlined')
document.querySelector('.btn').classList.remove('btn')

document.querySelector('.btn').setAttribute('title', 'I am a value :D')

document.querySelector('.btn').remove()


// Creating Elements

const myDiv = document.createElement('div')
myDiv.innerText = '<(^^<)'
myDiv.setAttribute('style', 'height: 100px; color:red;')
document.body.appendChild(myDiv)