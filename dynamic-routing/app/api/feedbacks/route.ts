let feedbacks = [
    {
        id: 1,
        message: "Good"
    },
    {
        id: 2,
        message: "Excellent"
    },
    {
        id: 3,
        message: "Ok"
    },
    {
        id: 4,
        message: "Very helpful"
    },
    {
        id: 5,
        message: "Needs improvement"
    },
    {
        id: 6,
        message: "Great service"
    },
    {
        id: 7,
        message: "Satisfied"
    },
    {
        id: 8,
        message: "Could be better"
    },
    {
        id: 9,
        message: "Outstanding support"
    },
    {
        id: 10,
        message: "Quick response"
    }
];

// GET
export async function GET()
{
    return Response.json({
        status :  200,
        feedbacks
    })
}

// POST
export async function POST(request: Request)
{
    const body = await request.json();

    const newFeedback = {
        id : feedbacks.length + 1,
        message: body.message
    }

    feedbacks.push(newFeedback)

    return Response.json({
        status: 201,
        feedbacks
    })
}


// DELETE

export async function DELETE(request:Request)
{
    const body = await request.json();

    feedbacks = feedbacks.filter((feedback) => {
        return feedback.id !== body.id;
    })

    return Response.json({
        status: 402,
        feedbacks
    })
}


// DELETE method -> using Params

// export async function DELETE(request:Request)
// {
//     const {searchParams} = new URL(request.url);
//     const id = searchParams.get("id");
//     const fId = JSON.parse(id!);

//     const output = feedbacks.filter((feedback) => {
//         return feedback.id !== fId;
//     })

//     feedbacks = output;

//     return Response.json({
//         status: "Feedback deleted",
//         feedbacks
//     })
// }