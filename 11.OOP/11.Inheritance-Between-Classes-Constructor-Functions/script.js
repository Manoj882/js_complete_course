'use strict';

// Topic: Inheritance Between 'Classes' : Constructor Functions

// Person function constructor
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2023 - this.birthYear);
};

// building constructor function for the Student

// Student function constructor
const Student = function (firstName, birthYear, course) {
  // this.firstName = firstName;
  // this.birthYear = birthYear;

  //Person(firstName, birthYear); // it is regular function call so that this keyword set its value as undefined

  Person.call(this, firstName, birthYear);
  this.course = course;
};

// Student.prototype = Object.create(Person);

// Student.prototype = Person.prototype;

// Student prototype proerty and Person prototype property should be the exact same object.
// But in fact that's just not what we want.
// What we do want is the person's prototype object
// to be the prototype of student dot prototype.
// So we want to inherit from it,
// but it should not be the exact same object.
// And that's why we actually needed object dot create.

// Linking prototypes
Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}.`);
};

const mike = new Student('Mike', 2001, 'Computer Science');
console.log(mike);
mike.introduce();

mike.calcAge();

console.log(mike.__proto__);
console.log(mike.__proto__.__proto__);

console.log(mike instanceof Student);
// Output = true

console.log(mike instanceof Person);
// Output = true

console.log(mike instanceof Object);
// Output = true

Student.prototype.constructor = Student;

console.dir(Student.prototype.constructor);

//here, the constructor of student or prototype
// is person here. And the reason for that is that we
// set the prototype property of the student using object dot create.
// And so this makes it so that the constructor of student
// dot prototype is still person.

// for more clarity: Comment line 62: code and check in console
// Student.prototype.constructor = Student;
