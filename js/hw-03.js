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
// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ]

// function calculateTotalPrice(productName) {
//   for (const product of products) {
//     if (product.name === productName) {
//       console.log(
//         `I find ${productName}! It's  price: ${
//           product.price * product.quantity
//         }`,
//       )
//       return product.price * product.quantity
//     }
//   }
//   console.log(`I DON'T find ${productName}`)
//   return 0
// }
// calculateTotalPrice('Radar')


// ====== 31 =======
// function add(...args) {
//   let total = 0;
//   console.log(args);
//   for (let arg of args) {
//     total += arg
//   }
//   console.log(total);

//   return total;
// }

// add(15, 27)
// add(12, 4, 11, 48)

// ======== 33 =========
// function findMatches(array, ...numbers) {
//   const matches = []; // Don't change this line
//   for(let num of numbers) {
//     if (array.includes(num)) {
//         console.log(`match ${num}`);
//         matches.push(num)
//     }
//   }
//   console.log(matches);
//   return matches;
// }
// findMatches([10, 24, 41, 6, 9, 19], 24, 11, 9, 23, 41)

// ======== 35 =============
// const bookShelf = {
//   books: ['The last kingdom', 'Haze', 'The guardian of dreams'],
//   updateBook(oldName, newName) {
//     // находим индекс старой книги
//     console.log(this.books.indexOf(oldName));
//     const bookIndex = this.books.indexOf(oldName);
//     // заменяем старую на новую
//     this.books.splice(bookIndex, 1, newName)
//   },
// };
// bookShelf.updateBook("Haze", "Dungeon chronicles")


// ========== 41 ==============
/*
getPotions() - метод для получения всех зелий. Возвращает значение свойства potions.
addPotion(newPotion) - добавляет зелье newPotion (уже объект) в массив в свойстве potions.
removePotion(potionName) - удаляет объект зелья с именем potionName из массива в свойстве potions.
updatePotionName(oldName, newName) - обновляет свойство name объекта-зелья с названием oldName на newName в массиве potions.
*/
const atTheOldToad = {
  potions: [
    { name: 'Speed potion', price: 460 },
    { name: 'Dragon breath', price: 780 },
    { name: 'Stone skin', price: 520 },
  ],
  // Change code below this line
  getPotions() {
    console.log(this.potions)
    return this.potions;
  },

  addPotion(newPotion) {
    // console.log(this.potions)
    for (const potion of this.potions) {
      if (potion.name === newPotion.name) {
        console.log(`Potion ${newPotion.name} is already equipped!`);
        return `Potion ${newPotion.name} is already equipped!`;
      }
    }
    this.potions.push(newPotion);
    // console.log(this.potions);
  },

  removePotion(potionName) {
    const { potions } = this;
    for (let i = 0; i < potions.length; i += 1) {
      const potion = potions[i];
      if (potion.name === potionName) {
        potions.splice(i, 1);
        return
      }
    }
    return `Potion ${potionName} is not in inventory!`;
  },

  updatePotionName(oldName, newName) {
    const { potions } = this;
    for (let i = 0; i < potions.length; i += 1) {
      const potion = potions[i];
      if (potion.name === oldName) {
        potion.name = newName
        return
      }
    }
    return `Potion ${oldName} is not in inventory!`;
  },
  // Change code above this line
};

console.table(atTheOldToad.potions)
// atTheOldToad.getPotions()
// atTheOldToad.addPotion({ name: "Invisibility", price: 620 })
// atTheOldToad.addPotion({ name: "Power potion", price: 270 })
// atTheOldToad.removePotion("Dragon breath")
// atTheOldToad.removePotion("Speed potion")
// atTheOldToad.updatePotionName("Dragon breath", "Polymorth")
atTheOldToad.updatePotionName("Stone skin", "Invulnerability potion")
console.table(atTheOldToad.potions)
