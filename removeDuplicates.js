var removeDuplicates = function(nums) {
    let k = 1; //No of unique elements
    for (let i = 1; i < nums.length; i++) {
        console.log('STEP ',i)
        console.log(`Before: i=${i} k=${k}`)
        if (nums[i] !== nums[k - 1]) {
            nums[k] = nums[i]; // Overwrite the next unique element
            k++;
            console.log('\t\t New element is ',nums[i])
        }
        console.log(`After: i=${i} k=${k}\n`)
        
    }
    return k;
};

nums=[0,0,1,1,2,2,3];
count=removeDuplicates(nums);
console.log(count)
// console.log(nums.slice(0, 6));
console.log(nums.slice(0, count));


