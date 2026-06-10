'use client'

import { useEffect, useState } from "react"

export default function Feedbacks()
{
    
    const [feedbacks,setFeedbacks] = useState([]);
    const [message, setMessage] = useState("");

    async function getData()
    {
        const response = await fetch("http://localhost:3000/api/feedbacks")
        const data = await response.json()
        setFeedbacks(data.feedbacks)
    }

    async function putData()
    {
        await fetch("http://localhost:3000/api/feedbacks",{
            method:"POST",
            headers: {
                "Content-Type" : 'application/json',
            },
            body : JSON.stringify({
                message
            })
        })

        getData();
    }

    // DELETE method using Params
    
    // async function deleteFeedback(id: number){
    //     fetch(`/api/feedbacks?id=${id}`, {
    //     method: "DELETE"
    //     });

    //     getData();
    // }

    async function deleteData(id: number)
    {
        await fetch(`http://localhost:3000/api/feedbacks`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                id
            })
        });

        getData();
    }

    useEffect(() => {
        getData()
    }, []);

    return(
        <>
            {/* <label htmlFor="message"></label> */}
            <textarea name="message" 
            id="message" 
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Enter your feedback..."
            className="m-5 p-5 border rounded-md"
            rows= {5}
            cols={80}
            ></textarea>

            <button className="border px-5 p-2" onClick={putData}>Add</button>
            
            <div className="flex gap-10 mt-5 flex-wrap">
            {
                feedbacks.map((fb:any) => (
                    <div key={fb.id} className="border p-5 w-63 bg-slate-100">
                        <h2>Id : {fb.id}</h2>
                        <h2>Message : {fb.message}</h2>
                        <button onClick={() => deleteData(fb.id)} className="mt-10 border rounded-md px-3">Delete Feedback</button>
                    </div>
                ))
            }
            </div>
        </>
    )
}