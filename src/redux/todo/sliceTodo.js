import { createSlice } from "@reduxjs/toolkit";

const initialState = { todos: [] };

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo(state, action) {
      console.log(action.type);
      console.log(action.payload);
      state.todos.push({
        id: new Date().toISOString(),
        text: action.payload.text,
        completed: false,
      });
    },
    removeTodo(state, action) {
      console.log(action.payload.id);
      state.todos = state.todos.filter((todo) => todo.id !== action.payload.id);
    },
    handleTodoComplete(state, action) {
      const toggleTodo = state.todos.find(
        (todo) => todo.id === action.payload.id
      );
      console.log(toggleTodo);
      toggleTodo.completed = !toggleTodo.completed;
    },
  },
});

export const { addTodo, removeTodo, handleTodoComplete } = todoSlice.actions;
export default todoSlice.reducer;
