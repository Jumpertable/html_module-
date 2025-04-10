"use client";

import { useState } from "react";

export default function Todo() {
  const [todos, setTodos] = useState([
    { id: 1, title: "Writing Next.js", complete: true },
    { id: 2, title: "Do homework", complete: false },
    { id: 3, title: "Sleeping", complete: false },
  ]);

    const [task, setTask] = useState("");
    const [tesk, setTesk] = useState("");


  const addTask = () => {
    if (!task) return;
    const newTask = {
      id: todos.length + 1,
      title: task,
      complete: false,
    };
    setTodos([...todos, newTask]);
    setTask("");
  };

    const removeTask = () => {
        if (!tesk) return;
        const filtered = todos.filter((todo) => todo.title !== tesk);
        setTodos(filtered);
        setTesk("");
      };
  

  return (
    <div className="border-2 max-w-sm border-gray-300 rounded-lg mx-auto m-3 p-4">
      <h1 className="text-xl font-bold">Todo</h1>
      <div>
        <ul>
          {todos.map((todo) => (
            <li key={todo.id} className="my-2">
              <span>{todo.id}. </span>
              <span className="mr-2">{todo.title}</span>
              <input type="checkbox" defaultChecked={todo.complete} />
            </li>
          ))}
        </ul>

        <input
          className="border-2 border-gray-300 rounded-lg p-2 m-2"
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Add a new todo"
        />
        <button
          onClick={addTask}
          className="border-2 border-gray-300 rounded-lg p-2 m-2 bg-blue-500 text-white"
        >
          Add
        </button>

        <input
          className="border-2 border-gray-300 rounded-lg p-2 m-2"
          type="text"
          value={tesk}
          onChange={(e) => setTesk(e.target.value)}
          placeholder="Remove a todo"
        />
        <button
          onClick={removeTask}
          className="border-2 border-gray-300 rounded-lg p-2 m-2 bg-blue-500 text-white"
        >
          Remove
        </button>
      </div>
    </div>
  );
}
