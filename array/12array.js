const arr1 = ["Oyku", "elma", "sel felaketi"];
const arr2 = ["Oyku", "Tanyeli", 23];
const obj2 = {
  name: "Oyku",
  surname: "Tanyeli",
  age: 23,
};

const arr3 = [1, 5, 7];

const grup = ["afife", "oyku", "cino"];

grup.push("eray"); // array e yeni eleman eklenir
grup[grup.length] = "dorukhan";
console.log(grup.length);

grup.pop(); // son elemanı çıkarırız

//const grup2 = grup.slice(1, 3); // arrayin indexleri verilerek belli bir elemandan yeni bir array oluşturmak için
//const grup3 = grup.splice(0, 2);

const oykuIndex = grup.indexOf("afife");

const hasCino = grup.includes("cino"); // boolean değer döner
grup.shift(); //ilk elementi kaldırır. ['oyku', 'cino', 'eray']
grup.unshift("afife"); // ['afife', 'oyku', 'cino', 'eray']
grup.reverse(); // terse çevirir  ['eray', 'cino', 'oyku', 'afife']
const grup4 = grup.concat("dorukhan"); // ekledik  ['eray', 'cino', 'oyku', 'afife', 'dorukhan']

const sentence = `Sınıfımızdaki kişiler: ${grup.join(", ")}`; //Sınıfımızdaki kişiler: eray, cino, oyku, afife

console.log(grup);
console.log(oykuIndex);
console.log(hasCino);
console.log(grup4);
console.log(sentence);

const bizimSinif = [
  { name: "Oyku", surname: "Tanyeli", age: 23 },
  { name: "Cino", surname: "Tanyeli", age: 23 },
  { name: "Eray", surname: "Tanyeli", age: 23 },
  { name: "Afife", surname: "Tanyeli", age: 23 },
];
