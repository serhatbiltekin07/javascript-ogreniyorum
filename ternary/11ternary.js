const age = 20;
const isChild = 18 >= age ? "Bu bir yetişkindir" : "Bu bir çocuktur";
console.log(isChild);

// if (18 >= age) {
//   console.log("Bu bir yetişkindir");
// } else {
//   console.log("Bu bir çocuktur");
// }

const a = 3 + 4;
const b = 9;
const c = "8";

// if (a == c) {
//   if (c == b) {
//     console.log("a==b==c");
//   } else {
//     console.log("a==b!=c");
//   }
// } else if (a === b) {
//   console.log("a===b");
// } else {
//   console.log("a!=b");
// }
const eq =
  a == c ? (c == b ? "a==b==c" : "a==b!=c") : a === b ? "a===b" : "a!==b";
console.log(eq);

// if (a == c && a == b) {
//   console.log("a==b==c");
// } else if (a == c && c != b) {
//   console.log("a==b!=c");
// } else if (a === b) {
//   console.log("a===b");
// } else {
//   console.log("a!=b");
// }

const eq2 =
  a === c && c == b
    ? "a==b==c"
    : a == c && c != b
    ? "a==b!=c"
    : a === b
    ? "a===b"
    : "a!==b";
console.log(eq2);
