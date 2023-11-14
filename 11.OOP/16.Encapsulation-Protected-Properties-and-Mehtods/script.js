'use strict';

// Topic: Data Encapsulation and Data privacy
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

class Account {
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this._pin = pin;

    // it's not actually private, it's just convention (use underscore (_)) and called as protected
    // Protected property
    this._movements = [];
    this.locale = navigator.language;

    // In fact, we can even execute any code here in this constructor
    // that we want.

    console.log(`Thanks for opening an account, ${owner}`);

    // create method / public interface
    // this methods are interface to out object ans we also call this Api
  }

  getMovements() {
    return this._movements;
  }

  deposit(val) {
    this._movements.push(val);
  }

  withdraw(val) {
    this.deposit(-val);
  }

  // should not be part of public Api
  _approveLoan(val) {
    return true;
  }

  requestLoan(val) {
    if (this._approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan approved`);
    }
  }
}

const acc1 = new Account('Jonas', 'EUR', 1111);

// still can access _movements because it's just
// acc1._movements.push(480);
// acc1._movements.push(-780);

/* 
  Note: Actually, it's a bad practice to direct interacting property with object.
  so, we need to create method or public interface so that we could reuse.

*/

acc1.deposit(350);
acc1.withdraw(210);

acc1.requestLoan(1000);
acc1._approveLoan(1000);

/*
  Note:
  but in the real world, we should not even be allowed to access this 
  kind of method. (i.e approveLoan())
  So this is kind of an internal method that only the requestLoan() 
  method should be able to use.
  So, for this we need to data encapsulation and data privacy
 */

console.log(acc1.getMovements());

console.dir(acc1);
