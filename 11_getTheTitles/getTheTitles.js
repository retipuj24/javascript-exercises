const getTheTitles = function() {
  const array = arguments[0];
  console.log(array.length);
  const array2 = [];

  for(let i = 0; i < array.length; i++){
      array2.push(array[i].title);
  }
//   console.log(array2);
  return array2;
}
// Do not edit below this line
module.exports = getTheTitles;
