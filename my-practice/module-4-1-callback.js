/*
const printMessage = function (message) {
  console.log('запустилась ф-ция printMessage')
  console.log(message)
  return 555
  console.log('закончилась ф-ция printMessage')
}

// const higherOrderFunction = function (callback) {
function higherOrderFunction(callback) {
  console.log('запустилась ф-ция higherOrderFunction')

  const string = 'HOCs are awesome'
  callback(string)
  console.log('закончилась ф-ция higherOrderFunction')
}

higherOrderFunction(printMessage)
printMessage('qweqwe - without console')
console.log(printMessage('qweqwe - from console'))
*/

// ========= опыты с колбэками ========================
/*
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
*/
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

console.log(labels) // ["Label 1", "Label 2", "Label 3", "Label 4", "Label 5"]
*/
// -----------------------------------------------------
/*
const filter = function (array, test) {
  const filteredElements = []

  for (const element of array) {
    const passed = test(element) // присваиваем рез-тат работы ф-ции-колбэка с элементом массива

    if (passed) {
      // если вернулось true, заносим в массив элемент
      filteredElements.push(element)
    }
  }

  // оптимизированная запись:
  // for (const element of array) {
  //   if (test(element)) filteredElements.push(element)
  // }

  return filteredElements
}

const fruits = [
  { name: 'apples', quantity: 200, isFresh: true },
  { name: 'grapes', quantity: 150, isFresh: false },
  { name: 'bananas', quantity: 100, isFresh: true },
  { name: 'oranges', quantity: 250, isFresh: false },
]
console.table(fruits)

const freshFruits = filter(fruits, (fruit) => fruit.isFresh)
// вызывается ф-ция filter, в которую передаём 1-ым аргументом массив объектов,
// а 2-м - стрелочную ф-цию, которая в стр.75 получается в виде
// const passed = element.isFresh
// (fruit) => fruit.isFresh)  == fn(fruit){fruit.isFresh}
console.table(freshFruits) // массив с объектами apples и bananas

const fruitsWithQuantity = filter(fruits, (fruit) => fruit.quantity >= 120)
console.table(fruitsWithQuantity) // массив с объектами apples, grapes и oranges
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

console.log(mango('qwe'))
mango('qwerty')

mango('apple pie') // Mango is cooking apple pie
mango('beef stew') // Mango is cooking beef stew
poly('pancakes') // Poly is cooking pancakes
poly('eggs and bacon') // Poly is cooking eggs and bacon
makeShef('xxx')('cakes') // xxx is cooking cakes
*/

// --------------------------------------------------------------

/*
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
*/

// -------------------------------------------------------------

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

// ===========================================================
// ___________________________________________________________
//          |                           |
//          |   по вебинару с Сандрой   |
//          |                           |
// ___________________________________________________________

// ==============  callback ======================

/*
// ---- first example ----------
function highOrder(value, callback) {
  // console.log(value)
  value += '!!!'
  callback(value)
}

function setMessage(message) {
  console.log('My message is:', message)
}

setMessage('Ok') // My message is: Ok
highOrder('Hello world', setMessage) // My message is: Hello world!!!
*/

// ---- not second example, my task ----------
/*
// recipes of coffee-drinks
const recipes = {
  americano: ['water', 'coffee', 'sugar'],
  latte: ['water', 'coffee', 'milk', 'sugar'],
  mocco: ['water', 'coffee', 'milk', 'chocolate', 'sugar'],
}
// my goods in my kitchen
const iHave = ['water', 'coffee', 'sugar', 'milk']

function toDoDrink(drinkName, callback) {
  if (Object.keys(recipes).includes(drinkName)) {
    console.log(`I find ${drinkName}`)
  } else {
    console.log('There is no such drink')
  }

  const result = callback(recipes[drinkName], iHave)
  // console.log(result)
  if (result.length === 0) {
    console.log(`Your drink is ready! Enjoy!`)
  } else {
    console.log(...result)
  }
}

function verifyProds(prodsMustHave, myProds) {
  const arr = []
  for (const prod of prodsMustHave) {
    if (myProds.includes(prod)) {
      // console.log(`you have ${prod}`)
    } else {
      // console.log(`you have NO ${prod}!!!`)
      arr.push(`you have NO ${prod}!!!`)
    }
  }
  // console.log(arr)
  return arr
}

toDoDrink('americano', verifyProds)
*/

// ------------- 3 - filter --------------------
/*
// DataBase
const results = [{ mail: 'tyygyg@gmail', scores: 10 }]

// main fn
function getResultByTests(callback1, callback2, mail, ...scores) {
  console.log(mail)
  console.log(scores)

  // 1 - добавляем в БД данные о тесте
  // total scores
  let total = 0
  for (let i of scores) {
    total += i
  }
  console.log('total', total)
  // add our mail and total scores into obj "results"
  const obj = { mail, scores: total }
  results.push(obj)
  console.log(results)

  // 2 - проверяем (фильтруем) массив results из БД с помощью колбэков
  const scoresArray = []
  for (let obj of results) {
    console.log('получили данные по очкам из БД', obj.scores)
    scoresArray.push(obj.scores)
    console.log('создаём массив из полученных очков', scoresArray)

    let max = callback1(scoresArray)
    let min = callback2(scoresArray)
    console.log('max', max, 'min', min)
  }
}

// callbacks
function getMaxValue(arr) {
  return Math.max(...arr)
}

function getMinValue(arr) {
  return Math.min(...arr)
}

// call main fn with filter-callbacks
getResultByTests(
  getMaxValue,
  getMinValue,
  'qwe@mail.com',
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
)

// call main fn with filter-callbacks
getResultByTests(
  getMaxValue,
  getMinValue,
  'rty@mail.com',
  1,
  0,
  1,
  1,
  0,
  1,
  0,
  1,
)
*/

// -------------- 4 - последовательность Фибоначчи -------------------------------
// последовательность чисел, начиная с 0 и 1, в которой следующее число равно сумме двух предыдущих числел

/*
const getF = (count, callback) => {
  let firstNum = 0;
  let secondNum = 1;
  const arrWithValues = [firstNum, secondNum];
  // генерим последовательность Фибоначчи
  for (let i = 3; i <= count; i += 1) {
    let newNumber = firstNum + secondNum;
    arrWithValues.push(newNumber);
    firstNum = secondNum;
    secondNum = newNumber;
  }
  console.log(arrWithValues);

  let result = callback(arrWithValues);
  return result;
}

// callback - ищем в массиве чётные значения
function getEvenValues(arr) {
  const arrValues = [];
  for (let num of arr) {
    if (num % 2 === 0) {
      arrValues.push(num);
    }
  }
  console.log(arrValues);
  return arrValues;
}

// callback - суммируем значения в массиве
function getSumm(arr) {
  let total = 0;
  for (let num of arr) {
    total += num;
  }
  console.log("total", total);
  return total;
}

console.log("только чётные", getF(18, getEvenValues));
console.log("сумма", getF(7, getSumm));
*/

// ==============  Замыкания  ======================

// -----------  counter  ---------------------
/*
document.getElementById('dec').addEventListener('click', () => {
  let count = prodCounter.decrement(1);
  console.log(count);
  document.getElementById('count').textContent = count;
});
document.getElementById('inc').addEventListener('click', () => {
  let count = prodCounter.increment(1);
  console.log(count);
  document.getElementById('count').textContent = count;
});

function createCounter() {
  let current = 1;

  function increment(value) {
    return (current += value);
  }

  function decrement(value) {
    if (current <= 0) return (current = 0);
    return (current -= value);
  }

  // возврат, чтоб можно было вытянуть эти ф-ции
  return { increment, decrement }
}

const prodCounter = createCounter();
console.log(prodCounter);
*/

// ----------------- change Color ---------------------
function changeColor() {
  let color = 'green'

  function getNewColor(value) {
    return (color = value)
  }

  function resetColor() {
    return (color = 'green')
  }

  return {getNewColor, resetColor}
}

const x = changeColor();

let color = x.getNewColor('blue');
console.log(color);

color = x.getNewColor('red');
console.log(color);

color = x.resetColor();
console.log(color);
