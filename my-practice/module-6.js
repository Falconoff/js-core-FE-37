const numbers = [3, 6, 1, 2, 8, 7, 5, 4];
console.log('исходный массив:', numbers);
// Декларативный подход
// const filteredNumbers = numbers.filter(value => {
//   return value > 3;
// });

// console.log(filteredNumbers); // [4, 5, 7, 6, 8]

// ====================================================================

// ФУНКЦИОНАЛЬНЫЕ МЕТОДЫ МАССИВОВ

// ------- forEach() ----------------

// Единственный из функциональных методов, который ничего не возвращает,
// а просто перебирает коллекцию.Используется как замена цикла for.

// const res1 = numbers.forEach(num => console.log(num * 2));
// console.log('after:', numbers);
// console.log(res1); // undefined

// ------ map() -----------------

// Используется для трансформации массива.
// Применяет callback - функцию к каждому элементу исходного массива,
// результат работы callback - функции записывает в новый массив,
// который и будет результатом выполнения метода.
// Исходный и новый массив всегда имеют одинаковую длину.
// Не мутирует исходный массив.
// Метод map не изменяет массив, для которого он был вызван
// (хотя функция callback может это делать).
/*
// const res2 = numbers.map(num => num - 1);
// console.log('after:', res2);
console.log(
  'new array after map():',
  numbers.map(num => num - 1),
);
*/

// --------- filter() ---------------------

// Применяет callback-функцию к каждому элементу исходного массива и если результат
// ее выполнения имеет значение true, то копирует значение из исходного массива в
// новый массив.Исходный и новый массив могут иметь разную длину.
// Не мутирует исходный массив. Всегда возвращает массив, даже если в нем всего 1 элемент.
// Если ничего не найдено, вернет пустой массив.Используется, когда необходимо найти
// более одного элемента в коллекции.
/*
console.log(
  'after filter():',
  numbers.filter(num => num > 4),
);

console.log('исходный массив now:', numbers);
*/

// ----------- find() ------------------

// будет искать до первого совпадения, после чего прервет свое выполнение.
// Применяет callback-функцию к каждому элементу исходного массива и если
// результат ее выполнения имеет значение true, то возвращает этот элемент
// и завершает свое выполнение.Если ничего не найдено, вернет undefined.

// console.log(numbers.find(num => num === 9));

// - - - - - - - - -
/*
const users = [
  { id: '000', name: 'Mango', isActive: true },
  { id: '001', name: 'Poly', isActive: false },
  { id: '002', name: 'Ajax', isActive: true },
  { id: '003', name: 'Chelsey', isActive: false },
];

// Для каждого элемента коллекции (user) проверим поле id.
// Если оно совпадает с искомым идентификатором, то find прекратит
// выполнение и вернет текущий элемент (user) как результат выполнения
const user = users.find(user => user.id === '002');
console.log(user);

// Создадим функцию которая будет возвращать нам пользователя по id
const getUserById = (arr, id) => arr.find(x => x.id === id);

console.log(getUserById(users, '001'));
console.log(getUserById(users, '003'));
// Создадим функцию которая будет возвращать нам пользователя по имени
const getUserByName = (arr, findName) => arr.find(x => x.name === findName);

console.log('Ajax:', getUserByName(users, 'Ajax'));
*/

// --------- every() и some() -----------------

// EVERY. Метод every проверяет, прошли ли все элементы массива тест, предоставляемый
// callback - функцией.Возвращает true, если вызов callback - функции вернет
// true для каждого элемента в array.

// console.log(numbers.every(num => num > 0)); // true
// console.log(numbers.every(num => num > 1)); // false

// SOME. Метод some проверяет, проходит ли по крайней мере один элемент в массиве тест,
// предоставляемый callback - функцией.Возвращает true, если вызов callback -
// функции вернет true хотя бы для одного элемента в array.

// console.log(numbers.some(num => num > 7)); // true
// console.log(numbers.some(num => num > 8)); // false

/*
const isBigEnough = val => val >= 10;

console.log([12, 5, 8, 130, 44].every(isBigEnough)); // false
console.log([12, 54, 18, 130, 44].every(isBigEnough)); // true

console.log([2, 5, 8, 1, 4].some(isBigEnough)); // false
console.log([12, 5, 8, 1, 4].some(isBigEnough)); // true
*/

// --------- reduce() ----------------

// Аккумулирующая функция, используется для последовательной обработки
// каждого элемента массива с сохранением промежуточного результата.
// Швейцарский нож функциональных методов массива. Возможно немного сложна в усвоении,
// но результат стоит того.

/*
console.log('==== Аккумулирующая функция reduce() ====');

// просуммируем все значения из массива numbers:
// console.log(
//   'total summ of numbers:',
//   numbers.reduce((total, num) => total + num, 0),
// );

// Пример с твитами:
const tweets = [
  { id: '000', likes: 5, tags: ['js', 'nodejs'] },
  { id: '001', likes: 2, tags: ['html', 'css'] },
  { id: '002', likes: 17, tags: ['html', 'js', 'nodejs'] },
  { id: '003', likes: 8, tags: ['css', 'react'] },
  { id: '004', likes: 0, tags: ['js', 'nodejs', 'react'] },
];

// напишем функцию для подсчета лайков из коллекции
// totalLikes - аккумулятор, tweet - объект, элемент массива
const countLikes = tweets =>
  tweets.reduce((totalLikes, tweet) => totalLikes + tweet.likes, 0);

console.log('quantity of "likes":', countLikes(tweets)); // 32

// напишем функцию для сбора тегов из коллекции
// allTags - аккумулятор, начальное значение которого укажем пустым массивом []
// tweet - объект, элемент массива
const getTags = tweets =>
  tweets.reduce((allTags, tweet) => {
    allTags.push(...tweet.tags);

    return allTags;
  }, []);

console.log('get array of all tags:', getTags(tweets));

const tags = getTags(tweets); // список всего, что во всех tags

// Создадим callback-функцию getTagStats() отдельно, а в reducе передадим ссылку на нее.
// Это стандартная практика если callback-функция довольно большая.

// Если в объекте-аккумуляторе accum нету своего свойства с ключем tag,
// то создаем его и записывает ему значение 0.
// В противном случае увеличиваем значение на 1.
const getTagStats = (accum, tag) => {
  if (!accum.hasOwnProperty(tag)) {
    accum[tag] = 0;
  }

  accum[tag] += 1;

  return accum;
};

// Начальное значение аккумулятора - это пустой объект {}
const countTags = tags => tags.reduce(getTagStats, {});

const tagCount = countTags(tags);
console.log(tagCount);
*/

// --------- sort() ----------------

// Позволяет сортировать элементы массива на месте.

// const numbers = [2, 1, 4, 3, 5];
// Отсортирует по возрастанию
/*
console.log(
  'After sort: ',
  numbers.sort(),
  // numbers.sort().map(num => num + 1),
); // [1, 2, 3, 4, 5]

const clients = ['Mango', 'Ajax', 'Poly', 'Chelsey'];
*/

// Отсортирует по алфавиту
// console.log('Before sort: ', clients); // ["Mango", "Ajax", "Poly", "Chelsey"]
// console.log('After sort: ', clients.sort()); // ["Ajax", "Chelsey", "Mango", "Poly"]

// ------- Свой порядок сортировки ----------------
/*
console.log(
  'rtl sort: ',
  numbers.sort((a, b) => b - a),
);
console.log(
  'ltr sort: ',
  numbers.sort((a, b) => a - b),
);
*/

// --------- Цепочки методов массива ------------------
/*
const even = numbers.filter(x => x % 2 === 0);
console.log('even', even);

const doubled = even.map(x => x * 2);
console.log('doubled', doubled);

const reversed = doubled.reverse();
console.log('reversed', reversed);
*/
/*
const result = numbers
  .filter(num => num % 2 === 0)
  .map(num => num * 2)
  .sort((a, b) => a - b);
console.log(result);
*/
