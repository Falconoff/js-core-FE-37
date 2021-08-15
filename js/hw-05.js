// 06
/*
// С помощью Function Declaration напиши функцию-конструктор Storage, которая будет создавать объекты для управления складом товаров. Функция ожидает только один аргумент - начальный массив товаров, который записывается на создаваемый объект в свойство items.

// Добавь методы на прототип:

// getItems() - возвращает массив текущих товаров в свойстве items объекта, который вызывает этот метод.
// addItem(newItem) - принимает новый товар newItem и добавляет его в массив товаров в свойстве items объекта, который вызывает этот метод.
// removeItem(item) - принимает товар item и удаляет его из массива товаров в свойстве items объекта, который вызывает этот метод.
// Под комментарием мы добавили инициализацию экземпляра и вызовы методов в той последовательности, в которой твой код будут проверять тесты. Пожалуйста ничего там не меняй.
function Storage(items) {
  this.items = items;
}

Storage.prototype.getItems = function(){
  return this.items;
}

Storage.prototype.addItem = function(newItem){
  this.items.push(newItem);
}

Storage.prototype.removeItem = function(item){
  const index = this.items.indexOf(item);
  this.items.splice(index, 1);
}

// Пиши код выше этой строки
const storage = new Storage(['Нанитоиды', 'Пролонгер', 'Антигравитатор']);
console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор"]
storage.addItem('Дроид');
console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор", "Дроид"]
storage.removeItem('Пролонгер');
console.log(storage.getItems()); // ["Нанитоиды", "Антигравитатор", "Дроид"]
*/

// 07
/*
function StringBuilder(baseValue){
  this.value = baseValue;
}

StringBuilder.prototype.getValue = function(){
  return this.value;
}

StringBuilder.prototype.padEnd = function(str) {
  this.value += str;
}

StringBuilder.prototype.padStart = function(str) {
  this.value = str + this.value;
}

StringBuilder.prototype.padBoth = function(str) {
  this.value = str + this.value + str;
}

// Пиши код выше этой строки
const builder = new StringBuilder('.');
console.log(builder.getValue()); // '.'
builder.padStart('^');
console.log(builder.getValue()); // '^.'
builder.padEnd('^');
console.log(builder.getValue()); // '^.^'
builder.padBoth('=');
console.log(builder.getValue()); // '=^.^='
*/

// 10 - CLASSES
/*
class Car {
  constructor({ brand, model, price }) {
    this.brand = brand;
    this.model = model;
    this.price = price;
  }
  getPrice(){
    return this.price;
  }
  changePrice(newPrice){
    this.price = newPrice;
  }
}
*/
