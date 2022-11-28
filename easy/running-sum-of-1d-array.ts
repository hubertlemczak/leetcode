function runningSum(nums: number[]): number[] {
  return nums.reduce((acc, curr) => [...acc, (acc[acc.length - 1] || 0) + curr], []);
};