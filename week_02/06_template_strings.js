// Template Strings / Literals
const client = {
  name : {
    first : 'Princess',
    last : 'Zelda',
    middle: 'of Hyrule'
  },
  purchase: {
    qty: 3,
    item: 'empty jar',
    price: 50,
  },
  shop: "Beedle's Shop Ship"
}


// With Concatenation
console.log(client.name.first + ' ' + client.name.last + ' purchased ' + client.purchase.qty + ' ' + client.purchase.item + '/s')
console.log(`${client.name.first} ${client.name.last} purchased ${client.purchase.qty} ${client.purchase.item}/s`)


function calculatePrice(qty, price) {
  return qty * price
}


const receipt = `
Hello ${client.name.first},
Thank you for purchasing ${client.purchase.qty} ${client.purchase.item}(s).

Order Details: 
    Buyer: ${client.name.first} ${client.name.last}, ${client.name.middle}.
    ${client.purchase.qty} x $${client.purchase.price} = $${calculatePrice(client.purchase.qty, client.purchase.price)} of ${client.purchase.item}

Please come again! ${client.shop}

`

console.log(receipt)


const myTemplate = `
<header>
  <h1>Hello ${client.name.first}!</h1>
  <small>: )</small>
</header>
`

const myElement = document.createElement('div')
myElement.innerHTML = myTemplate
document.querySelector('body').appendChild(myElement)