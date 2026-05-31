'use server'

import pool from "../lib/db";

async function getFeedbacks()
{
    const result = await pool.query(
        `
        SELECT * from feedbacks order by id desc; 
        `
    );

    return result.rows;
}

export default getFeedbacks;


// -------------------------------------fs----------------------------------------

// 'use server'

// const fs = require("fs");
// import path from "path";

// async function getFeedbacks()
// {
//     const filePath = path.join(process.cwd(),"app","data","feedbacks.json");

//     const res = await fs.readFileSync(filePath, "utf-8");

//     const data = JSON.parse(res);

//     // console.log(data);
//     return data;
// }

// export default getFeedbacks;