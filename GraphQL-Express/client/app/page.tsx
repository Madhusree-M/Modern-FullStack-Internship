'use client'

import { useEffect, useState } from "react"

export default function Home()
{

  const [todos, setTodos] = useState([]);


  async function fetchData()
  {
    const response = await fetch("http://localhost:4000/graphql",{
      method: "POST",
      "headers" : {
        "Content-Type" : "application/json"
      },

      body : JSON.stringify({
        query: `
          query{
            getTodos{
              id
              todo
              completed
              user{
                id
                firstName
                lastName
                email
              }
            }
          }
        `
      })
    })
    const data = await response.json()
    console.log(data.data.getTodos);
    setTodos(data.data.getTodos);
  } 

  useEffect(() => {
    fetchData();
  },[])

  return(
    <div className="flex flex-wrap gap-5 m-5">

    {
      todos.map((todo:any) => (
        <div key={todo.id} className="w-85 p-5 border border-slate-400 bg-slate-200">
          <h2>Todo : {todo.todo}</h2>
          <h4>Iscompleted :  {String(todo.completed)}</h4>
          <h3>{todo.user.firstName}</h3>
          <h3>{todo.user.lastName}</h3>
          <h3>{todo.user.email}</h3>
        </div>
      ))
    }
    </div>
  )
}