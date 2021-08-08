// 4 - callback
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

// 7 - call

const orders = [
  { email: 'solomon@topmail.ua', dish: 'Burger' },
  { email: 'artemis@coldmail.net', dish: 'Pizza' },
  { email: 'jacob@mail.com', dish: 'Taco' },
];

// const order = {email: 'jacob@mail.com', dish: 'Taco'}

// Пиши код ниже этой строки
function composeMessage(position) {
  console.log('composeMessage called');
  return (`Готовим ${this.dish} для ${this.email}. Ваш заказ ${position + 1}-й в очереди.`);
  // console.log('messages', messages);
  
}

const messages = [];

for(let i = 0; i <orders.length; i +=1) {
  messages.push(composeMessage.call(orders[i], i));
  console.log('i=', i);
}

// composeMessage.call(order, 0);

console.log('messages', messages);
