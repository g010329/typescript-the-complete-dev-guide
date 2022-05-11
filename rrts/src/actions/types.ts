import { FetchedTodosAction, DeleteTodoAction } from "./todos";

export enum ActionTypes {
  fetchTodos,
  deleteTodo,
}

export type Action = FetchedTodosAction | DeleteTodoAction;
