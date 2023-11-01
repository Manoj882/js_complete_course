'use strict';

// Case 1:
// function func1(){
//     let a = 5;
//     console.log(a);
// }

// func1();
// Output:
//5

// // Case 2:
// function func1() {
//   let a = 5;
//   console.log(a);
//   function func2() {
//     let a = 7;
//     console.log(a);
//   }
//   func2();
// }

// func1();

// //Output
// // 5
// // 7

// // Case 3:
// function func1() {
//   let a = 5;
//   console.log(a);
//   function func2() {
//     console.log(a);
//   }
//   return func2;
// }

// const abc = func1();
// abc();
// // Output:
// // 5
// // 5

// // Case 4:
// function func1() {  // outer function
//   let a = 5;
//   /* 
//    - Inner function can access the variable of outer function i.e. parent's scope
//    - Here, Closure returns func2() and it's (surrounding environment/scope) / (lexical environment/ lexical scope) as well.
//   */
//   function func2() {  // inner function 
//     console.log(a);
//   }
//   return func2;
// }

// const abc = func1();
// abc();
// Output: 
// 5


// Case 5:
function func1() {  // outer function
    let a = 5;
    /* 
     - Inner function can access the variable of outer function i.e. parent's scope
     - Here, Closure returns func2() and it's (surrounding environment/scope) / (lexical environment/ lexical scope) as well.
    */
    function func2() {  // inner function 
      console.log(a);
    }
    a = 8;
    return func2;
  }
  
  const abc = func1();
  abc();

  //Output:
  // 8

  /*
    Here, Closure return func2() and its lexical environment
    Here, func2() log the reference of a variable 'a' not value. So, it's reference is updated when 'a' variable is updated. 
    So output is 8.
   */
