const nums = [1,2,3,4,5];

// const acc = 0;
const sum = nums.reduce((acc, el) => {
    return acc+el;
},0)

console.log(sum);