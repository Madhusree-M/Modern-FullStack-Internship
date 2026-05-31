"use server"

import pool from "../lib/db";
import { revalidatePath } from "next/cache";

async function formSubmit(formData: FormData)
{
        const name = formData.get("name");
        const email = formData.get("email");
        const message = formData.get("message");

    await pool.query(
        `
        INSERT INTO feedbacks(name, email, message)
        VALUES ($1, $2, $3)
        `,
        [name, email, message]
    );
    revalidatePath('/feedback')
}

export default formSubmit;


// ---------------------------------------- fs -------------------------------------------


// "use server"
// const fs = require("fs");
// import { revalidatePath } from "next/cache";
// import path from "path";

// async function formSubmit(formData: FormData)
// {
//     const obj = {
//         name : formData.get("name"),
//         email : formData.get("email"),
//         message : formData.get("message")
//     }

//     const filePath = path.join(process.cwd(),"app","data","feedbacks.json");

//     const fileData = fs.readFileSync(filePath,"utf-8")
//     // console.log(fileData)

//     const data = JSON.parse(fileData);

//     data.push(obj);

//     fs.writeFileSync(filePath,JSON.stringify(data, null, 2))

//     revalidatePath('/feedback')
// }

// export default formSubmit;
