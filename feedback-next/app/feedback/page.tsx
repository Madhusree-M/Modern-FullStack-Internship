import formSubmit from "../actions/formSubmit";
import getFeedbacks from "../actions/getFeedbacks";
import Button from "../components/Button";

interface Feedback{
    id: number,
    name: string,
    email: string,
    message: string
}

async function Feedback()
{
    const data = await getFeedbacks();
    return (
        <>
        <form action={formSubmit}>

            <label htmlFor="name">
                Name : 
            </label>
            <input
            type="text"
            name="name"
            id="name"
            >
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
            >
            </input>

            <br></br>
            <br></br>


            <label htmlFor="name">
                Feedback : 
            </label>
            <textarea
            name="message"
            id="message"
            >
            </textarea>

            <br></br>
            <br></br>

            <Button/>
            {/* <button type="submit">Submit</button> */}
        </form>

        {/* feedack display */}
        
        {
            data.map((feedback:Feedback, idx:any) => (
                <div key={feedback.id}>
                    <p>{feedback.name}</p>
                    <p>{feedback.email}</p>
                    <p>{feedback.message}</p>
                    <br/><br/>
                </div>
            ))
        }
        </>
    )
}

export default Feedback;




// 1. implement useFormStatus
// 2. Store form data in database using postgreSQL dbms
// 3. Fetch the data from DB and display it in the UI

// create .env.local
// npm install pg
// 
// 

// app/lib/db.js
// import {Pool} from 'pg

// const pool = new Pool({host_name : process.env}, db_name)

// connectionString