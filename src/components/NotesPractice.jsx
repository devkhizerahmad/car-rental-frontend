import { useState, useEffect, useCallback, useMemo } from "react";

// LocalStorage key
const STORAGE_KEY = "notes_app";

function NotesPractice() {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState("");

  // Fetch todos from localStorage on mount
  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    setTodos(savedTodos);
    console.log("Loaded todos from localStorage:", savedTodos);
  }, []);

  // Save todos to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
    console.log("Saved todos to localStorage:", todos);
  }, [todos]);

  // Add Todo
  const addTodo = useCallback(() => {
    if (!task.trim()) return;
    const newTodo = { id: Date.now(), task, completed: false };
    setTodos(prev => [...prev, newTodo]);
    setTask("");
    console.log("Added todo:", newTodo);
  }, [task]);

  // Toggle completed
  const toggleTodo = useCallback((id) => {
    setTodos(prev =>
      prev.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
    console.log("Toggled todo id:", id);
  }, []);

  // Delete Todo
  const deleteTodo = useCallback((id) => {
    setTodos(prev => prev.filter(todo => todo.id !== id));
    console.log("Deleted todo id:", id);
  }, []);

  // Stats using useMemo
  const completedCount = useMemo(
    () => todos.filter(todo => todo.completed).length,
    [todos]
  );
  const pendingCount = useMemo(
    () => todos.filter(todo => !todo.completed).length,
    [todos]
  );

  return (
    <div style={{ padding: "20px", fontFamily: "Arial", maxWidth: "500px", margin: "0 auto" }}>
      <h2>Notes Todo App (Step 2 Optimized)</h2>

      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter note"
        style={{ padding: "8px", width: "70%", marginRight: "10px" }}
      />
      <button
        onClick={addTodo}
        disabled={!task.trim()}
        style={{ padding: "8px 12px", cursor: task.trim() ? "pointer" : "not-allowed" }}
      >
        Add Note
      </button>

      <ul style={{ listStyle: "none", padding: 0, marginTop: "20px" }}>
        {todos.map(todo => (
          <li
            key={todo.id}
            style={{
              padding: "10px",
              marginBottom: "8px",
              border: "1px solid #ccc",
              borderRadius: "5px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              background: todo.completed ? "#e6ffe6" : "#ffe6e6",
              textDecoration: todo.completed ? "line-through" : "none",
              transition: "all 0.2s",
              cursor: "pointer"
            }}
          >
            <span onClick={() => toggleTodo(todo.id)}>{todo.task}</span>
            <div>
              <button
                onClick={() => toggleTodo(todo.id)}
                style={{ marginRight: "5px", padding: "4px 8px" }}
              >
                {todo.completed ? "Completed" : "Pending"}
              </button>
              <button
                onClick={() => deleteTodo(todo.id)}
                style={{ padding: "4px 8px" }}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>

      <div style={{ marginTop: "20px", background: "#f0f0f0", padding: "10px", borderRadius: "5px" }}>
        <p>Total Todos: {todos.length}</p>
        <p>Completed: {completedCount}</p>
        <p>Pending: {pendingCount}</p>
      </div>
    </div>
  );
}

export default NotesPractice;
