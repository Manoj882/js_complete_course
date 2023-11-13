'use strict';

// Topic: Constructor function

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

const matilda = new Person('Metilda', 2000);
const jack = new Person('Jack', 1995);

console.log(matilda, jack);

console.log(jack instanceof Person);

// Topic: Prototype
/* Each and every function in javascript automatically has a property called prototype
  that include also constructor function
*/

console.log('-------------- Prototype ----------------------');
console.log(Person.prototype);

/* Here we create one copy of calcAge function so that all objects created by Person constructor
function could reuse this function.
Any object always has access to the methods and properties from its prototype.


*/
Person.prototype.calcAge = function () {
  console.log(2023 - this.birthYear);
};

john.calcAge();
matilda.calcAge(); //Here prototype of John and Matilda is Person.prototype.

console.log(john.__proto__); //(Note: this __proto__ property is creaed in step 3)
// prototype of John object is essentially the prototype property of constructor function

// Let's confirm the prototype of john object is equal or not the prototype property of Person constructor function
console.log(john.__proto__ === Person.prototype); // Here John object is conntected to Person.prototype
// Output = true

//Here, Person.prototype is not actually prototype of Person

// test if it is the prototype of another object
console.log(Person.prototype.isPrototypeOf(john));
// Output: true

console.log(Person.prototype.isPrototypeOf(matilda));
// Output: true

console.log(Person.prototype.isPrototypeOf(Person));
// Output: false   // .prototypeOfLinkedObjects

console.log(john.__proto__.isPrototypeOf(Person.prototype));
// Output : false

// we can set property on prototype not only method

Person.prototype.species = 'Homo Sapiens';
console.log(john, matilda);
console.log(john.species, matilda.species);

console.log(john.hasOwnProperty('firstName'));
// output: true

console.log(john.hasOwnProperty('species')); // species is not john own property it's inherit property from prototype
// output: false
