'use strict';

// Topic: Another Example of ES6 Classes

class Account {
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.pin = pin;
    this.movements = [];
    this.locale = navigator.language;

    // In fact, we can even execute any code here in this constructor
    // that we want.

    console.log(`Thanks for opening an account, ${owner}`);

    // create method / public interface
    // this methods are interface to out object ans we also call this Api
  }

  deposit(val) {
    this.movements.push(val);
  }

  withdraw(val) {
    this.deposit(-val);
  }

  approveLoan(val) {
    console.log(`Approved loan`);
    return true;
  }

  requestLoan(val) {
    if (this.approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan approved`);
    }
  }
}

const acc1 = new Account('Jonas', 'EUR', 1111);

// publc interface

// acc1.movements.push(250);
// acc1.movements.push(-150);

/* 
  Note: Actually, it's a bad practice to direct interacting property with object.
  so, we need to create method or public interface so that we could reuse.

*/

acc1.deposit(350);
acc1.withdraw(210);

acc1.requestLoan();

acc1.approveLoan();

/*
  Note:
  but in the real world, we should not even be allowed to access this 
  kind of method. (i.e approveLoan())
  So this is kind of an internal method that only the requestLoan() 
  method should be able to use.
  So, for this we need to data encapsulation and data privacy
 */

console.dir(acc1);
console.log(acc1.pin);
