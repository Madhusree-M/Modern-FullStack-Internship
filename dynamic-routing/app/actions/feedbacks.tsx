'use server'

export async function getFeedbacks()
{
    const response = await fetch("http://localhost:3000/api/feedbacks")
    const data = await response.json()

    return data.feedbacks
}