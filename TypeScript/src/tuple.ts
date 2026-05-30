// tuple is a DS which can hold multiple values of different types

// explain the problem before using tuple


let arr = ["Madhu",20,true];

console.log(arr[0]);

arr = [20,"Madhu",true];

console.log(arr[0]);

// we can change the order of the elements in the array but we cannot change the type of the elements in the array

// we can use tuple to hold multiple values of different types

// ------------------------------------

let arr2: [string, number, boolean];

arr2 = ["Madhu",20,true];

console.log(arr2[0]);

// arr2 = [20,"Madhu",true]; -> error

// console.log(arr2[0]);


// ================================== UNION =================================

// union is a type that can hold multiple types of values

// 1. union using type alias
type ID = string | number;

let id: ID;

id = "123";
console.log(id);

id = 12345;
console.log(id);

// 2. union using inline type annotation
let ID: string | number;
ID = "123";
console.log(ID);

ID = 12345;
console.log(ID);

// ===================================== INTERSECTION =====================================

// intersection is a type that can hold multiple types of values

// 1. intersection using type alias
type Person = {
    name: string,
    age: number
}

type Employee = {
    id: number,
    department: string
}

type EmployeeDetails = Person & Employee;

let employee1: EmployeeDetails = {
    name: "Madhu",
    age: 20,
    id: 1,
    department: "IT"
}
console.log(employee1);

// 2. intersection using inline type annotation
let employee2: Person & Employee = {
    name: "Sree",
    age: 19,
    id: 2,
    department: "HR"
}
console.log(employee2);