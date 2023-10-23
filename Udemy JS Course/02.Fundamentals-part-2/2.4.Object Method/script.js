'use strict'



const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    birthYear: 1994,
    job: 'teacher',
    friends: ['Michael', 'Peter','Stevan'],
    hasDriversLicense: true,
    // calcAge: function(birthYear){
    //     return 2023-birthYear;
    // }
    // calcAge: function(){
    //     return 2023 - this.birthYear;
    // }

    // best practice --> calculate the age age and 
    // store age in age variable using this keyword
    // which called current object i.e. jonas
    calcAge: function(){
        console.log(this);
        this.age = 2023 - this.birthYear;
        return this.age;
    },

    getSummary: function(){
        return `${jonas.firstName} is a ${jonas.calcAge()} years old ${jonas.job} and he has ${jonas.hasDriversLicense ? 'a': 'no'} driver's license`;
    }

};

// console.log(jonas.calcAge(2000));
// console.log(jonas.calcAge());

//best practice
console.log(jonas.age);
console.log(jonas['calcAge'](1998));

console.log(jonas.getSummary());