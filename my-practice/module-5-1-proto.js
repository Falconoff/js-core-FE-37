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
console.log(objA.hasOwnProperty('y'));

objA.y = 10;
console.log('objA:', objA);
console.log(objA.hasOwnProperty('y'));

console.log('objB:', objB);
*/

/*
const Car = function (value) {
  const xyz = 123;
  console.log(this);

  this.a = value;
};

const myCar = new Car(5);
console.log(myCar);

const myCar2 = new Car(10);
console.log(myCar2);
*/

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

const myCar3 = new Car();
console.log(myCar3);

myCar.changePrice(55550);
console.log(myCar);
*/
