"use strict";

console.log(this); // output: gives window object

const calcAge = function (birthYear) {
  console.log(2023 - birthYear);
  console.log(this); // output: gives undefined
};

calcAge(1998);

const calcAgeArrow = (birthYear) => {
  console.log(2023 - birthYear);
  console.log(this); // output: gives window object because arrow function has lexical this keyword(it's parent scope is global scope so gives window object)
};

calcAgeArrow(1980);

const jonas = {
  name: "jonas",
  year: 1990,
  calcAge: function () {
    console.log(this); // output: this prints jonas object
    console.log(2023 - this.year);
  },
};
jonas.calcAge();

console.log("----------- Matilda ---------------");

const matilda = {
  year: 2000,
};
matilda.calcAge = jonas.calcAge; // known as method borriwing and this keyword only points object that method is calling
matilda.calcAge();

const f = jonas.calcAge; // in this code, this.year not found in jonas.calcAge so it gives undefined
f();  // it is a regular function call 
