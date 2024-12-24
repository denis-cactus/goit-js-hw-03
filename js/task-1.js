// function calculateTotalPrice(order) {
//   let totalPrice = 0;
//   for (let item of order) {
//     totalPrice += item;
//   }
//   return totalPrice;
// }
// console.log(calculateTotalPrice([10, 25, 56, 45]));

// let num = 10;
// for (let i = 0; i <= num; i++) {
//   console.log(i);
// }
function slugify(text) {
  return text.toLowerCase().trim().replace(/\s+/g, '-');
}

console.log(slugify('Arrays for beginners')); // "arrays-for-beginners"
console.log(slugify('English for developer')); // "english-for-developer"
console.log(slugify('Ten secrets of JavaScript')); // "ten-secrets-of-javascript"
console.log(slugify('How to become a JUNIOR developer in TWO WEEKS')); // "how-to-become-a-junior-developer-in-two-weeks"
