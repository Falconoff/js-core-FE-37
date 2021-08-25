const array = [3, 5, 7, 9, 2, 0, 4, 6, 8, 1];

// const arrB = array;

array[12] = 13;
array[10] = '11';

console.log(array); // [3, 5, 7, 9, 2, 0, 4, 6, 8, 1, "11", empty, 13]

// array.length = 15;
// console.log(array); // [3, 5, 7, 9, 2, 0, 4, 6, 8, 1, "11", empty, 13, empty × 2]

// array.length = 5;
// console.log(array); // [3, 5, 7, 9, 2]

// console.log('arrB', arrB);
// for (let i = 0; i < arrB.length; i += 1) {
//   console.log(`index[${i}]`, arrB[i]);
// }

let message = "I don't find it(";
let find = 13;
let j = 0;
for (const el of array) {
  // console.log('j=', j);
  // if (el == find) {
  if (el === find) {
    message = `I find it on ${j + 1}-step!`;
    break;
  }
  j++;
}
console.log(message);

console.log('indexOf:', array.indexOf(0));
console.log('includes', array.includes(3));

// ========================================================================

const myArr = [2, 0, 3, 4, 1, 3, 1, 7, 5, 1, 6, 2, 0, 5, 14];
console.log('исходник:', myArr);
// Задача: найти уникальные элементы в массиве и сохранить их в другой массив
const uniqueElements = [];
// проходим по массиву
for (let i = 0; i < myArr.length; i += 1) {
  // скопируем массив
  const bufferArr = [...myArr];
  // вырежем из копии текущий элемент
  bufferArr.splice(i, 1);
  // console.log(myArr[i], bufferArr);
  // проверяем есть ли ещё в массиве такое же значение, как в текущем элементе
  if (!bufferArr.includes(myArr[i])) {
    // console.log('NOT includes');
    // если уникален, записываем его в массив
    uniqueElements.push(myArr[i]);
  }
}
console.log('uniqueElements:', uniqueElements);

console.table(
  myArr.filter(
    (el, index, array) => array.indexOf(el) === array.lastIndexOf(el),
  ),
);

// ----------- Метод slice()
console.log(myArr.slice(2, 4));
console.log(myArr.slice(8, -1));
console.log(myArr.slice(0, -1));
console.log(myArr.slice(-3, -1));
console.log(myArr.slice(-1));

// ----------- Метод splice()
// 1-й аргумент - индекс с какого начать, 2-й кол-во удаляемых элементов, 3-й и больше - добавляемые значения
console.log([...myArr].splice(2, 4));
console.log([...myArr].splice(8, 1));
console.log([...myArr].splice(0, 1));
console.log([...myArr].splice(3, 3));
console.log([...myArr].splice(-1));
// add 333 on 1-st index (2-nd place)
console.log(myArr.splice(1, 0, 333));

// change 3-rd element
console.log('myArr_old', myArr);
console.log(myArr.splice(2, 1, 333, 444, 555));
console.log('myArr_new', myArr);

// ------------- Метод concat()
const arrA = ['it is', 'my', 'qwe'];
const arrB = ['rty', 'Hello'];
console.log(arrA.concat(arrB));

// ============= functions ====================
const myFunct = function (a, b, c = 33) {
  console.log(a, b, c);
};

myFunct(2, 3, 4); // 2 3 4
myFunct(2, 3); // 2 3 333
myFunct(2, 3, 4, 5); // 2 3 4
myFunct(5); // 5 undefined 33

//------------------ arguments --------------
const funcWithAgrs = function () {
  console.log(...arguments);
};

funcWithAgrs(1, 3, 5);
funcWithAgrs(2, 4);
funcWithAgrs();

const arrowFunc = (...params) => console.log(params);

arrowFunc(1, 3, 5);
arrowFunc(2, 4);
arrowFunc();
// --------------------------------
// Вот поэтому мы используем let или const

// console.log(value); // undefined
let value = 5;

if (true) {
  console.log(value); // 5
  value = 10;
  console.log(value); // 10
}

value = 15;
console.log(value); // 15
