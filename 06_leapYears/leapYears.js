const leapYears = function(yr) {

    // check if yr is a number
    if(isNaN(yr) || yr === 0){
        console.log(`${yr} is not a Year`);
    } else {
        let year = getEvaluatedYear(yr);
        if(year < 100){
            return (year%4 === 0);
        }else{
             return (year%400 === 0);
        }
    }
};

const getEvaluatedYear = function(year){
    if(year%100 === 0){
        // console.log(`${year%100} true`);
        return year;
    }else{
        // console.log(`${year%100}false`);
        return year%100;
    }
}

// Do not edit below this line
module.exports = leapYears;
