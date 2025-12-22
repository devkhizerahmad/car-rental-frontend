import { createSlice, nanoid } from "@reduxjs/toolkit";

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
    addTodo: (state, action) => {
      const text = typeof action.payload === "string" ? action.payload : action.payload?.text;
      const newTodo = {
        id: nanoid(),
        text: text ?? "",
      };
      console.log( "AddTodo state:", state, "action:", action,
        "newTodo:",
        newTodo
      );

      state.todos.push(newTodo);
    },
    removeTodo: (state, action) => {
      console.log("RemoveTodo - state:", state, "action:", action);
      const id = action.payload?.id ?? action.payload;
      state.todos = state.todos.filter((todo) => todo.id !== id);
    },
    updateTodo: (state, action) => {
      const { id, text } = action.payload;
      const existingTodo = state.todos.find((todo) => todo.id === id);
      if (existingTodo) {
        state.todos = state.todos.map((todo) =>
          todo.id === id ? { ...todo, text } : todo
        );
      }
    },
  },
});

export const { addTodo, removeTodo, updateTodo } = todoSlice.actions;

export default todoSlice.reducer;
