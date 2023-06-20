import { useSelector } from "react-redux";
import { AiFillDelete } from "react-icons/ai";
import { MdOutlineDone } from "react-icons/md";
import { StateInterface } from "../@types/interface";
import { useTodo } from "../hook/useTodo";
import SearchTodoForm from "./SearchTodoForm";
import { useEffect, useState } from "react";
import { SortTodo } from "./SortTodo";

export const TodoLists = () => {
  const todos = useSelector((state: StateInterface) => state.base.todos);
  const [filteredTodos, setFilteredTodos] = useState(todos);
  const { onIsCompleted, onDeleteTodo } = useTodo();

  useEffect(() => {
    setFilteredTodos(todos);
  }, [todos]);

  return (
    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-7xl">
      <div className="flex items-center w-full justify-between">
        <h1 className="font-semibold text-2xl">All todos</h1>
        <SearchTodoForm setFilteredTodos={setFilteredTodos} />
        <SortTodo setFilteredTodos={setFilteredTodos} />
      </div>

      <div className="grid grid-cols-4 gap-4 mt-10">
        {filteredTodos.length > 0 ? (
          filteredTodos.map((todo) => (
            <div
              key={todo.id}
              className="p-4 border border-gray-300 rounded-lg shadow"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-bold">{todo.title}</h3>
                  <p className="text-gray-600 mb-2">{todo.desc}</p>
                </div>

                {todo.isCompleted ? (
                  <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                    Completed
                  </span>
                ) : (
                  <span className="inline-flex items-center rounded-md bg-purple-50 px-2 py-1 text-xs font-medium text-purple-700 ring-1 ring-inset ring-purple-700/10">
                    Pending
                  </span>
                )}
              </div>

              <div className="flex justify-between mt-4">
                <p className="text-sm text-gray-500">
                  Created on: {todo.createdAt}
                </p>
                <div>
                  <button
                    onClick={() => onDeleteTodo(todo.id)}
                    className="text-red-500 mr-2"
                  >
                    <AiFillDelete />
                  </button>
                  <button
                    onClick={() => onIsCompleted(todo.id)}
                    className="text-green-500"
                  >
                    <MdOutlineDone />
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-slate-500">Nothing found!!</p>
        )}
      </div>
    </div>
  );
};
