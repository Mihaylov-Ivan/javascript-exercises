const add = function(a, b) {
	return a+b;
};

const subtract = function(a, b) {
	return a-b;
};

const sum = function(arr) {
	// let sum = 0;
  // arr.forEach(n => {
  //   sum += n
  // });
  
  // return sum;
  return array.reduce((total, current) => total + current, 0);
};

const multiply = function(arr) {
	// let product = 1;
  // arr.forEach(n => {
  //   product *= n
  // });
  
  // return product;

  return array.length
  ? array.reduce((accumulator, nextItem) => accumulator * nextItem)
  : 0;
};

const power = function(a, b) {
  return a**b;
};

const factorial = function(n) {
	let factorial = 1;
  
  if (n>=1)
    for (let i = n; i>=1; i--)
      factorial *= i;
  else
    return 1;

  return factorial;
};

const recursiveFactorial = function (n) {
  if (n === 0) {
    return 1;
  }
  return n * recursiveFactorial(n - 1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
