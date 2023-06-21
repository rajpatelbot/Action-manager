import { ChangeEvent, useCallback, useState } from "react";
import { debounce } from "../utils/utils";
import { StateInterface } from "../@types/interface";
import { useSelector } from "react-redux";

export default function SearchTodoForm({ setFilteredTodos }: any) {
  const [search, setSearch] = useState<string>("");
  const todos = useSelector((state: StateInterface) => state.base.todos);

  const getTodosData = useCallback(
    (newSearch: string) => {
      const filteredTodos = todos.filter((todo) => {
        return (
          todo.title
            .toLocaleLowerCase()
            .includes(newSearch.toLocaleLowerCase()) ||
          todo.desc.toLocaleLowerCase().includes(newSearch.toLocaleLowerCase())
        );
      });
      setFilteredTodos(filteredTodos);
    },
    [setFilteredTodos, todos]
  );

  const handleSearchInput = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setSearch(e.target.value);
      debounce(() => getTodosData(e.target.value))();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [search]
  );

  return (
    <div>
      <input
        id="searchTodo"
        name="searchTodo"
        type="text"
        value={search}
        placeholder="Search todo"
        onChange={handleSearchInput}
        className="w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
      />
    </div>
  );
}
