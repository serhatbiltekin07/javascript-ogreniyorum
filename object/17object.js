const arabam = {
  marka: "BMW",
  model: "M5",
  yil: 2020,
  yakit: "benzin",
  renk: "siyah",
  motor: 2.0,
  vites: "otomatik",
  kapiSayisi: 5,
  koltukSayisi: 5,
  tekerlekSayisi: 5,
  fiyat: 7500000,
  matoruCalistir: () => {
    console.log("Motor çalıştı");
  },
  getCarProperties: function () {
    console.log(`Marka: ${this.marka}, Model: ${this.model}`);
  },
};

arabam.matoruCalistir();
arabam.km = 12000;
// arabam objesinin değerlerini ilerde değitirmesini istemez isek eğer
//freeze object'in  ket ve value'larının değiştirmesini engeller
//Object.freeze(arabam); // key ler değişmez , value değerleri değişmez

//seal objectin keylerini değiştirlmesini engeller
//Object.seal(arabam); //verilen objectin keyleri dondurur value larını değiştirebiliriz
arabam.yil = 2024;

console.log("arabam:", arabam);
arabam.marka = "Porche";
arabam["model"] = "Taycan";
arabam.getCarProperties();
arabam.marka = "AUDİ";

//objects vs  arrays

const obj1 = {
  name: "Oyku",
  surname: "Tanyeli",
};
const obj2 = {
  name: "Oyku",
  surname: "Tanyeli",
};
const obj3 = {
  name: "Cino",
  surname: "Tanyeli",
};
const obj4 = obj1;
console.log("obj1 ? obj2", obj1 === obj2); //false
console.log(
  "obj1 degeri ? obj2 değeri",
  JSON.stringify(obj1) === JSON.stringify(obj2)
); // objetc i string e dönüştürmek istiyorsak yapıyoruz değer olarak kontrol etmek için stringify kulllanırız.// true
//JSON.parse(); //string i de object değer içericek ise parse ı kullanıyoruz
console.log("obj1 ? obj3", obj1 === obj3); //false
console.log("obj1 ? obj4", obj1 === obj4); //true

obj1.name = "Cino";
console.log(obj4);
//-----------------------------------------------------------------------
const arr1 = [1, 2, 3];
const arr2 = [1, 2, 3];
const arr3 = [2, 1, 3];
const arr4 = arr1;

console.log("arr1 ? arr2", arr1 === arr2); // referans tuttuğu için direkt birbirlerine eşit olmuyorlar. false
console.log(
  "arr1 degeri ? arr2 degeri",
  JSON.stringify(arr1) === JSON.stringify(arr2)
); // değerlerine baktığımız da eşit  çıkar. true

console.log("arr1 ? arr3", arr1 === arr3); // false
console.log(
  "arr1 degeri ? arr3 degeri",
  JSON.stringify(arr1) === JSON.stringify(arr3)
); //false
// peki nasıl eşit olduğunu yani true yapabiliriz aşağıda yazdım
console.log(
  "arr1  ? arr3 ",
  JSON.stringify(arr1.sort((a, b) => a - b)) ===
    JSON.stringify(arr3.sort((a, b) => a - b))
); // true çıktısını alırız

console.log("arr1 ? arr4", arr1 === arr4); //true
arr1.push(4);
console.log(arr4); //[1, 2, 3, 4]

console.log("model key i var mı ? :", arabam.hasOwnProperty("model")); // true
//console.log("araba to array:", Object.entries(arabam));

//Object.entries(arabam) diyerek objectimin key value larını  array e çeviriyoruz array olarak da kullanabiliyoruz
for (const item of Object.entries(arabam)) {
  console.log(`${item[0]}= ${item[1]}`);
}

console.log(Object.keys(arabam)); // bütün key leri bir array içerisinde topladı
Object.keys(arabam).map((key) => console.log(key)); // keyleri tek tek consola yazabiliriz
console.log(
  "-----------------------------------------------------------------"
);
console.log(Object.values(arabam)); // objenin keyleri değil value değerleri döner  ['AUDİ', 'Taycan', 2020, 'benzin', 'siyah', 2, 'otomatik', 5, 5, 5, 7500000, ƒ, ƒ]

// arr1 de bir değişiklik istemiyoruz ama arr5 ekleme yapmak istiyoruz ama arr1 de bir değişiklik olmasın.
//const arr5 = arr1;

Object.assign(arabam, obj3); // obj bir obj daha ekleriz obj3 obj1' i ezer

console.log(arabam);
