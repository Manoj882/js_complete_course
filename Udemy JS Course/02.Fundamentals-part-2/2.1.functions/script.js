'use strict';

// function cutFruitPieces(fruit){
//     return fruit * 4;
// }
// function fruitProcessor(apples, oranges){
//     const applePiece = cutFruitPieces(apples);
//     const orangePiece = cutFruitPieces(oranges);
//     const juice = `Juice with ${applePiece} apples and ${orangePiece} oranges`;
//     return juice;
// }
// const appleJuice = fruitProcessor(2,3);
// console.log(appleJuice);

const calcAge = function(birthYear){
    return 2023 - birthYear;
}
const yearsUntilRetirement = function(birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;
    if(retirement > 0){
        console.log(`${firstName} retires in ${retirement}`);
        return retirement;
    } else {
        console.log(`${firstName} has already retired`);
        return -1;

    }
}

console.log(yearsUntilRetirement(1998, 'Manoj'));
console.log(yearsUntilRetirement(1950, 'Kiran'));