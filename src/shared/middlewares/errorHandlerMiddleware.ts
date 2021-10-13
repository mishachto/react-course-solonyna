import { Dispatch, AnyAction } from "redux";
import { authActionTypes, todosActionTypes } from "@containers/";
import { ACTION_FAILURE_REQUEST, IAppSstate } from "@shared/";
import { useReducer } from "react";

export const errorHandlerMiddleware = (data: { getState: () => IAppSstate; dispatch: Dispatch }) => {
  const { getState, dispatch } = data;
  return (next: (action: AnyAction) => void) => (action: AnyAction) => {
    const { payload, type } = action;

    const commonActionTypes = { ...todosActionTypes, ...authActionTypes };
    const onlyFailureActionTypes = Object.values(commonActionTypes).map((type) => type.FAILURE);

    if (onlyFailureActionTypes.includes(type)) {
      const state = getState();
      dispatch({ type: ACTION_FAILURE_REQUEST, payload: { ...state, loading: false, error: payload.error } });
    }

    return next(action);
  };
};
