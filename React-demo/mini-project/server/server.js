const express = require("express");
const cors = require("cors");

const path =require("path")
const fs = require("fs")

const app = express();

app.use(express.json());
app.use(cors());

const PORT = 8000;

app.get("/", (req,res) => {
    res.send("Hello from home route")
})


app.post("/contact",(req,res) => {
    // we need to extract formdata

    const formData = req.body;
    console.log("Fprm Data : ",formData);

    const filePath = path.join(__dirname, "users.json");
    console.log("filepath" , filePath);

    const fileData = fs.readFileSync(filePath, "utf-8");

    const data = JSON.parse(fileData);

    // we need to append the formData into the data

    data.push(formData);

    console.log("data : ",data);

    fs.writeFileSync(filePath, JSON.stringify(data))

    res.json({
        status:"success",
        message: "Data stored successfully",
        data
    })
})

app.listen(PORT, () =>{
    console.log("listening");
})