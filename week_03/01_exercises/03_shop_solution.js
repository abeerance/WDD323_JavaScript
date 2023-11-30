const report = [
  {
    client :{
      firstName: 'Harry',
      lastName : 'Potter',
      title: 'Mr.'
    },
    purchases:[
      {
        item: 'Polyjuice Potion',
        price: 50,
        quantity: 3
      },{
        item: 'Book of Monsters',
        price: 34,
        quantity: 1
      },{
        item: 'Nimbus 2020 Deluxe',
        price: 2999,
        quantity: 1
      }
    ],
    shop: 'ShopItAll - Diagon Alley',
    date: '15 Aug 1996'
  },
  {
    client :{
      firstName: 'Hermiony',
      lastName : 'Granger',
      title: 'Ms.'
    },
    purchases:[
      {
        item: 'Pixie Hair Wand',
        price: 89,
        quantity: 1
      },{
        item: 'History of Hogwarts',
        price: 35,
        quantity: 1
      },{
        item: 'Hair Pin',
        price: 0.89,
        quantity: 5
      },{
        item: 'Gryffindor Scarf',
        price: 3.97,
        quantity: 5
      }
    ],
    shop: 'ShopItAll - Hogsmeade',
    date: '21 Aug 1996'
  },
  {
    client :{
      firstName: 'Luna',
      lastName : 'Lovewood',
      title: 'Ms.'
    },
    purchases:[
      {
        item: 'Butterbeer',
        price: 1.25,
        quantity: 5
      },{
        item: 'Lion Hat',
        price: 89.99,
        quantity: 1
      },{
        item: 'Spectrespecs',
        price: 23,
        quantity: 1
      },{
        item: 'Quibbler',
        price: 2.14,
        quantity: 4
      }
    ],
    shop: 'ShopItAll - Diagon Alley',
    date: '20 Sep 1996'
  },
]

// for  ( let i = 0; i < report.length; i++){
//   const template = `
//     Dear ${report[i].client.title}${report[i].client.firstName} ${report[i].client.lastName}
//   `
//   console.log(template)
// }

// Alternative with forEach



report.forEach( entry => {

  let template = `
  ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  Dear ${entry.client.title}${entry.client.firstName} ${entry.client.lastName}
  Thank your for visiting us at ${entry.shop}

  Here is your online receipt : `
  
  let total = 0
  
  entry.purchases.forEach( purchase => {

    template += `
      ${purchase.quantity} x ${purchase.item} for ${purchase.price}G each. Total: ${purchase.price * purchase.quantity}
    `

    total +=  purchase.price * purchase.quantity
  })


  template +=`
  -----------------------------------
  Total: ${total}G
  Please do not hesitate to contact us if you have any questions
  ${entry.date}
  ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^


`
  console.log(template) 
})