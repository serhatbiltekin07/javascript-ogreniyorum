// ---------------DERS ORTALAMASI BULMAK-------------------

//vize1 %30, vize2 %30, final %40

let vize1 = Number(prompt("Vize1 Notunuzu Giriniz :"));
let vize2 = Number(prompt("Vize2 Notunuzu Giriniz :"));

let final = Number(prompt("Final Notunuzu Giriniz :"));
let ortalama = vize1 * 0.3 + vize2 * 0.3 + final * 0.4;

if (ortalama >= 60) {
  alert("Tebrikler geçtiniz!!");
  console.log("Tebrikler ortalmanız :" + ortalama + " Geçtiniz");
} else {
  alert("Kaldınız, geçmiş olsun!");
  console.log("Kaldınız : " + "ortalamanız " + ortalama);
}
