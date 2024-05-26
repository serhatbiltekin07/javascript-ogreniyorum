//Date kullanımı

let tarih = new Date();
console.log(tarih); //Thu May 16 2024 13:14:48 GMT+0300 (GMT+03:00)

console.log(tarih.getTime()); //1715854542162
console.log(tarih.getFullYear()); //2024
console.log(tarih.getDate()); //16 ay'ın kaçıncı gününü verir
console.log(tarih.getDay()); //4 haftanın gününü verir
console.log(tarih.getHours()); //13
console.log(tarih.getMilliseconds()); //931
console.log(tarih.getMonth()); //4
console.log(tarih.getMinutes()); //19
console.log(tarih.getSeconds()); //22. saniye
console.log(tarih.toLocaleDateString()); //16.05.2024
console.log(tarih.toLocaleTimeString()); //13:21:14
console.log(tarih.toLocaleString()); //16.05.2024 13:22:00
console.log("*****************************************************");
//Set metotları
console.log(tarih); //Thu May 16 2024 13:24:40 GMT+0300 (GMT+03:00)
//tarih.setHours(15);
tarih.setHours(tarih.getHours() + 2); //şuanki saati üzerine 2 saat daha koyuyor
tarih.setDate(24);
tarih.setMonth(11);
tarih.setMinutes(50);
console.log(tarih);
