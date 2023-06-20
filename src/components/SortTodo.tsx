import React, { ChangeEvent, useState } from "react";
import { sortTodos } from "../utils/utils";
import { StateInterface } from "../@types/interface";
import { useSelector } from "react-redux";

const sortTypes = ["Completed", "Pending"];

export const SortTodo = ({ setFilteredTodos }: any) => {
  const [selectedSortType, setSelectedSortType] = useState<string>("");
  const todos = useSelector((state: StateInterface) => state.base.todos);

  const handleSelectionChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = e.target.value;
    setSelectedSortType(selectedValue);
    const sortedTodo = sortTodos(selectedValue, todos);
    setFilteredTodos(sortedTodo);
  };

  return (
    <select
      name="selectMenu"
      value={selectedSortType}
      onChange={(e) => handleSelectionChange(e)}
      className="border border-gray-300 px-2 py-1 rounded-md"
    >
      <option value="none">Select Value</option>
      {sortTypes.map((sortType, key) => (
        <option key={key} value={sortType}>
          {sortType}
        </option>
      ))}
    </select>
  );
};
