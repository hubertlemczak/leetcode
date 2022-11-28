function pivotIndex(nums: number[]): number {
  let leftSum: number = 0;
  let rightSum: number = nums.reduce((acc, curr) => acc + curr, -nums[0]);
  
  for (let i = 0; i < nums.length; i++) {
      if (rightSum === leftSum) {
          return i;
      } else {
          leftSum += nums[i];
          rightSum -= nums[i + 1];
      }
  }
  
  return -1;
};