// const animal = {
//   legs: 4,
// };
// const dog = Object.create(animal);
// console.log(dog); // {name: 'Манго'}

// dog.name = "Манго";

// console.log(dog); // {name: 'Манго'}
// console.log(dog.name); // 'Манго'
// console.log(dog.legs); // 4

// const keys = [];
// const values = [];
// const advert = {
//   service: "apt",
// };
// const apartment = Object.create(advert);
// apartment.descr = "Spacious apartment in the city center";
// apartment.rating = 4;
// apartment.price = 2153;

// for (const key in apartment) {
//   if(apartment.hasOwnProperty(key)) {
//     keys.push(key);
//     values.push(apartment[key]);
//   }
// }
// console.log(keys, values)
// console.log(apartment.service)

// =========== 14 ==============

// function countProps(object) {
//   let propCount = 0;

//   propCount = Object.keys(object).length;

//   console.log(propCount);

//   return propCount;
// }

// countProps({ name: "Mango", age: 2 })
// countProps({ mail: "poly@mail.com", isOnline: true, score: 500 })

// ============== 18 ==============
// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ]

// function getProductPrice(productName) {
//   for (const product of products) {
//     if (product.name === productName) {
//       console.log(`I find ${productName}! It's  price: ${product.price}`)

//       return product.price
//     }
//   }
//   console.log(`I DON'T find ${productName}`)
//   return null
// }
// getProductPrice('Droid')
// getProductPrice('Droidd')

// ============= 19 ==================
// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ]

// function getAllPropValues(propName) {
//   // Change code below this line
//   const array = []
//   for (const product of products) {
//     for (const key in product) {
//       if (key === propName) {
//         array.push(product[key])
//       }
//     }
//   }
//   console.log(array)
//   return array
//   // Change code above this line
// }
// getAllPropValues('prices')

// =============== 20 ================
const products = [
  { name: 'Radar', price: 1300, quantity: 4 },
  { name: 'Scanner', price: 2700, quantity: 3 },
  { name: 'Droid', price: 400, quantity: 7 },
  { name: 'Grip', price: 1200, quantity: 9 },
]

function calculateTotalPrice(productName) {
  // Пиши код ниже этой строки
  for (const product of products) {
    if (product.name === productName) {
      console.log(
        `I find ${productName}! It's  price: ${
          product.price * product.quantity
        }`,
      )

      return product.price * product.quantity
    }
  }
  console.log(`I DON'T find ${productName}`)
  return 0
}
// Пиши код выше этой строки

calculateTotalPrice('Radar')
