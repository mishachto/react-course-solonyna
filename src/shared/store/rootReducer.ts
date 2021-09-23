import { connectRouter, RouterState } from "connected-react-router";
import { combineReducers, CombinedState, AnyAction } from "redux";
import { History } from "history";
import { todosReducer, ITodosState } from "@containers/";
import { IAppSstate } from "@shared/";

type TReducer = CombinedState<IAppSstate>;

export default (history: History) => {
  const rootReducer = combineReducers({
    todosReducer,
    router: connectRouter(history),
    // Other reducers
  });

  return (state: TReducer | undefined, action: AnyAction) => {
    return rootReducer(
      state as CombinedState<{ todosReducer: ITodosState; router: RouterState<unknown> }> | undefined,
      action,
    );
  };
};
