//Geriye değer döndüren metot tanımlama ------> return

let donenDeger = cube(2);
kareAl(donenDeger);

function kareAl(sayi) {
  let sonuc = sayi * sayi;
  console.log(sonuc);
}

/*
    1-Bir değeri metodun dışarısına çıkarmak taşımak için kullanılır.
    2-Bir metodu bitiren anahtar kelimesidir return.,
*/
function cube(sayi) {
  let sonuc = sayi * sayi * sayi;
  return sonuc;
}
//64

//void : geriye değer döndürmeyen demektir.
