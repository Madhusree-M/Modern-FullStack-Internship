const nums = [1,2,3,4,5];


const updatedArr = nums.map((elem,idx, nums) => {
    return elem * 2;
})

console.log(updatedArr);
console.log("Org",nums);

const arr = [
    {
        id:1,
        name:"Madhu",
        age:17,
        phone:9659013590
    },
    {
        id:2,
        name:"Harsh",
        age:20,
        phone:9361159306
    },
    {
        id:3,
        name:"Mathu",
        age:21,
        phone:975127212
    }
]

const names = arr.map((elem) => {
    return elem.name;
})

console.log(names);

const newArr = arr.map((elem) => {
    return {
        ...elem, 
        canVote:elem.age >= 18
    };
    // old method

    // if(elem.age >= 18)
    //     return {...elem,canVote:true};
    // else
    //     return {...elem,canVote:false};
})

console.log(newArr);

