//let sayi = prompt("Lütfen 1 ile 5 arasında bir sayı giriniz");

// switch (
//   sayi //"1"  "2"  "3"  "4"  "5" ...
// ) {
//   case "1":
//     //kodlarımız
//     console.log("Girilen sayı 1'dir.");
//     break;

//   case "2":
//     console.log("Girilen sayı 2'dir.");
//     break; // burada break ile kırarız sadece bir case çalışır if else mantığı kısaca

//   case "3":
//     console.log("Girilen sayı 3'dür.");
//     break;
//   case "4":
//     console.log("Girilen sayı 4'dür.");
//     break;

//   case "5":
//     console.log("Girilen sayı 5'dir.");
//     break;

//   default:
//     console.log("Girilen sayı 1 ile 5 arasında olmalıdır!!");
// }

let yeniSatir = "\r\n";
let metin =
  "1-Pazartesi" +
  yeniSatir +
  "2-Salı" +
  yeniSatir +
  "3-Çarşamba" +
  yeniSatir +
  "4-Perşembe" +
  yeniSatir +
  "5-Cuma" +
  yeniSatir +
  "6-Cumartesi" +
  yeniSatir +
  "7-Pazar" +
  yeniSatir +
  "Lütfen bir seçim yapınız :";

let deger = prompt(metin);

switch (deger) {
  case "1":
    console.log("Pazartesi");
    break;
  case "2":
    console.log("Salı");
    break;
  case "3":
    console.log("Çarşamba");
    break;
  case "4":
    console.log("Perşembe");
    break;
  case "5":
    console.log("Cuma");
    break;
  case "6":
    console.log("Cumartesi");
    break;
  case "7":
    console.log("Pazar");
    break;

  default:
    console.log("Girilen değer 1 ile 7  olmalıdır!!");
    break;
}
