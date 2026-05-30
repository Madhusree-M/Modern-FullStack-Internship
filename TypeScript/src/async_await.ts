async function sayHello()
{
    console.log("hello");
} 

sayHello();


async function returnPromise()
{
    return new Promise(async (resolve,reject) => {
        const p= await(resolve("resolved"))
    })
}

const p = returnPromise();
console.log(p)