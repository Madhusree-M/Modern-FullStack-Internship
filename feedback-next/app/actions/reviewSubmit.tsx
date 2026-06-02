'use server'
import { revalidatePath } from "next/cache"
import pool from "../lib/db"

async function reviewSubmit(formData: FormData)
{
    const username = formData.get("username")
    const email = formData.get("email")
    const review = formData.get("review")
    const rating = formData.get("rating")

    await pool.query(
        `
        INSERT INTO reviews(username, email, review, rating)
        VALUES('${username}', '${email}', '${review}', ${rating})
        `
    )
    revalidatePath('/reviews')

}
export default reviewSubmit;

export async function getReviews()
{
    const data = await pool.query(
        `
        SELECT * FROM reviews ORDER by id desc;
        `
    )
    return data.rows;
}