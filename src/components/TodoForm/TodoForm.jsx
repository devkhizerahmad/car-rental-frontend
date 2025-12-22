import React, { useState } from "react";
import { UseTodo } from "../../context/TodoContext";

function TodoForm() {
  const [todo, setTodo] = useState("");
  const { addTodo } = UseTodo();

  const handleChange = (e) => {
    e.preventDefault();
    if (!addTodo) return;
    if (!todo || !todo.trim()) return;
    addTodo({ name: todo.trim(), completed: false });
    setTodo("");
  };

  return (
    <>
      <form onSubmit={handleChange} action="">
        <input
          className="text-black"
          type="text"
          placeholder="Write todo"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button>Add</button>
      </form>
    </>
  );
}

export default TodoForm;
