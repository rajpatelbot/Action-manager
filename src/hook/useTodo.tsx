import { getDate } from "../utils/utils";
import {
  addTodo,
  checkTodo,
  deleteTodo,
  editTodo,
} from "../store/slice/BaseSlice";
import { useDispatch } from "react-redux";
import { useCallback } from "react";
import { TodoInputInterface } from "../@types/interface";

export const useTodo = () => {
  const dispatch = useDispatch();

  const onAddTodo = useCallback(
    ({ title, desc }: TodoInputInterface) => {
      if (!title || !desc) return;

      dispatch(
        addTodo({
          id: new Date().valueOf(),
          title,
          desc,
          createdAt: getDate(new Date()),
          isCompleted: false,
        })
      );
    },
    [dispatch]
  );

  const onIsCompleted = useCallback(
    (id: number) => {
      dispatch(checkTodo(id));
    },
    [dispatch]
  );

  const onDeleteTodo = useCallback(
    (id: number) => {
      dispatch(deleteTodo(id));
    },
    [dispatch]
  );

  const onEditTodo = useCallback(
    (id: number, title: string) => {
      dispatch(editTodo({ id, title }));
    },
    [dispatch]
  );

  return { onAddTodo, onIsCompleted, onDeleteTodo, onEditTodo };
};
