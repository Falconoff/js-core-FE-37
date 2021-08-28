/*
const objC = {
  z: 3,
};
console.log('objC:', objC);

const objB = Object.create(objC);
console.log('objB:', objB);
objB.y = 2;
console.log('objB:', objB);

const objA = Object.create(objB);
console.log('objA:', objA);
objA.x = 1;
console.log('objA:', objA);
console.log(objA.hasOwnProperty('x'));
console.log(objA.hasOwnProperty('y'));

objA.y = 10;
console.log('objA:', objA);
console.log(objA.hasOwnProperty('y'));

console.log('objB:', objB); // {y: 2}
console.log('objB:', objB.__proto__); // {z: 3}
console.log(Object.getPrototypeOf(objB)); // == objB.__proto__
*/

// -----------------------------------------
/*
const Guest = function (name, room, age) {
  this.name = name;
  this.room = room;
  this.age = age;
};
console.dir(Guest.prototype);

// добавляем в объект prototype метод showGuestInfo, который будет доступен
// по ссылке абсолютно всем объектам, созданным через new Guest(...)
Guest.prototype.showGuestInfo = function () {
  console.log(`name - ${this.name}, age - ${this.age}`);
};

const myOdj = new Guest('Mango', 30, 25);
console.log(myOdj); // {name: "Mango", room: 30, age: 25}

const myObj2 = new Guest('Poly', 7, 34);
console.log(myObj2); // {name: "Poly", room: 7, age: 34}

myObj2.showGuestInfo(); // name: Poly, age: 34
*/

// ------------------------------------------

// const Car = function (value) {
//   const xyz = 123;
//   console.log(this);

//   this.a = value;
// };

// const myCar = new Car(5);
// console.log(myCar);

// const myCar2 = new Car(10);
// console.log(myCar2);

/*
const Car = function ({ brand, model, price } = {}) {
  this.brand = brand;
  this.model = model;
  this.price = price;
};

Car.prototype.changePrice = function (newPrice) {
  this.price = newPrice;
};

const myCar = new Car({ brand: 'BMV', model: 'X6', price: 50000 });
console.log(myCar);

const myCar2 = new Car({ brand: 'Audi', model: 'Q3', price: 35000 });
console.log(myCar2);

// const myCar3 = new Car();
// console.log(myCar3);

myCar.changePrice(55550);
console.log(myCar);
*/
