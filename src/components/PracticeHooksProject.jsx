import React, { useState, useEffect } from "react";

// Mock API function
const fetchTodos = () =>
  new Promise((resolve) =>
    setTimeout(() => resolve([{ id: 1, task: "Learn React", completed: false }]), 1000)
  );

function MasterHooksProject() {
  // State
  const [todos, setTodos] = useState([]);
  const [counter, setCounter] = useState(0);
  const [completedCount, setCompletedCount] = useState(0);

  // useEffect 1: Fetch todos (API call simulation)
  useEffect(() => {
    let isMounted = true;
    fetchTodos().then((data) => {
      if (isMounted) setTodos(data);
      console.log("data fetched", data);
      
    });
    return () => {
      console.log("component unmounted");
      isMounted = false; // cleanup to avoid memory leak
    };
  }, []);

  // useEffect 2: Auto increment counter
  useEffect(() => {
    const id = setInterval(() => {
      setCounter((prev) => prev + 1);
    }, 1000);

    // Reset counter if todos > 5
    if (todos.length > 5) setCounter(0);
    console.log("counter reset");    

    return () => clearInterval(id);
  }, [todos]); // depend on todos

  // useEffect 3: Derived state - completed todos count
  useEffect(() => {
    const completed = todos.filter((todo) => todo.completed).length;
    console.log("completed count updated", completed);    
    setCompletedCount(completed);
  }, [todos]);

  // Add todo function
  const addTodo = (task) => {
    setTodos((prev) => [
      ...prev,
      { id: prev.length + 1, task, completed: false },
    ]);
    console.log("todo added", task);
  };

  // Toggle todo completed
  const toggleTodo = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
    console.log("todo toggled", id);
  };

  return (
    <div>
      <h1>Master Hooks Project</h1>
      <h2>Counter: {counter}</h2>
      <h2>Completed Todos: {completedCount}</h2>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodo(todo.id)}
            />
            {todo.task}
          </li>
        ))}
      </ul>

      <button onClick={() => addTodo(`Task ${todos.length + 1}`)}>
        Add Todo
      </button>
    </div>
  );
}

export default MasterHooksProject;
