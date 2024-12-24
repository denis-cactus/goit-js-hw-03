// // function sum(a, b) {
// //   console.log(arguments);
// //   return a + b;
// // }

// // sum(2, 5);
// function sum() {
//   let total = 0;
//   for (let i = 0; i < arguments.length; i++) {
//     total += arguments[i];
//   }
//   return total;
// }
// console.log(sum(3, 5)); // 8
// console.log(sum(1, 2, 3, 4, 5, 8, 9, 65, 423));

// function createReversedArray() {
//   const args = Array.from(arguments);
//   return args.reverse();
// }
// console.log(createReversedArray(1, 2, 3));
/*
 *   Функція calculateTax(amount, taxRate) оголошує два параметри:
 *   amount - число, сума від якої потрібно обчислити податок. Обов'язковий параметр.
 *   taxRate - число, податкова ставка. Необов'язковий параметр. За замовчуванням його значення має бути 0.2.
 *   Доповни код функції так, щоб вона повертала суму податку - результат множення суми на податкову ставку.

 */
// function calculateTax(amount, taxRate = 0.2) {
//   return amount * taxRate;
// }
// console.log(calculateTax(100, 0.1));
// const multiply = function (x, y, z) {
//   console.log(x * y * z);
// };
// console.log(function calculateTax(amount, taxRate = 0.2) {
//   return amount * taxRate;
// }
// console.log(calculateTax(100, 0.1));
function bar() {
  console.log('bar');
}

function baz() {
  console.log('baz');
}

function foo() {
  console.log('foo');
  bar();
  baz();
}

foo();
