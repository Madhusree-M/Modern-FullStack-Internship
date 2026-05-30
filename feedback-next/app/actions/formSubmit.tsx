"use server"
const fs = require("fs");
import path from "path";

type Feedback = {
    name: string, 
    email: string,
    message: string
}

async function formSubmit({name, email, message}:Feedback)
{
    const obj = {
        name,
        email,
        message,
    }

    const filePath = path.join(process.cwd(),"app","data","feedbacks.json");

    const fileData = await fs.readFileSync(filePath,"utf-8")
    // console.log(fileData)

    const data = JSON.parse(fileData);

    data.push(obj);

    fs.writeFileSync(filePath,JSON.stringify(data, null, 2))
}

export default formSubmit;