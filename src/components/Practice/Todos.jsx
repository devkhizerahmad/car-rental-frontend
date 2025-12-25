import React, { useEffect, useState } from "react";
import { TodoProvider } from "../../context/TodoContext";
import TodoForm from "../TodoForm/TodoForm";
import TodoItem from "../TodoForm/TodoItem";

function Todos() {
  const [todos, setTodos] = useState([]);
  const addTodo = (todo) => {
    setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev]);
  };
  const updateTodo = (id, updatedTodo) => {
    setTodos((prev) =>
      prev.map((prevTodo) =>
        prevTodo.id === id ? { ...prevTodo, ...updatedTodo } : prevTodo
      )
    );
  };
  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };
  const toggleComplete = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };
  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos")) || [];
    console.log("Current Todos:", todos);
    if (todos && todos.length > 0) {
      setTodos(todos);
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
    console.log("Todos saved to localStorage:", todos);
  }, [todos]);
  return (
    <TodoProvider
      value={{
        todos,
        setTodos,
        addTodo,
        updateTodo,
        deleteTodo,
        toggleComplete,
      }}
    >
      <div className="mb-4 p-4 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 flex flex-col gap-y-4">
        <TodoForm />
      </div>
      <div>
        {todos.map((todo) => (
          <div key={todo.id} className="w-full mb-2">
            <TodoItem todo={todo} />
          </div>
        ))}
      </div>
    </TodoProvider>
  );
}

export default Todos;
