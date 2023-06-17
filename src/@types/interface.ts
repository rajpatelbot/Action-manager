export interface StateInterface {
  base: BaseSliceInterface;
}

export interface BaseSliceInterface {
  todos: TodoInterface[];
}

export interface TodoInterface {
  id: number;
  title: string;
  isCompleted: boolean;
  createdAt: string;
}

export interface TodosDataInterface {
  payload: TodoInterface[];
  type: string;
}
