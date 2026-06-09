// HOISTING


var a = 10;
var b = 20;

const add = (a, b) => {
    const ans = a + b;
    return ans;
}

const output = add(a, b);
console.log(output);


// console.log(a);