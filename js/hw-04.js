const pizzaPalace = {
  pizzas: ['Ультрасыр', 'Аль Копчино', 'Четыре нарезона'],
  order(pizzaName, onSuccess, onError) {
    console.log(this.pizzas)
    if (this.pizzas.includes(pizzaName)) {
      onSuccess(pizzaName)
    } else {
      onError(`В ассортименте нет пиццы с названием ${pizzaName}.`)
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
