'use script';

/*
All data defined inside scope is private.
In IIFE, transfer statement into expression using ()
Exceute function just once
*/

const runOnce = function () {
  console.log('This will never run again');
};
runOnce();

//IIFE
(function () {
  console.log('This will never run again');
})();

(() => console.log('This will also never run again'))();
