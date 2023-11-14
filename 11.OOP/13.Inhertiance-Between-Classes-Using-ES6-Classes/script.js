'use strict';

// Topic: Implement Inheritance between ES6 Classes

class PersonClass {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // Instance method
  calcAge() {
    console.log(2023 - this.birthYear);
  }

  get age() {
    return 2037 - this.birthYear;
  }

  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name`);
  }

  get fullName() {
    return this._fullName;
  }

  // static method
  static hey() {
    console.log(fullName, birthYear);
  }
}

class StudentClass extends PersonClass {
  // Note: if you do not need any new properties, then you don't even
  // need to write a constructor method in the child class.

  constructor(fullName, birthYear, course) {
    // PersonClass.call(this, fullName, birthYear); // Now , we don't need tc call this, Instead of this, we use super function
    // always need to happen first or super function always call first
    // because this call to the super function is responsible for
    // creating this keyword in this subclass. And so therefore, without
    // doing this, we wouldn't be able to access the disc keyword to do
    //this.
    // So always first the call to the super, so to the parents class constructor.
    // And from there, we will then be able to access the disc keyword.
    super(fullName, birthYear);
    this.course = course;
  }

  introduce() {
    console.log(`My name is ${this.fullName} and I study ${this.course}`);
  }

  // override the calcAge() method that's defined in parent class
  calcAge() {
    console.log(
      `I'm ${
        2023 - this.birthYear
      } years old, but as a student I feel more like ${
        2023 - this.birthYear + 10
      } years.`
    );
  }
}

const martha = new StudentClass('Martha Jones', 2012, 'Computer Science');
martha.introduce();
martha.calcAge();
