function showThis() {
  console.log('this in showThis: ', this);
}

const user = { name: 'Mango' };

showThis(); // undefined

// user.showThis(); // так вызвать нельзя - user.showThis is not a function
// сначала записать новый метод объекта, а только потом вызывать!
user.showContext = showThis;
user.showContext(); // {name: "Mango", showContext: ƒ}

/*

 ttttt   h   h   i   sssss
   t     h   h   i   s
   t     hhhhh   i   sssss
   t     h   h   i       s
   t     h   h   i   sssss

*/

// ----------- call ------------------
const greet = function (n = 'user') {
  return `Wellcome to ${this.name} hotel, ${n}!`;
};

const hotel = { name: 'Resort Hotel' };
const motel = { name: 'Hotel-Motel' };

console.log(greet.call(hotel)); // "Wellcome to Resort Hotel!"
console.log(greet.apply(hotel)); // "Wellcome to Resort Hotel!"
console.log(greet.call(motel, 'Anna'));
