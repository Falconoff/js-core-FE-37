// ---------- МОИ ПРОБЫ -----------
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
// }

// const entries = Object.entries(hotel)

// console.log(entries)

// for (const entry of entries) {
//   const key = entry[0]
//   const value = entry[1]

//   console.log(`${key}: ${value}`)
// }

// ================= Распыление аргументов =================
// const temperatures = [18, 14, 12, 21, 17, 29];

// const min = Math.min(...temperatures); // NaN

// console.log(...temperatures)  // 18 14 12 21 17 29
// console.log(min)   // 12

// =============== ШКОЛЬНЫЙ ТАБЕЛЬ И СРЕДНЯЯ ОЦЕНКА ===============
const anna = {
  name: 'Anna Ivanova',
  marks: {
    math: 10,
    ukrLang: 11,
    ukrLit: 10,
    engl: 9,
    history: 10,
    geogr: 11,
    art: 10,
    music: 10,
  },
}

const peter = {
  name: 'Peter Sidoroff',
  marks: {
    math: 7,
    ukrLang: 8,
    ukrLit: 8,
    engl: 6,
    history: 5,
    geogr: 8,
    art: 12,
  },
  getAvgMark() {
    let avgMark = 0
    let total = 0

    const marks = Object.values(this.marks)
    console.log(`${this.name}'s marks array: ${marks}`)

    for (const mark of marks) {
      total += mark
    }

    avgMark = (total / marks.length).toFixed(1)
    console.log(`avgMark: ${avgMark}`)
  },
}

function getAvgMark(name) {
  let avgMark = 0
  let total = 0

  const marks = Object.values(name.marks)
  console.log(`${name.name}'s marks array: ${marks}`)

  for (const mark of marks) {
    total += mark
  }

  avgMark = (total / marks.length).toFixed(1)
  console.log(`avgMark: ${avgMark}`)
}

getAvgMark(anna)
// getAvgMark(peter)
peter.getAvgMark()
