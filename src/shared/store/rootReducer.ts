import { connectRouter, RouterState } from "connected-react-router";
import { combineReducers, CombinedState, AnyAction } from "redux";
import { History } from "history";
import { todosReducer, ITodosState, usersReducer, IUserState, IAuthState, authReducer } from "@containers/";
import { IAppSstate } from "@shared/";

type TReducer = CombinedState<IAppSstate>;

export default (history: History) => {
  const rootReducer = combineReducers({
    todosReducer,
    usersReducer,
    authReducer,
    router: connectRouter(history),
    // Other reducers
  });

  return (state: TReducer | undefined, action: AnyAction) => {
    return rootReducer(
      state as
        | CombinedState<{
            todosReducer: ITodosState;
            authReducer: IAuthState;
            usersReducer: IUserState;
            router: RouterState<unknown>;
          }>
        | undefined,
      action,
    );
  };
};
