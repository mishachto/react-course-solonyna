import { ITodosState, IUserState, IAuthState } from "@containers/";

export interface IAppSstate {
  todosReducer: ITodosState;
  usersReducer: IUserState;
  authReducer: IAuthState;
}

export enum EOrder {
  ASC = "ASC",
  DESC = "DESC",
}
