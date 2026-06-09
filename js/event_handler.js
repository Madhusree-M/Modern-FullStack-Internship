console.log("Start")

setTimeout(function () {
    console.log("Hello from Timer")
}, 5000)

const btn = document.getElementById("btn");

btn.addEventListener('click', function(){
    console.log("you clicked the button")
})

function fetchData()
{
    fetch("https:dummyjson.com/users")
    .then(console.log("fetch done"))
}

fetchData();

function returnPromise()
{
    return new Promise((res, rej) => {
        const timer = 4000;

        setTimeout(() => {
            res("Resolved")
        }, timer)
    })
}

const p = returnPromise();
console.log(p);

console.log("End")