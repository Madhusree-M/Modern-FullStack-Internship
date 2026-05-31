'use client'

import { startTransition, useOptimistic } from "react"

const comments= ['Hi', 'Hello']

export default function Optimistic(){
    const [opt, setOpt] = useOptimistic<string[], string>(
        comments,
        (state, newVal) => [...state, newVal]
    );

    function handleClick(){
        //const comment = "I ma learning";
        startTransition(() => {
        setOpt("I ma learning")
        })
        
    }
    return (
        <>
        <h1>User comment:</h1>
        <button onClick={handleClick}>Add Comment</button>
        {
            opt.map((comment, index)=>(
                <div key={index}>
                    {comment}
                </div>
            ))
        }
        </>
    )
}