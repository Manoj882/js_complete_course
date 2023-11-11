const nums = [100, 200, 300, 400];
const k = 2;

const maxSum = function (nums, k) {
  let currSum = 0;

  for (let right = 0; right < k; right++) {
    currSum += nums[right];
  }

  let ans = currSum;

  for (let right = k; right < nums.length; right++) {
    currSum += nums[right] - nums[right - k];
    ans = Math.max(ans, currSum);
  }

  return ans;
};

const output = maxSum(nums, k);
console.log(output);
