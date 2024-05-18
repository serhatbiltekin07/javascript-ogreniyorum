function sum(message, firstNumber, ...numbers) {
  console.log(message);
  console.log(numbers);
  return numbers.reduce((a, b) => a + b);
}
console.log(sum("Yaşlarımızın toplamı :", 23, 25, 26, 32));
