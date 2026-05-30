import { useEffect, useState } from "react";

const Counter = () => {
    const [count,setcount] = useState(0);

    function handleIncrement()
    {
        setcount(count+1);
    }
    function handleDecrement()
    {
        setcount(count-1);
    }

    useEffect(() => {
        console.log("Counter is mounted on the screen")
        return () => {
            console.log("Component unmounts")
        }
    },[])
    return(
        <>
            <h1 className="text-4xl font-bold text-red-800">Counter</h1>
            <p className="font-bold text-5xl m-5 border w-50 p-5">{count}</p>
            <button className="mx-10 p-4 border border-black" onClick={handleIncrement}>Increment</button>
            <button className="mx-10 p-4 border border-black" onClick={handleDecrement}>Decrement</button>

        </>
    )
}

export default Counter;