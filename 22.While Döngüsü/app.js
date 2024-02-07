/*
    -------------WHİLE DÖNGÜSÜ------------
    While(koşul){
        kodların yazıldığı yer

        sayacın değerini atarız
    }
 */

//1 den 10 a kadar yazıdıralım

let sayac = 1;
while (sayac <= 10) {
  console.log(sayac);
  sayac++; // 1,2,3,4,5,6,7,8,9,10 çıktıs verir
}
console.log("--------------------------------------------------");
//1 den 10 a kadar  çiftleri  yazıdıralım

let count = 0;
while (count <= 10) {
  if (count % 2 == 0) {
    console.log("Çiftler :" + count);
  }
  count++;
}
//1 den 10 a kadar  tekleri  yazıdıralım
let tek = 0;
console.log("--------------------------------------------------");
while (tek <= 10) {
  if (tek % 2 == 1) {
    console.log("Tekler :" + tek);
  }
  tek++;
}
console.log("--------------------------------------------------");
// break adın da bir anahtarımız var o anahtarı kullanmazsak while dongüsü ile sonsuza kadar gider.Break anahtarı biz break ile kırarız döngüden çıkarız.
let arttir = 1;
while (true) {
  console.log(arttir);
  if (arttir == 7) {
    break;
  }
  arttir++;
}
