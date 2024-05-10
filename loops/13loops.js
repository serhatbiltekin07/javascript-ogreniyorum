// for (let index = 0; index < 3; index++) {
//   console.log(index);
// }

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let index = 0;
// for (; index < array.length; ) {
//   const element = array[index];
//   console.log(element);

//   if (index % 3) {
//     index++;
//   } else {
//     index += 2;
//   }
// }

while (index < array.length) {
  const element = array[index];
  console.log(element);

  if (index % 3) {
    index++;
  } else {
    index += 2;
  }
}

//* infinity loop
// for (;;) {
//   console.log("a");
// }

// array in her bir elemanını teker teker dönüyor.  Bir array elemanlarına ulaşmak istiyorsak eğer o array e (forof) ile ulaşabiliriz
const bizimSinif = ["afife", "oyku", "cino", "eray"];
for (const insan of bizimSinif) {
  console.log(insan);
}
console.log("------------------------------------------------------");
const oyku = { name: "Oyku", surname: "Tanyeli", age: 23 };
for (const key in oyku) {
  console.log(oyku[key]);
}

const ages = [32, 23, 26, 25];
let totalAges = 0;

for (const age of ages) {
  totalAges += age;
}
console.log("Toplam yaş:", totalAges);
console.log("Ortalama yaş:", totalAges / ages.length);
