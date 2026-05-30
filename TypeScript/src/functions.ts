//create a function add
export{}

// function declaration
function add(a:number,b:number):number
{
    return a+b;
}

console.log(add(5,10));

//  depositMoney function - arrow function

let balance:number = 5000;
const depositMoney = (amount:number):number => {
    return balance + amount;
}

console.log(balance = depositMoney(10000));
 
// Withdrawal function - function expression

const withdrawMoney = function(amount:number):number{
    return balance-amount;
}

console.log(withdrawMoney(12000));

// ========================== TEMPLATE STRINGS ==========================

let firstName:string = "Madhusree";
let lastName:string = "Mayilsamy";

// let fullName:string = firstName + " " + lastName; // Old way of concatenating strings

let fullName:string = `${firstName} ${lastName}`; // Template string
console.log(fullName);

