// CLOSURE - способность функции использовать переменные из области,
// где она была объявлена

/*
// document.getElementById('dec')
document.getElementById('dec').addEventListener('click', () => {
  let count = productCounter.decrement(1);
  console.log(count);

  document.getElementById('count').textContent = count;
});
// document.getElementById('inc')
document.getElementById('inc').addEventListener('click', () => {
  let count = productCounter.increment(1);
  console.log(count);

  document.getElementById('count').textContent = count;
});

const productCounter = createCounter();

// productCounter.increment(1);
// productCounter.increment(1);
// productCounter.increment(10);
// productCounter.increment(1);

// productCounter.decrement(1);
// productCounter.decrement(10);
// productCounter.decrement(1);

function createCounter() {
  // LEXICAL ENVIRONMENT - start
  let current = 0;
  // 0 +5
  // 5 +5

  console.log(current);

  function increment(value) {
    console.log('current до увеличения', current);
    return (current += value);
  }

  function decrement(value) {
    // console.log(current)
    console.log('current до уменьшения', current);

    if (current <= 0) return (current = 0);
    return (current -= value);
  }
  // LEXICAL ENVIRONMENT - end

  // ф-ция createCounter возвращает на место своего вызова ф-ции
  // increment и decrement, чтоб можно было с ними работать
  // т.к. их 2, то в {}
  return { increment, decrement };
}
// console.log(current); // НЕ ДОСТУПНА ЗА ПРЕДЕЛАМИ ОБЛАСТИ ВИДИМОСТИ
// ГДЕ СОЗДАНА ()
*/

// ----------- ф-ция изменения цвета ----------------------
/*
function changeColor() {
  let color = 'green';

  function getNewColor(value) {
    // console.log(color)
    return (color = value);
  }

  function resetColor() {
    return (color = 'green');
  }

  return { getNewColor, resetColor };
}

const x = changeColor();

let color = x.getNewColor('red');
console.log(color);
color = x.getNewColor('blue');
console.log(color);

// reset to default
color = x.resetColor();
console.log(color);
*/

// CARRING

// рассмотрим ситуацию, когда у пользователя есть личный кабинет
// у него в профиле есть информация о том, что он имеет дисконт,
// скажем 10%.
// Т.о. все расчеты товаров должны быть произведены с учетом такой скидки

// можно создать функцию
function getPrice(discount, price) {
  return (price * (100 - parseInt(discount))) / 100;
}
// console.log(getPrice('10%', 10))
// console.log(getPrice('10%', 100))
// console.log(getPrice('10%', 1000))

// но в таком случае при расчете суммы заказа постоянно придется
// передавать в вызов одно и то же значение скидки

// перепишем нашу функцию через каррирование
function getTotalPrice(discount) {
  return price => {
    return (price * (100 - parseInt(discount))) / 100;
  };
}
const discount10 = getTotalPrice('10%');
console.log(discount10);
console.log('discount 10%:', discount10(10));
// console.log('discount 10%:', discount10(100))
// console.log('discount 10%:', discount10(1000))

const discount15 = getTotalPrice('15%');
// console.log(discount15)
// console.log('discount 15%:', discount15(10))
// console.log('discount 15%:', discount15(100))
// console.log('discount 15%:', discount15(1000))
