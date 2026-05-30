interface user
{
    id:number,
    name:string,
    email:string,
    password:string,
}

const user:user = {
    id:2,
    name:"Madhu",
    email:"madhu@gmail.com",
    password:"12345"
}

const admin:user = {
    id:1,
    name:"Admin",
    email:"admin@gmail.com",
    password:"admin123"
}

// enum Role{
//     USER = "user",
//     ADMIN = "admin"
// }

// ------------------------------------

enum Priority{
    Low = "low",
    Medium = "medium",
    High = "high"
}
console.log(Priority); // 0


enum Role{
    USER = "user",
    ADMIN = "admin"
}   

interface User
{
    id:number,
    name:string,
    email:string,
    password:string,
    role:Role,
    isValid:boolean
}

const user1:User = {
    id:2,
    name:"Madhu",
    email:"madhu@gmail.com",
    password:"12345",
    role:Role.USER,
    isValid:true
}

const admin1:User = {
    id:1,
    name:"Admin",
    email:"admin@gmail.com",
    password:"admin123",
    role:Role.ADMIN,
    isValid:true
}

function login(user:User): void{
    console.log(`User ${user.name} logged in with role ${user.role}`);


    if(user.role === "admin")
    {
        console.log("Admin privileges granted");
    }
    else
    {
        console.log("User privileges granted");
    }
}
login(user1);