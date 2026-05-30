import { useState } from "react";
import type { Task } from "../types/task";


interface Props
{
    tasks:Task[];
    handleAdd:(task:Task) => void;
    handleDelete:(id:number) => void;
    handleEdit:(id:number,title:string) => void;
}

const TaskPage = ({
    tasks,
    handleAdd,
    handleDelete,
    handleEdit
}:Props) => {

    const [title,setTitle] = useState("");

    return(
        <>
            <input
                type="text"
                placeholder="Enter task"
                value={title}
                required
                onChange={(e) => setTitle(e.target.value)}
            />  
            <button
                onClick={() => {
                    if(title.trim() === "")
                        {
                            alert("Please enter task");
                            return;
                        }
                    handleAdd({
                        id:Date.now(),
                        title:title,
                        priority:"Low",
                        isCompleted:false
                    });

                    setTitle("");
                }}
            >
                Add
            </button>

            {
                tasks.map(task => (
                    <div key={task.id}>

                        <h3>{task.title}</h3>

                        <button
                            onClick={() =>
                            {
                                const updatedTitle = prompt(
                                    "Enter new title",
                                    task.title
                                );

                                if(updatedTitle === null)
                                {
                                    return;
                                }

                                if(updatedTitle.trim() === "")
                                {
                                    alert("Title cannot be empty");
                                    return;
                                }
                                handleEdit(task.id,"Updated Task")
                            }}
                        >
                            Edit
                        </button>

                        <button
                            onClick={() =>
                                handleDelete(task.id)
                            }
                        >
                            Delete
                        </button>

                    </div>
                ))
            }
        </>
    );
}

export default TaskPage;