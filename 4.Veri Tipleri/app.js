/*
? Veri Tipleri


1-String
2-Number
3-Boolean
4-Null
5-Undefined
6-Object
7-Function
 */

let isim = "Biltekin Kurtuluş 26 yaşındadır.";
console.log(isim);
console.log(typeof isim);
console.log("----------------------");

//--------------NUMBER VERİ TİPİ----------------

let number1 = 10.7;
let number2 = 5.3;
console.log(number1 + number2);
console.log(typeof number1);
console.log("----------------------");

// let a = "5";
// console.log(a);
// console.log(typeof a);
console.log("----------------------");

//--------------BOOLEAN VERİ TİPİ----------------

// boolean : true ve  false dan oluşur.

console.log(5 > 2); //true
console.log(5 > 8); // false

console.log("----------------------");

let a = 3;
let b = 12;

let sonuc = a + b;
console.log(sonuc > 18); // false çıktısı verir.
console.log(sonuc > 12); // true çıktısı verir.
console.log(sonuc == 15); // true çıktısı verir.
console.log(sonuc != 15); // false çıktısı verir.

console.log("----------------------");

//--------------NULL VERİ TİPİ----------------
let c = null;
c = 27;
console.log(c); // null --> 27

//--------------UNDEFİNED VERİ TİPİ----------------
console.log("----------------------");

let m;
console.log(m); // undefined
console.log("----------------------");

// primitive ve referans tipler nedir, farkları nelerdir* ileriki konularda anlatacağım.
//--------------OBJECT VERİ TİPİ----------------

let insan = {
  name: "Bİltekin",
  lastName: "Kurtuluş",
  age: 26,
};
console.log(insan); //{name: 'Bİltekin', lastName: 'Kurtuluş', age: 26}
console.log(typeof insan); //object

let rakamlar = [1, 2, 3, 4, 5];
console.log(typeof rakamlar); //object

//--------------FUNCTİON VERİ TİPİ----------------
console.log("----------------------");

let func = function () {
  console.log("Merhaba");
};
func(); // Merhaba
console.log(typeof func);
