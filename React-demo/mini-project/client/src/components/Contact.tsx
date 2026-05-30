

import { useState } from "react"

function ContactForm()
{
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    // sending formData to the server

    async function handleSubmit(e:any)
    {
        e.preventDefault();

        const res = await fetch("http://localhost:8000/contact",{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({fullName, email, message})
        })

        setFullName("");
        setEmail("");
        setMessage("");
        console.log(res);
    }

    return(
        <form onSubmit={handleSubmit}>
            <label htmlFor="fullName">Full Name : </label>
            <input type="text"
             name="fullName" 
             id="fullName" 
             onChange={(e) => setFullName(e.target.value)}
             placeholder="Enter your fullname"
             value={fullName}
             >
            </input>

            <br/>
            <br/>


            <label htmlFor="email">Email : </label>
            <input type="text"
             name="email" 
             id="email" 
             onChange={(e) => setEmail(e.target.value)}
             placeholder="Enter your email"
             value={email}
             >
            </input>

            <br/>
            <br/>


            <label htmlFor="message">Message : </label>
            <textarea
                name="message" 
                id="message" 
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Enter message"
                value={message}
                rows={5}
                cols={50}
             >
            </textarea>

            <br/>
            <br/>

            
            <button type="submit">Submit</button>
        </form>
    )
}

export default ContactForm