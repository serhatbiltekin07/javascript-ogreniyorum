//break - contiune
//1'den 10'a kadar sayıları yazdıralım 8'e geldiğinde döngüden çıkalım.

let sayac = 1;
while (sayac <= 10) {
  console.log(sayac);
  if (sayac == 8) {
    break;
  }
  sayac++;
}

//?   Continue bir kere çalıştır yada atla continue yerleştirdiğimiz yeri
//1 2 3 4 5 6 7 9 10

let count = 0;
while (count <= 10) {
  count++;
  if (count > 10) {
    break;
  }
  if (count == 8) {
    continue;
  }
  console.log(count);
}
