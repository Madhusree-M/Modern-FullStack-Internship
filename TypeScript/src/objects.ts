// Objects in TypeScript

let obj = {
    name:"Madhu",
    id:1
}
console.log(obj);

const student1:
{
    name:string,
    age:number,
    marks:number[],
    isPassed:boolean
} = {
    name:"Sree",
    age:19,
    marks:[90, 95, 85],
    isPassed:true
}
console.log(student1);

const student2:{
    name:string,
    age:number,
    marks:number[],
    isPassed:boolean
} = {
    name:"Harshini",
    age:20,
    marks:[85, 80, 90],
    isPassed:true
}
console.log(student2);

const student3:{
    name:string,
    age:number,
    marks:number[],
    isPassed:boolean
} = {
    name:"Khaviya",
    age:18,
    marks:[70, 75, 80],
    isPassed:false
}
console.log(student3);

// specifying the type for each object is difficult and time consuming. 

// solution using type alias
type Student = {
    name:string,
    age:number,
    marks:number[],
    isPassed?:boolean // optional property
}

const student4:Student = {
    name:"Ragavi",
    age:19,
    marks:[90, 95, 85],
}
console.log(student4);

// solution using interface
interface IStudent {
    name:string,
    age:number,
    marks:number[],
    isPassed?:boolean // optional property
}

const student5:IStudent = {
    name:"Sowmya",
    age:20,
    marks:[85, 80, 90],
}
console.log(student5);

// difference between type alias and interface
// 1. Type alias can be used to define primitive types, union types, intersection types, tuples, etc. whereas interface can only be used to define object types.
// 2. Type alias cannot be extended or implemented by other types or interfaces whereas interface can be extended or implemented by other interfaces or classes.
// 3. Type alias cannot be merged with another type alias with the same name whereas interface can be merged with another interface with the same name. 


interface Car
{
    brand:string,
    model:string,
    year:number
    mileage:number,
    price:number,
    topSpeed:number
}

const car1:Car = 
{
    brand:"Toyota",
    model:"Fortuner",
    year:2023,
    mileage:18,
    price:4800000,
    topSpeed:180
}
console.log(car1);


interface Doctor
{
    name:string,
    specialization:string,
    experience:number,
    hospital:string,
    contact:number
}

const doctor1:Doctor =
{
    name:"Dr. Madhu",
    specialization:"Cardiologist",
    experience:10,
    hospital:"Apollo Hospital",
    contact:9659013590
}
console.log(doctor1);