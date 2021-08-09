// 4 - callback ---------------------------------------
/*
const pizzaPalace = {
  pizzas: ['Ультрасыр', 'Аль Копчино', 'Четыре нарезона'],
  order(pizzaName, onSuccess, onError) {
    console.log(this.pizzas)
    if (this.pizzas.includes(pizzaName)) {
      return onSuccess(pizzaName)
    } else {
      return onError(`В ассортименте нет пиццы с названием ${pizzaName}.`)
    }
  },
}
// Пиши код выше этой строки

// Колбэк для onSuccess
function makePizza(pizzaName) {
  console.log(`Ваш заказ принят. Готовим пиццу ${pizzaName}.`)
  return `Ваш заказ принят. Готовим пиццу ${pizzaName}.`
}

// Колбэк для onError
function onOrderError(error) {
  console.log(`Ошибка! ${error}`)
  return `Ошибка! ${error}`
}

// Вызовы метода с колбэками
pizzaPalace.order('Аль Копчино', makePizza, onOrderError)
pizzaPalace.order('Четыре нарезона', makePizza, onOrderError)
pizzaPalace.order('Биг майк', makePizza, onOrderError)
pizzaPalace.order('Венская', makePizza, onOrderError)
*/

// 7 - call ---------------------------------------
/*
const orders = [
  { email: 'solomon@topmail.ua', dish: 'Burger' },
  { email: 'artemis@coldmail.net', dish: 'Pizza' },
  { email: 'jacob@mail.com', dish: 'Taco' },
];

// const order = {email: 'jacob@mail.com', dish: 'Taco'}

// Пиши код ниже этой строки
function composeMessage(position) {
  console.log('composeMessage called');
  return (`Готовим ${this.dish} для ${this.email}. Ваш заказ ${position}-й в очереди.`);
  // console.log('messages', messages);
  
}

const messages = [];

for(let i = 0; i <orders.length; i +=1) {
  messages.push(composeMessage.call(orders[i], i + 1));
  console.log('i=', i);
}

// composeMessage.call(order, 0);

console.log('messages', messages);
*/

// 10 ---------------------------------------

// an example from the Theory
// const customer = {
//   firstName: 'Jacob',
//   lastName: 'Mercer',
//   getFullName() {
//     return `${this.firstName} ${this.lastName}`;
//   },
// };

// function makeMessage(callback) {
//   // callback() это вызов метода getFullName без объекта
//   console.log(`Обрабатываем заявку от ${callback()}.`);
// }

// makeMessage(customer.getFullName); // Будет ошибка при вызове функции:
/* Uncaught TypeError: Cannot read property 'firstName' of undefined
    at getFullName (hw-04.js:71)
    at makeMessage (hw-04.js:77)
    at hw-04.js:80
*/
// task ---------------------------------------
const service = {
  mailingList: ['mango@mail.com', 'poly@hotmail.de', 'ajax@jmail.net'],
  subscribe(email) {
    this.mailingList.push(email);
    return `Почта ${email} добавлена в рассылку.`;
  },
  unsubscribe(email) {
    this.mailingList = this.mailingList.filter(e => e !== email);
    return `Почта ${email} удалена из рассылки.`;
  },
};

function logAndInvokeAction(email, action) {
  console.log(`Выполняем действие с ${email}.`);
  return action(email);
}

const firstInvoke = logAndInvokeAction(
  'kiwi@mail.uk',
  service.subscribe.bind(service),
);
console.log(firstInvoke);
// Почта kiwi@mail.uk добавлена в рассылку.

console.log(service.mailingList);
/* ['mango@mail.com', 
    'poly@hotmail.de', 
    'ajax@jmail.net', 
    'kiwi@mail.uk']*/
const secondInvoke = logAndInvokeAction(
  'poly@hotmail.de',
  service.unsubscribe.bind(service),
);
console.log(secondInvoke);
// Почта poly@hotmail.de удалена из рассылки.

console.log(service.mailingList); // ['mango@mail.com', 'ajax@jmail.net', 'kiwi@mail.uk']
