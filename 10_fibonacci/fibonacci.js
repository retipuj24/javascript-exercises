const fibonacci = function() {
  var sum = 0;
  
  if(arguments.length != 1){return 'only one input needed.';}
  let args = arguments[0];
  if(typeof(arguments[0] == 'string')){
    args = Number(arguments[0]);
  }
  
  let array1 = [];
  if(args < 0){return 'OOPS';}
  
  for(let i = 0; i < args; i++){
    if(array1.length ===  0){
      // nothing to add in empty array so add the starting number 1 to fill the array
      array1.push(1);
      //return array1[array1.length - 1];
    } else if(array1.length === 1){
      // nothing to add in a one element in array
      //just push the total value of array1 to self
      array1.push(array1[array1.length-1]);
    }else if(array1.length > 1) {
      array1.push(Number(array1[array1.length - 2]) + Number(array1[array1.length - 1]));
    }
  }
  return array1[array1.length-1]
};

// Do not edit below this line
module.exports = fibonacci;


