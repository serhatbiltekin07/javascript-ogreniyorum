// ASAL SAYI BULMA UYGULAMASI

let sayi = Number(prompt("Lütfen bir sayı giriniz :"));
let sonuc = true;

for (let i = 2; i <= Math.floor(sayi / 2); i++) {
  if (sayi % i == 0) {
    //Asal değildir
    sonuc = false;
    break;
  }
}
if (sonuc) {
  alert(sayi + " asaldır.");
} else {
  alert(sayi + " asal değildir.");
}
