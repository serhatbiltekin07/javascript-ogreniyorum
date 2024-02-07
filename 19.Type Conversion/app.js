/*
    ----------------------TÜR DÖNÜŞÜMLERİ----------------
    string, numbers, booleans, undefined, and null
    object, function
*/

let a = 5;
let b = "10";
//console.log(a+b); // oluduğunda a number tipinde , b ise string tipinde olduğundan --> 510 çıktısı verir yani 5 ile 10'u bileştirir biz bunu 5+10=15 çevirmek istediğimizde ise aşağındaki gibi yapacağız

//String veri tipinden number veri tipine dönüştürmek

let c = Number(b); //b'i stringden number'a dönüştürüp c'ye atarız.
console.log(a + c); //number tipinde  oluşur 5+10 = 15 çıktıs verir.

//parseInt()

let x = 9;
let y = parseInt("11");
console.log(x + y); // 9+11= 20

//number tipinden string veri tipine dönüştürmek

let s = String(35);
console.log(typeof s); //string
console.log(s); //35

let sonuc = String(true); // boolean tipindeki değeri string tipine çeviririz
console.log(typeof s); //string
console.log(sonuc);

//object tipi

let rakamlar = [1, 2, 3, 4, 5];
console.log(typeof rakamlar); //object
