import { SortingFields, TodoInterface } from "../@types/interface";

const options: Intl.DateTimeFormatOptions = {
  weekday: "long",
  day: "numeric",
  month: "long",
  year: "numeric",
};

export const getDate = (dateInISO: Date) => {
  return dateInISO.toLocaleString("en-US", options);
};

/*
 * handle debounce techniques. Here callbackFn is function passed as an argument
 * and that function contains logic to fetch data from server
 */
export const debounce = (callbackFn: any, delay: number = 1000) => {
  let timer: NodeJS.Timer;

  return function (...args: any) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      callbackFn(...args);
    }, delay);
  };
};

export const sortTodos = (selectedValue: string, todos: TodoInterface[]) => {
  if (selectedValue === "none") return todos;
  let sortedItems: TodoInterface[] = [];

  if (
    selectedValue === SortingFields.pending ||
    selectedValue === SortingFields.completed
  ) {
    sortedItems = todos.filter((todo) => {
      return selectedValue === SortingFields.pending
        ? todo.isCompleted === false
        : todo.isCompleted === true;
    });
  }

  // if (selectedValue === SortingFields.asc) {
  //   sortedItems = todos.sort((a, b) => {
  //     let first = a.title.toLowerCase();
  //     let second = b.title.toLowerCase();

  //     if (first < second) {
  //       return -1;
  //     }
  //     if (first > second) {
  //       return 1;
  //     }
  //     return 0;
  //   });
  // }

  return sortedItems;
};
