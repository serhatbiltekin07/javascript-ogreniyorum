//Kelime sayısı uygulaması

let metin = "Şuanda İstanbulda'da Javascript çalışmaktayım.";

let harf = prompt("Harfi giriniz:");

let sonuc = bul(harf);
alert("Harf Sayısı : " + sonuc);

function bul(harf) {
  let toplam = 0;
  for (let i = 0; i < metin.length; i++) {
    if (metin.charAt(i).toLowerCase() === harf.toLowerCase()) {
      toplam += 1;
    }
  }
  return toplam;
}
