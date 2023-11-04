'use strict';

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300]; // Here +ve amount is deposit and -ve amount is withdraw

// for (const movement of movements) {
//   if (movement > 0) {
//     console.log(`You deposited: ${movement}`);
//   } else {
//     console.log(`You withdrew: ${Math.abs(movement)}`);
//   }
// }

for (const [i, movement] of movements.entries()) {
  // movements.entries() is also array
  if (movement > 0) {
    console.log(`Movement ${i + 1}: You deposited: ${movement}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew: ${Math.abs(movement)}`);
  }
}

console.log('--------- forEach() -----------');

// movements.forEach(function (movement) {
//   if (movement > 0) {
//     console.log(`You deposited: ${movement}`);
//   } else {
//     console.log(`You withdrew: ${Math.abs(movement)}`);
//   }
// });

movements.forEach(function (mov, i, arr) {
  if (mov > 0) {
    console.log(`Movement ${i + 1}: You deposited: ${mov}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew: ${Math.abs(mov)}`);
  }
});

/*
    Difference between for of loop and forEach loop:
    In forEach loop, continue and break statements do not work at all.

    If you want to break out the loop, then you have to keep using the for of loop
 */
