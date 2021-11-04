import { createSelector } from "reselect";
import { IAppSstate } from "@shared/";

const selectTodos = (state: IAppSstate) => state.todosReducer;

export const getTodos = () => createSelector(selectTodos, (state) => state.todos);
export const getTodo = () => createSelector(selectTodos, (state) => state.todo);


export const getFilteredTodos = () =>
    createSelector(selectTodos, ({ todos, filterSettings: { completed } }) => {
        return completed !== null ? todos.filter((t) => t.completed === completed) : todos;
    });

export const getNotCompletedTodos = () =>
    createSelector(selectTodos, (state) => {
        return state.todos.filter((t) => !t.completed);
    });
