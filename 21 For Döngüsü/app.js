/*
    ----------FOR DÖNGÜSÜ--------------
    for(degisken: koşul; arttırma -azaltma){
        yazılacak kod
    }

    for(let i = 0; i<=10; i++){
        console.log(i);// 0,1,2,3,4,5,6,7,8,9,10 çıktı verir.
    }

*/
// 1 den 10'a kadar ciftleri yazdıralım
for (let i = 0; i <= 10; i += 2) {
  console.log(i); //0,2,4,6,8,10
}

//1 den 10'a kadar tekleri yazdıralım
for (let i = 1; i <= 10; i += 2) {
  console.log(i); //1,3,5,7,9
}

/*
Biltekin
Kurtulus
Biltekin
Kurtulus
*/

for (let i = 1; i <= 10; i++) {
  if (i % 2 == 1) {
    console.log("Biltekin");
  } else {
    console.log("Kurtulus");
  }
}

// 50den 1 e kadar gidelim ve toplamlarını bulalım.
let toplam = 0;
for (let i = 50; i >= 1; i--) {
  toplam += i;
  console.log(i);
}
console.log("Toplam :" + toplam); // Toplam :1275
