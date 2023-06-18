import { useSelector, useDispatch } from "react-redux";
import { AiOutlineEdit, AiFillDelete } from "react-icons/ai";
import { MdOutlineDone } from "react-icons/md";
import { StateInterface } from "../@types/interface";
import { setTodos } from "../store/slice/BaseSlice";

export const TodoLists = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state: StateInterface) => state.base.todos);

  const handleCompleted = (id: number) => {
    const foundIndex = todos.findIndex((list) => list.id === id);
    const foundTodo = todos[foundIndex];
    const updatedTodo = { ...foundTodo, isCompleted: true };
    const updatedTodos = [...todos];
    updatedTodos[foundIndex] = updatedTodo;
    dispatch(setTodos(updatedTodos));
  };

  return (
    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-xl">
      <h1 className="font-semibold text-2xl pb-5">All todos</h1>
      <ul className="divide-y divide-gray-100">
        {todos.length > 0 ? (
          todos.map((todo) => (
            <li key={todo.id} className="flex justify-between gap-x-6 py-5">
              <div className="flex gap-x-4 w-full">
                <div className="min-w-0 flex items-center justify-between w-full">
                  <div>
                    <p
                      className={`text-sm font-semibold leading-6 text-indigo-500 ${
                        todo.isCompleted ? "line-through text-indigo-300" : null
                      } `}
                    >
                      {todo.title}
                    </p>
                    <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                      {todo.createdAt}
                    </p>
                  </div>
                  {todo.isCompleted ? (
                    <span className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                      Completed
                    </span>
                  ) : (
                    <span className="inline-flex items-center rounded-md bg-purple-50 px-2 py-1 text-xs font-medium text-purple-700 ring-1 ring-inset ring-purple-700/10">
                      Incompleted
                    </span>
                  )}
                  <div className="flex items-center gap-1">
                    <MdOutlineDone
                      className="text-xl text-blue-600 cursor-pointer"
                      onClick={() => handleCompleted(todo.id)}
                    />
                    <AiOutlineEdit className="text-xl text-green-600 cursor-pointer" />
                    <AiFillDelete className="text-xl text-red-600 cursor-pointer" />
                  </div>
                </div>
              </div>
            </li>
          ))
        ) : (
          <p className="text-center text-slate-500">Nothing found!!</p>
        )}
      </ul>
    </div>
  );
};
