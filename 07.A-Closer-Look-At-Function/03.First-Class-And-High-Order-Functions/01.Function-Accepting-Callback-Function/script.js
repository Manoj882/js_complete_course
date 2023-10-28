'use strict';

const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

// Higher-order function
const transformer = function (str, fn) {
  console.log(`Original string; ${str}`);
  console.log(`Transformed string: ${fn(str)}`);
  console.log(`Transformed by: ${fn.name}`);
};

transformer('Javascript is the best!', upperFirstWord);

// Function returning function

console.log('------------ Function Returning Function ---------------');

// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };

// const greetHey = greet('Hey');
// greetHey('Jonas');
// greetHey('Manoj');
// greet('Hello')('Lokendra');

//re-write function return function using arrow function

const greet = greeting => name => console.log(`${greeting} ${name}`);
const greetHey = greet('Hey');
greetHey('Swastima');
greet('Hello')('Nepal');
