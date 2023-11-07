'use strict';

const nums = [1, 2, 4, 6, 8, 9, 14, 15];
const target = 3;

const checkTarget = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;
  while (left < right) {
    let curSum = nums[left] + nums[right];
    if (curSum === target) {
      return true;
    }
    if (curSum > target) {
      right--;
    } else {
      left++;
    }
  }
  return false;
};

const output = checkTarget(nums, target);
console.log(output);
