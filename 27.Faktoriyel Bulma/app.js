// FAKTORİYEL HESAPLAMA

//4! = 4.3.2.1 = 24
//5! = 5.4.3.2.1 = 1

let sayi = Number(prompt("Bir sayı giriniz :"));
let carpim = 1;
for (let i = 1; i <= sayi; i++) {
  carpim = carpim * i;
}
alert("Sonuç : " + carpim);
