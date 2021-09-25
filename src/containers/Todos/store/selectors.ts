import { createSelector } from "reselect";
import { IAppSstate } from "@shared/";

const selectTodos = (state: IAppSstate) => state.todosReducer;

export const getTodos = () => createSelector(selectTodos, (state) => state.todos);
export const getTodo = () => createSelector(selectTodos, (state) => state.todo);
