/*! Problem 1 
Multiples of 3 or 5

If we list all the natural numbers below 10 that are multiples of 3 or 5 , we get 3,5,6 and 9. The sum of these multiples is 23. Find the sum of all the multiples of 3 or 5 below 1000.

*/
let a = [];
let total = 0;
for (let i = 1; i < 1000; i++) {
  if (i % 5 == 0 || i % 3 == 0) {
    a.push(i);
    total += i;
  }
}
console.log("1000'in altındaki 3 veya 5'in tüm katları:", a);
console.log("Toplam:", total);
