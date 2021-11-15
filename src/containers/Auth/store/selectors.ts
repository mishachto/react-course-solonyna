import { createSelector } from "reselect";
import { IAppSstate } from "@shared/";

const selectAuth = (state: IAppSstate) => state.authReducer;

export const getAuthUser = () => createSelector(selectAuth, (state) => state.authUser);
export const getModal = () => createSelector(selectAuth, (state) => state.modal);
