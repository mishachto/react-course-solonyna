import { IAppSstate } from "@shared/*";
import { createSelector } from "reselect";

const selectUsers = (state: IAppSstate) => state.usersReducer;

export const getUsers = () => createSelector(selectUsers, (state) => state.users);
export const getUser = () => createSelector(selectUsers, (state) => state.user);

export const getUserFilterSettings = () => createSelector(selectUsers, (state) => state.filterSettings);
export const getFiltredUSers = () =>
  createSelector(selectUsers, (state) => {
    const {
      users,
      filterSettings: { search },
    } = state;
    return users.filter((user) =>
      Object.values(user)
        .filter((value) => !!value)
        .some((value) => value.toLowerCase().trim().includes(search.toLowerCase().trim())),
    );
  });
