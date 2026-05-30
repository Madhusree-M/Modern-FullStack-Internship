export{} // To make this file a module and avoid global scope pollution

// Primitive Datatypes

let age:number = 19;
console.log(age);

let name:string = "Madhusree";
console.log(name);

let bool:boolean = true;
console.log(bool); 

let weight:number = 42.5;
console.log(weight);

// Arrays

let marks:number[] = [90, 85, 92];
console.log(marks[0]);

// push element
marks.push(1000);
console.log(marks);

// marks.push("Madhu"); -> Not Allowed

const city:string[] = ["Coimbatore", "Chennai", "Bangalore"];
console.log(city);

const flags:boolean[] = [true, false, true, false];
console.log(flags);

const matrix:number[][] = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];
console.log(matrix);

/// readonly

let colors:readonly string[] = ["Red", "Green", "Blue"];
// colors.push("Yellow"); -> Not Allowed
console.log(colors);

// readonly can be applied to arrays, tuples, and objects to prevent modification of their contents.
// readonly cannot be applied to primitive types like number, string, or boolean because they are immutable by nature.


// any - datatype
let x:any = 10;
x="Hello";
console.log(x);

/*
let data1:number = 109;
console.log(data1.toUpperCase()); // No error during compilation, but will throw a runtime error because toUpperCase is not a function for numbers.
*/

let data2:any = "TypeScript";
console.log(data2.toUpperCase()); // This will work fine  for any-type and print "TYPESCRIPT"