// https://proglib.io/p/prodvinutye-sovety-i-hitrosti-console-log-2021-06-29
// Продвинутые советы и хитрости console

const anna = {
  name: 'Anna Ivanova',
  age: 13,
  sex: 'female',
  class: '7-A',
  marks: {
    math: 10,
    ukrLang: 11,
    ukrLit: 10,
    engl: 9,
    history: 10,
    geogr: 11,
  },
};

console.log('======== console.log ========');
console.log(anna);

console.log('======== console.dir ========');
console.dir(anna);

console.log('======== console.assert ========');
//регистрировать что-либо только в том случае, если условие false,
//и сэкономить место в консоли, избегая ненужного вывода сообщений
console.assert(anna); // ничего не выведет
console.assert(anna.town);

console.log('======== console.table ========');
console.table(anna);

console.log('======== console.count ========');
for (let i = 0; i < 3; i += 1) {
  console.count('I-count');
  for (let j = 0; j < 3; j += 1) {
    console.count(777);
  }
}
console.log('start second FOR');
for (let k = 0; k < 5; k += 1) {
  console.count(777);
}

console.log('======== console.time ========');
/* Используйте console.time() для запуска таймера. 
Затем при каждом вызове console.timeLog() будет выводиться время, 
прошедшее с момента его запуска.
Когда все закончится, вызовите console.timeEnd(), чтобы вывести 
общее количество времени */
console.time('myTimer');
for (let i = 0; i < 5; i += 1) {
  const res = 99999999 * 999999999 * i;
  console.log(`${i}:`, res);
  console.timeLog('myTimer');
}
console.timeEnd('myTimer');

console.log('======== console.trace ========');
// распечатать трассировку стека кода
const parentFunction = () => {
  const childFunction = () => {
    console.trace('Hello!');
  };
  childFunction();
};
parentFunction();

console.log('======== console.group ========');
/* Можно группировать сообщения, чтобы избежать беспорядка в консоли
Используйте console.groupCollapsed() вместо console.group(),
и группа будет свернута по умолчанию */

// console.group('parent');
console.groupCollapsed('parent');
console.log('message 1');
console.log('message 2');
console.log('message 3');
console.group('child');
console.log('message 4');
console.log('message 5');
console.groupEnd();
console.groupEnd();

console.log('======== CSS for console %c ========');
// используйте %c перед строкой и передайте стили CSS в качестве второго аргумента
console.log('Hello World!');
console.log(
  '%cHello World!',
  'font-weight: bold; color: red; font-size: 16px; background-color: #ff3;',
);
