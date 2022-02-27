const repeatString = function(str, numOfRep) {
    let newStr = '';
    if(numOfRep < 0){return 'ERROR';}
    if(numOfRep == 1){return str;}
    if(numOfRep > 1){
        for(let i = 0; i < numOfRep; i++){
            newStr = newStr + str;
        }
    }
    return newStr;
};

// Do not edit below this line
module.exports = repeatString;
