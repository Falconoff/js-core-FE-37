// ================= Короткие свойства  (shorthand properties). ================

// let name = 'Resort Hotel';
// let stars = 5;

// const es6hotel = {
//   name,
//   stars,
//   capacity: 100,
// };

// console.log(es6hotel);

// stars = 7;
// console.log(es6hotel);

// es6hotel.stars = 8;
// console.log(es6hotel);


// ================= Вычисляемые свойства (Computed properties) ================
// const key = 'person';
// const getKey = function () {
//   return 'age';
// };

// // Computed properties
// const object = {
//   [key]: 'Mango',
//   [getKey()]: 2,
// };

// console.log(object); // {person: 'Mango', age: 2}

// ================= Перебор объекта - Object.entries() =====================
// const hotel = {
//   name: 'Resort Hotel',
//   stars: 5,
//   capacity: 100,
// };

// const entries = Object.entries(hotel);

// console.log(entries)

// for (const entry of entries) {
//   const key = entry[0];
//   const value = entry[1];

//   console.log(`${key}: ${value}`);
// }

// ================= Распыление аргументов ================= 
const temperatures = [18, 14, 12, 21, 17, 29];

const min = Math.min(...temperatures); // NaN

console.log(...temperatures)  // 18 14 12 21 17 29
console.log(min)   // 12
