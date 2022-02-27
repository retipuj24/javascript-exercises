const palindromes = function () {
    if(arguments.length != 1){return 'string input needed.';}
    let originalStr = arguments[0].toLowerCase();
    let letterOnlyString = '';
    let reverseStr = '';
    let tempStr = '';

    for(let i = 0; i < originalStr.length; i++){
        if(originalStr[i].charCodeAt(0) >= 97 && originalStr[i].charCodeAt(0) <= 122){
            letterOnlyString += originalStr[i];
        }else{tempStr += originalStr[i];}   // just holding non alphabet character and does nothing
                                            // used for debugging purposes, to check which non alphabet was accumulated
    }

    for(let i = originalStr.length - 1; i >= 0; i--){
        if(originalStr[i].charCodeAt(0) >= 97 && originalStr[i].charCodeAt(0) <= 122){
            reverseStr += originalStr[i];
        }
    }
    
    return (letterOnlyString == reverseStr);
};

// Do not edit below this line
module.exports = palindromes;

