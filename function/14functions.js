const oyku = {
  name: "oyku",
  surname: "tanyeli",
  email: "xxxxxxxxxxxx",
  getInfo: function () {
    console.log(`ismi:${this.name}, Soyismi:${this.surname} tanyeli olan kişi`);
  },
};

function runTheCode(consoleText, param1, param2 = "param2") {
  console.log(consoleText);
  console.log(param1);
  console.log(param2);
}
//runTheCode("run the code", 1);

const variableFunction = function () {
  console.log("Variable Function");
};
//variableFunction();

//ARROW FUNCTİON
const arrowFunction = () => {
  console.log("arrow function");
};
//arrowFunction();

//arrow function ile normal function arasındaki fark arrow function da this nesnesi yoktur.

//oyku.getInfo();
function mergeTheStrings(...strings) {
  let mergedStrings = "";
  for (let str of strings) {
    // mergedStrings = mergedStrings.concat(str);
    mergedStrings = `${mergedStrings} ${str}`;
  }
  console.log(mergedStrings);
}
//mergeTheStrings("merhaba", "dunya", "nasılsın", "afife", "oyku");

function getTotal(numbers) {
  let total = 0;
  for (const number of numbers) {
    total += number;
  }
  return total;
}
const numbersTotal = getTotal([1, 2, 3, 4, 5]);
console.log("sayıların toplamı : ", numbersTotal);
