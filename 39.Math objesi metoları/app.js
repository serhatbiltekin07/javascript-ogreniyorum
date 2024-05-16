//Math Sınıfı Metotları
/*
1- Floor--> noktadan sonrasını alamaz
2- Ceil--> 3.4 yukarı yuvarlar. diyelim bunu 4'e yuvarlar
3- Round--> 3.15' aşaığı yuvarladı.Yani 3 yaptı 3.50 ve üstünü 4'e yuvarlar
4-Max
5-Min
6-Random
7-Abs--> Mutlak değerini alırız bir sayını
8-Sqrt--> karekök değerini verir
9-Pow--> üslü sayı gibi 2^3= 8 gibi
---> PI sayisi

*/

let a = 3.15;
//console.log(Math.floor(a)); //3
//console.log(Math.ceil(a)); //4

//console.log(Math.round(a)); //3
console.log(Math.max(1, 2, 3, 4, 50)); // burada ki en büyük değeri döner 50 gibi
console.log(Math.min(10, 0, 4, -1)); // burada ki en küçük değeri döner -1 gibi
console.log(Math.abs(-12)); // mutlak değerini alır 12 olarak çıktı verir
console.log(Math.sqrt(81)); // karekökünü alıp 9 çıktısı verir
console.log(Math.pow(2, 3)); //8
console.log(Math.PI); //3.141592653589793
console.log(Math.random()); // rastgele 0 ile 1 arasında bir değer üretir.Mesela 0 ile 100 arasında bir değer üretebiliriz ama virgüll bir sayı olur  zaman 100 ile çarparız--> Math.random()*100 gibi

console.log(Math.floor(Math.random() * 100)); // bu rastgele 0 ile 100 arasında bir değer üretir virgüllü olmaz yani tam sayı değer çıktısı verir, rastgele bir şekilde
