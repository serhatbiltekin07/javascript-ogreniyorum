/*
1-) object array i ile price 25000'den düşük olan bilgisayarların olduğu array
2-)string array'in bir elemanı şu olacak ve bu tüm bilgisayarlar için yazılacak:"Macbook bilgisayar 30000 TL'dir."
3-) 30000 tlden fazla ilk bilgisayarın objesini yazdırın.
4-) tüm bilgisayarların fiyatı 10000'den büyük mü
5-) 25000 den büyük olan tüm bilgisayarların fiyatlarının toplamını reduce ile bulunuz.
*/

const computers = [
  {
    name: "EXPER",
    price: 26999,
    url: "https://www.vatanbilgisayar.com/exper-xera-xc136-intel-core-i5-13400f-2-5-ghz-16-gb-512-gb-ssd-8-gb-nvidia-rtx4060-freedos.html",
  },
  {
    name: "MSI ",
    price: 55999,
    url: "https://www.vatanbilgisayar.com/msi-mag-infinite-s3-i7-14400f-2-1ghz-16gb-1tb-ssd-12gb-nvidia-rtx4060ti-win11.html",
  },
  {
    name: "LENOVO",
    price: 33999,
    url: "https://www.vatanbilgisayar.com/lenovo-ideacentre-5-core-i7-11700f-2-5ghz-16gb-512gb-ssd-12gb-rtx3060-win11-135575.html",
  },
  {
    name: "CASPER Nirvana ",
    price: 20000,
    url: "https://www.vatanbilgisayar.com/casper-nirvana-n200-intel-core-i5-12400-2-5ghz-8gb-250gb-ssd-intel-uhd-730-freedos.html",
  },
  {
    name: "CASPER Excalibur",
    price: 25999,
    url: "https://www.vatanbilgisayar.com/casper-excalibur-e650-i5-11400f-2-6ghz-16gb-500gb-ssd-rtx3050-freedos.html",
  },
];
//1-)  object array i ile price 25000'den düşük olan bilgisayarların olduğu array
const para = computers.filter((computer) => computer.price < 25000);
console.log("25000 den küçük array :", para);

//2-)string array'in bir elemanı şu olacak ve bu tüm bilgisayarlar için yazılacak:"Macbook bilgisayar 30000 TL'dir.

const computerMessage = computers.map(
  (computer) =>
    `Bilgisayar : ${computer.name} bilgisayar ${computer.price} TL'dir.`
);
console.log(computerMessage);

// 3-) 30000 tlden fazla ilk bilgisayarın objesini yazdırın.

const fazla = computers.find((computer) => computer.price > 30000);
console.log("30000 den fazla ilk bilgisayar objesi :", fazla);

//4-) Tüm bilgisayarların fiyatı 10000'den büyük mü ?
const everyComputers = computers.every((computer) => {
  return computer.price > 10000;
});
console.log(
  "Tüm bilgisayarların fiyatı 10000'den büyük mü ? :",
  everyComputers
);

// 5-) 25000 den büyük olan tüm bilgisayarların fiyatlarının toplamını reduce ile bulunuz.
const total = computers
  .filter((computer) => computer.price > 25000)
  .reduce((toplam, computers) => toplam + computers.price, 0);
console.log("25000 den büyük olan tüm bilgisayarların toplamı :", total);
