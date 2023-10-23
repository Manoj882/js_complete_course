'use strict'


const friends = ['Manoj', 'Pratik', 'Shiva'];
const newLength = friends.push('Ram');

console.log(newLength);
console.log(friends);

// friends.unshift('Jonas');

// friends.pop();
// const popped = friends.pop();
// console.log(`popped element: ${popped}`);

console.log(friends);

friends.shift();

console.log(friends);

console.log(friends.indexOf('Shiva'));
console.log(friends.includes('Pratik'));
console.log(friends.includes('Bob'));
