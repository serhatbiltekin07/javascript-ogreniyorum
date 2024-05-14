//1-) prompt(“Enter your age:”) ile kullanıcı girdisi alın. Kullanıcı 18 veya daha büyükse, geri bildirimde bulunun:'Sürecek kadar yaşlısınız', ancak 18 değilse, 18 yaşına girmesi gereken yıl sayısını beklemeye başlayarak başka bir geri bildirim verin.

let age = prompt("Yaşınızı giriniz:");
if (age > 18) {
  console.log("Sürecek kadar yaşlısınız");
} else {
  console.log("Araba sürmek için", 18 - age, "yılınız kaldı");
}

//2-) if… else kullanarak myAge ve yourAge değerlerini karşılaştırın. Karşılaştırmaya dayanarak ve sonucu kimin daha yaşlı olduğunu (ben veya siz) belirterek konsola kaydedin. Yaşı girdi olarak almak için komut prompt(“Enter your age:”) kullanın.

let myAge = parseInt(prompt("Benim yaşım:"));
let yourAge = parseInt(prompt("Senin yaşın:"));
if (myAge > yourAge) {
  let sonuc = myAge - yourAge;
  10;
  console.log(`Ben sende ${sonuc} büyüğüm`);
} else if (yourAge > myAge) {
  let a = yourAge - myAge;
  console.log(`Sen benden ${a} büyüksün`);
} else {
  console.log("aynı yaştayız");
}

//3-)a, b'den büyükse, 'a b'den büyüktür', aksi takdirde 'a, b'den küçüktür' döndürür. şekilde uygulamaya çalışın

let a = 5;
let b = 2;
if (a > b) {
  console.log("a>b den büyüktür");
} else {
  console.log("a<b den küçüktür");
}

//4-) Çift sayılar 2'ye tam bölünür kalan sıfırdır. Bir sayının çift olup olmadığını veya JavaScript kullanıp kullanmadığını nasıl kontrol edersiniz?

let sayi = parseInt(prompt("Bir sayı giriniz:"));
if (sayi % 2 == 0) {
  console.log(`${sayi} çift bir sayıdır.`);
} else {
  console.log(`${sayi} tek bir sayıdır.`);
}

//Egzersiz: Seviye 2

//1-)Öğrencilere puanlarına göre not verebilecek bir kod yazın:

80 - 100, A;
70 - 89, B;
60 - 69, C;
50 - 59, D;
0 - 49, F;

let not = prompt("Öğrencinin notunu giriniz:");
if (90 <= not && not <= 100) {
  console.log("not: A");
} else if (70 <= not && not <= 89) {
  console.log("not: B");
} else if (60 <= not && not <= 69) {
  console.log("not: C");
} else if (50 <= not && not <= 59) {
  console.log("not: D");
} else if (0 <= not && not <= 49) {
  console.log("not: F");
} else {
  console.log("Geçersiz not girişi!!");
}

/*2-) Mevsimin Sonbahar, Kış, İlkbahar veya Yaz olup olmadığını kontrol edin. Değerler :

Eylül, Ekim veya Kasım, mevsim sonbahardır.
Aralık, Ocak veya Şubat, mevsim kıştır.
Mart, Nisan veya Mayıs mevsimi bahardır
Haziran, Temmuz veya Ağustos, mevsim yazdır
 */

let ay = prompt("Bir ay giriniz:").toLowerCase();

switch (ay) {
  case "eylül":
  case "ekim":
  case "kasım":
    console.log("Mevsim: Sonbahar");
    break;
  case "aralık":
  case "ocak":
  case "şubat":
    console.log("Mevsim: Kış");
    break;
  case "mart":
  case "nisan":
  case "mayıs":
    console.log("Mevsim: İlkbahar");
    break;
  case "haziran":
  case "temmuz":
  case "ağustos":
    console.log("Mevsim: Yaz");
    break;
  default:
    console.log("Geçersiz ay girişi!!");
}
