//from leetcode
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray1 = function(nums) {
    //first solution
    let currentSum=0;
    let maxSum=nums[0];
    for(i=0;i<nums.length;i++){
        currentSum+=nums[i]
        if(currentSum<0) currentSum=0
        maxSum=Math.max(maxSum,currentSum)
    }
    return maxSum
};

var maxSubArray2 = function(nums) {
    // if (nums.length === 0) return 0; 
    let currentSum = nums[0];
    let maxSum = nums[0];

    for (let i = 1; i < nums.length; i++) {
        if (currentSum < 0) {
            currentSum = nums[i];
        } else {
            currentSum += nums[i];
        }
        maxSum = Math.max(maxSum, currentSum);
    }

    return maxSum;
};
var maxSubArray3 = function(nums) {
    let currentSum=nums[0];
    let maxSum=nums[0];
    for(i=1;i<nums.length;i++){
        if(currentSum<0) currentSum=nums[i]
        else currentSum+=nums[i]
        maxSum=Math.max(maxSum,currentSum)
    }
    return maxSum
};
// console.log(maxSubArray1([-2,1,-1,4,-1,2,1,-5,4]))
// console.log(maxSubArray2([-2,1,-1,4,-1,2,1,-5,4]))
// console.log(maxSubArray3([-2,1,-1,4,-1,2,1,-5,4]))
// console.log(maxSubArray([5,4,-1,7,8]))
console.log(maxSubArray1([-1]))
console.log(maxSubArray2([-1]))
console.log(maxSubArray3([-1]))
console.log(maxSubArray1([1]))
console.log(maxSubArray2([1]))
console.log(maxSubArray3([1]))