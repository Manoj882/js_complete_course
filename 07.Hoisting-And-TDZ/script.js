"use strict";

// Variables
console.log(me);
// console.log(job);
// console.log(year);

var me = "Manoj";
let job = "teacher";
const year = 1997;

// Functions
console.log(addDecl(2, 3));
// console.log(addExp, 4(3));
// console.log(addArrow(4, 5));

// Function declaration
function addDecl(a, b) {
  return a + b;
}

// Function Expression
const addExp = function (a, b) {
  return a + b;
};

// Arrow Function
const addArrow = (a, b) => a + b;
4;

if (!numProducts) deleteShoppingCart();

var numProducts = 10;
function deleteShoppingCart() {
  console.log("Product is deleted");
}

var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);
