const caesar = function(str1, n1) {
  
  //check the arguments if valid
  if(arguments.length != 2){return 'input needed, string and number';}

  //get the string, and verify if string
  //console.log(typeof arguments[0]);
  //console.log(typeof arguments[1]);
  // let str = arguments[0];
  // let num = parseInt(arguments[1]);
  let str = "";
  let num = 0;
  str = str1;
  num = parseInt(n1);
  
  // let rmdr = num%26;
  let newStr = "";
  const upperAlphabet = [];
  const lowerAlphabet = [];
  const rUpperAlphabet = [];
  const rLowerAlphabet = [];
  
  // console.log("ABCDE test print");

  // console.log(newStr);

  // fill the array with legitimate alphabet characters
  let index = 65;
  let rIndex = 90;
  for(let i = 0; i < 26; i++){
    if(index >= 65 && index <= 90){
      // decrement the reverse index
      upperAlphabet[i] = String.fromCharCode(index);
      lowerAlphabet[i] = String.fromCharCode(32 + index);
      rUpperAlphabet[i] = String.fromCharCode(rIndex);
      rLowerAlphabet[i] = String.fromCharCode(32 + rIndex);
      // console.log(`${i} : ${index} : ${upperAlphabet[i]} : ${lowerAlphabet[i]}`);
      index++;
      rIndex--; 
    }
  }

  if(num < 0){
    // console.log('neg ');
    for(let i = 0; i < str.length; i++){
      let rUpIndex = rUpperAlphabet.indexOf(str[i]);
      let rLoIndex = rLowerAlphabet.indexOf(str[i]);
      // console.log('rLoIndexr ' + rLoIndex);
      if(rUpIndex != -1){
        rUpIndex += Math.abs(num);
        // console.log(`char: ${rUpperAlphabet[rUpIndex%26]}`);
        newStr += rUpperAlphabet[rUpIndex%26];
      }else if(rLoIndex != -1){
        rLoIndex += Math.abs(num);
        // console.log(`char: ${rLowerAlphabet[rLoIndex%26]}`);
        newStr += rLowerAlphabet[rLoIndex%26];
      }else{
        newStr += str[i];
      }
    }
  }
  else if(num >= 0){
    // console.log('positive');
    for(let i = 0; i < str.length; i++){
      let upIndex = upperAlphabet.indexOf(str[i]);
      let loIndex = lowerAlphabet.indexOf(str[i]);
      // console.log(upIndex);
      // console.log(loIndex);
      if(upIndex != -1){
        upIndex += num;
        // console.log(upperAlphabet[upIndex]);
        newStr += upperAlphabet[upIndex%26];
      }else if(loIndex != -1){
        loIndex += num;
        // console.log(lowerAlphabet[loIndex]);
        newStr += lowerAlphabet[loIndex%26];
      }else{
        newStr += str[i];
      }
    
    }
  }
  // console.log(newStr);
  return newStr;
};

module.exports = caesar;


// console.log(caesar("98765abc- 12 5 ABCDEFGHIJKLMNOPQRSTUVWXYZ", 1));
// console.log(caesar("ABCDEFGHIJKLMNOPQRSTUVWXYZ", 2));
// console.log(caesar("abcdefghijklmnopqrstuvwxyz", 2));
// console.log(caesar("0123456789 ~!@#$%^&*(0_+`=<>?,./:'", 2));

// console.log(caesar("A", 1));
// console.log(caesar("Aaa", 1));
// console.log(caesar('Hello, World!', 5));
// console.log(caesar('Mjqqt, Btwqi!', -5));
// console.log(caesar('Z', 1));
// console.log(caesar('Hello, World!', 75));
// console.log(caesar('Hello, World!', -29));































// let st1 = 'a';
// let st2 = 'b';
// let st3 = 'XYZ';
// console.log(st1.concat(String.fromCharCode(2)));
// console.log(`65 : ${String.fromCharCode(65)}`);
// console.log(`66 : ${String.fromCharCode(66)}`);
// console.log(`67 : ${String.fromCharCode(67)}`);
// console.log(`68 : ${String.fromCharCode(68)}`);
// console.log(`69 : ${String.fromCharCode(69)}`);
// console.log(`70 : ${String.fromCharCode(70)}`);
// console.log(`71 : ${String.fromCharCode(71)}`);
// console.log(`72 : ${String.fromCharCode(72)}`);
// console.log(`73 : ${String.fromCharCode(73)}`);
// console.log(`74 : ${String.fromCharCode(74)}`);
// console.log(`75 : ${String.fromCharCode(75)}`);
// console.log(`76 : ${String.fromCharCode(76)}`);
// console.log(`77 : ${String.fromCharCode(77)}`);
// console.log(`78 : ${String.fromCharCode(78)}`);
// console.log(`79 : ${String.fromCharCode(79)}`);
// console.log(`80 : ${String.fromCharCode(80)}`);
// console.log(`81 : ${String.fromCharCode(81)}`);
// console.log(`82 : ${String.fromCharCode(82)}`);
// console.log(`83 : ${String.fromCharCode(83)}`);
// console.log(`84 : ${String.fromCharCode(84)}`);
// console.log(`85 : ${String.fromCharCode(85)}`);
// console.log(`86 : ${String.fromCharCode(86)}`);
// console.log(`87 : ${String.fromCharCode(87)}`);
// console.log(`88 : ${String.fromCharCode(88)}`);
// console.log(`89 : ${String.fromCharCode(89)}`);
// console.log(`90 : ${String.fromCharCode(90)}`);



// console.log(`65 : ${String.fromCharCode(65)}`);
// console.log(`65 : ${String.fromCharCode(65)}`);
// console.log(`65 : ${String.fromCharCode(65)}`);
// console.log(`65 : ${String.fromCharCode(65)}`);
// console.log(`65 : ${String.fromCharCode(65)}`);
// console.log(`65 : ${String.fromCharCode(65)}`);
// console.log(`65 : ${String.fromCharCode(65)}`);
// console.log(`65 : ${String.fromCharCode(65)}`);
// console.log(`65 : ${String.fromCharCode(65)}`);
// console.log(`65 : ${String.fromCharCode(65)}`);
// console.log(`65 : ${String.fromCharCode(65)}`);
// console.log(`65 : ${String.fromCharCode(65)}`);
// console.log(`65 : ${String.fromCharCode(65)}`);
// console.log(`65 : ${String.fromCharCode(65)}`);
// console.log(`65 : ${String.fromCharCode(65)}`);
// console.log(`65 : ${String.fromCharCode(65)}`);
// console.log(`65 : ${String.fromCharCode(65)}`);