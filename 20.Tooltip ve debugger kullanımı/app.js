// Breakpoint ve Tooltip ?
//adım adım çalışmasını sağlamak için biz debugger denilen anahtar kelimesini  kullanırız
debugger;
let a = 10;
let b = 15;
let c = a + b; //25
let d = a + b + c; //50
let e = a + c + b; //50

let sonuc = a + b + c + d + e;
console.log("sonuç : " + sonuc); //150
