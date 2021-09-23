import { connectRouter } from "connected-react-router";
// react-router /todos/123/test/123?qwe=qweqw
// react-router-dom (core)
// connected-react-router
import { combineReducers, CombinedState, AnyAction } from "redux";
import { History } from "history";
import { todosReducer } from "../../containers/Todos/store/reducers";

type TReducer = CombinedState<any>;

export default (history: History) => {
  const rootReducer = combineReducers({
    todosReducer,
    router: connectRouter(history),
    // Other reducers
  });

  return (state: TReducer | undefined, action: AnyAction) => {
    return rootReducer(state, action);
  };
};
