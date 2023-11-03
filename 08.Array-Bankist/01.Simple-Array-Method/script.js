'use script';

let arr = ['a', 'b', 'c', 'd', 'e'];

console.log(arr.slice(2));
console.log(arr);
console.log(arr.slice(2, 3));
console.log(arr.slice(-1));
console.log(arr.slice(1, -2));
console.log(arr.slice());
// console.log(arr.slice()) = this is also done by another way whcih is in below.
console.log([...arr]);

// SPLICE
console.log('--------------------  SPLICE ----------------');
//Spice method - mutates the array (change/ modify the array)

// console.log(arr.splice(2));
arr.splice(-1);
console.log(arr);
arr.splice(1, 2); // here second parameter is delete count
console.log(arr);

// REVERSE
console.log('---------- REVERSE ------------');
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse());
console.log(arr2);

//  CONCAT
// Concat method = does not mutate the invoked array or original array
console.log('---------- CONCAT ------------');
arr = ['a', 'b', 'c', 'd', 'e'];
const letters = arr.concat(arr2);
console.log(letters);
// Concat can also be done by another way which is-
console.log([...arr, ...arr2]);
console.log(arr);
console.log(arr2);

//JOIN
console.log('---------- JOIN ------------');
console.log(letters.join('-'));

// at method

console.log('---------- AT method ------------');
const arr3 = [23, 11, 64];
console.log(arr3[0]); // array at 0 index
console.log(arr3.at(0)); // array dot at position 0

// two traditional way - getting the last element
//if we do not know the length of the array
// Traditional way 1:
console.log(arr3[arr3.length - 1]);
// This can be done by another way like:
// Traditional way 2:
console.log(arr.slice(-(1)[0]));

// modern way
console.log(arr3.at(-1)); // negative index looks from end

// at method also works on String
console.log('manoj'.at(0));
console.log('manoj'.at(-1));
