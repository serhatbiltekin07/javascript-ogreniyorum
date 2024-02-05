//Aritmetik Operatörler

/* ----> = atama operatörü
  + --> toplama işlemi
  -  >  çıkarma işlemi
  *  --> çarpma işlemi
  /  --> bölme işlemi
  %  --> mod alma işlemi
  ++  --> 1 arttırmak için kullanılır
  --  --> 1 azaltmak için kullanılır
  **
  
 */

//string + number  ----> stringnumber

//console.log(5 + 7);
let not1 = 60;
let not2 = 70;

/*toplama operatörü */
console.log(not1 + not2);
console.log("---------------------------------");

let sayi1 = "5";
let sayi2 = 2;
//---------------------------------------------------
console.log(sayi1 + sayi2); // burada iki değeri birleştirdi.Toplama işlemi olmadı sadece birleştirdi

/*çarpma operatörü */
console.log(not1 * not2); //(60*70) = 4200

/*bölme operatörü */
console.log(not1 + not2 / 2); //95

/* mod operatörü */

console.log(12 % 5); // 12'yi 5'e böldüğümüzde kalanı verir burada da kalan  2 dir.

/* ++ operatörü */

let a = 10;
a++; //11
a++; //12
a--; //11
a--; //10

// **: 2^3 = 8

console.log(5 ** 3); //125
