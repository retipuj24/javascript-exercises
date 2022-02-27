const add = function(a, b) {
  return a + b;
	
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function() {
  if(arguments.length === 0){return 0;}
  else(arguments.length === 1) 
  {
    let sumOfArray = 0;
    let arrayOfNumbers = arguments[0];

    for(let i = 0; i < arrayOfNumbers.length; i++){
      sumOfArray = sumOfArray + arrayOfNumbers[i];
    }
    return sumOfArray;
  }
};

const multiply = function() {
  if(arguments.length === 0){return 0;}
  else(arguments.length === 1) 
  {
    let productOfArray = 1;
    let arrayOfNumbers = arguments[0];

    for(let i = 0; i < arrayOfNumbers.length; i++){
      productOfArray = productOfArray * arrayOfNumbers[i];
    }
    return productOfArray;
  }
};

const power = function() {
  let powerOfNum = 1;
	if(arguments.length === 0){return 0;}
  else if(arguments.length === 1){powerOfNum = arguments[0]}
  else(arguments.length > 2) 
  {
    powerOfNum = arguments[0];
   
    for(let i = 1; i < arguments[1]; i++){
      powerOfNum = powerOfNum * arguments[0];
    }
  return powerOfNum;
  }
};

const factorial = function() {
	if(arguments[0] === 0){return 1;}
	if(arguments[0] === 1){return 1;}
  else(arguments[0] > 2) 
  {
    let factorialNum = 1;
    let arrayOfNumbers = arguments[0];

    for(let i = 1; i <= arguments[0]; i++){
      factorialNum = factorialNum * i;
    }
    return factorialNum;
  }
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

// console.log(sum([1, 3, 5, 7, 9]));
// console.log(sum([7, 11]));
// console.log(multiply([2,4,6,8,10,12,14]));
// console.log(power(4,3));
// console.log(factorial(5));
console.log(factorial(10));
