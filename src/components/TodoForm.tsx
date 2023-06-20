import { ChangeEvent, FormEvent, memo, useCallback, useState } from "react";
import { useTodo } from "../hook/useTodo";
import { TodoInputInterface } from "../@types/interface";

export const TodoForm = memo(() => {
  const { onAddTodo } = useTodo();
  const [todos, setTodos] = useState<TodoInputInterface>({
    title: "",
    desc: "",
  });

  const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTodos({ ...todos, title: e.target.value });
  };

  const handleDescChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setTodos({ ...todos, desc: e.target.value });
  };

  const handleSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      onAddTodo(todos);
      setTodos({ title: "", desc: "" });
    },
    [onAddTodo, todos]
  );

  return (
    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form
        className="flex items-center gap-2 flex-col"
        onSubmit={handleSubmit}
      >
        <input
          id="todoTitle"
          name="todoTitle"
          type="text"
          value={todos.title}
          onChange={handleTitleChange}
          placeholder="Take a todo..."
          className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
        <textarea
          name="todoDesc"
          id="todoDesc"
          cols={30}
          rows={5}
          value={todos.desc}
          onChange={handleDescChange}
          className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        ></textarea>
        <button
          type="submit"
          className="flex w-32 justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Add Todo
        </button>
      </form>
    </div>
  );
});
