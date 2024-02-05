// KOŞUL YAPILARI

let not = 65;

if (not > 50) {
  console.log("Geçtiniz , notunuz :" + not); // not 50 büyük olduğu için yani true olduğu için  if bloğunun içine girip çıktı olarak -->Geçtiniz, notunuz :65 yazar. tam tersi durumda else bloğuna girer.
} else {
  console.log("Kaldınız, notunuz :" + not);
}

console.log("------------------------------------------");

let yas = Number(prompt("Yaşınız :")); // Number dememizin nedeni Number adındaki sınıfı olamadan  yas değişkenimizi string'e çevirir bunu önlemek için Number adındaki sınıfımızı kullanırız ve girdiğimiz yas değişkenini Number' a çevirir.
let para = Number(prompt("Bütçeniz :"));

if (yas >= 18 && para >= 3000) {
  alert("Ehliyet Sınavına Katılabilirsiniz");
} else {
  alert("Ehliyet Sınavına Katılamazsınız...");
}
