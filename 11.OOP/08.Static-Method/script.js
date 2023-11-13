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
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // Instance method
  // these methods will be added to .prototype property, so that all instances can have access to them. That's why it's called Instance Method
  // Method will be added to .prototype property

  calcAge() {
    console.log(2023 - this.birthYear);
  }

  greet() {
    console.log(`Hey, ${this.fullName}`);
  }

  get age() {
    return 2023 - this.birthYear;
  }

  // set a property that already exist
  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    // here, In _fullNam, use of underscore(_) is just a convention not javascript feature. It is used to solve conflict between constructor and setter
    else alert(`${name} is not a full name`);
  }

  // only use of setter gives _fullName property with undefined value. so, in order to solve this issue, getter must be used.

  get fullName() {
    return this._fullName;
  }

  // static method

  static hey() {
    console.log('Hey there 👋');
    console.log(this);
  }
}

PersonClass.hey();

// const walter = new PersonClass('Walter', 1999);
// console.log(walter);
// Output - Give alert dialog box message: Walter is not a full name.

const jessica = new PersonClass('Jessica Devis', 1996);
console.log(jessica);
jessica.calcAge();

console.log(jessica.age);

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

// Topic: Getter and Setter

// getter and setter are very useful in data validation

console.log('------- Setter and Getter ------------');

const account = {
  owner: 'John',
  movements: [200, 530, 120, 300],

  get latest() {
    // return this.movements.slice(-1);
    // // Output = Array [ 300 ]

    return this.movements.slice(-1).pop();
    // 300
  },

  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log(account.latest);

account.movements = 50;
console.log(account.movements);

// Topic: Static Method

console.log('------------- Static Method -------------');

PersonClass.hey = function () {
  console.log('Hey there 👋');
  console.log(this); // Output - returns constructor function of PersonClass
};

PersonClass.hey(); // This function is not inherited.
//jessica.hey();

//Here, hey() function cannot call from its object becuase it is not in the
//prototype of jessica object. So, there's no way that the jessica object
// could inherit it.
