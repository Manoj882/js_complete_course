'use strict';

// Problem 1:
/*
We work for a company building a samrt home thermometer.
Out most recent task is this: Given an array of temperatures
of one day. Calculate the temperature amplitude. Keep in mind
that sometimes there might be a sensor error. 
*/

// Problem solving technique
// ------------------------------
// Step 1: Understanding the problem
/* 
What is the temperature amplitude?
Answer: difference between highest and lowest temperature

How to compute max and min temeratures?
- What's a sensor error? And what to do?
*/

// Step 2: Breaking up into sub-problems
/* 
How to ignore sensor errors?
- Find max value in temperature array
- Find min value in temperature array
- Subtract min from max (amplitude) and return it
*/

//Given temperature data
const temeratures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    let curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;
    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};

const amplitude = calcTempAmplitude(temeratures);
console.log(amplitude);

// Problem 2:
// Function should now receive 2 arrays of temps

// Step 1: Uderstanding the problems
// - With 2 arrays, should we implement functionality twice?
// Answer: No, Just merge two arrays

// Step 2: Breaking up into sub-problems
// - How to merge 2 arrays?

const calcTempAmplitudeNew = function (temp1, temp2) {
  const temps = temp1.concat(temp2);
  console.log(temps);
  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    let curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;
    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};

const temp1 = [9, 4, 5];
const temp2 = [0, -5, 3];
const amplitudeNew = calcTempAmplitudeNew(temp1, temp2);
console.log(amplitudeNew);
