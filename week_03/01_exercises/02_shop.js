const reports = [
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
      firstName: 'Hermix§ny',
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

reports.forEach((report) => {

  let total = 0
  const template = `
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Dear ${report.client.title}${report.client.firstName} ${report.client.lastName}
Thank you for visiting us at ${report.shop}

Here is your online receipt:
  
  ${report.purchases.map(purchase => {
    total = total + purchase.quantity * purchase.price
    return `\t${purchase.quantity} x ${purchase.item} for ${purchase.price}G, Total: ${purchase.quantity * purchase.price}G`
  }).join('\n')}

------------------------------
Total: ${total}G
Please do not hesitate to contact us if you have any questions :D
${report.date}
`

  console.log(template)
})





// report.forEach(entry => {
//   let total = 0
//   const template2 = `
//   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  
//   Dear ${entry.client.title} ${entry.client.firstName} ${entry.client.lastName}
//   Thank you for visiting us at ${entry.shop}
  
//   Here is your online receipt:

//   ${entry.purchases.map(purchases => {
//     total+= purchases.quantity * purchases.price
//     return `\t${purchases.quantity} x ${purchases.item} for ${purchases.price}G, Total: ${purchases.quantity * purchases.price}G`}).join('\n')}
  
//   ------------------------------
//   Total: ${total}G
//   Please do not hesitate to contact us if you have any questions :D
//   ${entry.date}
//   `

//   console.log(template2)
// })


