// GET route

let students = [
    {
        id: 1,
        name : 'Madhu',
        marks : 100,
        isPresent : false
    },
    {
        id: 2,
        name : 'Harshini',
        marks : 97,
        isPresent : false
    },
    {
        id: 3,
        name : 'Ragavi',
        marks : 98,
        isPresent : false
    },
    {
        id: 4,
        name : 'Mathumitha ',
        marks : 99,
        isPresent : false
    },
]

type Student = {
    id: number
    name: string,
    marks: number,
    isPresent: boolean
}

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
    const newStudent:Student = {
        id: student.id,
        name : student.name,
        marks : student.marks,
        isPresent : student.isPresent
    }

    students.push(newStudent);
    return Response.json({
        status: "New user created",
        students
    })
}

// PATCH 

export async function PATCH(request:Request)
{
    const body = await request.json();
    console.log("body ", body);

    const studentToUpdate = students.find((stud) => {
        return stud.name === body.name
    })

    if(!studentToUpdate)
    {
        return Response.json({
            status : "Student not found"
        })
    }

    studentToUpdate.id = 5;

    return Response.json({
        status : "Student details updated successfully",
        students
    })
}

// PUT

export async function PUT(request:Request) {
    const body = await request.json();

    const resourceToUpdate = students.find((stud) => {
        return stud.id === body.id;
    })
    if(!resourceToUpdate)
    {
        return Response.json({
            status: 404,
            error: "Not Found"
        })
    }

    resourceToUpdate.name = body.name;
    resourceToUpdate.id = body.id;
    resourceToUpdate.marks = body.marks;
    resourceToUpdate.isPresent = body.isPresent;

    return Response.json({
        status: "success",
        resource : students
    })
}


// DELETE

export async function DELETE(request:Request)
{
    const body = await request.json();

    students = students.filter((stud) => {
        return stud.id !== body.id
    })

    return Response.json({
        status : 200,
        students
    })
}