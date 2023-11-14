'use strict';

// Topic: Implement Inheritance between ES6 Classes

const PersonProto = {
  calcAge() {
    console.log(2023 - this.birthYear);
  },

  init(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);

const StudentProto = Object.create(PersonProto); //  Now, PersonProto will actually become the prototype of StudentProto. So, student can inherit from Person

StudentProto.init = function (fullName, birthYear, course) {
  PersonProto.init.call(this, fullName, birthYear);
  this.course = course;
};

StudentProto.introduce = function () {
  console.log(`My name is ${this.fullName} and I study ${this.course}`);
};

const ram = Object.create(StudentProto);

ram.init('Ram', 2010, 'Computer Science');
ram.introduce();
ram.calcAge();
