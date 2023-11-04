'use strict';

//check palindrome

// const reverseString = str => {
//   let reversedString = '';

//   for (let i = str.length - 1; i >= 0; i--) {
//     reversedString += str[i];
//   }
//   return reversedString;
// };

// const output = reverseString('abcdcba');
// console.log(output);

// const checkPalindrome = function(str){
//     let left = 0;
//     let right = str.length - 1;

//     while(left < right){
//         if(str[left] != str[right]){
//             return false;
//         }
//         left++;
//         right--;

//     }
//     return true;
// }

// const output = checkPalindrome(['a','b','c','d','c','b','a']);
// console.log(output);

const num1 = [1, 2, 4, 6, 8, 9, 14, 15];
const num2 = [18, 21, 16, 20];
const target = 20;

// const checkTarget = function (num, target) {
//   for (let i = 0; i < num.length; i++) {
//     for (let j = i + 1; j < num.length; j++) {
//       if (num[i] + num[j] === target) {
//         return true;
//       }
//     }
//   }
//   return false;
// };

// const output = checkTarget(num, target);
// console.log(output);

// const checkForTarget = (num1, num2, target) => {
//   //   let num = [...num1, ...num2];
//   let num = num1.concat(num2);

//   let left = 0;
//   let right = num.length - 1;

//   while (left < right) {
//     let currSum = num[left] + num[right];
//     if (currSum === target) {
//       return true;
//     }
//     if (currSum > target) {
//       right--;
//     } else {
//       left++;
//     }
//   }
//   return false;
// };

// const output = checkForTarget(num1, num2, target);
// console.log(output);

