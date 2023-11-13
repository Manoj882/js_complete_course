'use strict';


// Topic: Obect.create

/*
  - It is a third way of implementing prototypal inheritance or delegation
  - works on prettry different ways than constructor functions and classes work.
  - In Object.create, there is still the idea of prototypal inheritance.
  - However, there are no prototype properties involved.
  - And also no constructor functions, and no new operator
  - So, we can use Object.create to essentially manually set the prototype of an object to
    any other object that we want.

 */

// let's actually create an object that we want to be
// the prototype of all the person objects.

console.log('-------- Object.create -------------');

const PersonProto = {
  calcAge() {
    console.log(2023 - this.birthYear);
  },

  // this init method looks like constructor
  // However, this has actually nothing
  // to do with any constructor function,
  // because we are not using the new operator
  // to call this we will simply do Sarah.init
  // and then we will pass in the arguments.

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);
console.log(steven);

steven.name = 'Steven';
steven.birthYear = 2002;
steven.calcAge();

console.log(steven.__proto__ == PersonProto);
// Output = true

// Object.create() creates a new object and and the prototype of 
//that object will be the object that we passed in.


// create sarah object which used PersonProto as a prototype object
const sarah = Object.create(PersonProto);
sarah.init('Sarah', 1979);
sarah.calcAge();

console.log(typeof sarah.__proto__);
// Output - object
