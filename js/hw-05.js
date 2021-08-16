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

// 12
/*
class Storage {
  #items;
  constructor(items) {
    this.#items = items;
  }
  getItems() {
    return this.#items;
  }
  addItem(newItem) {
    this.#items.push(newItem);
  }
  removeItem(item) {
    const itemIndex = this.#items.indexOf(item);
    this.#items.splice(itemIndex, 1);
  }
}

// Пиши код выше этой строки
const storage = new Storage(['Нанитоиды', 'Пролонгер', 'Антигравитатор']);
console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор"]
storage.addItem('Дроид');
console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор", "Дроид"]
storage.removeItem('Пролонгер');
console.log(storage.getItems()); // ["Нанитоиды", "Антигравитатор", "Дроид"]
*/

// 13 ========================================
/*
class StringBuilder {
  #value
  constructor(baseValue) {
    this.#value = baseValue;
  }
  getValue() {
    return this.#value;
  };
  padEnd(str) {
    this.#value += str;
  };
  padStart(str) {
    this.#value = str + this.#value;
  };
  padBoth(str) {
    this.padStart(str);
    this.padEnd(str);
  };
}
*/

// 14 - get & set =============================
/*
class Car {
  #model;
  #price;
  #brand;

  constructor({ brand, model, price }) {
    this.#brand = brand;
    this.#model = model;
    this.#price = price;
  }

  get brand() {
    return this.#brand;
  }

  set brand(newBrand) {
    this.#brand = newBrand;
  }

  get model() {
    return this.#model;
  }

  set model(newModel) {
    this.#model = newModel;
  }

  get price() {
    return this.#price;
  }

  set price(newPrice) {
    this.#price = newPrice;
  }
}
*/

// 15 ===========================
// example ------------------
/*
class User {
  // Объявление и инициализация статического свойства
  static TYPES = {
    ADMIN: 'admin',
    EDITOR: 'editor',
  };
  #email;
  #type;

  constructor({ email, type }) {
    this.#email = email;
    this.#type = type;
  }

  get type() {
    return this.#type;
  }

  set type(newType) {
    if (User.TYPES[newType] === undefined) {
      console.log('Ошибка! Такого типа пользователя не существует');
      console.log(User.TYPES.EDITOR);
      return;
    }

    this.#type = newType;
  }
}

const mango = new User({
  email: 'mango@mail.com',
  type: User.TYPES.ADMIN,
});

console.log(mango.TYPES); // undefined
console.log(User.TYPES); // { ADMIN: 'admin', EDITOR: 'editor' }

console.log(mango.type); // admin
mango.type = User.TYPES.EDITOR;
console.log(mango.type); // editor
*/

// task ------------------
/*
class Car {
  // Пиши код ниже этой строки
  static MAX_PRICE = 50000;
  #price;

  constructor({ price }) {
    this.#price = price;
  }

  get price() {
    return this.#price;
  }

  set price(newPrice) {
    if (newPrice > Car.MAX_PRICE) return;
    this.#price = newPrice;
  }
  // Пиши код выше этой строки
}

const audi = new Car({ price: 35000 });
console.log(audi.price); // 35000

audi.price = 49000;
console.log(audi.price); // 49000

audi.price = 51000;
console.log(audi.price); // 49000
*/

// 16 ==========================
/*
class Car {
  static #MAX_PRICE = 50000;
  // Пиши код ниже этой строки
  static checkPrice(price) {
    if (price > Car.#MAX_PRICE) {
      return 'Внимание! Цена превышает допустимую.';
    } else {
      return 'Всё хорошо, цена в порядке.';
    }
  }
  // Пиши код выше этой строки
  constructor({ price }) {
    this.price = price;
  }
}

const audi = new Car({ price: 36000 });
const bmw = new Car({ price: 64000 });

console.log(Car.checkPrice(audi.price)); // Всё хорошо, цена в порядке.
console.log(Car.checkPrice(bmw.price)); // Внимание! Цена превышает допустимую.
*/
