// Parametreli metot tanımlamak

function yazdir(isim, soyisim) {
  console.log(isim + " " + soyisim);
}
yazdir("Biltekin", "Kurtuluş");
yazdir("Serhat", "alptekin");

function cube(sayi) {
  console.log(sayi * sayi * sayi);
}

cube(5); //5*5*5=125

let yas = Number(prompt("Yaşınızı giriniz :"));

function kontrolEt(yas) {
  if (yas > 18) {
    console.log("Ehliyeti alabilirsiniz");
  } else {
    console.log("Ehliyeti alamazsınız!!");
  }
}
kontrolEt(yas);
