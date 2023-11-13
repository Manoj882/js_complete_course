'use strict';

// Topic: Constructor function

// The diffrence between regular function and constructor function is
// that constructor function is called using new keyword

const Person = function (firstName, birthYear) {
  //   console.log(this); // output: Object{}, here this keyword teturn empty object

  // Instance properties

  this.firstName = firstName;
  this.birthYear = birthYear;

  // Never create a method inside the Constructor function. It's a bad practice
//   this.calcAge = function(){
//     console.log(2023 - this.birthYear);
//   }
};

const john = new Person('John', '1999');

Person.prototype.constructor = Person;
console.log(john);

// Behind the scene; 4 steps is happened

// 1. New empty object {} is created

// 2. function is called, this keyword is empty object, this = {}

// 3. newly created object i.e. empty object {} linked to prototype

// 4. function automatically return empty object {}

const metilda = new Person('Metilda', 2000);
const jack = new Person('Jack', 1995);

console.log(metilda, jack);

console.log(jack instanceof Person);
