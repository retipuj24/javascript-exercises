const removeFromArray = function() {

    // check arguments length
    console.log(arguments.length);
    if(arguments.length === 0){ return '';}
    if(arguments.length === 1){ return arguments[0];}
    if(arguments.length >= 2){       
        //get the array in array
        let arrInArgs = Array.from(arguments[0]);

        for(let i = 1; i < arguments.length; i++){
            //console.log(`arguments: ${arguments[i]}`);
            //console.log(`i: ${i}`);
            //console.log(`arguments: ${arguments[i]}`);
            for(let j = 0; j < arrInArgs.length; j++){
                //console.log(`j: ${j} : arguments: ${arguments[i]}`);
                if(arrInArgs[j] === arguments[i]){
                    arrInArgs.splice(j, 1);
                    console.log(`arrInArgs: ${arrInArgs}`);
                    break;
                }
            }
    
        }
        return arrInArgs;       
    }
};

// Do not edit below this line
module.exports = removeFromArray;

removeFromArray(['ha', 'he', 'hi', 'ho', 'hu', 1, 2, 3, 4 , 5], 'hi', 3);