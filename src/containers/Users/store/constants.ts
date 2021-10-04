import { createActionTypes } from "@utils/";

export const USER_ACTION_TYPES = ["FETCH_USERS", "FETCH_USER", "ADD_USER", "EDIT_USER", "REMOVE_USER", "FILTER_USER"];
export const userActionTypes = createActionTypes(USER_ACTION_TYPES);
