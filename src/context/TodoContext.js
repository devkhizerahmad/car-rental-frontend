import { createContext, useContext } from "react";

export const TodoContext = createContext({
  todos: [{ id: 1, name: "Sample Task", completed: false }],
  addTodo: (todo) => {},
  updateTodo: (id, updatedTodo) => {},
  deleteTodo: (id) => {},
  toggleComplete: (id) => {},
});

export const UseTodo = () => {
  return useContext(TodoContext);
};

export const TodoProvider = TodoContext.Provider;