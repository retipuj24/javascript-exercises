const findTheOldest = function() { 
  
    if(arguments.length != 1){return 'only one input needed.';}
    let args = arguments[0];
    // check if arguments is an array
    // if(Array.isArray(args)){
    //   console.log(`args is an array`);
    // }

    const oldestPerson = args[0];
    //let highestAge = 0;
    args.forEach(element => {
        if(getAge(element) > getAge(oldestPerson)){
            Object.assign(oldestPerson, element);
        }
    });
    // console.log(oldestPerson.name);
    return oldestPerson;
};

function getAge(obj){
    let age = 0;
    let yrD = 0;
    let yrB = 0;

    if(!obj.hasOwnProperty('yearOfDeath')){
        const d = new Date();
        yrD = d.getFullYear();
    } else{
        yrD = obj.yearOfDeath;
    }

    if((obj.hasOwnProperty('yearOfBirth'))){
        yrB = obj.yearOfBirth;
        age = yrD - yrB;
    }else{return Error;}
    return age;
}

// Do not edit below this line
module.exports = findTheOldest;

