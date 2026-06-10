export default async function Students()
{
    const response = await fetch("http://localhost:3000/api/students")
    const data = await response.json()
    console.log(data.students);

    const students = data.students
    return(
        <div className="flex gap-5 m-5 flex-wrap">
        {
            students.map((stud:any) => (
                <div key={stud.id} className="border p-5 w-40 bg-slate-100">
                    <h2>{stud.name}</h2>
                    <h3>{stud.marks}</h3>
                    <h3>{String(stud.isPresent)}</h3>
                </div>
            ))
        }
        </div>
    )
}