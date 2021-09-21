import { createActionTypes } from "@utils/";

export const ACTION_TYPES = ["FETCH_TODOS", "FETCH_TODO", "ADD_TODO", "EDIT_TODO", "REMOVE_TODO"];
export const todosActionTypes = createActionTypes(ACTION_TYPES);
