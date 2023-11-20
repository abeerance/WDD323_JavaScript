// Somewhere in this messages there are some hidden words.
// Find a way to print every letter of the hidden word to the console.

// Example:

var message0 = [
  'compute',
  'order',
  'design',
  'edit'
]

// The hidden word here is 'code'
// So lets make a for loop that iterates through the message0 array

for(let i = 0; i < message0.length; i++){  // Our iterator starts with a value of 0 and will go all the way to 3, so i will be 0, 1, 2 and 3
  console.log(message0[i][0])              // Every iteration we get the word (message[i]) and get its first letter [0]. So message[i][0]
}                                          // We then print that out to the console


// ------- <(^^<) ------- //
/* OKAY, IT IS YOUR TURN! */
// ------- (>^^)> ------- //

var message1 =[
  'varying',
  'adjustable',
  'reliable',
  'incredible',
  'anything',
  'booleans',
  'local',
  'extraordinary'
]

/* Your code here (START) */


/* Your code here (END) */

var message2 = [
  'pattern',
  'arrangement',
  'order',
  'data',
  'bytes'
]

/* Your code here (START) */


/* Your code here (END) */

var message3 = [
  ['i','o','i'],
  ['p','b','p'],
  ['l','j','l'],
  ['a','e','a'],
  ['o','c','o'],
  ['f','t','f']
]

for (let i = 0; i< message3.length; i++) {
  message3[i][1]
}

/* Your code here (START) */


/* Your code here (END) */

var message4 = [
  [
    ['o','o','o'],
    ['o','s','o'],
    ['o','o','o']
  ],
  [
    ['o','o','o'],
    ['o','t','o'],
    ['o','o','o']
  ],
  [
    ['o','o','o'],
    ['o','r','o'],
    ['o','o','o']
  ],
  [
    ['o','o','o'],
    ['o','i','o'],
    ['o','o','o']
  ],
  [
    ['o','o','o'],
    ['o','n','o'],
    ['o','o','o']
  ],
  [
    ['o','o','o'],
    ['o','g','o'],
    ['o','o','o']
  ],
]

/* Your code here (START) */



/* Your code here (END) */


/**
 * You are in charge of managing social channels for your company.
 * One of your tasks is to get go over user messages and change any negative 
 * comments to possitive comments.
 * You have grown tired of doing this and want to automate the process.
 * 
 * You have already prepared a bit and created 2 dictionaries.
 * The first one: goodwords, is a list of possitive words that you can use to replace negative words with
 * The second one: evilwords, is a list of words that you know are negative and need to be removed.
 */


var goodwords = ['amazing', 'intriguing', 'versatile'];
var evilwords = ['boring', 'useless', 'obsolete'];

var messages = [
  'Learning to code is very important in the modern age',
  'JavaScript is an interesting and useless programming language',
  'There is nothing more useless than programming',
  'I think writing code is boring', 
  'I absolutely love js'
];

// Expected output is a new array (filtedMessages) with all the messages without any evil words
var filteredMessages = [];


// 1. loop through messages
// 2. In each iteration of messages, loop through evilwords
// 3. Replace evil word with good word
// 4. Push the new message in 'filteredMessages' array

for (let i = 0; i < messages.length; i++) {

  for (let j = 0; j < evilwords.length; j++) {

  }

}