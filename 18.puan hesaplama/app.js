/*
    1-Türkçe 40 ---> 4 puan
    2-Matematik40---> 4 puan
    3-Sosyal 20---> 4 puan
    4-Fen 20---> 4 puan

    ----100 puanı ösym veriyor.
    ----okul puanı max 60


*/
let turkceDogru,
  turkceYanlis = 0;
let matDogru,
  matYanlis = 0;
let sosyalDogru,
  sosyalYanlis = 0;
let fenDogru,
  fenYanlis = 0;

let okulPuani = 0;

let yeniSatir = "\r\n";

let mesaj =
  "TYT Puan Hesaplamasına Hoşgeldiniz!" +
  yeniSatir +
  "1-Puan Hesapla" +
  yeniSatir +
  "2-Çıkış Yap";

//alert(mesaj);

let secim = prompt(mesaj);

switch (secim) {
  case "1":
    okulPuani = Number(prompt("Okul Puanızı Giriniz :"));
    turkceDogru = Number(prompt("Türkçe Doğru Sayısı"));
    turkceYanlis = Number(prompt("Türkçe Yanlış Sayısı"));

    matDogru = Number(prompt("Matematik Doğru Sayısı"));
    matYanlis = Number(prompt("Matematik Yanlış Sayısı"));

    sosyalDogru = Number(prompt("Sosyal Doğru Sayısı"));
    sosyalYanlis = Number(prompt("Sosyal Yanlış Sayısı"));

    fenDogru = Number(prompt("Fen Doğru Sayısı"));
    fenYanlis = Number(prompt("Fen Yanlış Sayısı"));

    let dogruSayi = turkceDogru + matDogru + sosyalDogru + fenDogru;
    let yanlisSayi = turkceYanlis + matYanlis + sosyalYanlis + fenYanlis;
    let kalanDogruSayisi = dogruSayi - yanlisSayi / 4;
    let puan = kalanDogruSayisi * 4 + 100 + okulPuani;

    alert("TYT Puanınız :" + puan);
    break;
  case "2":
    alert("Çıkış yapıldı!!!");
    break;
  default:
    alert("Lütfen geçerli değer giriniz");
    break;
}
