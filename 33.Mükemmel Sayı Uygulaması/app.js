// Mükemmel sayı Uygulaması
//6  -  28 -  496

// 6 =1,2,3,6 = 12 = 6*2  mükemmel sayıdır.

isPerfectNumber(28); // mükemmel sayısı çıktısı verir
isPerfectNumber(4); //Mükemmel sayı değildir!!
function isPerfectNumber(number) {
  let toplam = 0;
  for (let i = 2; i <= number / 2; i++) {
    if (number % i == 0) {
      toplam += i;
    }
  }
  toplam += 1 + number;
  if (toplam == number * 2) {
    console.log("Mükemmel sayıdır.");
  } else {
    console.log("Mükemmel sayı değildir!!");
  }
}
