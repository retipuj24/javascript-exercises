// const sumAll = function(startNum, seriesOfNum) {

//     let sum = 0;
//     for(let i = startNum; i < (startNum + seriesOfNum); i++){
//         sum = sum + i;  
//     }
//     //console.log(`sum: ${sum}`);
//     return sum;
// };

const sumAll = function() {
    let arg1 = '';
    let arg2 = '';
    //check if arguments are valid
    if(arguments.length != 2){return 'ERROR';}
    if(typeof arguments[0] != 'number'){return 'ERROR';}
    if(typeof arguments[1] != 'number'){return 'ERROR';}
    if(arguments[0] < 0){return 'ERROR';}
    if(arguments[1] < 0){return 'ERROR';}
    
    if(arguments[0] >= arguments[1]){
        arg1 = arguments[1];
        arg2 = arguments[0];
    }
    if(arguments[0] <= arguments[1]){
        arg1 = arguments[0];
        arg2 = arguments[1];
    }
    let sum = 0;
    // console.log(`arg1 ${arg1}`);
    // console.log(`arg2 ${arg2}`);
    // console.log(typeof arguments[1]);
    for(let i = 1; i <= arg2; i++){
        sum = sum + i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;




// function sumAll(startNum, seriesOfNum){
//     let sum = 0;
//     for(let i = startNum; i < (startNum + seriesOfNum); i++){
//         sum = sum + i;  
//     }
//     console.log(`sum: ${sum}`);
// }

// sumAll(1, 4000);
// console.log(sumAll(123, 1));
