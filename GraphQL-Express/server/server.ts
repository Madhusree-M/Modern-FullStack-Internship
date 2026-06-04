const express = require('express')

const apollo = require("@apollo/server")

const app = express();
const PORT = 4000;

app.use(express.json());

app.listen(PORT, () => {
    console.log(`Server started at ${PORT}`)
})