import { IAppSstate } from "@shared/*";
import { createSelector } from "reselect";

const selectUsers = (state: IAppSstate) => state.usersReducer;

export const getUsers = () => createSelector(selectUsers, (state) => state.users);