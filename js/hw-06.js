// 1
/*
function calculateTotalPrice(orderedItems) {
  let totalPrice = 0;
  // было
  // for (let i = 0; i < orderedItems.length; i += 1) {
  //   totalPrice += orderedItems[i];
  // }

  // рефакторинг
  orderedItems.forEach(item => totalPrice += item);

  // Пиши код выше этой строки
  return totalPrice;
}
*/

// 2
/*
function filterArray(numbers, value) {
  const filteredNumbers = [];
  // Пиши код ниже этой строки
    
  numbers.forEach(number => {if (number > value) {
      filteredNumbers.push(number);
    }});

  // Пиши код выше этой строки
  console.log(filteredNumbers);
  return filteredNumbers;
}
  
filterArray([1, 2, 3, 4, 5], 3)
filterArray([12, 24, 8, 41, 76], 20)
*/

// 3
/*
function getCommonElements(firstArray, secondArray) {
    const commonElements = [];
    // Пиши код ниже этой строки
  
    for (let i = 0; i < firstArray.length; i += 1) {
      if (secondArray.includes(firstArray[i])) {
        commonElements.push(firstArray[i]);
      }
    }
  
    return commonElements;
    // Пиши код выше этой строки
}
*/

// 4 
/*
function getCommonElements(firstArray, secondArray) {
  const commonElements = [];
  // Пиши код ниже этой строки

  firstArray.forEach(elem =>  {
    if (secondArray.includes(elem)) {
      commonElements.push(elem);
    }
  })

  return commonElements;
  // Пиши код выше этой строки
}
*/

// 6
/*
const numbers = [5, 10, 15, 20, 25];

const logMessage = (number, index) => {
  console.log(`Индекс ${index}, значение ${number}`);
};

numbers.forEach(logMessage);
*/

// 9
/*
function changeEven(numbers, value) {
    // Пиши код ниже этой строки
  const newArray = [];

  for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] % 2 === 0) {
      newArray.push(numbers[i] + value);
    } else {
      newArray.push(numbers[i]);
    }
  }

  console.log(newArray)
  return newArray;
    // Пиши код выше этой строки
}
  
changeEven([1, 2, 3, 4, 5], 10)
*/

// 11
/*const books = [
    { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
    { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
    { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
    { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
    { title: 'Враг Божий', author: 'Бернард Корнуэлл', rating: 8.67 }
  ];
  // Пиши код ниже этой строки
  
  const titles = books.map((book) => book.title);
  */

// 12
/*
const books = [
  {
    title: 'Последнее королевство',
    author: 'Бернард Корнуэлл',
    genres: ['приключения', 'историческое']
  },
  {
    title: 'На берегу спокойных вод',
    author: 'Роберт Шекли',
    genres: ['фантастика']
  },
  {
    title: 'Красна как кровь',
    author: 'Ли Танит',
    genres: ['ужасы', 'мистика']
  }
];
// Пиши код ниже этой строки
  
const genres = books.flatMap(book => book.genres);
*/  

// 15
/*
const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];
// Пиши код ниже этой строки

const evenNumbers = numbers.filter( num => num % 2 === 0 );
const oddNumbers = numbers.filter( num => num % 2 !== 0 );

console.log('evenNumbers', evenNumbers, 'oddNumbers', oddNumbers)
*/

// 16
/*
const books = [
  {
    title: 'Последнее королевство',
    author: 'Бернард Корнуэлл',
    genres: ['приключения', 'историческое']
  },
  {
    title: 'На берегу спокойных вод',
    author: 'Роберт Шекли',
    genres: ['фантастика', 'мистика']
  },
  {
    title: 'Красна как кровь',
    author: 'Ли Танит',
    genres: ['ужасы', 'мистика', 'приключения']
  }
];
// Пиши код ниже этой строки
const allGenres = books.flatMap( book => book.genres );
console.log(allGenres);

const uniqueGenres = allGenres.filter(
  (genre, index, array) => array.indexOf(genre) === index  
);
console.log(uniqueGenres);
*/

// 17

const books = [
  { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
  { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
  { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
  { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
  { title: 'Враг Божий', author: 'Бернард Корнуэлл', rating: 8.67 }
];
/*
const MIN_RATING = 8;
const AUTHOR = 'Бернард Корнуэлл';
// Пиши код ниже этой строки

const topRatedBooks = books.filter( ({rating}) => rating >= MIN_RATING );
const booksByAuthor = books.filter( ({author}) => author === AUTHOR );

console.log("topRatedBooks", topRatedBooks);
console.log('booksByAuthor', booksByAuthor);
*/

// 18
/*
const getUsersWithEyeColor = (users, color) => {
  return users.filter( ({eyeColor}) => eyeColor === color )
};
*/

// 20
// Дополни функцию getUsersWithFriend(users, friendName) так, 
// чтобы она возвращала массив пользователей у которых есть друг с именем
// в параметре friendName. Массив друзей пользователя хранится в свойстве friends.

const users =
[
  {
    name: 'Moore Hensley',
    email: 'moorehensley@indexia.com',
    eyeColor: 'blue',
    friends: ['Sharron Pace'],
    isActive: false,
    balance: 2811,
    gender: 'male',
    age: 37
  },
  {
    name: 'Sharlene Bush',
    email: 'sharlenebush@tubesys.com',
    eyeColor: 'blue',
    friends: ['Briana Decker', 'Sharron Pace'],
    isActive: true,
    balance: 3821,
    gender: 'female',
    age: 34
  },
  {
    name: 'Ross Vazquez',
    email: 'rossvazquez@xinware.com',
    eyeColor: 'green',
    friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
    isActive: false,
    balance: 3793,
    gender: 'male',
    age: 24
  },
  {
    name: 'Elma Head',
    email: 'elmahead@omatom.com',
    eyeColor: 'green',
    friends: ['Goldie Gentry', 'Aisha Tran'],
    isActive: true,
    balance: 2278,
    gender: 'female',
    age: 21
  },
  {
    name: 'Carey Barr',
    email: 'careybarr@nurali.com',
    eyeColor: 'blue',
    friends: ['Jordan Sampson', 'Eddie Strong'],
    isActive: true,
    balance: 3951,
    gender: 'male',
    age: 27
  },
  {
    name: 'Blackburn Dotson',
    email: 'blackburndotson@furnigeer.com',
    eyeColor: 'brown',
    friends: ['Jacklyn Lucas', 'Linda Chapman'],
    isActive: false,
    balance: 1498,
    gender: 'male',
    age: 38
  },
  {
    name: 'Sheree Anthony',
    email: 'shereeanthony@kog.com',
    eyeColor: 'brown',
    friends: ['Goldie Gentry', 'Briana Decker'],
    isActive: true,
    balance: 2764,
    gender: 'female',
    age: 39
  }
  ]
/*
const getUsersWithFriend = (users, friendName) => {
  return users.filter( ({friends}) => friends.includes(friendName) )
};

console.log(getUsersWithFriend(users, 'Goldie Gentry'))
*/

// 21
/*
Дополни функцию getFriends(users) так, чтобы она возвращала массив друзей
всех пользователей (свойство friends). У нескольких пользователей могут быть
одинаковые друзья, сделай так чтобы возвращаемый массив не содержал повторений.
*/
/*
const getFriends = (users) => {
  // объединяем все имена в один массив
  const all = users.flatMap(({ friends }) => friends);

  // сохраняем только уникальные имена
  const allUnique = all.filter(
    (name, index, array) => array.indexOf(name) === index
  )
  
  return allUnique;
};
console.log(getFriends(users))
*/

// 24
/*Используя метод find() дополни код так, чтобы:
- В переменной bookWithTitle получился объект книги название 
которой (свойство title) совпадает со значением переменной BOOK_TITLE.
- В переменной bookByAuthor получился объект книги автор который 
(свойство author) совпадает со значением переменной AUTHOR.
*/
/*
const BOOK_TITLE = 'Сон смешного человека';
const AUTHOR = 'Роберт Шекли';
// Пиши код ниже этой строки

const bookWithTitle = books.find( ({title}) => title === BOOK_TITLE );
const bookByAuthor = books.find( ({author}) => author === AUTHOR );
*/

// 25
/*
const getUserWithEmail = (users, email) => {
  // return users.find( user => user.email === email )
  return users.find( ({email: userEmail} ) => userEmail === email )
};
console.log(getUserWithEmail(users, 'sharlenebush@tubesys.com'))
*/

// 26

const firstArray = [26, 94, 36, 18];
const secondArray = [17, 61, 23];
const thirdArray = [17, 26, 94, 61, 36, 23, 18];

const eachElementInFirstIsEven = firstArray.every(value => value % 2 === 0);
const eachElementInFirstIsOdd = firstArray.every(value => value % 2 !== 0);
const eachElementInSecondIsEven = secondArray.every(value => value % 2 === 0);
const eachElementInSecondIsOdd = secondArray.every(value => value % 2 !== 0);

// 27
/* Дополни функцию isEveryUserActive(users) так, чтобы она проверяла все ли
пользователи сейчас активны (свойство isActive) и возвращала true или false.
*/
/*
const isEveryUserActive = (users) => {
   return users.every( ({isActive}) => isActive )
};
*/

// 30 Метод reduce()
/*
const players = {
  mango: 1270,
  poly: 468,
  ajax: 710,
  kiwi: 244
};
const playtimes = Object.values(players); // [1270, 468, 710, 244]

const totalPlayTime = playtimes.reduce((acc, val) => acc += val, 0);

const averagePlayTime = totalPlayTime / playtimes.length;
*/

// 31
/*
const players = [
  { name: 'Манго', playtime: 1270, gamesPlayed: 4 },
  { name: 'Поли', playtime: 469, gamesPlayed: 2 },
  { name: 'Аякс', playtime: 690, gamesPlayed: 3 },
  { name: 'Киви', playtime: 241, gamesPlayed: 1 },
];
// Пиши код ниже этой строки

const totalAveragePlaytimePerGame = players.reduce(
  (totalAvgPlayTime, player) => {

    return totalAvgPlayTime + (player.playtime / player.gamesPlayed);

  }, 0);

  console.log(totalAveragePlaytimePerGame)
*/

// 32
/*
// const calculateTotalBalance = users => {
//   return users.reduce((total, user) => {
//     return total + user.balance
//   }, 0)
// };
const calculateTotalBalance = users =>
  users.reduce((total, user) =>
    total + user.balance
  , 0);

console.log('total:', calculateTotalBalance(users))
*/

// 33
/*
// альтернатива с flatMap
// const getTotalFriendCount = users => {
//   console.log(
//     'flatMap():',
//     users.flatMap(
//       user => user.friends
//     ).length
//   );

  console.log(
  users.reduce(
    (acc, user) => acc + user.friends.length,
    0)
  )
};
getTotalFriendCount(users)
*/

// ========== Метод sort() ===============

// 34
/*
const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
const authors = [
  'Ли Танит',
  'Бернард Корнуэлл',
  'Роберт Шекли',
  'Федор Достоевский'
];
// Пиши код ниже этой строки
// если не распылить исходный массив, он изменится
const ascendingReleaseDates = [...releaseDates].sort();
console.log(ascendingReleaseDates)
console.log(releaseDates)

const alphabeticalAuthors = [...authors].sort();
console.log(alphabeticalAuthors)
console.log(authors)
*/

// 36 -------- localeCompare()
/*
const authors = [
    'Ли Танит',
    'Бернард Корнуэлл',
    'Роберт Шекли',
    'Федор Достоевский',
    'Говард Лавкрафт'
  ];
  
const authorsInAlphabetOrder = [...authors].sort( (a,b) => a.localeCompare(b) );
  
const authorsInReversedOrder = [...authors].sort( (a,b) => b.localeCompare(a) );
*/

// 37
/*
const books = [
  { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
  { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
  { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
  { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
  { title: 'Враг Божий', author: 'Бернард Корнуэлл', rating: 8.67 }
];
// Пиши код ниже этой строки

const sortedByAuthorName = [...books].sort( 
  (a,b) => a.author.localeCompare(b.author) 
);

const sortedByReversedAuthorName = [...books].sort( 
  (a,b) => b.author.localeCompare(a.author) 
);

const sortedByAscendingRating = [...books].sort( 
  (a,b) => a.rating - b.rating 
);

const sortedByDescentingRating = [...books].sort( 
  (a,b) => b.rating - a.rating 
);
*/

// 38
// const sortByAscendingBalance = users => {
//    return [...users].sort( (a,b) => a.balance - b.balance )
// };

// 39
/* Дополни функцию sortByDescendingFriendCount(users) так, 
чтобы она возвращала массив пользователей отсортированный по убыванию 
количества их друзей (свойство friends). */
/*
const sortByDescendingFriendCount = users => {
  console.table(
    [...users].sort(
      (a,b) => b.friends.length - a.friends.length
    )
  )
};
sortByDescendingFriendCount(users)
*/

// 41
/* Дополни код так, чтобы в переменной names получился массив имён авторов 
в алфавитном порядке, рейтинг книг которых больше значения переменной MIN_BOOK_RATING.
*/
// const books = [
//   { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
//   { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
//   { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
//   { title: 'Красна как кровь', author: 'Ли Танит', rating: 8.14 },
//   { title: 'Сны В Ведьмином Доме', author: 'Говард Лавкрафт', rating: 8.67 }
// ];
/*
const MIN_BOOK_RATING = 8;

const names = [...books]
  .filter(({ rating }) => rating > MIN_BOOK_RATING)
  .map(book => book.author)
  .sort((a, b) => a.localeCompare(b));
  
console.table(names)
*/

// 42
/* Дополни функцию getNamesSortedByFriendCount(users) так, чтобы она возвращала массив имён 
пользователей отсортированный по возрастанию количества их друзей (свойство friends).*/
/*
const getNamesSortedByFriendCount = users => {
  console.table(
    [...users]
      .sort((a, b) => a.friends.length - b.friends.length)
      .map( ({name}) => name )
  )
};
getNamesSortedByFriendCount(users)
*/

// 43
/* Дополни функцию getSortedFriends(users) так, чтобы она возвращала массив уникальных 
имён друзей (свойство friends) отсортированный по алфавиту. */
/*
const getSortedFriends = users => {
  console.table(
    users.flatMap( ({friends}) => friends )
      .filter((user, index, array) => array.indexOf(user) === index)
      .sort( (a,b) => a.localeCompare(b) )
  )
};
getSortedFriends(users)
*/

// 44
/* Дополни функцию getTotalBalanceByGender(users, gender) так, чтобы она возвращала 
общий баланс пользователей (свойство balance), пол которых (свойство gender) совпадает 
со значением параметра gender.*/
const getTotalBalanceByGender = (users, gender) => {
  return users
    .filter((user) => user.gender === gender)
    .reduce( (total, user) => total + user.balance, 0 )
};

console.table(getTotalBalanceByGender(users, 'male'))