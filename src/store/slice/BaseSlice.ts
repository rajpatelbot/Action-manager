import { createSlice } from "@reduxjs/toolkit";
import { BaseSliceInterface, TodosDataInterface } from "../../@types/interface";

const initialState: BaseSliceInterface = {
  todos: [],
};

export const BaseSlice = createSlice({
  name: "base",
  initialState,
  reducers: {
    setTodos: (state, action: TodosDataInterface) => {
      state.todos = action.payload;
    },
  },
});

export const { setTodos } = BaseSlice.actions;
export default BaseSlice.reducer;
