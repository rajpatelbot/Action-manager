import { getDate } from "../utils/getDate";
import {
  addTodo,
  checkTodo,
  deleteTodo,
  editTodo,
} from "../store/slice/BaseSlice";
import { useDispatch } from "react-redux";

export const useTodo = () => {
  const dispatch = useDispatch();

  const onAddTodo = (title: string) => {
    dispatch(
      addTodo({
        id: new Date().valueOf(),
        title,
        createdAt: getDate(new Date()),
        isCompleted: false,
      })
    );
  };

  const onIsCompleted = (id: number) => {
    dispatch(checkTodo(id));
  };

  const onDeleteTodo = (id: number) => {
    dispatch(deleteTodo(id));
  };

  const onEditTodo = (id: number, title: string) => {
    dispatch(editTodo({ id, title }));
  };

  return { onAddTodo, onIsCompleted, onDeleteTodo, onEditTodo };
};
