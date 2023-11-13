'use strict';

/*
  - Classes in JavaScript do not work like traditional classes in
  other languages like Java or C++

  / Classes are not hoisted
 */

// class expression
//const PersonClass = class{} // Here, behind the scen class is still function

// class declaration
class PersonClass {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }

  // Method will be added to .prototype property
  calcAge() {
    console.log(2023 - this.birthYear);
  }

  greet() {
    console.log(`Hey, ${this.firstName}`);
  }
}

const jessica = new PersonClass('Jessica', 1996);
console.log(jessica);
jessica.calcAge();

console.log(jessica.__proto__ === PersonClass.prototype);
// Output: true

// PersonClass.prototype.greet = function () {
//   console.log(`Hey, ${this.firstName}`);
// };

jessica.greet();

/*
 1. Classes are not hoisted even they are declaration
 but function declaration are hoisted which mean we can use them before they are declared in the code.

 2. Just like function, classes ate also first-class citizens
    because classes are really special kind of functions behind the scene.
  
  3. Classes are executed in strict mode

 */

