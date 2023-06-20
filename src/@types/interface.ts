export interface StateInterface {
  base: BaseSliceInterface;
}

export interface BaseSliceInterface {
  todos: TodoInterface[];
}

export interface TodoInterface extends TodoInputInterface {
  id: number;
  isCompleted: boolean;
  createdAt: string;
}

export interface TodosDataInterface {
  payload: TodoInterface[];
  type: string;
}

export interface TodoInputInterface {
  title: string;
  desc: string;
}
