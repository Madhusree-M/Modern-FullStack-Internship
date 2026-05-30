const nums = [1,2,3,4,5,6,7,8,9,10];

// task -> filter all even numbers

const even = nums.filter((el) => {
    return el%2 === 0;
})

console.log(even);

const arr = [
    {
        name:"Madhu",
        age : 15
    },
    {
        name:"Harsh",
        age : 19
    },
    {
        name:"Khavs",
        age : 21
    }
];

// return an arr where age >= 18

const newarray = arr.filter((el) => {
    return el.age >= 18;
})

console.log(newarray);
