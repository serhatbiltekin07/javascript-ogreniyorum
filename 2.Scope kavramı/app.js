/*
------------------SCOPE (KAPSAM)-----------
    ->Global scope : her yerden erişebilirsin demek bu aslında.
    ->Function scope
    ->Block scope

*/

// var degiskenIsmi = 10;
// console.log(degiskenIsmi);

var a = 5; // global değişken
// siz buna her yerden erişebilirsiniz demek .

// if (true) {
// }
// function method1() {
//   console.log(a);
// }
// method1();

//function scope kıvırcık parantez içerisinden erişebiliriz.
// function method1() {
//   var sayi = 10;
//   console.log(sayi);
// }
// method1();

// block scope (if, while , for gibi olan yerlere biz block scope oluyor.)

function method1() {
  if (true) {
  }
  while (true) {}

  for (let i = 0; i <= 10; i++) {}
}
