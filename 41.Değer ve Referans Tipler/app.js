//DEĞER VE REFERANS TİPLER

let isim = "Biltekin";
console.log(typeof isim); // string --> değer tipdir.

// Burada  yaptığımız şey değer tiplerdir.Birinde yaptığımız değişiklik diğerini etkilemez
let a = 7;
let b = a;
console.log("a:", a);
console.log("b:", b);
console.log("******************");

b = 10;
console.log("a:", a);
console.log("b:", b);

let dizi1 = [1, 2, 3];
let dizi2 = [1, 2, 3];
console.log("**********************************************");
if (dizi1 == dizi2) {
  console.log("eşittir");
} else {
  console.log("eşit değildir");
}
//eşit değildir çıktı verir bellekteki adresileri farklı olmasından dolayı eşit değildirler dizi1 ve dizi2 ler.

console.log("**********************************************");
console.log(typeof dizi1); //object--> referans tipdir.
//let dizi2 = dizi1;
console.log(dizi1); //[1, 2, 3]
console.log(dizi2); //[1, 2, 3]
