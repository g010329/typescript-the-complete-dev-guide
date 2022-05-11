import { Todo, FetchedTodosAction, ActionTypes } from "../actions";

// state:Todo[] => state 的型別是含 Todo 的 Array
// =[] => 初始值是空 Array
// TODO: 此處限制 action: FetchedTodosAction 不符合實作情境
export const todosReducer = (
  state: Todo[] = [],
  action: FetchedTodosAction
) => {
  switch (action.type) {
    case ActionTypes.fetchTodos:
      return action.payload;
    default:
      return state;
  }
};
