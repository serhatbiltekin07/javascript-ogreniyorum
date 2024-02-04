// var - let - const

//Değişken nedir ?
/*
var/let/const degiskenIsmi = degikenDegeri;

let sayi = 10;
*/

//var : function scope --> ram bellekte çok fazla yer kaplar.
//let/const : block scope özelliğine sahiptir.

function selamVer() {
  var selam = "Herkese Selam"; // function scope
  if (true) {
    var b = 10;
  }
  console.log(b);
  console.log(selam);
}
selamVer();

// var a = 5;
// var a = 10;
// console.log(a);

if (true) {
  let a = 5;
  //let a = 10;
  console.log(a);
}

//LET &  CONST arasındaki fark ?

//const (constant) : sabit , değişmez

const a = 20;
// a = 15;
console.log(a);

let b = 5;
b = 7;
b = 12;
console.log(b);

//değişmez const ile
// const user = {
//   usurname: "Biltekin",
//   password: "123",
// };
// user = { age: 23 };
// console.log(user);

//let ile değişir
let user = {
  usurname: "Biltekin",
  password: "123",
};
user = { age: 23 };
console.log(user);
