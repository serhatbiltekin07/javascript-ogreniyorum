//DİZİ METOTLARI

/*
push    : Dizinin sonuna eleman ekler, dizinin uzunluğunu döner.
unshift : Dizinin başına eleman ekler, eleman sayısını geriye döner.

pop     : Dizinin sonundan eleman siler, eleman sayısını döner.
shift   : Dizinin başında eleman siler, eleman sayısını dçner.

splice(index, incdex) : Eleman eklemek ve silmek için kullanılır.

toString :  Diziyi stringe çevirebilir.
join :  Diziyi stringe çevirir. Farkı ise araya eleman ekleyebiliriz.

concat  :Dizileri birleştirmek için kullanılırç
slice(dilimlemek) :Diziyi istenilem yerden bölüp yeni bir dizi oluşturur.
length  : Dizinin uzunluğunu verir.
reverse : Dizinin elemanlarını ters çevirir.
splith(Bölmek) :Belirli bir ifadeye göre bölüp diziye çevirmek.
indexOf : Eleman index numrasını verir.
includes : Verilen elemanı içeriyor mu ona bakar

*/

let arabalar = ["Bmw", "Toyata", "Renault", "Mercedes", "Porsche"];
// PUSH METOT
console.log(arabalar.length); //dizi uzunluğu 5
let diziUzunluk = arabalar.push("Opel"); //push metodu ile hem yeni eleman ekledik hemde dizi uzunluğu arttı
console.log(diziUzunluk); // yeni dizi uzunluğu 6 oldu.

console.log("-----------------------------------------------");
//UNSHIFT METOT
arabalar.unshift("Hundai");
console.log(arabalar); // dizinin başına "Hundai"'yi ekledik.
console.log("-----------------------------------------------");

//POP METOT
let silinenEleman = arabalar.pop();
console.log(arabalar); //"Opel" elemanını sildi. en son eleman Porshe oldu 6  elemanlı şekilde .
console.log(silinenEleman); //silinen elemanı bize döner -->"Opel"dir.

console.log("-----------------------------------------------");
//SHİFT METOT
arabalar.shift(); //Dizinin başında "Hundai" var onu silers
console.log(arabalar); // Yeni dizinin başındaki eleman --> "Bmw" olur

console.log("-----------------------------------------------");

//SPLİCE METOT
console.log(arabalar); // eski çıktı--> ['Bmw', 'Toyata', 'Renault', 'Mercedes', 'Porsche']
arabalar.splice(0, 0, "Hundai"); // burada biz bu metot ile dizinin 0.index'ine herhangi bir dizi silmeden eleman koy dedik aslında.

console.log(arabalar); //yeni çıktı-->['Hundai', 'Bmw', 'Toyata', 'Renault', 'Mercedes', 'Porsche']
console.log("-----------------------------------------------");

//TOSTRİNG METOT
console.log(typeof arabalar); // object

let stringArabalar = arabalar.toString();
console.log(typeof stringArabalar); //string e çevirdi object'i
console.log("-----------------------------------------------");

//JOIN METOT
let stringArabalar1 = arabalar.join("-");
console.log(stringArabalar1); //Hundai-Bmw-Toyata-Renault-Mercedes-Porsche --> çıktısı verir.

console.log("-----------------------------------------------");

//CONCAT METOT --> İKİ DİZİYİ BİRLEŞTİRİR.

let arabalar2 = ["Bmw", "Toyata", "Renault", "Mercedes", "Porsche"];
let arabalar3 = ["Hundai", "Fiat"];

let birlesmisDizi = arabalar2.concat(arabalar3);
console.log(birlesmisDizi); //çıktısı --> ['Bmw', 'Toyata', 'Renault', 'Mercedes', 'Porsche', 'Hundai', 'Fiat']
console.log("-----------------------------------------------");

//SLİCE METOT
console.log(arabalar);
let ayriDizi = arabalar.slice(2);
console.log(ayriDizi); //['Toyata', 'Renault', 'Mercedes', 'Porsche']

console.log("-----------------------------------------------");

//LENGTH OZELLİK
//console.log(arabalar.length);

// REVERSE METOT

console.log(arabalar); // ['Hundai', 'Bmw', 'Toyata', 'Renault', 'Mercedes', 'Porsche']
let tersCevirme = arabalar.reverse();
console.log(tersCevirme); //['Porsche', 'Mercedes', 'Renault', 'Toyata', 'Bmw', 'Hundai']
console.log("-----------------------------------------------");

//SPLİTH(Bölmek)

let isimler = "Biltekin,Ali,Veli";
let isimlerDizi = isimler.split(",");
console.log(isimlerDizi); //['Biltekin', 'Ali', 'Veli']
