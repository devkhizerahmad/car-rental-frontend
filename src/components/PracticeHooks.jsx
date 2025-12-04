import { useState, useEffect, useCallback, useMemo } from "react";
import TodoItem from "./TodoItem";

// Mock API
const fetchTodos = () =>
  new Promise((resolve) =>
    setTimeout(
      () => resolve([{ id: 1, task: "Learn React", completed: false }]),
      1000
    )
  );

function PracticeHooks() {
  const [todos, setTodos] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [count, setCount] = useState(0);

  // Fetch API (Mount only)
  useEffect(() => {
    let isMounted = true;

    fetchTodos().then((data) => {
      if (isMounted) {
        setTodos(data);
        console.log("API Fetched:", data);
      }
    });

    return () => {
      isMounted = false;
      console.log("Cleanup: component unmounted");
    };
  }, []);

  // Timer counter (reset if todos > 5)
  useEffect(() => {
    const id = setInterval(() => {
      setCount((p) => p + 1);
    }, 1000);

    if (todos.length > 5) {
      setCount(0);
      console.log("Counter Reset");
    }

    console.log();
    
    return () => clearInterval(id);
    
  }, [todos]);

  // Optimize: Add Todo
  const addTodo = useCallback(() => {
    if (!newTask.trim()) return;

    const newTodo = {
      id: Date.now(),
      task: newTask,
      completed: false,
    };

    setTodos((prev) => [...prev, newTodo]);
    setNewTask("");

    console.log("Added:", newTodo);
  }, [newTask]);

  // Optimize: Toggle Todo
  const toggleTodo = useCallback((id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
    console.log("Toggled ID:", id);
  }, []);

  // Optimize: Delete Todo
  const deleteTodo = useCallback((id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
    console.log("Deleted ID:", id);
  }, []);

  // useMemo → Derived Data
  const completedCount = useMemo(
    () => todos.filter((t) => t.completed).length,
    [todos]
  );
  const pendingCount = useMemo(
    () => todos.filter((t) => !t.completed).length,
    [todos]
  );

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>Todo App (Step 5 – Memo Optimization)</h2>
      <h3>Counter: {count}</h3>

      <input
        type="text"
        placeholder="Enter todo..."
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        style={{ padding: "8px", marginRight: "10px", width: "200px" }}
      />

      <button onClick={addTodo} style={{ padding: "8px 14px" }}>
        Add
      </button>

      <ul style={{ marginTop: "20px" }}>
        {todos.map((todo) => (
          <TodoItem  key={todo.id}  todo={todo}  onToggle={toggleTodo}  onDelete={deleteTodo}         />
        ))}
      </ul>

      <ul
        style={{
          marginTop: "20px",
          listStyle: "none",
          padding: 10,
          backgroundColor: "lightgray",
        }}
      >
        <li>Total Todos: {todos.length}</li>
        <li>Completed: {completedCount}</li>
        <li>Pending: {pendingCount}</li>
      </ul>
    </div>
  );
}

export default PracticeHooks;
