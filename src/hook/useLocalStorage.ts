import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { StateInterface } from "../@types/interface";
import { setTodos } from "../store/slice/BaseSlice";

export const useLocalStorage = (key: string) => {
  const dispatch = useDispatch();
  const todos = useSelector((state: StateInterface) => state.base.todos);

  useEffect(() => {
    const storedTodos = localStorage.getItem(key);
    if (storedTodos) {
      dispatch(setTodos(JSON.parse(storedTodos)));
    }
  }, [dispatch, key]);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(todos));
  }, [key, todos]);

  return todos;
};
