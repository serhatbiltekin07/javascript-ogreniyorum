/*
    ------------------------DO-WHİLE DÖNGÜSÜ---------------------
    do{
        kodları buraya yazarız...
    }while(koşul);
*/

//1den 10 a kadar yazıdıralım
let sayac = 1;
do {
  console.log(sayac);
  sayac++;
} while (sayac <= 10);
//--> çıktı olara : 1,2,3,4,5,6,7,8,9,10

// let yas = 26;

// do {
//   console.log("Ehliyeti alabilirsiniz");
// } while (yas >= 28);

let count = 1;
let toplam = 0;
do {
  if (count % 2 == 1) {
    toplam += count;
  }
  count++;
} while (sayac <= 20);
console.log("Toplam :", toplam); //100
