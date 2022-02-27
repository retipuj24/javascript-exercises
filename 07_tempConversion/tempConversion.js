const ftoc = function(f) {
  // Fahrenheit to Celsius Conversion	[°C] = ([°F] − 32) × 5/9
  let celsius = (f - 32)*(5/9);
  if(celsius%1 === 0){return celsius;}
  else{return Number(celsius.toFixed(1));}
};

const ctof = function(c) {
  //Celsius to Fahrenheit Conversion	[°F] = [°C] × 9/5 + 32
  let fahrenheit = c * (9/5) + 32;
  if(fahrenheit%1 === 0){return fahrenheit;}
  else{return Number(fahrenheit.toFixed(1));}
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};