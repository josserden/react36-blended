import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./todo/sliceTodo";

export default configureStore({
  reducer: {
    todos: todoSlice,
  },
});
