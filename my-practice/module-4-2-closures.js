/* const createCounter = function () {
 
//  Локальная переменная privateValue доступна только в замыкании.
//  Получить к ней доступ во внешнем коде невозможно.

  let privateValue = 0;
  console.log('privateValue', privateValue);

  const increment = function () {
    console.log('privateValue in increment', privateValue);
    privateValue += 1;
    console.log('privateValue++', privateValue);
    return privateValue;
  };

  return {
    increment,
  };
};

const counterA = createCounter();
counterA.increment(); // 1
counterA.increment(); // 2
console.dir(counterA);

const counterB = createCounter();
counterB.increment(); // 1
counterB.increment(); // 2
counterB.increment(); // 3
counterB.increment(); // 4

console.dir(counterB);
*/

// ----------------------------------
// https://medium.com/@sshambir/%D0%BE%D1%81%D0%B2%D0%B0%D0%B8%D0%B2%D0%B0%D0%B5%D0%BC-%D0%B7%D0%B0%D0%BC%D1%8B%D0%BA%D0%B0%D0%BD%D0%B8%D1%8F-%D0%B2-javascript-5b83267ef7d1
var x = 10;
function foo(a) {
  console.log('foo start');
  var b = 20;

  function bar(c) {
    console.log('bar start');

    var d = 30;
    return boop(x + a + b + c + d);
  }

  function boop(e) {
    console.log('boop start');

    return e * -1;
  }

  return bar;
}

var moar = foo(5); // Closure
/* 
  The function below executes the function bar which was returned 
  when we executed the function foo in the line above. The function bar 
  invokes boop, at which point bar gets suspended and boop gets push 
  onto the top of the call stack (see the screenshot below)
*/
console.log('rez:', moar(15));
