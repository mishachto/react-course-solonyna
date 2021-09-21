import { createSelector } from "reselect";
import { ITodosState } from "@containers/";

interface IAppSstate {
  todos: ITodosState;
}

const selectTodos = (state: IAppSstate) => state.todos;

export const getTodos = () => createSelector(selectTodos, (state) => state.todos);
export const getTodo = () => createSelector(selectTodos, (state) => state.todo);
