"use client";

import "./globals.css"
import { useState } from "react";

type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

export default function Home() {

  const [todos, setTodos] = useState<Todo[]>([]);
  const [task, setTask] = useState("");

  // Add Todo
  function addTodo() {

    if (task.trim() === "") return;

    const newTodo: Todo = {
      id: Date.now(),
      text: task,
      completed: false,
    };

    setTodos([...todos, newTodo]);
    setTask("");
  }

  // Delete Todo
  function deleteTodo(id: number) {

    setTodos(
      todos.filter((todo) => todo.id !== id)
    );
  }

  // Toggle Completed
  function toggleTodo(id: number) {

    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-5">

      <div className="bg-white w-full max-w-xl p-6 rounded-xl shadow-lg">

        <h1 className="text-4xl font-bold text-center mb-6">
          Todo App
        </h1>

        {/* Input Section */}
        <div className="flex gap-3 mb-6">

          <input
            type="text"
            placeholder="Enter task..."
            value={task}
            onChange={(e) => setTask(e.target.value)}
            className="flex-1 border border-gray-300 p-3 rounded-lg outline-none"
          />

          <button
            onClick={addTodo}
            className="bg-black text-white px-5 rounded-lg"
          >
            Add
          </button>

        </div>

        {/* Todo List */}
        <div className="space-y-3">

          {
            todos.length === 0
            ? (
              <p className="text-center text-gray-500">
                No Tasks Available
              </p>
            )
            : (
              todos.map((todo) => (

                <div
                  key={todo.id}
                  className="flex items-center justify-between border p-4 rounded-lg bg-gray-50"
                >

                  <div className="flex items-center gap-3">

                    {/* Tick Button */}
                    <button
                      onClick={() => toggleTodo(todo.id)}
                      className="text-2xl"
                    >
                      {
                        todo.completed
                        ? "✅"
                        : "⬜"
                      }
                    </button>

                    {/* Todo Text */}
                    <p
                      className={
                        todo.completed
                        ? "line-through text-gray-400"
                        : "text-black"
                      }
                    >
                      {todo.text}
                    </p>

                  </div>

                  {/* Delete Button */}
                  <button
                    onClick={() => deleteTodo(todo.id)}
                    className="bg-red-500 text-white px-3 py-1 rounded-lg"
                  >
                    Delete
                  </button>

                </div>

              ))
            )
          }

        </div>

      </div>

    </div>
  );
}