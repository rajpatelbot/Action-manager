import { Dispatch } from "@reduxjs/toolkit";
import { TodoInterface } from "../@types/interface";
import { getDate } from "./getDate";
import { setTodos } from "../store/slice/BaseSlice";

export const onAddTodo = (
  todos: TodoInterface[],
  title: string,
  dispatch: Dispatch
) => {
  const newTodo: TodoInterface = {
    id: new Date().valueOf(),
    title,
    createdAt: getDate(new Date()),
    isCompleted: false,
  };

  const updatedTodos = [...todos, newTodo];

  dispatch(setTodos(updatedTodos));
};
