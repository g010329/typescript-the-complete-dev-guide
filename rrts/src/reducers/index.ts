import { combineReducers } from "redux";
import { todosReducer } from "./todos";
import { Todo } from "../actions";

export interface StoreState {
  todos: Todo[];
}

export const reducers = combineReducers<StoreState>({ todos: todosReducer });

// 此處檢查 todos的值todoReducer回傳值型別是 Todos[]
