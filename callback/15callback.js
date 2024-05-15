// /* Çok Önemliiiiiiii */
// function gettBooks(callback) {
//   setTimeout(() => {
//     if (callback) {
//       callback();
//     }
//   }, 3000);
// }

// const callbackFunc = () => {
//   console.log("my books");
// };
// gettBooks(callbackFunc);

// function getNames(names, cb) {
//   cb(names.join(", "));
// }

// function showWithAlert(message) {
//   alert(message);
// }
// function showAtConsole(message) {
//   console.log(message);
// }

// getNames(["oyku", "afife", "cino", "eray"], showWithAlert);

function add(a, b) {
  console.log(a + b);
}
function sub(a, b) {
  console.log(a - b);
}
function multiply(a, b) {
  console.log(a * b);
}
function calculate(a, b, callback) {
  callback(a, b);
}
calculate(2, 3, multiply);
