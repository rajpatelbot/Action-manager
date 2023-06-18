import { useEffect } from "react";
import { useSelector } from "react-redux";
import { StateInterface } from "../@types/interface";

export const useLocalStorage = (key: string) => {
  const todos = useSelector((state: StateInterface) => state.base.todos);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(todos));
  }, [key, todos]);

  return todos;
};
