import { ChangeEvent, FormEvent, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { StateInterface } from "../@types/interface";
import { onAddTodo } from "../utils/todo";

export const TodoForm = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState<string>("");
  const todos = useSelector((state: StateInterface) => state.base.todos);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onAddTodo(todos, title, dispatch);
    setTitle("");
  };

  return (
    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form className="flex items-center gap-2" onSubmit={handleSubmit}>
        <input
          id="todo"
          name="todo"
          type="text"
          value={title}
          onChange={handleInputChange}
          placeholder="Todo title"
          className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
        <button
          type="submit"
          className="flex w-32 justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Add Todo
        </button>
      </form>
    </div>
  );
};
