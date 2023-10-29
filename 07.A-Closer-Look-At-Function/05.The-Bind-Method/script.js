'use strict';

const lufthansa = {
  airline: 'Lufthansa',
  itaCode: 'LH',
  bookings: [],
  book(flightNum, name) {
    // Enhanced Object Literal
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.itaCode}${flightNum}`
    );
    this.bookings.push({
      flight: `${this.itaCode}${flightNum}`,
      name,
    });
  },
};

lufthansa.book(234, 'Jonas Smith');
lufthansa.book(123, 'Donald Trump');
console.log(lufthansa);

const eurowings = {
  airline: 'Eurowings',
  itaCode: 'EW',
  bookings: [],
};

// we can store the value book function
// Does not work
const book = lufthansa.book; // now book variable is a function not method

//book(23, 'Sarah Khan'); //Now, book function becomes regular function so it shows undefined this keyword as an error

// To fix this problems, we can use call and apply method

//Call method|
book.call(eurowings, 23, 'Sarah Williams'); // function is just an object and object has method. Therefore function can have method too and call method is one of them.
console.log(eurowings);

book.call(lufthansa, 239, 'Mary Cooper');
console.log(lufthansa);

const swiss = {
  airline: 'Swiss Air Lines',
  itaCode: 'LX',
  bookings: [],
};

book.call(swiss, 587, 'Roberto'), console.log(swiss);

// Apply method
const flightData = [583, 'George Cooper'];
book.apply(swiss, flightData);
console.log(swiss);
book.call(swiss, ...flightData);

const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLx = book.bind(swiss);

bookEW(23, 'Steven Williams');

const bookEW23 = book.bind(eurowings, 23);
bookEW23('Jonas Smith');
bookEW23('Martha Cooper');

// With Event Listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};

document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// Partial application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);

console.log(addVAT(100));
console.log(addVAT(23));

// Using Function return function
const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};

const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(100));
console.log(addVAT2(23));
