let nums = [3,1,2,4];

// sort
// a-b => a=100, b=200
// 100-200 = -100
// if a-b < 0 => inc
// If ans is pos -> swap a and b
// If ans is neg -> dont swap, becoz they are already in correct order


const a = nums.sort((a,b) => {
    return b-a;
})

console.log(nums);