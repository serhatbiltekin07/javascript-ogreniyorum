const sinif = ["afife", "öykü", "cino", "eray"];
const ages = [26, 32, 25, 23];

sinif.forEach((ogrenci, index, arr) => {
  console.log(ogrenci, index, arr);
});

let totalAges = 0;
ages.forEach((age) => {
  totalAges += age;
});
console.log("totalAges:", totalAges);
const averageAge = totalAges / ages.length;

//map Methodss

const sinifMessage = sinif.map(
  (ogrenci, index, arr) => `Öğrenci ${ogrenci} ${index + 1}.sırada`
);
// const sinifMessage = sinif.map((ogrenci, index, arr) => {
//     return `Öğrenci ${ogrenci} ${index + 1}.sırada`;
//   });
console.log(sinifMessage);

const agesMessage = ages.map((age) => {
  return averageAge - age;
});
console.log(agesMessage);

//filter me

const filterAges = ages.filter((age) => age < 30);
// const filterAges = ages.filter((age) => {
//     return age < 30;
//   });
console.log(filterAges);

const filteredNames = sinif.filter((name) => name.length < 5);
// const filteredNames = sinif.filter((name) => {
//     return name.length < 5;
//   });
console.log(filteredNames);

// every methods --> true false döner = ya hepsi true olacak bir tane false varsa false döner

const everyAge = ages.every((age) => {
  return age < 35;
});
console.log(everyAge);

//some methods --> bir tane bile true çıkması yeter gerisi true sonucu çıkar

const someAge = ages.some((age) => {
  return age > 30;
});
console.log(someAge);

//find method --> koşulu ilk sağlayan elemanı döndürür.
const findName = sinif.find((name) => name.length === 4);
// const findName = sinif.find((name) => {
//     return name.length === 4;
//   });
console.log(findName);

//findLast method --> koşulu son sağlayan elemanı döndürür
const findLastName = sinif.findLast((name) => name.length === 4);
console.log(findLastName);

//findIndex method--> koşulu sağlayan indexini buluruz
const findIndex = sinif.findIndex((name) => name.length === 4);
console.log(findIndex);

//findLastIndex method --> koşulu sağlayan sondaki index i buluruz
const findIndexLast = sinif.findLastIndex((name) => name.length === 4);
console.log(findIndexLast);

//küçükten büyüğe sıralar a-b , büyükten küçüğe sıralama b-a
const sortedNumbers = ages.sort((a, b) => a - b);
console.log(sortedNumbers);

//isimleri sıralama stringleri sıralar
const sortedNames = sinif.sort();
console.log(sortedNames);
//afifeden öyküye sıralarken, öyküden afifeye sıralar yani  ters çevirir
console.log(sortedNames.reverse());

//! REDUCE methodu --> TOPLAR

const total = ages.reduce((prev, current) => {
  return prev + current;
}, 0);
console.log(total);

const namesJoin = sinif.reduce((prev, current) => {
  return `${prev}, ${current}`;
});
console.log(namesJoin);
