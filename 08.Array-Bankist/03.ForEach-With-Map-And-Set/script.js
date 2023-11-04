'use strict';

// Map
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});

//Set
const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);

console.log(currenciesUnique);
// currenciesUnique.forEach(function (value, key, set) {  // Set does not have keys and index as well. So, there is no value that would make sense for key.

currenciesUnique.forEach(function (value, _, set) {  // here, key make no sense. That's why we use (_) which means throw away unneccessary varibale in Javascript

  console.log(`${value}: ${value}`);
});
