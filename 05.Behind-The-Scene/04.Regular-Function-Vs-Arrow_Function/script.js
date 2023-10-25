"use strict";

//var firstName = "Matilda"; // this is a global variable so it creates firstName property in window object

const jonas = {
  firstName: "jonas",
  year: 1991,
  calcAge: function () {
    console.log(2023 - this.year);

    //Solution 1: Storing this in self variable
    // const self = this;
    // const isMillenial = function () {
    //   // console.log(this);
    //   // console.log(this.year >= 1981 && this.year <= 1996);
    //   console.log(self);
    //   console.log(self.year >= 1981 && self.year <= 1996);
    // };

    //Solution 2: Using Arrow Function - it looks up it's parent scope (lexical this keyword)
    const isMillenial = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };

    isMillenial(); // it is even call inside the function, it is regular function so it gives undefined.
  },
  // In arrow function, it does not get its own this keyword, it rather look its surrounding i.e. parent scope
  // It's parent scope is Global scope so in below code, this gives window object and in window object firstName property
  // is not exist so gives 'Hey, undefined' as an ouput
  //Here, jonas is object not a block of code so block scope is not exist here. That's why this keyword use in greet arrow function
  //calls global scope which is parent scope.
  // greet: () => console.log(`Hey, ${this.firstName}`),

  //So, use function declaration, and avoid use of arrow function inside object
  greet: function () {
    console.log(`Hey, ${this.firstName}`);
  },
};

jonas.greet();
jonas.calcAge();

//arugment keywords
// argument keyword only exist in regular function

const addExp = function (a, b) {
  console.log(arguments);
  return a + b;
};

addExp(2, 3, 4, 5);

// argument keyword not supported in arrow function
const addArrow = (a, b) => {
  // console.log(arguments);
  return a + b;
};
addArrow(10, 11);
