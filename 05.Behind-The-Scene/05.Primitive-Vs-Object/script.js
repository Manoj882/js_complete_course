"use strict";

// Primitive types
let lastName = "Dahal";
let oldLastName = lastName;
lastName = "Giri";

console.log(lastName, oldLastName);

// Reference types
const puja = {
  firstName: "Puja",
  lastName: "Chand",
  age: 27,
};

/*
Here, marriedPuja is not a new variable in Heap. It is a just copy of puja object.
i.e. marriedPuja object get refrence of puja object.
These two object points exactly the same memory address in heap. Because, these two object hold the same memory address refrence in call stack.
*/
const marriedPuja = puja;
(marriedPuja.lastName = "Basnet"), console.log("Before marriage: ", puja);
console.log("After marriage: ", marriedPuja);

// Copying Object

const puja2 = {
  firstName: "Puja",
  lastName: "Chand",
  age: 27,
  family: ["Alice", "Bob"],
};

const puja2Copy = Object.assign({}, puja2); // it creates new object in heap and it works only first label
puja2Copy.lastName = "Shrestha";

puja2Copy.family.push("Mary");
puja2Copy.family.push("John");

console.log("Before marriage: ", puja2);
console.log("After marriage: ", puja2Copy);

//Here both puj2 and puja2copy points at the same object in memory heap
