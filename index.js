// let cannot be redeclared 
// let can be reassigned

let string = "helo";
console.log(string);

// Syntax error :

// let string = 'world';
// console.log(string);

// ------------------------------------------

// var can be declared
// let can be reassigned

var x = 10;
console.log(x);

var x=20;
console.log(x);

// -------------------------------------------

// =========================== FUNCTIONS ===================================================

// 1. Function declaration 
function multiply(a,b)
{
    return a*b;
}
console.log(multiply(5,2));

// 2. Function expression
const multiply2 = function(a,b)
{
    return a*b;
}
console.log(multiply2(5,2));

// 3. Arrow function
const multiply3 = (a,b) => {
    return a*b;
}
console.log(multiply3(5,2));

// Arrow function in one line
const multiply4 = (a,b) => a*b;
console.log(multiply4(5,2));

// 4. Anonymous Function
// function(a,b){
//     return a*b;
// }


// const yyy = "madhu"
// yyy = "sree"

// console.log(yyy);

// =========================== OBJECTS ===================================================

const student = {
    name : "madhu",
    age : 19,
    hasGraduated : false,
    branch : "CSE",
    marks : [70,80,90,100,99],
    address : {
        homeno : 2,
        street : "Kilakku Thottam",
        city: "Coimbatore"
    }
}

console.log(student);
console.log(student.name);
console.log(student.address.city);
console.log(student.marks[0]);

console.log(10+"10");