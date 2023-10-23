'use strict';

const jonas = [
    'Jonas',
    'Schmedtmann',
    2037-1991,
    'teacher',
    ['Michael', 'Peter', 'Steven'],
    true,
];

const types = [];

for(let i =0; i < jonas.length; i++){
    // Reading from jonas array
    console.log(jonas[i], typeof jonas[i]);

    // Approach: 1 - Filling types array
    // types[i] = typeof jonas[i];

    // Approach: 2 - Using push method
    types.push(typeof jonas[i]);
}

// console.log(types);

// const year = [1991, 2007, 1985, 2010];
// const age = [];

// for(let i = 0; i < year.length; i ++){
//     age.push(2023 - year[i]);
// }
// console.log(age);

// // continue and break
// console.log('--------- ONLY STRING --------');
// for(let i =0; i < jonas.length; i++){
//     if(typeof jonas[i] !== 'string') continue;
//     console.log(jonas[i], typeof jonas[i]);
// }

// console.log('-------- BREAK WITH NUMBER --------');
// for(let i =0; i < jonas.length; i++){
//     if(typeof jonas[i] === 'number') break;
//     console.log(jonas[i], typeof jonas[i]);
// }

/************ While loop ***************/

let dice =  Math.trunc(Math.random() * 6) + 1;
console.log(dice);

while(dice !== 6){
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if(dice === 6) console.log('Loop is about to end...');

}