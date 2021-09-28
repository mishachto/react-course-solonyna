import { ITodosState, IUserState } from "@containers/";

export interface IAppSstate {
  todosReducer: ITodosState;
  usersReducer: IUserState;
}

