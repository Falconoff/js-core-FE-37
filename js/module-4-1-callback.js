// const printMessage = function (message) {
//   console.log(message)
// }

// const higherOrderFunction = function (callback) {
//   const string = 'HOCs are awesome'
//   callback(string)
// }

// higherOrderFunction(printMessage)

// ========= опыты с колбэками ============
const myHighFunc = function (callback, num) {
  const number = num === 1 ? 11 : 22
  callback(number)
}

const myFirstFunc = function (arg) {
  console.log(`first function `, arg * 2)
}

const mySecondFunc = function (arg) {
  console.log(`second function `, arg * 10)
}

myHighFunc(myFirstFunc, 1) // first function  22
myHighFunc(myFirstFunc, 2) // first function  44
myHighFunc(myFirstFunc, 20) // first function  44
myHighFunc(mySecondFunc, 1) // second function  110
myHighFunc(mySecondFunc, 10) // second function  220
// =====================================================

// ========= стрелочная callback ф-ция ==============
/*
const repeat = function (n, action) {
  for (let i = 0; i < n; i += 1) {
    action(i)
  }
}

const labels = []

// const addLabel = function (value) {
//   labels.push(`Label ${value + 1}`)
// }
// repeat(5, addLabel)

// заменяем на стрелочную ф-цию в аргументе:
repeat(5, (value) => {
  labels.push(`Label ${value + 1}`)
})

console.log(labels) // ["Label 1", "Label 2", "Label 3", "Label 4", "Label 5"]*/
// -----------------------------------------------------
/*
const filter = function (array, test) {
  const filteredElements = []

  for (const element of array) {
    const passed = test(element)

    if (passed) {
      filteredElements.push(element)
    }
  }

  return filteredElements
}

const fruits = [
  { name: 'apples', quantity: 200, isFresh: true },
  { name: 'grapes', quantity: 150, isFresh: false },
  { name: 'bananas', quantity: 100, isFresh: true },
]
console.table(fruits)

const freshFruits = filter(fruits, (fruit) => fruit.isFresh)
// вызывается ф-ция filter, в которую передаём 1-ым аргументом массив объектов,
// а 2-м - стрелочную ф-цию, которая в стр.64 получается в виде
// const passed = element.isFresh
console.table(freshFruits) // массив с объектами apples и bananas

const fruitsWithQuantity = filter(fruits, (fruit) => fruit.quantity >= 120)
console.table(fruitsWithQuantity) // массив с объектами apples и grapes
*/

// ============== Замыкания =============================
/*
const makeShef = function (name) {
  return function makeDish(dish) {
    console.log(`${name} is cooking ${dish}`)
  }
}

const mango = makeShef('Mango')
const poly = makeShef('Poly')

mango('apple pie') // Mango is cooking apple pie
mango('beef stew') // Mango is cooking beef stew
poly('pancakes') // Poly is cooking pancakes
poly('eggs and bacon') // Poly is cooking eggs and bacon
makeShef('xxx')('cakes') // xxx is cooking cakes
*/

function makeFunc() {
  var name = 'Mozilla'
  console.log('2 - запустилась makeFunc()')

  function displayName() {
    console.log('5 - запустилась displayName()')
    console.log(name)
  }

  console.log('3 - продолжается makeFunc()')

  // return

  return displayName
}

console.log('1 - начало основной скрипт')

console.log('1.1 - вызываем makeFunc() 1-й раз')
makeFunc()
console.log('1.1 - вызываем makeFunc() 2-й раз')
var myFunc = makeFunc()

// console.log('makeFunc: ', makeFunc) // всё тело ф-ции makeFunc
// console.log('myFunc: ', myFunc) // тело ф-ции displayName
// console.log('myFunc(): ', myFunc()) // undefined

console.log('4 - продолжает основной скрипт')

myFunc()
// myFunc() - то же самое, что makeFunc()()

console.log('6 - конец основного скрипта')

/*
function makeAdder(x) {
  return function (y) {
    return function (z) {
      return x + y + z
    }
  }
}

var add1 = makeAdder(1)
var add2 = makeAdder(2)

console.log(add1(1)(1)) // 3
console.log(add2(2)(2)) // 6
*/
