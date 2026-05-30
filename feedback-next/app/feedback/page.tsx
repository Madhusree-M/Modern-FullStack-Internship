"use client"

// revalidate path

import { useEffect, useState } from "react";
import formSubmit from "../actions/formSubmit";
import getFeedbacks from "../actions/getFeedbacks";

interface Feedback{
    name: string,
    email: string,
    message: string
}

function Feedback()
{
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const [data, setData] = useState<Feedback[]>([]);


    async function getData()
    {
        const res:Feedback[] = await getFeedbacks();
        setData(res);
    }
    useEffect(() => {
        getData();
    },[]);

    function handleSubmit(e:any)
    {
        e.preventDefault();

        const obj = {
            name,
            email,
            message
        }

        formSubmit(obj);

        setName("");
        setEmail("");
        setMessage("")

        getData();
    }

    return (
        <>
        <form onSubmit={handleSubmit}>

            <label htmlFor="name">
                Name : 
            </label>
            <input
            type="text"
            name="name"
            id="name"
            onChange={(e) => setName(e.target.value)}
            value = {name}>
            </input>

            <br></br>
            <br></br>



            <label htmlFor="name">
                Email : 
            </label>
            <input
            type="text"
            name="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            value = {email}>
            </input>

            <br></br>
            <br></br>


            <label htmlFor="name">
                Feedback : 
            </label>
            <textarea
            name="message"
            id="message"
            onChange={(e) => setMessage(e.target.value)}
            value = {message}>
            </textarea>

            <br></br>
            <br></br>


            <button type="submit">Submit</button>
        </form>

        {/* feedack display */}
        
        {
            data.map((feedback:Feedback, idx) => (
                <div key={idx}>
                    <p>{feedback.name}</p>
                    <p>{feedback.email}</p>
                    <p>{feedback.message}</p>
                    <br/>
                    <br/>
                    
                </div>
            ))
        }
        </>
    )
}

export default Feedback;