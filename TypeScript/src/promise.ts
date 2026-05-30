const promise = new Promise((resolve,reject) => {
    // resolve("Promise resolved");
    reject("Promise rejected");
})
console.log(promise);

promise.then(() => {
    console.log("promise handled")
}).catch((error) => {
    console.log(error.message)
})


// a function can return a promise

function returnPromise()
{
    return new Promise((resolve,reject) => {
        reject("---------This promise is rejected");
    })
}

const p = returnPromise();
// console.log(p);

// promise handling
p.then(() => {
    console.log("fulfilled");
}).catch((err) => {
    console.log(err);
})