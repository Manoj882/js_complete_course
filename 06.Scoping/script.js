"use strict";

function calcAge(birthYear) {
  const age = 2023 - birthYear;

  function printAge() {
    let output = `You are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true; // now, it is not block scope , it is functional scope

      //Creating new variable with same name as outer scope's variable
      const firstName = "Hero";
    
      // Reassigning outer scope's variable
      output = "NEW OUTPUT"; // redefined 'output' variable which is accessed from parent scope

      const str = `Oh, and you're a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
      

      //let's create output with const
      const output = "NEW OUTPUT"; // now it is completely new variable

      console.log(add(3, 4));
    }
    console.log(millenial);
    console.log(output);
  }

  printAge();

  return age;
}
const firstName = "Man";
calcAge(1995);
