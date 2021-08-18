// Декларативный подход
const numbers = [3, 1, 2, 4, 5, 7, 6, 8];
console.log('исходный массив:', numbers);
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

const tweets = [
  { id: '000', likes: 5, tags: ['js', 'nodejs'] },
  { id: '001', likes: 2, tags: ['html', 'css'] },
  { id: '002', likes: 17, tags: ['html', 'js', 'nodejs'] },
  { id: '003', likes: 8, tags: ['css', 'react'] },
  { id: '004', likes: 0, tags: ['js', 'nodejs', 'react'] },
];

// напишем функцию для подсчета лайков из коллекции
const countLikes = tweets =>
  tweets.reduce((totalLikes, tweet) => totalLikes + tweet.likes, 0);

console.log('quantity of "likes":', countLikes(tweets)); // 32

// напишем функцию для сбора тегов из коллекции
const getTags = tweets =>
  tweets.reduce((allTags, tweet) => {
    allTags.push(...tweet.tags);

    return allTags;
  }, []);

console.log('get array of tags', getTags(tweets));

const tags = getTags(tweets);

const getTagStats = (acc, tag) => {
  if (!acc.hasOwnProperty(tag)) {
    acc[tag] = 0;
  }

  acc[tag] += 1;

  return acc;
};

// Начальное значение аккумулятора это пустой объект {}
const countTags = tags => tags.reduce(getTagStats, {});

const tagCount = countTags(tags);
console.log(tagCount);
