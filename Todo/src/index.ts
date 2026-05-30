// Task 
interface Task
{
    id:number,
    title:string,
    description:string,
    isCompleted:boolean,
    priority:"low" | "medium" | "high"
}

// create empty task array
let tasks:Task[] = [];

function addTask(task: Task) : void
{
    // check dup

    tasks.push(task);
    console.log("Task added successfully");
}
// using filter method to delete task
function deleteTask(id:number): void
{
    tasks = tasks.filter(task => task.id !== id);
    console.log("Task deleted successfully");
}

function showTasks():void
{
    // check empty array
    console.log("All Tasks:", tasks);
}

function updateTask(id:number, updatedTask: Task)
{
    // const task = tasks.filter(task => task.id === id)[0];
    const task = tasks.find(task => task.id === id);
    if(task)    {
        task.title = updatedTask.title;
        task.description = updatedTask.description;
        task.isCompleted = updatedTask.isCompleted;
        task.priority = updatedTask.priority;
        console.log("Task updated successfully");
    }
    else
    {
        console.log("Task not found");
    }
}

function searchTask(id:number): Task | undefined
{
    return tasks.filter(task => task.id === id)[0];
}

function getCompletedTasks(): Task[]
{
    return tasks.filter(task => task.isCompleted);
}

let task1:Task = {
    id:1,
    title:"Complete HW",
    description:"Recall TS concepts and complete the assignment",
    isCompleted:false,
    priority:"high"
}
let task2:Task = {
    id:2,
    title:"Yoga",
    description:"do yoga at 6 PM",
    isCompleted:true,
    priority:"medium"
}

let task3:Task = {
    id:3,
    title:"Learn TS",
    description:"Practice filter and map methods",
    isCompleted:false,
    priority:"high"
}

// add invoked
addTask(task1);
addTask(task2);
addTask(task3);

// show task invoked
showTasks();

// update task invoked
let updatedTask:Task = {
    id:1,
    title:"XXXX",
    description:"Recall TypeScript concepts and complete the assignment",
    isCompleted:true,
    priority:"high"
}
updateTask(1, updatedTask);
console.log("After updating task with id 1:");
showTasks();

// search task invoked
console.log("Searched Task:", searchTask(2));

// get completed tasks invoked
// console.log("Completed Tasks:", getCompletedTasks());

// delete task invoked
deleteTask(3);

// show task invoked
showTasks();    
