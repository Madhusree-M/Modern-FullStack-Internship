// GET route

const students = [
    {
        name : 'Madhu',
        marks : 100,
        isPresent : false
    },
    {
        name : 'Harshini',
        marks : 97,
        isPresent : false
    },
    {
        name : 'Ragavi',
        marks : 98,
        isPresent : false
    },
    {
        name : 'Mathumitha ',
        marks : 99,
        isPresent : false
    },
]

export async function GET()
{
    return Response.json({
        status : "success",
        students
    })
}

export async function POST(request: Request)
{
    const student = await request.json();
    console.log("------------------",student);
    return Response.json({
        status: "New user created",
        student
    })
}