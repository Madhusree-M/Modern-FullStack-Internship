import { useState } from "react";
import TaskPage from "./components/TaskPage";
import type { Task } from "./types/task";


const App = () => {

    const [tasks,setTasks] = useState<Task[]>([]);

    function handleAdd(task:Task)
    {
        const dup = tasks.find(
            (el) => el.id === task.id
        );

        if(dup)
        {
            alert("Task id already exists");
            return;
        }

        setTasks([...tasks,task]);
    }

    function handleDelete(id:number)
    {
        setTasks(
            tasks.filter(task => task.id !== id)
        );
    }

    function handleEdit(id:number, title:string)
    {
      const task = tasks.find((el) => el.id == id);
      if(task)
        task.title = title;
      else
        alert("Task not found");
    }

    return(
        <>
          <h3>Task Manager</h3>
            <TaskPage
                tasks={tasks}
                handleAdd={handleAdd}
                handleDelete={handleDelete}
                handleEdit={handleEdit}
            />
        </>
    );
}

export default App;