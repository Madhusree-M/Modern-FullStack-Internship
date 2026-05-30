"use server"
import path from "path";
const fs = require("fs")

async function submitContactForm(formData: FormData)
{
    const obj = {
        fullName: formData.get("fullName"),
        email: formData.get("email"),
        message: formData.get("message")
    };


    // const filePath = "./app/data/users.json"
    const filePath = path.join(process.cwd(),"app","data","users.json");

    console.log(filePath);

    const fileData = await fs.readFileSync(filePath, "utf-8");
    const data = JSON.parse(fileData);
    console.log(data);
    data.push(obj);

    // console.log(data);

    fs.writeFileSync(filePath, JSON.stringify(data, null, 2))

    console.log("data----",data)
}

export default submitContactForm;