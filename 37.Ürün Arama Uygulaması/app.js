// kullanıcı burada urun aradığında urunun adı fiyatı kategorisi çıktı olarak veren bir uygulama yaptık.

let urun1 = {
  isim: "Lenovo LOQ 15IRH8 ",
  Kategori: "Teknoloji",
  fiyat: 27.579,
};
let urun2 = {
  isim: "Hp Victus 16-S0050NT ",
  Kategori: "Teknoloji",
  fiyat: 36.999,
};
let urun3 = {
  isim: "Casper Excalibur G870.1245-BFA0X-B ",
  Kategori: "Teknoloji",
  fiyat: 26.799,
};
let urun4 = {
  isim: "Huawei Matebook D16 2024  ",
  Kategori: "Teknoloji",
  fiyat: 21.999,
};
let urun5 = {
  isim: "Dell Inspiron 3520 Intel  ",
  Kategori: "Teknoloji",
  fiyat: 14.799,
};
let urun6 = {
  isim: "Asus ROG Strix G16  ",
  Kategori: "Teknoloji",
  fiyat: 53.121,
};

let urunler = [urun1, urun2, urun3, urun4, urun5, urun6];
let filtreliUrunler = [];
let kullaniciUrunIsmi = prompt("Bir ürün ismi giriniz :");

filtreliUrunlerDoldur(urunler);
filtreliUrunlerYazdir(filtreliUrunler);

function filtreliUrunlerDoldur(urunler) {
  urunler.forEach(function (urun) {
    if (urun.isim.toUpperCase().includes(kullaniciUrunIsmi.toUpperCase(), 0)) {
      filtreliUrunler.push(urun);
    }
  });
}
function filtreliUrunlerYazdir(urunler) {
  urunler.forEach(function (urun) {
    console.log("-----------------------------------------------");
    console.log("|" + urun.isim + "|" + urun.fiyat + "|" + urun.Kategori);
    console.log("-----------------------------------------------");
  });
}
