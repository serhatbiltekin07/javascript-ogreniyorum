//  -------------ATAMA OPERATÖRLER----------------
/*
        =  --> atama operatörüdür
        ==  --> Eşittir operatörüdür
        ===
        +=
        -=
        *=
        /=
        %=
        **=

*/

//  ==  --> Eşittir operatörü
console.log(5 == 5); //true
console.log(5 == 4); // false

let a = 5;
let b = 10;
let sonuc = a + b;
console.log(sonuc == 11); // false a b'ye eşit değildir

// içindeki değerlerin eşit olup olamadığına bakar, veri tipine bakmaz
console.log("----------------------------------------");

console.log(3 == "3"); //true
console.log(5 == "5"); //true

console.log("----------------------------------------");

// === operatörü hem tipleri hemde değerlerinin eşit olup olmadıklarına bakar.
console.log(5 === 5); //true
console.log(5 === "5"); // false değerleri eşit ama tipleri farklı olduğu için false döner.

console.log("----------------------------------------");

// +=, -=, *=, /=, %= , **= operatörleri

let sayi = 4;
//sayi = sayi + 4;
sayi += 2;
console.log(sayi); // 6--->4+2

console.log("----------------------------------------");
let sayi1 = 4;
sayi1 -= 3;
console.log(sayi1); //1---> 4-3

console.log("----------------------------------------");
let sayi2 = 4;
sayi2 *= 5;
console.log(sayi2); //20---> 5*4

console.log("----------------------------------------");

let sayi3 = 12;
sayi3 /= 4;
console.log(sayi3); //3 ---> 12/4
console.log("----------------------------------------");

let sayi4 = 12;
sayi4 %= 5;
console.log(sayi4); // modunu aldık kalan 2 dir.

console.log("----------------------------------------");

let sayi5 = 4;
sayi5 **= 2;
console.log(sayi5); // 4^2= 16
