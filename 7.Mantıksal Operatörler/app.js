// ------------MANTIKSAL OPERATÖRLER---------------

/*
    && : VE OPERATÖRÜ
    || : VEYA OPERATÖRÜ
    ! : DEĞİL OPERATÖRÜ
*/

// && : VE OPERATÖRÜ

let yas = 20;
let para = 3500;
let saglikliMi = false;

console.log(yas > 18 && para > 3000 && saglikliMi == true); // false çıktısı verir.Nedeni yas, para değerleri true döner ama saglikliMi değeri false döndüğü için tamamı false değeri çıksı verir.

// || : VEYA OPERATÖRÜ
console.log(5 > 3 || 2 > 3); //true çıktısı verir. Bir tane değer true ise sonucu true çıktısı verdirir.

// ! : DEĞİL OPERATÖRÜ

console.log(!(5 > 3)); // false çıktısı verir.Nedeni 5>3 den büyüktür true ama değil operatörü eklediğimizde bu değeri false'a döndürür.
