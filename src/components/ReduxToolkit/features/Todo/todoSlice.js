// /e:/car-rental-frontend/src/components/ReduxToolkit/features/Todo/todoSlice.js
// Redux Toolkit slice for todo state management

import { createSlice, nanoid } from "@reduxjs/toolkit";

// Initial state for the todo feature
const initialState = {
  todos: [
    {
      id: 1,
      text: "Sample Todo",
    },
  ],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    // Add a new todo.
    // Accepts either a string payload (the text) or an object { text }.
    // Generates a unique id via nanoid and pushes the new todo into state.todos.
    addTodo: (state, action) => {
      const text = typeof action.payload === "string" ? action.payload : action.payload?.text;
      const newTodo = {
        id: nanoid(),
        text: text ?? "",
      };

      // Debug logging: current state, incoming action, and constructed todo
      console.log("AddTodo state:", state, "action:", action, "newTodo:", newTodo);

      // Immer allows direct mutation: push the new todo into the array
      state.todos.push(newTodo);
    },

    // Remove a todo by id.
    // Accepts either a raw id payload or an object { id }.
    removeTodo: (state, action) => {
      // Debug logging to trace removal operations
      console.log("RemoveTodo - state:", state, "action:", action);

      const id = action.payload?.id ?? action.payload;
      // Filter out the todo with matching id
      state.todos = state.todos.filter((todo) => todo.id !== id);
    },

    // Update the text of an existing todo.
    // Expects payload { id, text }.
    updateTodo: (state, action) => {
      const { id, text } = action.payload;
      // Find an existing todo by id
      const existingTodo = state.todos.find((todo) => todo.id === id);
      if (existingTodo) {
        // Replace the todos array with a new array where the matching todo is updated.
        // This keeps the update predictable; could also mutate existingTodo.text directly.
        state.todos = state.todos.map((todo) =>
          todo.id === id ? { ...todo, text } : todo
        );
      }
    },
  },
});

// Export action creators
export const { addTodo, removeTodo, updateTodo } = todoSlice.actions;

// Export the reducer as default
export default todoSlice.reducer;
