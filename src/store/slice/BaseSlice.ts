import { createSlice } from "@reduxjs/toolkit";
import { BaseSliceInterface } from "../../@types/interface";

const initialState: BaseSliceInterface = {
  todos: JSON.parse(localStorage?.getItem("todos") || "[]"),
};

export const BaseSlice = createSlice({
  name: "base",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.unshift(action.payload);
    },

    checkTodo: (state, action) => {
      state.todos.map((todo) => {
        if (todo.id === action.payload) {
          todo.isCompleted = !todo.isCompleted;
        }
        return todo;
      });
    },

    editTodo: (state, action) => {
      state.todos.map((todo) => {
        if (todo.id === action.payload) {
          todo.title = action.payload;
        }
        return todo;
      });
    },

    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { addTodo, checkTodo, deleteTodo, editTodo } = BaseSlice.actions;
export default BaseSlice.reducer;
