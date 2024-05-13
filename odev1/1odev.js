//callback functions
/*istediğiniz 5 bilgisayarın fiyatlarını içeren  bir number array oluşturun
Bu bilgisayarların ortalama fiyatını hesaplayacak bir function yazın
object array ile bilgisayarların ismini linkini ve fiyatını tutarak bu arraydeki bilgisayarların ortalama fiyatını bulan function ı yazın */

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
function computersAverage() {
  let total = 0;
  let average = 0;
  for (const cart of computers) {
    total += cart.price;
  }
  average = total / computers.length;
  console.log(average);
}
computersAverage();
function toplamFiyat() {
  let total = 0;
  let toplam = 0;
  for (const genel of computers) {
    total += genel.price;
  }
  toplam = total;
  console.log("toplam fiyat :", toplam);
}
toplamFiyat();

function ortalamaFiyatHesapla() {
  const bilgisayarFiyatlari = [3000, 4000, 4500, 3500, 5000];
  let totalPrice = 0;
  for (const price of bilgisayarFiyatlari) {
    totalPrice += price;
  }
  console.log("toplam fiyatlar2 :", totalPrice);
  console.log("Ortalama Fiyat :", totalPrice / bilgisayarFiyatlari.length);
}
ortalamaFiyatHesapla();
