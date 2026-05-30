// generics

// const number = 123
function generic<T> (value:T):T{
    // if(typeof(value) === 123 )
    console.log(typeof(true) === "boolean");
    console.log("string value = ", value);
    return value;
}

function generic2<T> (value:T):void{
    if(typeof(value) === typeof(1))
        console.log(value);
}

generic<number>(123);

// create a function for arr

function getArrElem<T> (arr:T[]): T|undefined
{
    return arr[0];
}

const arr:number[] = [1,2,3,4,5];
const output = getArrElem<number[]>([[1,2,3,4],[5,6,7,8]]);
console.log(output)
