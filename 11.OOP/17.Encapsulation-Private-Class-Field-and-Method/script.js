'use strict';

// Topic: Encapsulation - Private Class Fields and Methods
/*
    Note:
    Data encapsulation basically means to keep some properties and methods 
    private inside the class so that they are not accessible from 
    outside of the class. Then the rest of the methods are basically 
    exposed as a public interface, which we can also call API.

   ------> Two big reasons why we need encapsulation and data privacy

    1> To prevent code from outside of a class to accidently manipulate
      or data inside the class.
    
    2> when we expose only a small interface so a small API consisting 
      only of a few public methods then we can change all the other internal 
      methods with more confidence. Because in this case, we can be sure
      that external code does not rely on these private methods. And so 
      therefore our code will not break when we do internal changes.
    
 */

// 1) Public fields
// 2) Private fields
// 3) Public methods
// 4) Private methods
// ( there is also the static version )

class Account {
  // 1) Public fields ( instances )

  locale = navigator.language;

  // 2) Private fields  ---> really truelly not accessible form the outside

  #movements = []; // here, # makes filed private in new class proposal
  #pin;

  // So these are truly private class fields. And again these are gonna
  // be available on the instances themselves. So not on the prototype.

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;

    // it's not actually private, it's just convention (use underscore (_)) and called as protected
    // Protected property
    // this._movements = [];
    // this.locale = navigator.language;
  }

  // 3) Public methods
  // Public Interface
  getMovements() {
    return this.#movements;
  }

  deposit(val) {
    this.#movements.push(val);
  }

  withdraw(val) {
    this.deposit(-val);
  }

  requestLoan(val) {
    // if (this.#approveLoan(val)) {
    if (this._approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan approved`);
    }
  }

  // static version
  static helper() {
    console.log('Helper');
  }

  // 4) private mehtod  --> are very useful to hide the implementation details from the outside.

  // should not be part of public Api
  // #approveLoan(val) {
  _approveLoan(val) {
    return true;
  }
}

const acc1 = new Account('Jonas', 'EUR', 1111);

acc1.deposit(350);
acc1.withdraw(210);

acc1.requestLoan(1000);

//acc1.#approveLoan(1000);
//output: Givers Error:
// Uncaught SyntaxError: reference to undeclared private field or method #approveLoan

acc1.requestLoan(1000);
console.log(acc1.getMovements());

console.dir(acc1);

//console.log(acc1.#movements);  // Property '#movements' is not accessible outside class 'Account' because it has a private identifier.

// console.lof(acc1.#pin); // Property '#movements' is not accessible outside class 'Account' because it has a private identifier.

Account.helper();
