const add = function (num1, num2) {
  return num1 + num2;
};

const subtract = function (num1, num2) {
  return num1 - num2;
};

const sum = function (array) {
  let sum = 0;
  for (let key of array) sum += key;
  return sum;
};

const multiply = function (array) {
  let multiplies = 1;
  for (let key of array) multiplies *= key;
  return multiplies;
};

const power = function (num, power) {
  return num ** power;
};

const factorial = function (num) {
  let factorial = 1;
  for (let index = 1; index < num + 1; index++) factorial *= index;
  return factorial;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
