let sayilar = [0, 1, 2, 3, 4, 5, "Biltekin", 7, 8, 9, "Ali"];
//console.log(sayilar[6]);//Biltekin çıtısı verir.
sayilar[sayilar.length - 1] = "Ahmet"; // 10.index son index deki "Ali" nin yerine "Ahmet" i koy demektir.
console.log(sayilar[10]); // çıktı --> "Ahmet"

console.log("-------------------------------------------------");

let isimler = ["Biltekin", "Enes", "Kübra", "Yusuf"];
isimler[2] = "Yakub"; //burada Enes' Yakub ile değiştirdik.
console.log(isimler);

console.log("-------------------------------------------------");

let karisikDizi = [1, "Biltekin", 5.8, true, null, undefined];
console.log(karisikDizi[3]); //true çıktısı verir.

console.log("-------------------------------------------------");

let personel1 = {
  isim: "Biltekin",
  soyisim: "Kurtuluş",
  yas: 26,
};
let personel2 = {
  isim: "Aytekin",
  soyisim: "Karpuz",
  yas: 30,
};

let rakamlar = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

let personelArray = [personel1, personel2, 1, true, rakamlar];
console.log(personelArray[4][5]); // çıktısı --> personelArray içerisinde 4.index olan rakamlara git . 4. index olan rakamlar dizisindeki 5.index'i yazdır ---> 5 dir.

console.log("-------------------------------------------------");

//2 tür dizi oluştuma vardır
let dizi1 = ["Biltekin", "Aytekin"]; //burada direk tanımlayarak
let dizi2 = new Array("Biltekin", "Aytekin"); //burada ise nesne tanımlayarak dizi oluşuturuyoruz
