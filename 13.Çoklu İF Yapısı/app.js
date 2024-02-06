// ÇOKLU İF KULLANMAK

/*
    Kullanıcıdan adını ve tckn alacağız
    Ad: boş geçilemez
    TCKN : 11 karakterden oluşacak
*/

let ad = prompt("İsminizi girin :");
let tckn = prompt("TCKN giriniz :");

//kontrolEt(ad, tckn);

//if else : iki seçeneğin olduğu yerlerde kullanılır.
// if else if else : 2 den fazla seçeneğin olduğu yerde kullanılır
//if if if: her bir koşulu ayrı bir koşul şeklinde kullanabiliriz.
kontrolEt2(ad, tckn);

function kontrolEt(ad, tckn) {
  if (ad != "") {
    if (tckn.length == 11) {
      console.log("İsim ve tckn problemsiz girildi.");
    } else {
      console.log("Lütfen tc'nizi 11 karakter olarak giriniz.");
    }
  } else {
    console.log("Lütfen isim alanını boş bırakmayın!!");
  }
}

function kontrolEt2() {
  if (ad == "") {
    console.log("Lütfen isim alanını boş bırakmayın!!");
    return;
  }
  if (tckn.length != 11) {
    console.log("Lütfen tc'nizi 11 karakter olarak giriniz.");
    return;
  }
  console.log("İsim ve tckn problemsiz girildi.");
}
