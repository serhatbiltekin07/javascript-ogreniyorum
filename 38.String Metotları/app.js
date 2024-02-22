// STRİNG SINIFI METOTLARI

let kurs = "Modern Web Geliştirme Kursu";
let tarih = "2024";
//CHARAT METOT
let karakter = kurs.charAt(5);
console.log(karakter); // "n" harfini verir charAt(5) 5. index deki harfi verir.

//CONCAT METOT

let sonuc = kurs.concat(" ", tarih);
console.log(sonuc); // Modern Web Geliştirme Kursu 2024 çıktısı verir concat() metotu birleştirmek için kullanırız.

//İNDEXOF() METOT

let index = kurs.indexOf("o");
console.log(index); // 1 çıktısı verir yani 1.index i verir. "o" harfi 1. index de olduğunu gösterir.

//LASTINDEXOF() METOT

let index1 = kurs.lastIndexOf("Kursu");
console.log(index1); //22. index e denk geliyor
console.log("-------------------------------------------------");

//toUpperCase() metot

let sonuc1 = kurs.toUpperCase(kurs);
console.log(sonuc1); // sonuc1 değişkeninde ki yazıların hepsini büyük harf e çeviri => MODERN WEB GELIŞTIRME KURSU
console.log("-------------------------------------------------");

//toLowerCase() metot

let sonuc2 = kurs.toLowerCase(kurs);
console.log(sonuc2); //sonuc2 değişkeninde ki yazıların hepsini küçük harf e çeviri => modern web geliştirme kursu
console.log("-------------------------------------------------");

//trim() Metotu ==> kullanıcı boşluk karakteri gönderse bile boşluk karakterleri sağdan ve soldan temizler.

//slice() Metotu ile substring metotları ikiside aynıdır.

console.log(kurs.slice(7, 10)); //7.indexden başla 10. index e kadar git deriz çıktısı şu  şekilde olur == Web
console.log("-------------------------------------------------");

// REPLACE METOT

console.log(kurs);
console.log(kurs.replace("Modern", "Güncel")); // burada "Modern" kelimesi ile "Güncel" kelimesini değiştir derir çıkıtısı şu şekilde =>Güncel Web Geliştirme Kursu
console.log("-------------------------------------------------");

//SPLİT METOT

console.log(kurs);
let dizi = kurs.split(" "); // boşluğa göre bunları dilim dilim yapıp bir dizinin içerisinde koy diyoruz burada
console.log(dizi); // çıktısı = ['Modern', 'Web', 'Geliştirme', 'Kursu']
console.log("-------------------------------------------------");

//STARTSWITH METOT
console.log(kurs);
console.log(kurs.startsWith("M")); // burada "M" harfi ile başlıyor mu başlamıyor mu ona bakıyor. çıktısı = true

console.log("-------------------------------------------------");

//ENDSWITH METOT

console.log(kurs);
console.log(kurs.endsWith("Kursu")); // kelimenin son kelmesi "Kurs" ile mi bitiyor . çıktısı = true
