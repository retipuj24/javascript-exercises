const reverseString = function(str) {

    let revStr = '';
    let strLen = str.length - 1;
    for(let i = strLen; i >= 0; i--){
        revStr = revStr.concat(str[i]);
    }
    return revStr;
};

// Do not edit below this line
module.exports = reverseString;
