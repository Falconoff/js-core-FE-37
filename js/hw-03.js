
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

