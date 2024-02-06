// BEDEN KİTLE ENDEKSİ HESAPLAMA
let kilo = Number(prompt("Kilonuzu giriniz :"));
let boy = Number(prompt("Boyunuzu giriniz metre cinsinden:"));

let sonuc = kilo / (boy * boy);

if (sonuc < 18.5) {
  console.log("İdeal kilonun altında" + sonuc);
} else if (sonuc >= 18.5 && sonuc <= 24.9) {
  console.log("İdeal kiloda" + sonuc);
} else if (sonuc >= 25 && sonuc <= 29.9) {
  console.log("İdeal kilonun üstünde " + sonuc);
} else if (sonuc >= 30 && sonuc <= 39.9) {
  console.log("İdeal kilonun çok üstünde (obez)" + sonuc);
} else if (sonuc >= 40) {
  console.log("İdeal kilonun çok üstünde (morbib obez)" + sonuc);
}
