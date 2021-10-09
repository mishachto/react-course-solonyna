import { Reducer as IReducer } from "redux";
import { authActionTypes, IAuthState } from ".";
import { ACTION_FAILURE_REQUEST } from "@shared/";

const initialstate: IAuthState = {
  error: null,
  loading: false,
  authUser: null,
  isAuthentificate: false,
  token: null,
};

export const authReducer: IReducer<IAuthState> = (state: IAuthState = initialstate, action) => {
  switch (action.type) {
    case authActionTypes.SIGN_IN.REQUEST:
    case authActionTypes.SIGN_UP.REQUEST:
    case authActionTypes.SIGN_OUT.REQUEST:
    case authActionTypes.ACCOUNT_ACTIVATION.REQUEST:
    case authActionTypes.FORGOT_PASSWORD.REQUEST:
    case authActionTypes.RESET_PASSWORD.REQUEST:
      return { ...state, loading: true, error: null };

    case authActionTypes.RESET_PASSWORD.SUCCESS:
    case authActionTypes.SIGN_IN.SUCCESS:
    case authActionTypes.ACCOUNT_ACTIVATION.SUCCESS:
      const { user, token } = action.payload;
      return {
        ...state,
        loading: false,
        isAuthentificate: true,
        authUser: user,
        token: token,
      };

    case authActionTypes.FORGOT_PASSWORD.SUCCESS:
    case authActionTypes.SIGN_UP.SUCCESS:
      return { ...state, loading: false };

    case authActionTypes.SIGN_OUT.SUCCESS:
      return initialstate;

    case authActionTypes.SIGN_IN.FAILURE:
    case authActionTypes.SIGN_UP.FAILURE:
    case authActionTypes.SIGN_OUT.FAILURE:
    case authActionTypes.ACCOUNT_ACTIVATION.FAILURE:
    case authActionTypes.FORGOT_PASSWORD.FAILURE:
    case authActionTypes.RESET_PASSWORD.FAILURE:
      return { ...state, loading: true, error: action.payload.error };

    default:
      return state;
  }
};
