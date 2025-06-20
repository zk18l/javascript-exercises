const fibonacci = function (num) {
  let newNumber;
  if (typeof num === "number") {
    newNumber = num;
  } else {
    newNumber = Number(num);
  }
  if (newNumber < 0) return "OOPS";
  let fibonacci1 = 0;
  let fibonacci2 = 1;
  let fibonacciDone = 0;
  for (let index = 1; index < newNumber; index++) {
    fibonacciDone = fibonacci1 + fibonacci2;
    fibonacci1 = fibonacci2;
    fibonacci2 = fibonacciDone;
  }
  if (newNumber === 1) fibonacciDone = 1;
  return fibonacciDone;
};

// Do not edit below this line
module.exports = fibonacci;
