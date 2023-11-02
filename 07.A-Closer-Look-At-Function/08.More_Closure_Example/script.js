'use script';

// Example 1
let f;

//function expression
const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 45;
  f = function () {
    console.log(b * 2);
  };
};

g();
f();
console.dir(f);

// Re-assigning f functions
h();
f();

console.dir(f);

// Example 2
const boardPassengers = function (numOfPassengers, wait) {
  const perGroup = numOfPassengers / 3;

  setTimeout(function () {
    console.log(`We are now boarding all ${numOfPassengers} passengers`);
    console.log(`There are 3 groups, each with ${perGroup} passengers`);
  }, wait * 1000);

  console.log(`Will start boarding in ${wait} seconds`);
};
// const perGroup = 999;

boardPassengers(180, 3);

// Coding challenge


(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';

  document.querySelector('body').addEventListener('click', function () {
    header.style.color = 'blue';
  });
})();

/*
How does this callback function get access to the header variable?

Answer: It is due to closure.
By the time, this call back function is executed. This IIFE, so this immediately invoked
function expression is now long gone. So, it has already been executed.
And, with this IIFE (Immediately Invoked Function Expression), the variable 'header' is 
basically gone as well. So, all of that is gone.
But, still the callback function is attached to the body element. And so it's
waiting for some events to happen there.
And when the events happen then this callback function here is of course executed.
Again, even though the environment in which this function was created is already gone, 
it is still able to access the variable that were created in that variable by the time the function
was born. So, parent function is the birth place of this event handler function, Therefore,
this function remembers all the variable present at a time of its birth.
We can also say 'header' variable is backpack of this function


 */
